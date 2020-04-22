import vue from 'rollup-plugin-vue'
import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'

export default [{
    input: './src/vue-qriously.js',
    output: {
      file: './dist/vue-qriously.js',
      format: 'umd',
      name: 'vue-qriously'
    },

    plugins: [
        resolve(),
        vue(),
        commonjs(),
        babel({
            exclude: 'node_modules/**',
            presets: []
        }),
    ],

}]