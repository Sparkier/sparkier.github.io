<script lang="ts">
	import Email from 'svelte-material-icons/Email.svelte';
	import Github from 'svelte-material-icons/Github.svelte';
	import Home from 'svelte-material-icons/Home.svelte';
	import Linkedin from 'svelte-material-icons/Linkedin.svelte';
	import School from 'svelte-material-icons/School.svelte';
	import Twitter from 'svelte-material-icons/Twitter.svelte';
	import Icon from '../Icon.svelte';
	import LinkElement from '../LinkElement.svelte';

	let { showLinks = true }: { showLinks?: boolean } = $props();
</script>

<div class="mt-4 flex flex-wrap items-center">
	<LinkElement href="https://a13x.io" blank={true}>
		<Icon icon={Home} downloadingPDF={!showLinks} />
		<span class="pl-1 pr-3">a13x.io</span>
	</LinkElement>
	<LinkElement href="mailto:alex@a13x.io">
		<Icon icon={Email} downloadingPDF={!showLinks} />
		<span class="pl-1 pr-3">alex@a13x.io</span>
	</LinkElement>
	<LinkElement href="https://www.github.com/sparkier" blank={true}>
		<Icon icon={Github} downloadingPDF={!showLinks} />
		<span class="pl-1 pr-3">Sparkier</span>
	</LinkElement>
	<LinkElement href="https://www.twitter.com/a13xba" blank={true}>
		<Icon icon={Twitter} downloadingPDF={!showLinks} />
		<span class="pl-1 pr-3">a13xba</span>
	</LinkElement>
	<LinkElement href="https://www.linkedin.com/in/alex-bauerle" blank={true}>
		<Icon icon={Linkedin} downloadingPDF={!showLinks} />
		<span class="pl-1 pr-3">Alex Bäuerle</span>
	</LinkElement>
	<LinkElement
		href="https://scholar.google.com/citations?user=131euyAAAAAJ&hl=en&oi=ao"
		blank={true}
	>
		<Icon icon={School} downloadingPDF={!showLinks} />
		<span class="pl-1 pr-3">Alex Bäuerle</span>
	</LinkElement>
</div>
