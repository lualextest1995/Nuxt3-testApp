import{E as s}from"./el-button.adac85cb.js";import{_ as a}from"./ElementForm.930d4920.js";import{d as o,L as e,b3 as r,r as t,c as n,N as c,O as i,Y as l,aR as u,t as d,v as m,x as p,y as f,I as w,E as g,A as P,z as y,B as b,P as _,C as j,D as v,q as R}from"./entry.0a063ecb.js";import{u as S}from"./useMessage.d8d5436d.js";import{_ as C}from"./_plugin-vue_export-helper.1b428a4d.js";import"./el-popper.bee10784.js";import"./el-form.a913d359.js";import"./el-scrollbar.18d06ed5.js";const h=""+new URL("logo.6b758dfa.png",import.meta.url).href,A={class:"loginForm"},I=(s=>(j("data-v-13696c32"),s=s(),v(),s))((()=>p("div",{class:"logo"},[p("img",{src:h,alt:""})],-1))),E={class:"title"},k=C(o({__name:"Login",setup(o){const{t:j}=e(),{$loadingDecorator:v}=R(),{success:C,error:h}=S(),k=r(),K=t(!0),x=n((()=>K.value?j("login"):j("signup"))),B={account:"",password:""},L={name:"",account:"",password:"",confirmPassword:""},$=c({...B}),F=c({...L}),M=c([{type:"Input",label:i((()=>j("account"))),dataKey:"account"},{type:"Password",label:i((()=>j("password"))),dataKey:"password"}]),O=c([{type:"Input",label:i((()=>j("username"))),dataKey:"name"},{type:"Input",label:i((()=>j("RegisterAccount"))),dataKey:"account"},{type:"Password",label:i((()=>j("RegisterPassword"))),dataKey:"password"},{type:"Password",label:i((()=>j("ConfirmPassword"))),dataKey:"confirmPassword"}]),T=()=>{K.value=!K.value},N=n((()=>F.password&&F.confirmPassword&&F.confirmPassword!==F.password?j("ConfirmPasswordMustBeSameAsPassword"):"")),D=()=>F.name?F.account?F.password?F.confirmPassword?F.password!==F.confirmPassword?h(j("PasswordandConfirmPasswordMustMatch")):sessionStorage.getItem(F.account)?h(j("ThisAccountHasAlreadyBeenRegistered")):(k.signup(F.account,F.name,F.password),v((()=>C(j("RegistrationSuccessful")))),void(K.value=!0)):h(j("PleaseEnterRegisterConfirmPassword")):h(j("PleaseEnterRegisterPassword")):h(j("PleaseEnterRegisterAccount")):h(j("UsernameCannotBeBlank")),G=()=>{if(!$.account)return h(j("PleaseEnterAccount"));if(!$.password)return h(j("PleaseEnterPassword"));if(!sessionStorage.getItem($.account))return h(j("NoSuchAccountFoundPleaseRegisterThisAccountFirst"));if(JSON.parse(sessionStorage.getItem($.account)).password!==$.password)return h(j("IncorrectLoginPassword"));k.login($.account)};return l(K,(s=>{s?Object.assign(F,L):Object.assign($,B)})),(o,e)=>{const r=s,t=a,n=u("color");return d(),m("div",A,[I,p("h1",E,f(w(x)),1),w(K)?(d(),g(t,{key:0,form:w($),formStruct:w(M),"label-width":"70px"},{buttons:P((()=>[y(r,{type:"primary",onClick:G},{default:P((()=>[b(f(o.$t("confirm")),1)])),_:1}),y(r,{onClick:e[0]||(e[0]=s=>w(v)(T))},{default:P((()=>[b(f(o.$t("GoToRegister")),1)])),_:1})])),_:1},8,["form","formStruct"])):(d(),g(t,{key:1,form:w(F),formStruct:w(O),"label-width":"150px"},{message:P((()=>[_((d(),m("p",null,[b(f(w(N)),1)])),[[n]])])),buttons:P((()=>[y(r,{type:"primary",onClick:D},{default:P((()=>[b(f(o.$t("confirm")),1)])),_:1}),y(r,{onClick:e[1]||(e[1]=s=>w(v)(T))},{default:P((()=>[b(f(o.$t("GoToLogin")),1)])),_:1})])),_:1},8,["form","formStruct"]))])}}}),[["__scopeId","data-v-13696c32"]]);export{k as default};