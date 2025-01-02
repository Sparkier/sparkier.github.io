<script lang="ts">
	import { getBlogEntries } from '$lib/helpers/blogProvider';
</script>

<div class="flex flex-col gap-8">
	<p class="text-justify">
		I generally write about things that catch my curiosity. These are my own takes, I'd be happy to
		talk about any of this and don't claim to know everything.
	</p>
	<div class="flex flex-col gap-4">
		{#each getBlogEntries() as entry}
			<a href="/blog/{entry.content_md.replace('.md', '')}" class="flex flex-col">
				<span class="text-2xl font-bold hover:underline">{entry.title}</span>
				<span class="text-sm text-gray-500">{entry.date.toDateString()}</span>
				<p class="mt-1 text-gray-700">{entry.abstract}</p>
			</a>
		{/each}
	</div>
</div>
