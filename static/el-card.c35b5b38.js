import{a2 as a,a3 as s,d as e,U as r,t,v as d,a6 as o,I as l,F as n,B as y,y as p,K as c,x as i,a8 as h,am as u}from"./entry.0a063ecb.js";import{_ as m}from"./el-popper.bee10784.js";const v=a({header:{type:String,default:""},bodyStyle:{type:s([String,Object,Array]),default:""},bodyClass:String,shadow:{type:String,values:["always","hover","never"],default:"always"}}),f=e({name:"ElCard"});const b=u(m(e({...f,props:v,setup(a){const s=r("card");return(a,e)=>(t(),d("div",{class:o([l(s).b(),l(s).is(`${a.shadow}-shadow`)])},[a.$slots.header||a.header?(t(),d("div",{key:0,class:o(l(s).e("header"))},[n(a.$slots,"header",{},(()=>[y(p(a.header),1)]))],2)):c("v-if",!0),i("div",{class:o([l(s).e("body"),a.bodyClass]),style:h(a.bodyStyle)},[n(a.$slots,"default")],6)],2))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/card/src/card.vue"]]));export{b as E};