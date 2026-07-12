<script lang="ts">
	import { page } from '$app/stores';
	import Icon from '$lib/components/Icon.svelte';
	import { getResearchProjects, slugify } from '$lib/helpers/projectsProvider';
	import { reveal } from '$lib/actions/reveal';

	const paper = $derived(
		getResearchProjects().find((p) => slugify(p.title) === $page.params.paper)
	);

	// Helper to get friendly labels for resource buttons
	function getLinkLabel(linkUrl: string): string {
		const url = linkUrl.toLowerCase();
		if (
			url.includes('arxiv.org') ||
			url.includes('pdf') ||
			url.includes('doi.org') ||
			url.includes('pubmed')
		) {
			return 'PDF Document';
		}
		if (url.includes('github.com')) {
			return 'GitHub Repository';
		}
		if (url.includes('youtube.com') || url.includes('youtu.be')) {
			return 'Video Presentation';
		}
		return 'Project Website';
	}
</script>

<svelte:head>
	<title>{paper?.title ?? 'Paper'} — Alex Bäuerle</title>
	<meta name="description" content={paper?.abstract ?? ''} />
</svelte:head>

<div use:reveal class="flex flex-col gap-6">
	{#if paper}
		<!-- Paper Header -->
		<section class="section-shell reveal">
			<a
				href="/publications"
				class="eyebrow mb-4 inline-flex items-center gap-1 transition-colors duration-200 hover:text-primary"
			>
				← Back to Papers
			</a>

			<div class="flex flex-col gap-3">
				<!-- Venue & Year Badge -->
				<span
					class="bg-primary/8 w-fit rounded-full px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-primary"
				>
					{paper.venue} · {paper.year}
				</span>

				<h1 class="font-serif text-3xl leading-tight text-text sm:text-4xl">
					{paper.title}
				</h1>

				<!-- Authors List -->
				<p class="mt-2 text-sm leading-relaxed text-text-muted">
					{#each paper.authors as author, index}
						{#if index > 0}
							{#if index === paper.authors.length - 1}
								, and
							{:else}
								,
							{/if}
						{/if}
						<span class={author === 'Alex Bäuerle' ? 'font-semibold text-text' : ''}>{author}</span>
					{/each}
				</p>
			</div>
		</section>

		<!-- Paper Body -->
		<section class="section-shell reveal">
			<div class="grid grid-cols-1 gap-8 md:grid-cols-5">
				<!-- Thumbnail (Mobile: 1st, Desktop: Right Column, Row 1) -->
				<div
					class="order-1 overflow-hidden rounded-2xl border border-primary/10 bg-background-card/50 p-2 shadow-sm backdrop-blur-sm md:order-2 md:col-span-2 md:col-start-4 md:row-start-1"
				>
					<img
						src={paper.imageSrc.startsWith('/') || paper.imageSrc.startsWith('http')
							? paper.imageSrc
							: `/${paper.imageSrc}`}
						alt={paper.title}
						class="h-auto w-full rounded-xl object-contain"
					/>
				</div>

				<!-- Abstract (Mobile: 2nd, Desktop: Left Column, Row 1 & 2) -->
				<div
					class="order-2 flex flex-col gap-4 md:order-1 md:col-span-3 md:col-start-1 md:row-span-2 md:row-start-1"
				>
					<h3
						class="border-b border-primary/10 pb-2 font-serif text-lg font-normal tracking-tight text-text"
					>
						Abstract
					</h3>
					<p class="whitespace-pre-wrap text-sm leading-relaxed text-text-muted">
						{paper.abstract}
					</p>
				</div>

				<!-- Resources (Mobile: 3rd, Desktop: Right Column, Row 2) -->
				{#if paper.links && paper.links.length > 0}
					<div
						class="order-3 flex flex-col gap-3 md:order-3 md:col-span-2 md:col-start-4 md:row-start-2"
					>
						<h3
							class="border-b border-primary/10 pb-2 font-serif text-lg font-normal tracking-tight text-text"
						>
							Resources
						</h3>
						<div class="flex flex-col gap-2">
							{#each paper.links as link}
								<a
									href={link.link}
									target="_blank"
									rel="noopener noreferrer"
									class="flex items-center gap-3 rounded-xl border border-primary/10 bg-background-card/50 p-3.5 text-xs font-medium text-text shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary/5"
								>
									<Icon icon={link.icon} plain />
									<span class="flex-1 text-left">{getLinkLabel(link.link)}</span>
									<span class="text-sm text-primary/40">↗</span>
								</a>
							{/each}
						</div>
					</div>
				{/if}
			</div>
		</section>
	{:else}
		<!-- Error State -->
		<section class="section-shell reveal py-12 text-center">
			<h2 class="font-serif text-2xl text-text">Paper Not Found</h2>
			<p class="mt-2 text-sm text-text-muted">
				The paper you are looking for does not exist or has been moved.
			</p>
			<a
				href="/publications"
				class="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-primary transition hover:underline"
			>
				← Back to Papers
			</a>
		</section>
	{/if}
</div>
