// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-ndarray-like@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-array-like-object@v0.1.0-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.1.0-esm/index.mjs";import{isPrimitive as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@v0.1.1-esm/index.mjs";import{isPrimitive as i}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-boolean@v0.1.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-null@v0.1.1-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-undefined@v0.1.1-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.1.1-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-shape@v0.1.0-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-slice-to@v0.1.0-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";function h(s){return!(r(s)||n(s)||o(s))}function j(r,n){var o,j,p,f,v,c;if(p={strict:!0},j=arguments.length,!s(r))throw new TypeError(l("invalid argument. First argument must be an ndarray. Value: `%s`.",r));if(e(arguments[j-1])){if(d(o=arguments[j-=1],"strict")){if(!i(o.strict))throw new TypeError(l("invalid option. `%s` option must be a boolean. Option: `%s`.","strict",o.strict));p.strict=o.strict}if(v=m(r),1===j&&v.length>0)throw new RangeError(l("invalid argument. Number of indices does not match the number of array dimensions. Array shape: (%s). Number of indices: %u.",v.join(","),0))}if(t(n)){if(f=n,j>2)throw new Error("invalid invocation. Too many arguments.")}else for(f=[],c=1;c<j;c++)f.push(arguments[c]);for(c=0;c<f.length;c++)if(h(f[c]))throw new TypeError(l("invalid argument. Each index argument must be either an integer, null, or undefined. Value: `%s`.",String(f[c])));return a(r,f,p.strict,!1)}export{j as default};
//# sourceMappingURL=index.mjs.map