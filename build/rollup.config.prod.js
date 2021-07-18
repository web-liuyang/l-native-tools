process.env.NODE_ENV = "production";

import rollupOptionsFunc, { resolve } from "./rollup.config";

// import { uglify } from 'rollup-plugin-uglify'; // 只支持ES5
import { terser } from "rollup-plugin-terser"; // 支持ES6+

export default () => {
  const configList = rollupOptionsFunc("dist");
  configList.plugins = [...configList.plugins, terser()];
  return configList;
};
