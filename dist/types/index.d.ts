import * as array from './array';
import * as common from './common';
import * as object from './object';
import * as number from './number';
import * as string from './string';
import * as performance from './performance';
declare type Type = typeof array & typeof common & typeof object & typeof number & typeof string & typeof performance;
declare const _default: Type;
export default _default;
