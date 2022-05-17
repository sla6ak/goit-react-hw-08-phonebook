"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[806],{1806:function(n,e,t){t.r(e),t.d(e,{default:function(){return N}});var r,i,a,o,l,s,d,c,x=t(2791),u=t(168),m=t(9958),p=m.Z.div(r||(r=(0,u.Z)(["\n  font-size: 28px;\n  font-weight: 600;\n  color: rgb(65, 65, 65);\n  display: flex;\n  justify-content: center;\n  margin-top: 20px;\n  margin-bottom: 20px;\n  margin-left: auto;\n  margin-right: auto;\n"]))),h=t(184),f=function(n){var e=n.text;return(0,h.jsx)(p,{children:e})},g=m.Z.section(i||(i=(0,u.Z)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  justify-content: center;\n  align-items: center;\n"]))),b=t(885),w=function(){for(var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21,e="",t=crypto.getRandomValues(new Uint8Array(n));n--;){var r=63&t[n];e+=r<36?r.toString(36):r<62?(r-26).toString(36).toUpperCase():r<63?"_":"-"}return e},j=m.Z.form(a||(a=(0,u.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  /* margin-bottom: 20px; */\n  max-width: 600px;\n"]))),Z=t(1889),v=t(5125),y=t(6151),C=t(5680),k=function(){var n=(0,x.useState)(""),e=(0,b.Z)(n,2),t=e[0],r=e[1],i=(0,x.useState)(""),a=(0,b.Z)(i,2),o=a[0],l=a[1],s=(0,C.Tn)(),d=(0,b.Z)(s,2),c=d[0],u=d[1],m=(u.error,u.isLoading,w()),p=w(),f=function(n){var e=n.currentTarget,t=e.name,i=e.value;"name"===t?r(i):"number"===t&&l(i)},g=function(){r(""),l(""),localStorage.removeItem("write")};return(0,h.jsxs)(j,{action:"",onSubmit:function(n){n.preventDefault(),c({name:t,number:o}),g()},children:[(0,h.jsxs)(Z.ZP,{container:!0,spacing:2,children:[(0,h.jsx)(Z.ZP,{item:!0,xs:12,children:(0,h.jsx)(v.Z,{label:"Name",id:m,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,fullWidth:!0,onChange:f,value:t})}),(0,h.jsx)(Z.ZP,{item:!0,xs:12,children:(0,h.jsx)(v.Z,{fullWidth:!0,label:"Telephon",id:p,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:o,onChange:f})})]}),(0,h.jsx)(y.Z,{variant:"contained",fullWidth:!0,sx:{mt:3,mb:2},type:"submit",children:"Save"})]})},L=m.Z.ul(o||(o=(0,u.Z)(["\n  list-style: none;\n  color: rgb(0, 3, 36);\n  font-weight: 500;\n  padding-left: 10px;\n  padding-right: 10px;\n  margin-top: 35px;\n  margin-left: auto;\n  margin-right: auto;\n  @media (min-width: 1200px) {\n    width: 540px;\n  }\n  @media (max-width: 1199px) {\n    width: 460px;\n  }\n  @media (max-width: 767px) {\n    width: 320px;\n  }\n"]))),A=m.Z.ul(l||(l=(0,u.Z)(["\n  max-width: 600px;\n  @media (min-width: 1200px) {\n    width: 600px;\n  }\n  @media (max-width: 1199px) {\n    width: 540px;\n  }\n  @media (max-width: 767px) {\n    width: 320px;\n  }\n"]))),S=t(5048),z=t(6364),P=function(){var n=(0,S.v9)((function(n){return n.filter})),e=(0,S.I0)();return(0,h.jsx)(v.Z,{label:"Find contact",type:"text",name:"filter",value:n,onChange:function(n){e((0,z.o)(n.currentTarget.value.trim().toLowerCase()))},fullWidth:!0})},T=m.Z.button(s||(s=(0,u.Z)(["\n  color: brown;\n  background-color: transparent;\n  height: 15px;\n  display: flex;\n  align-items: center;\n  padding: 10px;\n  border-radius: 5px;\n  border-color: #d68686;\n  :hover {\n    background-color: #a70303;\n    color: #ffffff;\n  }\n"]))),W=m.Z.li(d||(d=(0,u.Z)(["\n  margin-bottom: 8px;\n  color: rgb(82, 82, 82);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  min-height: 25px;\n  border-bottom: 1px solid rgb(175, 168, 106);\n"]))),_=m.Z.div(c||(c=(0,u.Z)(["\n  margin: 10px;\n  color: rgb(116, 41, 41);\n  font-weight: 500;\n  font-size: 16px;\n  text-align: center;\n"]))),D=function(n){var e=n.text;return(0,h.jsx)(_,{children:e})},F=function(n){var e=n.elem,t=(0,C.T9)(),r=(0,b.Z)(t,2),i=r[0],a=r[1].isLoading;return(0,h.jsx)(h.Fragment,{children:a?(0,h.jsx)(D,{text:"Wite we deleting"}):(0,h.jsxs)(W,{children:[e.name," : ",e.number,(0,h.jsx)(T,{onClick:function(){i(e.id)},children:(0,h.jsx)("div",{children:"Delete"})})]})})},I=function(n){var e=n.contacts,t=(0,S.v9)((function(n){return n.filter})),r=e.filter((function(n){return n.name.slice(0,t.length).toLowerCase()===t.toLowerCase()}));return(0,h.jsxs)(A,{children:[(0,h.jsx)(P,{}),e.length>0?(0,h.jsx)(L,{children:r.map((function(n){return(0,h.jsx)(F,{elem:n},n.id)}))}):(0,h.jsx)(D,{text:"List empty now"})]})};var N=function(n){var e=(0,C.bC)(),t=e.data,r=e.isLoading;return(0,h.jsxs)(g,{children:[(0,h.jsx)(f,{text:"Phonebook"}),(0,h.jsx)(k,{}),(0,h.jsx)(f,{text:"Contacts:"}),r?(0,h.jsx)(D,{text:"LOADING"}):(0,h.jsx)(I,{contacts:t})]})}}}]);
//# sourceMappingURL=806.8965d335.chunk.js.map