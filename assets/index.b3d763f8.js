import{E as e}from"./el-button.babb3132.js";import{s as a,k as t}from"./el-popper.4b86f7f8.js";import{E as s}from"./el-card.e8708f11.js";import{a2 as r,d as l,U as n,c as i,g as p,F as o,r as u,R as c,aH as d,aF as m,z as f,b1 as g,B as y,a3 as h,aE as v,b2 as S,am as A,t as b,E as w,A as L,v as x,x as R,y as C,K as E,I as _,aK as j,L as k,O as F,H as $,G as U,s as T}from"./entry.b20fe511.js";import"./el-tooltip.4ed993c7.js";import{_ as z}from"./_plugin-vue_export-helper.1b428a4d.js";import{P as B,i as O,a as q}from"./vnode.9cc13a05.js";import{u as P}from"./useMessage.5e5b2f97.js";const D=l({name:"ElSpaceItem",props:r({prefixCls:{type:String}}),setup(e,{slots:a}){const t=n("space"),s=i((()=>`${e.prefixCls||t.b()}__item`));return()=>p("div",{class:s.value},o(a,"default"))}}),I={small:8,default:12,large:16};const N=A(l({name:"ElSpace",props:r({direction:{type:String,values:["horizontal","vertical"],default:"horizontal"},class:{type:h([String,Object,Array]),default:""},style:{type:h([String,Array,Object]),default:""},alignment:{type:h(String),default:"center"},prefixCls:{type:String},spacer:{type:h([Object,String,Number,Array]),default:null,validator:e=>g(e)||m(e)||v(e)},wrap:Boolean,fill:Boolean,fillRatio:{type:Number,default:100},size:{type:[String,Array,Number],values:S,validator:e=>m(e)||d(e)&&2===e.length&&e.every(m)}}),setup(e,{slots:a}){const{classes:t,containerStyle:s,itemStyle:r}=function(e){const a=n("space"),t=i((()=>[a.b(),a.m(e.direction),e.class])),s=u(0),r=u(0),l=i((()=>[e.wrap||e.fill?{flexWrap:"wrap",marginBottom:`-${r.value}px`}:{},{alignItems:e.alignment},e.style])),p=i((()=>[{paddingBottom:`${r.value}px`,marginRight:`${s.value}px`},e.fill?{flexGrow:1,minWidth:`${e.fillRatio}%`}:{}]));return c((()=>{const{size:a="small",wrap:t,direction:l,fill:n}=e;if(d(a)){const[e=0,t=0]=a;s.value=e,r.value=t}else{let e;e=m(a)?a:I[a||"small"]||I.small,(t||n)&&"horizontal"===l?s.value=r.value=e:"horizontal"===l?(s.value=e,r.value=0):(r.value=e,s.value=0)}})),{classes:t,containerStyle:l,itemStyle:p}}(e);function l(a,t="",s=[]){const{prefixCls:n}=e;return a.forEach(((e,a)=>{O(e)?d(e.children)&&e.children.forEach(((e,a)=>{O(e)&&d(e.children)?l(e.children,`${t+a}-`,s):s.push(f(D,{style:r.value,prefixCls:n,key:`nested-${t+a}`},{default:()=>[e]},B.PROPS|B.STYLE,["style","prefixCls"]))})):q(e)&&s.push(f(D,{style:r.value,prefixCls:n,key:`LoopKey${t+a}`},{default:()=>[e]},B.PROPS|B.STYLE,["style","prefixCls"]))})),s}return()=>{var n;const{spacer:i,direction:p}=e,u=o(a,"default",{key:0},(()=>[]));if(0===(null!=(n=u.children)?n:[]).length)return null;if(d(u.children)){let e=l(u.children);if(i){const a=e.length-1;e=e.reduce(((e,t,s)=>{const l=[...e,t];return s!==a&&l.push(f("span",{style:[r.value,"vertical"===p?"width: 100%":null],key:s},[g(i)?i:y(i,B.TEXT)],B.STYLE)),l}),[])}return f("div",{class:t.value,style:s.value},e,B.STYLE|B.CLASS)}return u.children}}})),Y={key:0,class:"mask"},K={class:"container"},G=["src"],H={class:"title"},W=z(l({__name:"Application",props:{data:{}},emits:["updateData"],setup(r,{emit:l}){const n=r,i=l;return(r,l)=>{const p=e,o=t,u=s;return b(),w(u,{class:"appCard"},{default:L((()=>["/"===n.data.path?(b(),x("div",Y,[R("p",null,C(r.$t("StayTuned")),1)])):E("",!0),R("div",K,[R("img",{src:n.data.src,alt:""},null,8,G)]),R("p",H,C(n.data.title),1),f(o,{effect:"dark",content:n.data.hasFavorited?r.$t("RemoveFromFavorites"):r.$t("AddToFavorites"),placement:"bottom"},{default:L((()=>[f(p,{type:n.data.hasFavorited?"success":"",class:"addFavorite",icon:_(a),circle:"",onClick:l[0]||(l[0]=j((e=>i("updateData",!n.data.hasFavorited)),["stop"]))},null,8,["type","icon"])])),_:1},8,["content"])])),_:1})}}}),[["__scopeId","data-v-f83f852e"]]),M=""+new URL("beerApp.01c86f6c.png",import.meta.url).href,Q=""+new URL("equipmentApp.3e25f083.png",import.meta.url).href,X=""+new URL("loginBg.7a8c6a9b.png",import.meta.url).href,J=""+new URL("logo.6b758dfa.png",import.meta.url).href,V=""+new URL("logo1.2cb10a6a.png",import.meta.url).href,Z=""+new URL("userApp.724620d8.png",import.meta.url).href,ee=""+new URL("userLogo.643c09d0.png",import.meta.url).href,ae=l({__name:"index",setup(e){const{t:a}=k(),{success:t,warning:s}=P(),r=e=>new URL(Object.assign({"../assets/beerApp.png":M,"../assets/equipmentApp.png":Q,"../assets/loginBg.png":X,"../assets/logo.png":J,"../assets/logo1.png":V,"../assets/userApp.png":Z,"../assets/userLogo.png":ee})[`../assets/${e}`],self.location).href,l=u([{id:"beerApp",title:F((()=>a("BeerQuerySystem"))),src:r("beerApp.png"),hasFavorited:!1,path:"beerApp"},{id:"equipmentApp",title:F((()=>a("EquipmentAnalysisSystem"))),src:r("equipmentApp.png"),hasFavorited:!1,path:"equipmentApp"},{id:"userApp",title:F((()=>a("UserAnalysisSystem"))),src:r("userApp.png"),hasFavorited:!1,path:"/"}]);return(e,r)=>{const n=W,i=N;return b(),w(i,{wrap:"",size:60},{default:L((()=>[(b(!0),x(U,null,$(_(l),((e,r)=>(b(),w(n,{key:r,data:e,onClick:r=>(async e=>{if("/"===e)return s(a("NewSystemComingSoonStayTuned"));t(`${a("SystemLoading")}...`),await T(e)})(e.path),onUpdateData:a=>{e.hasFavorited=a}},null,8,["data","onClick","onUpdateData"])))),128))])),_:1})}}});export{ae as default};
