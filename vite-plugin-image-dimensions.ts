import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { imageSize } from 'image-size';
import type { Plugin } from 'vite';

const VIRTUAL_ID = 'virtual:image-dimensions';
const RESOLVED_ID = '\0' + VIRTUAL_ID;
const IMAGES_DIR = 'static/images';

/**
 * Reads the intrinsic dimensions of every file in `static/images` at build time
 * and exposes them as a virtual module keyed by their `imageSrc` path
 * (e.g. `images/foo.png`). This lets components reserve an image's aspect ratio
 * before it loads (avoiding layout shift) without hand-maintaining a dimensions
 * map — new images are picked up automatically.
 */
function computeDimensions(): Record<string, { width: number; height: number }> {
	const dimensions: Record<string, { width: number; height: number }> = {};
	for (const file of readdirSync(IMAGES_DIR)) {
		try {
			const { width, height } = imageSize(readFileSync(join(IMAGES_DIR, file)));
			if (width && height) dimensions[`images/${file}`] = { width, height };
		} catch {
			// Not an image / unsupported format — skip it.
		}
	}
	return dimensions;
}

export function imageDimensions(): Plugin {
	return {
		name: 'image-dimensions',
		resolveId(id) {
			if (id === VIRTUAL_ID) return RESOLVED_ID;
		},
		load(id) {
			if (id === RESOLVED_ID) {
				return `export default ${JSON.stringify(computeDimensions())};`;
			}
		},
		configureServer(server) {
			// Regenerate on image add/remove/change during dev.
			const invalidate = (file: string) => {
				if (!file.includes('static/images')) return;
				const mod = server.moduleGraph.getModuleById(RESOLVED_ID);
				if (mod) {
					server.moduleGraph.invalidateModule(mod);
					server.ws.send({ type: 'full-reload' });
				}
			};
			server.watcher.on('add', invalidate);
			server.watcher.on('unlink', invalidate);
			server.watcher.on('change', invalidate);
		}
	};
}
