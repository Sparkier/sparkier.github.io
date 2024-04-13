<script lang="ts">
	import type { Snippet } from 'svelte';
	import { twMerge } from 'tailwind-merge';

	let { children, classNames = '' }: { children: Snippet; classNames?: string } = $props();
</script>

<div class={twMerge('pb-3', classNames)}>
	{@render children()}
</div>
