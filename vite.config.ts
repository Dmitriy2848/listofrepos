import { join } from 'path';
import { defineConfig } from 'vite';

import react from '@vitejs/plugin-react';
import viteSvgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), viteSvgr()],
	resolve: {
		alias: {
			app: join(__dirname, 'src', 'app'),
			processes: join(__dirname, 'src', 'processes'),
			pages: join(__dirname, 'src', 'pages'),
			widgets: join(__dirname, 'src', 'widgets'),
			features: join(__dirname, 'src', 'features'),
			entities: join(__dirname, 'src', 'entities'),
			shared: join(__dirname, 'src', 'shared')
		}
	}
});
