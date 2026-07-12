<script lang="ts">
	import { onMount } from 'svelte';
	import { blogEntries } from '$lib/helpers/blogProvider';
	import { getResearchProjects, slugify } from '$lib/helpers/projectsProvider';
	import type { BlogEntry, ResearchProject } from '$lib/types';
	import { organicNoise } from '$lib/utils/math';
	import { reveal } from '$lib/actions/reveal';

	const featuredPosts: BlogEntry[] = blogEntries.slice(0, 4);
	const featuredPapers: ResearchProject[] = getResearchProjects().slice(0, 5);

	const systems = [
		{
			title: 'Net2Vis',
			subtitle: 'Automatically generating CNN architecture diagrams for papers.',
			tags: 'VIS · AI · tool',
			href: 'http://viscom.net2vis.uni-ulm.de/'
		},
		{
			title: 'VegaProf',
			subtitle: 'Profiling Vega specs to help engineers see where visualizations are slow.',
			tags: 'VIS · systems',
			href: 'https://sigmacomputing.github.io/VegaProf'
		},
		{
			title: 'Symphony',
			subtitle: 'Composable ML interfaces for teams to inspect models together.',
			tags: 'HCI · AI · CHI',
			href: 'https://dl.acm.org/doi/10.1145/3491102.3502102'
		},
		{
			title: 'Zeno',
			subtitle: 'A workbench for slicing, probing, and debugging ML models.',
			tags: 'eval · AI · tool',
			href: 'https://zenoml.com'
		},
		{
			title: 'visPositions',
			subtitle: 'Job board for VIS and HCI that is actually made for researchers.',
			tags: 'community',
			href: 'https://vispositions.com'
		},
		{
			title: 'endoftext',
			subtitle: 'Playground for treating prompt engineering as real UX, not guesswork.',
			tags: 'agents · product',
			href: 'http://endoftext.app'
		}
	];

	/* ── Animation ──
	   Inspired by lovefrom: slow, deliberate, restrained.
	   A single glowing data-dot traces a delicate path across
	   an SVG stage, leaving behind faint vis elements.
	   The name is the centerpiece — everything else serves it.
	*/
	let phase = $state(0);
	let canvas: HTMLCanvasElement;

	onMount(() => {
		let resizeObserver: ResizeObserver | undefined;

		// ── Tracing dot animation on canvas ──
		const ctx = canvas?.getContext('2d');
		if (ctx) {
			const dpr = window.devicePixelRatio || 1;
			const rect = canvas.getBoundingClientRect();
			canvas.width = rect.width * dpr;
			canvas.height = rect.height * dpr;
			ctx.scale(dpr, dpr);

			let w = rect.width;
			let h = rect.height;

			let cx = w / 2;
			let cy = h / 2 + 10;
			const color = '#e8654a';

			// ── VIS: Bar Chart ──
			const barAreaDx = -126;
			const barHeights = [35, 90, 60, 110, 25];
			const barW = 16;
			const barGap = 6;

			// ── AI: Network Graph ──
			const netAreaDx = 73;
			const netAreaDy = -50;
			const netNodes = [
				{ dx: 0, dy: 0 },
				{ dx: -40, dy: -35 },
				{ dx: 40, dy: -30 },
				{ dx: -25, dy: 35 },
				{ dx: 35, dy: 40 },
				{ dx: -55, dy: 5 },
				{ dx: 60, dy: 10 },
				{ dx: 0, dy: -55 }
			];
			const netEdges = [
				[0, 1],
				[0, 2],
				[0, 3],
				[0, 4],
				[1, 5],
				[1, 7],
				[2, 6],
				[2, 7],
				[3, 5],
				[4, 6],
				[5, 7],
				[6, 7]
			];

			// ── Initialize components immediately ──
			const bars: { dx: number; dTopY: number; phaseOffset: number; speed: number }[] = [];
			const nodes: { dx: number; dy: number; phaseOffset: number; speed: number }[] = [];

			for (let b = 0; b < barHeights.length; b++) {
				const bDx = barAreaDx + b * (barW + barGap) + barW / 2;
				bars.push({
					dx: bDx,
					dTopY: -barHeights[b],
					phaseOffset: Math.random() * Math.PI * 2,
					speed: 0.4 + Math.random() * 0.3
				});
			}

			for (const node of netNodes) {
				nodes.push({
					dx: netAreaDx + node.dx,
					dy: netAreaDy + node.dy,
					phaseOffset: Math.random() * Math.PI * 2,
					speed: 0.3 + Math.random() * 0.4
				});
			}

			let introProgress = 0;
			let idleTime = 0;
			const RESTING_OPACITY = 0.5;

			const drawRoundedBar = (
				x: number,
				y: number,
				width: number,
				height: number,
				radius: number
			) => {
				const r = Math.min(radius, width / 2, height);
				ctx.beginPath();
				ctx.moveTo(x, y + height);
				ctx.lineTo(x, y + r);
				ctx.arcTo(x, y, x + r, y, r);
				ctx.arcTo(x + width, y, x + width, y + r, r);
				ctx.lineTo(x + width, y + height);
				ctx.closePath();
				ctx.fill();
			};

			const draw = () => {
				ctx.clearRect(0, 0, w, h);
				idleTime += 0.016;
				if (introProgress < 1) {
					introProgress += 0.006;
				}

				const barsProgress = Math.max(0, Math.min(1, introProgress / 0.7));
				const nodesProgress = Math.max(0, Math.min(1, (introProgress - 0.3) / 0.7));

				for (let b = 0; b < bars.length; b++) {
					const bar = bars[b];
					const bh = -bar.dTopY;
					const barX = cx + bar.dx;
					const barTopY = cy + bar.dTopY;
					const breathe = organicNoise(idleTime * bar.speed, bar.phaseOffset) * 0.5 + 0.5;
					const targetAlpha = 0.4 + breathe * 0.25;
					const drift = organicNoise(idleTime * bar.speed * 0.8, bar.phaseOffset) * 10;
					ctx.globalAlpha = targetAlpha * barsProgress;
					ctx.fillStyle = color;
					drawRoundedBar(barX - barW / 2, barTopY + drift, barW, bh - drift, 5);
				}

				if (nodes.length > 0) {
					const breathe = organicNoise(idleTime * 0.4, 42) * 0.5 + 0.5;
					const baseAlpha = (RESTING_OPACITY + breathe * 0.1) * nodesProgress;

					const computedNodes = nodes.map((node) => {
						const nBreathe = organicNoise(idleTime * node.speed, node.phaseOffset) * 0.5 + 0.5;
						const nAlpha = (RESTING_OPACITY + nBreathe * 0.12) * nodesProgress;
						const driftX = organicNoise(idleTime * node.speed * 0.5, node.phaseOffset) * 5;
						const driftY = organicNoise(idleTime * node.speed * 0.6, node.phaseOffset * 1.3) * 5;
						return {
							x: cx + node.dx + driftX,
							y: cy + node.dy + driftY,
							alpha: nAlpha,
							radius: 5 + nBreathe * 1.5
						};
					});

					for (const edge of netEdges) {
						const [a, b] = edge;
						if (a >= computedNodes.length || b >= computedNodes.length) continue;
						const nodeA = computedNodes[a];
						const nodeB = computedNodes[b];

						ctx.beginPath();
						ctx.moveTo(nodeA.x, nodeA.y);
						ctx.lineTo(nodeB.x, nodeB.y);
						ctx.strokeStyle = color;
						ctx.lineWidth = 1;
						ctx.globalAlpha = baseAlpha * 0.5;
						ctx.stroke();
					}

					for (const cNode of computedNodes) {
						ctx.beginPath();
						ctx.arc(cNode.x, cNode.y, cNode.radius, 0, Math.PI * 2);
						ctx.fillStyle = color;
						ctx.globalAlpha = cNode.alpha;
						ctx.fill();
					}
				}

				ctx.globalAlpha = 1;

				if (introProgress > 0.2 && phase < 1) phase = 1;
				if (introProgress > 0.4 && phase < 2) phase = 2;
				if (introProgress > 0.6 && phase < 3) phase = 3;
				if (introProgress > 0.8 && phase < 4) phase = 4;

				requestAnimationFrame(draw);
			};

			setTimeout(() => requestAnimationFrame(draw), 400);

			resizeObserver = new ResizeObserver(() => {
				const rect = canvas.getBoundingClientRect();
				canvas.width = rect.width * dpr;
				canvas.height = rect.height * dpr;
				ctx.scale(dpr, dpr);
				w = rect.width;
				h = rect.height;
				cx = w / 2;
				cy = h / 2 + 10;
			});
			resizeObserver.observe(canvas);
		}

		return () => {
			if (resizeObserver) {
				resizeObserver.disconnect();
			}
		};
	});
