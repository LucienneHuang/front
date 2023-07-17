import{p as F,m as q,a as Z,g as U,ax as oe,F as j,u as G,c as S,s as C,o as y,v as le,A as J,z as R,B as K,ay as ue,b as ie,d as re,C as se,e as ce,f as ve,n as de,l as me,i as fe,h as $,t as O,j as ge,$ as he,k as ye,az as we,D as be,aA as Se,x as Me,aB as ke,aC as Ee,G as Te,q as xe,H as z,aD as Be,a6 as Ve,aE as Ce}from"./index-33f29ca1.js";const Pe=F({scrollable:Boolean,...q(),...Z({tag:"main"})},"VMain"),We=U()({name:"VMain",props:Pe(),setup(e,s){let{slots:o}=s;const{mainStyles:u}=oe(),{ssrBootStyles:a}=j();return G(()=>S(e.tag,{class:["v-main",{"v-main--scrollable":e.scrollable},e.class],style:[u.value,a.value,e.style]},{default:()=>{var t,d;return[e.scrollable?S("div",{class:"v-main__scroller"},[(t=o.default)==null?void 0:t.call(o)]):(d=o.default)==null?void 0:d.call(o)]}})),{}}});function pe(e){let{rootEl:s,isSticky:o,layoutItemStyles:u}=e;const a=C(!1),t=C(0),d=y(()=>{const g=typeof a.value=="boolean"?"top":a.value;return[o.value?{top:"auto",bottom:"auto",height:void 0}:void 0,a.value?{[g]:le(t.value)}:{top:u.value.top}]});J(()=>{R(o,g=>{g?window.addEventListener("scroll",M,{passive:!0}):window.removeEventListener("scroll",M)},{immediate:!0})}),K(()=>{document.removeEventListener("scroll",M)});let b=0;function M(){const g=b>window.scrollY?"up":"down",r=s.value.getBoundingClientRect(),c=parseFloat(u.value.top??0),v=window.scrollY-Math.max(0,t.value-c),m=r.height+Math.max(t.value,c)-window.scrollY-window.innerHeight,f=parseFloat(getComputedStyle(s.value).getPropertyValue("--v-body-scroll-y"))||0;r.height<window.innerHeight-c?(a.value="top",t.value=c):g==="up"&&a.value==="bottom"||g==="down"&&a.value==="top"?(t.value=window.scrollY+r.top-f,a.value=!0):g==="down"&&m<=0?(t.value=0,a.value="bottom"):g==="up"&&v<=0&&(f?a.value!=="top"&&(t.value=-v+f+c,a.value="top"):(t.value=r.top+v,a.value="top")),b=window.scrollY}return{isStuck:a,stickyStyles:d}}const He=100,Re=20;function X(e){const s=1.41421356237;return(e<0?-1:1)*Math.sqrt(Math.abs(e))*s}function A(e){if(e.length<2)return 0;if(e.length===2)return e[1].t===e[0].t?0:(e[1].d-e[0].d)/(e[1].t-e[0].t);let s=0;for(let o=e.length-1;o>0;o--){if(e[o].t===e[o-1].t)continue;const u=X(s),a=(e[o].d-e[o-1].d)/(e[o].t-e[o-1].t);s+=(a-u)*Math.abs(a),o===e.length-1&&(s*=.5)}return X(s)*1e3}function Ye(){const e={};function s(a){Array.from(a.changedTouches).forEach(t=>{(e[t.identifier]??(e[t.identifier]=new ue(Re))).push([a.timeStamp,t])})}function o(a){Array.from(a.changedTouches).forEach(t=>{delete e[t.identifier]})}function u(a){var g;const t=(g=e[a])==null?void 0:g.values().reverse();if(!t)throw new Error(`No samples for touch id ${a}`);const d=t[0],b=[],M=[];for(const r of t){if(d[0]-r[0]>He)break;b.push({t:r[0],d:r[1].clientX}),M.push({t:r[0],d:r[1].clientY})}return{x:A(b),y:A(M),get direction(){const{x:r,y:c}=this,[v,m]=[Math.abs(r),Math.abs(c)];return v>m&&r>=0?"right":v>m&&r<=0?"left":m>v&&c>=0?"down":m>v&&c<=0?"up":De()}}}return{addMovement:s,endTouch:o,getVelocity:u}}function De(){throw new Error}function Le(e){let{isActive:s,isTemporary:o,width:u,touchless:a,position:t}=e;J(()=>{window.addEventListener("touchstart",H,{passive:!0}),window.addEventListener("touchmove",E,{passive:!1}),window.addEventListener("touchend",x,{passive:!0})}),K(()=>{window.removeEventListener("touchstart",H),window.removeEventListener("touchmove",E),window.removeEventListener("touchend",x)});const d=y(()=>["left","right"].includes(t.value)),{addMovement:b,endTouch:M,getVelocity:g}=Ye();let r=!1;const c=C(!1),v=C(0),m=C(0);let f;function P(n,i){return(t.value==="left"?n:t.value==="right"?document.documentElement.clientWidth-n:t.value==="top"?n:t.value==="bottom"?document.documentElement.clientHeight-n:V())-(i?u.value:0)}function p(n){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;const l=t.value==="left"?(n-m.value)/u.value:t.value==="right"?(document.documentElement.clientWidth-n-m.value)/u.value:t.value==="top"?(n-m.value)/u.value:t.value==="bottom"?(document.documentElement.clientHeight-n-m.value)/u.value:V();return i?Math.max(0,Math.min(1,l)):l}function H(n){if(a.value)return;const i=n.changedTouches[0].clientX,l=n.changedTouches[0].clientY,h=25,k=t.value==="left"?i<h:t.value==="right"?i>document.documentElement.clientWidth-h:t.value==="top"?l<h:t.value==="bottom"?l>document.documentElement.clientHeight-h:V(),T=s.value&&(t.value==="left"?i<u.value:t.value==="right"?i>document.documentElement.clientWidth-u.value:t.value==="top"?l<u.value:t.value==="bottom"?l>document.documentElement.clientHeight-u.value:V());(k||T||s.value&&o.value)&&(r=!0,f=[i,l],m.value=P(d.value?i:l,s.value),v.value=p(d.value?i:l),M(n),b(n))}function E(n){const i=n.changedTouches[0].clientX,l=n.changedTouches[0].clientY;if(r){if(!n.cancelable){r=!1;return}const k=Math.abs(i-f[0]),T=Math.abs(l-f[1]);(d.value?k>T&&k>3:T>k&&T>3)?(c.value=!0,r=!1):(d.value?T:k)>3&&(r=!1)}if(!c.value)return;n.preventDefault(),b(n);const h=p(d.value?i:l,!1);v.value=Math.max(0,Math.min(1,h)),h>1?m.value=P(d.value?i:l,!0):h<0&&(m.value=P(d.value?i:l,!1))}function x(n){if(r=!1,!c.value)return;b(n),c.value=!1;const i=g(n.changedTouches[0].identifier),l=Math.abs(i.x),h=Math.abs(i.y);(d.value?l>h&&l>400:h>l&&h>3)?s.value=i.direction===({left:"right",right:"left",top:"down",bottom:"up"}[t.value]||V()):s.value=v.value>.5}const B=y(()=>c.value?{transform:t.value==="left"?`translateX(calc(-100% + ${v.value*u.value}px))`:t.value==="right"?`translateX(calc(100% - ${v.value*u.value}px))`:t.value==="top"?`translateY(calc(-100% + ${v.value*u.value}px))`:t.value==="bottom"?`translateY(calc(100% - ${v.value*u.value}px))`:V(),transition:"none"}:void 0);return{isDragging:c,dragProgress:v,dragStyles:B}}function V(){throw new Error}const Ne=["start","end","left","right","top","bottom"],Ie=F({color:String,disableResizeWatcher:Boolean,disableRouteWatcher:Boolean,expandOnHover:Boolean,floating:Boolean,modelValue:{type:Boolean,default:null},permanent:Boolean,rail:{type:Boolean,default:null},railWidth:{type:[Number,String],default:56},scrim:{type:[Boolean,String],default:!0},image:String,temporary:Boolean,touchless:Boolean,width:{type:[Number,String],default:256},location:{type:String,default:"start",validator:e=>Ne.includes(e)},sticky:Boolean,...ie(),...q(),...re(),...se(),...ce(),...Z({tag:"nav"}),...ve()},"VNavigationDrawer"),$e=U()({name:"VNavigationDrawer",props:Ie(),emits:{"update:modelValue":e=>!0,"update:rail":e=>!0},setup(e,s){let{attrs:o,emit:u,slots:a}=s;const{isRtl:t}=de(),{themeClasses:d}=me(e),{borderClasses:b}=fe(e),{backgroundColorClasses:M,backgroundColorStyles:g}=$(O(e,"color")),{elevationClasses:r}=ge(e),{mobile:c}=he(),{roundedClasses:v}=ye(e),m=we(),f=be(e,"modelValue",null,w=>!!w),{ssrBootStyles:P}=j(),{scopeId:p}=Se(),H=Me(),E=C(!1),x=y(()=>e.rail&&e.expandOnHover&&E.value?Number(e.width):Number(e.rail?e.railWidth:e.width)),B=y(()=>ke(e.location,t.value)),n=y(()=>!e.permanent&&(c.value||e.temporary)),i=y(()=>e.sticky&&!n.value&&B.value!=="bottom");e.expandOnHover&&e.rail!=null&&R(E,w=>u("update:rail",!w)),e.disableResizeWatcher||R(n,w=>!e.permanent&&Ce(()=>f.value=!w)),!e.disableRouteWatcher&&m&&R(m.currentRoute,()=>n.value&&(f.value=!1)),R(()=>e.permanent,w=>{w&&(f.value=!0)}),Ee(()=>{e.modelValue!=null||n.value||(f.value=e.permanent||!c.value)});const{isDragging:l,dragProgress:h,dragStyles:k}=Le({isActive:f,isTemporary:n,width:x,touchless:O(e,"touchless"),position:B}),T=y(()=>{const w=n.value?0:e.rail&&e.expandOnHover?Number(e.railWidth):x.value;return l.value?w*h.value:w}),{layoutItemStyles:Y,layoutItemScrimStyles:Q}=Te({id:e.name,order:y(()=>parseInt(e.order,10)),position:B,layoutSize:T,elementSize:x,active:y(()=>f.value||l.value),disableTransitions:y(()=>l.value),absolute:y(()=>e.absolute||i.value&&typeof D.value!="string")}),{isStuck:D,stickyStyles:ee}=pe({rootEl:H,isSticky:i,layoutItemStyles:Y}),L=$(y(()=>typeof e.scrim=="string"?e.scrim:null)),te=y(()=>({...l.value?{opacity:h.value*.2,transition:"none"}:void 0,...Q.value}));xe({VList:{bgColor:"transparent"}});function ae(){E.value=!0}function ne(){E.value=!1}return G(()=>{const w=a.image||e.image;return S(Ve,null,[S(e.tag,z({ref:H,onMouseenter:ae,onMouseleave:ne,class:["v-navigation-drawer",`v-navigation-drawer--${B.value}`,{"v-navigation-drawer--expand-on-hover":e.expandOnHover,"v-navigation-drawer--floating":e.floating,"v-navigation-drawer--is-hovering":E.value,"v-navigation-drawer--rail":e.rail,"v-navigation-drawer--temporary":n.value,"v-navigation-drawer--active":f.value,"v-navigation-drawer--sticky":i.value},d.value,M.value,b.value,r.value,v.value,e.class],style:[g.value,Y.value,k.value,P.value,ee.value,e.style]},p,o),{default:()=>{var N,I,_,W;return[w&&S("div",{key:"image",class:"v-navigation-drawer__img"},[a.image?(N=a.image)==null?void 0:N.call(a,{image:e.image}):S("img",{src:e.image,alt:""},null)]),a.prepend&&S("div",{class:"v-navigation-drawer__prepend"},[(I=a.prepend)==null?void 0:I.call(a)]),S("div",{class:"v-navigation-drawer__content"},[(_=a.default)==null?void 0:_.call(a)]),a.append&&S("div",{class:"v-navigation-drawer__append"},[(W=a.append)==null?void 0:W.call(a)])]}}),S(Be,{name:"fade-transition"},{default:()=>[n.value&&(l.value||f.value)&&!!e.scrim&&S("div",z({class:["v-navigation-drawer__scrim",L.backgroundColorClasses.value],style:[te.value,L.backgroundColorStyles.value],onClick:()=>f.value=!1},p),null)]})])}),{isStuck:D}}});export{$e as V,We as a};
