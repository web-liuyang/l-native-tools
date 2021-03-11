import * as array from './array';
import * as common from './common';
import * as object from './object';
import * as number from './number';
import * as string from './string';
import * as performance from './performance';

type Type = typeof array & typeof common & typeof object & typeof number & typeof string & typeof performance;

export default { ...array, ...common, ...object, ...number, ...string, ...performance } as Type;
