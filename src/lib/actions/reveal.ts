export interface RevealOptions {
	threshold?: number;
	rootMargin?: string;
	trigger?: unknown;
}

export function reveal(node: HTMLElement, options: RevealOptions = {}) {
	let currentThreshold = options?.threshold !== undefined ? options.threshold : 0.08;
	let currentRootMargin = options?.rootMargin || '0px 0px -30px 0px';
	let currentTrigger = options?.trigger;

	let observer: IntersectionObserver;

	const createObserver = (threshold: number, rootMargin: string) => {
		return new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						entry.target.classList.add('visible');
						observer.unobserve(entry.target);
					}
				}
			},
			{ threshold, rootMargin }
		);
	};

	const observeElements = (resetVisible = false) => {
		const reveals = node.querySelectorAll('.reveal');
		reveals.forEach((el) => {
			if (resetVisible) {
				el.classList.remove('visible');
			}
			if (!el.classList.contains('visible')) {
				observer.observe(el);
			}
		});
	};

	// Initialize observer
	observer = createObserver(currentThreshold, currentRootMargin);
	observeElements();

	return {
		update(newOptions?: RevealOptions) {
			const newThreshold = newOptions?.threshold !== undefined ? newOptions.threshold : 0.08;
			const newRootMargin = newOptions?.rootMargin || '0px 0px -30px 0px';
			const newTrigger = newOptions?.trigger;

			if (
				newThreshold !== currentThreshold ||
				newRootMargin !== currentRootMargin ||
				newTrigger !== currentTrigger
			) {
				if (observer) {
					observer.disconnect();
				}

				currentThreshold = newThreshold;
				currentRootMargin = newRootMargin;
				currentTrigger = newTrigger;

				observer = createObserver(currentThreshold, currentRootMargin);
				observeElements(true);
			} else {
				observeElements(false);
			}
		},
		destroy() {
			if (observer) {
				observer.disconnect();
			}
		}
	};
}
