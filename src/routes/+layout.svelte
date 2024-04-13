<script lang="ts">
	import { onNavigate } from '$app/navigation';
	import Contact from '$lib/components/Contact.svelte';
	import Navigation from '$lib/components/navigation/Navigation.svelte';
	import '../app.css';

	let { children } = $props();

	let windowWidth = $state(0);
	let windowShare = $derived((windowWidth / 12) * 2);
	let picHeight = $derived(Math.max(Math.min(150, windowShare), 130));
	let headHeight = $derived(picHeight + 80);

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

<svelte:window bind:innerWidth={windowWidth} />
<main
	class="text-text dark:text-text-dark bg-background dark:bg-background-dark relative flex h-screen w-screen flex-col items-center overflow-auto"
>
	<div class="dark:bg-background-dark bg-background fixed left-0 right-0 top-0 z-10 bg-opacity-95">
		<Navigation {picHeight} {windowWidth} />
		<Contact />
	</div>
	<div
		class="m-auto flex max-w-[1000px] items-center justify-center px-4 pb-16"
		style={`${`margin-top: ${headHeight}px;`}`}
	>
		{@render children()}
	</div>
</main>
