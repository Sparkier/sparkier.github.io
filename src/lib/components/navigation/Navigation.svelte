<script lang="ts">
	import { page } from '$app/stores';
	import NavigationElement from './NavigationElement.svelte';

	let { picHeight, windowWidth }: { picHeight: number; windowWidth: number } = $props();
</script>

<div class="flex flex-nowrap items-center justify-center gap-4">
	<div
		class="flex flex-wrap items-end justify-end"
		style="width: {(windowWidth - picHeight) / 2}px;"
	>
		<NavigationElement
			name="Papers"
			href="/publications"
			active={$page.url.pathname.includes('publications')}
		/>
		<NavigationElement
			name="Research"
			href="/research"
			active={$page.url.pathname.includes('research')}
		/>
	</div>
	<div class="my-3" style="width: {picHeight}px; height: {picHeight}px;">
		<a href="/">
			<img
				class="rounded-full"
				style="width: {picHeight}px; height: {picHeight}px;"
				src="/images/alex.jpeg"
				alt="Alex Bäuerle"
			/>
		</a>
	</div>
	<div class="flex flex-wrap" style="width: {(windowWidth - picHeight) / 2}px;">
		<NavigationElement
			name="Projects"
			href="/projects"
			active={$page.url.pathname.includes('projects')}
		/>
		<NavigationElement name="CV" href="/cv" active={$page.url.pathname.includes('cv')} />
	</div>
</div>
