!function e(n,t,r){function a(s,o){if(!t[s]){if(!n[s]){var l="function"==typeof require&&require;if(!o&&l)return l(s,!0);if(i)return i(s,!0);var c=new Error("Cannot find module '"+s+"'");throw c.code="MODULE_NOT_FOUND",c}var u=t[s]={exports:{}};n[s][0].call(u.exports,function(e){var t=n[s][1][e];return a(t?t:e)},u,u.exports,e,n,t,r)}return t[s].exports}for(var i="function"==typeof require&&require,s=0;s<r.length;s++)a(r[s]);return a}({1:[function(e){function n(){console.log("[App] start Backbone"),Window.Application=new t,Backbone.history.start(),$(".cd-menu-trigger").on("click",function(e){e.preventDefault(),$(".cd-main-content").addClass("move-out"),$(".main-nav").addClass("is-visible"),$(".cd-shadow-layer").addClass("is-visible"),$(".cd-main-content").css("overflow-x, hidden;")}),$(".cd-close-menu").on("click",function(e){e.preventDefault(),$(".cd-main-content").removeClass("move-out"),$(".main-nav").removeClass("is-visible"),$(".cd-shadow-layer").removeClass("is-visible")})}var t=(e("hbsfy/runtime"),e("./classes/routers/Application.js"));n()},{"./classes/routers/Application.js":6,"hbsfy/runtime":18}],2:[function(e,n){var t=e("hbsfy/runtime");n.exports=t.template({compiler:[6,">= 2.0.0-beta.1"],main:function(){return'	<!-- Landing page -->\n\n	<section class="cd-intro">\n\n		<div class="mainApp">\n\n				<div class="title">\n					<img class="titlebg2" src="assets/svg/titleBG.svg" alt="">\n					<p>test</p>\n				</div>\n\n		</div>\n\n			<header class="cd-header">\n\n				<a class="cd-menu-trigger" href="#main-nav"><span></span></a>\n\n			</header>\n\n	</section>\n'},useData:!0})},{"hbsfy/runtime":18}],3:[function(e,n){var t=e("hbsfy/runtime");n.exports=t.template({compiler:[6,">= 2.0.0-beta.1"],main:function(){return'	<ul>\n\n		<li><a href="#0"><span>Home</span></a></li>\n		<li><a href="#0"><span>Kalender</span></a></li>\n		<li><a href="#0"><span>Klassement</span></a></li>\n		<li><a href="#0"><span>Hall of fame</span></a></li>\n\n		<li><a class="uitloggen" href="index.php?page=logout">Uitloggen</a></li>\n\n	</ul>\n\n	<div class="footer">\n\n		<p>© Komen Gokken 2015 - All Rights reserved</p>\n\n	</div>\n\n	<a href="#0" class="cd-close-menu">Close<span></span></a>\n'},useData:!0})},{"hbsfy/runtime":18}],4:[function(e,n){var t=e("hbsfy/runtime");n.exports=t.template({compiler:[6,">= 2.0.0-beta.1"],main:function(){return'	<!-- Landing page -->\n\n	<section class="cd-intro">\n\n		<div class="mainApp">\n\n			<div class="title">\n\n					<img class="titlebg2" src="assets/svg/titleBG.svg" alt="">\n					<p>Roulette</p>\n\n				</div>\n		</div>\n\n			<header class="cd-header">\n\n				<a class="cd-menu-trigger" href="#main-nav"><span></span></a>\n\n			</header>\n\n	</section>\n'},useData:!0})},{"hbsfy/runtime":18}],5:[function(e,n){var t=e("hbsfy/runtime");n.exports=t.template({compiler:[6,">= 2.0.0-beta.1"],main:function(){return'	<!-- Landing page -->\n\n\n\n\n	<section class="cd-intro">\n\n		<div class="mainApp">\n\n				<div class="title">\n\n					<img class="titlebg2" src="assets/svg/titleBG.svg" alt="">\n					<p>De slotmachine</p>\n\n				</div>\n\n		</div>\n\n			<header class="cd-header">\n\n				<a class="cd-menu-trigger" href="#main-nav"><span></span></a>\n\n			</header>\n\n	</section>\n'},useData:!0})},{"hbsfy/runtime":18}],6:[function(e,n){var t=e("../views/NavView.js"),r=e("../views/SlotView.js"),a=e("../views/HomeView.js"),i=e("../views/RouletteView.js"),s=Backbone.Router.extend({routes:{indeling:"indeling",deelnemen:"deelnemen",home:"home","*actions":"default"},empty:function(){$(".container").empty()},"default":function(){this.navigate("indeling",{trigger:!0})},indeling:function(){this.empty(),this.nav=new t,$(".container").append(this.nav.render().el),this.slotmachine=new r,$(".container").append(this.slotmachine.render().el)},deelnemen:function(){this.empty(),this.nav=new t,$(".container").append(this.nav.render().el),this.deelnemen=new i,$(".container").append(this.deelnemen.render().el)},home:function(){this.empty(),this.nav=new t,$(".container").append(this.nav.render().el),this.home=new a,$(".container").append(this.home.render().el)}});n.exports=s},{"../views/HomeView.js":7,"../views/NavView.js":8,"../views/RouletteView.js":9,"../views/SlotView.js":10}],7:[function(e,n){var t=e("../../../_hbs/homeview.hbs"),r=Backbone.View.extend({template:t,tagName:"main",className:"cd-main-content",initialize:function(){this.render()},render:function(){return this.$el.html(this.template()),this}});n.exports=r},{"../../../_hbs/homeview.hbs":2}],8:[function(e,n){var t=e("../../../_hbs/navigation.hbs"),r=Backbone.View.extend({template:t,tagName:"nav",className:"main-nav",initialize:function(){this.render()},render:function(){return this.$el.html(this.template()),this}});n.exports=r},{"../../../_hbs/navigation.hbs":3}],9:[function(e,n){var t=e("../../../_hbs/roulette.hbs"),r=Backbone.View.extend({template:t,tagName:"main",className:"cd-main-content",initialize:function(){this.render()},render:function(){return this.$el.html(this.template()),this}});n.exports=r},{"../../../_hbs/roulette.hbs":4}],10:[function(e,n){var t=e("../../../_hbs/slotmachine.hbs"),r=Backbone.View.extend({template:t,tagName:"main",className:"cd-main-content",initialize:function(){this.render()},render:function(){return this.$el.html(this.template()),this}});n.exports=r},{"../../../_hbs/slotmachine.hbs":5}],11:[function(e,n,t){"use strict";var r=e("./handlebars/base"),a=e("./handlebars/safe-string")["default"],i=e("./handlebars/exception")["default"],s=e("./handlebars/utils"),o=e("./handlebars/runtime"),l=function(){var e=new r.HandlebarsEnvironment;return s.extend(e,r),e.SafeString=a,e.Exception=i,e.Utils=s,e.escapeExpression=s.escapeExpression,e.VM=o,e.template=function(n){return o.template(n,e)},e},c=l();c.create=l,c["default"]=c,t["default"]=c},{"./handlebars/base":12,"./handlebars/exception":13,"./handlebars/runtime":14,"./handlebars/safe-string":15,"./handlebars/utils":16}],12:[function(e,n,t){"use strict";function r(e,n){this.helpers=e||{},this.partials=n||{},a(this)}function a(e){e.registerHelper("helperMissing",function(){if(1===arguments.length)return void 0;throw new s("Missing helper: '"+arguments[arguments.length-1].name+"'")}),e.registerHelper("blockHelperMissing",function(n,t){var r=t.inverse,a=t.fn;if(n===!0)return a(this);if(n===!1||null==n)return r(this);if(u(n))return n.length>0?(t.ids&&(t.ids=[t.name]),e.helpers.each(n,t)):r(this);if(t.data&&t.ids){var s=v(t.data);s.contextPath=i.appendContextPath(t.data.contextPath,t.name),t={data:s}}return a(n,t)}),e.registerHelper("each",function(e,n){if(!n)throw new s("Must pass iterator to #each");var t,r,a=n.fn,o=n.inverse,l=0,c="";if(n.data&&n.ids&&(r=i.appendContextPath(n.data.contextPath,n.ids[0])+"."),p(e)&&(e=e.call(this)),n.data&&(t=v(n.data)),e&&"object"==typeof e)if(u(e))for(var h=e.length;h>l;l++)t&&(t.index=l,t.first=0===l,t.last=l===e.length-1,r&&(t.contextPath=r+l)),c+=a(e[l],{data:t});else for(var d in e)e.hasOwnProperty(d)&&(t&&(t.key=d,t.index=l,t.first=0===l,r&&(t.contextPath=r+d)),c+=a(e[d],{data:t}),l++);return 0===l&&(c=o(this)),c}),e.registerHelper("if",function(e,n){return p(e)&&(e=e.call(this)),!n.hash.includeZero&&!e||i.isEmpty(e)?n.inverse(this):n.fn(this)}),e.registerHelper("unless",function(n,t){return e.helpers["if"].call(this,n,{fn:t.inverse,inverse:t.fn,hash:t.hash})}),e.registerHelper("with",function(e,n){p(e)&&(e=e.call(this));var t=n.fn;if(i.isEmpty(e))return n.inverse(this);if(n.data&&n.ids){var r=v(n.data);r.contextPath=i.appendContextPath(n.data.contextPath,n.ids[0]),n={data:r}}return t(e,n)}),e.registerHelper("log",function(n,t){var r=t.data&&null!=t.data.level?parseInt(t.data.level,10):1;e.log(r,n)}),e.registerHelper("lookup",function(e,n){return e&&e[n]})}var i=e("./utils"),s=e("./exception")["default"],o="2.0.0";t.VERSION=o;var l=6;t.COMPILER_REVISION=l;var c={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1"};t.REVISION_CHANGES=c;var u=i.isArray,p=i.isFunction,h=i.toString,d="[object Object]";t.HandlebarsEnvironment=r,r.prototype={constructor:r,logger:f,log:m,registerHelper:function(e,n){if(h.call(e)===d){if(n)throw new s("Arg not supported with multiple helpers");i.extend(this.helpers,e)}else this.helpers[e]=n},unregisterHelper:function(e){delete this.helpers[e]},registerPartial:function(e,n){h.call(e)===d?i.extend(this.partials,e):this.partials[e]=n},unregisterPartial:function(e){delete this.partials[e]}};var f={methodMap:{0:"debug",1:"info",2:"warn",3:"error"},DEBUG:0,INFO:1,WARN:2,ERROR:3,level:3,log:function(e,n){if(f.level<=e){var t=f.methodMap[e];"undefined"!=typeof console&&console[t]&&console[t].call(console,n)}}};t.logger=f;var m=f.log;t.log=m;var v=function(e){var n=i.extend({},e);return n._parent=e,n};t.createFrame=v},{"./exception":13,"./utils":16}],13:[function(e,n,t){"use strict";function r(e,n){var t;n&&n.firstLine&&(t=n.firstLine,e+=" - "+t+":"+n.firstColumn);for(var r=Error.prototype.constructor.call(this,e),i=0;i<a.length;i++)this[a[i]]=r[a[i]];t&&(this.lineNumber=t,this.column=n.firstColumn)}var a=["description","fileName","lineNumber","message","name","number","stack"];r.prototype=new Error,t["default"]=r},{}],14:[function(e,n,t){"use strict";function r(e){var n=e&&e[0]||1,t=p;if(n!==t){if(t>n){var r=h[t],a=h[n];throw new u("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+r+") or downgrade your runtime to an older version ("+a+").")}throw new u("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+e[1]+").")}}function a(e,n){if(!n)throw new u("No environment passed to template");if(!e||!e.main)throw new u("Unknown template object: "+typeof e);n.VM.checkRevision(e.compiler);var t=function(t,r,a,i,s,o,l,p,h){s&&(i=c.extend({},i,s));var d=n.VM.invokePartial.call(this,t,a,i,o,l,p,h);if(null==d&&n.compile){var f={helpers:o,partials:l,data:p,depths:h};l[a]=n.compile(t,{data:void 0!==p,compat:e.compat},n),d=l[a](i,f)}if(null!=d){if(r){for(var m=d.split("\n"),v=0,g=m.length;g>v&&(m[v]||v+1!==g);v++)m[v]=r+m[v];d=m.join("\n")}return d}throw new u("The partial "+a+" could not be compiled when running in runtime-only mode")},r={lookup:function(e,n){for(var t=e.length,r=0;t>r;r++)if(e[r]&&null!=e[r][n])return e[r][n]},lambda:function(e,n){return"function"==typeof e?e.call(n):e},escapeExpression:c.escapeExpression,invokePartial:t,fn:function(n){return e[n]},programs:[],program:function(e,n,t){var r=this.programs[e],a=this.fn(e);return n||t?r=i(this,e,a,n,t):r||(r=this.programs[e]=i(this,e,a)),r},data:function(e,n){for(;e&&n--;)e=e._parent;return e},merge:function(e,n){var t=e||n;return e&&n&&e!==n&&(t=c.extend({},n,e)),t},noop:n.VM.noop,compilerInfo:e.compiler},a=function(n,t){t=t||{};var i=t.data;a._setup(t),!t.partial&&e.useData&&(i=l(n,i));var s;return e.useDepths&&(s=t.depths?[n].concat(t.depths):[n]),e.main.call(r,n,r.helpers,r.partials,i,s)};return a.isTop=!0,a._setup=function(t){t.partial?(r.helpers=t.helpers,r.partials=t.partials):(r.helpers=r.merge(t.helpers,n.helpers),e.usePartial&&(r.partials=r.merge(t.partials,n.partials)))},a._child=function(n,t,a){if(e.useDepths&&!a)throw new u("must pass parent depths");return i(r,n,e[n],t,a)},a}function i(e,n,t,r,a){var i=function(n,i){return i=i||{},t.call(e,n,e.helpers,e.partials,i.data||r,a&&[n].concat(a))};return i.program=n,i.depth=a?a.length:0,i}function s(e,n,t,r,a,i,s){var o={partial:!0,helpers:r,partials:a,data:i,depths:s};if(void 0===e)throw new u("The partial "+n+" could not be found");return e instanceof Function?e(t,o):void 0}function o(){return""}function l(e,n){return n&&"root"in n||(n=n?d(n):{},n.root=e),n}var c=e("./utils"),u=e("./exception")["default"],p=e("./base").COMPILER_REVISION,h=e("./base").REVISION_CHANGES,d=e("./base").createFrame;t.checkRevision=r,t.template=a,t.program=i,t.invokePartial=s,t.noop=o},{"./base":12,"./exception":13,"./utils":16}],15:[function(e,n,t){"use strict";function r(e){this.string=e}r.prototype.toString=function(){return""+this.string},t["default"]=r},{}],16:[function(e,n,t){"use strict";function r(e){return c[e]}function a(e){for(var n=1;n<arguments.length;n++)for(var t in arguments[n])Object.prototype.hasOwnProperty.call(arguments[n],t)&&(e[t]=arguments[n][t]);return e}function i(e){return e instanceof l?e.toString():null==e?"":e?(e=""+e,p.test(e)?e.replace(u,r):e):e+""}function s(e){return e||0===e?f(e)&&0===e.length?!0:!1:!0}function o(e,n){return(e?e+".":"")+n}var l=e("./safe-string")["default"],c={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},u=/[&<>"'`]/g,p=/[&<>"'`]/;t.extend=a;var h=Object.prototype.toString;t.toString=h;var d=function(e){return"function"==typeof e};d(/x/)&&(d=function(e){return"function"==typeof e&&"[object Function]"===h.call(e)});var d;t.isFunction=d;var f=Array.isArray||function(e){return e&&"object"==typeof e?"[object Array]"===h.call(e):!1};t.isArray=f,t.escapeExpression=i,t.isEmpty=s,t.appendContextPath=o},{"./safe-string":15}],17:[function(e,n){n.exports=e("./dist/cjs/handlebars.runtime")},{"./dist/cjs/handlebars.runtime":11}],18:[function(e,n){n.exports=e("handlebars/runtime")["default"]},{"handlebars/runtime":17}]},{},[1]);
//# sourceMappingURL=app.js.map