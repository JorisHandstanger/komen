!function e(n,t,i){function a(r,o){if(!t[r]){if(!n[r]){var l="function"==typeof require&&require;if(!o&&l)return l(r,!0);if(s)return s(r,!0);var c=new Error("Cannot find module '"+r+"'");throw c.code="MODULE_NOT_FOUND",c}var u=t[r]={exports:{}};n[r][0].call(u.exports,function(e){var t=n[r][1][e];return a(t?t:e)},u,u.exports,e,n,t,i)}return t[r].exports}for(var s="function"==typeof require&&require,r=0;r<i.length;r++)a(i[r]);return a}({1:[function(e){function n(){console.log("[App] start Backbone"),Window.Application=new t,Backbone.history.start()}var t=(e("hbsfy/runtime"),e("./classes/routers/Application.js"));n()},{"./classes/routers/Application.js":14,"hbsfy/runtime":30}],2:[function(e,n){var t=e("hbsfy/runtime");n.exports=t.template({compiler:[6,">= 2.0.0-beta.1"],main:function(e,n,t,i){var a,s="function",r=n.helperMissing,o=this.escapeExpression;return"<p>"+o((a=null!=(a=n.email||(null!=e?e.email:e))?a:r,typeof a===s?a.call(e,{name:"email",hash:{},data:i}):a))+"</p>\n"},useData:!0})},{"hbsfy/runtime":30}],3:[function(e,n){var t=e("hbsfy/runtime");n.exports=t.template({compiler:[6,">= 2.0.0-beta.1"],main:function(){return'	<!-- Landing page -->\n\n	<section class="cd-intro">\n\n		<div class="mainApp">\n\n				<div class="title">\n					<img class="titlebg2" src="assets/svg/titleBG.svg" alt="">\n					<p>dag ...</p>\n				</div>\n\n		</div>\n\n			<header class="cd-header">\n\n				<a class="cd-menu-trigger" href="#main-nav"><span></span></a>\n\n			</header>\n\n	</section>\n'},useData:!0})},{"hbsfy/runtime":30}],4:[function(e,n){var t=e("hbsfy/runtime");n.exports=t.template({compiler:[6,">= 2.0.0-beta.1"],main:function(){return'	<!-- Landing page -->\n\n	<section class="cd-intro">\n\n		<div class="mainApp">\n\n				<div class="title">\n					<img class="titlebg2" src="assets/svg/titleBG.svg" alt="">\n					<p>Kalender</p>\n				</div>\n\n		</div>\n\n			<header class="cd-header">\n\n				<a class="cd-menu-trigger" href="#main-nav"><span></span></a>\n\n			</header>\n\n	</section>\n'},useData:!0})},{"hbsfy/runtime":30}],5:[function(e,n){var t=e("hbsfy/runtime");n.exports=t.template({compiler:[6,">= 2.0.0-beta.1"],main:function(){return'	<!-- Landing page -->\n\n	<section class="cd-intro">\n\n		<div class="mainApp">\n\n				<div class="title">\n					<img class="titlebg2" src="assets/svg/titleBG.svg" alt="">\n					<p>Klassement</p>\n				</div>\n\n		</div>\n\n			<header class="cd-header">\n\n				<a class="cd-menu-trigger" href="#main-nav"><span></span></a>\n\n			</header>\n\n	</section>\n'},useData:!0})},{"hbsfy/runtime":30}],6:[function(e,n){var t=e("hbsfy/runtime");n.exports=t.template({compiler:[6,">= 2.0.0-beta.1"],main:function(){return'	<ul>\n\n		<li><a href="#0"><span>Home</span></a></li>\n		<li><a href="#0"><span>Kalender</span></a></li>\n		<li><a href="#0"><span>Klassement</span></a></li>\n		<li><a href="#0"><span>Hall of fame</span></a></li>\n\n		<a class="uitloggen" href="index.php?page=logout">Uitloggen</a>\n	</ul>\n\n	<div class="footer">\n\n		<p>© Komen Gokken 2015 - All Rights reserved</p>\n\n	</div>\n\n	<a href="#0" class="cd-close-menu">Close<span></span></a>\n\n'},useData:!0})},{"hbsfy/runtime":30}],7:[function(e,n){var t=e("hbsfy/runtime");n.exports=t.template({compiler:[6,">= 2.0.0-beta.1"],main:function(){return'	<!-- Landing page -->\n\n	<section class="cd-intro">\n\n		<div class="mainApp">\n\n			<div class="title">\n\n					<img class="titlebg2" src="assets/svg/titleBG.svg" alt="">\n					<p>Roulette</p>\n\n				</div>\n\n		</div>\n\n		<img class="rouletteSVG" src="assets/svg/roulette.svg" alt="">\n		<img class="rouletteBol" src="assets/svg/bol.svg" alt="">\n\n		<button class="btnProceed">Draai om deel te nemen</button>\n\n\n	</section>\n\n\n	<div class="roulettePopUp">\n\n			<p>Proficiat !</br> U bent geselecteerd</p>\n			<button class="btnProceed2">Ga verder</button>\n\n	</div>\n'},useData:!0})},{"hbsfy/runtime":30}],8:[function(e,n){var t=e("hbsfy/runtime");n.exports=t.template({compiler:[6,">= 2.0.0-beta.1"],main:function(e,n,t,i){var a,s="function",r=n.helperMissing,o=this.escapeExpression;return'<div class="slot" id="slot'+o((a=null!=(a=n.id||(null!=e?e.id:e))?a:r,typeof a===s?a.call(e,{name:"id",hash:{},data:i}):a))+'">\n  <canvas id="cr'+o((a=null!=(a=n.id||(null!=e?e.id:e))?a:r,typeof a===s?a.call(e,{name:"id",hash:{},data:i}):a))+'" class="canvasResult" width="66" height="66"></canvas>\n  <canvas id="c'+o((a=null!=(a=n.id||(null!=e?e.id:e))?a:r,typeof a===s?a.call(e,{name:"id",hash:{},data:i}):a))+'" class="canvas" width="66" height="300"></canvas>\n</div>\n'},useData:!0})},{"hbsfy/runtime":30}],9:[function(e,n){var t=e("hbsfy/runtime");n.exports=t.template({compiler:[6,">= 2.0.0-beta.1"],main:function(){return'	<!-- Landing page -->\n\n	<section class="cd-intro">\n\n		<div class="mainApp">\n\n				<div class="title">\n					<img class="titlebg2" src="assets/svg/titleBG.svg" alt="">\n					<p>De slotmachine</p>\n				</div>\n\n				<div class="slotmachine">\n					<div id="slots">\n\n					</div>\n\n					<img src="assets/svg/slot.svg" alt="">\n				</div>\n\n				<button value="turn" type="submit" class="slotbutton">Bepaal de dagindeling!</button>\n\n		</div>\n\n\n	</section>\n\n\n	<div class="roulettePopUp">\n\n			<p>Dag <span id="dag"></span> is het jouw beurt!</p>\n			<button class="btnProceed2">Start u week!	</button>\n\n	</div>\n'},useData:!0})},{"hbsfy/runtime":30}],10:[function(e,n){var t=e("../models/Dag.js"),i=Backbone.Collection.extend({model:t,url:"./api/dag",parse:function(e){return e.results},sync:function(e,n,t){var i=this,a=_.extend({type:"GET",dataType:"jsonp",url:i.url,processData:!1},t);return $.ajax(a)}});n.exports=i},{"../models/Dag.js":12}],11:[function(e,n){var t=e("../models/User.js"),i=Backbone.Collection.extend({model:t,url:"./api/users",parse:function(e){return e.results},sync:function(e,n,t){var i=this,a=_.extend({type:"GET",dataType:"jsonp",url:i.url,processData:!1},t);return $.ajax(a)}});n.exports=i},{"../models/User.js":13}],12:[function(e,n){var t=Backbone.Model.extend({defaults:{text:"dit is de default text"},urlRoot:"./api/dag",sync:function(e,n,t){n.methodUrl&&n.methodUrl(e.toLowerCase())&&(t=t||{},t.url=n.methodUrl(e.toLowerCase())),Backbone.Collection.prototype.sync.apply(this,arguments)}});n.exports=t},{}],13:[function(e,n){var t=Backbone.Model.extend({defaults:{id:"",voornaam:"",achtenaam:""}});n.exports=t},{}],14:[function(e,n){var t=e("../views/NavView.js"),i=e("../views/SlotMachineView.js"),a=e("../views/HomeView.js"),s=e("../views/RouletteView.js"),r=e("../views/Klassement.js"),o=e("../views/Kalender.js"),l=Backbone.Router.extend({routes:{indeling:"indeling",deelnemen:"deelnemen",home:"home",klassement:"klassement",kalender:"kalender","*actions":"default"},empty:function(){$(".container").empty()},"default":function(){this.navigate("deelnemen",{trigger:!0})},indeling:function(){this.empty(),this.slotmachine=new i,$(".container").append(this.slotmachine.render().el)},deelnemen:function(){this.empty(),this.deelnemen=new s,$(".container").append(this.deelnemen.render().el)},home:function(){this.empty(),this.nav=new t,$(".container").append(this.nav.render().el),this.home=new a,$(".container").append(this.home.render().el)},klassement:function(){this.nav=new t,$(".container").append(this.nav.render().el),this.klassement=new r,$(".container").append(this.klassement.render().el)},kalender:function(){this.nav=new t,$(".container").append(this.nav.render().el),this.kalender=new o,$(".container").append(this.kalender.render().el)}});n.exports=l},{"../views/HomeView.js":16,"../views/Kalender.js":17,"../views/Klassement.js":18,"../views/NavView.js":19,"../views/RouletteView.js":20,"../views/SlotMachineView.js":21}],15:[function(e,n){var t=e("../../../_hbs/day.hbs"),i=Backbone.View.extend({template:t,initialize:function(){},render:function(){return this.$el.html(this.template(this.model.attributes)),this}});n.exports=i},{"../../../_hbs/day.hbs":2}],16:[function(e,n){var t=e("./DagView.js"),i=e("../collections/DagenCollection.js"),a=e("../../../_hbs/homeview.hbs"),s=Backbone.View.extend({template:a,tagName:"main",className:"cd-main-content",events:{"click .cd-menu-trigger":"OpenClickNavigation"},OpenClickNavigation:function(){console.log("navigation click"),event.preventDefault(),$(".cd-main-content").addClass("move-out"),$(".main-nav").addClass("is-visible"),$(".cd-shadow-layer").addClass("is-visible"),$(".cd-menu-trigger").prop("disabled",!0),$(".cd-main-content").css("overflow-x, hidden;"),$(".cd-close-menu").on("click",function(e){e.preventDefault(),$(".cd-main-content").removeClass("move-out"),$(".main-nav").removeClass("is-visible"),$(".cd-shadow-layer").removeClass("is-visible"),$(".cd-menu-trigger").prop("disabled",!1)})},initialize:function(){this.render(),this.collection=new i,this.listenTo(this.collection,"sync",this.renderViews),this.collection.fetch()},renderViews:function(){this.$days.empty(),this.collection.forEach(this.renderDay,this)},renderDay:function(e){var n=new t({model:e});this.$days.append(n.render().el)},render:function(){return this.$el.html(this.template()),this}});n.exports=s},{"../../../_hbs/homeview.hbs":3,"../collections/DagenCollection.js":10,"./DagView.js":15}],17:[function(e,n){var t=e("../../../_hbs/kalender.hbs"),i=Backbone.View.extend({template:t,tagName:"main",className:"cd-main-content",events:{"click .cd-menu-trigger":"OpenClickNavigation"},OpenClickNavigation:function(){console.log("navigation click"),event.preventDefault(),$(".cd-main-content").addClass("move-out"),$(".main-nav").addClass("is-visible"),$(".cd-shadow-layer").addClass("is-visible"),$(".cd-menu-trigger").prop("disabled",!0),$(".cd-main-content").css("overflow-x, hidden;"),$(".cd-close-menu").on("click",function(e){e.preventDefault(),$(".cd-main-content").removeClass("move-out"),$(".main-nav").removeClass("is-visible"),$(".cd-shadow-layer").removeClass("is-visible"),$(".cd-menu-trigger").prop("disabled",!1)})},initialize:function(){this.render()},render:function(){return this.$el.html(this.template()),this}});n.exports=i},{"../../../_hbs/kalender.hbs":4}],18:[function(e,n){var t=e("../../../_hbs/klassement.hbs"),i=Backbone.View.extend({template:t,tagName:"main",className:"cd-main-content",events:{"click .cd-menu-trigger":"OpenClickNavigation"},OpenClickNavigation:function(){console.log("navigation click"),event.preventDefault(),$(".cd-main-content").addClass("move-out"),$(".main-nav").addClass("is-visible"),$(".cd-shadow-layer").addClass("is-visible"),$(".cd-menu-trigger").prop("disabled",!0),$(".cd-main-content").css("overflow-x, hidden;"),$(".cd-close-menu").on("click",function(e){e.preventDefault(),$(".cd-main-content").removeClass("move-out"),$(".main-nav").removeClass("is-visible"),$(".cd-shadow-layer").removeClass("is-visible"),$(".cd-menu-trigger").prop("disabled",!1)})},initialize:function(){this.render()},render:function(){return this.$el.html(this.template()),this}});n.exports=i},{"../../../_hbs/klassement.hbs":5}],19:[function(e,n){var t=e("../../../_hbs/navigation.hbs"),i=Backbone.View.extend({template:t,tagName:"nav",className:"main-nav",initialize:function(){this.render()},render:function(){return this.$el.html(this.template()),this}});n.exports=i},{"../../../_hbs/navigation.hbs":6}],20:[function(e,n){var t=e("../../../_hbs/roulette.hbs"),i=Backbone.View.extend({template:t,tagName:"main",className:"cd-main-content",events:{"click .btnProceed":"DraaiRoulette","click .btnProceed2":"GaNaarIndeling"},GaNaarIndeling:function(){Window.Application.navigate("indeling",{trigger:!0})},DraaiRoulette:function(){console.log("[RouletteView] clicked"),$(".roulettePopUp").delay(3e3).fadeIn(600),$(".rouletteSVG").css({"-webkit-transform":"rotate(660deg)","-moz-transform":"rotate(660deg)",transform:"rotate(660deg)"}),$(".rouletteBol").css({"-webkit-transform":"rotate(235deg)","-moz-transform":"rotate(235deg)",transform:"rotate(235deg)"})},initialize:function(){this.render()},render:function(){return this.$el.html(this.template()),this}});n.exports=i},{"../../../_hbs/roulette.hbs":7}],21:[function(e,n){var t=e("../../../_hbs/slotmachine.hbs"),i=e("./SlotView.js"),a=(e("../collections/UserCollection.js"),Backbone.View.extend({template:t,tagName:"main",className:"cd-main-content",events:{"click .slotbutton":"roll","click .btnProceed2":"GaNaarHome"},GaNaarHome:function(){Window.Application.navigate("home",{trigger:!0})},initialize:function(){var e=[];$.ajax({async:!1,url:"./api/users",dataType:"json",success:function(n){n.forEach(function(n){e.push(n.voornaam)})}});var n=[1,2,3,4];n.sort(function(){return.5-Math.random()}),this.verdeling=[],this.verdeling[n[0]]=e[0],this.verdeling[n[1]]=e[1],this.verdeling[n[2]]=e[2],this.verdeling[n[3]]=e[3],this.slot1=new i({id:1,user:n[0],players:e}),this.slot2=new i({id:2,user:n[1],players:e}),this.slot3=new i({id:3,user:n[2],players:e}),this.slot4=new i({id:4,user:n[3],players:e})},render:function(){return this.$el.html(this.template()),this.$el.find("#slots").append(this.slot1.$el),this.$el.find("#slots").append(this.slot2.$el),this.$el.find("#slots").append(this.slot3.$el),this.$el.find("#slots").append(this.slot4.$el),this.slot1.render(),this.slot2.render(),this.slot3.render(),this.slot4.render(),this},roll:function(){var e;$.ajax({async:!1,url:"index.php?page=checkloggedin",success:function(n){e=n.voornaam}});var n=this.verdeling.indexOf(e);$("#dag")[0].innerHTML=n,$(".roulettePopUp").delay(5500).fadeIn(600),this.slot1.roll();var t=this;setTimeout(function(){t.slot2.roll()},500),setTimeout(function(){t.slot3.roll()},1e3),setTimeout(function(){t.slot4.roll()},1500)}}));n.exports=a},{"../../../_hbs/slotmachine.hbs":9,"../collections/UserCollection.js":11,"./SlotView.js":22}],22:[function(e,n){var t=e("../../../_hbs/slot.hbs"),a=Backbone.View.extend({template:t,tagName:"div",initialize:function(e){this.options=e,_.bindAll(this,"render"),this.render()},render:function(){return this.$el.html(this.template({id:this.options.id})),this.ctx=this.$el.find("#c"+this.options.id),this.result=this.$el.find("#cr"+this.options.id),this.setupCanvas(),this},setupCanvas:function(){var e=this.options.players,n=this.ctx[0].getContext("2d"),t=this.result[0].getContext("2d"),a=[],s=0;for(this.ctx.height=64*e.length,i=1;i<=e.length;i++){a[s]=new Image;{64*i-64}a[s].onload=function(){var t=64*i-64,a=i;return function(){n.drawImage(this,0,t);var i;i=e[a-1],n.font="8pt Calibri",n.fillText(i,3,t+54)}}(),a[s].src=i>4?"./assets/img/"+(i-4)+".png":"./assets/img/"+i+".png",s+=1}var r=new Image;r.onload=function(){return function(){n.drawImage(this,0,256)}}(),r.src="./assets/img/1.png";var o=new Image,l=e[this.options.user-1];o.onload=function(){return function(){t.drawImage(o,0,0),t.font="8pt Calibri",t.fillText(l,3,54)}}(),o.src="./assets/img/"+this.options.user+".png"},roll:function(){this.ctx[0].className="canvas animating";var e=this;setTimeout(function(){e.ctx.css("margin-top","-512px"),e.result.animate({marginTop:"0"},300,"linear")},2700)}});n.exports=a},{"../../../_hbs/slot.hbs":8}],23:[function(e,n,t){"use strict";var i=e("./handlebars/base"),a=e("./handlebars/safe-string")["default"],s=e("./handlebars/exception")["default"],r=e("./handlebars/utils"),o=e("./handlebars/runtime"),l=function(){var e=new i.HandlebarsEnvironment;return r.extend(e,i),e.SafeString=a,e.Exception=s,e.Utils=r,e.escapeExpression=r.escapeExpression,e.VM=o,e.template=function(n){return o.template(n,e)},e},c=l();c.create=l,c["default"]=c,t["default"]=c},{"./handlebars/base":24,"./handlebars/exception":25,"./handlebars/runtime":26,"./handlebars/safe-string":27,"./handlebars/utils":28}],24:[function(e,n,t){"use strict";function i(e,n){this.helpers=e||{},this.partials=n||{},a(this)}function a(e){e.registerHelper("helperMissing",function(){if(1===arguments.length)return void 0;throw new r("Missing helper: '"+arguments[arguments.length-1].name+"'")}),e.registerHelper("blockHelperMissing",function(n,t){var i=t.inverse,a=t.fn;if(n===!0)return a(this);if(n===!1||null==n)return i(this);if(u(n))return n.length>0?(t.ids&&(t.ids=[t.name]),e.helpers.each(n,t)):i(this);if(t.data&&t.ids){var r=v(t.data);r.contextPath=s.appendContextPath(t.data.contextPath,t.name),t={data:r}}return a(n,t)}),e.registerHelper("each",function(e,n){if(!n)throw new r("Must pass iterator to #each");var t,i,a=n.fn,o=n.inverse,l=0,c="";if(n.data&&n.ids&&(i=s.appendContextPath(n.data.contextPath,n.ids[0])+"."),d(e)&&(e=e.call(this)),n.data&&(t=v(n.data)),e&&"object"==typeof e)if(u(e))for(var p=e.length;p>l;l++)t&&(t.index=l,t.first=0===l,t.last=l===e.length-1,i&&(t.contextPath=i+l)),c+=a(e[l],{data:t});else for(var h in e)e.hasOwnProperty(h)&&(t&&(t.key=h,t.index=l,t.first=0===l,i&&(t.contextPath=i+h)),c+=a(e[h],{data:t}),l++);return 0===l&&(c=o(this)),c}),e.registerHelper("if",function(e,n){return d(e)&&(e=e.call(this)),!n.hash.includeZero&&!e||s.isEmpty(e)?n.inverse(this):n.fn(this)}),e.registerHelper("unless",function(n,t){return e.helpers["if"].call(this,n,{fn:t.inverse,inverse:t.fn,hash:t.hash})}),e.registerHelper("with",function(e,n){d(e)&&(e=e.call(this));var t=n.fn;if(s.isEmpty(e))return n.inverse(this);if(n.data&&n.ids){var i=v(n.data);i.contextPath=s.appendContextPath(n.data.contextPath,n.ids[0]),n={data:i}}return t(e,n)}),e.registerHelper("log",function(n,t){var i=t.data&&null!=t.data.level?parseInt(t.data.level,10):1;e.log(i,n)}),e.registerHelper("lookup",function(e,n){return e&&e[n]})}var s=e("./utils"),r=e("./exception")["default"],o="2.0.0";t.VERSION=o;var l=6;t.COMPILER_REVISION=l;var c={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1"};t.REVISION_CHANGES=c;var u=s.isArray,d=s.isFunction,p=s.toString,h="[object Object]";t.HandlebarsEnvironment=i,i.prototype={constructor:i,logger:m,log:f,registerHelper:function(e,n){if(p.call(e)===h){if(n)throw new r("Arg not supported with multiple helpers");s.extend(this.helpers,e)}else this.helpers[e]=n},unregisterHelper:function(e){delete this.helpers[e]},registerPartial:function(e,n){p.call(e)===h?s.extend(this.partials,e):this.partials[e]=n},unregisterPartial:function(e){delete this.partials[e]}};var m={methodMap:{0:"debug",1:"info",2:"warn",3:"error"},DEBUG:0,INFO:1,WARN:2,ERROR:3,level:3,log:function(e,n){if(m.level<=e){var t=m.methodMap[e];"undefined"!=typeof console&&console[t]&&console[t].call(console,n)}}};t.logger=m;var f=m.log;t.log=f;var v=function(e){var n=s.extend({},e);return n._parent=e,n};t.createFrame=v},{"./exception":25,"./utils":28}],25:[function(e,n,t){"use strict";function i(e,n){var t;n&&n.firstLine&&(t=n.firstLine,e+=" - "+t+":"+n.firstColumn);for(var i=Error.prototype.constructor.call(this,e),s=0;s<a.length;s++)this[a[s]]=i[a[s]];t&&(this.lineNumber=t,this.column=n.firstColumn)}var a=["description","fileName","lineNumber","message","name","number","stack"];i.prototype=new Error,t["default"]=i},{}],26:[function(e,n,t){"use strict";function i(e){var n=e&&e[0]||1,t=d;if(n!==t){if(t>n){var i=p[t],a=p[n];throw new u("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+i+") or downgrade your runtime to an older version ("+a+").")}throw new u("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+e[1]+").")}}function a(e,n){if(!n)throw new u("No environment passed to template");if(!e||!e.main)throw new u("Unknown template object: "+typeof e);n.VM.checkRevision(e.compiler);var t=function(t,i,a,s,r,o,l,d,p){r&&(s=c.extend({},s,r));var h=n.VM.invokePartial.call(this,t,a,s,o,l,d,p);if(null==h&&n.compile){var m={helpers:o,partials:l,data:d,depths:p};l[a]=n.compile(t,{data:void 0!==d,compat:e.compat},n),h=l[a](s,m)}if(null!=h){if(i){for(var f=h.split("\n"),v=0,g=f.length;g>v&&(f[v]||v+1!==g);v++)f[v]=i+f[v];h=f.join("\n")}return h}throw new u("The partial "+a+" could not be compiled when running in runtime-only mode")},i={lookup:function(e,n){for(var t=e.length,i=0;t>i;i++)if(e[i]&&null!=e[i][n])return e[i][n]},lambda:function(e,n){return"function"==typeof e?e.call(n):e},escapeExpression:c.escapeExpression,invokePartial:t,fn:function(n){return e[n]},programs:[],program:function(e,n,t){var i=this.programs[e],a=this.fn(e);return n||t?i=s(this,e,a,n,t):i||(i=this.programs[e]=s(this,e,a)),i},data:function(e,n){for(;e&&n--;)e=e._parent;return e},merge:function(e,n){var t=e||n;return e&&n&&e!==n&&(t=c.extend({},n,e)),t},noop:n.VM.noop,compilerInfo:e.compiler},a=function(n,t){t=t||{};var s=t.data;a._setup(t),!t.partial&&e.useData&&(s=l(n,s));var r;return e.useDepths&&(r=t.depths?[n].concat(t.depths):[n]),e.main.call(i,n,i.helpers,i.partials,s,r)};return a.isTop=!0,a._setup=function(t){t.partial?(i.helpers=t.helpers,i.partials=t.partials):(i.helpers=i.merge(t.helpers,n.helpers),e.usePartial&&(i.partials=i.merge(t.partials,n.partials)))},a._child=function(n,t,a){if(e.useDepths&&!a)throw new u("must pass parent depths");return s(i,n,e[n],t,a)},a}function s(e,n,t,i,a){var s=function(n,s){return s=s||{},t.call(e,n,e.helpers,e.partials,s.data||i,a&&[n].concat(a))};return s.program=n,s.depth=a?a.length:0,s}function r(e,n,t,i,a,s,r){var o={partial:!0,helpers:i,partials:a,data:s,depths:r};if(void 0===e)throw new u("The partial "+n+" could not be found");return e instanceof Function?e(t,o):void 0}function o(){return""}function l(e,n){return n&&"root"in n||(n=n?h(n):{},n.root=e),n}var c=e("./utils"),u=e("./exception")["default"],d=e("./base").COMPILER_REVISION,p=e("./base").REVISION_CHANGES,h=e("./base").createFrame;t.checkRevision=i,t.template=a,t.program=s,t.invokePartial=r,t.noop=o},{"./base":24,"./exception":25,"./utils":28}],27:[function(e,n,t){"use strict";function i(e){this.string=e}i.prototype.toString=function(){return""+this.string},t["default"]=i},{}],28:[function(e,n,t){"use strict";function i(e){return c[e]}function a(e){for(var n=1;n<arguments.length;n++)for(var t in arguments[n])Object.prototype.hasOwnProperty.call(arguments[n],t)&&(e[t]=arguments[n][t]);return e}function s(e){return e instanceof l?e.toString():null==e?"":e?(e=""+e,d.test(e)?e.replace(u,i):e):e+""}function r(e){return e||0===e?m(e)&&0===e.length?!0:!1:!0}function o(e,n){return(e?e+".":"")+n}var l=e("./safe-string")["default"],c={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},u=/[&<>"'`]/g,d=/[&<>"'`]/;t.extend=a;var p=Object.prototype.toString;t.toString=p;var h=function(e){return"function"==typeof e};h(/x/)&&(h=function(e){return"function"==typeof e&&"[object Function]"===p.call(e)});var h;t.isFunction=h;var m=Array.isArray||function(e){return e&&"object"==typeof e?"[object Array]"===p.call(e):!1};t.isArray=m,t.escapeExpression=s,t.isEmpty=r,t.appendContextPath=o},{"./safe-string":27}],29:[function(e,n){n.exports=e("./dist/cjs/handlebars.runtime")},{"./dist/cjs/handlebars.runtime":23}],30:[function(e,n){n.exports=e("handlebars/runtime")["default"]},{"handlebars/runtime":29}]},{},[1]);
//# sourceMappingURL=app.js.map