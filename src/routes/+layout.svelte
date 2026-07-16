<script lang="ts">
	import { onNavigate } from '$app/navigation';
	import { page } from '$app/stores';
	import Navigation from '$lib/components/navigation/Navigation.svelte';
	import NetworkCanvas from '$lib/components/NetworkCanvas.svelte';
	import '../app.css';

	let { children } = $props();

	$effect(() => {
		$page.url.pathname;
	});

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>

<main
	class="relative flex min-h-screen w-full flex-col items-center overflow-x-hidden bg-background font-sans text-text"
>
	<!-- Page-wide canvas background -->
	<div class="fixed inset-0 z-0">
		<NetworkCanvas />
	</div>

	<!-- Header -->
	<div class="fixed left-0 right-0 top-0 z-20 bg-background/70 backdrop-blur-lg">
		<Navigation />
	</div>

	{#if $page.url.pathname === '/'}
		<!-- Homepage: full bleed -->
		<div class="relative z-10 w-full">
			{@render children()}
		</div>
	{:else}
		<!-- Sub-pages: constrained layout -->
		<div
			class="relative z-10 mx-auto flex w-full max-w-[1000px] justify-center px-4 pb-16 mt-[110px] sm:mt-[80px]"
		>
			<div class="page-shell">
				{@render children()}
			</div>
		</div>
	{/if}
</main>
