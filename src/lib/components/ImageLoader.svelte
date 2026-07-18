<script lang="ts">
	import { onMount } from 'svelte';

	// Props
	export let src: string;
	export let alt: string = '';
	export let dimensions: { width: number; height: number } | undefined = undefined;
	export let className: string = '';
	export let imageClassName: string = '';

	// State
	let loaded = false;
	let error = false;

	// Normalize path so nested routes (e.g., /publications/paper-name) don't break relative paths
	$: normalizedSrc = src.startsWith('/') || src.startsWith('http') ? src : `/${src}`;

	// Calculate aspect ratio string if dimensions exist
	$: aspectRatio = dimensions ? `${dimensions.width} / ${dimensions.height}` : 'auto';

	function handleLoad() {
		loaded = true;
	}

	function handleError() {
		error = true;
		loaded = true;
	}
</script>

<div
	class="relative w-full overflow-hidden {className}"
	style="aspect-ratio: {aspectRatio};"
>
	<!-- Skeleton Loader -->
	{#if !loaded && !error}
		<div
			class="absolute inset-0 bg-primary/10 animate-pulse"
			aria-hidden="true"
		></div>
	{/if}

	<!-- Actual Image -->
	<img
		src={normalizedSrc}
		{alt}
		on:load={handleLoad}
		on:error={handleError}
		class="absolute inset-0 h-full w-full object-contain transition-all duration-700 ease-in-out {loaded && !error ? 'opacity-100' : 'opacity-0'} {imageClassName}"
	/>
</div>
