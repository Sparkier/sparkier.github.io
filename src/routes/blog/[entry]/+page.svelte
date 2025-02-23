<script lang="ts">
	import { page } from '$app/stores';
	import { getBlogEntries } from '$lib/helpers/blogProvider';
	import type { BlogEntry } from '$lib/types';
	import purify from 'isomorphic-dompurify';
	import { parse } from 'marked';

	let content = $state('');

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
</script>

<div class="flex flex-col gap-2">
	<h1>{entry?.title}</h1>
	<p class="text-sm text-gray-500">{entry?.date.toDateString()}</p>
	<article class="prose max-w-none [&_a]:break-all [&_p]:whitespace-pre-wrap">
		<!-- eslint-disable-next-line svelte/no-at-html-tags -->
		{@html content}
	</article>
</div>
