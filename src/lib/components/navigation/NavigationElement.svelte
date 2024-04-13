<script lang="ts">
	let { name, href, active }: { name: string; href: string; active: boolean } = $props();
</script>

<a {href} class="p-2 text-xl {active ? 'dark:text-primary-dark text-primary' : ''}">{name}</a>
