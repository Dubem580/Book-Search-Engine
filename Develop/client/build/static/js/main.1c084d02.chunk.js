(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{109:function(e,a,t){e.exports=t(129)},115:function(e,a,t){},129:function(e,a,t){"use strict";t.r(a);var n,r,o,l,c,i=t(0),s=t.n(i),u=t(42),m=t.n(u),d=(t(114),t(115),t(138)),b=t(101),p=t(55),g=t(18),v=t(20),k=t(143),E=t(135),h=t(142),f=t(140),w=t(145),O=t(24),j=t.n(O),S=t(36),y=t(52),I=t(44),x=t(141),C=t(133),B=t(134),F=t(89),T=t(90),L=t(81),_=t.n(L),N=new(function(){function e(){Object(F.a)(this,e)}return Object(T.a)(e,[{key:"getProfile",value:function(){return _()(this.getToken())}},{key:"loggedIn",value:function(){var e=this.getToken();return!!e&&!this.isTokenExpired(e)}},{key:"isTokenExpired",value:function(e){try{return _()(e).exp<Date.now()/1e3}catch(a){return!1}}},{key:"getToken",value:function(){return localStorage.getItem("id_token")}},{key:"login",value:function(e){localStorage.setItem("id_token",e),window.location.assign("/")}},{key:"logout",value:function(){localStorage.removeItem("id_token"),window.location.assign("/")}}]),e}()),$=t(49),q=t(50),P=Object(q.a)(n||(n=Object($.a)(["\n  mutation login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      token\n      user {\n        _id\n        username\n        email\n        bookCount\n        savedBooks {\n          bookId\n          title\n          description\n          authors\n          image\n          link\n        }\n      }\n    }\n  }\n"]))),D=Object(q.a)(r||(r=Object($.a)(["\n  mutation addUser($username: String!, $email: String!, $password: String!) {\n    addUser(username: $username, email: $email, password: $password) {\n      token\n      user {\n        _id\n        username\n        email\n        bookCount\n        savedBooks {\n          bookId\n          title\n          description\n          authors\n          image\n          link\n        }\n      }\n    }\n  }\n"]))),G=Object(q.a)(o||(o=Object($.a)(["\n  mutation saveBook($input: bookInput!) {\n    saveBook(input: $input) {\n      _id\n      username\n      email\n      savedBooks {\n        bookId\n        authors\n        image\n        description\n        title\n        link\n      }\n    }\n  }\n"]))),U=Object(q.a)(l||(l=Object($.a)(["\n  mutation removeBook($bookId: String!) {\n    removeBook(bookId: $bookId) {\n      _id\n      username\n      email\n      bookCount\n      savedBooks {\n        bookId\n        authors\n        image\n        description\n        title\n        link\n      }\n    }\n  }\n"]))),V=t(139),Y=function(){var e=Object(V.a)(D),a=Object(v.a)(e,1)[0],t=Object(i.useState)({username:"",email:"",password:""}),n=Object(v.a)(t,2),r=n[0],o=n[1],l=Object(i.useState)(!1),c=Object(v.a)(l,1)[0],u=Object(i.useState)(!1),m=Object(v.a)(u,2),d=m[0],b=m[1],p=function(e){var a=e.target,t=a.name,n=a.value;o(Object(I.a)(Object(I.a)({},r),{},Object(y.a)({},t,n)))},g=function(){var e=Object(S.a)(j.a.mark((function e(t){var n,l;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),!1===t.currentTarget.checkValidity()&&(t.preventDefault(),t.stopPropagation()),e.prev=3,e.next=6,a({variables:Object(I.a)({},r)});case 6:n=e.sent,l=n.data,N.login(l.addUser.token),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(3),console.error(e.t0),b(!0);case 15:o({username:"",email:"",password:""});case 16:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(a){return e.apply(this,arguments)}}();return s.a.createElement(s.a.Fragment,null,s.a.createElement(x.a,{noValidate:!0,validated:c,onSubmit:g},s.a.createElement(C.a,{dismissible:!0,onClose:function(){return b(!1)},show:d,variant:"danger"},"Something went wrong with your signup!"),s.a.createElement(x.a.Group,null,s.a.createElement(x.a.Label,{htmlFor:"username"},"Username"),s.a.createElement(x.a.Control,{type:"text",placeholder:"Your username",name:"username",onChange:p,value:r.username,required:!0}),s.a.createElement(x.a.Control.Feedback,{type:"invalid"},"Username is required!")),s.a.createElement(x.a.Group,null,s.a.createElement(x.a.Label,{htmlFor:"email"},"Email"),s.a.createElement(x.a.Control,{type:"email",placeholder:"Your email address",name:"email",onChange:p,value:r.email,required:!0}),s.a.createElement(x.a.Control.Feedback,{type:"invalid"},"Email is required!")),s.a.createElement(x.a.Group,null,s.a.createElement(x.a.Label,{htmlFor:"password"},"Password"),s.a.createElement(x.a.Control,{type:"password",placeholder:"Your password",name:"password",onChange:p,value:r.password,required:!0}),s.a.createElement(x.a.Control.Feedback,{type:"invalid"},"Password is required!")),s.a.createElement(B.a,{disabled:!(r.username&&r.email&&r.password),type:"submit",variant:"success"},"Submit")))},J=function(){var e=Object(V.a)(P),a=Object(v.a)(e,1)[0],t=Object(i.useState)({email:"",password:""}),n=Object(v.a)(t,2),r=n[0],o=n[1],l=Object(i.useState)(!1),c=Object(v.a)(l,1)[0],u=Object(i.useState)(!1),m=Object(v.a)(u,2),d=m[0],b=m[1],p=function(e){var a=e.target,t=a.name,n=a.value;o(Object(I.a)(Object(I.a)({},r),{},Object(y.a)({},t,n)))},g=function(){var e=Object(S.a)(j.a.mark((function e(t){var n,l;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),!1===t.currentTarget.checkValidity()&&(t.preventDefault(),t.stopPropagation()),e.prev=3,e.next=6,a({variables:Object(I.a)({},r)});case 6:n=e.sent,l=n.data,N.login(l.login.token),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(3),console.error(e.t0),b(!0);case 15:o({username:"",email:"",password:""});case 16:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(a){return e.apply(this,arguments)}}();return s.a.createElement(s.a.Fragment,null,s.a.createElement(x.a,{noValidate:!0,validated:c,onSubmit:g},s.a.createElement(C.a,{dismissible:!0,onClose:function(){return b(!1)},show:d,variant:"danger"},"Something went wrong with your login credentials!"),s.a.createElement(x.a.Group,null,s.a.createElement(x.a.Label,{htmlFor:"email"},"Email"),s.a.createElement(x.a.Control,{type:"text",placeholder:"Your email",name:"email",onChange:p,value:r.email,required:!0}),s.a.createElement(x.a.Control.Feedback,{type:"invalid"},"Email is required!")),s.a.createElement(x.a.Group,null,s.a.createElement(x.a.Label,{htmlFor:"password"},"Password"),s.a.createElement(x.a.Control,{type:"password",placeholder:"Your password",name:"password",onChange:p,value:r.password,required:!0}),s.a.createElement(x.a.Control.Feedback,{type:"invalid"},"Password is required!")),s.a.createElement(B.a,{disabled:!(r.email&&r.password),type:"submit",variant:"success"},"Submit")))},K=function(){var e=Object(i.useState)(!1),a=Object(v.a)(e,2),t=a[0],n=a[1];return s.a.createElement(s.a.Fragment,null,s.a.createElement(k.a,{bg:"dark",variant:"dark",expand:"lg"},s.a.createElement(E.a,{fluid:!0},s.a.createElement(k.a.Brand,{as:p.b,to:"/"},"Google Books Search"),s.a.createElement(k.a.Toggle,{"aria-controls":"navbar"}),s.a.createElement(k.a.Collapse,{id:"navbar"},s.a.createElement(h.a,{className:"ml-auto"},s.a.createElement(h.a.Link,{as:p.b,to:"/"},"Search For Books"),N.loggedIn()?s.a.createElement(s.a.Fragment,null,s.a.createElement(h.a.Link,{as:p.b,to:"/saved"},"See Your Books"),s.a.createElement(h.a.Link,{onClick:N.logout},"Logout")):s.a.createElement(h.a.Link,{onClick:function(){return n(!0)}},"Login/Sign Up"))))),s.a.createElement(f.a,{size:"lg",show:t,onHide:function(){return n(!1)},"aria-labelledby":"signup-modal"},s.a.createElement(w.a.Container,{defaultActiveKey:"login"},s.a.createElement(f.a.Header,{closeButton:!0},s.a.createElement(f.a.Title,{id:"signup-modal"},s.a.createElement(h.a,{variant:"pills"},s.a.createElement(h.a.Item,null,s.a.createElement(h.a.Link,{eventKey:"login"},"Login")),s.a.createElement(h.a.Item,null,s.a.createElement(h.a.Link,{eventKey:"signup"},"Sign Up"))))),s.a.createElement(f.a.Body,null,s.a.createElement(w.a.Content,null,s.a.createElement(w.a.Pane,{eventKey:"login"},s.a.createElement(J,{handleModalClose:function(){return n(!1)}})),s.a.createElement(w.a.Pane,{eventKey:"signup"},s.a.createElement(Y,{handleModalClose:function(){return n(!1)}})))))))},z=t(102),A=t(136),M=t(94),H=t(137),R=t(146),W=function(e){var a=localStorage.getItem("saved_books")?JSON.parse(localStorage.getItem("saved_books")):null;if(!a)return!1;var t=null===a||void 0===a?void 0:a.filter((function(a){return a!==e}));return localStorage.setItem("saved_books",JSON.stringify(t)),!0},Q=function(){var e=Object(V.a)(G),a=Object(v.a)(e,2),t=a[0],n=a[1].error,r=Object(i.useState)([]),o=Object(v.a)(r,2),l=o[0],c=o[1],u=Object(i.useState)(""),m=Object(v.a)(u,2),d=m[0],b=m[1],p=Object(i.useState)(localStorage.getItem("saved_books")?JSON.parse(localStorage.getItem("saved_books")):[]),g=Object(v.a)(p,2),k=g[0],h=g[1];Object(i.useEffect)((function(){return function(){var e;(e=k).length?localStorage.setItem("saved_books",JSON.stringify(e)):localStorage.removeItem("saved_books")}}));var f=function(){var e=Object(S.a)(j.a.mark((function e(a){var t,n,r,o;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),d){e.next=3;break}return e.abrupt("return",!1);case 3:return e.prev=3,e.next=6,fetch("https://www.googleapis.com/books/v1/volumes?q=".concat(d));case 6:if((t=e.sent).ok){e.next=9;break}throw new Error("something went wrong!");case 9:return e.next=11,t.json();case 11:n=e.sent,r=n.items,o=r.map((function(e){var a;return{bookId:e.id,authors:e.volumeInfo.authors||["No author to display"],title:e.volumeInfo.title,description:e.volumeInfo.description,image:(null===(a=e.volumeInfo.imageLinks)||void 0===a?void 0:a.thumbnail)||""}})),c(o),b(""),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(3),console.error(e.t0);case 21:case"end":return e.stop()}}),e,null,[[3,18]])})));return function(a){return e.apply(this,arguments)}}(),w=function(){var e=Object(S.a)(j.a.mark((function e(a){var r,o,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=l.find((function(e){return e.bookId===a})),N.loggedIn()?N.getToken():null){e.next=4;break}return e.abrupt("return",!1);case 4:return e.prev=4,e.next=7,t({variables:{input:r}});case 7:if(o=e.sent,c=o.data,!n){e.next=11;break}throw new Error("something went wrong!");case 11:console.log(c),h([].concat(Object(z.a)(k),[r.bookId])),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(4),console.error(e.t0);case 18:case"end":return e.stop()}}),e,null,[[4,15]])})));return function(a){return e.apply(this,arguments)}}();return s.a.createElement(s.a.Fragment,null,s.a.createElement(A.a,{fluid:!0,className:"text-light bg-dark"},s.a.createElement(E.a,null,s.a.createElement("h1",null,"Search for Books!"),s.a.createElement(x.a,{onSubmit:f},s.a.createElement(x.a.Row,null,s.a.createElement(M.a,{xs:12,md:8},s.a.createElement(x.a.Control,{name:"searchInput",value:d,onChange:function(e){return b(e.target.value)},type:"text",size:"lg",placeholder:"Search for a book"})),s.a.createElement(M.a,{xs:12,md:4},s.a.createElement(B.a,{type:"submit",variant:"success",size:"lg"},"Submit Search")))))),s.a.createElement(E.a,null,s.a.createElement("h2",null,l.length?"Viewing ".concat(l.length," results:"):"Search for a book to begin"),s.a.createElement(H.a,null,l.map((function(e){return s.a.createElement(R.a,{key:e.bookId,border:"dark"},e.image?s.a.createElement(R.a.Img,{src:e.image,alt:"The cover for ".concat(e.title),variant:"top"}):null,s.a.createElement(R.a.Body,null,s.a.createElement(R.a.Title,null,e.title),s.a.createElement("p",{className:"small"},"Authors: ",e.authors),s.a.createElement(R.a.Text,null,e.description),N.loggedIn()&&s.a.createElement(B.a,{disabled:null===k||void 0===k?void 0:k.some((function(a){return a===e.bookId})),className:"btn-block btn-info",onClick:function(){return w(e.bookId)}},(null===k||void 0===k?void 0:k.some((function(a){return a===e.bookId})))?"This book has already been saved!":"Save this Book!")))})))))},X=t(144),Z=Object(q.a)(c||(c=Object($.a)(["\n    {\n        me {\n            _id\n            username\n            email\n            bookCount\n            savedBooks {\n                bookId\n                authors\n                title\n                description\n                image\n                link\n            }\n        }\n    }\n"]))),ee=function(){var e=Object(V.a)(U),a=Object(v.a)(e,2),t=a[0],n=a[1].error,r=Object(X.a)(Z),o=r.loading,l=r.data,c=(null===l||void 0===l?void 0:l.me)||{},i=function(){var e=Object(S.a)(j.a.mark((function e(a){var r,o;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(N.loggedIn()?N.getToken():null){e.next=3;break}return e.abrupt("return",!1);case 3:return e.prev=3,e.next=6,t({variables:{bookId:a}});case 6:if(r=e.sent,o=r.data,console.log(o),!n){e.next=11;break}throw new Error("Something went wrong!");case 11:W(a),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(3),console.error(e.t0);case 17:case"end":return e.stop()}}),e,null,[[3,14]])})));return function(a){return e.apply(this,arguments)}}();return o?s.a.createElement("h2",null,"LOADING..."):s.a.createElement(s.a.Fragment,null,s.a.createElement(A.a,{fluid:!0,className:"text-light bg-dark"},s.a.createElement(E.a,null,s.a.createElement("h1",null,"Viewing saved books!"))),s.a.createElement(E.a,null,s.a.createElement("h2",null,c.savedBooks.length?"Viewing ".concat(c.savedBooks.length," saved ").concat(1===c.savedBooks.length?"book":"books",":"):"You have no saved books!"),s.a.createElement(H.a,null,c.savedBooks.map((function(e){return s.a.createElement(R.a,{key:e.bookId,border:"dark"},e.image?s.a.createElement(R.a.Img,{src:e.image,alt:"The cover for ".concat(e.title),variant:"top"}):null,s.a.createElement(R.a.Body,null,s.a.createElement(R.a.Title,null,e.title),s.a.createElement("p",{className:"small"},"Authors: ",e.authors),s.a.createElement(R.a.Text,null,e.description),s.a.createElement(B.a,{className:"btn-block btn-danger",onClick:function(){return i(e.bookId)}},"Delete this Book!")))})))))},ae=new b.a({request:function(e){var a=localStorage.getItem("id_token");e.setContext({headers:{authorization:a?"Bearer ".concat(a):""}})},uri:"/graphql"});var te=function(){return s.a.createElement(d.a,{client:ae},s.a.createElement(p.a,null,s.a.createElement(s.a.Fragment,null,s.a.createElement(K,null),s.a.createElement(g.c,null,s.a.createElement(g.a,{exact:!0,path:"/",component:Q}),s.a.createElement(g.a,{exact:!0,path:"/saved",component:ee}),s.a.createElement(g.a,{render:function(){return s.a.createElement("h1",{className:"display-2"},"Wrong page!")}})))))};m.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(te,null)),document.getElementById("root"))}},[[109,1,2]]]);
//# sourceMappingURL=main.1c084d02.chunk.js.map