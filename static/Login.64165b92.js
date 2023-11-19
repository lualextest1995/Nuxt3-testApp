import{E as s}from"./el-button.4045dcbb.js";import{_ as a}from"./ElementForm.5b1181e3.js";import{f as e,L as o,b3 as r,r as t,h as n,N as c,O as i,Y as l,aR as u,o as d,c as p,a as m,t as f,I as w,g,w as P,b as y,d as b,P as _,p as h,e as j,D as v}from"./entry.2e6e13f1.js";import{u as R}from"./useMessage.c6d1a01e.js";import{_ as S}from"./_plugin-vue_export-helper.1b428a4d.js";import"./el-popper.f6545ffb.js";import"./plugin-vue_export-helper.221dab27.js";import"./el-form.73ef5395.js";import"./el-scrollbar.9625877e.js";const C=""+new URL("logo.ad3d8ce5.webp",import.meta.url).href,I={class:"loginForm"},k=(s=>(h("data-v-fc987bc8"),s=s(),j(),s))((()=>m("div",{class:"logo"},[m("img",{src:C,alt:""})],-1))),A={class:"title"},E=S(e({__name:"Login",setup(e){const{t:h}=o(),{$loadingDecorator:j}=v(),{success:S,error:C}=R(),E=r(),K=t(!0),x=n((()=>K.value?h("login"):h("signup"))),L={account:"",password:""},$={name:"",account:"",password:"",confirmPassword:""},B=c({...L}),F=c({...$}),M=c([{type:"Input",label:i((()=>h("account"))),dataKey:"account"},{type:"Password",label:i((()=>h("password"))),dataKey:"password"}]),O=c([{type:"Input",label:i((()=>h("username"))),dataKey:"name"},{type:"Input",label:i((()=>h("RegisterAccount"))),dataKey:"account"},{type:"Password",label:i((()=>h("RegisterPassword"))),dataKey:"password"},{type:"Password",label:i((()=>h("ConfirmPassword"))),dataKey:"confirmPassword"}]),T=()=>{K.value=!K.value},N=n((()=>F.password&&F.confirmPassword&&F.confirmPassword!==F.password?h("ConfirmPasswordMustBeSameAsPassword"):"")),D=()=>F.name?F.account?F.password?F.confirmPassword?F.password!==F.confirmPassword?C(h("PasswordandConfirmPasswordMustMatch")):sessionStorage.getItem(F.account)?C(h("ThisAccountHasAlreadyBeenRegistered")):(E.signup(F.account,F.name,F.password),j((()=>S(h("RegistrationSuccessful")))),void(K.value=!0)):C(h("PleaseEnterRegisterConfirmPassword")):C(h("PleaseEnterRegisterPassword")):C(h("PleaseEnterRegisterAccount")):C(h("UsernameCannotBeBlank")),G=()=>{if(!B.account)return C(h("PleaseEnterAccount"));if(!B.password)return C(h("PleaseEnterPassword"));if(!sessionStorage.getItem(B.account))return C(h("NoSuchAccountFoundPleaseRegisterThisAccountFirst"));if(JSON.parse(sessionStorage.getItem(B.account)).password!==B.password)return C(h("IncorrectLoginPassword"));E.login(B.account)};return l(K,(s=>{s?Object.assign(F,$):Object.assign(B,L)})),(e,o)=>{const r=s,t=a,n=u("color");return d(),p("div",I,[k,m("h1",A,f(w(x)),1),w(K)?(d(),g(t,{key:0,form:w(B),formStruct:w(M),"label-width":"70px"},{buttons:P((()=>[y(r,{type:"primary",onClick:G},{default:P((()=>[b(f(e.$t("confirm")),1)])),_:1}),y(r,{onClick:o[0]||(o[0]=s=>w(j)(T))},{default:P((()=>[b(f(e.$t("GoToRegister")),1)])),_:1})])),_:1},8,["form","formStruct"])):(d(),g(t,{key:1,form:w(F),formStruct:w(O),"label-width":"150px"},{message:P((()=>[_((d(),p("p",null,[b(f(w(N)),1)])),[[n]])])),buttons:P((()=>[y(r,{type:"primary",onClick:D},{default:P((()=>[b(f(e.$t("confirm")),1)])),_:1}),y(r,{onClick:o[1]||(o[1]=s=>w(j)(T))},{default:P((()=>[b(f(e.$t("GoToLogin")),1)])),_:1})])),_:1},8,["form","formStruct"]))])}}}),[["__scopeId","data-v-fc987bc8"]]);export{E as default};