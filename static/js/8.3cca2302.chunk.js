(this.webpackJsonptemplate=this.webpackJsonptemplate||[]).push([[8],{74:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var r=a(17),n=a(1),l=a.n(n),i=a(56).q.p((function(e){return Object(r.b)({marginTop:5,marginBottom:-5,fontSize:12,fontWeight:500,color:"red",height:0,overflow:"visible"},e.theme.errorText?Object(r.b)({},e.theme.errorText):{})}));function s(e){return e.value&&e.value.length?l.a.createElement(i,Object.assign({},e),e.value):l.a.createElement(l.a.Fragment,null)}},77:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(3),i=a(1),s=a.n(i),o=a(73),m=a(74),c=a(17),u=a(56),d=u.q.div({position:"relative",display:"inline",width:"100%",maxWidth:"100%",cursor:"pointer","&:after":{content:"''",width:0,height:0,position:"absolute",pointerEvents:"none",top:".3em",right:".75em",borderTop:"8px solid black",opacity:.5,borderLeft:"5px solid transparent",borderRight:"5px solid transparent"}}),b=u.q.select({WebkitAppearance:"none",MozAppearance:"none",appearance:"none",padding:"1em 2em 1em 1em",border:"none",width:"100%",fontFamily:"inherit",fontSize:"inherit",cursor:"pointer",outline:"none","&::-ms-expand":{display:"none"}}),g=u.q.option((function(e){return Object(c.b)({width:"100%"},e.theme.selectOption?Object(c.b)({},e.theme.selectOption):{})}));var p=Object(u.q)((function(e){return s.a.createElement(d,null,s.a.createElement(b,Object.assign({},e,e.register(),{defaultValue:""}),s.a.createElement(g,{key:"empty-option",value:"",disabled:!0,hidden:!0,style:{display:"none"}}),e.options.map((function(e){return s.a.createElement(g,{key:"option"+e},e)}))))}))((function(e){return Object(c.b)({boxSizing:"border-box"},e.theme.genderSelect?Object(c.b)({},e.theme.genderSelect):{})})),f=u.q.div({position:"relative"}),h=Object(u.q)(o.e)((function(e){return Object(c.b)({},e.theme.genderSelectLabel?Object(c.b)({},e.theme.genderSelectLabel):{})}));function E(e){return s.a.createElement(f,null,s.a.createElement(h,{htmlFor:"select-gender"},"Gender *"),s.a.createElement(p,Object.assign({id:"select-gender"},e,{options:["Male","Female","Prefer not to say"]})))}t.default=function(e){var t,a,r,d,b,g,p,f,h=e.setCurrentPage,w=e.dictionary,v=e.signUpFields,x=Object(o.k)(),N=x.register,O=x.handleSubmit,y=x.formState,k=y.errors,S=y.isSubmitting,j=x.reset,z=Object(c.f)(),F=z.signUp,L=z.signIn,B=function(){var e=Object(l.a)(n.a.mark((function e(t){var a,r,l,i,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.email&&t.password&&t.passwordConfirm){e.next=2;break}return e.abrupt("return");case 2:if(t.password===t.passwordConfirm){e.next=6;break}return u.t.error(w.errorPasswordsDoNotMatch),j(),e.abrupt("return");case 6:a={createdAt:(new Date).toISOString()},r=0,l=["firstName","lastName","fullName","dateOfBirth","gender","phoneNumber"];case 8:if(!(r<l.length)){e.next=20;break}if(i=l[r],!v[i]){e.next=17;break}if(!t[i]){e.next=15;break}a[i]=""+t[i],e.next=17;break;case 15:return u.t.error("Missing sign up field value"),e.abrupt("return");case 17:r++,e.next=8;break;case 20:return e.next=22,F(t.email,t.password,a);case 22:if(!(s=e.sent).success){e.next=29;break}return h("SignIn"),e.next=27,L(t.email,t.password);case 27:e.next=30;break;case 29:"BadFormat"===s.errorCode?(j(),u.t.error(w.errorBadInputFormat)):"BadPasswordLength"===s.errorCode?u.t.error(w.errorPasswordTooShort):"UserExists"===s.errorCode&&(j(),u.t.error(w.errorUserAlreadyExists));case 30:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C={minLength:{value:8,message:"Password must be at least 8 characters long"},maxLength:{value:100,message:"Password too long"},pattern:{value:/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{7,}$/gm,message:"Must contain a digit and uppercase and lowercase letters"}};return s.a.createElement(o.b,{onSubmit:O(B)},s.a.createElement(o.c,null,w.signUpHeader),s.a.createElement(o.g,{size:"medium"}),s.a.createElement(o.a,{register:function(){return N("email")},label:w.newEmailLabel,disabled:S}),v.firstName&&s.a.createElement(i.Fragment,null,s.a.createElement(o.g,{size:"xlarge"}),s.a.createElement(o.d,{register:function(){return N("firstName","boolean"===typeof v.firstName?{}:v.firstName)},label:w.newFirstNameLabel||"",disabled:S}),s.a.createElement(m.a,{value:null==(t=k.firstName)?void 0:t.message})),v.lastName&&s.a.createElement(i.Fragment,null,s.a.createElement(o.g,{size:"xlarge"}),s.a.createElement(o.d,{register:function(){return N("lastName","boolean"===typeof v.lastName?{}:v.lastName)},label:w.newLastNameLabel||"",disabled:S}),s.a.createElement(m.a,{value:null==(a=k.lastName)?void 0:a.message})),v.fullName&&s.a.createElement(i.Fragment,null,s.a.createElement(o.g,{size:"xlarge"}),s.a.createElement(o.d,{register:function(){return N("fullName","boolean"===typeof v.fullName?{}:v.fullName)},label:w.newFullNameLabel||"",disabled:S}),s.a.createElement(m.a,{value:null==(r=k.fullName)?void 0:r.message})),v.dateOfBirth&&s.a.createElement(i.Fragment,null,s.a.createElement(o.g,{size:"xlarge"}),s.a.createElement(o.d,{type:"date",register:function(){return N("dateOfBirth","boolean"===typeof v.dateOfBirth?{}:v.dateOfBirth)},label:w.newDateOfBirthLabel||"",disabled:S,style:{overflow:"hidden"}}),s.a.createElement(m.a,{value:null==(d=k.dateOfBirth)?void 0:d.message})),v.gender&&s.a.createElement(i.Fragment,null,s.a.createElement(o.g,{size:"xlarge"}),s.a.createElement(E,{register:function(){return N("gender","boolean"===typeof v.gender?{}:v.gender)},disabled:S}),s.a.createElement(m.a,{value:null==(b=k.gender)?void 0:b.message})),v.phoneNumber&&s.a.createElement(i.Fragment,null,s.a.createElement(o.g,{size:"xlarge"}),s.a.createElement(o.d,{type:"tel",label:w.newPhoneNumberLabel||"",register:function(){return N("phoneNumber","boolean"===typeof v.phoneNumber?{}:v.phoneNumber)},disabled:S}),s.a.createElement(m.a,{value:null==(g=k.phoneNumber)?void 0:g.message})),s.a.createElement(o.g,{size:"xlarge"}),s.a.createElement(o.f,{register:function(){return N("password",C)},label:w.newPasswordLabel,autoComplete:"new-password",disabled:S}),s.a.createElement(m.a,{value:null==(p=k.password)?void 0:p.message}),s.a.createElement(o.g,{size:"xlarge"}),s.a.createElement(o.f,{register:function(){return N("passwordConfirm",C)},label:w.confirmNewPasswordLabel,autoComplete:"new-password",disabled:S}),s.a.createElement(m.a,{value:null==(f=k.passwordConfirm)?void 0:f.message}),s.a.createElement(o.g,{size:"xlarge"}),s.a.createElement(o.i,{disabled:S},w.signUpSubmitButton),s.a.createElement(o.j,{onClick:function(e){return h("SignIn")},disabled:S},w.backToSignIn))}}}]);
//# sourceMappingURL=8.3cca2302.chunk.js.map