<script lang="ts">
	import { page } from '$app/stores';
	import NavigationElement from './NavigationElement.svelte';
	import Contact from '../Contact.svelte';
</script>

<nav class="mx-auto flex w-full max-w-[1100px] items-center justify-between px-6 py-4">
	<a href="/" class="font-serif text-lg tracking-tight transition-opacity hover:opacity-70">
		Alex Bäuerle
	</a>

	<div class="flex items-center gap-6">
		<div class="hidden items-center gap-1 sm:flex">
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
			<NavigationElement
				name="Writing"
				href="/blog"
				active={$page.url.pathname.startsWith('/blog')}
			/>
			<NavigationElement name="CV" href="/cv" active={$page.url.pathname.startsWith('/cv')} />
		</div>

		<div class="flex items-center gap-0.5 opacity-60 transition-opacity hover:opacity-100">
			<Contact />
		</div>
	</div>
</nav>
