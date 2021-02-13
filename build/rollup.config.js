import path from 'path';
// import buble from '@rollup/plugin-buble';
import typescript from 'rollup-plugin-typescript2';
import babel from '@rollup/plugin-babel';
// import commonjs from '@rollup/plugin-commonjs';

// import nodeResolve from '@rollup/plugin-node-resolve';

const resolve = (filePath) => {
  return path.join(__dirname, '..', filePath);
};

// const COMMONJS = commonjs();

const TSPLUGIN = typescript({
  clean: true,
  useTsconfigDeclarationDir: true,
});

const BABELPLUGIN = babel({
  extensions: ['.js', '.ts'],
  exclude: 'node_modules/**',
  babelHelpers: 'bundled',
});

export { resolve };

export default (dirName) => {
  return [
    {
      input: resolve('src/index.ts'),
      output: {
        file: resolve(`${dirName}/index.es.js`),
        format: 'es',
        name: '$l',
        exports: 'default',
      },
      plugins: [TSPLUGIN, BABELPLUGIN],
    },
    {
      input: resolve('src/index.ts'),
      output: {
        file: resolve(`${dirName}/index.cjs.js`),
        format: 'cjs',
        name: '$l',
        exports: 'named',
      },
      plugins: [TSPLUGIN, BABELPLUGIN],
    },
  ];
};
