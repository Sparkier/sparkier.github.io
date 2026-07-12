<script lang="ts">
	import Icon from '$lib/components/Icon.svelte';
	import { getFunProjects } from '$lib/helpers/projectsProvider';
	import { reveal } from '$lib/actions/reveal';

	const projects = getFunProjects();
</script>

<svelte:head>
	<title>Projects — Alex Bäuerle</title>
	<meta
		name="description"
		content="Open-source tools and side projects by Alex Bäuerle — from visualization systems to AI evaluation platforms."
	/>
</svelte:head>

<div use:reveal class="flex flex-col gap-6">
	<!-- Page Header -->
	<section class="section-shell reveal">
		<p class="eyebrow mb-2">What I build</p>
		<h2>Projects</h2>
		<p class="text-sm leading-relaxed text-text-muted">
			Open-source tools, research prototypes, and side projects — making ML more inspectable,
			usable, and fair.
		</p>
	</section>

	<!-- Project grid -->
	<section class="section-shell">
		<div class="reveal-stagger grid gap-5 sm:grid-cols-2">
			{#each projects as project}
				<div
					class="reveal group flex flex-col gap-4 rounded-2xl border border-transparent bg-background-card/80 p-5 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:shadow-lg"
				>
					<!-- Image + Content row -->
					<div class="flex items-start gap-4">
						<!-- Thumbnail -->
						<div class="shrink-0 overflow-hidden rounded-lg">
							<img
								src={project.imageSrc}
								alt={project.title}
								class="h-16 w-16 object-contain transition-transform duration-500 group-hover:scale-[1.05]"
							/>
						</div>

						<!-- Title + Description -->
						<div class="flex min-w-0 flex-1 flex-col">
							<h3
								class="text-base font-semibold leading-snug transition-colors duration-300 group-hover:text-primary"
							>
								{project.title}
							</h3>
							<p class="mt-1 line-clamp-3 text-xs leading-relaxed text-text-muted/80">
								{project.abstract}
							</p>
						</div>
					</div>

					<!-- Links -->
					{#if project.links && project.links.length > 0}
						<div class="flex items-center gap-2 border-t border-primary/5 pt-3">
							{#each project.links as link}
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
			{/each}
		</div>
	</section>
</div>
