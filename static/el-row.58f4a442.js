import{a2 as e,f as t,U as s,h as a,ah as u,o as r,g as l,w as p,F as n,a6 as o,I as c,a8 as f,a7 as m,am as g,a3 as i,a5 as d,aF as b,aI as y}from"./entry.2e6e13f1.js";import{_ as h}from"./plugin-vue_export-helper.221dab27.js";import{r as $}from"./el-popper.f6545ffb.js";const j=Symbol("rowContextKey"),v=e({tag:{type:String,default:"div"},gutter:{type:Number,default:0},justify:{type:String,values:["start","center","end","space-around","space-between","space-evenly"],default:"start"},align:{type:String,values:["top","middle","bottom"]}}),N=t({name:"ElRow"});const w=g(h(t({...N,props:v,setup(e){const t=e,g=s("row"),i=a((()=>t.gutter));u(j,{gutter:i});const d=a((()=>{const e={};return t.gutter?(e.marginRight=e.marginLeft=`-${t.gutter/2}px`,e):e})),b=a((()=>[g.b(),g.is(`justify-${t.justify}`,"start"!==t.justify),g.is(`align-${t.align}`,!!t.align)]));return(e,t)=>(r(),l(m(e.tag),{class:o(c(b)),style:f(c(d))},{default:p((()=>[n(e.$slots,"default")])),_:3},8,["class","style"]))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/row/src/row.vue"]])),x=e({tag:{type:String,default:"div"},span:{type:Number,default:24},offset:{type:Number,default:0},pull:{type:Number,default:0},push:{type:Number,default:0},xs:{type:i([Number,Object]),default:()=>$({})},sm:{type:i([Number,Object]),default:()=>$({})},md:{type:i([Number,Object]),default:()=>$({})},lg:{type:i([Number,Object]),default:()=>$({})},xl:{type:i([Number,Object]),default:()=>$({})}}),_=t({name:"ElCol"});const E=g(h(t({..._,props:x,setup(e){const t=e,{gutter:u}=d(j,{gutter:a((()=>0))}),g=s("col"),i=a((()=>{const e={};return u.value&&(e.paddingLeft=e.paddingRight=u.value/2+"px"),e})),h=a((()=>{const e=[];["span","offset","pull","push"].forEach((s=>{const a=t[s];b(a)&&("span"===s?e.push(g.b(`${t[s]}`)):a>0&&e.push(g.b(`${s}-${t[s]}`)))}));return["xs","sm","md","lg","xl"].forEach((s=>{b(t[s])?e.push(g.b(`${s}-${t[s]}`)):y(t[s])&&Object.entries(t[s]).forEach((([t,a])=>{e.push("span"!==t?g.b(`${s}-${t}-${a}`):g.b(`${s}-${a}`))}))})),u.value&&e.push(g.is("guttered")),[g.b(),e]}));return(e,t)=>(r(),l(m(e.tag),{class:o(c(h)),style:f(c(i))},{default:p((()=>[n(e.$slots,"default")])),_:3},8,["class","style"]))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/col/src/col.vue"]]));export{E,w as a};