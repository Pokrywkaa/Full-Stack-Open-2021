(this.webpackJsonpproject=this.webpackJsonpproject||[]).push([[0],{38:function(e,n,t){},39:function(e,n,t){"use strict";t.r(n);var c=t(1),r=t(14),a=t.n(r),o=t(3),u=t(4),i=t.n(u),s="/api/persons",d=function(){return i.a.get(s).then((function(e){return e.data}))},l=function(e){return i.a.post(s,e).then((function(e){return e.data}))},h=function(e,n){return i.a.put("".concat(s,"/").concat(e),n).then((function(e){return e.data}))},j=function(e){return i.a.delete("".concat(s,"/").concat(e)).then((function(e){return e.data}))},b=t(0),f=function(e){var n=e.contact;return Object(b.jsxs)("li",{children:[n.name," ",n.number]})},m=function(e){var n=e.contacts,t=e.setPerson,c=e.setMessage;return Object(b.jsx)("ul",{children:n.map((function(e){return Object(b.jsxs)("div",{children:[Object(b.jsx)(f,{contact:e},e.id),Object(b.jsx)("button",{onClick:function(){return r=e,void(window.confirm("Do you want to delete ".concat(r.name,"?"))&&j(r.id).then((function(e){t(n.filter((function(e){return e!==r})))})).catch((function(e){c({text:"".concat(r.name," was already removed"),type:"error"}),setTimeout((function(){c(null)}),3e3),t(n.filter((function(e){return e!==r})))})));var r},children:"Delete"})]})}))})},O=function(e){var n=e.addPerson,t=e.short;return Object(b.jsxs)("form",{onSubmit:n,children:[Object(b.jsxs)("div",{children:["name: ",Object(b.jsx)("input",{id:"name",value:t.newName,onChange:t.handleNameChange}),"number: ",Object(b.jsx)("input",{id:"number",value:t.newNumber,onChange:t.handleNumberChange})]}),Object(b.jsx)("div",{children:Object(b.jsx)("button",{type:"submit",children:"add"})})]})},x=function(e){var n=e.filtr,t=e.short;return Object(b.jsxs)("div",{children:["filter shown with:",Object(b.jsx)("input",{id:"search",value:n,onChange:t.handleSearchChange})]})},p=function(e){var n=e.message;return null===n?null:Object(b.jsx)("div",{className:"notification notification_".concat(n.type),children:n.text})},v=function(){var e=Object(c.useState)([]),n=Object(o.a)(e,2),t=n[0],r=n[1],a=Object(c.useState)(),u=Object(o.a)(a,2),i=u[0],s=u[1],j=Object(c.useState)(),f=Object(o.a)(j,2),v=f[0],g=f[1],w=Object(c.useState)(),C=Object(o.a)(w,2),N=C[0],S=C[1],y=Object(c.useState)(null),k=Object(o.a)(y,2),P=k[0],T=k[1],D=Object(c.useState)(null),A=Object(o.a)(D,2);A[0],A[1];Object(c.useEffect)((function(){console.log("effect"),d().then((function(e){r(e)}))}),[]),console.log("render",t.length,"person");var E=t.filter((function(e){return e.name.toLowerCase().includes(N)})),J={newName:i,newNumber:v,handleNameChange:function(e){s(e.target.value)},handleNumberChange:function(e){g(e.target.value)},handleSearchChange:function(e){S(e.target.value)}};return Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"Phonebook"}),Object(b.jsx)(p,{message:P}),Object(b.jsx)("h2",{children:"Search:"}),Object(b.jsx)(x,{filtr:N,short:J}),Object(b.jsx)("h2",{children:"Add New:"}),Object(b.jsx)(O,{addPerson:function(e){e.preventDefault();var n={name:i,number:v,id:t.length+1};l(n).then((function(e){T({text:"Added ".concat(i),type:"success"}),setTimeout((function(){T(null)}),3e3),r(t.concat(e)),s(""),g("")}));var c=t.map((function(e){return e.name})),a=t.filter((function(e){return e.name===i})).map((function(e){return e.id}));c.includes(n.name)&&(window.confirm("".concat(n.name," is already added to phonebook, replace the old number with a new one?"))&&h(a,n).then((function(e){r(t.map((function(n){return n.id===e.id?e:n}))),T("The number is changed"),setTimeout((function(){T(null)}),3e3)})))},short:J}),Object(b.jsx)("h2",{children:"Numbers"}),Object(b.jsx)("ul",{children:Object(b.jsx)(m,{contacts:N?E:t,setPerson:r,setMessage:T})})]})};t(38);a.a.render(Object(b.jsx)(v,{}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.a394e470.chunk.js.map