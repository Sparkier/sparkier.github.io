<script lang="ts">
	import { onMount } from 'svelte';
	import Icon from '$lib/components/Icon.svelte';
	import { getResearchProjects } from '$lib/helpers/projectsProvider';

	const publications = getResearchProjects();

	// Group publications by year
	const grouped: Record<string, typeof publications> = {};
	for (const pub of publications) {
		if (!grouped[pub.year]) grouped[pub.year] = [];
		grouped[pub.year].push(pub);
	}
	const years = Object.keys(grouped).sort((a, b) => parseInt(b) - parseInt(a));

	let sectionsContainer: HTMLElement;

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
</script>

<svelte:head>
	<title>Papers — Alex Bäuerle</title>
	<meta
		name="description"
		content="Research publications by Alex Bäuerle on visualization, human-computer interaction, and machine learning evaluation."
	/>
</svelte:head>

<div bind:this={sectionsContainer} class="flex flex-col gap-6">
	<!-- Page Header -->
	<section class="section-shell reveal">
		<p class="eyebrow mb-2">Research</p>
		<h2>Papers</h2>
		<p class="text-sm leading-relaxed text-text-muted">
			Work across visualization, human-computer interaction, and machine learning evaluation — spanning tools, theory, and systems.
		</p>
	</section>

	<!-- Publications by year -->
	{#each years as year}
		<section class="section-shell reveal">
			<!-- Year marker -->
			<div class="flex items-center gap-4">
				<span class="font-serif text-2xl text-primary/50">{year}</span>
				<div class="h-px flex-1 bg-primary/10"></div>
			</div>

			<!-- Publication cards for this year -->
			<div class="reveal-stagger mt-2 flex flex-col gap-4">
				{#each grouped[year] as pub}
					<div
						class="reveal group flex flex-col gap-4 rounded-2xl border border-transparent bg-background-card/80 p-5 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:shadow-lg sm:flex-row sm:items-start sm:gap-6"
					>
						<!-- Thumbnail -->
						<div class="shrink-0 overflow-hidden rounded-lg">
							<img
								src={pub.imageSrc}
								alt={pub.title}
								class="h-auto w-full object-contain transition-transform duration-500 group-hover:scale-[1.03] sm:w-48"
							/>
						</div>

						<!-- Content -->
						<div class="flex min-w-0 flex-1 flex-col gap-2">
							<!-- Venue badge -->
							<span
								class="w-fit rounded-full bg-primary/8 py-0.5 text-[0.6rem] font-medium uppercase tracking-[0.14em] text-primary"
							>
								{pub.venue}
							</span>

							<!-- Title -->
							<h3 class="text-sm font-semibold leading-snug transition-colors duration-300 group-hover:text-primary">
								{pub.title}
							</h3>

							<!-- Authors -->
							<p class="text-xs leading-relaxed text-text-muted">
								{#each pub.authors as author, index}{#if index > 0}{#if index === pub.authors.length - 1},{' '}and{' '}{:else},{' '}{/if}{/if}<span class={author === 'Alex Bäuerle' ? 'font-semibold text-text' : ''}>{author}</span>{/each}
							</p>

							<!-- Abstract (truncated) -->
							<p class="mt-1 line-clamp-2 text-xs leading-relaxed text-text-muted/80">
								{pub.abstract}
							</p>

							<!-- Links -->
							{#if pub.links && pub.links.length > 0}
								<div class="mt-1 flex items-center gap-2">
									{#each pub.links as link}
										<a
											href={link.link}
											target="_blank"
											rel="noopener noreferrer"
											class="flex items-center rounded-md p-1 text-primary/50 transition-all duration-200 hover:bg-primary/10 hover:text-primary"
										>
											<Icon icon={link.icon} plain />
										</a>
									{/each}
								</div>
							{/if}
						</div>
					</div>
				{/each}
			</div>
		</section>
	{/each}
</div>
