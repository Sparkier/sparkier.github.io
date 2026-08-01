import { vi, describe, it, expect, beforeEach } from 'vitest';
import { reveal } from './reveal';

let observerInstances: MockIntersectionObserver[] = [];

class MockIntersectionObserver {
	callback: IntersectionObserverCallback;
	options: IntersectionObserverInit | undefined;
	observedElements: Set<Element> = new Set();
	disconnected = false;

	constructor(callback: IntersectionObserverCallback, options?: IntersectionObserverInit) {
		this.callback = callback;
		this.options = options;
		observerInstances.push(this);
	}

	observe(element: Element) {
		this.observedElements.add(element);
	}

	unobserve(element: Element) {
		this.observedElements.delete(element);
	}

	disconnect() {
		this.disconnected = true;
		this.observedElements.clear();
	}

	// Helper to simulate intersection
	triggerIntersect(element: Element, isIntersecting: boolean) {
		const entry = {
			target: element,
			isIntersecting,
			boundingClientRect: {} as DOMRectReadOnly,
			intersectionRatio: isIntersecting ? 1 : 0,
			intersectionRect: {} as DOMRectReadOnly,
			rootBounds: null,
			time: Date.now()
		} as IntersectionObserverEntry;
		this.callback([entry], this as unknown as IntersectionObserver);
	}
}

// Stub global IntersectionObserver
vi.stubGlobal('IntersectionObserver', MockIntersectionObserver);

describe('reveal action', () => {
	let container: HTMLDivElement;
	let child1: HTMLDivElement;
	let child2: HTMLDivElement;

	beforeEach(() => {
		observerInstances = [];
		document.body.innerHTML = '';

		container = document.createElement('div');
		child1 = document.createElement('div');
		child1.className = 'reveal';
		child2 = document.createElement('div');
		child2.className = 'reveal';

		container.appendChild(child1);
		container.appendChild(child2);
		document.body.appendChild(container);
	});

	it('should initialize with default parameters and observe reveal elements', () => {
		const action = reveal(container);

		expect(observerInstances.length).toBe(1);
		const observer = observerInstances[0];
		expect(observer.options).toEqual({
			threshold: 0.08,
			rootMargin: '0px 0px -30px 0px'
		});
		expect(observer.observedElements.has(child1)).toBe(true);
		expect(observer.observedElements.has(child2)).toBe(true);

		action.destroy();
	});

	it('should initialize with custom parameters if supplied', () => {
		const action = reveal(container, { threshold: 0.5, rootMargin: '10px 10px 10px 10px' });

		expect(observerInstances.length).toBe(1);
		const observer = observerInstances[0];
		expect(observer.options).toEqual({
			threshold: 0.5,
			rootMargin: '10px 10px 10px 10px'
		});

		action.destroy();
	});

	it('should add visible class and stop observing when intersecting', () => {
		const action = reveal(container);
		const observer = observerInstances[0];

		expect(child1.classList.contains('visible')).toBe(false);

		// Trigger intersection
		observer.triggerIntersect(child1, true);

		expect(child1.classList.contains('visible')).toBe(true);
		expect(observer.observedElements.has(child1)).toBe(false);

		action.destroy();
	});

	it('should rebuild the observer when threshold changes', () => {
		const action = reveal(container, { threshold: 0.08 });
		expect(observerInstances.length).toBe(1);
		const firstObserver = observerInstances[0];

		// Update threshold
		action.update({ threshold: 0.2 });

		expect(firstObserver.disconnected).toBe(true);
		expect(observerInstances.length).toBe(2);

		const secondObserver = observerInstances[1];
		expect(secondObserver.options?.threshold).toBe(0.2);
		expect(secondObserver.observedElements.has(child1)).toBe(true);
		expect(secondObserver.observedElements.has(child2)).toBe(true);

		action.destroy();
	});

	it('should rebuild the observer when rootMargin changes', () => {
		const action = reveal(container, { rootMargin: '0px 0px -30px 0px' });
		expect(observerInstances.length).toBe(1);
		const firstObserver = observerInstances[0];

		// Update rootMargin
		action.update({ rootMargin: '0px 0px -10px 0px' });

		expect(firstObserver.disconnected).toBe(true);
		expect(observerInstances.length).toBe(2);

		const secondObserver = observerInstances[1];
		expect(secondObserver.options?.rootMargin).toBe('0px 0px -10px 0px');

		action.destroy();
	});

	it('should rebuild the observer and reset visible classes when trigger changes', () => {
		const action = reveal(container, { trigger: true });
		const firstObserver = observerInstances[0];

		// Simulate child1 becoming visible
		firstObserver.triggerIntersect(child1, true);
		expect(child1.classList.contains('visible')).toBe(true);

		// Update trigger
		action.update({ trigger: false });

		expect(firstObserver.disconnected).toBe(true);
		expect(observerInstances.length).toBe(2);

		// Visible class should be removed on fresh scan
		expect(child1.classList.contains('visible')).toBe(false);

		const secondObserver = observerInstances[1];
		// Both elements should be observed again
		expect(secondObserver.observedElements.has(child1)).toBe(true);
		expect(secondObserver.observedElements.has(child2)).toBe(true);

		action.destroy();
	});

	it('should not rebuild the observer when options remain unchanged', () => {
		const action = reveal(container, { threshold: 0.08, rootMargin: '10px' });
		expect(observerInstances.length).toBe(1);

		// Update with same values
		action.update({ threshold: 0.08, rootMargin: '10px' });

		expect(observerInstances.length).toBe(1);
		expect(observerInstances[0].disconnected).toBe(false);

		action.destroy();
	});

	it('should scan for new elements even if options do not change', () => {
		const action = reveal(container);
		const observer = observerInstances[0];

		// Add a new reveal element
		const child3 = document.createElement('div');
		child3.className = 'reveal';
		container.appendChild(child3);

		expect(observer.observedElements.has(child3)).toBe(false);

		// Update with same options
		action.update();

		// Should scan and find the new element
		expect(observer.observedElements.has(child3)).toBe(true);

		action.destroy();
	});

	it('should cleanly disconnect the observer on destroy', () => {
		const action = reveal(container);
		const observer = observerInstances[0];

		expect(observer.disconnected).toBe(false);

		action.destroy();

		expect(observer.disconnected).toBe(true);
	});
});
