<script lang="ts">
	import Icon from '../Icon.svelte';
	import LinkElement from '../LinkElement.svelte';
	import { contacts } from '$lib/contacts';

	let { showLinks = true }: { showLinks?: boolean } = $props();

	const activeContacts = ['home', 'email', 'github', 'twitter', 'linkedin', 'school'];
	const displayContacts = activeContacts
		.map((id) => contacts[id as keyof typeof contacts])
		.filter((c) => c !== undefined);
</script>

<div class="mt-4 flex flex-wrap items-center">
	{#each displayContacts as contact}
		<LinkElement href={contact.href} blank={contact.blank}>
			<Icon icon={contact.icon} downloadingPDF={!showLinks} />
			<span class="pl-1 pr-3">{contact.text}</span>
		</LinkElement>
	{/each}
</div>
