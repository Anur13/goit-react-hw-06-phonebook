(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{10:function(e,t,n){e.exports={name:"Contacts_name__1oTse",list:"Contacts_list__otVY-"}},18:function(e,t,n){e.exports={label:"Filter_label__19jWm",input:"Filter_input__2CEsa"}},28:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(7),o=n.n(c),i=(n(28),n(8)),l=n(9),s=n(12),u=n(11),b=n(5),j=n.n(b),h=n(3),d=n(6),m=n(4),O=n(40),f=Object(m.a)("phonebook/delete"),p=Object(m.a)("phonebook/add",(function(e){return{payload:Object(d.a)(Object(d.a)({},e),{},{id:Object(O.a)()})}})),x=n(1),_=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",id:"",number:""},e.handleNameChange=function(t){var n=t.currentTarget.value;e.setState({name:n})},e.handleNumberChange=function(t){var n=t.currentTarget.value;e.setState({number:n})},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.handleSubmit,a=t.items;return Object(x.jsxs)("form",{className:j.a.form,onSubmit:function(t){t.preventDefault(),n(e.state,a)},children:[Object(x.jsxs)("label",{className:j.a.label,children:["Name",Object(x.jsx)("input",{className:j.a.input,onChange:this.handleNameChange,value:this.state.name,type:"text",required:!0})]}),Object(x.jsxs)("label",{className:j.a.label,children:["Number",Object(x.jsx)("input",{className:j.a.input,onChange:this.handleNumberChange,value:this.state.number,type:"tel",pattern:"[0-9]{7}",placeholder:"533-33-23",minLength:"7",maxLength:"7",required:!0})]}),Object(x.jsx)("button",{className:j.a.submitButton,type:"submit",children:"Add contact"})]})}}]),n}(a.Component),g=Object(h.b)((function(e){return{items:e.contacts.items}}),(function(e){return{handleSubmit:function(t,n){if(!n.find((function(e){return e.name===t.name})))return e(p(t));alert("Card with this name already exists")}}}))(_),v=n(10),y=n.n(v),k=Object(h.b)(null,(function(e,t){return{handleDelete:function(n){return e(f(t.id))}}}))((function(e){var t=e.name,n=e.number,a=(e.id,e.handleDelete);return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)("li",{children:[Object(x.jsxs)("span",{className:y.a.name,children:[t,": ",n]}),Object(x.jsx)("button",{type:"button",onClick:a,children:"Delete"})]})})})),N=Object(h.b)((function(e){return{filter:e.contacts.filter,arr:e.contacts.items}}))((function(e){var t=e.arr,n=e.filter,a=e.deleteID,r=t;return n.length>0&&(r=t.filter((function(e){return e.name.toLowerCase().includes(n)?e:null}))),Object(x.jsx)("ul",{className:y.a.list,children:r.map((function(e){return Object(x.jsx)(k,Object(d.a)(Object(d.a)({},e),{},{deleteID:a}),e.id)}))})})),C=n(18),B=n.n(C),F=Object(m.a)("filter"),S=Object(h.b)(null,(function(e){return{handleFilterInput:function(t){return e(F(t.currentTarget.value))}}}))((function(e){var t=e.handleFilterInput;return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)("label",{className:B.a.label,children:["Find contacts by name",Object(x.jsx)("input",{className:B.a.input,onChange:t,type:"text"})]})})})),w=n(15),D=n.n(w),I=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(x.jsxs)("div",{className:"container",children:[Object(x.jsx)("h1",{children:"PhoneBook"}),Object(x.jsx)(g,{}),Object(x.jsx)("h2",{children:"Contacts"}),Object(x.jsx)(S,{}),Object(x.jsx)(N,{})]})}}]),n}(a.Component),P=Object(h.b)((function(e){return{items:e.contacts.items}}),(function(e){return{reWrite:function(t){return e(function(e){return{type:"getFromLocalStorage",payload:e}}(t))}}}))(I),T=n(21),L=n(22),J=n(2),R=Object(m.b)("",{filter:function(e,t){return t.payload}}),W=n(23),q=Object(m.b)([],{"phonebook/add":function(e,t){var n=t.payload;return[].concat(Object(W.a)(e),[n])},"phonebook/delete":function(e,t){var n=t.payload;return e.filter((function(e){return e.id!==n}))}}),A=n(19),E={key:"root",storage:D.a,blacklist:["filter"]},V=Object(J.combineReducers)({items:q,filter:R}),z=Object(J.combineReducers)({contacts:V}),G=Object(A.a)(E,z),M=Object(J.createStore)(G,Object(L.composeWithDevTools)()),Y=Object(A.b)(M);o.a.render(Object(x.jsx)(r.a.StrictMode,{children:Object(x.jsx)(h.a,{store:M,children:Object(x.jsx)(T.a,{loading:null,persistor:Y,children:Object(x.jsx)(P,{})})})}),document.getElementById("root"))},5:function(e,t,n){e.exports={form:"PhoneBook_form__iwi9G",submitButton:"PhoneBook_submitButton__JssVS",label:"PhoneBook_label__2k2zR",input:"PhoneBook_input__24bNF"}}},[[38,1,2]]]);
//# sourceMappingURL=main.206db928.chunk.js.map