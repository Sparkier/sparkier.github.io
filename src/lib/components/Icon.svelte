<script lang="ts">
	import type Icon from 'svelte-material-icons/Github.svelte';
	import { twMerge } from 'tailwind-merge';

	let {
		icon,
		plain = false,
		downloadingPDF = false
	}: { icon: typeof Icon; plain?: boolean; downloadingPDF?: boolean } = $props();
</script>

<div
	class={twMerge(
		`${downloadingPDF ? '-mb-3' : ''} ${plain ? '' : 'dark:text-primary-dark text-primary'}`,
		downloadingPDF && !plain ? 'dark:text-primary' : ''
	)}
>
	<svelte:component this={icon} size="1.5em" />
</div>
