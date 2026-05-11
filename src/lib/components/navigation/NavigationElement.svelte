<script lang="ts">
	let { name, href, active }: { name: string; href: string; active: boolean } = $props();
</script>

<a
	{href}
	class="nav-link text-[0.7rem] font-medium uppercase tracking-[0.1em] text-text-muted transition-colors hover:text-primary"
	class:text-primary={active}
	class:active
>
	{name}
</a>

<style>
	.nav-link {
		position: relative;
		padding: 0.25rem 0.5rem;
	}
	.nav-link::after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0.5rem;
		right: 0.5rem;
		height: 1px;
		background: var(--color-primary, #e8654a);
		transform: scaleX(0);
		transition: transform 0.3s ease;
	}
	.nav-link:hover::after,
	.nav-link.active::after {
		transform: scaleX(1);
	}
</style>
