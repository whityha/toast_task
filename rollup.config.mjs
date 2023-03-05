import alias from '@rollup/plugin-alias';
import { babel } from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import image from '@rollup/plugin-image';
import resolve from '@rollup/plugin-node-resolve';
import * as path from 'path';
import external from 'rollup-plugin-peer-deps-external';
import { terser } from 'rollup-plugin-terser';

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
            image(),
            alias({
                entries: [{ find: '@', replacement: path.resolve('src') }],
            }),
            commonjs(),
            babel({
                exclude: 'node_modules/**',
                presets: ['@babel/preset-react', '@babel/env'],
            }),
            external(['styled-components']),
            resolve({
                extensions: ['.mjs', '.js', '.json', '.node', '.jsx'],
            }),
            terser(),
        ],
    },
];
