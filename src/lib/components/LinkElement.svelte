<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		href,
		blank = false,
		rel = 'noopener noreferrer',
		children
	}: { href: string; blank?: boolean; rel?: string; children: Snippet } = $props();
</script>

<a {href} target={blank ? '_blank' : undefined} {rel} class="flex items-center">
	{@render children()}
</a>
