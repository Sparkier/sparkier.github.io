<script lang="ts">
	import Icon from './Icon.svelte';
	import LinkElement from './LinkElement.svelte';
	import { contacts } from '$lib/contacts';

	const activeContacts = ['email', 'school', 'github', 'twitter', 'linkedin'];
	const displayContacts = activeContacts
		.map((id) => contacts[id as keyof typeof contacts])
		.filter((c) => c !== undefined);
</script>

<div class="flex items-center justify-center gap-1">
	{#each displayContacts as contact}
		<LinkElement href={contact.href} blank={contact.blank}>
			<Icon icon={contact.icon} />
		</LinkElement>
	{/each}
</div>
