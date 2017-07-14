import vue from 'rollup-plugin-vue'
import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'

export default {
    entry: './src/vue-qriously.js',
    dest: './dist/vue-qriously.js',

    plugins: [
        resolve(),
        vue(),
        commonjs(),
        babel({
            exclude: 'node_modules/**',
            presets: ['es2015-rollup']
        }),
    ],

    format: 'umd',
    moduleName: 'vue-qriously'
}