</script>

<!-- ═══════════════════════════════════════════════
     HERO — vis animation is the centerpiece
     ═══════════════════════════════════════════════ -->
<section class="relative flex h-screen w-full items-center justify-center overflow-hidden">
	<!-- Tracing canvas layer — prominent -->
	<canvas
		bind:this={canvas}
		class="pointer-events-none absolute inset-0 z-0 h-full w-full"
		style="opacity: 1;"
	></canvas>

	<!-- Text layer — minimal, below the vis -->
	<div class="relative z-[1] flex flex-col items-center" style="margin-top: 12rem;">
		<!-- Focus phrase -->
		<h1
			class="font-serif text-[clamp(1.6rem,4vw,2.8rem)] font-normal leading-[1.2] tracking-[-0.01em] text-text transition-[opacity,transform] duration-[1800ms] ease-[cubic-bezier(0.16,1,0.3,1)] {phase >=
			2
				? 'translate-y-0 opacity-100'
				: 'translate-y-[8px] opacity-0'}"
		>
			Human interfaces to AI
		</h1>

		<!-- Domain — subtle identifier -->
		<p
			class="mt-4 font-sans text-[0.7rem] font-normal lowercase tracking-[0.2em] text-text-muted transition-opacity delay-300 duration-[1400ms] {phase >=
			3
				? 'opacity-50'
				: 'opacity-0'}"
		>
			a13x.io
		</p>

		<!-- Links -->
		<nav
			class="mt-10 flex gap-8 transition-[opacity,transform] duration-1000 {phase >= 4
				? 'translate-y-0 opacity-100'
				: 'translate-y-[6px] opacity-0'}"
		>
			<a
				href="/publications"
				class="relative text-[0.7rem] font-medium uppercase tracking-[0.14em] text-text-muted transition-colors duration-300 after:absolute after:bottom-[-3px] after:left-0 after:h-[1px] after:w-0 after:bg-primary after:transition-[width] after:duration-300 after:content-[''] hover:text-primary hover:after:w-full"
				>Papers</a
			>
			<a
				href="/projects"
				class="relative text-[0.7rem] font-medium uppercase tracking-[0.14em] text-text-muted transition-colors duration-300 after:absolute after:bottom-[-3px] after:left-0 after:h-[1px] after:w-0 after:bg-primary after:transition-[width] after:duration-300 after:content-[''] hover:text-primary hover:after:w-full"
				>Systems</a
			>
			<a
				href="/blog"
				class="relative text-[0.7rem] font-medium uppercase tracking-[0.14em] text-text-muted transition-colors duration-300 after:absolute after:bottom-[-3px] after:left-0 after:h-[1px] after:w-0 after:bg-primary after:transition-[width] after:duration-300 after:content-[''] hover:text-primary hover:after:w-full"
				>Field Notes</a
			>
			<a
				href="/cv"
				class="relative text-[0.7rem] font-medium uppercase tracking-[0.14em] text-text-muted transition-colors duration-300 after:absolute after:bottom-[-3px] after:left-0 after:h-[1px] after:w-0 after:bg-primary after:transition-[width] after:duration-300 after:content-[''] hover:text-primary hover:after:w-full"
				>CV</a
			>
		</nav>
	</div>

	<!-- Scroll indicator -->
	<div
		class="absolute bottom-8 left-1/2 -translate-x-1/2 transition-opacity duration-1000"
		class:opacity-0={phase < 4}
		class:opacity-30={phase >= 4}
	>
		<svg width="16" height="16" viewBox="0 0 16 16" fill="none" class="animate-bounce">
			<path d="M8 12l-4-4h8l-4 4z" fill="currentColor" />
		</svg>
	</div>
