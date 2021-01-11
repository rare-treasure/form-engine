!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("vue")):"function"==typeof define&&define.amd?define(["vue"],e):(t="undefined"!=typeof globalThis?globalThis:t||self)["v-form-engine"]=e(t.Vue)}(this,(function(t){"use strict";function e(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var r=e(t);
/*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */function n(t,e,r,n){var o,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,n);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(a=(i<3?o(a):i>3?o(e,r,a):o(e,r))||a);return i>3&&a&&Object.defineProperty(e,r,a),a}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function i(t){var e={exports:{}};return t(e,e.exports),e.exports}var a=function(t){return t&&t.Math==Math&&t},c=a("object"==typeof globalThis&&globalThis)||a("object"==typeof window&&window)||a("object"==typeof self&&self)||a("object"==typeof o&&o)||function(){return this}()||Function("return this")(),u=function(t){try{return!!t()}catch(t){return!0}},f=!u((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),s={}.propertyIsEnumerable,l=Object.getOwnPropertyDescriptor,p={f:l&&!s.call({1:2},1)?function(t){var e=l(this,t);return!!e&&e.enumerable}:s},d=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},y={}.toString,v=function(t){return y.call(t).slice(8,-1)},h="".split,g=u((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==v(t)?h.call(t,""):Object(t)}:Object,m=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t},b=function(t){return g(m(t))},O=function(t){return"object"==typeof t?null!==t:"function"==typeof t},S=function(t,e){if(!O(t))return t;var r,n;if(e&&"function"==typeof(r=t.toString)&&!O(n=r.call(t)))return n;if("function"==typeof(r=t.valueOf)&&!O(n=r.call(t)))return n;if(!e&&"function"==typeof(r=t.toString)&&!O(n=r.call(t)))return n;throw TypeError("Can't convert object to primitive value")},w={}.hasOwnProperty,_=function(t,e){return w.call(t,e)},E=c.document,x=O(E)&&O(E.createElement),j=function(t){return x?E.createElement(t):{}},P=!f&&!u((function(){return 7!=Object.defineProperty(j("div"),"a",{get:function(){return 7}}).a})),A=Object.getOwnPropertyDescriptor,R={f:f?A:function(t,e){if(t=b(t),e=S(e,!0),P)try{return A(t,e)}catch(t){}if(_(t,e))return d(!p.f.call(t,e),t[e])}},T=function(t){if(!O(t))throw TypeError(String(t)+" is not an object");return t},C=Object.defineProperty,I={f:f?C:function(t,e,r){if(T(t),e=S(e,!0),T(r),P)try{return C(t,e,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported");return"value"in r&&(t[e]=r.value),t}},$=f?function(t,e,r){return I.f(t,e,d(1,r))}:function(t,e,r){return t[e]=r,t},N=function(t,e){try{$(c,t,e)}catch(r){c[t]=e}return e},D="__core-js_shared__",k=c[D]||N(D,{}),L=Function.toString;"function"!=typeof k.inspectSource&&(k.inspectSource=function(t){return L.call(t)});var M,F,U,V=k.inspectSource,G=c.WeakMap,z="function"==typeof G&&/native code/.test(V(G)),B=i((function(t){(t.exports=function(t,e){return k[t]||(k[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.8.2",mode:"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})})),K=0,W=Math.random(),H=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++K+W).toString(36)},X=B("keys"),Y=function(t){return X[t]||(X[t]=H(t))},q={},J=c.WeakMap;if(z){var Q=k.state||(k.state=new J),Z=Q.get,tt=Q.has,et=Q.set;M=function(t,e){return e.facade=t,et.call(Q,t,e),e},F=function(t){return Z.call(Q,t)||{}},U=function(t){return tt.call(Q,t)}}else{var rt=Y("state");q[rt]=!0,M=function(t,e){return e.facade=t,$(t,rt,e),e},F=function(t){return _(t,rt)?t[rt]:{}},U=function(t){return _(t,rt)}}var nt,ot={set:M,get:F,has:U,enforce:function(t){return U(t)?F(t):M(t,{})},getterFor:function(t){return function(e){var r;if(!O(e)||(r=F(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return r}}},it=i((function(t){var e=ot.get,r=ot.enforce,n=String(String).split("String");(t.exports=function(t,e,o,i){var a,u=!!i&&!!i.unsafe,f=!!i&&!!i.enumerable,s=!!i&&!!i.noTargetGet;"function"==typeof o&&("string"!=typeof e||_(o,"name")||$(o,"name",e),(a=r(o)).source||(a.source=n.join("string"==typeof e?e:""))),t!==c?(u?!s&&t[e]&&(f=!0):delete t[e],f?t[e]=o:$(t,e,o)):f?t[e]=o:N(e,o)})(Function.prototype,"toString",(function(){return"function"==typeof this&&e(this).source||V(this)}))})),at=c,ct=function(t){return"function"==typeof t?t:void 0},ut=function(t,e){return arguments.length<2?ct(at[t])||ct(c[t]):at[t]&&at[t][e]||c[t]&&c[t][e]},ft=Math.ceil,st=Math.floor,lt=function(t){return isNaN(t=+t)?0:(t>0?st:ft)(t)},pt=Math.min,dt=function(t){return t>0?pt(lt(t),9007199254740991):0},yt=Math.max,vt=Math.min,ht=function(t){return function(e,r,n){var o,i=b(e),a=dt(i.length),c=function(t,e){var r=lt(t);return r<0?yt(r+e,0):vt(r,e)}(n,a);if(t&&r!=r){for(;a>c;)if((o=i[c++])!=o)return!0}else for(;a>c;c++)if((t||c in i)&&i[c]===r)return t||c||0;return!t&&-1}},gt={includes:ht(!0),indexOf:ht(!1)},mt=gt.indexOf,bt=function(t,e){var r,n=b(t),o=0,i=[];for(r in n)!_(q,r)&&_(n,r)&&i.push(r);for(;e.length>o;)_(n,r=e[o++])&&(~mt(i,r)||i.push(r));return i},Ot=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],St=Ot.concat("length","prototype"),wt={f:Object.getOwnPropertyNames||function(t){return bt(t,St)}},_t={f:Object.getOwnPropertySymbols},Et=ut("Reflect","ownKeys")||function(t){var e=wt.f(T(t)),r=_t.f;return r?e.concat(r(t)):e},xt=function(t,e){for(var r=Et(e),n=I.f,o=R.f,i=0;i<r.length;i++){var a=r[i];_(t,a)||n(t,a,o(e,a))}},jt=/#|\.prototype\./,Pt=function(t,e){var r=Rt[At(t)];return r==Ct||r!=Tt&&("function"==typeof e?u(e):!!e)},At=Pt.normalize=function(t){return String(t).replace(jt,".").toLowerCase()},Rt=Pt.data={},Tt=Pt.NATIVE="N",Ct=Pt.POLYFILL="P",It=Pt,$t=R.f,Nt=function(t,e){var r,n,o,i,a,u=t.target,f=t.global,s=t.stat;if(r=f?c:s?c[u]||N(u,{}):(c[u]||{}).prototype)for(n in e){if(i=e[n],o=t.noTargetGet?(a=$t(r,n))&&a.value:r[n],!It(f?n:u+(s?".":"#")+n,t.forced)&&void 0!==o){if(typeof i==typeof o)continue;xt(i,o)}(t.sham||o&&o.sham)&&$(i,"sham",!0),it(r,n,i,t)}},Dt=!!Object.getOwnPropertySymbols&&!u((function(){return!String(Symbol())})),kt=Dt&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,Lt=Array.isArray||function(t){return"Array"==v(t)},Mt=function(t){return Object(m(t))},Ft=Object.keys||function(t){return bt(t,Ot)},Ut=f?Object.defineProperties:function(t,e){T(t);for(var r,n=Ft(e),o=n.length,i=0;o>i;)I.f(t,r=n[i++],e[r]);return t},Vt=ut("document","documentElement"),Gt=Y("IE_PROTO"),zt=function(){},Bt=function(t){return"<script>"+t+"</"+"script>"},Kt=function(){try{nt=document.domain&&new ActiveXObject("htmlfile")}catch(t){}var t,e;Kt=nt?function(t){t.write(Bt("")),t.close();var e=t.parentWindow.Object;return t=null,e}(nt):((e=j("iframe")).style.display="none",Vt.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write(Bt("document.F=Object")),t.close(),t.F);for(var r=Ot.length;r--;)delete Kt.prototype[Ot[r]];return Kt()};q[Gt]=!0;var Wt=Object.create||function(t,e){var r;return null!==t?(zt.prototype=T(t),r=new zt,zt.prototype=null,r[Gt]=t):r=Kt(),void 0===e?r:Ut(r,e)},Ht=wt.f,Xt={}.toString,Yt="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],qt={f:function(t){return Yt&&"[object Window]"==Xt.call(t)?function(t){try{return Ht(t)}catch(t){return Yt.slice()}}(t):Ht(b(t))}},Jt=B("wks"),Qt=c.Symbol,Zt=kt?Qt:Qt&&Qt.withoutSetter||H,te=function(t){return _(Jt,t)||(Dt&&_(Qt,t)?Jt[t]=Qt[t]:Jt[t]=Zt("Symbol."+t)),Jt[t]},ee={f:te},re=I.f,ne=function(t){var e=at.Symbol||(at.Symbol={});_(e,t)||re(e,t,{value:ee.f(t)})},oe=I.f,ie=te("toStringTag"),ae=function(t,e,r){t&&!_(t=r?t:t.prototype,ie)&&oe(t,ie,{configurable:!0,value:e})},ce=function(t,e,r){if(function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function")}(t),void 0===e)return t;switch(r){case 0:return function(){return t.call(e)};case 1:return function(r){return t.call(e,r)};case 2:return function(r,n){return t.call(e,r,n)};case 3:return function(r,n,o){return t.call(e,r,n,o)}}return function(){return t.apply(e,arguments)}},ue=te("species"),fe=function(t,e){var r;return Lt(t)&&("function"!=typeof(r=t.constructor)||r!==Array&&!Lt(r.prototype)?O(r)&&null===(r=r[ue])&&(r=void 0):r=void 0),new(void 0===r?Array:r)(0===e?0:e)},se=[].push,le=function(t){var e=1==t,r=2==t,n=3==t,o=4==t,i=6==t,a=7==t,c=5==t||i;return function(u,f,s,l){for(var p,d,y=Mt(u),v=g(y),h=ce(f,s,3),m=dt(v.length),b=0,O=l||fe,S=e?O(u,m):r||a?O(u,0):void 0;m>b;b++)if((c||b in v)&&(d=h(p=v[b],b,y),t))if(e)S[b]=d;else if(d)switch(t){case 3:return!0;case 5:return p;case 6:return b;case 2:se.call(S,p)}else switch(t){case 4:return!1;case 7:se.call(S,p)}return i?-1:n||o?o:S}},pe={forEach:le(0),map:le(1),filter:le(2),some:le(3),every:le(4),find:le(5),findIndex:le(6),filterOut:le(7)},de=pe.forEach,ye=Y("hidden"),ve="Symbol",he=te("toPrimitive"),ge=ot.set,me=ot.getterFor(ve),be=Object.prototype,Oe=c.Symbol,Se=ut("JSON","stringify"),we=R.f,_e=I.f,Ee=qt.f,xe=p.f,je=B("symbols"),Pe=B("op-symbols"),Ae=B("string-to-symbol-registry"),Re=B("symbol-to-string-registry"),Te=B("wks"),Ce=c.QObject,Ie=!Ce||!Ce.prototype||!Ce.prototype.findChild,$e=f&&u((function(){return 7!=Wt(_e({},"a",{get:function(){return _e(this,"a",{value:7}).a}})).a}))?function(t,e,r){var n=we(be,e);n&&delete be[e],_e(t,e,r),n&&t!==be&&_e(be,e,n)}:_e,Ne=function(t,e){var r=je[t]=Wt(Oe.prototype);return ge(r,{type:ve,tag:t,description:e}),f||(r.description=e),r},De=kt?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof Oe},ke=function(t,e,r){t===be&&ke(Pe,e,r),T(t);var n=S(e,!0);return T(r),_(je,n)?(r.enumerable?(_(t,ye)&&t[ye][n]&&(t[ye][n]=!1),r=Wt(r,{enumerable:d(0,!1)})):(_(t,ye)||_e(t,ye,d(1,{})),t[ye][n]=!0),$e(t,n,r)):_e(t,n,r)},Le=function(t,e){T(t);var r=b(e),n=Ft(r).concat(Ve(r));return de(n,(function(e){f&&!Me.call(r,e)||ke(t,e,r[e])})),t},Me=function(t){var e=S(t,!0),r=xe.call(this,e);return!(this===be&&_(je,e)&&!_(Pe,e))&&(!(r||!_(this,e)||!_(je,e)||_(this,ye)&&this[ye][e])||r)},Fe=function(t,e){var r=b(t),n=S(e,!0);if(r!==be||!_(je,n)||_(Pe,n)){var o=we(r,n);return!o||!_(je,n)||_(r,ye)&&r[ye][n]||(o.enumerable=!0),o}},Ue=function(t){var e=Ee(b(t)),r=[];return de(e,(function(t){_(je,t)||_(q,t)||r.push(t)})),r},Ve=function(t){var e=t===be,r=Ee(e?Pe:b(t)),n=[];return de(r,(function(t){!_(je,t)||e&&!_(be,t)||n.push(je[t])})),n};if(Dt||(it((Oe=function(){if(this instanceof Oe)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=H(t),r=function(t){this===be&&r.call(Pe,t),_(this,ye)&&_(this[ye],e)&&(this[ye][e]=!1),$e(this,e,d(1,t))};return f&&Ie&&$e(be,e,{configurable:!0,set:r}),Ne(e,t)}).prototype,"toString",(function(){return me(this).tag})),it(Oe,"withoutSetter",(function(t){return Ne(H(t),t)})),p.f=Me,I.f=ke,R.f=Fe,wt.f=qt.f=Ue,_t.f=Ve,ee.f=function(t){return Ne(te(t),t)},f&&(_e(Oe.prototype,"description",{configurable:!0,get:function(){return me(this).description}}),it(be,"propertyIsEnumerable",Me,{unsafe:!0}))),Nt({global:!0,wrap:!0,forced:!Dt,sham:!Dt},{Symbol:Oe}),de(Ft(Te),(function(t){ne(t)})),Nt({target:ve,stat:!0,forced:!Dt},{for:function(t){var e=String(t);if(_(Ae,e))return Ae[e];var r=Oe(e);return Ae[e]=r,Re[r]=e,r},keyFor:function(t){if(!De(t))throw TypeError(t+" is not a symbol");if(_(Re,t))return Re[t]},useSetter:function(){Ie=!0},useSimple:function(){Ie=!1}}),Nt({target:"Object",stat:!0,forced:!Dt,sham:!f},{create:function(t,e){return void 0===e?Wt(t):Le(Wt(t),e)},defineProperty:ke,defineProperties:Le,getOwnPropertyDescriptor:Fe}),Nt({target:"Object",stat:!0,forced:!Dt},{getOwnPropertyNames:Ue,getOwnPropertySymbols:Ve}),Nt({target:"Object",stat:!0,forced:u((function(){_t.f(1)}))},{getOwnPropertySymbols:function(t){return _t.f(Mt(t))}}),Se){var Ge=!Dt||u((function(){var t=Oe();return"[null]"!=Se([t])||"{}"!=Se({a:t})||"{}"!=Se(Object(t))}));Nt({target:"JSON",stat:!0,forced:Ge},{stringify:function(t,e,r){for(var n,o=[t],i=1;arguments.length>i;)o.push(arguments[i++]);if(n=e,(O(e)||void 0!==t)&&!De(t))return Lt(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!De(e))return e}),o[1]=e,Se.apply(null,o)}})}Oe.prototype[he]||$(Oe.prototype,he,Oe.prototype.valueOf),ae(Oe,ve),q[ye]=!0;var ze=I.f,Be=c.Symbol;if(f&&"function"==typeof Be&&(!("description"in Be.prototype)||void 0!==Be().description)){var Ke={},We=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof We?new Be(t):void 0===t?Be():Be(t);return""===t&&(Ke[e]=!0),e};xt(We,Be);var He=We.prototype=Be.prototype;He.constructor=We;var Xe=He.toString,Ye="Symbol(test)"==String(Be("test")),qe=/^Symbol\((.*)\)[^)]+$/;ze(He,"description",{configurable:!0,get:function(){var t=O(this)?this.valueOf():this,e=Xe.call(t);if(_(Ke,t))return"";var r=Ye?e.slice(7,-1):e.replace(qe,"$1");return""===r?void 0:r}}),Nt({global:!0,forced:!0},{Symbol:We})}ne("iterator");var Je,Qe,Ze=function(t,e,r){var n=S(e);n in t?I.f(t,n,d(0,r)):t[n]=r},tr=ut("navigator","userAgent")||"",er=c.process,rr=er&&er.versions,nr=rr&&rr.v8;nr?Qe=(Je=nr.split("."))[0]+Je[1]:tr&&(!(Je=tr.match(/Edge\/(\d+)/))||Je[1]>=74)&&(Je=tr.match(/Chrome\/(\d+)/))&&(Qe=Je[1]);var or=Qe&&+Qe,ir=te("species"),ar=te("isConcatSpreadable"),cr=9007199254740991,ur="Maximum allowed index exceeded",fr=or>=51||!u((function(){var t=[];return t[ar]=!1,t.concat()[0]!==t})),sr=function(t){return or>=51||!u((function(){var e=[];return(e.constructor={})[ir]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}("concat"),lr=function(t){if(!O(t))return!1;var e=t[ar];return void 0!==e?!!e:Lt(t)};Nt({target:"Array",proto:!0,forced:!fr||!sr},{concat:function(t){var e,r,n,o,i,a=Mt(this),c=fe(a,0),u=0;for(e=-1,n=arguments.length;e<n;e++)if(lr(i=-1===e?a:arguments[e])){if(u+(o=dt(i.length))>cr)throw TypeError(ur);for(r=0;r<o;r++,u++)r in i&&Ze(c,u,i[r])}else{if(u>=cr)throw TypeError(ur);Ze(c,u++,i)}return c.length=u,c}});var pr=function(t,e){var r=[][t];return!!r&&u((function(){r.call(null,e||function(){throw 1},1)}))},dr=Object.defineProperty,yr={},vr=function(t){throw t},hr=function(t,e){if(_(yr,t))return yr[t];e||(e={});var r=[][t],n=!!_(e,"ACCESSORS")&&e.ACCESSORS,o=_(e,0)?e[0]:vr,i=_(e,1)?e[1]:void 0;return yr[t]=!!r&&!u((function(){if(n&&!f)return!0;var t={length:-1};n?dr(t,1,{enumerable:!0,get:vr}):t[1]=1,r.call(t,o,i)}))},gr=pe.forEach,mr=pr("forEach"),br=hr("forEach"),Or=mr&&br?[].forEach:function(t){return gr(this,t,arguments.length>1?arguments[1]:void 0)};Nt({target:"Array",proto:!0,forced:[].forEach!=Or},{forEach:Or});var Sr=function(t,e,r,n){try{return n?e(T(r)[0],r[1]):e(r)}catch(e){throw function(t){var e=t.return;if(void 0!==e)T(e.call(t)).value}(t),e}},wr={},_r=te("iterator"),Er=Array.prototype,xr=function(t){return void 0!==t&&(wr.Array===t||Er[_r]===t)},jr={};jr[te("toStringTag")]="z";var Pr="[object z]"===String(jr),Ar=te("toStringTag"),Rr="Arguments"==v(function(){return arguments}()),Tr=Pr?v:function(t){var e,r,n;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),Ar))?r:Rr?v(e):"Object"==(n=v(e))&&"function"==typeof e.callee?"Arguments":n},Cr=te("iterator"),Ir=function(t){if(null!=t)return t[Cr]||t["@@iterator"]||wr[Tr(t)]},$r=te("iterator"),Nr=!1;try{var Dr=0,kr={next:function(){return{done:!!Dr++}},return:function(){Nr=!0}};kr[$r]=function(){return this},Array.from(kr,(function(){throw 2}))}catch(t){}var Lr=!function(t,e){if(!e&&!Nr)return!1;var r=!1;try{var n={};n[$r]=function(){return{next:function(){return{done:r=!0}}}},t(n)}catch(t){}return r}((function(t){Array.from(t)}));Nt({target:"Array",stat:!0,forced:Lr},{from:function(t){var e,r,n,o,i,a,c=Mt(t),u="function"==typeof this?this:Array,f=arguments.length,s=f>1?arguments[1]:void 0,l=void 0!==s,p=Ir(c),d=0;if(l&&(s=ce(s,f>2?arguments[2]:void 0,2)),null==p||u==Array&&xr(p))for(r=new u(e=dt(c.length));e>d;d++)a=l?s(c[d],d):c[d],Ze(r,d,a);else for(i=(o=p.call(c)).next,r=new u;!(n=i.call(o)).done;d++)a=l?Sr(o,s,[n.value,d],!0):n.value,Ze(r,d,a);return r.length=d,r}});var Mr=gt.indexOf,Fr=[].indexOf,Ur=!!Fr&&1/[1].indexOf(1,-0)<0,Vr=pr("indexOf"),Gr=hr("indexOf",{ACCESSORS:!0,1:0});Nt({target:"Array",proto:!0,forced:Ur||!Vr||!Gr},{indexOf:function(t){return Ur?Fr.apply(this,arguments)||0:Mr(this,t,arguments.length>1?arguments[1]:void 0)}});var zr=I.f,Br=Function.prototype,Kr=Br.toString,Wr=/^\s*function ([^ (]*)/,Hr="name";f&&!(Hr in Br)&&zr(Br,Hr,{configurable:!0,get:function(){try{return Kr.call(this).match(Wr)[1]}catch(t){return""}}});var Xr=R.f,Yr=u((function(){Xr(1)}));Nt({target:"Object",stat:!0,forced:!f||Yr,sham:!f},{getOwnPropertyDescriptor:function(t,e){return Xr(b(t),e)}});var qr=qt.f,Jr=u((function(){return!Object.getOwnPropertyNames(1)}));Nt({target:"Object",stat:!0,forced:Jr},{getOwnPropertyNames:qr});var Qr=!u((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype})),Zr=Y("IE_PROTO"),tn=Object.prototype,en=Qr?Object.getPrototypeOf:function(t){return t=Mt(t),_(t,Zr)?t[Zr]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?tn:null},rn=u((function(){en(1)}));Nt({target:"Object",stat:!0,forced:rn,sham:!Qr},{getPrototypeOf:function(t){return en(Mt(t))}});var nn=u((function(){Ft(1)}));Nt({target:"Object",stat:!0,forced:nn},{keys:function(t){return Ft(Mt(t))}});var on=Pr?{}.toString:function(){return"[object "+Tr(this)+"]"};Pr||it(Object.prototype,"toString",on,{unsafe:!0});var an=function(){var t=T(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e},cn="toString",un=RegExp.prototype,fn=un.toString,sn=u((function(){return"/a/b"!=fn.call({source:"a",flags:"b"})})),ln=fn.name!=cn;(sn||ln)&&it(RegExp.prototype,cn,(function(){var t=T(this),e=String(t.source),r=t.flags;return"/"+e+"/"+String(void 0===r&&t instanceof RegExp&&!("flags"in un)?an.call(t):r)}),{unsafe:!0});var pn,dn,yn,vn=function(t){return function(e,r){var n,o,i=String(m(e)),a=lt(r),c=i.length;return a<0||a>=c?t?"":void 0:(n=i.charCodeAt(a))<55296||n>56319||a+1===c||(o=i.charCodeAt(a+1))<56320||o>57343?t?i.charAt(a):n:t?i.slice(a,a+2):o-56320+(n-55296<<10)+65536}},hn={codeAt:vn(!1),charAt:vn(!0)},gn=te("iterator"),mn=!1;[].keys&&("next"in(yn=[].keys())?(dn=en(en(yn)))!==Object.prototype&&(pn=dn):mn=!0),null==pn&&(pn={}),_(pn,gn)||$(pn,gn,(function(){return this}));var bn={IteratorPrototype:pn,BUGGY_SAFARI_ITERATORS:mn},On=bn.IteratorPrototype,Sn=function(){return this},wn=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,r={};try{(t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(r,[]),e=r instanceof Array}catch(t){}return function(r,n){return T(r),function(t){if(!O(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype")}(n),e?t.call(r,n):r.__proto__=n,r}}():void 0),_n=bn.IteratorPrototype,En=bn.BUGGY_SAFARI_ITERATORS,xn=te("iterator"),jn="keys",Pn="values",An="entries",Rn=function(){return this},Tn=function(t,e,r,n,o,i,a){!function(t,e,r){var n=e+" Iterator";t.prototype=Wt(On,{next:d(1,r)}),ae(t,n,!1),wr[n]=Sn}(r,e,n);var c,u,f,s=function(t){if(t===o&&h)return h;if(!En&&t in y)return y[t];switch(t){case jn:case Pn:case An:return function(){return new r(this,t)}}return function(){return new r(this)}},l=e+" Iterator",p=!1,y=t.prototype,v=y[xn]||y["@@iterator"]||o&&y[o],h=!En&&v||s(o),g="Array"==e&&y.entries||v;if(g&&(c=en(g.call(new t)),_n!==Object.prototype&&c.next&&(en(c)!==_n&&(wn?wn(c,_n):"function"!=typeof c[xn]&&$(c,xn,Rn)),ae(c,l,!0))),o==Pn&&v&&v.name!==Pn&&(p=!0,h=function(){return v.call(this)}),y[xn]!==h&&$(y,xn,h),wr[e]=h,o)if(u={values:s(Pn),keys:i?h:s(jn),entries:s(An)},a)for(f in u)(En||p||!(f in y))&&it(y,f,u[f]);else Nt({target:e,proto:!0,forced:En||p},u);return u},Cn=hn.charAt,In="String Iterator",$n=ot.set,Nn=ot.getterFor(In);Tn(String,"String",(function(t){$n(this,{type:In,string:String(t),index:0})}),(function(){var t,e=Nn(this),r=e.string,n=e.index;return n>=r.length?{value:void 0,done:!0}:(t=Cn(r,n),e.index+=t.length,{value:t,done:!1})}));var Dn={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0};for(var kn in Dn){var Ln=c[kn],Mn=Ln&&Ln.prototype;if(Mn&&Mn.forEach!==Or)try{$(Mn,"forEach",Or)}catch(t){Mn.forEach=Or}}var Fn=te("unscopables"),Un=Array.prototype;null==Un[Fn]&&I.f(Un,Fn,{configurable:!0,value:Wt(null)});var Vn=function(t){Un[Fn][t]=!0},Gn="Array Iterator",zn=ot.set,Bn=ot.getterFor(Gn),Kn=Tn(Array,"Array",(function(t,e){zn(this,{type:Gn,target:b(t),index:0,kind:e})}),(function(){var t=Bn(this),e=t.target,r=t.kind,n=t.index++;return!e||n>=e.length?(t.target=void 0,{value:void 0,done:!0}):"keys"==r?{value:n,done:!1}:"values"==r?{value:e[n],done:!1}:{value:[n,e[n]],done:!1}}),"values");wr.Arguments=wr.Array,Vn("keys"),Vn("values"),Vn("entries");var Wn=te("iterator"),Hn=te("toStringTag"),Xn=Kn.values;for(var Yn in Dn){var qn=c[Yn],Jn=qn&&qn.prototype;if(Jn){if(Jn[Wn]!==Xn)try{$(Jn,Wn,Xn)}catch(t){Jn[Wn]=Xn}if(Jn[Hn]||$(Jn,Hn,Yn),Dn[Yn])for(var Qn in Kn)if(Jn[Qn]!==Kn[Qn])try{$(Jn,Qn,Kn[Qn])}catch(t){Jn[Qn]=Kn[Qn]}}}function Zn(t){return(Zn="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function to(t){return(to="function"==typeof Symbol&&"symbol"===Zn(Symbol.iterator)?function(t){return Zn(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":Zn(t)})(t)}function eo(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function ro(t){return function(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function no(){return"undefined"!=typeof Reflect&&Reflect.defineMetadata&&Reflect.getOwnMetadataKeys}function oo(t,e){io(t,e),Object.getOwnPropertyNames(e.prototype).forEach((function(r){io(t.prototype,e.prototype,r)})),Object.getOwnPropertyNames(e).forEach((function(r){io(t,e,r)}))}function io(t,e,r){(r?Reflect.getOwnMetadataKeys(e,r):Reflect.getOwnMetadataKeys(e)).forEach((function(n){var o=r?Reflect.getOwnMetadata(n,e,r):Reflect.getOwnMetadata(n,e);r?Reflect.defineMetadata(n,o,t,r):Reflect.defineMetadata(n,o,t)}))}var ao={__proto__:[]}instanceof Array;function co(t){return function(e,r,n){var o="function"==typeof e?e:e.constructor;o.__decorators__||(o.__decorators__=[]),"number"!=typeof n&&(n=void 0),o.__decorators__.push((function(e){return t(e,r,n)}))}}function uo(t){"undefined"!=typeof console&&console.warn("[vue-class-component] "+t)}function fo(t,e){var n=e.prototype._init;e.prototype._init=function(){var e=this,r=Object.getOwnPropertyNames(t);if(t.$options.props)for(var n in t.$options.props)t.hasOwnProperty(n)||r.push(n);r.forEach((function(r){Object.defineProperty(e,r,{get:function(){return t[r]},set:function(e){t[r]=e},configurable:!0})}))};var o=new e;e.prototype._init=n;var i={};return Object.keys(o).forEach((function(t){void 0!==o[t]&&(i[t]=o[t])})),"production"!==process.env.NODE_ENV&&!(e.prototype instanceof r.default)&&Object.keys(i).length>0&&uo("Component class must inherit Vue or its descendant class when class property is used."),i}var so=["data","beforeCreate","created","beforeMount","mounted","beforeDestroy","destroyed","beforeUpdate","updated","activated","deactivated","render","errorCaptured","serverPrefetch"];function lo(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e.name=e.name||t._componentTag||t.name;var n=t.prototype;Object.getOwnPropertyNames(n).forEach((function(t){if("constructor"!==t)if(so.indexOf(t)>-1)e[t]=n[t];else{var r=Object.getOwnPropertyDescriptor(n,t);void 0!==r.value?"function"==typeof r.value?(e.methods||(e.methods={}))[t]=r.value:(e.mixins||(e.mixins=[])).push({data:function(){return eo({},t,r.value)}}):(r.get||r.set)&&((e.computed||(e.computed={}))[t]={get:r.get,set:r.set})}})),(e.mixins||(e.mixins=[])).push({data:function(){return fo(this,t)}});var o=t.__decorators__;o&&(o.forEach((function(t){return t(e)})),delete t.__decorators__);var i=Object.getPrototypeOf(t.prototype),a=i instanceof r.default?i.constructor:r.default,c=a.extend(e);return vo(c,t,a),no()&&oo(c,t),c}var po=["cid","super","options","superOptions","extendOptions","sealedOptions","component","directive","filter"],yo={prototype:!0,arguments:!0,callee:!0,caller:!0};function vo(t,e,r){Object.getOwnPropertyNames(e).forEach((function(n){if(!yo[n]){var o=Object.getOwnPropertyDescriptor(t,n);if(!o||o.configurable){var i,a,c=Object.getOwnPropertyDescriptor(e,n);if(!ao){if("cid"===n)return;var u=Object.getOwnPropertyDescriptor(r,n);if(i=c.value,a=to(i),null!=i&&("object"===a||"function"===a)&&u&&u.value===c.value)return}"production"!==process.env.NODE_ENV&&po.indexOf(n)>=0&&uo("Static property name '".concat(n,"' declared on class '").concat(e.name,"' ")+"conflicts with reserved property name of Vue internal. It may cause unexpected behavior of the component. Consider renaming the property."),Object.defineProperty(t,n,c)}}}))}function ho(t){return"function"==typeof t?lo(t):function(e){return lo(e,t)}}function go(t,e){return RegExp(t,e)}ho.registerHooks=function(t){so.push.apply(so,ro(t))};var mo,bo,Oo={UNSUPPORTED_Y:u((function(){var t=go("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),BROKEN_CARET:u((function(){var t=go("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},So=RegExp.prototype.exec,wo=String.prototype.replace,_o=So,Eo=(mo=/a/,bo=/b*/g,So.call(mo,"a"),So.call(bo,"a"),0!==mo.lastIndex||0!==bo.lastIndex),xo=Oo.UNSUPPORTED_Y||Oo.BROKEN_CARET,jo=void 0!==/()??/.exec("")[1];(Eo||jo||xo)&&(_o=function(t){var e,r,n,o,i=this,a=xo&&i.sticky,c=an.call(i),u=i.source,f=0,s=t;return a&&(-1===(c=c.replace("y","")).indexOf("g")&&(c+="g"),s=String(t).slice(i.lastIndex),i.lastIndex>0&&(!i.multiline||i.multiline&&"\n"!==t[i.lastIndex-1])&&(u="(?: "+u+")",s=" "+s,f++),r=new RegExp("^(?:"+u+")",c)),jo&&(r=new RegExp("^"+u+"$(?!\\s)",c)),Eo&&(e=i.lastIndex),n=So.call(a?r:i,s),a?n?(n.input=n.input.slice(f),n[0]=n[0].slice(f),n.index=i.lastIndex,i.lastIndex+=n[0].length):i.lastIndex=0:Eo&&n&&(i.lastIndex=i.global?n.index+n[0].length:e),jo&&n&&n.length>1&&wo.call(n[0],r,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(n[o]=void 0)})),n});var Po=_o;Nt({target:"RegExp",proto:!0,forced:/./.exec!==Po},{exec:Po});var Ao=te("species"),Ro=!u((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),To="$0"==="a".replace(/./,"$0"),Co=te("replace"),Io=!!/./[Co]&&""===/./[Co]("a","$0"),$o=!u((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var r="ab".split(t);return 2!==r.length||"a"!==r[0]||"b"!==r[1]})),No=hn.charAt,Do=function(t,e,r){return e+(r?No(t,e).length:1)},ko=Math.floor,Lo="".replace,Mo=/\$([$&'`]|\d\d?|<[^>]*>)/g,Fo=/\$([$&'`]|\d\d?)/g,Uo=function(t,e,r,n,o,i){var a=r+t.length,c=n.length,u=Fo;return void 0!==o&&(o=Mt(o),u=Mo),Lo.call(i,u,(function(i,u){var f;switch(u.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,r);case"'":return e.slice(a);case"<":f=o[u.slice(1,-1)];break;default:var s=+u;if(0===s)return i;if(s>c){var l=ko(s/10);return 0===l?i:l<=c?void 0===n[l-1]?u.charAt(1):n[l-1]+u.charAt(1):i}f=n[s-1]}return void 0===f?"":f}))},Vo=function(t,e){var r=t.exec;if("function"==typeof r){var n=r.call(t,e);if("object"!=typeof n)throw TypeError("RegExp exec method returned something other than an Object or null");return n}if("RegExp"!==v(t))throw TypeError("RegExp#exec called on incompatible receiver");return Po.call(t,e)},Go=Math.max,zo=Math.min;!function(t,e,r,n){var o=te(t),i=!u((function(){var e={};return e[o]=function(){return 7},7!=""[t](e)})),a=i&&!u((function(){var e=!1,r=/a/;return"split"===t&&((r={}).constructor={},r.constructor[Ao]=function(){return r},r.flags="",r[o]=/./[o]),r.exec=function(){return e=!0,null},r[o](""),!e}));if(!i||!a||"replace"===t&&(!Ro||!To||Io)||"split"===t&&!$o){var c=/./[o],f=r(o,""[t],(function(t,e,r,n,o){return e.exec===Po?i&&!o?{done:!0,value:c.call(e,r,n)}:{done:!0,value:t.call(r,e,n)}:{done:!1}}),{REPLACE_KEEPS_$0:To,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:Io}),s=f[0],l=f[1];it(String.prototype,t,s),it(RegExp.prototype,o,2==e?function(t,e){return l.call(t,this,e)}:function(t){return l.call(t,this)})}n&&$(RegExp.prototype[o],"sham",!0)}("replace",2,(function(t,e,r,n){var o=n.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,i=n.REPLACE_KEEPS_$0,a=o?"$":"$0";return[function(r,n){var o=m(this),i=null==r?void 0:r[t];return void 0!==i?i.call(r,o,n):e.call(String(o),r,n)},function(t,n){if(!o&&i||"string"==typeof n&&-1===n.indexOf(a)){var c=r(e,t,this,n);if(c.done)return c.value}var u=T(t),f=String(this),s="function"==typeof n;s||(n=String(n));var l=u.global;if(l){var p=u.unicode;u.lastIndex=0}for(var d=[];;){var y=Vo(u,f);if(null===y)break;if(d.push(y),!l)break;""===String(y[0])&&(u.lastIndex=Do(f,dt(u.lastIndex),p))}for(var v,h="",g=0,m=0;m<d.length;m++){y=d[m];for(var b=String(y[0]),O=Go(zo(lt(y.index),f.length),0),S=[],w=1;w<y.length;w++)S.push(void 0===(v=y[w])?v:String(v));var _=y.groups;if(s){var E=[b].concat(S,O,f);void 0!==_&&E.push(_);var x=String(n.apply(void 0,E))}else x=Uo(b,f,O,S,_,n);O>=g&&(h+=f.slice(g,O)+x,g=O+b.length)}return h+f.slice(g)}]}));var Bo="undefined"!=typeof Reflect&&void 0!==Reflect.getMetadata;function Ko(t){return void 0===t&&(t={}),function(e,r){!function(t,e,r){if(Bo&&!Array.isArray(t)&&"function"!=typeof t&&!t.hasOwnProperty("type")&&void 0===t.type){var n=Reflect.getMetadata("design:type",e,r);n!==Object&&(t.type=n)}}(t,e,r),co((function(e,r){(e.props||(e.props={}))[r]=t}))(e,r)}}function Wo(t,e){void 0===e&&(e={});var r=e.deep,n=void 0!==r&&r,o=e.immediate,i=void 0!==o&&o;return co((function(e,r){"object"!==Zn(e.watch)&&(e.watch=Object.create(null));var o=e.watch;"object"!==Zn(o[t])||Array.isArray(o[t])?void 0===o[t]&&(o[t]=[]):o[t]=[o[t]],o[t].push({handler:r,deep:n,immediate:i})}))}let Ho=class extends r.default{constructor(){super(...arguments),this.name="form-engine",this.formData={},this.newRules={}}watchConfig(){this.init()}watchData(){Object.keys(this.data).forEach((t=>{this.formData[t]=this.data[t]}))}created(){this.init()}getComponentName(t){let e="";return t&&"input"!==t&&"textarea"!==t?"select"===t?e="el-select":((t="",e="")=>t.indexOf(e)>-1)(t,"date")?e="el-date-picker":"button"===t&&(e="el-button"):e="el-input",e}getPlaceholder(t){const e=this.getComponentName(t.type),r=/(input|select)$/.test(e)?"请"+("select"===t.type?"选择":"输入"):"",n=t?.subProps||{};return t.placeholder||(n?.disabled||n?.readonly||!r?"":`${r+t.label}`)}init(){this.newRules=this.rules,this.formData=this.data,this.items.forEach((t=>{this.formData[t.prop]||t.slot||this.$set(this.formData,t.prop,"")})),this.newRules={...this.rules,...this.items.filter((t=>t.rules)).reduce(((t,e)=>({...t,[e.prop]:e.rules})),{})},this.$nextTick((()=>{this.clearValidate()}))}clearValidate(t=""){this.$refs?.form&&this.$refs.form.clearValidate(t)}resetFields(){this.$refs?.form&&this.$refs.form.resetFields()}validateField(t,e){this.$refs?.form&&this.$refs.form.validateField(t,e)}validate(t){return t?this.$refs.form.validate(((e,r)=>t(e,r,this.formData))):this.$refs.form.validate().then((()=>Promise.resolve(this.formData)))}};function Xo(t,e,r,n,o,i,a,c,u,f){"boolean"!=typeof a&&(u=c,c=a,a=!1);var s,l="function"==typeof r?r.options:r;if(t&&t.render&&(l.render=t.render,l.staticRenderFns=t.staticRenderFns,l._compiled=!0,o&&(l.functional=!0)),n&&(l._scopeId=n),i?(s=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,u(t)),t&&t._registeredComponents&&t._registeredComponents.add(i)},l._ssrRegister=s):e&&(s=a?function(t){e.call(this,f(t,this.$root.$options.shadowRoot))}:function(t){e.call(this,c(t))}),s)if(l.functional){var p=l.render;l.render=function(t,e){return s.call(e),p(t,e)}}else{var d=l.beforeCreate;l.beforeCreate=d?[].concat(d,s):[s]}return r}n([Ko({type:Array,default:()=>[]})],Ho.prototype,"items",void 0),n([Ko({type:String,default:"small"})],Ho.prototype,"size",void 0),n([Ko({type:Object,default:()=>({})})],Ho.prototype,"rules",void 0),n([Ko({type:String,default:"80px"})],Ho.prototype,"labelWidth",void 0),n([Ko({type:String})],Ho.prototype,"width",void 0),n([Ko({type:Object,default:()=>({})})],Ho.prototype,"data",void 0),n([Wo("config")],Ho.prototype,"watchConfig",null),n([Wo("data")],Ho.prototype,"watchData",null),Ho=n([ho],Ho);const Yo=Ho;var qo=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("el-form",t._g(t._b({ref:"form",staticClass:"form-engine",attrs:{size:t.size,rules:t.newRules,model:t.formData}},"el-form",t.$attrs,!1),t.$listeners),[r("el-row",[t._l(t.items,(function(e,n){return[r("el-col",{key:n,attrs:{span:e.span||12}},[e.formSlot?e.prop?t._t(e.prop):t._e():r("el-form-item",t._g(t._b({ref:(e.props||{}).ref||e.prop,refInFor:!0,style:{width:e.width||t.width||"px"},attrs:{size:t.size,"label-width":e.labelWidth||t.labelWidth,prop:e.prop,label:e.label,rules:e.rules}},"el-form-item",e.props,!1),e.on),[e.slot?t._t(e.prop):[t.getComponentName(e.type)?r(t.getComponentName(e.type),t._g(t._b({tag:"component",attrs:{size:e.size||t.size,placeholder:t.getPlaceholder(e)},model:{value:t.formData[e.prop],callback:function(r){t.$set(t.formData,e.prop,r)},expression:"formData[item.prop]"}},"component",e.subProps,!1),e.subOn),["select"===e.type?t._l(e.options||[],(function(t,e){return r("el-option",{key:e,attrs:{disabled:t.disabled,value:t.value,label:t.label}})})):t._e()],2):"text"===e.type?r("span",t._g(t._b({},"span",e.subProps,!1),e.subOn),[t._v("\n              "+t._s(t.formData[e.prop])+"\n            ")]):t._e()]],2)],2),t._v(" "),e.row&&e.span&&e.span<24?r("el-col",{key:n,attrs:{span:24-e.span}}):t._e()]})),t._v(" "),t._t("default")],2),t._v(" "),t._t("independent")],2)};qo._withStripped=!0;const Jo=Xo({render:qo,staticRenderFns:[]},undefined,Yo,undefined,false,undefined,!1,void 0,void 0,void 0);return{install(){r.default.component(Jo.name,Jo)}}}));
