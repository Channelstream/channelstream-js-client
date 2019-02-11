import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';

export default [
    {
        input: 'src/sha.js',
        output: {
            file: 'src/sha-esm.js',
            format: 'esm'
        },
        plugins: [
            nodeResolve(),
            commonjs()
        ]
    },
    {
        input: 'src/sha1.js',
        output: {
            file: 'src/sha1-esm.js',
            format: 'esm'
        },
        plugins: [
            nodeResolve(),
            commonjs()
        ]
    }
]
