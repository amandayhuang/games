(this.webpackJsonptemplate=this.webpackJsonptemplate||[]).push([[9],{102:function(e,t,r){"use strict";r.r(t);var n=r(2),a=r.n(n),o=r(4),s=r(0),i=r.n(s),c=r(99),u=r(27),l=r(85),m=Object(l.q)(c.h)((function(e){return Object(u.b)({marginTop:-53,marginBottom:53,display:"flex"},e.theme.forgotPassword?Object(u.b)({},e.theme.forgotPassword):{})}));function d(e){return i.a.createElement(m,Object.assign({},e,{type:"button"}))}t.default=function(e){var t=e.setCurrentPage,r=e.dictionary,n=Object(c.k)(),s=n.register,m=n.handleSubmit,b=n.reset,f=n.formState.isSubmitting,p=Object(u.f)().signIn,g=function(){var e=Object(o.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e){return setTimeout(e,1e3)}));case 2:return e.next=4,p(t.email,t.password);case 4:(n=e.sent).success||("NoUserExists"===n.errorCode?l.t.error(r.errorUserDoesNotExist):"BadFormat"===n.errorCode&&(b(),l.t.error(r.errorBadInputFormat)));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return i.a.createElement(c.b,{onSubmit:m(g)},i.a.createElement(c.c,null,r.signInHeader),i.a.createElement(c.g,{size:"medium"}),i.a.createElement(c.a,{register:function(){return s("email")},label:r.emailLabel,disabled:f}),i.a.createElement(c.g,{size:"xlarge"}),i.a.createElement(c.f,{register:function(){return s("password")},autoComplete:"current-password",disabled:f,label:r.passwordLabel}),i.a.createElement(c.g,{size:"xlarge"}),i.a.createElement(d,{onClick:function(e){return t("ForgotPassword")},disabled:f},r.forgotPasswordButton),i.a.createElement(c.i,{disabled:f},r.signInSubmitButton),i.a.createElement(c.j,{onClick:function(e){return t("SignUp")},disabled:f},r.noAccountButton))}}}]);
//# sourceMappingURL=9.3986e13e.chunk.js.map