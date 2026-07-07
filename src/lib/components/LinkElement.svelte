<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		href,
		blank = false,
		children
	}: { href: string; blank?: boolean; children: Snippet } = $props();
</script>

<a {href} target={blank ? '_blank' : undefined} rel="noopener noreferrer" class="flex items-center">
	{@render children()}
</a>
