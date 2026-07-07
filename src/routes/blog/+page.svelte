<script lang="ts">
	import { onMount } from 'svelte';
	import { blogEntries } from '$lib/helpers/blogProvider';

	const posts = blogEntries;

	let sectionsContainer: HTMLElement;

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						entry.target.classList.add('visible');
						observer.unobserve(entry.target);
					}
				}
			},
			{ threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
		);

		if (sectionsContainer) {
			const reveals = sectionsContainer.querySelectorAll('.reveal');
			reveals.forEach((el) => observer.observe(el));
		}

		return () => observer.disconnect();
	});
</script>

<svelte:head>
	<title>Writing — Alex Bäuerle</title>
	<meta
		name="description"
		content="Essays and opinionated takes by Alex Bäuerle on visualization, HCI, and AI."
	/>
</svelte:head>

<div bind:this={sectionsContainer} class="flex flex-col gap-6">
	<!-- Page Header -->
	<section class="section-shell reveal">
		<p class="eyebrow mb-2">What I think</p>
		<h2>Field Notes</h2>
		<p class="text-sm leading-relaxed text-text-muted">
			Essays and opinionated takes from working where visualization, HCI, and AI meet. These are my
			own views — I'd love to talk about any of them.
		</p>
	</section>

	<!-- Posts -->
	<section class="section-shell">
		<div class="reveal-stagger flex flex-col gap-4">
			{#each posts as post}
				<a
					href={`/blog/${post.slug}`}
					class="reveal group flex items-center gap-6 rounded-2xl border border-transparent bg-background-card/80 p-5 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-lg"
				>
					<span
						class="hidden shrink-0 font-serif text-3xl text-primary/30 transition-colors duration-300 group-hover:text-primary/60 sm:block"
					>
						✦
					</span>
					<div class="flex-1">
						<div class="flex items-center justify-between gap-4">
							<span
								class="font-semibold leading-snug transition-colors duration-300 group-hover:text-primary"
							>
								{post.title}
							</span>
							<span class="shrink-0 text-xs text-text-muted">
								{post.date.toLocaleDateString('en-US', {
									month: 'short',
									day: 'numeric',
									year: 'numeric'
								})}
							</span>
						</div>
						<p class="mt-1 text-sm leading-relaxed text-text-muted">
							{post.abstract}
						</p>
					</div>
				</a>
			{/each}
		</div>
	</section>
</div>
