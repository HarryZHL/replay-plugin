window.replay=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=8)}([function(e,t,n){"use strict";t.__esModule=!0,function(e){e[e.Document=0]="Document",e[e.DocumentType=1]="DocumentType",e[e.Element=2]="Element",e[e.Text=3]="Text",e[e.CDATA=4]="CDATA",e[e.Comment=5]="Comment"}(t.NodeType||(t.NodeType={})),function(e){e[e.DomContentLoaded=0]="DomContentLoaded",e[e.Load=1]="Load",e[e.FullSnapshot=2]="FullSnapshot",e[e.IncrementalSnapshot=3]="IncrementalSnapshot",e[e.Meta=4]="Meta"}(t.EventType||(t.EventType={})),function(e){e[e.Mutation=0]="Mutation",e[e.MouseMove=1]="MouseMove",e[e.MouseInteraction=2]="MouseInteraction",e[e.Scroll=3]="Scroll",e[e.ViewportResize=4]="ViewportResize",e[e.Input=5]="Input"}(t.IncrementalSource||(t.IncrementalSource={})),function(e){e[e.MouseUp=0]="MouseUp",e[e.MouseDown=1]="MouseDown",e[e.Click=2]="Click",e[e.ContextMenu=3]="ContextMenu",e[e.DblClick=4]="DblClick",e[e.Focus=5]="Focus",e[e.Blur=6]="Blur",e[e.TouchStart=7]="TouchStart",e[e.TouchMove=8]="TouchMove",e[e.TouchEnd=9]="TouchEnd"}(t.MouseInteractions||(t.MouseInteractions={})),function(e){e.Start="start",e.Pause="pause",e.Resume="resume",e.Resize="resize",e.Finish="finish",e.FullsnapshotRebuilded="fullsnapshot-rebuilded",e.LoadStylesheetStart="load-stylesheet-start",e.LoadStylesheetEnd="load-stylesheet-end",e.SkipStart="skip-start",e.SkipEnd="skip-end",e.MouseInteraction="mouse-interaction"}(t.ReplayerEvents||(t.ReplayerEvents={}))},function(e,t,n){"use strict";t.__esModule=!0,t.on=function(e,t,n){void 0===n&&(n=document);var r={capture:!0,passive:!0};return n.addEventListener(e,t,r),function(){return n.removeEventListener(e,t,r)}},t.mirror={map:{},getId:function(e){return e.__sn?e.__sn.id:-1},getNode:function(e){return t.mirror.map[e]||null},removeNodeFromMap:function(e){var n=e.__sn&&e.__sn.id;delete t.mirror.map[n],e.childNodes&&e.childNodes.forEach(function(e){return t.mirror.removeNodeFromMap(e)})},has:function(e){return t.mirror.map.hasOwnProperty(e)}},t.throttle=function(e,t,n){void 0===n&&(n={});var r=null,o=0;return function(){var i=Date.now();o||!1!==n.leading||(o=i);var s=t-(i-o),a=this,l=arguments;s<=0||s>t?(r&&(window.clearTimeout(r),r=null),o=i,e.apply(a,l)):r||!1===n.trailing||(r=window.setTimeout(function(){o=!1===n.leading?0:Date.now(),r=null,e.apply(a,l)},s))}},t.hookSetter=function e(t,n,r){var o=Object.getOwnPropertyDescriptor(t,n);return Object.defineProperty(t,n,{set:function(e){var t=this;setTimeout(function(){r.set.call(t,e)},0),o&&o.set&&o.set.call(this,e)}}),function(){return e(t,n,o||{})}},t.getWindowHeight=function(){return window.innerHeight||document.documentElement&&document.documentElement.clientHeight||document.body&&document.body.clientHeight},t.getWindowWidth=function(){return window.innerWidth||document.documentElement&&document.documentElement.clientWidth||document.body&&document.body.clientWidth},t.isBlocked=function e(t,n){return!!t&&(t.nodeType===t.ELEMENT_NODE&&t.classList.contains(n)||e(t.parentNode,n))},t.isAncestorRemoved=function e(n){var r=t.mirror.getId(n);return!t.mirror.has(r)||(!n.parentNode||n.parentNode.nodeType!==n.DOCUMENT_NODE)&&(!n.parentNode||e(n.parentNode))}},function(e,t,n){"use strict";t.__esModule=!0;var r=n(5);t.snapshot=r.default,t.serializeNodeWithId=r.serializeNodeWithId,t.resetId=r.resetId;var o=n(6);t.rebuild=o.default,t.buildNodeWithSN=o.buildNodeWithSN,function(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}(n(0))},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(s=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),i=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[n].concat(i).concat([o]).join("\n")}var s;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];null!=i&&(r[i]=!0)}for(o=0;o<e.length;o++){var s=e[o];null!=s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),t.push(s))}},t}},function(e,t,n){var r,o,i={},s=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),a=function(e){var t={};return function(e,n){if("function"==typeof e)return e();if(void 0===t[e]){var r=function(e,t){return t?t.querySelector(e):document.querySelector(e)}.call(this,e,n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}}(),l=null,c=0,u=[],d=n(14);function f(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=i[r.id];if(o){o.refs++;for(var s=0;s<o.parts.length;s++)o.parts[s](r.parts[s]);for(;s<r.parts.length;s++)o.parts.push(g(r.parts[s],t))}else{var a=[];for(s=0;s<r.parts.length;s++)a.push(g(r.parts[s],t));i[r.id]={id:r.id,refs:1,parts:a}}}}function p(e,t){for(var n=[],r={},o=0;o<e.length;o++){var i=e[o],s=t.base?i[0]+t.base:i[0],a={css:i[1],media:i[2],sourceMap:i[3]};r[s]?r[s].parts.push(a):n.push(r[s]={id:s,parts:[a]})}return n}function h(e,t){var n=a(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=u[u.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),u.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=a(e.insertAt.before,n);n.insertBefore(t,o)}}function m(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=u.indexOf(e);t>=0&&u.splice(t,1)}function v(e){var t=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var r=function(){0;return n.nc}();r&&(e.attrs.nonce=r)}return y(t,e.attrs),h(e,t),t}function y(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function g(e,t){var n,r,o,i;if(t.transform&&e.css){if(!(i="function"==typeof t.transform?t.transform(e.css):t.transform.default(e.css)))return function(){};e.css=i}if(t.singleton){var s=c++;n=l||(l=v(t)),r=N.bind(null,n,s,!1),o=N.bind(null,n,s,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",y(t,e.attrs),h(e,t),t}(t),r=function(e,t,n){var r=n.css,o=n.sourceMap,i=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||i)&&(r=d(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var s=new Blob([r],{type:"text/css"}),a=e.href;e.href=URL.createObjectURL(s),a&&URL.revokeObjectURL(a)}.bind(null,n,t),o=function(){m(n),n.href&&URL.revokeObjectURL(n.href)}):(n=v(t),r=function(e,t){var n=t.css,r=t.media;r&&e.setAttribute("media",r);if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){m(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=s()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=p(e,t);return f(n,t),function(e){for(var r=[],o=0;o<n.length;o++){var s=n[o];(a=i[s.id]).refs--,r.push(a)}e&&f(p(e,t),t);for(o=0;o<r.length;o++){var a;if(0===(a=r[o]).refs){for(var l=0;l<a.parts.length;l++)a.parts[l]();delete i[a.id]}}}};var b,w=(b=[],function(e,t){return b[e]=t,b.filter(Boolean).join("\n")});function N(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=w(t,o);else{var i=document.createTextNode(o),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(i,s[t]):e.appendChild(i)}}},function(e,t,n){"use strict";t.__esModule=!0;var r=n(0),o=1;function i(){o=1}function s(e){try{var t=e.rules||e.cssRules;return t?Array.from(t).reduce(function(e,t){return e+t.cssText},""):null}catch(e){return null}}t.resetId=i;var a=/url\((?:'([^']*)'|"([^"]*)"|([^)]*))\)/gm,l=/^(?!www\.|(?:http|ftp)s?:\/\/|[A-Za-z]:\\|\/\/).*/,c=/^(data:)([\w\/\+\-]+);(charset=[\w-]+|base64).*,(.*)/gi;function u(e,t){return e.replace(a,function(e,n,r,o){var i,s=n||r||o;if(!s)return e;if(!l.test(s))return"url('"+s+"')";if(c.test(s))return"url("+s+")";if("/"===s[0])return"url('"+(((i=t).indexOf("//")>-1?i.split("/").slice(0,3).join("/"):i.split("/")[0]).split("?")[0]+s)+"')";var a=t.split("/"),u=s.split("/");a.pop();for(var d=0,f=u;d<f.length;d++){var p=f[d];"."!==p&&(".."===p?a.pop():a.push(p))}return"url('"+a.join("/")+"')"})}function d(e,t){var n=e.createElement("a");return n.href=t,n.href}function f(e,t,n,i,a){void 0===a&&(a=!1);var l=function(e,t,n){switch(e.nodeType){case e.DOCUMENT_NODE:return{type:r.NodeType.Document,childNodes:[]};case e.DOCUMENT_TYPE_NODE:return{type:r.NodeType.DocumentType,name:e.name,publicId:e.publicId,systemId:e.systemId};case e.ELEMENT_NODE:for(var o=e.classList.contains(n),i=e.tagName.toLowerCase(),a={},l=0,c=Array.from(e.attributes);l<c.length;l++){var f=c[l],p=f.name,h=f.value;a[p]="src"===p||"href"===p?d(t,h):"style"===p?u(h,location.href):h}if("link"===i){var m,v=Array.from(t.styleSheets).find(function(t){return t.href===e.href});(m=s(v))&&(delete a.rel,delete a.href,a._cssText=u(m,v.href))}if("style"===i&&e.sheet&&!e.innerHTML.trim().length&&(m=s(e.sheet))&&(a._cssText=u(m,location.href)),"input"!==i&&"textarea"!==i&&"select"!==i||(h=e.value,"radio"!==a.type&&"checkbox"!==a.type&&h?a.value=h:e.checked&&(a.checked=e.checked)),"option"===i){var y=e.parentElement;a.value===y.value&&(a.selected=e.selected)}if(o){var g=e.getBoundingClientRect(),b=g.width,w=g.height;a.rr_width=b+"px",a.rr_height=w+"px"}return{type:r.NodeType.Element,tagName:i,attributes:a,childNodes:[],isSVG:(x=e,"svg"===x.tagName||x instanceof SVGElement||void 0),needBlock:o};case e.TEXT_NODE:var N=e.parentNode&&e.parentNode.tagName,M=e.textContent,T="STYLE"===N||void 0;return T&&M&&(M=u(M,location.href)),"SCRIPT"===N&&(M="SCRIPT_PLACEHOLDER"),{type:r.NodeType.Text,textContent:M||"",isStyle:T};case e.CDATA_SECTION_NODE:return{type:r.NodeType.CDATA,textContent:""};case e.COMMENT_NODE:return{type:r.NodeType.Comment,textContent:e.textContent||""};default:return!1}var x}(e,t,i);if(!l)return console.warn(e,"not serialized"),null;var c=Object.assign(l,{id:o++});e.__sn=c,n[c.id]=e;var p=!a;if(c.type===r.NodeType.Element&&(p=p&&!c.needBlock,delete c.needBlock),(c.type===r.NodeType.Document||c.type===r.NodeType.Element)&&p)for(var h=0,m=Array.from(e.childNodes);h<m.length;h++){var v=f(m[h],t,n,i);v&&c.childNodes.push(v)}return c}t.absoluteToStylesheet=u,t.serializeNodeWithId=f,t.default=function(e,t){void 0===t&&(t="rr-block"),i();var n={};return[f(e,e,n,t),n]}},function(e,t,n){"use strict";t.__esModule=!0;var r=n(0),o={script:"noscript",altglyph:"altGlyph",altglyphdef:"altGlyphDef",altglyphitem:"altGlyphItem",animatecolor:"animateColor",animatemotion:"animateMotion",animatetransform:"animateTransform",clippath:"clipPath",feblend:"feBlend",fecolormatrix:"feColorMatrix",fecomponenttransfer:"feComponentTransfer",fecomposite:"feComposite",feconvolvematrix:"feConvolveMatrix",fediffuselighting:"feDiffuseLighting",fedisplacementmap:"feDisplacementMap",fedistantlight:"feDistantLight",fedropshadow:"feDropShadow",feflood:"feFlood",fefunca:"feFuncA",fefuncb:"feFuncB",fefuncg:"feFuncG",fefuncr:"feFuncR",fegaussianblur:"feGaussianBlur",feimage:"feImage",femerge:"feMerge",femergenode:"feMergeNode",femorphology:"feMorphology",feoffset:"feOffset",fepointlight:"fePointLight",fespecularlighting:"feSpecularLighting",fespotlight:"feSpotLight",fetile:"feTile",feturbulence:"feTurbulence",foreignobject:"foreignObject",glyphref:"glyphRef",lineargradient:"linearGradient",radialgradient:"radialGradient"};var i=/([^\r\n,{}]+)(,(?=[^}]*{)|\s*{)/g,s=/([^\\]):hover/g;function a(e){return e.replace(i,function(e,t,n){if(s.test(t)){var r=t.replace(s,"$1.\\:hover");return t.replace(/\s*$/,"")+", "+r.replace(/^\s*/,"")+n}return e})}function l(e,t){switch(e.type){case r.NodeType.Document:return t.implementation.createDocument(null,"",null);case r.NodeType.DocumentType:return t.implementation.createDocumentType(e.name,e.publicId,e.systemId);case r.NodeType.Element:var n=function(e){var t=o[e.tagName]?o[e.tagName]:e.tagName;return"link"===t&&e.attributes._cssText&&(t="style"),t}(e),i=void 0;for(var s in i=e.isSVG?t.createElementNS("http://www.w3.org/2000/svg",n):t.createElement(n),e.attributes)if(e.attributes.hasOwnProperty(s)&&!s.startsWith("rr_")){var l=e.attributes[s];l="boolean"==typeof l?"":l;var c="textarea"===n&&"value"===s,u="style"===n&&"_cssText"===s;if(u&&(l=a(l)),c||u){var d=t.createTextNode(l);i.appendChild(d);continue}if("iframe"===n&&"src"===s)continue;try{i.setAttribute(s,l)}catch(e){}}else e.attributes.rr_width&&(i.style.width=e.attributes.rr_width),e.attributes.rr_height&&(i.style.height=e.attributes.rr_height);return i;case r.NodeType.Text:return t.createTextNode(e.isStyle?a(e.textContent):e.textContent);case r.NodeType.CDATA:return t.createCDATASection(e.textContent);case r.NodeType.Comment:return t.createComment(e.textContent);default:return null}}function c(e,t,n,o){void 0===o&&(o=!1);var i=l(e,t);if(!i)return null;if(e.type===r.NodeType.Document&&(t.close(),t.open(),i=t),i.__sn=e,n[e.id]=i,(e.type===r.NodeType.Document||e.type===r.NodeType.Element)&&!o)for(var s=0,a=e.childNodes;s<a.length;s++){var u=a[s],d=c(u,t,n);d?i.appendChild(d):console.warn("Failed to rebuild",u)}return i}t.addHoverClass=a,t.buildNodeWithSN=c,t.default=function(e,t){var n={};return[c(e,t,n),n]}},function(e,t,n){var r=n(13);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(4)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};t.__esModule=!0;var o=n(2),i=n(9),s=n(10),a=n(11),l=n(0),c=n(1),u=n(12);n(7);var d=i.default||i,f=function(){function e(e,t){if(this.events=[],this.emitter=d(),this.baselineTime=0,this.noramlSpeed=-1,this.missingNodeRetryMap={},e.length<2)throw new Error("Replayer need at least 2 events.");this.events=e,this.handleResize=this.handleResize.bind(this);var n={speed:1,root:document.body,loadTimeout:0,skipInactive:!1,showWarning:!0,showDebug:!1,blockClass:"rr-block"};this.config=Object.assign({},n,t),this.timer=new a.default(this.config),s.polyfill(),this.setupDom(),this.emitter.on("resize",this.handleResize)}return e.prototype.on=function(e,t){this.emitter.on(e,t)},e.prototype.setConfig=function(e){var t=this;Object.keys(e).forEach(function(n){t.config[n]=e[n]}),this.config.skipInactive||(this.noramlSpeed=-1)},e.prototype.getMetaData=function(){var e=this.events[0];return{totalTime:this.events[this.events.length-1].timestamp-e.timestamp}},e.prototype.getTimeOffset=function(){return this.baselineTime-this.events[0].timestamp},e.prototype.play=function(e){void 0===e&&(e=0),this.timer.clear(),this.baselineTime=this.events[0].timestamp+e;for(var t=new Array,n=0,r=this.events;n<r.length;n++){var o=r[n],i=o.timestamp<this.baselineTime,s=this.getCastFn(o,i);i?s():t.push({doAction:s,delay:this.getDelay(o)})}this.timer.addActions(t),this.timer.start(),this.emitter.emit(l.ReplayerEvents.Start)},e.prototype.pause=function(){this.timer.clear(),this.emitter.emit(l.ReplayerEvents.Pause)},e.prototype.resume=function(e){void 0===e&&(e=0),this.timer.clear(),this.baselineTime=this.events[0].timestamp+e;for(var t=new Array,n=0,r=this.events;n<r.length;n++){var o=r[n];if(!(o.timestamp<=this.lastPlayedEvent.timestamp||o===this.lastPlayedEvent)){var i=this.getCastFn(o);t.push({doAction:i,delay:this.getDelay(o)})}}this.timer.addActions(t),this.timer.start(),this.emitter.emit(l.ReplayerEvents.Resume)},e.prototype.setupDom=function(){this.wrapper=document.createElement("div"),this.wrapper.classList.add("replayer-wrapper"),this.config.root.appendChild(this.wrapper),this.mouse=document.createElement("div"),this.mouse.classList.add("replayer-mouse"),this.wrapper.appendChild(this.mouse),this.iframe=document.createElement("iframe"),this.iframe.setAttribute("sandbox","allow-same-origin"),this.iframe.setAttribute("scrolling","no"),this.wrapper.appendChild(this.iframe)},e.prototype.handleResize=function(e){this.iframe.width=e.width+"px",this.iframe.height=e.height+"px"},e.prototype.getDelay=function(e){if(e.type===l.EventType.IncrementalSnapshot&&e.data.source===l.IncrementalSource.MouseMove){var t=e.data.positions[0].timeOffset,n=e.timestamp+t;return e.delay=n-this.baselineTime,n-this.baselineTime}return e.delay=e.timestamp-this.baselineTime,e.timestamp-this.baselineTime},e.prototype.getCastFn=function(e,t){var n,r=this;switch(void 0===t&&(t=!1),e.type){case l.EventType.DomContentLoaded:case l.EventType.Load:break;case l.EventType.Meta:n=function(){return r.emitter.emit(l.ReplayerEvents.Resize,{width:e.data.width,height:e.data.height})};break;case l.EventType.FullSnapshot:n=function(){r.rebuildFullSnapshot(e),r.iframe.contentWindow.scrollTo(e.data.initialOffset)};break;case l.EventType.IncrementalSnapshot:n=function(){if(r.applyIncremental(e,t),e===r.nextUserInteractionEvent&&(r.nextUserInteractionEvent=null,r.restoreSpeed()),r.config.skipInactive&&!r.nextUserInteractionEvent){for(var n=0,o=r.events;n<o.length;n++){var i=o[n];if(!(i.timestamp<=e.timestamp)&&r.isUserInteraction(i)){i.delay-e.delay>1e4*r.config.speed&&(r.nextUserInteractionEvent=i);break}}if(r.nextUserInteractionEvent){r.noramlSpeed=r.config.speed;var s=r.nextUserInteractionEvent.delay-e.delay,a={speed:Math.min(Math.round(s/5e3),360)};r.setConfig(a),r.emitter.emit(l.ReplayerEvents.SkipStart,a)}}}}return function(){n&&n(),r.lastPlayedEvent=e,e===r.events[r.events.length-1]&&(r.restoreSpeed(),r.emitter.emit(l.ReplayerEvents.Finish))}},e.prototype.rebuildFullSnapshot=function(e){Object.keys(this.missingNodeRetryMap).length&&console.warn("Found unresolved missing node map",this.missingNodeRetryMap),this.missingNodeRetryMap={},c.mirror.map=o.rebuild(e.data.node,this.iframe.contentDocument)[1];var t=document.createElement("style"),n=this.iframe.contentDocument,r=n.documentElement,i=n.head;r.insertBefore(t,i);for(var s=u.default(this.config.blockClass),a=0;a<s.length;a++)t.sheet.insertRule(s[a],a);this.emitter.emit(l.ReplayerEvents.FullsnapshotRebuilded),this.waitForStylesheetLoad()},e.prototype.waitForStylesheetLoad=function(){var e=this,t=this.iframe.contentDocument.head;if(t){var n,r=new Set;t.querySelectorAll('link[rel="stylesheet"]').forEach(function(t){t.sheet||(0===r.size&&(e.pause(),e.emitter.emit(l.ReplayerEvents.LoadStylesheetStart),n=window.setTimeout(function(){e.resume(),n=-1},e.config.loadTimeout)),r.add(t),t.addEventListener("load",function(){r.delete(t),0===r.size&&-1!==n&&(e.resume(),e.emitter.emit(l.ReplayerEvents.LoadStylesheetEnd),n&&window.clearTimeout(n))}))})}},e.prototype.applyIncremental=function(e,t){var n=this,i=e.data;switch(i.source){case l.IncrementalSource.Mutation:i.removes.forEach(function(e){var t=c.mirror.getNode(e.id);if(!t)return n.warnNodeNotFound(i,e.id);var r=c.mirror.getNode(e.parentId);if(!r)return n.warnNodeNotFound(i,e.parentId);c.mirror.removeNodeFromMap(t),r&&r.removeChild(t)});var s=r({},this.missingNodeRetryMap);i.adds.forEach(function(e){var t=o.buildNodeWithSN(e.node,n.iframe.contentDocument,c.mirror.map,!0),r=c.mirror.getNode(e.parentId);if(!r)return n.warnNodeNotFound(i,e.parentId);var a=null,l=null;e.previousId&&(a=c.mirror.getNode(e.previousId)),e.nextId&&(l=c.mirror.getNode(e.nextId)),-1!==e.previousId&&-1!==e.nextId?(a&&a.nextSibling&&a.nextSibling.parentNode?r.insertBefore(t,a.nextSibling):l&&l.parentNode?r.insertBefore(t,l):r.appendChild(t),(e.previousId||e.nextId)&&n.resolveMissingNode(s,r,t,e)):s[e.node.id]={node:t,mutation:e}}),Object.keys(s).length&&Object.assign(this.missingNodeRetryMap,s),i.texts.forEach(function(e){var t=c.mirror.getNode(e.id);if(!t)return n.warnNodeNotFound(i,e.id);t.textContent=e.value}),i.attributes.forEach(function(e){var t=c.mirror.getNode(e.id);if(!t)return n.warnNodeNotFound(i,e.id);for(var r in e.attributes)if("string"==typeof r){var o=e.attributes[r];null!==o?t.setAttribute(r,o):t.removeAttribute(r)}});break;case l.IncrementalSource.MouseMove:t||i.positions.forEach(function(t){var r={doAction:function(){n.moveAndHover(i,t.x,t.y,t.id)},delay:t.timeOffset+e.timestamp-n.baselineTime};n.timer.addAction(r)});break;case l.IncrementalSource.MouseInteraction:if(-1===i.id)break;var a=new Event(l.MouseInteractions[i.type].toLowerCase());if(!(u=c.mirror.getNode(i.id)))return this.debugNodeNotFound(i,i.id);switch(i.type){case l.MouseInteractions.Blur:u.blur&&u.blur();break;case l.MouseInteractions.Focus:u.focus&&u.focus({preventScroll:!0});break;case l.MouseInteractions.Click:t||(this.moveAndHover(i,i.x,i.y,i.id),this.mouse.classList.remove("active"),this.mouse.offsetWidth,this.mouse.classList.add("active"));break;default:u.dispatchEvent(a)}break;case l.IncrementalSource.Scroll:if(-1===i.id)break;if(!(u=c.mirror.getNode(i.id)))return this.debugNodeNotFound(i,i.id);if(u===this.iframe.contentDocument)this.iframe.contentWindow.scrollTo({top:i.y,left:i.x,behavior:t?"auto":"smooth"});else try{u.scrollTop=i.y,u.scrollLeft=i.x}catch(e){}break;case l.IncrementalSource.ViewportResize:this.emitter.emit(l.ReplayerEvents.Resize,{width:i.width,height:i.height});break;case l.IncrementalSource.Input:if(-1===i.id)break;var u;if(!(u=c.mirror.getNode(i.id)))return this.debugNodeNotFound(i,i.id);try{u.checked=i.isChecked,u.value=i.text}catch(e){}}},e.prototype.resolveMissingNode=function(e,t,n,r){var o=r.previousId,i=r.nextId,s=o&&e[o],a=i&&e[i];if(s){var l=s,c=l.node,u=l.mutation;t.insertBefore(c,n),delete e[u.node.id],delete this.missingNodeRetryMap[u.node.id],(u.previousId||u.nextId)&&this.resolveMissingNode(e,t,c,u)}if(a){var d=a;c=d.node,u=d.mutation;t.insertBefore(c,n.nextSibling),delete e[u.node.id],delete this.missingNodeRetryMap[u.node.id],(u.previousId||u.nextId)&&this.resolveMissingNode(e,t,c,u)}},e.prototype.moveAndHover=function(e,t,n,r){this.mouse.style.left=t+"px",this.mouse.style.top=n+"px";var o=c.mirror.getNode(r);if(!o)return this.debugNodeNotFound(e,r);this.hoverElements(o)},e.prototype.hoverElements=function(e){this.iframe.contentDocument.querySelectorAll(".\\:hover").forEach(function(e){e.classList.remove(":hover")});for(var t=e;t;)t.classList.add(":hover"),t=t.parentElement},e.prototype.isUserInteraction=function(e){return e.type===l.EventType.IncrementalSnapshot&&(e.data.source>l.IncrementalSource.Mutation&&e.data.source<=l.IncrementalSource.Input)},e.prototype.restoreSpeed=function(){if(-1!==this.noramlSpeed){var e={speed:this.noramlSpeed};this.setConfig(e),this.emitter.emit(l.ReplayerEvents.SkipEnd,e),this.noramlSpeed=-1}},e.prototype.warnNodeNotFound=function(e,t){this.config.showWarning&&console.warn("[replayer]","Node with id '"+t+"' not found in",e)},e.prototype.debugNodeNotFound=function(e,t){this.config.showDebug&&console.log("[replayer]","Node with id '"+t+"' not found in",e)},e}();t.default=f},function(e,t,n){"use strict";n.r(t),t.default=function(e){return e=e||Object.create(null),{on:function(t,n){(e[t]||(e[t]=[])).push(n)},off:function(t,n){e[t]&&e[t].splice(e[t].indexOf(n)>>>0,1)},emit:function(t,n){(e[t]||[]).slice().map(function(e){e(n)}),(e["*"]||[]).slice().map(function(e){e(t,n)})}}}},function(e,t,n){!function(){"use strict";e.exports={polyfill:function(){var e=window,t=document;if(!("scrollBehavior"in t.documentElement.style&&!0!==e.__forceSmoothScrollPolyfill__)){var n,r=e.HTMLElement||e.Element,o=468,i={scroll:e.scroll||e.scrollTo,scrollBy:e.scrollBy,elementScroll:r.prototype.scroll||l,scrollIntoView:r.prototype.scrollIntoView},s=e.performance&&e.performance.now?e.performance.now.bind(e.performance):Date.now,a=(n=e.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(n)?1:0);e.scroll=e.scrollTo=function(){void 0!==arguments[0]&&(!0!==c(arguments[0])?h.call(e,t.body,void 0!==arguments[0].left?~~arguments[0].left:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:e.scrollY||e.pageYOffset):i.scroll.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:e.scrollY||e.pageYOffset))},e.scrollBy=function(){void 0!==arguments[0]&&(c(arguments[0])?i.scrollBy.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):h.call(e,t.body,~~arguments[0].left+(e.scrollX||e.pageXOffset),~~arguments[0].top+(e.scrollY||e.pageYOffset)))},r.prototype.scroll=r.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==c(arguments[0])){var e=arguments[0].left,t=arguments[0].top;h.call(this,this,void 0===e?this.scrollLeft:~~e,void 0===t?this.scrollTop:~~t)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");i.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},r.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==c(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):i.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},r.prototype.scrollIntoView=function(){if(!0!==c(arguments[0])){var n=function(e){for(;e!==t.body&&!1===f(e);)e=e.parentNode||e.host;return e}(this),r=n.getBoundingClientRect(),o=this.getBoundingClientRect();n!==t.body?(h.call(this,n,n.scrollLeft+o.left-r.left,n.scrollTop+o.top-r.top),"fixed"!==e.getComputedStyle(n).position&&e.scrollBy({left:r.left,top:r.top,behavior:"smooth"})):e.scrollBy({left:o.left,top:o.top,behavior:"smooth"})}else i.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function l(e,t){this.scrollLeft=e,this.scrollTop=t}function c(e){if(null===e||"object"!=typeof e||void 0===e.behavior||"auto"===e.behavior||"instant"===e.behavior)return!0;if("object"==typeof e&&"smooth"===e.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+e.behavior+" is not a valid value for enumeration ScrollBehavior.")}function u(e,t){return"Y"===t?e.clientHeight+a<e.scrollHeight:"X"===t?e.clientWidth+a<e.scrollWidth:void 0}function d(t,n){var r=e.getComputedStyle(t,null)["overflow"+n];return"auto"===r||"scroll"===r}function f(e){var t=u(e,"Y")&&d(e,"Y"),n=u(e,"X")&&d(e,"X");return t||n}function p(t){var n,r,i,a,l=(s()-t.startTime)/o;a=l=l>1?1:l,n=.5*(1-Math.cos(Math.PI*a)),r=t.startX+(t.x-t.startX)*n,i=t.startY+(t.y-t.startY)*n,t.method.call(t.scrollable,r,i),r===t.x&&i===t.y||e.requestAnimationFrame(p.bind(e,t))}function h(n,r,o){var a,c,u,d,f=s();n===t.body?(a=e,c=e.scrollX||e.pageXOffset,u=e.scrollY||e.pageYOffset,d=i.scroll):(a=n,c=n.scrollLeft,u=n.scrollTop,d=l),p({scrollable:a,method:d,startTime:f,startX:c,startY:u,x:r,y:o})}}}}()},function(e,t,n){"use strict";t.__esModule=!0;var r=function(){function e(e,t){void 0===t&&(t=[]),this.timeOffset=0,this.actions=t,this.config=e}return e.prototype.addAction=function(e){var t=this.findActionIndex(e);this.actions.splice(t,0,e)},e.prototype.addActions=function(e){var t;(t=this.actions).push.apply(t,e)},e.prototype.start=function(){this.actions.sort(function(e,t){return e.delay-t.delay}),this.timeOffset=0;var e=performance.now(),t=this.actions,n=this.config,r=this;this.raf=requestAnimationFrame(function o(i){for(r.timeOffset+=(i-e)*n.speed,e=i;t.length;){var s=t[0];if(!(r.timeOffset>=s.delay))break;t.shift(),s.doAction()}t.length>0&&(r.raf=requestAnimationFrame(o))})},e.prototype.clear=function(){this.raf&&cancelAnimationFrame(this.raf),this.actions.length=0},e.prototype.findActionIndex=function(e){for(var t=0,n=this.actions.length-1;t<=n;){var r=Math.floor((t+n)/2);if(this.actions[r].delay<e.delay)t=r+1;else{if(!(this.actions[r].delay>e.delay))return r;n=r-1}}return t},e}();t.default=r},function(e,t,n){"use strict";t.__esModule=!0;t.default=function(e){return["iframe, ."+e+" { background: #ccc }","noscript { display: none !important; }"]}},function(e,t,n){(e.exports=n(3)(!1)).push([e.i,".replayer-wrapper {\n  position: relative;\n}\n.replayer-mouse {\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  transition: 0.05s linear;\n  background-size: contain;\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-image: url('data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9JzMwMHB4JyB3aWR0aD0nMzAwcHgnICBmaWxsPSIjMDAwMDAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGRhdGEtbmFtZT0iTGF5ZXIgMSIgdmlld0JveD0iMCAwIDUwIDUwIiB4PSIwcHgiIHk9IjBweCI+PHRpdGxlPkRlc2lnbl90bnA8L3RpdGxlPjxwYXRoIGQ9Ik00OC43MSw0Mi45MUwzNC4wOCwyOC4yOSw0NC4zMywxOEExLDEsMCwwLDAsNDQsMTYuMzlMMi4zNSwxLjA2QTEsMSwwLDAsMCwxLjA2LDIuMzVMMTYuMzksNDRhMSwxLDAsMCwwLDEuNjUuMzZMMjguMjksMzQuMDgsNDIuOTEsNDguNzFhMSwxLDAsMCwwLDEuNDEsMGw0LjM4LTQuMzhBMSwxLDAsMCwwLDQ4LjcxLDQyLjkxWm0tNS4wOSwzLjY3TDI5LDMyYTEsMSwwLDAsMC0xLjQxLDBsLTkuODUsOS44NUwzLjY5LDMuNjlsMzguMTIsMTRMMzIsMjcuNThBMSwxLDAsMCwwLDMyLDI5TDQ2LjU5LDQzLjYyWiI+PC9wYXRoPjwvc3ZnPg==');\n}\n.replayer-mouse::after {\n  content: '';\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  border-radius: 10px;\n  background: rgb(73, 80, 246);\n  transform: translate(-10px, -10px);\n  opacity: 0.3;\n}\n.replayer-mouse.active::after {\n  animation: click 0.2s ease-in-out 1;\n}\n\n@keyframes click {\n  0% {\n    opacity: 0.3;\n    width: 20px;\n    height: 20px;\n    border-radius: 10px;\n    transform: translate(-10px, -10px);\n  }\n  50% {\n    opacity: 0.5;\n    width: 10px;\n    height: 10px;\n    border-radius: 5px;\n    transform: translate(-5px, -5px);\n  }\n}\n",""])},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var o,i=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?e:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}}]).default;