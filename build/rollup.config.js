import path from 'path';
import buble from '@rollup/plugin-buble';
import typescript from 'rollup-plugin-typescript2';

const resolve = (filePath) => {
  return path.join(__dirname, '..', filePath);
};

export { resolve };
export default [
  {
    input: resolve('src/index.ts'),
    output: {
      file: resolve('dist/index.cjs.js'),
      format: 'cjs',
      name: '$l',
    },
    plugins: [
      typescript({
        clean: true,
        useTsconfigDeclarationDir: true,
      }),
      buble(),
    ],
  },
  {
    input: resolve('src/index.ts'),
    output: {
      file: resolve('dist/index.esm.js'),
      format: 'esm',
      name: '$l',
    },
    plugins: [
      typescript({
        clean: true,
        useTsconfigDeclarationDir: true,
      }),
      buble(),
    ],
  },
  {
    input: resolve('src/index.ts'),
    output: {
      file: resolve('dist/index.umd.js'),
      format: 'umd',
      name: '$l',
    },
    plugins: [
      typescript({
        clean: true,
        useTsconfigDeclarationDir: true,
      }),
      buble(),
    ],
  },
];
