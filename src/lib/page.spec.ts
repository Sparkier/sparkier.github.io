import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render } from '@testing-library/svelte';
import Page from '../routes/+page.svelte';

class MockIntersectionObserver {
	observe() {}
	unobserve() {}
	disconnect() {}
}

describe('page animation leak', () => {
	let mockCtx: {
		scale: ReturnType<typeof vi.fn>;
		clearRect: ReturnType<typeof vi.fn>;
		beginPath: ReturnType<typeof vi.fn>;
		moveTo: ReturnType<typeof vi.fn>;
		lineTo: ReturnType<typeof vi.fn>;
		arcTo: ReturnType<typeof vi.fn>;
		closePath: ReturnType<typeof vi.fn>;
		fill: ReturnType<typeof vi.fn>;
		arc: ReturnType<typeof vi.fn>;
		stroke: ReturnType<typeof vi.fn>;
		globalAlpha: number;
		strokeStyle: string;
		lineWidth: number;
		fillStyle: string;
	};

	beforeEach(() => {
		document.body.innerHTML = '';
		vi.useFakeTimers();

		// Stub IntersectionObserver
		vi.stubGlobal('IntersectionObserver', MockIntersectionObserver);

		// Mock canvas getContext
		mockCtx = {
			scale: vi.fn(),
			clearRect: vi.fn(),
			beginPath: vi.fn(),
			moveTo: vi.fn(),
			lineTo: vi.fn(),
			arcTo: vi.fn(),
			closePath: vi.fn(),
			fill: vi.fn(),
			arc: vi.fn(),
			stroke: vi.fn(),
			globalAlpha: 1,
			strokeStyle: '#000000',
			lineWidth: 1,
			fillStyle: '#000000'
		};

		vi.spyOn(HTMLCanvasElement.prototype, 'getContext').mockReturnValue(
			mockCtx as unknown as CanvasRenderingContext2D
		);
		vi.spyOn(HTMLCanvasElement.prototype, 'getBoundingClientRect').mockReturnValue({
			width: 800,
			height: 600,
			top: 0,
			left: 0,
			right: 800,
			bottom: 600,
			x: 0,
			y: 0,
			toJSON: () => {}
		} as DOMRect);

		// Mock ResizeObserver
		globalThis.ResizeObserver = class MockResizeObserver {
			callback: (entries: ResizeObserverEntry[], observer: ResizeObserver) => void;
			constructor(callback: (entries: ResizeObserverEntry[], observer: ResizeObserver) => void) {
				this.callback = callback;
			}
			observe() {}
			unobserve() {}
			disconnect() {}
		};
	});

	afterEach(() => {
		vi.useRealTimers();
		vi.restoreAllMocks();
		vi.unstubAllGlobals();
	});

	it('should cleanly start the animation delay and cancel both the timeout and active animation frames on unmount', async () => {
		const spySetTimeout = vi.spyOn(globalThis, 'setTimeout');
		const spyClearTimeout = vi.spyOn(globalThis, 'clearTimeout');
		const spyRequestAnimationFrame = vi.spyOn(globalThis, 'requestAnimationFrame');
		const spyCancelAnimationFrame = vi.spyOn(globalThis, 'cancelAnimationFrame');

		// Render the page component
		const { unmount } = render(Page);

		// Check that setTimeout was called with 400ms delay to start the animation
		expect(spySetTimeout).toHaveBeenCalled();
		const timeoutCall = spySetTimeout.mock.calls.find((call) => call[1] === 400);
		expect(timeoutCall).toBeDefined();

		// Run timers past the 400ms delay to trigger the first draw and schedule next frame
		await vi.advanceTimersByTimeAsync(401);

		// Should have requested at least one animation frame
		expect(spyRequestAnimationFrame).toHaveBeenCalled();

		// Unmount the component (navigation away / destruction)
		unmount();

		// clearTimeout and cancelAnimationFrame must have been called to prevent resources leaking
		expect(spyClearTimeout).toHaveBeenCalled();
		expect(spyCancelAnimationFrame).toHaveBeenCalled();
	});

	it('should cancel pending animation startup if unmounted within 400ms', async () => {
		const spySetTimeout = vi.spyOn(globalThis, 'setTimeout');
		const spyClearTimeout = vi.spyOn(globalThis, 'clearTimeout');
		const spyRequestAnimationFrame = vi.spyOn(globalThis, 'requestAnimationFrame');
		const spyCancelAnimationFrame = vi.spyOn(globalThis, 'cancelAnimationFrame');

		// Render the page component
		const { unmount } = render(Page);

		// setTimeout is scheduled immediately on mount
		expect(spySetTimeout).toHaveBeenCalled();

		// Advance time by only 200ms (before animation starts)
		await vi.advanceTimersByTimeAsync(200);

		// Unmount before the 400ms startup delay
		unmount();

		// The pending setTimeout startup delay must be canceled
		expect(spyClearTimeout).toHaveBeenCalled();

		// Since we unmounted before 400ms, no animation frame should have been requested or canceled
		expect(spyRequestAnimationFrame).not.toHaveBeenCalled();
		expect(spyCancelAnimationFrame).not.toHaveBeenCalled();
	});
});
