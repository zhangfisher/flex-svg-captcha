// vite.config.js
import { defineConfig } from 'vite'
import path from 'path'
import RawPlugin from 'vite-raw-plugin'
import vitePluginRaw from 'vite-plugin-raw';

export default defineConfig({
	plugins: [
		vitePluginRaw({
			match: /\.ttf$/,
		}),
	],
  	build: {
		rollupOptions: {
			//external: [], // 这里可以指定一些外部依赖，不会被打包进去
		},
		lib: {
			entry: path.resolve(__dirname, './lib/index.js'), // 入口文件
			name: 'FlexSvgCaptcha', // 导出的库名
			formats: ['es', 'cjs', 'umd'], // 支持esm, cjs, umd三种格式
		},
		ssr: false,
		sourcemap: false,
	},
})
