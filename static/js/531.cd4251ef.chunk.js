"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[531],{531:function(n,e,t){t.r(e),t.d(e,{default:function(){return q}});var r,i,a,o,s,l,c,p,u,d,m,x=t(2791),f=t(168),g=t(9958),h=g.Z.div(r||(r=(0,f.Z)(["\n  font-size: 28px;\n  font-weight: 600;\n  color: rgb(65, 65, 65);\n  display: flex;\n  justify-content: center;\n  margin-top: 20px;\n  margin-left: auto;\n  margin-right: auto;\n"]))),b=t(184),v=function(n){var e=n.text;return(0,b.jsx)(h,{children:e})},Z=g.Z.section(i||(i=(0,f.Z)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n"]))),w=t(885),j=function(){for(var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21,e="",t=crypto.getRandomValues(new Uint8Array(n));n--;){var r=63&t[n];e+=r<36?r.toString(36):r<62?(r-26).toString(36).toUpperCase():r<63?"_":"-"}return e},y=g.Z.input(a||(a=(0,f.Z)(["\n  width: 200px;\n  padding: 3px 10px;\n  margin-top: 10px;\n  box-shadow: 1px 1px 7px rgb(160, 160, 160);\n  border-radius: 8px;\n"]))),C=g.Z.form(o||(o=(0,f.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  margin-bottom: 20px;\n"]))),S=g.Z.button(s||(s=(0,f.Z)(["\n  box-shadow: 2px 2px 7px rgb(111, 160, 100);\n  width: 70px;\n  height: 30px;\n  margin-top: 20px;\n  color: rgb(0, 80, 4);\n  font-weight: 700;\n  font-size: 16px;\n"]))),k=g.Z.label(l||(l=(0,f.Z)(["\n  margin-top: 10px;\n"]))),z=function(){var n=(0,x.useState)(""),e=(0,w.Z)(n,2),t=e[0],r=e[1],i=(0,x.useState)(""),a=(0,w.Z)(i,2),o=a[0],s=a[1];(0,x.useEffect)((function(){var n=localStorage.getItem("write");if(n){var e=JSON.parse(n);r(e.name),s(e.number)}}),[]),(0,x.useEffect)((function(){localStorage.setItem("write",JSON.stringify({name:t,number:o}))}),[t,o]);var l=j(),c=j(),p=function(n){var e=n.currentTarget,t=e.name,i=e.value;"name"===t?r(i):"number"===t&&s(i)},u=function(){r(""),s(""),localStorage.removeItem("write")};return(0,b.jsxs)(C,{action:"",onSubmit:function(n){n.preventDefault(),u()},children:[(0,b.jsx)(k,{htmlFor:l,children:"enter name"}),(0,b.jsx)(y,{id:l,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:p,value:t}),(0,b.jsx)(k,{htmlFor:c,children:"enter telephone"}),(0,b.jsx)(y,{id:c,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:o,onChange:p}),(0,b.jsx)(S,{type:"submit",children:"Save"})]})},A=g.Z.ul(c||(c=(0,f.Z)(["\n  list-style: none;\n  color: rgb(0, 3, 36);\n  font-weight: 500;\n  padding-left: 10px;\n  padding-right: 10px;\n  margin-top: 15px;\n"]))),F=g.Z.input(p||(p=(0,f.Z)(["\n  width: 200px;\n  padding: 3px 10px;\n  margin-top: 10px;\n  margin-bottom: 30px;\n  box-shadow: 1px 1px 7px rgb(160, 160, 160);\n  border-radius: 8px;\n  display: flex;\n  margin-left: auto;\n  margin-right: auto;\n"]))),_=t(9434),I=t(6364),E=function(){var n=(0,_.v9)((function(n){return n.filter})),e=(0,_.I0)();return(0,b.jsx)(F,{type:"text",name:"filter",value:n,onChange:function(n){e((0,I.o)(n.currentTarget.value.trim().toLowerCase()))}})},J=g.Z.button(u||(u=(0,f.Z)(["\n  color: brown;\n  background-color: transparent;\n  height: 15px;\n  display: flex;\n  align-items: center;\n  padding: 10px;\n  border-radius: 5px;\n  :hover {\n    background-color: #a70303;\n    color: #ffffff;\n  }\n"]))),L=g.Z.li(d||(d=(0,f.Z)(["\n  margin-bottom: 8px;\n  color: rgb(82, 82, 82);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  min-height: 25px;\n  border-bottom: 1px solid rgb(175, 168, 106);\n"]))),N=(g.Z.div(m||(m=(0,f.Z)(["\n  margin: 10px;\n  color: rgb(116, 41, 41);\n  font-weight: 500;\n  font-size: 16px;\n  text-align: center;\n"]))),function(n){var e=n.elem;return(0,b.jsx)(b.Fragment,{children:(0,b.jsxs)(L,{children:[e.name," : ",e.number,(0,b.jsx)(J,{onClick:function(){},children:(0,b.jsx)("div",{children:"Delete"})})]})})}),P=function(n){var e=n.contacts,t=(0,_.v9)((function(n){return n.filter})),r=e.filter((function(n){return n.name.slice(0,t.length).toLowerCase()===t.toLowerCase()}));return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(E,{}),(0,b.jsx)(A,{children:r.map((function(n){return(0,b.jsx)(N,{elem:n},n.id)}))})]})};var q=function(n){return(0,b.jsxs)(Z,{children:[(0,b.jsx)(v,{text:"Phonebook"}),(0,b.jsx)(z,{}),(0,b.jsx)(v,{text:"Contacts:"}),(0,b.jsx)(P,{contacts:[{id:"4564",name:"Vasya Pupkin",number:"098564372"},{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}]})]})}}}]);
//# sourceMappingURL=531.cd4251ef.chunk.js.map