(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,a,t){e.exports=t(64)},34:function(e,a,t){},36:function(e,a,t){},64:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),l=t(25),c=t.n(l),m=(t(34),t(36),t(38),t(5)),o=t.n(m),s=t(7),i=t(6),u=t(8),p=t.n(u),d=t(4),E=function(){var e=Object(n.useState)([]),a=Object(i.a)(e,2),t=a[0],l=a[1];Object(n.useEffect)(function(){c()},[]);var c=function(){var e=Object(s.a)(o.a.mark(function e(){var a;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get(" http://localhost:3003/users");case 2:a=e.sent,l(a.data.reverse());case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),m=function(){var e=Object(s.a)(o.a.mark(function e(a){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.delete("http://localhost:3003/users/".concat(a));case 2:c();case 3:case"end":return e.stop()}},e)}));return function(a){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"py-4"},r.a.createElement("h1",null,"Home Page"),r.a.createElement("table",{className:"table"},r.a.createElement("thead",{className:"thead-dark"},r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"#"),r.a.createElement("th",{scope:"col"},"Name"),r.a.createElement("th",{scope:"col"},"User Name"),r.a.createElement("th",{scope:"col"},"Email"),r.a.createElement("th",null,"Action"))),r.a.createElement("tbody",null,t.map(function(e,a){return r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},a+1),r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.username),r.a.createElement("td",null,e.email),r.a.createElement("td",null,r.a.createElement(d.b,{className:"btn btn-primary m-2",to:"/users/".concat(e.id)},"View"),r.a.createElement(d.b,{className:"btn btn-outline-primary m-2",to:"/users/edit/".concat(e.id)},"Edit"),r.a.createElement(d.b,{className:"btn btn-danger m-2 ",onClick:function(){return m(e.id)},to:"/"},"Delete")))})))))},f=function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"py-4"},r.a.createElement("h1",null,"Contact Page"),r.a.createElement("form",null,r.a.createElement("div",{className:"mb-3"},r.a.createElement("label",{htmlFor:"exampleInputEmail1",className:"form-label"},"Email address"),r.a.createElement("input",{type:"email",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp"}),r.a.createElement("div",{id:"emailHelp",className:"form-text"},"We'll never share your email with anyone else.")),r.a.createElement("div",{className:"mb-3"},r.a.createElement("label",{htmlFor:"exampleInputPassword1",className:"form-label"},"Password"),r.a.createElement("input",{type:"password",className:"form-control",id:"exampleInputPassword1"})),r.a.createElement("div",{className:"mb-3 form-check"},r.a.createElement("input",{type:"checkbox",className:"form-check-input",id:"exampleCheck1"}),r.a.createElement("label",{className:"form-check-label",htmlFor:"exampleCheck1"},"Check me out")),r.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Submit"))))},b=function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"py-4"},r.a.createElement("h1",null,"About Page"),r.a.createElement("p",{className:"lead"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nulla earum reiciendis illo ducimus eligendi distinctio nam corrupti, impedit, dicta maxime quam illum, accusamus facere temporibus eos id. Fugit, dolore!"),r.a.createElement("p",{className:"lead"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nulla earum reiciendis illo ducimus eligendi distinctio nam corrupti, impedit, dicta maxime quam illum, accusamus facere temporibus eos id. Fugit, dolore!"),r.a.createElement("p",{className:"lead"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nulla earum reiciendis illo ducimus eligendi distinctio nam corrupti, impedit, dicta maxime quam illum, accusamus facere temporibus eos id. Fugit, dolore!")))},h=function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary"},r.a.createElement("div",{className:"container"},r.a.createElement(d.b,{className:"navbar-brand",to:"/"},"React User"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse"},r.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(d.c,{className:"nav-link","aria-current":"page",exact:!0,to:"/"},"Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(d.c,{className:"nav-link",exact:!0,to:"/about"},"About")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(d.c,{className:"nav-link",exact:!0,to:"/contact"},"Contact")))),r.a.createElement("li",null,r.a.createElement(d.c,{className:"btn btn-outline-light",exact:!0,to:"/users/add"},"Add User"))))},N=t(0),v=function(){return r.a.createElement("div",{className:"not-found"},r.a.createElement("h1",{className:"display-1"},"Page Not Found"))},g=t(10),x=t(12),y=function(){var e=Object(N.f)(),a=Object(n.useState)({name:"",username:"",email:"",phone:"",website:""}),t=Object(i.a)(a,2),l=t[0],c=t[1],m=l.name,u=l.username,d=l.email,E=l.phone,f=l.website,b=function(e){c(Object(x.a)({},l,Object(g.a)({},e.target.name,e.target.value)))},h=function(){var a=Object(s.a)(o.a.mark(function a(t){return o.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return t.preventDefault(),a.next=3,p.a.post("http://localhost:3003/users",l);case 3:e("/");case 4:case"end":return a.stop()}},a)}));return function(e){return a.apply(this,arguments)}}();return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"w-45 ms-auto shadow p-5"},r.a.createElement("h2",{className:"text-center mb-4"},"Add a User"),r.a.createElement("form",{onSubmit:function(e){return h(e)}},r.a.createElement("div",{className:"form-group my-3"},r.a.createElement("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter Your Name",name:"name",value:m,onChange:function(e){return b(e)}})),r.a.createElement("div",{className:"form-group my-3"},r.a.createElement("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter Your UserName",name:"username",value:u,onChange:function(e){return b(e)}})),r.a.createElement("div",{className:"form-group my-3"},r.a.createElement("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter Your Email Address",name:"email",value:d,onChange:function(e){return b(e)}})),r.a.createElement("div",{className:"form-group my-3"},r.a.createElement("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter Your Phone Number",name:"phone",value:E,onChange:function(e){return b(e)}})),r.a.createElement("div",{className:"form-group my-3"},r.a.createElement("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter Your Web Site Name",name:"website",value:f,onChange:function(e){return b(e)}})),r.a.createElement("div",{className:"d-grid gap-10"},r.a.createElement("button",{className:"btn btn-primary",type:"submit",value:"Submit"},"Add User")))))},w=function(){var e=Object(N.f)(),a=Object(N.g)().id,t=Object(n.useState)({name:"",username:"",email:"",phone:"",website:""}),l=Object(i.a)(t,2),c=l[0],m=l[1],u=c.name,d=c.username,E=c.email,f=c.phone,b=c.website,h=function(e){m(Object(x.a)({},c,Object(g.a)({},e.target.name,e.target.value)))};Object(n.useEffect)(function(){y()},[]);var v=function(){var t=Object(s.a)(o.a.mark(function t(n){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),console.log(a),t.next=4,p.a.put("http://localhost:3003/users/".concat(a),c);case 4:e("/");case 5:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),y=function(){var e=Object(s.a)(o.a.mark(function e(){var t;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("http://localhost:3003/users/".concat(a));case 2:t=e.sent,m(t.data);case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"w-45 ms-auto shadow p-5"},r.a.createElement("h2",{className:"text-center mb-4"},"Edit a User"),r.a.createElement("form",{onSubmit:function(e){return v(e)}},r.a.createElement("div",{className:"form-group my-3"},r.a.createElement("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter Your Name",name:"name",value:u,onChange:function(e){return h(e)}})),r.a.createElement("div",{className:"form-group my-3"},r.a.createElement("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter Your UserName",name:"username",value:d,onChange:function(e){return h(e)}})),r.a.createElement("div",{className:"form-group my-3"},r.a.createElement("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter Your Email Address",name:"email",value:E,onChange:function(e){return h(e)}})),r.a.createElement("div",{className:"form-group my-3"},r.a.createElement("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter Your Phone Number",name:"phone",value:f,onChange:function(e){return h(e)}})),r.a.createElement("div",{className:"form-group my-3"},r.a.createElement("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter Your Web Site Name",name:"website",value:b,onChange:function(e){return h(e)}})),r.a.createElement("div",{className:"d-grid gap-10"},r.a.createElement("button",{className:"btn btn-warning",type:"submit",value:"Submit"},"Update User")))))},j=function(){var e=Object(n.useState)({name:"",username:"",email:"",phone:"",website:""}),a=Object(i.a)(e,2),t=a[0],l=a[1],c=Object(N.g)().id;Object(n.useEffect)(function(){m()},[]);var m=function(){var e=Object(s.a)(o.a.mark(function e(){var a;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("http://localhost:3003/users/".concat(c));case 2:a=e.sent,l(a.data);case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"container"},r.a.createElement(d.b,{className:"btn btn-primayr",to:"/"},"back to home"),r.a.createElement("h1",{className:"display-4"},"User Id: ",c),r.a.createElement("hr",null),r.a.createElement("ul",{className:"list-group w-50"},r.a.createElement("li",{className:"list-group-item"},"Name: ",t.name),r.a.createElement("li",{className:"list-group-item"},"User Name: ",t.username),r.a.createElement("li",{className:"list-group-item"},"Phone: ",t.phone),r.a.createElement("li",{className:"list-group-item"},"Website: ",t.website)))};var O=function(){return r.a.createElement(d.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(h,null),r.a.createElement(N.c,null,r.a.createElement(N.a,{exact:!0,path:"/",element:r.a.createElement(E,null)}),r.a.createElement(N.a,{exact:!0,path:"/about",element:r.a.createElement(b,null)}),r.a.createElement(N.a,{exact:!0,path:"/contact",element:r.a.createElement(f,null)}),r.a.createElement(N.a,{exact:!0,path:"/users/add",element:r.a.createElement(y,null)}),r.a.createElement(N.a,{exact:!0,path:"/users/edit/:id",element:r.a.createElement(w,null)}),r.a.createElement(N.a,{exact:!0,path:"/users/:id",element:r.a.createElement(j,null)}),r.a.createElement(N.a,{exact:!0,path:"*",element:r.a.createElement(v,null)}))))};c.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(O,null)))}},[[26,2,1]]]);
//# sourceMappingURL=main.fac942be.chunk.js.map