</section>

<!-- ═══════════════════════════════════════════════
     CONTENT SECTIONS
     ═══════════════════════════════════════════════ -->
<div
	use:reveal={{ threshold: 0.1, rootMargin: '0px 0px -40px 0px' }}
	class="mx-auto w-full max-w-[1000px] px-4 pb-24"
>
	<!-- PAPERS -->
	<section class="section-shell reveal py-12">
		<div class="flex flex-wrap items-end justify-between gap-4">
			<div>
				<p class="eyebrow mb-2">What I research</p>
				<h2>Papers</h2>
				<p class="max-w-lg text-sm leading-relaxed text-text-muted">
					Recent work on visualization, human-computer interaction, and machine learning evaluation.
				</p>
			</div>
			<a href="/publications" class="text-xs font-medium text-primary transition hover:underline"
				>View all papers →</a
			>
		</div>

		<div class="reveal-stagger mt-6 flex flex-col gap-3">
			{#each featuredPapers as paper}
				<div
					class="reveal group relative flex items-start gap-5 rounded-2xl border border-transparent bg-background-card/80 p-5 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-lg"
				>
					<!-- Stretched Link -->
					<a
						href="/publications/{slugify(paper.title)}"
						class="absolute inset-0 z-[1] rounded-2xl"
						aria-label={paper.title}
					></a>

					<div class="hidden w-28 shrink-0 flex-col items-center gap-1 sm:flex">
						<span class="font-serif text-2xl leading-none text-primary/40">{paper.year}</span>
						<span class="text-center text-[0.6rem] uppercase tracking-wider text-text-muted"
							>{paper.venue}</span
						>
					</div>
					<div class="min-w-0 flex-1">
						<h3
							class="text-sm font-semibold leading-snug transition-colors duration-300 group-hover:text-primary"
						>
							{paper.title}
						</h3>
						<p class="mt-1 text-xs text-text-muted">
							{paper.authors.join(', ')}
						</p>
					</div>
					<div class="shrink-0 sm:hidden">
						<span class="text-[0.6rem] uppercase tracking-wider text-text-muted"
							>{paper.year} · {paper.venue}</span
						>
					</div>
				</div>
			{/each}
		</div>
	</section>

	<!-- SYSTEMS -->
	<section class="section-shell reveal py-12">
		<div class="flex flex-wrap items-end justify-between gap-4">
			<div>
				<p class="eyebrow mb-2">What I build</p>
				<h2>Systems</h2>
				<p class="max-w-lg text-sm leading-relaxed text-text-muted">
					A small sample of things that try to make ML a bit more inspectable, usable, and fair.
				</p>
			</div>
			<a href="/projects" class="text-xs font-medium text-primary transition hover:underline"
				>View all projects →</a
			>
		</div>

		<div class="reveal-stagger mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
			{#each systems as system}
				<a
					href={system.href}
					target="_blank"
					rel="noopener noreferrer"
					class="reveal group flex flex-col justify-between gap-3 rounded-2xl border border-transparent bg-background-card/80 p-5 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg"
				>
					<div>
						<div class="flex items-start justify-between gap-2">
							<h3 class="text-base font-semibold group-hover:text-primary">{system.title}</h3>
							<span
								class="mt-0.5 shrink-0 text-[0.6rem] uppercase tracking-[0.14em] text-text-muted"
								>{system.tags}</span
							>
						</div>
						<p class="mt-2 text-sm leading-relaxed text-text-muted">
							{system.subtitle}
						</p>
					</div>
					<span
						class="text-xs text-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100"
						>open →</span
					>
				</a>
			{/each}
		</div>
	</section>

	<!-- FIELD NOTES -->
	<section class="section-shell reveal py-12">
		<div class="flex flex-wrap items-end justify-between gap-4">
			<div>
				<p class="eyebrow mb-2">What I think</p>
				<h2>Field Notes</h2>
				<p class="max-w-lg text-sm leading-relaxed text-text-muted">
					Essays and opinionated takes from working where visualization, HCI, and AI meet.
				</p>
			</div>
			<a href="/blog" class="text-xs font-medium text-primary transition hover:underline"
				>View all posts →</a
			>
		</div>

		<div class="reveal-stagger mt-6 flex flex-col gap-4">
			{#each featuredPosts as post}
				<a
					href={`/blog/${post.slug}`}
					class="reveal group flex items-center gap-6 rounded-2xl border border-transparent bg-background-card/80 p-5 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-lg"
				>
					<span
						class="hidden shrink-0 font-serif text-3xl text-primary/30 transition-colors group-hover:text-primary/60 sm:block"
					>
						✦
					</span>
					<div class="flex-1">
						<div class="flex items-center justify-between gap-4">
							<span class="font-semibold leading-snug group-hover:text-primary">
								{post.title}
							</span>
							<span class="shrink-0 text-xs text-text-muted">
								{post.date.toLocaleDateString('en-US', {
									month: 'short',
									day: 'numeric',
									year: 'numeric'
								})}
							</span>
						</div>
						<p class="mt-1 text-sm leading-relaxed text-text-muted">
							{post.abstract}
						</p>
					</div>
				</a>
			{/each}
		</div>
	</section>
</div>
