process.env.NODE_ENV = 'production';

import config, { resolve } from './rollup.config';

import { uglify } from 'rollup-plugin-uglify';

config.plugins = [...config.plugins, uglify()];

export default config;
