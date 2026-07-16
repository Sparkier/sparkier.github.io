export interface RevealOptions {
	threshold?: number;
	rootMargin?: string;
	trigger?: unknown;
}

export function reveal(
	node: HTMLElement,
	options: RevealOptions = { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
) {
	const observerOptions = {
		threshold: options?.threshold !== undefined ? options.threshold : 0.08,
		rootMargin: options?.rootMargin || '0px 0px -30px 0px'
	};

	const observer = new IntersectionObserver((entries) => {
		for (const entry of entries) {
			if (entry.isIntersecting) {
				entry.target.classList.add('visible');
				observer.unobserve(entry.target);
			}
		}
	}, observerOptions);

	const observeElements = () => {
		const reveals = node.querySelectorAll('.reveal');
		reveals.forEach((el) => {
			if (!el.classList.contains('visible')) {
				observer.observe(el);
			}
		});
	};

	observeElements();

	return {
		update() {
			observeElements();
		},
		destroy() {
			observer.disconnect();
		}
	};
}
