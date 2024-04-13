<script lang="ts">
	import type { Education } from '$lib/types';
	import Icon from '../Icon.svelte';
	import LinkElement from '../LinkElement.svelte';

	let { educationElement, showLinks }: { educationElement: Education; showLinks: boolean } =
		$props();
</script>

<div class="relative flex flex-col pb-4">
	<h3 class={showLinks === false ? 'text-h3' : ''}>
		{educationElement.type} in {educationElement.subject} at {educationElement.institute}
	</h3>
	<p class="md:absolute md:right-0 md:top-0">
		{educationElement.timeframe}
	</p>
	<p>
		{educationElement.details}
	</p>
	{#if showLinks}
		<div class="flex">
			{#each educationElement.iconElements as iconElement}
				<LinkElement href={iconElement.icon.link} blank={true}>
					<Icon icon={iconElement.icon.icon} />
					<p class="pl-1 pr-3">
						{iconElement.description}
					</p>
				</LinkElement>
			{/each}
		</div>
	{/if}
</div>
