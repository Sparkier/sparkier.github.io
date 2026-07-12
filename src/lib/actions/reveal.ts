export function reveal(
	node: HTMLElement,
	options = { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
) {
	const observer = new IntersectionObserver((entries) => {
		for (const entry of entries) {
			if (entry.isIntersecting) {
				entry.target.classList.add('visible');
				observer.unobserve(entry.target);
			}
		}
	}, options);

	const reveals = node.querySelectorAll('.reveal');
	reveals.forEach((el) => observer.observe(el));

	return {
		destroy() {
			observer.disconnect();
		}
	};
}
