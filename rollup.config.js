
import clear from 'rollup-plugin-clear'
import { babel } from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import terser from "@rollup/plugin-terser";
import resolve from "@rollup/plugin-node-resolve"
import Embed from "unplugin-embed/rollup"

export default  [
    {
        input:  './lib/index.js',
        output: [
            {
                file: 'dist/index.mjs',
                format:"es",
				sourcemap:true
            },
            {
                file: 'dist/index.js',
                exports:"default",
                format:"cjs",
				sourcemap:true
            }
        ],
        plugins: [
			resolve(),
			commonjs(),
			babel({
				babelHelpers:"runtime",
				include:"core-js/**",
				//exclude: 'node_modules/**'
			}),
			clear({
				targets:["dist"]
			}),
			terser(),
			Embed(),
		]
    }
]
