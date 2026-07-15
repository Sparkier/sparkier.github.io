<script lang="ts">
	import { page } from '$app/stores';
	import NavigationElement from './NavigationElement.svelte';
	import Contact from '../Contact.svelte';
</script>

{#snippet navLinks()}
	<NavigationElement name="Home" href="/" active={$page.url.pathname === '/'} />
	<NavigationElement
		name="Papers"
		href="/publications"
		active={$page.url.pathname.startsWith('/publications')}
	/>
	<NavigationElement
		name="Projects"
		href="/projects"
		active={$page.url.pathname.startsWith('/projects')}
	/>
	<NavigationElement name="Writing" href="/blog" active={$page.url.pathname.startsWith('/blog')} />
	<NavigationElement name="CV" href="/cv" active={$page.url.pathname.startsWith('/cv')} />
{/snippet}

<nav class="mx-auto flex w-full max-w-[1100px] flex-col px-6 py-4">
	<div class="flex items-center justify-between">
		<a href="/" class="font-serif text-lg tracking-tight transition-opacity hover:opacity-70">
			Alex Bäuerle
		</a>

		<div class="flex items-center gap-6">
			<div class="hidden items-center gap-1 sm:flex">
				{@render navLinks()}
			</div>

			<div class="flex items-center gap-0.5 opacity-60 transition-opacity hover:opacity-100">
				<Contact />
			</div>
		</div>
	</div>

	<!-- Mobile horizontal scroll navigation -->
	<div
		class="flex items-center gap-2 overflow-x-auto whitespace-nowrap scroll-smooth pt-3 sm:hidden no-scrollbar -mx-6 px-6"
	>
		{@render navLinks()}
	</div>
</nav>

<style>
	.no-scrollbar {
		scrollbar-width: none; /* Firefox */
		-ms-overflow-style: none; /* IE 10+ */
	}
	.no-scrollbar::-webkit-scrollbar {
		display: none; /* Safari and Chrome */
	}
</style>
