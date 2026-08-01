<script lang="ts">
	// Props
	export let src: string;
	export let alt: string = '';
	export let dimensions: { width: number; height: number } | undefined = undefined;
	export let className: string = '';
	export let imageClassName: string = '';

	// Whether the image has finished loading — used only to hide the skeleton.
	// The image itself is never gated on this, so it can't get stuck hidden.
	let loaded = false;

	// Normalize path so nested routes (e.g., /publications/paper-name) don't break relative paths
	$: normalizedSrc = src.startsWith('/') || src.startsWith('http') ? src : `/${src}`;

	// Reserve the exact aspect ratio so the box holds its height before the image
	// loads, eliminating layout shift.
	$: aspectRatio = dimensions ? `${dimensions.width} / ${dimensions.height}` : 'auto';

	function markLoaded() {
		loaded = true;
	}

	// Cached or server-rendered images can finish loading before the `load` listener
	// is attached, so reconcile the state on mount by inspecting the element directly.
	function trackLoad(node: HTMLImageElement) {
		if (node.complete) markLoaded();
	}
</script>

<div class="relative w-full overflow-hidden {className}" style="aspect-ratio: {aspectRatio};">
	<!-- Skeleton placeholder, shown behind the image until it has loaded -->
	{#if !loaded}
		<div class="absolute inset-0 animate-pulse bg-primary/10" aria-hidden="true"></div>
	{/if}

	<!-- Actual image: always visible, covers the skeleton once it paints -->
	<img
		src={normalizedSrc}
		{alt}
		use:trackLoad
		on:load={markLoaded}
		on:error={markLoaded}
		class="absolute inset-0 h-full w-full object-contain {imageClassName}"
	/>
</div>
