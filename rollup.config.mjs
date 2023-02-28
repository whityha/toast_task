import { babel } from '@rollup/plugin-babel';
import external from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import commonjs from '@rollup/plugin-commonjs';
import alias from '@rollup/plugin-alias';
import svg from 'rollup-plugin-svg';
import * as path from 'path';

export default [
    {
        input: './src/index.jsx',
        output: [
            {
                file: 'dist/index.js',
                format: 'cjs',
            },
            {
                file: 'dist/index.es.js',
                format: 'es',
                exports: 'named',
            },
        ],
        plugins: [
            alias({
                entries: [{ find: '@', replacement: path.resolve('src') }],
            }),
            svg(),
            commonjs(),
            babel({
                exclude: 'node_modules/**',
                presets: ['@babel/preset-react'],
            }),
            external(['styled-components']),
            resolve({
                extensions: ['.mjs', '.js', '.json', '.node', '.jsx'],
            }),
            terser(),
        ],
    },
];
