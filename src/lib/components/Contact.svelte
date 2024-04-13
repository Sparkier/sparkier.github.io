<script lang="ts">
	import Email from 'svelte-material-icons/Email.svelte';
	import Github from 'svelte-material-icons/Github.svelte';
	import Linkedin from 'svelte-material-icons/Linkedin.svelte';
	import School from 'svelte-material-icons/School.svelte';
	import Twitter from 'svelte-material-icons/Twitter.svelte';
	import Icon from './Icon.svelte';
	import LinkElement from './LinkElement.svelte';
</script>

<div class="flex items-center justify-center gap-1">
	<LinkElement href="mailto:alex@a13x.io">
		<Icon icon={Email} />
	</LinkElement>
	<LinkElement href="https://scholar.google.com/citations?user=131euyAAAAAJ&hl=en&oi=ao" blank>
		<Icon icon={School} />
	</LinkElement>
	<LinkElement href="https://www.github.com/sparkier" blank>
		<Icon icon={Github} />
	</LinkElement>
	<LinkElement href="https://www.twitter.com/a13xba" blank>
		<Icon icon={Twitter} />
	</LinkElement>
	<LinkElement href="https://www.linkedin.com/in/alex-bauerle" blank>
		<Icon icon={Linkedin} />
	</LinkElement>
</div>
