<script lang="ts">
	import type { Talk } from '$lib/types';
	import Icon from '../Icon.svelte';
	import LinkElement from '../LinkElement.svelte';

	let { talk, showLinks }: { talk: Talk; showLinks: boolean } = $props();
</script>

<div class="relative flex flex-col pb-4">
	<h3 class="max-w-[600px] {showLinks ? '' : 'text-h3'}">
		{talk.title}
	</h3>
	<p class="md:absolute md:right-0 md:top-0">
		{talk.date.toDateString()}
	</p>
	<div class="flex flex-wrap items-center">
		<p class="pr-3">
			{talk.venue}
		</p>
		{#if showLinks}
			{#each talk.links as link}
				<LinkElement href={link.link} blank>
					<Icon icon={link.icon} />
				</LinkElement>
			{/each}
		{/if}
	</div>
</div>
