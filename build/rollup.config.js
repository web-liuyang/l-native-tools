import path from "path";
// import buble from '@rollup/plugin-buble';
import typescript from "rollup-plugin-typescript2";
import babel from "@rollup/plugin-babel";
import { RollupOptions } from "rollup";
import { name } from "../package.json";
// import commonjs from '@rollup/plugin-commonjs';

// import nodeResolve from '@rollup/plugin-node-resolve';

const resolve = filePath => {
  return path.join(__dirname, "..", filePath);
};

// const COMMONJS = commonjs();

const TSPLUGIN = typescript({
  clean: true,
  useTsconfigDeclarationDir: true,
});

const BABELPLUGIN = babel({
  extensions: [".js", ".ts"],
  exclude: "node_modules/**",
  babelHelpers: "bundled",
});

export { resolve };

/**
 * rollop 配置
 * @param {string} dirName - 路径
 * @returns { RollupOptions }
 */
const rollupOptionsFunc = dirName => ({
  input: resolve("src/index.ts"),
  output: {
    file: resolve(`${dirName}/index.js`),
    format: "umd",
    name,
  },
  plugins: [TSPLUGIN, BABELPLUGIN],
});

export default rollupOptionsFunc;
