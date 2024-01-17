(function(m,O){typeof exports=="object"&&typeof module<"u"?O(exports):typeof define=="function"&&define.amd?define(["exports"],O):O((m=typeof globalThis<"u"?globalThis:m||self).noUiSlider={})})(void 0,function(m){"use strict";function O(t){return typeof t=="object"&&typeof t.to=="function"}function Oe(t){t.parentElement.removeChild(t)}function me(t){return t!=null}function Te(t){t.preventDefault()}function z(t){return typeof t=="number"&&!isNaN(t)&&isFinite(t)}function _e(t,e,u){0<u&&(A(t,e),setTimeout(function(){ne(t,e)},u))}function ze(t){return Math.max(Math.min(t,100),0)}function re(t){return Array.isArray(t)?t:[t]}function ot(t){return t=(t=String(t)).split("."),1<t.length?t[1].length:0}function A(t,e){t.classList&&!/\s/.test(e)?t.classList.add(e):t.className+=" "+e}function ne(t,e){t.classList&&!/\s/.test(e)?t.classList.remove(e):t.className=t.className.replace(new RegExp("(^|\\b)"+e.split(" ").join("|")+"(\\b|$)","gi")," ")}function je(t){var e=window.pageXOffset!==void 0,u=(t.compatMode||"")==="CSS1Compat";return{x:e?window.pageXOffset:(u?t.documentElement:t.body).scrollLeft,y:e?window.pageYOffset:(u?t.documentElement:t.body).scrollTop}}function fe(t,e){return 100/(e-t)}function ge(t,e,u){return 100*e/(t[u+1]-t[u])}function K(t,e){for(var u=1;t>=e[u];)u+=1;return u}function st(f,e,u){if(u>=f.slice(-1)[0])return 100;var b=K(u,f),a=f[b-1],p=f[b],f=e[b-1],b=e[b];return f+(u=u,ge(p=[a,p],p[0]<0?u+Math.abs(p[0]):u-p[0],0)/fe(f,b))}function at(t,e,u,a){if(a===100)return a;var p=K(a,t),f=t[p-1],b=t[p];return u?(b-f)/2<a-f?b:f:e[p-1]?t[p-1]+(t=a-t[p-1],p=e[p-1],Math.round(t/p)*p):a}m.PipsMode=void 0,(U=m.PipsMode||(m.PipsMode={})).Range="range",U.Steps="steps",U.Positions="positions",U.Count="count",U.Values="values",m.PipsType=void 0,(U=m.PipsType||(m.PipsType={}))[U.None=-1]="None",U[U.NoValue=0]="NoValue",U[U.LargeValue=1]="LargeValue",U[U.SmallValue=2]="SmallValue";var Fe=(D.prototype.getDistance=function(t){for(var e=[],u=0;u<this.xNumSteps.length-1;u++)e[u]=ge(this.xVal,t,u);return e},D.prototype.getAbsoluteDistance=function(t,e,u){var a=0;if(t<this.xPct[this.xPct.length-1])for(;t>this.xPct[a+1];)a++;else t===this.xPct[this.xPct.length-1]&&(a=this.xPct.length-2);u||t!==this.xPct[a+1]||a++;for(var p,f=1,b=(e=e===null?[]:e)[a],P=0,T=0,w=0,X=u?(t-this.xPct[a])/(this.xPct[a+1]-this.xPct[a]):(this.xPct[a+1]-t)/(this.xPct[a+1]-this.xPct[a]);0<b;)p=this.xPct[a+1+w]-this.xPct[a+w],100<e[a+w]*f+100-100*X?(P=p*X,f=(b-100*X)/e[a+w],X=1):(P=e[a+w]*p/100*f,f=0),u?(T-=P,1<=this.xPct.length+w&&w--):(T+=P,1<=this.xPct.length-w&&w++),b=e[a+w]*f;return t+T},D.prototype.toStepping=function(t){return t=st(this.xVal,this.xPct,t)},D.prototype.fromStepping=function(t){return function(b,u,a){if(100<=a)return b.slice(-1)[0];var P=K(a,u),p=b[P-1],f=b[P],b=u[P-1],P=u[P];return(a-b)*fe(b,P)*((f=[p,f])[1]-f[0])/100+f[0]}(this.xVal,this.xPct,t)},D.prototype.getStep=function(t){return t=at(this.xPct,this.xSteps,this.snap,t)},D.prototype.getDefaultStep=function(t,e,u){var a=K(t,this.xPct);return(t===100||e&&t===this.xPct[a-1])&&(a=Math.max(a-1,1)),(this.xVal[a]-this.xVal[a-1])/u},D.prototype.getNearbySteps=function(t){return t=K(t,this.xPct),{stepBefore:{startValue:this.xVal[t-2],step:this.xNumSteps[t-2],highestStep:this.xHighestCompleteStep[t-2]},thisStep:{startValue:this.xVal[t-1],step:this.xNumSteps[t-1],highestStep:this.xHighestCompleteStep[t-1]},stepAfter:{startValue:this.xVal[t],step:this.xNumSteps[t],highestStep:this.xHighestCompleteStep[t]}}},D.prototype.countStepDecimals=function(){var t=this.xNumSteps.map(ot);return Math.max.apply(null,t)},D.prototype.hasNoSize=function(){return this.xVal[0]===this.xVal[this.xVal.length-1]},D.prototype.convert=function(t){return this.getStep(this.toStepping(t))},D.prototype.handleEntryPoint=function(t,e){if(t=t==="min"?0:t==="max"?100:parseFloat(t),!z(t)||!z(e[0]))throw new Error("noUiSlider: 'range' value isn't numeric.");this.xPct.push(t),this.xVal.push(e[0]),e=Number(e[1]),t?this.xSteps.push(!isNaN(e)&&e):isNaN(e)||(this.xSteps[0]=e),this.xHighestCompleteStep.push(0)},D.prototype.handleStepPoint=function(t,e){e&&(this.xVal[t]!==this.xVal[t+1]?(this.xSteps[t]=ge([this.xVal[t],this.xVal[t+1]],e,0)/fe(this.xPct[t],this.xPct[t+1]),e=(this.xVal[t+1]-this.xVal[t])/this.xNumSteps[t],e=Math.ceil(Number(e.toFixed(3))-1),e=this.xVal[t]+this.xNumSteps[t]*e,this.xHighestCompleteStep[t]=e):this.xSteps[t]=this.xHighestCompleteStep[t]=this.xVal[t])},D);function D(t,e,u){var a;this.xPct=[],this.xVal=[],this.xSteps=[],this.xNumSteps=[],this.xHighestCompleteStep=[],this.xSteps=[u||!1],this.xNumSteps=[!1],this.snap=e;var p=[];for(Object.keys(t).forEach(function(f){p.push([re(t[f]),f])}),p.sort(function(f,b){return f[0][0]-b[0][0]}),a=0;a<p.length;a++)this.handleEntryPoint(p[a][1],p[a][0]);for(this.xNumSteps=this.xSteps.slice(0),a=0;a<this.xNumSteps.length;a++)this.handleStepPoint(a,this.xNumSteps[a])}var He={to:function(t){return t===void 0?"":t.toFixed(2)},from:Number},ve={target:"target",base:"base",origin:"origin",handle:"handle",handleLower:"handle-lower",handleUpper:"handle-upper",touchArea:"touch-area",horizontal:"horizontal",vertical:"vertical",background:"background",connect:"connect",connects:"connects",ltr:"ltr",rtl:"rtl",textDirectionLtr:"txt-dir-ltr",textDirectionRtl:"txt-dir-rtl",draggable:"draggable",drag:"state-drag",tap:"state-tap",active:"active",tooltip:"tooltip",pips:"pips",pipsHorizontal:"pips-horizontal",pipsVertical:"pips-vertical",marker:"marker",markerHorizontal:"marker-horizontal",markerVertical:"marker-vertical",markerNormal:"marker-normal",markerLarge:"marker-large",markerSub:"marker-sub",value:"value",valueHorizontal:"value-horizontal",valueVertical:"value-vertical",valueNormal:"value-normal",valueLarge:"value-large",valueSub:"value-sub"},B={tooltips:".__tooltips",aria:".__aria"};function lt(t,e){if(!z(e))throw new Error("noUiSlider: 'step' is not numeric.");t.singleStep=e}function ut(t,e){if(!z(e))throw new Error("noUiSlider: 'keyboardPageMultiplier' is not numeric.");t.keyboardPageMultiplier=e}function ct(t,e){if(!z(e))throw new Error("noUiSlider: 'keyboardMultiplier' is not numeric.");t.keyboardMultiplier=e}function pt(t,e){if(!z(e))throw new Error("noUiSlider: 'keyboardDefaultStep' is not numeric.");t.keyboardDefaultStep=e}function dt(t,e){if(typeof e!="object"||Array.isArray(e))throw new Error("noUiSlider: 'range' is not an object.");if(e.min===void 0||e.max===void 0)throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");t.spectrum=new Fe(e,t.snap||!1,t.singleStep)}function ht(t,e){if(e=re(e),!Array.isArray(e)||!e.length)throw new Error("noUiSlider: 'start' option is incorrect.");t.handles=e.length,t.start=e}function mt(t,e){if(typeof e!="boolean")throw new Error("noUiSlider: 'snap' option must be a boolean.");t.snap=e}function ft(t,e){if(typeof e!="boolean")throw new Error("noUiSlider: 'animate' option must be a boolean.");t.animate=e}function gt(t,e){if(typeof e!="number")throw new Error("noUiSlider: 'animationDuration' option must be a number.");t.animationDuration=e}function vt(t,e){var u,a=[!1];if(e==="lower"?e=[!0,!1]:e==="upper"&&(e=[!1,!0]),e===!0||e===!1){for(u=1;u<t.handles;u++)a.push(e);a.push(!1)}else{if(!Array.isArray(e)||!e.length||e.length!==t.handles+1)throw new Error("noUiSlider: 'connect' option doesn't match handle count.");a=e}t.connect=a}function bt(t,e){switch(e){case"horizontal":t.ort=0;break;case"vertical":t.ort=1;break;default:throw new Error("noUiSlider: 'orientation' option is invalid.")}}function qe(t,e){if(!z(e))throw new Error("noUiSlider: 'margin' option must be numeric.");e!==0&&(t.margin=t.spectrum.getDistance(e))}function St(t,e){if(!z(e))throw new Error("noUiSlider: 'limit' option must be numeric.");if(t.limit=t.spectrum.getDistance(e),!t.limit||t.handles<2)throw new Error("noUiSlider: 'limit' option is only supported on linear sliders with 2 or more handles.")}function xt(t,e){var u;if(!z(e)&&!Array.isArray(e))throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");if(Array.isArray(e)&&e.length!==2&&!z(e[0])&&!z(e[1]))throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");if(e!==0){for(Array.isArray(e)||(e=[e,e]),t.padding=[t.spectrum.getDistance(e[0]),t.spectrum.getDistance(e[1])],u=0;u<t.spectrum.xNumSteps.length-1;u++)if(t.padding[0][u]<0||t.padding[1][u]<0)throw new Error("noUiSlider: 'padding' option must be a positive number(s).");var a=e[0]+e[1],e=t.spectrum.xVal[0];if(1<a/(t.spectrum.xVal[t.spectrum.xVal.length-1]-e))throw new Error("noUiSlider: 'padding' option must not exceed 100% of the range.")}}function yt(t,e){switch(e){case"ltr":t.dir=0;break;case"rtl":t.dir=1;break;default:throw new Error("noUiSlider: 'direction' option was not recognized.")}}function wt(t,w){if(typeof w!="string")throw new Error("noUiSlider: 'behaviour' must be a string containing options.");var u=0<=w.indexOf("tap"),a=0<=w.indexOf("drag"),p=0<=w.indexOf("fixed"),f=0<=w.indexOf("snap"),b=0<=w.indexOf("hover"),P=0<=w.indexOf("unconstrained"),T=0<=w.indexOf("drag-all"),w=0<=w.indexOf("smooth-steps");if(p){if(t.handles!==2)throw new Error("noUiSlider: 'fixed' behaviour must be used with 2 handles");qe(t,t.start[1]-t.start[0])}if(P&&(t.margin||t.limit))throw new Error("noUiSlider: 'unconstrained' behaviour cannot be used with margin or limit");t.events={tap:u||f,drag:a,dragAll:T,smoothSteps:w,fixed:p,snap:f,hover:b,unconstrained:P}}function Et(t,e){if(e!==!1)if(e===!0||O(e)){t.tooltips=[];for(var u=0;u<t.handles;u++)t.tooltips.push(e)}else{if((e=re(e)).length!==t.handles)throw new Error("noUiSlider: must pass a formatter for all handles.");e.forEach(function(a){if(typeof a!="boolean"&&!O(a))throw new Error("noUiSlider: 'tooltips' must be passed a formatter or 'false'.")}),t.tooltips=e}}function Pt(t,e){if(e.length!==t.handles)throw new Error("noUiSlider: must pass a attributes for all handles.");t.handleAttributes=e}function Ct(t,e){if(!O(e))throw new Error("noUiSlider: 'ariaFormat' requires 'to' method.");t.ariaFormat=e}function Nt(t,e){if(!O(u=e)||typeof u.from!="function")throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods.");var u;t.format=e}function kt(t,e){if(typeof e!="boolean")throw new Error("noUiSlider: 'keyboardSupport' option must be a boolean.");t.keyboardSupport=e}function Vt(t,e){t.documentElement=e}function At(t,e){if(typeof e!="string"&&e!==!1)throw new Error("noUiSlider: 'cssPrefix' must be a string or `false`.");t.cssPrefix=e}function Ut(t,e){if(typeof e!="object")throw new Error("noUiSlider: 'cssClasses' must be an object.");typeof t.cssPrefix=="string"?(t.cssClasses={},Object.keys(e).forEach(function(u){t.cssClasses[u]=t.cssPrefix+e[u]})):t.cssClasses=e}function Re(t){var e={margin:null,limit:null,padding:null,animate:!0,animationDuration:300,ariaFormat:He,format:He},u={step:{r:!1,t:lt},keyboardPageMultiplier:{r:!1,t:ut},keyboardMultiplier:{r:!1,t:ct},keyboardDefaultStep:{r:!1,t:pt},start:{r:!0,t:ht},connect:{r:!0,t:vt},direction:{r:!0,t:yt},snap:{r:!1,t:mt},animate:{r:!1,t:ft},animationDuration:{r:!1,t:gt},range:{r:!0,t:dt},orientation:{r:!1,t:bt},margin:{r:!1,t:qe},limit:{r:!1,t:St},padding:{r:!1,t:xt},behaviour:{r:!0,t:wt},ariaFormat:{r:!1,t:Ct},format:{r:!1,t:Nt},tooltips:{r:!1,t:Et},keyboardSupport:{r:!0,t:kt},documentElement:{r:!1,t:Vt},cssPrefix:{r:!0,t:At},cssClasses:{r:!0,t:Ut},handleAttributes:{r:!1,t:Pt}},a={connect:!1,direction:"ltr",behaviour:"tap",orientation:"horizontal",keyboardSupport:!0,cssPrefix:"noUi-",cssClasses:ve,keyboardPageMultiplier:5,keyboardMultiplier:1,keyboardDefaultStep:10};t.format&&!t.ariaFormat&&(t.ariaFormat=t.format),Object.keys(u).forEach(function(b){if(me(t[b])||a[b]!==void 0)u[b].t(e,(me(t[b])?t:a)[b]);else if(u[b].r)throw new Error("noUiSlider: '"+b+"' is required.")}),e.pips=t.pips;var f=document.createElement("div"),p=f.style.msTransform!==void 0,f=f.style.transform!==void 0;return e.transformRule=f?"transform":p?"msTransform":"webkitTransform",e.style=[["left","top"],["right","bottom"]][e.dir][e.ort],e}function Lt(t,e,u){var a,p,f,b,P,T,w=window.navigator.pointerEnabled?{start:"pointerdown",move:"pointermove",end:"pointerup"}:window.navigator.msPointerEnabled?{start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}:{start:"mousedown touchstart",move:"mousemove touchmove",end:"mouseup touchend"},X=window.CSS&&CSS.supports&&CSS.supports("touch-action","none")&&function(){var r=!1;try{var n=Object.defineProperty({},"passive",{get:function(){r=!0}});window.addEventListener("test",null,n)}catch{}return r}(),V=t,y=e.spectrum,F=[],C=[],L=[],be=0,H={},W=t.ownerDocument,ie=e.documentElement||W.documentElement,oe=W.body,Mt=W.dir==="rtl"||e.ort===1?0:100;function q(r,n){var i=W.createElement("div");return n&&A(i,n),r.appendChild(i),i}function Dt(o,n){var i,o=q(o,e.cssClasses.origin),s=q(o,e.cssClasses.handle);return q(s,e.cssClasses.touchArea),s.setAttribute("data-handle",String(n)),e.keyboardSupport&&(s.setAttribute("tabindex","0"),s.addEventListener("keydown",function(l){return function(x,c){if(Ie()||Se(c))return!1;var k=["Left","Right"],S=["Down","Up"],g=["PageDown","PageUp"],_=["Home","End"];e.dir&&!e.ort?k.reverse():e.ort&&!e.dir&&(S.reverse(),g.reverse());var d=x.key.replace("Arrow",""),h=d===g[0],v=d===g[1],g=d===S[0]||d===k[0]||h,S=d===S[1]||d===k[1]||v,k=d===_[0],_=d===_[1];if(!(g||S||k||_))return!0;if(x.preventDefault(),S||g){var E=g?0:1,E=tt(c)[E];if(E===null)return!1;E===!1&&(E=y.getDefaultStep(C[c],g,e.keyboardDefaultStep)),E*=v||h?e.keyboardPageMultiplier:e.keyboardMultiplier,E=Math.max(E,1e-7),E*=g?-1:1,E=F[c]+E}else E=_?e.spectrum.xVal[e.spectrum.xVal.length-1]:e.spectrum.xVal[0];return Y(c,y.toStepping(E),!0,!0),N("slide",c),N("update",c),N("change",c),N("set",c),!1}(l,n)})),e.handleAttributes!==void 0&&(i=e.handleAttributes[n],Object.keys(i).forEach(function(l){s.setAttribute(l,i[l])})),s.setAttribute("role","slider"),s.setAttribute("aria-orientation",e.ort?"vertical":"horizontal"),n===0?A(s,e.cssClasses.handleLower):n===e.handles-1&&A(s,e.cssClasses.handleUpper),o.handle=s,o}function Xe(r,n){return!!n&&q(r,e.cssClasses.connect)}function Ot(r,n){return!(!e.tooltips||!e.tooltips[n])&&q(r.firstChild,e.cssClasses.tooltip)}function Ie(){return V.hasAttribute("disabled")}function Se(r){return p[r].hasAttribute("disabled")}function xe(){P&&(J("update"+B.tooltips),P.forEach(function(r){r&&Oe(r)}),P=null)}function Ye(){xe(),P=p.map(Ot),Ce("update"+B.tooltips,function(r,n,i){P&&e.tooltips&&P[n]!==!1&&(r=r[n],e.tooltips[n]!==!0&&(r=e.tooltips[n].to(i[n])),P[n].innerHTML=r)})}function $e(r,n){return r.map(function(i){return y.fromStepping(n?y.getStep(i):i)})}function Tt(r){var n=function(d){if(d.mode===m.PipsMode.Range||d.mode===m.PipsMode.Steps)return y.xVal;if(d.mode!==m.PipsMode.Count)return d.mode===m.PipsMode.Positions?$e(d.values,d.stepped):d.mode===m.PipsMode.Values?d.stepped?d.values.map(function(S){return y.fromStepping(y.getStep(y.toStepping(S)))}):d.values:[];if(d.values<2)throw new Error("noUiSlider: 'values' (>= 2) required for mode 'count'.");for(var h=d.values-1,v=100/h,g=[];h--;)g[h]=h*v;return g.push(100),$e(g,d.stepped)}(r),i={},o=y.xVal[0],s=y.xVal[y.xVal.length-1],l=!1,x=!1,c=0;return(n=n.slice().sort(function(d,h){return d-h}).filter(function(d){return!this[d]&&(this[d]=!0)},{}))[0]!==o&&(n.unshift(o),l=!0),n[n.length-1]!==s&&(n.push(s),x=!0),n.forEach(function(j,h){var v,g,S,k,_,E,$,R,j=j,G=n[h+1],rt=r.mode===m.PipsMode.Steps,Q=(Q=rt?y.xNumSteps[h]:Q)||G-j;for(G===void 0&&(G=j),Q=Math.max(Q,1e-7),v=j;v<=G;v=Number((v+Q).toFixed(7))){for(E=(k=(S=y.toStepping(v))-c)/(r.density||1),R=k/($=Math.round(E)),g=1;g<=$;g+=1)i[(_=c+g*R).toFixed(5)]=[y.fromStepping(_),0];E=-1<n.indexOf(v)?m.PipsType.LargeValue:rt?m.PipsType.SmallValue:m.PipsType.NoValue,!h&&l&&v!==G&&(E=0),v===G&&x||(i[S.toFixed(5)]=[v,E]),c=S}}),i}function _t(r,n,i){var o,s=W.createElement("div"),l=((o={})[m.PipsType.None]="",o[m.PipsType.NoValue]=e.cssClasses.valueNormal,o[m.PipsType.LargeValue]=e.cssClasses.valueLarge,o[m.PipsType.SmallValue]=e.cssClasses.valueSub,o),x=((o={})[m.PipsType.None]="",o[m.PipsType.NoValue]=e.cssClasses.markerNormal,o[m.PipsType.LargeValue]=e.cssClasses.markerLarge,o[m.PipsType.SmallValue]=e.cssClasses.markerSub,o),c=[e.cssClasses.valueHorizontal,e.cssClasses.valueVertical],d=[e.cssClasses.markerHorizontal,e.cssClasses.markerVertical];function h(v,g){var S=g===e.cssClasses.value;return g+" "+(S?c:d)[e.ort]+" "+(S?l:x)[v]}return A(s,e.cssClasses.pips),A(s,e.ort===0?e.cssClasses.pipsHorizontal:e.cssClasses.pipsVertical),Object.keys(r).forEach(function(v){var g,S,k;S=r[g=v][0],k=r[v][1],(k=n?n(S,k):k)!==m.PipsType.None&&((v=q(s,!1)).className=h(k,e.cssClasses.marker),v.style[e.style]=g+"%",k>m.PipsType.NoValue&&((v=q(s,!1)).className=h(k,e.cssClasses.value),v.setAttribute("data-value",String(S)),v.style[e.style]=g+"%",v.innerHTML=String(i.to(S))))}),s}function ye(){b&&(Oe(b),b=null)}function we(o){ye();var n=Tt(o),i=o.filter,o=o.format||{to:function(s){return String(Math.round(s))}};return b=V.appendChild(_t(n,i,o))}function We(){var r=a.getBoundingClientRect(),n="offset"+["Width","Height"][e.ort];return e.ort===0?r.width||a[n]:r.height||a[n]}function I(r,n,i,o){function s(x){var c,d=function(h,v,g){var S=h.type.indexOf("touch")===0,k=h.type.indexOf("mouse")===0,_=h.type.indexOf("pointer")===0,E=0,$=0;if(h.type.indexOf("MSPointer")===0&&(_=!0),h.type==="mousedown"&&!h.buttons&&!h.touches)return!1;if(S){var R=function(j){return j=j.target,j===g||g.contains(j)||h.composed&&h.composedPath().shift()===g};if(h.type==="touchstart"){if(S=Array.prototype.filter.call(h.touches,R),1<S.length)return!1;E=S[0].pageX,$=S[0].pageY}else{if(R=Array.prototype.find.call(h.changedTouches,R),!R)return!1;E=R.pageX,$=R.pageY}}return v=v||je(W),(k||_)&&(E=h.clientX+v.x,$=h.clientY+v.y),h.pageOffset=v,h.points=[E,$],h.cursor=k||_,h}(x,o.pageOffset,o.target||n);return!!d&&!(Ie()&&!o.doNotReject)&&(c=V,x=e.cssClasses.tap,!((c.classList?c.classList.contains(x):new RegExp("\\b"+x+"\\b").test(c.className))&&!o.doNotReject)&&!(r===w.start&&d.buttons!==void 0&&1<d.buttons)&&(!o.hover||!d.buttons)&&(X||d.preventDefault(),d.calcPoint=d.points[e.ort],void i(d,o)))}var l=[];return r.split(" ").forEach(function(x){n.addEventListener(x,s,!!X&&{passive:!0}),l.push([x,s])}),l}function Ge(r){var n,i,o=ze(o=100*(r-(o=a,n=e.ort,i=o.getBoundingClientRect(),o=(r=o.ownerDocument).documentElement,r=je(r),/webkit.*Chrome.*Mobile/i.test(navigator.userAgent)&&(r.x=0),n?i.top+r.y-o.clientTop:i.left+r.x-o.clientLeft))/We());return e.dir?100-o:o}function zt(r,n){r.type==="mouseout"&&r.target.nodeName==="HTML"&&r.relatedTarget===null&&Ee(r,n)}function jt(r,n){if(navigator.appVersion.indexOf("MSIE 9")===-1&&r.buttons===0&&n.buttonsProperty!==0)return Ee(r,n);r=(e.dir?-1:1)*(r.calcPoint-n.startCalcPoint),Ke(0<r,100*r/n.baseSize,n.locations,n.handleNumbers,n.connect)}function Ee(r,n){n.handle&&(ne(n.handle,e.cssClasses.active),--be),n.listeners.forEach(function(i){ie.removeEventListener(i[0],i[1])}),be===0&&(ne(V,e.cssClasses.drag),ke(),r.cursor&&(oe.style.cursor="",oe.removeEventListener("selectstart",Te))),e.events.smoothSteps&&(n.handleNumbers.forEach(function(i){Y(i,C[i],!0,!0,!1,!1)}),n.handleNumbers.forEach(function(i){N("update",i)})),n.handleNumbers.forEach(function(i){N("change",i),N("set",i),N("end",i)})}function Pe(r,n){var i,o,s,l;n.handleNumbers.some(Se)||(n.handleNumbers.length===1&&(l=p[n.handleNumbers[0]].children[0],be+=1,A(l,e.cssClasses.active)),r.stopPropagation(),o=I(w.move,ie,jt,{target:r.target,handle:l,connect:n.connect,listeners:i=[],startCalcPoint:r.calcPoint,baseSize:We(),pageOffset:r.pageOffset,handleNumbers:n.handleNumbers,buttonsProperty:r.buttons,locations:C.slice()}),s=I(w.end,ie,Ee,{target:r.target,handle:l,listeners:i,doNotReject:!0,handleNumbers:n.handleNumbers}),l=I("mouseout",ie,zt,{target:r.target,handle:l,listeners:i,doNotReject:!0,handleNumbers:n.handleNumbers}),i.push.apply(i,o.concat(s,l)),r.cursor&&(oe.style.cursor=getComputedStyle(r.target).cursor,1<p.length&&A(V,e.cssClasses.drag),oe.addEventListener("selectstart",Te,!1)),n.handleNumbers.forEach(function(x){N("start",x)}))}function Ft(r){r.stopPropagation();var n,i,o,s=Ge(r.calcPoint),l=(n=s,o=!(i=100),p.forEach(function(x,c){var d,h;Se(c)||(d=C[c],((h=Math.abs(d-n))<i||h<=i&&d<n||h===100&&i===100)&&(o=c,i=h))}),o);l!==!1&&(e.events.snap||_e(V,e.cssClasses.tap,e.animationDuration),Y(l,s,!0,!0),ke(),N("slide",l,!0),N("update",l,!0),e.events.snap?Pe(r,{handleNumbers:[l]}):(N("change",l,!0),N("set",l,!0)))}function Ht(n){var n=Ge(n.calcPoint),n=y.getStep(n),i=y.fromStepping(n);Object.keys(H).forEach(function(o){o.split(".")[0]==="hover"&&H[o].forEach(function(s){s.call(le,i)})})}function Ce(r,n){H[r]=H[r]||[],H[r].push(n),r.split(".")[0]==="update"&&p.forEach(function(i,o){N("update",o)})}function J(r){var n=r&&r.split(".")[0],i=n?r.substring(n.length):r;Object.keys(H).forEach(function(o){var s=o.split(".")[0],l=o.substring(s.length);n&&n!==s||i&&i!==l||((s=l)!==B.aria&&s!==B.tooltips||i===l)&&delete H[o]})}function N(r,n,i){Object.keys(H).forEach(function(o){var s=o.split(".")[0];r===s&&H[o].forEach(function(l){l.call(le,F.map(e.format.to),n,F.slice(),i||!1,C.slice(),le)})})}function se(r,n,i,o,s,l,x){var c;return 1<p.length&&!e.events.unconstrained&&(o&&0<n&&(c=y.getAbsoluteDistance(r[n-1],e.margin,!1),i=Math.max(i,c)),s&&n<p.length-1&&(c=y.getAbsoluteDistance(r[n+1],e.margin,!0),i=Math.min(i,c))),1<p.length&&e.limit&&(o&&0<n&&(c=y.getAbsoluteDistance(r[n-1],e.limit,!1),i=Math.min(i,c)),s&&n<p.length-1&&(c=y.getAbsoluteDistance(r[n+1],e.limit,!0),i=Math.max(i,c))),e.padding&&(n===0&&(c=y.getAbsoluteDistance(0,e.padding[0],!1),i=Math.max(i,c)),n===p.length-1&&(c=y.getAbsoluteDistance(100,e.padding[1],!0),i=Math.min(i,c))),!((i=ze(i=x?i:y.getStep(i)))===r[n]&&!l)&&i}function Ne(r,n){var i=e.ort;return(i?n:r)+", "+(i?r:n)}function Ke(r,n,i,o,s){var l=i.slice(),x=o[0],c=e.events.smoothSteps,d=[!r,r],h=[r,!r];o=o.slice(),r&&o.reverse(),1<o.length?o.forEach(function(g,S){S=se(l,g,l[g]+n,d[S],h[S],!1,c),S===!1?n=0:(n=S-l[g],l[g]=S)}):d=h=[!0];var v=!1;o.forEach(function(g,S){v=Y(g,i[g]+n,d[S],h[S],!1,c)||v}),v&&(o.forEach(function(g){N("update",g),N("slide",g)}),s!=null&&N("drag",x))}function Je(r,n){return e.dir?100-r-n:r}function ke(){L.forEach(function(r){var n=50<C[r]?-1:1,n=3+(p.length+n*r);p[r].style.zIndex=String(n)})}function Y(r,n,i,o,s,l){return(n=s?n:se(C,r,n,i,o,!1,l))!==!1&&(n=n,C[r=r]=n,F[r]=y.fromStepping(n),n="translate("+Ne(Je(n,0)-Mt+"%","0")+")",p[r].style[e.transformRule]=n,Qe(r),Qe(r+1),!0)}function Qe(r){var n,i;f[r]&&(i=100,n="translate("+Ne(Je(n=(n=0)!==r?C[r-1]:n,i=(i=r!==f.length-1?C[r]:i)-n)+"%","0")+")",i="scale("+Ne(i/100,"1")+")",f[r].style[e.transformRule]=n+" "+i)}function Ze(r,n){return r===null||r===!1||r===void 0?C[n]:(typeof r=="number"&&(r=String(r)),(r=(r=e.format.from(r))!==!1?y.toStepping(r):r)===!1||isNaN(r)?C[n]:r)}function ae(s,n,i){var o=re(s),s=C[0]===void 0;n=n===void 0||n,e.animate&&!s&&_e(V,e.cssClasses.tap,e.animationDuration),L.forEach(function(c){Y(c,Ze(o[c],c),!0,!1,i)});var l,x=L.length===1?0:1;for(s&&y.hasNoSize()&&(i=!0,C[0]=0,1<L.length&&(l=100/(L.length-1),L.forEach(function(c){C[c]=c*l})));x<L.length;++x)L.forEach(function(c){Y(c,C[c],!0,!0,i)});ke(),L.forEach(function(c){N("update",c),o[c]!==null&&n&&N("set",c)})}function et(r){return(r=r===void 0?!1:r)?F.length===1?F[0]:F.slice(0):(r=F.map(e.format.to),r.length===1?r[0]:r)}function tt(l){var n=C[l],i=y.getNearbySteps(n),o=F[l],s=i.thisStep.step,l=null;return e.snap?[o-i.stepBefore.startValue||null,i.stepAfter.startValue-o||null]:(s!==!1&&o+s>i.stepAfter.startValue&&(s=i.stepAfter.startValue-o),l=o>i.thisStep.startValue?i.thisStep.step:i.stepBefore.step!==!1&&o-i.stepBefore.highestStep,n===100?s=null:n===0&&(l=null),n=y.countStepDecimals(),s!==null&&s!==!1&&(s=Number(s.toFixed(n))),[l=l!==null&&l!==!1?Number(l.toFixed(n)):l,s])}A(t=V,e.cssClasses.target),e.dir===0?A(t,e.cssClasses.ltr):A(t,e.cssClasses.rtl),e.ort===0?A(t,e.cssClasses.horizontal):A(t,e.cssClasses.vertical),A(t,getComputedStyle(t).direction==="rtl"?e.cssClasses.textDirectionRtl:e.cssClasses.textDirectionLtr),a=q(t,e.cssClasses.base),function(r,n){var i=q(n,e.cssClasses.connects);p=[],(f=[]).push(Xe(i,r[0]));for(var o=0;o<e.handles;o++)p.push(Dt(n,o)),L[o]=o,f.push(Xe(i,r[o+1]))}(e.connect,a),(T=e.events).fixed||p.forEach(function(r,n){I(w.start,r.children[0],Pe,{handleNumbers:[n]})}),T.tap&&I(w.start,a,Ft,{}),T.hover&&I(w.move,a,Ht,{hover:!0}),T.drag&&f.forEach(function(r,n){var i,o,s,l,x;r!==!1&&n!==0&&n!==f.length-1&&(i=p[n-1],o=p[n],s=[r],l=[i,o],x=[n-1,n],A(r,e.cssClasses.draggable),T.fixed&&(s.push(i.children[0]),s.push(o.children[0])),T.dragAll&&(l=p,x=L),s.forEach(function(c){I(w.start,c,Pe,{handles:l,handleNumbers:x,connect:r})}))}),ae(e.start),e.pips&&we(e.pips),e.tooltips&&Ye(),J("update"+B.aria),Ce("update"+B.aria,function(r,n,i,o,s){L.forEach(function(c){var x=p[c],d=se(C,c,0,!0,!0,!0),h=se(C,c,100,!0,!0,!0),v=s[c],c=String(e.ariaFormat.to(i[c])),d=y.fromStepping(d).toFixed(1),h=y.fromStepping(h).toFixed(1),v=y.fromStepping(v).toFixed(1);x.children[0].setAttribute("aria-valuemin",d),x.children[0].setAttribute("aria-valuemax",h),x.children[0].setAttribute("aria-valuenow",v),x.children[0].setAttribute("aria-valuetext",c)})});var le={destroy:function(){for(J(B.aria),J(B.tooltips),Object.keys(e.cssClasses).forEach(function(r){ne(V,e.cssClasses[r])});V.firstChild;)V.removeChild(V.firstChild);delete V.noUiSlider},steps:function(){return L.map(tt)},on:Ce,off:J,get:et,set:ae,setHandle:function(r,n,i,o){if(!(0<=(r=Number(r))&&r<L.length))throw new Error("noUiSlider: invalid handle number, got: "+r);Y(r,Ze(n,r),!0,!0,o),N("update",r),i&&N("set",r)},reset:function(r){ae(e.start,r)},disable:function(r){r!=null?(p[r].setAttribute("disabled",""),p[r].handle.removeAttribute("tabindex")):(V.setAttribute("disabled",""),p.forEach(function(n){n.handle.removeAttribute("tabindex")}))},enable:function(r){r!=null?(p[r].removeAttribute("disabled"),p[r].handle.setAttribute("tabindex","0")):(V.removeAttribute("disabled"),p.forEach(function(n){n.removeAttribute("disabled"),n.handle.setAttribute("tabindex","0")}))},__moveHandles:function(r,n,i){Ke(r,n,C,i)},options:u,updateOptions:function(r,n){var i=et(),o=["margin","limit","padding","range","animate","snap","step","format","pips","tooltips"];o.forEach(function(l){r[l]!==void 0&&(u[l]=r[l])});var s=Re(u);o.forEach(function(l){r[l]!==void 0&&(e[l]=s[l])}),y=s.spectrum,e.margin=s.margin,e.limit=s.limit,e.padding=s.padding,e.pips?we(e.pips):ye(),(e.tooltips?Ye:xe)(),C=[],ae(me(r.start)?r.start:i,n)},target:V,removePips:ye,removeTooltips:xe,getPositions:function(){return C.slice()},getTooltips:function(){return P},getOrigins:function(){return p},pips:we};return le}function Be(t,e){if(!t||!t.nodeName)throw new Error("noUiSlider: create requires a single element, got: "+t);if(t.noUiSlider)throw new Error("noUiSlider: Slider was already initialized.");return e=Lt(t,Re(e),e),t.noUiSlider=e}var U={__spectrum:Fe,cssClasses:ve,create:Be};m.create=Be,m.cssClasses=ve,m.default=U,Object.defineProperty(m,"__esModule",{value:!0})});var Z=document.querySelector(".nav"),qt=document.querySelector(".nav__toggle"),nt=document.querySelector(".nav-list");qt.addEventListener("click",()=>{Z.classList.contains("nav--closed")?(Z.classList.remove("nav--closed"),Z.classList.add("nav--opened"),nt.classList.toggle("nav-list--opened")):(Z.classList.add("nav--closed"),Z.classList.remove("nav--opened"),nt.classList.toggle("nav-list--opened"))});var Ae=["#F3EBE1","#EAE6FC","#E5E6E8"],ce=document.querySelectorAll(".slider__item"),it=document.querySelector(".slider__list"),Ve=document.querySelectorAll(".slider__dot"),Ue=document.querySelector(".slider__button--next"),Le=document.querySelector(".slider__button--previous"),Me=document.querySelector(".hero"),M=0,ue;window.addEventListener("resize",()=>{ee()});var De=m=>{Ve.forEach(O=>O.classList.remove("slider__dot--active")),Ve[m].classList.add("slider__dot--active")},pe=()=>{it.style.transform=`translateX(${-M*ue}px)`};function ee(){ue=document.querySelector(".slider__container").offsetWidth,it.style.width=`${ue*ce.length}px`,ce.forEach(m=>m.style.width=`${ue}px`),pe()}var Rt=()=>{M++,Le.disabled=!1,M>=ce.length&&(Ue.disabled=!0,M=ce.length-1),Me.style.backgroundColor=Ae[M],pe(),De(M)},Bt=()=>{M--,Ue.disabled=!1,M<0&&(Le.disabled=!0,M=0),Me.style.backgroundColor=Ae[M],pe(),De(M)};Ve.forEach((m,O)=>{m.addEventListener("click",()=>{M=O,pe(),De(M),Me.style.backgroundColor=Ae[M]})});Ue.addEventListener("click",Rt);Le.addEventListener("click",Bt);ee();window.addEventListener("load",ee);window.removeEventListener("resize",ee);window.removeEventListener("load",ee);var te=document.querySelector(".range__scale"),de=document.querySelector('input[name="min-price"]'),he=document.querySelector('input[name="max-price"]');noUiSlider.create(te,{start:[0,900],connect:!0,range:{min:[0],max:[1068]},step:1,to:function(m){return m.toFixed(0)},from:function(m){return m.toFixed(0)}});te.noUiSlider.get([de.value,he.value]);te.noUiSlider.on("update",m=>{de.value=Math.trunc(m[0]),he.value=Math.trunc(m[1])});de.addEventListener("change",()=>{te.noUiSlider.set([de.value,null])});he.addEventListener("change",()=>{te.noUiSlider.set([null,he.value])});
