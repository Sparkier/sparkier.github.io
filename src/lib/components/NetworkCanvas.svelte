<script lang="ts">
	import { onMount } from 'svelte';

	let canvas: HTMLCanvasElement;
	let animationId: number;
	let mouseX = -1000;
	let mouseY = -1000;

	interface Particle {
		x: number;
		y: number;
		vx: number;
		vy: number;
		r: number;
		opacity: number;
	}

	const PARTICLE_COUNT = 60;
	const CONNECTION_DIST = 140;
	const CONNECTION_DIST_SQ = CONNECTION_DIST * CONNECTION_DIST;
	const MOUSE_RADIUS = 180;

	function createParticles(w: number, h: number): Particle[] {
		return Array.from({ length: PARTICLE_COUNT }, () => ({
			x: Math.random() * w,
			y: Math.random() * h,
			vx: (Math.random() - 0.5) * 0.4,
			vy: (Math.random() - 0.5) * 0.4,
			r: Math.random() * 2.5 + 1.2,
			opacity: Math.random() * 0.5 + 0.25
		}));
	}

	onMount(() => {
		const ctx = canvas.getContext('2d');
		if (!ctx) return;

		let w = 0;
		let h = 0;
		let particles: Particle[] = [];
		let dpr = 1;

		function resize() {
			dpr = Math.min(window.devicePixelRatio || 1, 2);
			w = canvas.clientWidth;
			h = canvas.clientHeight;
			canvas.width = w * dpr;
			canvas.height = h * dpr;
			ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
			if (particles.length === 0) {
				particles = createParticles(w, h);
			}
		}

		function animate() {
			ctx!.clearRect(0, 0, w, h);

			for (const p of particles) {
				const dx = p.x - mouseX;
				const dy = p.y - mouseY;
				const dist = Math.sqrt(dx * dx + dy * dy);
				if (dist < MOUSE_RADIUS && dist > 0) {
					const force = ((MOUSE_RADIUS - dist) / MOUSE_RADIUS) * 0.012;
					p.vx += (dx / dist) * force;
					p.vy += (dy / dist) * force;
				}

				p.x += p.vx;
				p.y += p.vy;
				p.vx *= 0.998;
				p.vy *= 0.998;

				if (p.x < -10) p.x = w + 10;
				if (p.x > w + 10) p.x = -10;
				if (p.y < -10) p.y = h + 10;
				if (p.y > h + 10) p.y = -10;

				ctx!.beginPath();
				ctx!.arc(p.x, p.y, p.r, 0, Math.PI * 2);
				ctx!.fillStyle = `rgba(232, 101, 74, ${p.opacity})`;
				ctx!.fill();
			}

			for (let i = 0; i < particles.length; i++) {
				for (let j = i + 1; j < particles.length; j++) {
					const dx = particles[i].x - particles[j].x;
					const dy = particles[i].y - particles[j].y;
					const distSq = dx * dx + dy * dy;
					if (distSq < CONNECTION_DIST_SQ) {
						const dist = Math.sqrt(distSq);
						const alpha = (1 - dist / CONNECTION_DIST) * 0.18;
						ctx!.beginPath();
						ctx!.moveTo(particles[i].x, particles[i].y);
						ctx!.lineTo(particles[j].x, particles[j].y);
						ctx!.strokeStyle = `rgba(232, 101, 74, ${alpha})`;
						ctx!.lineWidth = 0.6;
						ctx!.stroke();
					}
				}
			}

			animationId = requestAnimationFrame(animate);
		}

		function handleMouseMove(e: MouseEvent) {
			mouseX = e.clientX;
			mouseY = e.clientY;
		}

		function handleMouseLeave() {
			mouseX = -1000;
			mouseY = -1000;
		}

		resize();
		animate();

		window.addEventListener('resize', resize);
		window.addEventListener('mousemove', handleMouseMove);
		document.addEventListener('mouseleave', handleMouseLeave);

		return () => {
			cancelAnimationFrame(animationId);
			window.removeEventListener('resize', resize);
			window.removeEventListener('mousemove', handleMouseMove);
			document.removeEventListener('mouseleave', handleMouseLeave);
		};
	});
</script>

<canvas
	bind:this={canvas}
	class="pointer-events-none absolute inset-0 h-full w-full"
	aria-hidden="true"
>
</canvas>
