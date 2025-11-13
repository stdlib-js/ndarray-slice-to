"use strict";var l=function(r,i){return function(){return i||r((i={exports:{}}).exports,i),i.exports}};var m=l(function(P,v){"use strict";var c=require("@stdlib/assert-is-ndarray-like"),f=require("@stdlib/assert-is-array-like-object"),g=require("@stdlib/assert-is-plain-object"),h=require("@stdlib/assert-is-number").isPrimitive,d=require("@stdlib/assert-is-boolean").isPrimitive,p=require("@stdlib/assert-is-null"),q=require("@stdlib/assert-is-undefined"),b=require("@stdlib/assert-has-own-property"),w=require("@stdlib/ndarray-shape"),y=require("@stdlib/ndarray-base-slice-to"),s=require("@stdlib/string-format");function E(r){return!(h(r)||p(r)||q(r))}function T(r,i){var n,t,u,a,o,e;if(u={strict:!0},t=arguments.length,!c(r))throw new TypeError(s("invalid argument. First argument must be an ndarray. Value: `%s`.",r));if(g(arguments[t-1])){if(t-=1,n=arguments[t],b(n,"strict")){if(!d(n.strict))throw new TypeError(s("invalid option. `%s` option must be a boolean. Option: `%s`.","strict",n.strict));u.strict=n.strict}if(o=w(r),t===1&&o.length>0)throw new RangeError(s("invalid argument. Number of indices does not match the number of array dimensions. Array shape: (%s). Number of indices: %u.",o.join(","),0))}if(f(i)){if(a=i,t>2)throw new Error("invalid invocation. Too many arguments.")}else for(a=[],e=1;e<t;e++)a.push(arguments[e]);for(e=0;e<a.length;e++)if(E(a[e]))throw new TypeError(s("invalid argument. Each index argument must be either an integer, null, or undefined. Value: `%s`.",String(a[e])));return y(r,a,u.strict,!1)}v.exports=T});var N=m();module.exports=N;
/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map
