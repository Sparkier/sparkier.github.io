import Email from 'svelte-material-icons/Email.svelte';
import Github from 'svelte-material-icons/Github.svelte';
import Home from 'svelte-material-icons/Home.svelte';
import Linkedin from 'svelte-material-icons/Linkedin.svelte';
import School from 'svelte-material-icons/School.svelte';
import Twitter from 'svelte-material-icons/Twitter.svelte';

export const contacts = {
	home: {
		id: 'home',
		icon: Home,
		href: 'https://a13x.io',
		text: 'a13x.io',
		blank: true
	},
	email: {
		id: 'email',
		icon: Email,
		href: 'mailto:alex@a13x.io',
		text: 'alex@a13x.io',
		blank: false
	},
	github: {
		id: 'github',
		icon: Github,
		href: 'https://www.github.com/sparkier',
		text: 'Sparkier',
		blank: true
	},
	twitter: {
		id: 'twitter',
		icon: Twitter,
		href: 'https://www.twitter.com/a13xba',
		text: 'a13xba',
		blank: true
	},
	linkedin: {
		id: 'linkedin',
		icon: Linkedin,
		href: 'https://www.linkedin.com/in/alex-bauerle',
		text: 'Alex Bäuerle',
		blank: true
	},
	school: {
		id: 'school',
		icon: School,
		href: 'https://scholar.google.com/citations?user=131euyAAAAAJ&hl=en&oi=ao',
		text: 'Alex Bäuerle',
		blank: true
	}
};
