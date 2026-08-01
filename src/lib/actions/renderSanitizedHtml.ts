import purify from 'isomorphic-dompurify';
import type { Action } from 'svelte/action';

export const renderSanitizedHtml: Action<HTMLElement, string> = (node, html) => {
	const fragment = purify.sanitize(html, { RETURN_DOM_FRAGMENT: true });
	node.replaceChildren(fragment);

	return {
		update(newHtml: string) {
			const fragment = purify.sanitize(newHtml, { RETURN_DOM_FRAGMENT: true });
			node.replaceChildren(fragment);
		}
	};
};
