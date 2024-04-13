<script lang="ts">
	import Icon from '$lib/components/Icon.svelte';
	import LinkElement from '$lib/components/LinkElement.svelte';
	import { getFunProjects } from '$lib/helpers/projectsProvider';
</script>

<div class="flex flex-col gap-8">
	{#each getFunProjects() as project}
		<div class="flex items-start gap-4">
			<img
				src={project.imageSrc}
				alt={project.title}
				class="mt-2 max-w-[100px] rounded-lg object-contain"
			/>
			<div class="flex flex-col">
				<h3>{project.title}</h3>
				<div class="flex gap-1 pb-2">
					{#each project.links as link}
						<LinkElement href={link.link} blank>
							<Icon icon={link.icon} />
						</LinkElement>
					{/each}
				</div>
				<p class="text-justify">
					{project.abstract}
				</p>
			</div>
		</div>
	{/each}
</div>
