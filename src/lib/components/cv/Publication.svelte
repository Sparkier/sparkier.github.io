<script lang="ts">
	import type { ResearchProject } from '$lib/types';
	import Icon from '../Icon.svelte';
	import LinkElement from '../LinkElement.svelte';

	let { publication, showLinks = true }: { publication: ResearchProject; showLinks?: boolean } =
		$props();
</script>

<div class="flex flex-col pb-4">
	<h3 class={showLinks === false ? 'text-h3' : ''}>
		{publication.title}
	</h3>
	<div class="flex items-center">
		<span class="pr-3">
			{publication.venue}, {publication.year}
		</span>
		{#if showLinks}
			<div class="flex">
				{#each publication.links as link}
					<LinkElement href={link.link} blank>
						<Icon icon={link.icon} />
					</LinkElement>
				{/each}
			</div>
		{/if}
	</div>
	<p class="flex grow flex-wrap text-sm text-gray-500">
		{#each publication.authors as author, index}
			{@const length = publication.authors.length}
			{@const succeeding = index === length - 1 ? '' : ','}
			{@const andConnector = index === length - 2 ? 'and' : ''}
			<span class={author === 'Alex Bäuerle' ? 'font-bold' : ''}>
				{author}
			</span>
			<span class={succeeding !== '' ? 'pr-1' : ''}>{succeeding}</span>
			<span class={andConnector !== '' ? 'pr-1' : ''}>{andConnector}</span>
		{/each}
	</p>
</div>
