<script lang="ts">
	import { onMount } from 'svelte';
	import Icon from '$lib/components/Icon.svelte';
	import Contact from '$lib/components/cv/Contact.svelte';
	import { getEducationElements } from '$lib/helpers/educationProvider';
	import { getFunding } from '$lib/helpers/fundingProvider';
	import { getMentorshipActivities } from '$lib/helpers/mentoringProvider';
	import { getResearchProjects, slugify } from '$lib/helpers/projectsProvider';
	import { getReviews } from '$lib/helpers/reviewProvider';
	import { getTalks } from '$lib/helpers/talkProvider';
	import { getLectures } from '$lib/helpers/teachingProvider';
	import { work } from '$lib/helpers/workProvider';
	import Download from 'svelte-material-icons/Download.svelte';
	import LinkElement from '$lib/components/LinkElement.svelte';

	let container: HTMLDivElement;
	let sectionsContainer: HTMLElement;
	let showLinks = true;
	let html2pdf: any;

	onMount(() => {

		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						entry.target.classList.add('visible');
						observer.unobserve(entry.target);
					}
				}
			},
			{ threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
		);

		if (sectionsContainer) {
			const reveals = sectionsContainer.querySelectorAll('.reveal');
			reveals.forEach((el) => observer.observe(el));
		}

		return () => observer.disconnect();
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
			.then(async () => {
				showLinks = true;
				const { tick } = await import('svelte');
				await tick();
				if (sectionsContainer) {
					sectionsContainer.querySelectorAll('.reveal').forEach((el) => {
						el.classList.add('visible');
					});
				}
			});
	}
</script>

<svelte:head>
	<title>CV — Alex Bäuerle</title>
	<meta
		name="description"
		content="Curriculum Vitae of Alex Bäuerle — researcher at the intersection of AI and HCI."
	/>
</svelte:head>

