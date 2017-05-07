"undefined"!=typeof module&&"undefined"!=typeof exports&&module.exports===exports&&(module.exports="ui.router"),function(e,t,r){"use strict";function n(e,t){return U(new(U(function(){},{prototype:e})),t)}function i(e){return D(arguments,function(t){t!==e&&D(t,function(t,r){e.hasOwnProperty(r)||(e[r]=t)})}),e}function a(e,t){var r=[];for(var n in e.path){if(e.path[n]!==t.path[n])break;r.push(e.path[n])}return r}function o(e){if(Object.keys)return Object.keys(e);var r=[];return t.forEach(e,function(e,t){r.push(t)}),r}function u(e,t){if(Array.prototype.indexOf)return e.indexOf(t,Number(arguments[2])||0);var r=e.length>>>0,n=Number(arguments[2])||0;for(n=0>n?Math.ceil(n):Math.floor(n),0>n&&(n+=r);r>n;n++)if(n in e&&e[n]===t)return n;return-1}function s(e,t,r,n){var i,s=a(r,n),l={},c=[];for(var f in s)if(s[f].params&&(i=o(s[f].params),i.length))for(var p in i)u(c,i[p])>=0||(c.push(i[p]),l[i[p]]=e[i[p]]);return U({},l,t)}function l(e,t,r){if(!r){r=[];for(var n in e)r.push(n)}for(var i=0;i<r.length;i++){var a=r[i];if(e[a]!=t[a])return!1}return!0}function c(e,t){var r={};return D(e,function(e){r[e]=t[e]}),r}function f(e){var t={},r=Array.prototype.concat.apply(Array.prototype,Array.prototype.slice.call(arguments,1));for(var n in e)-1==u(r,n)&&(t[n]=e[n]);return t}function p(e,t){var r=R(e),n=r?[]:{};return D(e,function(e,i){t(e,i)&&(n[r?n.length:i]=e)}),n}function h(e,t){var r=R(e)?[]:{};return D(e,function(e,n){r[n]=t(e,n)}),r}function v(e,t){var n=1,a=2,s={},l=[],c=s,p=U(e.when(s),{$$promises:s,$$values:s});this.study=function(s){function h(e,r){if(w[r]!==a){if(g.push(r),w[r]===n)throw g.splice(0,u(g,r)),new Error("Cyclic dependency: "+g.join(" -> "));if(w[r]=n,F(e))m.push(r,[function(){return t.get(e)}],l);else{var i=t.annotate(e);D(i,function(e){e!==r&&s.hasOwnProperty(e)&&h(s[e],e)}),m.push(r,e,i)}g.pop(),w[r]=a}}function v(e){return N(e)&&e.then&&e.$$promises}if(!N(s))throw new Error("'invocables' must be an object");var d=o(s||{}),m=[],g=[],w={};return D(s,h),s=g=w=null,function(n,a,o){function u(){--b||(E||i(y,a.$$values),g.$$values=y,g.$$promises=g.$$promises||!0,delete g.$$inheritedValues,h.resolve(y))}function s(e){g.$$failure=e,h.reject(e)}function l(r,i,a){function l(e){f.reject(e),s(e)}function c(){if(!V(g.$$failure))try{f.resolve(t.invoke(i,o,y)),f.promise.then(function(e){y[r]=e,u()},l)}catch(e){l(e)}}var f=e.defer(),p=0;D(a,function(e){w.hasOwnProperty(e)&&!n.hasOwnProperty(e)&&(p++,w[e].then(function(t){y[e]=t,--p||c()},l))}),p||c(),w[r]=f.promise}if(v(n)&&o===r&&(o=a,a=n,n=null),n){if(!N(n))throw new Error("'locals' must be an object")}else n=c;if(a){if(!v(a))throw new Error("'parent' must be a promise returned by $resolve.resolve()")}else a=p;var h=e.defer(),g=h.promise,w=g.$$promises={},y=U({},n),b=1+m.length/3,E=!1;if(V(a.$$failure))return s(a.$$failure),g;a.$$inheritedValues&&i(y,f(a.$$inheritedValues,d)),U(w,a.$$promises),a.$$values?(E=i(y,f(a.$$values,d)),g.$$inheritedValues=f(a.$$values,d),u()):(a.$$inheritedValues&&(g.$$inheritedValues=f(a.$$inheritedValues,d)),a.then(u,s));for(var S=0,x=m.length;x>S;S+=3)n.hasOwnProperty(m[S])?u():l(m[S],m[S+1],m[S+2]);return g}},this.resolve=function(e,t,r,n){return this.study(e)(t,r,n)}}function d(e,t,r){this.fromConfig=function(e,t,r){return V(e.template)?this.fromString(e.template,t):V(e.templateUrl)?this.fromUrl(e.templateUrl,t):V(e.templateProvider)?this.fromProvider(e.templateProvider,t,r):null},this.fromString=function(e,t){return M(e)?e(t):e},this.fromUrl=function(r,n){return M(r)&&(r=r(n)),null==r?null:e.get(r,{cache:t,headers:{Accept:"text/html"}}).then(function(e){return e.data})},this.fromProvider=function(e,t,n){return r.invoke(e,null,n||{params:t})}}function m(e,t,i){function a(t,r,n,i){if(m.push(t),v[t])return v[t];if(!/^\w+(-+\w+)*(?:\[\])?$/.test(t))throw new Error("Invalid parameter name '"+t+"' in pattern '"+e+"'");if(d[t])throw new Error("Duplicate parameter name '"+t+"' in pattern '"+e+"'");return d[t]=new L.Param(t,r,n,i),d[t]}function o(e,t,r){var n=["",""],i=e.replace(/[\\\[\]\^$*+?.()|{}]/g,"\\$&");if(!t)return i;switch(r){case!1:n=["(",")"];break;case!0:n=["?(",")?"];break;default:n=["("+r+"|",")?"]}return i+n[0]+t+n[1]}function u(r,i){var a,o,u,s,l;return a=r[2]||r[3],l=t.params[a],u=e.substring(p,r.index),o=i?r[4]:r[4]||("*"==r[1]?".*":null),s=L.type(o||"string")||n(L.type("string"),{pattern:new RegExp(o)}),{id:a,regexp:o,segment:u,type:s,cfg:l}}t=U({params:{}},N(t)?t:{});var s,l=/([:*])([\w\[\]]+)|\{([\w\[\]]+)(?:\:((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,c=/([:]?)([\w\[\]-]+)|\{([\w\[\]-]+)(?:\:((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,f="^",p=0,h=this.segments=[],v=i?i.params:{},d=this.params=i?i.params.$$new():new L.ParamSet,m=[];this.source=e;for(var g,w,y;(s=l.exec(e))&&(g=u(s,!1),!(g.segment.indexOf("?")>=0));)w=a(g.id,g.type,g.cfg,"path"),f+=o(g.segment,w.type.pattern.source,w.squash),h.push(g.segment),p=l.lastIndex;y=e.substring(p);var b=y.indexOf("?");if(b>=0){var E=this.sourceSearch=y.substring(b);if(y=y.substring(0,b),this.sourcePath=e.substring(0,p+b),E.length>0)for(p=0;s=c.exec(E);)g=u(s,!0),w=a(g.id,g.type,g.cfg,"search"),p=l.lastIndex}else this.sourcePath=e,this.sourceSearch="";f+=o(y)+(t.strict===!1?"/?":"")+"$",h.push(y),this.regexp=new RegExp(f,t.caseInsensitive?"i":r),this.prefix=h[0],this.$$paramNames=m}function g(e){U(this,e)}function w(){function e(e){return null!=e?e.toString().replace(/\//g,"%2F"):e}function i(e){return null!=e?e.toString().replace(/%2F/g,"/"):e}function a(e){return this.pattern.test(e)}function s(){return{strict:y,caseInsensitive:d}}function l(e){return M(e)||R(e)&&M(e[e.length-1])}function c(){for(;x.length;){var e=x.shift();if(e.pattern)throw new Error("You cannot override a type's .pattern at runtime.");t.extend(E[e.name],v.invoke(e.def))}}function f(e){U(this,e||{})}L=this;var v,d=!1,y=!0,b=!1,E={},S=!0,x=[],P={string:{encode:e,decode:i,is:a,pattern:/[^/]*/},"int":{encode:e,decode:function(e){return parseInt(e,10)},is:function(e){return V(e)&&this.decode(e.toString())===e},pattern:/\d+/},bool:{encode:function(e){return e?1:0},decode:function(e){return 0!==parseInt(e,10)},is:function(e){return e===!0||e===!1},pattern:/0|1/},date:{encode:function(e){return this.is(e)?[e.getFullYear(),("0"+(e.getMonth()+1)).slice(-2),("0"+e.getDate()).slice(-2)].join("-"):r},decode:function(e){if(this.is(e))return e;var t=this.capture.exec(e);return t?new Date(t[1],t[2]-1,t[3]):r},is:function(e){return e instanceof Date&&!isNaN(e.valueOf())},equals:function(e,t){return this.is(e)&&this.is(t)&&e.toISOString()===t.toISOString()},pattern:/[0-9]{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[1-2][0-9]|3[0-1])/,capture:/([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/},json:{encode:t.toJson,decode:t.fromJson,is:t.isObject,equals:t.equals,pattern:/[^/]*/},any:{encode:t.identity,decode:t.identity,is:t.identity,equals:t.equals,pattern:/.*/}};w.$$getDefaultValue=function(e){if(!l(e.value))return e.value;if(!v)throw new Error("Injectable functions cannot be called at configuration time");return v.invoke(e.value)},this.caseInsensitive=function(e){return V(e)&&(d=e),d},this.strictMode=function(e){return V(e)&&(y=e),y},this.defaultSquashPolicy=function(e){if(!V(e))return b;if(e!==!0&&e!==!1&&!F(e))throw new Error("Invalid squash policy: "+e+". Valid policies: false, true, arbitrary-string");return b=e,e},this.compile=function(e,t){return new m(e,U(s(),t))},this.isMatcher=function(e){if(!N(e))return!1;var t=!0;return D(m.prototype,function(r,n){M(r)&&(t=t&&V(e[n])&&M(e[n]))}),t},this.type=function(e,t,r){if(!V(t))return E[e];if(E.hasOwnProperty(e))throw new Error("A type named '"+e+"' has already been defined.");return E[e]=new g(U({name:e},t)),r&&(x.push({name:e,def:r}),S||c()),this},D(P,function(e,t){E[t]=new g(U({name:t},e))}),E=n(E,{}),this.$get=["$injector",function(e){return v=e,S=!1,c(),D(P,function(e,t){E[t]||(E[t]=new g(e))}),this}],this.Param=function(e,t,n,i){function a(e){var t=N(e)?o(e):[],r=-1===u(t,"value")&&-1===u(t,"type")&&-1===u(t,"squash")&&-1===u(t,"array");return r&&(e={value:e}),e.$$fn=l(e.value)?e.value:function(){return e.value},e}function s(t,r,n){if(t.type&&r)throw new Error("Param '"+e+"' has two type configurations.");return r?r:t.type?t.type instanceof g?t.type:new g(t.type):"config"===n?E.any:E.string}function c(){var t={array:"search"===i?"auto":!1},r=e.match(/\[\]$/)?{array:!0}:{};return U(t,r,n).array}function f(e,t){var r=e.squash;if(!t||r===!1)return!1;if(!V(r)||null==r)return b;if(r===!0||F(r))return r;throw new Error("Invalid squash policy: '"+r+"'. Valid policies: false, true, or arbitrary string")}function d(e,t,n,i){var a,o,s=[{from:"",to:n||t?r:""},{from:null,to:n||t?r:""}];return a=R(e.replace)?e.replace:[],F(i)&&a.push({from:i,to:r}),o=h(a,function(e){return e.from}),p(s,function(e){return-1===u(o,e.from)}).concat(a)}function m(){if(!v)throw new Error("Injectable functions cannot be called at configuration time");return v.invoke(n.$$fn)}function w(e){function t(e){return function(t){return t.from===e}}function r(e){var r=h(p(S.replace,t(e)),function(e){return e.to});return r.length?r[0]:e}return e=r(e),V(e)?S.type.decode(e):m()}function y(){return"{Param:"+e+" "+t+" squash: '"+j+"' optional: "+P+"}"}var S=this;n=a(n),t=s(n,t,i);var x=c();t=x?t.$asArray(x,"search"===i):t,"string"!==t.name||x||"path"!==i||n.value!==r||(n.value="");var P=n.value!==r,j=f(n,P),O=d(n,x,P,j);U(this,{id:e,type:t,location:i,array:x,squash:j,replace:O,isOptional:P,value:w,dynamic:r,config:n,toString:y})},f.prototype={$$new:function(){return n(this,U(new f,{$$parent:this}))},$$keys:function(){for(var e=[],t=[],r=this,n=o(f.prototype);r;)t.push(r),r=r.$$parent;return t.reverse(),D(t,function(t){D(o(t),function(t){-1===u(e,t)&&-1===u(n,t)&&e.push(t)})}),e},$$values:function(e){var t={},r=this;return D(r.$$keys(),function(n){t[n]=r[n].value(e&&e[n])}),t},$$equals:function(e,t){var r=!0,n=this;return D(n.$$keys(),function(i){var a=e&&e[i],o=t&&t[i];n[i].type.equals(a,o)||(r=!1)}),r},$$validates:function(e){var t,r,n,i=!0,a=this;return D(this.$$keys(),function(o){n=a[o],r=e[o],t=!r&&n.isOptional,i=i&&(t||!!n.type.is(r))}),i},$$parent:r},this.ParamSet=f}function y(e,n){function i(e){var t=/^\^((?:\\[^a-zA-Z0-9]|[^\\\[\]\^$*+?.()|{}]+)*)/.exec(e.source);return null!=t?t[1].replace(/\\(.)/g,"$1"):""}function a(e,t){return e.replace(/\$(\$|\d{1,2})/,function(e,r){return t["$"===r?0:Number(r)]})}function o(e,t,r){if(!r)return!1;var n=e.invoke(t,t,{$match:r});return V(n)?n:!0}function u(n,i,a,o){function u(e,t,r){return"/"===d?e:t?d.slice(0,-1)+e:r?d.slice(1)+e:e}function p(e){function t(e){var t=e(a,n);return t?(F(t)&&n.replace().url(t),!0):!1}if(!e||!e.defaultPrevented){var i=v&&n.url()===v;if(v=r,i)return!0;var o,u=l.length;for(o=0;u>o;o++)if(t(l[o]))return;c&&t(c)}}function h(){return s=s||i.$on("$locationChangeSuccess",p)}var v,d=o.baseHref(),m=n.url();return f||h(),{sync:function(){p()},listen:function(){return h()},update:function(e){return e?void(m=n.url()):void(n.url()!==m&&(n.url(m),n.replace()))},push:function(e,t,i){n.url(e.format(t||{})),v=i&&i.$$avoidResync?n.url():r,i&&i.replace&&n.replace()},href:function(r,i,a){if(!r.validates(i))return null;var o=e.html5Mode();t.isObject(o)&&(o=o.enabled);var s=r.format(i);if(a=a||{},o||null===s||(s="#"+e.hashPrefix()+s),s=u(s,o,a.absolute),!a.absolute||!s)return s;var l=!o&&s?"/":"",c=n.port();return c=80===c||443===c?"":":"+c,[n.protocol(),"://",n.host(),c,l,s].join("")}}}var s,l=[],c=null,f=!1;this.rule=function(e){if(!M(e))throw new Error("'rule' must be a function");return l.push(e),this},this.otherwise=function(e){if(F(e)){var t=e;e=function(){return t}}else if(!M(e))throw new Error("'rule' must be a function");return c=e,this},this.when=function(e,t){var r,u=F(t);if(F(e)&&(e=n.compile(e)),!u&&!M(t)&&!R(t))throw new Error("invalid 'handler' in when()");var s={matcher:function(e,t){return u&&(r=n.compile(t),t=["$match",function(e){return r.format(e)}]),U(function(r,n){return o(r,t,e.exec(n.path(),n.search()))},{prefix:F(e.prefix)?e.prefix:""})},regex:function(e,t){if(e.global||e.sticky)throw new Error("when() RegExp must not be global or sticky");return u&&(r=t,t=["$match",function(e){return a(r,e)}]),U(function(r,n){return o(r,t,e.exec(n.path()))},{prefix:i(e)})}},l={matcher:n.isMatcher(e),regex:e instanceof RegExp};for(var c in l)if(l[c])return this.rule(s[c](e,t));throw new Error("invalid 'what' in when()")},this.deferIntercept=function(e){e===r&&(e=!0),f=e},this.$get=u,u.$inject=["$location","$rootScope","$injector","$browser"]}function b(e,i){function a(e){return 0===e.indexOf(".")||0===e.indexOf("^")}function f(e,t){if(!e)return r;var n=F(e),i=n?e:e.name,o=a(i);if(o){if(!t)throw new Error("No reference point given for path '"+i+"'");t=f(t);for(var u=i.split("."),s=0,l=u.length,c=t;l>s;s++)if(""!==u[s]||0!==s){if("^"!==u[s])break;if(!c.parent)throw new Error("Path '"+i+"' not valid for state '"+t.name+"'");c=c.parent}else c=t;u=u.slice(s).join("."),i=c.name+(c.name&&u?".":"")+u}var p=P[i];return!p||!n&&(n||p!==e&&p.self!==e)?r:p}function p(e,t){j[e]||(j[e]=[]),j[e].push(t)}function v(e){for(var t=j[e]||[];t.length;)d(t.shift())}function d(t){t=n(t,{self:t,resolve:t.resolve||{},toString:function(){return this.name}});var r=t.name;if(!F(r)||r.indexOf("@")>=0)throw new Error("State must have a valid name");if(P.hasOwnProperty(r))throw new Error("State '"+r+"'' is already defined");var i=-1!==r.indexOf(".")?r.substring(0,r.lastIndexOf(".")):F(t.parent)?t.parent:N(t.parent)&&F(t.parent.name)?t.parent.name:"";if(i&&!P[i])return p(i,t.self);for(var a in A)M(A[a])&&(t[a]=A[a](t,A.$delegates[a]));return P[r]=t,!t[O]&&t.url&&e.when(t.url,["$match","$stateParams",function(e,r){x.$current.navigable==t&&l(e,r)||x.transitionTo(t,e,{inherit:!0,location:!1})}]),v(r),t}function m(e){return e.indexOf("*")>-1}function g(e){var t=e.split("."),r=x.$current.name.split(".");if("**"===t[0]&&(r=r.slice(u(r,t[1])),r.unshift("**")),"**"===t[t.length-1]&&(r.splice(u(r,t[t.length-2])+1,Number.MAX_VALUE),r.push("**")),t.length!=r.length)return!1;for(var n=0,i=t.length;i>n;n++)"*"===t[n]&&(r[n]="*");return r.join("")===t.join("")}function w(e,t){return F(e)&&!V(t)?A[e]:M(t)&&F(e)?(A[e]&&!A.$delegates[e]&&(A.$delegates[e]=A[e]),A[e]=t,this):this}function y(e,t){return N(e)?t=e:t.name=e,d(t),this}function b(e,i,a,u,p,v,d){function w(t,r,n,a){var o=e.$broadcast("$stateNotFound",t,r,n);if(o.defaultPrevented)return d.update(),A;if(!o.retry)return null;if(a.$retry)return d.update(),q;var u=x.transition=i.when(o.retry);return u.then(function(){return u!==x.transition?b:(t.options.$retry=!0,x.transitionTo(t.to,t.toParams,t.options))},function(){return A}),d.update(),u}function y(e,r,n,o,s,l){var f=n?r:c(e.params.$$keys(),r),h={$stateParams:f};s.resolve=p.resolve(e.resolve,h,s.resolve,e);var v=[s.resolve.then(function(e){s.globals=e})];return o&&v.push(o),D(e.views,function(r,n){var i=r.resolve&&r.resolve!==e.resolve?r.resolve:{};i.$template=[function(){return a.load(n,{view:r,locals:h,params:f,notify:l.notify})||""}],v.push(p.resolve(i,h,s.resolve,e).then(function(a){if(M(r.controllerProvider)||R(r.controllerProvider)){var o=t.extend({},i,h);a.$$controller=u.invoke(r.controllerProvider,null,o)}else a.$$controller=r.controller;a.$$state=e,a.$$controllerAs=r.controllerAs,s[n]=a}))}),i.all(v).then(function(){return s})}var b=i.reject(new Error("transition superseded")),j=i.reject(new Error("transition prevented")),A=i.reject(new Error("transition aborted")),q=i.reject(new Error("transition failed"));return S.locals={resolve:null,globals:{$stateParams:{}}},x={params:{},current:S.self,$current:S,transition:null},x.reload=function(){return x.transitionTo(x.current,v,{reload:!0,inherit:!1,notify:!0})},x.go=function(e,t,r){return x.transitionTo(e,t,U({inherit:!0,relative:x.$current},r))},x.transitionTo=function(t,r,a){r=r||{},a=U({location:!0,inherit:!1,relative:null,notify:!0,reload:!1,$retry:!1},a||{});var o,l=x.$current,p=x.params,h=l.path,m=f(t,a.relative);if(!V(m)){var g={to:t,toParams:r,options:a},P=w(g,l.self,p,a);if(P)return P;if(t=g.to,r=g.toParams,a=g.options,m=f(t,a.relative),!V(m)){if(!a.relative)throw new Error("No such state '"+t+"'");throw new Error("Could not resolve '"+t+"' from state '"+a.relative+"'")}}if(m[O])throw new Error("Cannot transition to abstract state '"+t+"'");if(a.inherit&&(r=s(v,r||{},x.$current,m)),!m.params.$$validates(r))return q;r=m.params.$$values(r),t=m;var A=t.path,C=0,k=A[C],I=S.locals,M=[];if(!a.reload)for(;k&&k===h[C]&&k.ownParams.$$equals(r,p);)I=M[C]=k.locals,C++,k=A[C];if(E(t,l,I,a))return t.self.reloadOnSearch!==!1&&d.update(),x.transition=null,i.when(x.current);if(r=c(t.params.$$keys(),r||{}),a.notify&&e.$broadcast("$stateChangeStart",t.self,r,l.self,p).defaultPrevented)return d.update(),j;for(var F=i.when(I),N=C;N<A.length;N++,k=A[N])I=M[N]=n(I),F=y(k,r,k===t,F,I,a);var R=x.transition=F.then(function(){var n,i,o;if(x.transition!==R)return b;for(n=h.length-1;n>=C;n--)o=h[n],o.self.onExit&&u.invoke(o.self.onExit,o.self,o.locals.globals),o.locals=null;for(n=C;n<A.length;n++)i=A[n],i.locals=M[n],i.self.onEnter&&u.invoke(i.self.onEnter,i.self,i.locals.globals);return x.transition!==R?b:(x.$current=t,x.current=t.self,x.params=r,T(x.params,v),x.transition=null,a.location&&t.navigable&&d.push(t.navigable.url,t.navigable.locals.globals.$stateParams,{$$avoidResync:!0,replace:"replace"===a.location}),a.notify&&e.$broadcast("$stateChangeSuccess",t.self,r,l.self,p),d.update(!0),x.current)},function(n){return x.transition!==R?b:(x.transition=null,o=e.$broadcast("$stateChangeError",t.self,r,l.self,p,n),o.defaultPrevented||d.update(),i.reject(n))});return R},x.is=function(e,t,n){n=U({relative:x.$current},n||{});var i=f(e,n.relative);return V(i)?x.$current!==i?!1:t?l(i.params.$$values(t),v):!0:r},x.includes=function(e,t,n){if(n=U({relative:x.$current},n||{}),F(e)&&m(e)){if(!g(e))return!1;e=x.$current.name}var i=f(e,n.relative);return V(i)?V(x.$current.includes[i.name])?t?l(i.params.$$values(t),v,o(t)):!0:!1:r},x.href=function(e,t,n){n=U({lossy:!0,inherit:!0,absolute:!1,relative:x.$current},n||{});var i=f(e,n.relative);if(!V(i))return null;n.inherit&&(t=s(v,t||{},x.$current,i));var a=i&&n.lossy?i.navigable:i;return a&&a.url!==r&&null!==a.url?d.href(a.url,c(i.params.$$keys(),t||{}),{absolute:n.absolute}):null},x.get=function(e,t){if(0===arguments.length)return h(o(P),function(e){return P[e].self});var r=f(e,t||x.$current);return r&&r.self?r.self:null},x}function E(e,t,r,n){return e!==t||(r!==t.locals||n.reload)&&e.self.reloadOnSearch!==!1?void 0:!0}var S,x,P={},j={},O="abstract",A={parent:function(e){if(V(e.parent)&&e.parent)return f(e.parent);var t=/^(.+)\.[^.]+$/.exec(e.name);return t?f(t[1]):S},data:function(e){return e.parent&&e.parent.data&&(e.data=e.self.data=U({},e.parent.data,e.data)),e.data},url:function(e){var t=e.url,r={params:e.params||{}};if(F(t))return"^"==t.charAt(0)?i.compile(t.substring(1),r):(e.parent.navigable||S).url.concat(t,r);if(!t||i.isMatcher(t))return t;throw new Error("Invalid url '"+t+"' in state '"+e+"'")},navigable:function(e){return e.url?e:e.parent?e.parent.navigable:null},ownParams:function(e){var t=e.url&&e.url.params||new L.ParamSet;return D(e.params||{},function(e,r){t[r]||(t[r]=new L.Param(r,null,e,"config"))}),t},params:function(e){return e.parent&&e.parent.params?U(e.parent.params.$$new(),e.ownParams):new L.ParamSet},views:function(e){var t={};return D(V(e.views)?e.views:{"":e},function(r,n){n.indexOf("@")<0&&(n+="@"+e.parent.name),t[n]=r}),t},path:function(e){return e.parent?e.parent.path.concat(e):[]},includes:function(e){var t=e.parent?U({},e.parent.includes):{};return t[e.name]=!0,t},$delegates:{}};S=d({name:"",url:"^",views:null,"abstract":!0}),S.navigable=null,this.decorator=w,this.state=y,this.$get=b,b.$inject=["$rootScope","$q","$view","$injector","$resolve","$stateParams","$urlRouter","$location","$urlMatcherFactory"]}function E(){function e(e,t){return{load:function(r,n){var i,a={template:null,controller:null,view:null,locals:null,notify:!0,async:!0,params:{}};return n=U(a,n),n.view&&(i=t.fromConfig(n.view,n.params,n.locals)),i&&n.notify&&e.$broadcast("$viewContentLoading",n),i}}}this.$get=e,e.$inject=["$rootScope","$templateFactory"]}function S(){var e=!1;this.useAnchorScroll=function(){e=!0},this.$get=["$anchorScroll","$timeout",function(t,r){return e?t:function(e){r(function(){e[0].scrollIntoView()},0,!1)}}]}function x(e,r,n,i){function a(){return r.has?function(e){return r.has(e)?r.get(e):null}:function(e){try{return r.get(e)}catch(t){return null}}}function o(e,t){var r=function(){return{enter:function(e,t,r){t.after(e),r()},leave:function(e,t){e.remove(),t()}}};if(l)return{enter:function(e,t,r){var n=l.enter(e,null,t,r);n&&n.then&&n.then(r)},leave:function(e,t){var r=l.leave(e,t);r&&r.then&&r.then(t)}};if(s){var n=s&&s(t,e);return{enter:function(e,t,r){n.enter(e,null,t),r()},leave:function(e,t){n.leave(e),t()}}}return r()}var u=a(),s=u("$animator"),l=u("$animate"),c={restrict:"ECA",terminal:!0,priority:400,transclude:"element",compile:function(r,a,u){return function(r,a,s){function l(){f&&(f.remove(),f=null),h&&(h.$destroy(),h=null),p&&(g.leave(p,function(){f=null}),f=p,p=null)}function c(o){var c,f=j(r,s,a,i),w=f&&e.$current&&e.$current.locals[f];if(o||w!==v){c=r.$new(),v=e.$current.locals[f];var y=u(c,function(e){g.enter(e,a,function(){h&&h.$emit("$viewContentAnimationEnded"),(t.isDefined(m)&&!m||r.$eval(m))&&n(e)}),l()});p=y,h=c,h.$emit("$viewContentLoaded"),h.$eval(d)}}var f,p,h,v,d=s.onload||"",m=s.autoscroll,g=o(s,r);r.$on("$stateChangeSuccess",function(){c(!1)}),r.$on("$viewContentLoading",function(){c(!1)}),c(!0)}}};return c}function P(e,t,r,n){return{restrict:"ECA",priority:-400,compile:function(i){var a=i.html();return function(i,o,u){var s=r.$current,l=j(i,u,o,n),c=s&&s.locals[l];if(c){o.data("$uiView",{name:l,state:c.$$state}),o.html(c.$template?c.$template:a);var f=e(o.contents());if(c.$$controller){c.$scope=i;var p=t(c.$$controller,c);c.$$controllerAs&&(i[c.$$controllerAs]=p),o.data("$ngControllerController",p),o.children().data("$ngControllerController",p)}f(i)}}}}}function j(e,t,r,n){var i=n(t.uiView||t.name||"")(e),a=r.inheritedData("$uiView");return i.indexOf("@")>=0?i:i+"@"+(a?a.state.name:"")}function O(e,t){var r,n=e.match(/^\s*({[^}]*})\s*$/);if(n&&(e=t+"("+n[1]+")"),r=e.replace(/\n/g," ").match(/^([^(]+?)\s*(\((.*)\))?$/),!r||4!==r.length)throw new Error("Invalid state ref '"+e+"'");return{state:r[1],paramExpr:r[3]||null}}function A(e){var t=e.parent().inheritedData("$uiView");return t&&t.state&&t.state.name?t.state:void 0}function q(e,r){var n=["location","inherit","reload"];return{restrict:"A",require:["?^uiSrefActive","?^uiSrefActiveEq"],link:function(i,a,o,u){var s=O(o.uiSref,e.current.name),l=null,c=A(a)||e.$current,f=null,p="A"===a.prop("tagName"),h="FORM"===a[0].nodeName,v=h?"action":"href",d=!0,m={relative:c,inherit:!0},g=i.$eval(o.uiSrefOpts)||{};t.forEach(n,function(e){e in g&&(m[e]=g[e])});var w=function(r){if(r&&(l=t.copy(r)),d){f=e.href(s.state,l,m);var n=u[1]||u[0];return n&&n.$$setStateInfo(s.state,l),null===f?(d=!1,!1):void o.$set(v,f)}};s.paramExpr&&(i.$watch(s.paramExpr,function(e){e!==l&&w(e)},!0),l=t.copy(i.$eval(s.paramExpr))),w(),h||a.bind("click",function(t){var n=t.which||t.button;if(!(n>1||t.ctrlKey||t.metaKey||t.shiftKey||a.attr("target"))){var i=r(function(){e.go(s.state,l,m)});t.preventDefault();var o=p&&!f?1:0;t.preventDefault=function(){o--<=0&&r.cancel(i)}}})}}}function C(e,t,r){return{restrict:"A",controller:["$scope","$element","$attrs",function(t,n,i){function a(){o()?n.addClass(l):n.removeClass(l)}function o(){return"undefined"!=typeof i.uiSrefActiveEq?u&&e.is(u.name,s):u&&e.includes(u.name,s)}var u,s,l;l=r(i.uiSrefActiveEq||i.uiSrefActive||"",!1)(t),this.$$setStateInfo=function(t,r){u=e.get(t,A(n)),s=r,a()},t.$on("$stateChangeSuccess",a)}]}}function k(e){var t=function(t){return e.is(t)};return t.$stateful=!0,t}function I(e){var t=function(t){return e.includes(t)};return t.$stateful=!0,t}var V=t.isDefined,M=t.isFunction,F=t.isString,N=t.isObject,R=t.isArray,D=t.forEach,U=t.extend,T=t.copy;t.module("ui.router.util",["ng"]),t.module("ui.router.router",["ui.router.util"]),t.module("ui.router.state",["ui.router.router","ui.router.util"]),t.module("ui.router",["ui.router.state"]),t.module("ui.router.compat",["ui.router"]),v.$inject=["$q","$injector"],t.module("ui.router.util").service("$resolve",v),d.$inject=["$http","$templateCache","$injector"],t.module("ui.router.util").service("$templateFactory",d);var L;m.prototype.concat=function(e,t){var r={caseInsensitive:L.caseInsensitive(),strict:L.strictMode(),squash:L.defaultSquashPolicy()};return new m(this.sourcePath+e+this.sourceSearch,U(r,t),this)},m.prototype.toString=function(){return this.source},m.prototype.exec=function(e,t){function r(e){function t(e){return e.split("").reverse().join("")}function r(e){return e.replace(/\\-/,"-")}var n=t(e).split(/-(?!\\)/),i=h(n,t);return h(i,r).reverse()}var n=this.regexp.exec(e);if(!n)return null;t=t||{};var i,a,o,u=this.parameters(),s=u.length,l=this.segments.length-1,c={};if(l!==n.length-1)throw new Error("Unbalanced capture group in route '"+this.source+"'");for(i=0;l>i;i++){o=u[i];var f=this.params[o],p=n[i+1];for(a=0;a<f.replace;a++)f.replace[a].from===p&&(p=f.replace[a].to);p&&f.array===!0&&(p=r(p)),c[o]=f.value(p)}for(;s>i;i++)o=u[i],c[o]=this.params[o].value(t[o]);return c},m.prototype.parameters=function(e){return V(e)?this.params[e]||null:this.$$paramNames},m.prototype.validates=function(e){return this.params.$$validates(e)},m.prototype.format=function(e){function t(e){return encodeURIComponent(e).replace(/-/g,function(e){return"%5C%"+e.charCodeAt(0).toString(16).toUpperCase()})}e=e||{};var r=this.segments,n=this.parameters(),i=this.params;if(!this.validates(e))return null;var a,o=!1,u=r.length-1,s=n.length,l=r[0];for(a=0;s>a;a++){var c=u>a,f=n[a],p=i[f],v=p.value(e[f]),d=p.isOptional&&p.type.equals(p.value(),v),m=d?p.squash:!1,g=p.type.encode(v);if(c){var w=r[a+1];if(m===!1)null!=g&&(l+=R(g)?h(g,t).join("-"):encodeURIComponent(g)),l+=w;else if(m===!0){var y=l.match(/\/$/)?/\/?(.*)/:/(.*)/;l+=w.match(y)[1]}else F(m)&&(l+=m+w)}else{if(null==g||d&&m!==!1)continue;R(g)||(g=[g]),g=h(g,encodeURIComponent).join("&"+f+"="),l+=(o?"&":"?")+(f+"="+g),o=!0}}return l},g.prototype.is=function(){return!0},g.prototype.encode=function(e){return e},g.prototype.decode=function(e){return e},g.prototype.equals=function(e,t){return e==t},g.prototype.$subPattern=function(){var e=this.pattern.toString();return e.substr(1,e.length-2)},g.prototype.pattern=/.*/,g.prototype.toString=function(){return"{Type:"+this.name+"}"},g.prototype.$asArray=function(e,t){function n(e,t){function n(e,t){return function(){return e[t].apply(e,arguments)}}function i(e){return R(e)?e:V(e)?[e]:[]}function a(e){switch(e.length){case 0:return r;case 1:return"auto"===t?e[0]:e;default:return e}}function o(e){return!e}function u(e,t){return function(r){r=i(r);var n=h(r,e);return t===!0?0===p(n,o).length:a(n)}}function s(e){return function(t,r){var n=i(t),a=i(r);if(n.length!==a.length)return!1;for(var o=0;o<n.length;o++)if(!e(n[o],a[o]))return!1;return!0}}this.encode=u(n(e,"encode")),this.decode=u(n(e,"decode")),this.is=u(n(e,"is"),!0),this.equals=s(n(e,"equals")),this.pattern=e.pattern,this.$arrayMode=t}if(!e)return this;if("auto"===e&&!t)throw new Error("'auto' array mode is for query parameters only");return new n(this,e)},t.module("ui.router.util").provider("$urlMatcherFactory",w),t.module("ui.router.util").run(["$urlMatcherFactory",function(){}]),y.$inject=["$locationProvider","$urlMatcherFactoryProvider"],t.module("ui.router.router").provider("$urlRouter",y),b.$inject=["$urlRouterProvider","$urlMatcherFactoryProvider"],t.module("ui.router.state").value("$stateParams",{}).provider("$state",b),E.$inject=[],t.module("ui.router.state").provider("$view",E),t.module("ui.router.state").provider("$uiViewScroll",S),x.$inject=["$state","$injector","$uiViewScroll","$interpolate"],P.$inject=["$compile","$controller","$state","$interpolate"],t.module("ui.router.state").directive("uiView",x),t.module("ui.router.state").directive("uiView",P),q.$inject=["$state","$timeout"],C.$inject=["$state","$stateParams","$interpolate"],t.module("ui.router.state").directive("uiSref",q).directive("uiSrefActive",C).directive("uiSrefActiveEq",C),k.$inject=["$state"],I.$inject=["$state"],t.module("ui.router.state").filter("isState",k).filter("includedByState",I)}(window,window.angular);