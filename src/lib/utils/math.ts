export function organicNoise(t: number, seed: number): number {
	return (
		Math.sin(t * 0.7 + seed) * 0.4 +
		Math.sin(t * 1.3 + seed * 1.618) * 0.3 +
		Math.sin(t * 2.1 + seed * 2.414) * 0.2 +
		Math.sin(t * 3.7 + seed * 0.618) * 0.1
	);
}
