<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import type { Component } from 'svelte';

	let {
		icon: IconComponent,
		plain = false,
		downloadingPDF = false
	}: {
		icon: Component<{ size?: string }> | unknown;
		plain?: boolean;
		downloadingPDF?: boolean;
	} = $props();
</script>

<div
	class={twMerge(
		`${downloadingPDF ? '-mb-3' : ''} ${plain ? '' : 'dark:text-primary-dark text-primary'}`,
		downloadingPDF && !plain ? 'dark:text-primary' : ''
	)}
>
	{#if IconComponent}
		{@const TypedIcon = IconComponent as Component<{ size?: string }>}
		<TypedIcon size="1.5em" />
	{/if}
</div>
