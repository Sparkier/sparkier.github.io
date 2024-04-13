<script lang="ts">
	import type { Work } from '../../types';
	import Icon from '../Icon.svelte';

	let { employment, showLinks = true }: { employment: Work; showLinks: boolean } = $props();
</script>

<div class="relative flex flex-col pb-4">
	<div class="flex items-center">
		<Icon icon={employment.icon} plain downloadingPDF={!showLinks} />
		<h3 class="pl-2 {showLinks ? '' : 'text-h3'}">
			{employment.title}
		</h3>
	</div>
	<p class="md:absolute md:right-0 md:top-0">
		{employment.timeframe}
	</p>
	<p>
		{employment.abstract}
	</p>
</div>
