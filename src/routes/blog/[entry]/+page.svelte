<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { getBlogEntries } from '$lib/helpers/blogProvider';
	import type { BlogEntry } from '$lib/types';
	import purify from 'isomorphic-dompurify';
	import { parse } from 'marked';

	let content = $state('');
	let sectionsContainer: HTMLElement;

	const entry = $derived(
		getBlogEntries().find((entry) => entry.content_md.replace('.md', '') === $page.params.entry)
	);

	$effect(() => {
		loadContent(entry);
	});

	async function loadContent(entry: BlogEntry | undefined) {
		if (!entry) return;
		const response = await fetch(`/blog_md/${entry.content_md}`);
		content = purify.sanitize(parse(await response.text()));
	}

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
	<title>{entry?.title ?? 'Post'} — Alex Bäuerle</title>
	<meta
		name="description"
		content={entry?.abstract ?? ''}
	/>
</svelte:head>

<div bind:this={sectionsContainer} class="flex flex-col gap-6">
	<!-- Post Header -->
	<section class="section-shell reveal">
		<a
			href="/blog"
			class="eyebrow mb-4 inline-flex items-center gap-1 transition-colors duration-200 hover:text-primary"
		>
			← Back to Field Notes
		</a>
		<h1 class="font-serif text-3xl sm:text-4xl">{entry?.title}</h1>
		<div class="mt-3 flex items-center gap-3">
			<div class="h-px w-8 bg-primary/30"></div>
			<span class="text-xs tracking-wide text-text-muted">
				{entry?.date.toLocaleDateString('en-US', {
					weekday: 'long',
					month: 'long',
					day: 'numeric',
					year: 'numeric'
				})}
			</span>
		</div>
	</section>

	<!-- Article Body -->
	<section class="section-shell reveal">
		<article
			class="prose max-w-none
				prose-headings:font-serif prose-headings:text-text
				prose-p:text-text-muted prose-p:leading-relaxed
				prose-a:text-primary prose-a:underline-offset-2 prose-a:transition-colors prose-a:duration-200 hover:prose-a:text-primary/70
				prose-strong:text-text
				prose-ol:text-text-muted prose-ul:text-text-muted
				prose-li:marker:text-primary/40
				prose-blockquote:border-primary/30 prose-blockquote:text-text-muted
				prose-code:rounded prose-code:bg-background-card prose-code:px-1.5 prose-code:py-0.5 prose-code:text-sm prose-code:text-text
				[&_a]:break-all [&_p]:whitespace-pre-wrap"
		>
			<!-- eslint-disable-next-line svelte/no-at-html-tags -->
			{@html content}
		</article>
	</section>
</div>
