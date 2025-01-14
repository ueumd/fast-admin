import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@': path.join(__dirname, './src')
		}
	},
	css: {
		preprocessorOptions: {
			// css 全局变量
			scss: {
				// additionalData: '@import "@/styles/variables.scss";'
				additionalData: `@use "@/styles/variables.scss" as *;` // 导出全局变量和 mixin
			}
		}
	},
	build: {
		outDir: 'dist',
		minify: 'terser',
		rollupOptions: {
			output: {
				assetFileNames: '[ext]/[name].[hash].[ext]',
				chunkFileNames: 'js/[name].[hash].js',
				manualChunks(id) {
					if (id.includes('node_modules')) {
						return id.toString().split('node_modules/')[1].split('/')[0].toString()
					}
				}
			}
		},
		terserOptions: {
			compress: {
				keep_infinity: true,
				drop_console: true,
				drop_debugger: true
			}
		}
	}
})
