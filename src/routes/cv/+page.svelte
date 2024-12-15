<script lang="ts">
	import Icon from '$lib/components/Icon.svelte';
	import CvElement from '$lib/components/cv/CVElement.svelte';
	import Contact from '$lib/components/cv/Contact.svelte';
	import EducationElement from '$lib/components/cv/EducationElement.svelte';
	import Publication from '$lib/components/cv/Publication.svelte';
	import Talk from '$lib/components/cv/Talk.svelte';
	import Workplace from '$lib/components/cv/Workplace.svelte';
	import { getEducationElements } from '$lib/helpers/educationProvider';
	import { getFunding } from '$lib/helpers/fundingProvider';
	import { getMentorshipActivities } from '$lib/helpers/mentoringProvider';
	import { getResearchProjects } from '$lib/helpers/projectsProvider';
	import { getReviews } from '$lib/helpers/reviewProvider';
	import { getTalks } from '$lib/helpers/talkProvider';
	import { getLectures } from '$lib/helpers/teachingProvider';
	import { getWork } from '$lib/helpers/workProvider';
	import { onMount } from 'svelte';
	import Download from 'svelte-material-icons/Download.svelte';

	let container: HTMLDivElement;
	let showLinks = true;
	let html2pdf: any;

	onMount(async () => {
		const module = await import('html2pdf.js');
		html2pdf = module.default;
	});

	function exportCVPDF() {
		showLinks = false;
		var opt = {
			margin: 10,
			pagebreak: { mode: ['avoid-all', 'css', 'legacy'] },
			filename: 'cv_alex_baeuerle.pdf',
			image: { type: 'jpeg', quality: 1 },
			html2canvas: {
				dpi: 384,
				scale: 4,
				letterRendering: true,
				useCORS: true
			},
			jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
		};
		html2pdf()
			.set(opt)
			.from(container)
			.save()
			.then(() => {
				showLinks = true;
			});
	}
</script>

<div class="flex flex-col text-justify">
	<div class="flex flex-col" bind:this={container}>
		<CvElement>
			<div class="flex">
				<h1 class={showLinks === false ? 'text-text' : ''}>Alex Bäuerle</h1>
				{#if showLinks}
					<button
						on:click={exportCVPDF}
						class="invisible ml-auto flex items-center gap-1 rounded-full border border-text pl-3 pr-2 transition-all duration-300 hover:border-primary hover:text-primary md:visible dark:border-text-dark dark:hover:border-primary-dark dark:hover:text-primary-dark"
					>
						<span>Download</span>
						<Icon icon={Download} plain />
					</button>
				{/if}
			</div>
			<h3 class={showLinks === false ? 'text-h3' : ''}>Researcher</h3>
			<p>
				My research is at the intersection of AI and HCI. In this context, I am always searching for
				the best method to connect humans with AI systems. I try to help developers with techniques
				that foster communication, use visualizations to provide insights during development, and
				work on explanations that help humans understand the decisions their AI systems make.
			</p>
			<Contact {showLinks} />
		</CvElement>
		<CvElement>
			<h2 class={showLinks === false ? 'text-h2' : ''}>Education</h2>
			{#each getEducationElements() as educationElement}
				<EducationElement {educationElement} {showLinks} />
			{/each}
		</CvElement>
		<CvElement classNames="html2pdf__page-break">
			<h2 class={showLinks === false ? 'text-h2' : ''}>Positions</h2>
			{#each getWork() as employment}
				<Workplace {employment} {showLinks} />
			{/each}
		</CvElement>
		<CvElement>
			<h2 class={showLinks === false ? 'text-h2' : ''}>Publications</h2>
			{#each getResearchProjects() as publication}
				<Publication {publication} {showLinks} />
			{/each}
		</CvElement>
		{#if showLinks}
			<CvElement>
				<h2>Talks</h2>
				{#each getTalks() as talk}
					<Talk {talk} {showLinks} />
				{/each}
			</CvElement>
		{/if}
		<CvElement>
			<h2 class={showLinks === false ? 'text-h2' : ''}>Teaching</h2>
			<div>
				{#each getLectures() as lecture}
					<div class="relative pb-4">
						<h3 class={showLinks === false ? 'text-h3' : ''}>{lecture.title}</h3>
						<p class="md:absolute md:right-0 md:top-0">
							{lecture.timeframe}
						</p>
						<p>
							{lecture.abstract}
						</p>
					</div>
				{/each}
			</div>
		</CvElement>
		<CvElement>
			<h2 class={showLinks === false ? 'text-h2' : ''}>Mentoring</h2>
			<div>
				{#each getMentorshipActivities() as mentorshipActivity}
					<div class="relative pb-4">
						<h3 class={showLinks === false ? 'text-h3' : ''}>{mentorshipActivity.name}</h3>
						<p class="absolute right-0 top-0">
							{mentorshipActivity.timeframe}
						</p>
						<p>
							{mentorshipActivity.position}, {mentorshipActivity.institution}
						</p>
						<p>
							{mentorshipActivity.topic}
						</p>
					</div>
				{/each}
			</div>
		</CvElement>
		<CvElement>
			<h2 class={showLinks === false ? 'text-h2' : ''}>Funding</h2>
			<div>
				{#each getFunding() as fund}
					<div class="relative flex flex-col pb-4">
						<h3 class="max-w-[600px] {showLinks === false ? 'text-h3' : ''}">{fund.name}</h3>
						<p class="md:absolute md:right-0 md:top-0">
							{fund.timeframe}
						</p>
						<p>
							{fund.type}
						</p>
					</div>
				{/each}
			</div>
		</CvElement>
		<CvElement>
			<h2 class={showLinks === false ? 'text-h2' : ''}>Reviewing and Service</h2>
			{#each getReviews() as s}
				<div class="pb-2">
					<p>{s.venue} ({s.years})</p>
				</div>
			{/each}
		</CvElement>
	</div>
</div>
