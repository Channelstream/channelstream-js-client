import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';

export default {
    input: 'src/sha.js',
    output: {
        file: 'src/sha-esm.js',
        format: 'esm'
    },
    plugins: [
        nodeResolve(),
        commonjs()
    ]
}