<div bind:this={sectionsContainer} class="flex flex-col gap-6">
	<div bind:this={container} class="flex flex-col {showLinks ? 'gap-6' : 'gap-2 pb-8'}">
		<!-- Header -->
		<section class="section-shell {showLinks ? 'reveal' : ''}">
			<div class="flex items-start justify-between gap-4">
				<div>
					<p class="eyebrow mb-2">Curriculum Vitae</p>
					<h1 class={showLinks ? '' : '!text-3xl text-text'}>
						{showLinks ? 'Alex Bäuerle' : 'Alex Bäuerle'}
					</h1>
					<p class="mt-1 text-base text-text-muted {showLinks ? '' : '!text-sm'}">Researcher</p>
				</div>
				{#if showLinks}
					<button
						onclick={exportCVPDF}
						class="hidden items-center gap-1.5 rounded-full border border-text/20 px-4 py-1.5 text-sm transition-all duration-300 hover:border-primary hover:text-primary md:flex"
					>
						<span>Download</span>
						<Icon icon={Download} plain />
					</button>
				{/if}
			</div>
			<p class="mt-2 text-sm leading-relaxed text-text-muted {showLinks ? '' : '!text-xs'}">
				My research is at the intersection of AI and HCI. I am prototyping and trying to understand
				novel modes of interaction with AI, focusing on interfaces that help humans be creative with
				AI systems.
			</p>
			<Contact {showLinks} />
		</section>

		<!-- Education -->
		<section class="section-shell {showLinks ? 'reveal' : ''}">
			<div class="flex items-center gap-4">
				<h2 class={showLinks ? '' : '!text-xl text-h2'}>Education</h2>
				{#if showLinks}<div class="h-px flex-1 bg-primary/10"></div>{/if}
			</div>
			<div class="{showLinks ? 'reveal-stagger' : ''} flex flex-col gap-3">
				{#each getEducationElements() as edu}
					<div
						class="pdf-entry {showLinks ? 'reveal' : ''} rounded-2xl {showLinks
							? 'border border-transparent bg-background-card/80 p-4 shadow-sm backdrop-blur-sm'
							: 'pb-3'}"
					>
						<div class="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
							<h3 class="text-sm font-semibold {showLinks ? '' : '!text-xs'}">
								{edu.type} in {edu.subject} at {edu.institute}
							</h3>
							<span class="shrink-0 text-xs text-text-muted">{edu.timeframe}</span>
						</div>
						<p class="mt-1 text-xs leading-relaxed text-text-muted">{edu.details}</p>
						{#if showLinks && edu.iconElements.length > 0}
							<div class="mt-2 flex items-center gap-3">
								{#each edu.iconElements as iconElement}
									<LinkElement href={iconElement.icon.link} blank={true}>
										<span
											class="flex items-center gap-1 text-xs text-primary/60 transition-colors hover:text-primary"
										>
											<Icon icon={iconElement.icon.icon} plain />
											{iconElement.description}
										</span>
									</LinkElement>
								{/each}
							</div>
						{/if}
					</div>
				{/each}
			</div>
		</section>

		<!-- Positions -->
		<section class="section-shell {showLinks ? 'reveal' : ''}">
			<div class="flex items-center gap-4">
				<h2 class={showLinks ? '' : '!text-xl text-h2'}>Positions</h2>
				{#if showLinks}<div class="h-px flex-1 bg-primary/10"></div>{/if}
			</div>
			<div class="{showLinks ? 'reveal-stagger' : ''} flex flex-col gap-3">
				{#each work as employment}
					<div
						class="pdf-entry {showLinks ? 'reveal' : ''} rounded-2xl {showLinks
							? 'border border-transparent bg-background-card/80 p-4 shadow-sm backdrop-blur-sm'
							: 'pb-3'}"
					>
						<div class="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
							<div class="flex items-center gap-2">
								<Icon icon={employment.icon} plain downloadingPDF={!showLinks} />
								<h3 class="text-sm font-semibold {showLinks ? '' : '!text-xs'}">
									{employment.title}
								</h3>
							</div>
							<span class="shrink-0 text-xs text-text-muted">{employment.timeframe}</span>
						</div>
						<p class="mt-1 text-xs leading-relaxed text-text-muted">{employment.abstract}</p>
					</div>
				{/each}
			</div>
		</section>

		<!-- Publications -->
		<section class="section-shell {showLinks ? 'reveal' : ''}">
			<div class="flex items-center gap-4">
				<h2 class={showLinks ? '' : '!text-xl text-h2'}>Publications</h2>
				{#if showLinks}<div class="h-px flex-1 bg-primary/10"></div>{/if}
			</div>
			<div
				class="{showLinks ? 'reveal-stagger' : ''} flex flex-col {showLinks ? 'gap-3' : 'gap-1'}"
			>
				{#each getResearchProjects() as pub}
					<div
						class="pdf-entry {showLinks ? 'reveal' : ''} rounded-2xl {showLinks
							? 'border border-transparent bg-background-card/80 p-4 shadow-sm backdrop-blur-sm'
							: 'pb-2'}"
					>
						<h3 class="text-sm font-semibold leading-snug {showLinks ? '' : '!text-xs'}">
							{#if showLinks}
								<a
									href="/publications/{slugify(pub.title)}"
									class="transition-colors duration-300 hover:text-primary"
								>
									{pub.title}
								</a>
							{:else}
								{pub.title}
							{/if}
						</h3>
						<div class="mt-1 flex flex-wrap items-center gap-2">
							<span
								class="{showLinks
									? 'bg-primary/8 rounded-full py-0.5'
									: ''} text-[0.6rem] font-medium uppercase tracking-wider text-primary"
							>
								{pub.venue}, {pub.year}
							</span>
							{#if showLinks}
								{#each pub.links as link}
									<a
										href={link.link}
										target="_blank"
										rel="noopener noreferrer"
										class="text-primary/50 transition-colors hover:text-primary"
									>
										<Icon icon={link.icon} plain />
									</a>
								{/each}
							{/if}
						</div>
						<p class="mt-1 flex flex-wrap text-xs text-text-muted">
							{#each pub.authors as author, index}
								{#if index > 0}
									{#if index === pub.authors.length - 1}
										<span>,&nbsp;and&nbsp;</span>
									{:else}
										<span>,&nbsp;</span>
									{/if}
								{/if}
								<span class={author === 'Alex Bäuerle' ? 'font-semibold text-text' : ''}
									>{author}</span
								>
							{/each}
						</p>
					</div>
				{/each}
			</div>
		</section>

		<!-- Talks (screen only) -->
		{#if showLinks}
			<section class="section-shell reveal">
				<div class="flex items-center gap-4">
					<h2>Talks</h2>
					<div class="h-px flex-1 bg-primary/10"></div>
				</div>
				<div class="reveal-stagger flex flex-col gap-3">
					{#each getTalks() as talk}
						<div
							class="reveal rounded-2xl border border-transparent bg-background-card/80 p-4 shadow-sm backdrop-blur-sm"
						>
							<div class="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
								<h3 class="text-sm font-semibold leading-snug">{talk.title}</h3>
								<span class="shrink-0 text-xs text-text-muted">
									{talk.date.toLocaleDateString('en-US', {
										month: 'short',
										day: 'numeric',
										year: 'numeric'
									})}
								</span>
							</div>
							<div class="mt-1 flex flex-wrap items-center gap-2">
								<span class="text-xs text-text-muted">{talk.venue}</span>
								{#each talk.links as link}
									<a
										href={link.link}
										target="_blank"
										rel="noopener noreferrer"
										class="text-primary/50 transition-colors hover:text-primary"
									>
										<Icon icon={link.icon} plain />
									</a>
								{/each}
							</div>
						</div>
					{/each}
				</div>
			</section>
		{/if}

		<!-- Teaching -->
		<section class="section-shell {showLinks ? 'reveal' : ''}">
			<div class="flex items-center gap-4">
				<h2 class={showLinks ? '' : '!text-xl text-h2'}>Teaching</h2>
				{#if showLinks}<div class="h-px flex-1 bg-primary/10"></div>{/if}
			</div>
			<div
				class="{showLinks ? 'reveal-stagger' : ''} flex flex-col {showLinks ? 'gap-3' : 'gap-1'}"
			>
				{#each getLectures() as lecture}
					<div
						class="pdf-entry {showLinks ? 'reveal' : ''} rounded-2xl {showLinks
							? 'border border-transparent bg-background-card/80 p-4 shadow-sm backdrop-blur-sm'
							: 'pb-2'}"
					>
						<div class="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
							<h3 class="text-sm font-semibold {showLinks ? '' : '!text-xs'}">{lecture.title}</h3>
							<span class="shrink-0 text-xs text-text-muted">{lecture.timeframe}</span>
						</div>
						<p class="mt-1 text-xs leading-relaxed text-text-muted">{lecture.abstract}</p>
					</div>
				{/each}
			</div>
		</section>

		<!-- Mentoring -->
		<section class="section-shell {showLinks ? 'reveal' : ''}">
			<div class="flex items-center gap-4">
				<h2 class={showLinks ? '' : '!text-xl text-h2'}>Mentoring</h2>
				{#if showLinks}<div class="h-px flex-1 bg-primary/10"></div>{/if}
			</div>
			<div
				class="{showLinks ? 'reveal-stagger' : ''} flex flex-col {showLinks ? 'gap-3' : 'gap-1'}"
			>
				{#each getMentorshipActivities() as m}
					<div
						class="pdf-entry {showLinks ? 'reveal' : ''} rounded-2xl {showLinks
							? 'border border-transparent bg-background-card/80 p-4 shadow-sm backdrop-blur-sm'
							: 'pb-2'}"
					>
						<div class="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
							<h3 class="text-sm font-semibold {showLinks ? '' : '!text-xs'}">{m.name}</h3>
							<span class="shrink-0 text-xs text-text-muted">{m.timeframe}</span>
						</div>
						<p class="mt-0.5 text-xs text-text-muted">{m.position}, {m.institution}</p>
						<p class="mt-0.5 text-xs leading-relaxed text-text-muted/70">{m.topic}</p>
					</div>
				{/each}
			</div>
		</section>

		<!-- Funding -->
		<section class="section-shell {showLinks ? 'reveal' : ''}">
			<div class="flex items-center gap-4">
				<h2 class={showLinks ? '' : '!text-xl text-h2'}>Funding</h2>
				{#if showLinks}<div class="h-px flex-1 bg-primary/10"></div>{/if}
			</div>
			<div
				class="{showLinks ? 'reveal-stagger' : ''} flex flex-col {showLinks ? 'gap-3' : 'gap-1'}"
			>
				{#each getFunding() as fund}
					<div
						class="pdf-entry {showLinks ? 'reveal' : ''} rounded-2xl {showLinks
							? 'border border-transparent bg-background-card/80 p-4 shadow-sm backdrop-blur-sm'
							: 'pb-2'}"
					>
						<div class="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
							<h3 class="text-sm font-semibold {showLinks ? '' : '!text-xs'}">{fund.name}</h3>
							<span class="shrink-0 text-xs text-text-muted">{fund.timeframe}</span>
						</div>
						<p class="mt-0.5 text-xs text-text-muted">{fund.type}</p>
					</div>
				{/each}
			</div>
		</section>

		<!-- Reviewing & Service -->
		<section class="section-shell {showLinks ? 'reveal' : ''}">
			<div class="flex items-center gap-4">
				<h2 class={showLinks ? '' : '!text-xl text-h2'}>Reviewing and Service</h2>
				{#if showLinks}<div class="h-px flex-1 bg-primary/10"></div>{/if}
			</div>
			<div
				class="{showLinks ? 'reveal' : ''} rounded-2xl {showLinks
					? 'border border-transparent bg-background-card/80 p-4 shadow-sm backdrop-blur-sm'
					: ''}"
			>
				<div class="flex flex-wrap gap-x-6 gap-y-2">
					{#each getReviews() as s}
						<div class="flex items-baseline gap-2">
							<span class="text-sm font-medium {showLinks ? '' : '!text-xs'}">{s.venue}</span>
							<span class="text-xs text-text-muted">({s.years})</span>
						</div>
					{/each}
				</div>
			</div>
		</section>
	</div>
</div>

<style>
	/* Prevent individual entries from being split across PDF pages */
	.pdf-entry {
		page-break-inside: avoid;
		break-inside: avoid;
	}

	/* Prevent section headers from being orphaned at bottom of a page */
	section h2 {
		page-break-after: avoid;
		break-after: avoid;
	}
</style>
