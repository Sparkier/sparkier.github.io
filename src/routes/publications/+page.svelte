<script lang="ts">
	import Icon from '$lib/components/Icon.svelte';
	import LinkElement from '$lib/components/LinkElement.svelte';
	import { getResearchProjects } from '$lib/helpers/projectsProvider';

	let publications = getResearchProjects();
</script>

<div class="flex flex-col gap-8">
	{#each publications as publication}
		<div class="flex flex-col items-start gap-4 md:flex-row">
			<img
				src={publication.imageSrc}
				alt={publication.title}
				class="mt-2 max-w-[250px] rounded-lg object-contain"
			/>
			<div class="flex flex-col">
				<h3>
					{publication.title} ({publication.venue}, {publication.year})
				</h3>
				<p class="flex grow flex-wrap text-gray-500">
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
				<div class="link-item-container flex gap-1 py-2">
					{#each publication.links as link}
						<LinkElement href={link.link} blank>
							<Icon icon={link.icon} />
						</LinkElement>
					{/each}
				</div>
				<p class="text-justify">{publication.abstract}</p>
			</div>
		</div>
	{/each}
</div>
