<script lang="ts">
	import Icon from './Icon.svelte';
	import LinkElement from './LinkElement.svelte';
	import { contactsById } from '$lib/contacts';

	let {
		variant = 'icon-only',
		showLinks = true
	}: {
		variant?: 'icon-only' | 'labeled';
		showLinks?: boolean;
	} = $props();

	let activeContacts = $derived(
		variant === 'icon-only'
			? ['email', 'school', 'github', 'twitter', 'linkedin']
			: ['home', 'email', 'github', 'twitter', 'linkedin', 'school']
	);

	let displayContacts = $derived(
		activeContacts.map((id) => contactsById[id]).filter((c) => c !== undefined)
	);
</script>

<div
	class={variant === 'icon-only'
		? 'flex items-center justify-center gap-1'
		: 'mt-4 flex flex-wrap items-center'}
>
	{#each displayContacts as contact}
		{#if showLinks}
			<LinkElement href={contact.href} blank={contact.blank}>
				<Icon icon={contact.icon} downloadingPDF={!showLinks} />
				{#if variant === 'labeled'}
					<span class="pl-1 pr-3">{contact.text}</span>
				{/if}
			</LinkElement>
		{:else}
			<span class="flex items-center">
				<Icon icon={contact.icon} downloadingPDF={!showLinks} />
				{#if variant === 'labeled'}
					<span class="pl-1 pr-3">{contact.text}</span>
				{/if}
			</span>
		{/if}
	{/each}
</div>
