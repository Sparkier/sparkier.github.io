<script lang="ts">
	import { twMerge } from 'tailwind-merge';

	let {
		icon: IconComponent,
		plain = false,
		downloadingPDF = false
	}: { icon: any; plain?: boolean; downloadingPDF?: boolean } = $props();
</script>

<div
	class={twMerge(
		`${downloadingPDF ? '-mb-3' : ''} ${plain ? '' : 'dark:text-primary-dark text-primary'}`,
		downloadingPDF && !plain ? 'dark:text-primary' : ''
	)}
>
	<IconComponent size="1.5em" />
</div>
