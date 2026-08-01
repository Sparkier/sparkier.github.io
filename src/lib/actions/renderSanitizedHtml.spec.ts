import { renderSanitizedHtml } from './renderSanitizedHtml';
import { describe, it, expect, beforeEach } from 'vitest';

describe('renderSanitizedHtml action', () => {
	let node: HTMLElement;

	beforeEach(() => {
		node = document.createElement('div');
	});

	it('should sanitize and render HTML', () => {
		renderSanitizedHtml(node, '<h1>Hello</h1><script>alert("xss")</script>');
		expect(node.innerHTML).toBe('<h1>Hello</h1>');
	});

	it('should update the HTML', () => {
		const action = renderSanitizedHtml(node, '<h1>Hello</h1>');
		expect(node.innerHTML).toBe('<h1>Hello</h1>');

		if (action && action.update) {
			action.update('<h2>World</h2>');
		}
		expect(node.innerHTML).toBe('<h2>World</h2>');
	});
});
