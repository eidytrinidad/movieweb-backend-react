(this.webpackJsonpmovieweb=this.webpackJsonpmovieweb||[]).push([[0],{12:function(e,t,c){"use strict";c.r(t),c.d(t,"types",(function(){return a}));var a={getAllMovies:"[peliculas]Get All Movies",getOneMovie:"[peliculas]Get One Movie",getNuevas:"[peliculas]Get Nuevas",getProximas:"[peliculas]Get getProximas",getAnimes:"[peliculas]Get Animes]",getSeries:"[peliculas]Get Series",getMas:"[peliculas]Get Mas]",getTrailers:"[peliculas]Get Trailers]",getBanner:"[peliculas]Get Banner]",updateMovie:"[peliculas]update Movie",deleteMovie:"[peliculas]delete Movie",createMovie:"[peliculas]Create Movie",login:"[auth] login",logout:"[auth] logout"}},164:function(e,t,c){},479:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c(2),r=c.n(n),s=c(68),o=c.n(s),i=(c(164),c(3)),l=c.n(i),u=c(8),j=c(11),d=c(4),m=c(7),b=c(9),p=c(16),h=c.n(p),O=function(){var e=Object(u.a)(l.a.mark((function e(){var t,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://movieweb-react.herokuapp.com/peliculas"));case 2:return t=e.sent,e.next=5,t.json();case 5:return c=e.sent,e.abrupt("return",c.peliculas);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=c(12).types,x=function(e){return{type:f.getProximas,payload:e}},g=function(e){return{type:f.getAnimes,payload:e}},v=function(e){return{type:f.getSeries,payload:e}},N=function(e){return{type:f.getNuevas,payload:e}},y=function(e){return{type:f.getSeries,payload:e}},w=function(e){return{type:f.getTrailers,payload:e}},E=function(e){return{type:f.getOneMovie,payload:e}},C=function(e){return{type:f.getBanner,payload:e}},M=function(e,t){return function(){var c=Object(u.a)(l.a.mark((function c(a){var n,r;return l.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,t.imagen=e,c.next=4,fetch("".concat("https://movieweb-react.herokuapp.com/peliculas","/nueva"),{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(t)});case 4:return n=c.sent,c.next=7,n.json();case 7:r=c.sent,a(S(t)),h.a.fire({icon:"success",title:r.msg,showConfirmButton:!1,timer:1500}),c.next=15;break;case 12:c.prev=12,c.t0=c.catch(0),console.log(c.t0);case 15:case"end":return c.stop()}}),c,null,[[0,12]])})));return function(e){return c.apply(this,arguments)}}()},S=function(){return{type:f.createMovie}},I=function(){return{type:f.deleteMovie}},k=function(e,t,c){return function(){var a=Object(u.a)(l.a.mark((function a(n){var r;return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,t.imagen=c,a.next=4,fetch("".concat("https://movieweb-react.herokuapp.com/peliculas","/update/").concat(e),{method:"PUT",headers:{"Content-type":"application/json"},body:JSON.stringify(t)});case 4:return r=a.sent,a.next=7,r.json();case 7:a.sent,h.a.fire({icon:"success",title:"Pelicula Actualizada con Exito",showConfirmButton:!1,timer:1500}),n(A()),a.next=15;break;case 12:a.prev=12,a.t0=a.catch(0),console.log(a.t0);case 15:case"end":return a.stop()}}),a,null,[[0,12]])})));return function(e){return a.apply(this,arguments)}}()},A=function(){return{type:f.updateMovie}},_=c(69);c(480),c(171);_.initializeApp({apiKey:"AIzaSyBNYMhTHzUu_aoNywVm6l_BvnaCXxHlnJQ",authDomain:"movieweb-f4756.firebaseapp.com",databaseURL:"https://movieweb-f4756.firebaseio.com",projectId:"movieweb-f4756",storageBucket:"movieweb-f4756.appspot.com",messagingSenderId:"990976461418",appId:"1:990976461418:web:1058b2ac1a5fa112dfd813"});var T=_.storage(),P=c(48),B=c(5),G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(n.useState)(e),c=Object(j.a)(t,2),a=c[0],r=c[1],s=function(){r(e)},o=function(e){var t=e.target;r(Object(B.a)(Object(B.a)({},a),{},Object(P.a)({},t.name,t.value)))};return[a,o,s]},L={titulo:"",genero:"",director:"",audio:"",elenco:"",imagen:"",plot:"",puntuacion:"",descarga:"",online:"",titulos:"",seccion:""},D=function(){var e=Object(d.b)(),t=Object(n.useRef)(),c=Object(n.useState)(!1),r=Object(j.a)(c,2),s=r[0],o=r[1],i=G(L),m=Object(j.a)(i,3),b=m[0],p=m[1],O=(m[2],t.current,b.titulo),f=b.genero,x=b.director,g=b.audio,v=b.elenco,N=b.imagen,y=b.plot,w=b.puntuacion,E=b.descarga,C=b.online,S=b.titulos,I=b.seccion,k=b.trailerId;return Object(a.jsx)("section",{className:"AdminGrid",children:Object(a.jsxs)("article",{className:"contenedor",children:[Object(a.jsx)("h3",{children:" Formulario Agregar "}),Object(a.jsxs)("form",{onSubmit:function(c){if(c.preventDefault(),""==O)return o(!0);if(""==f)return o(!0);if(""==x)return o(!0);if(""==g)return o(!0);if(""==v)return o(!0);if(""==y)return o(!0);if(""==w)return o(!0);if(""==S)return o(!0);if(""==I)return o(!0);h.a.fire({text:"Espere...",allowOutsideClick:!1,icon:"info"}),h.a.showLoading();var a=T.ref(),n=t.current.files[0];if(void 0===n)h.a.fire({icon:"error",title:"Error",text:"El Campo Foto no puede quedar vacio"});else{var r=n.name,s={contentType:n.type};a.child(r).put(n,s).then((function(e){return e.ref.getDownloadURL()})).then(function(){var t=Object(u.a)(l.a.mark((function t(c){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e(M(c,b));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}},children:[Object(a.jsxs)("section",{className:"row",children:[Object(a.jsx)("article",{className:"col-12 col-md-4 col-lg-4",children:Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{placeholder:s?"* Titulo no puede quedar vacio":"Titulo",className:s?"form-control error":"form-control",onChange:p,type:"text",name:"titulo",value:O})})}),Object(a.jsx)("article",{className:"col-12 col-md-4 col-lg-4",children:Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{placeholder:s?"* Titulos no puede quedar vacio":"Titulos Adicionales",className:s?"form-control error":"form-control",onChange:p,type:"text",name:"titulos",value:S})})}),Object(a.jsx)("article",{className:"col-12 col-md-4 col-lg-4",children:Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{placeholder:s?"* Generos no puede quedar vacio":"Generos Ex:('Accion,Aventura')",className:s?"form-control error":"form-control",onChange:p,type:"text",name:"genero",value:f})})})]}),Object(a.jsxs)("section",{className:"row",children:[Object(a.jsx)("article",{className:"col-12 col-md-4 col-lg-4",children:Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{placeholder:s?"* Director no puede quedar vacio":"director",className:s?"form-control error":"form-control",onChange:p,type:"text",name:"director",value:x})})}),Object(a.jsx)("article",{className:"col-12 col-md-4 col-lg-4",children:Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{placeholder:s?"* Audio no puede quedar vacio":"Tipos de Audio",className:s?"form-control error":"form-control",onChange:p,type:"text",name:"audio",value:g})})}),Object(a.jsx)("article",{className:"col-12 col-md-4 col-lg-4",children:Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{placeholder:s?"* Puntuacion no puede quedar vacio":"Puntuacion o Valoracion",className:s?"form-control error":"form-control",onChange:p,type:"text",name:"puntuacion",value:w})})})]}),Object(a.jsxs)("section",{className:"row",children:[Object(a.jsx)("article",{className:"col-12 col-md-3 col-lg-3",children:Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{placeholder:"Link Para ver online",className:"form-control",onChange:p,type:"text",name:"online",value:C})})}),Object(a.jsx)("article",{className:"col-12 col-md-3 col-lg-3",children:Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{placeholder:"Link de Descarga",className:"form-control",onChange:p,type:"text",name:"descarga",value:E})})}),Object(a.jsx)("article",{className:"col-12 col-md-3 col-lg-3",children:Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{placeholder:"Id de Youtube Para Trailers",onChange:p,type:"text",name:"trailerId",value:k,className:"form-control"})})}),Object(a.jsx)("article",{className:"col-12 col-md-3 col-lg-3",children:Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("input",{id:"actual-btn",ref:t,onChange:p,type:"file",name:"imagen",value:N,hidden:!0}),Object(a.jsx)("label",{className:"btnImg",htmlFor:"actual-btn",children:"Buscar Imagen"})]})})]}),Object(a.jsxs)("section",{className:"row",children:[Object(a.jsx)("div",{className:"form-group col-12 col-md-4 col-lg-4",children:Object(a.jsx)("textarea",{placeholder:s?"* Plot no puede quedar vacio":"Plot o Trama de la Pelicula/Serie/Anime",className:s?"form-control error":"form-control",onChange:p,name:"plot",rows:"5",value:y})}),Object(a.jsx)("div",{className:"form-group col-12 col-md-4 col-lg-4",children:Object(a.jsx)("textarea",{placeholder:s?"* Elenco no puede quedar vacio":"Informacion del Elenco",className:s?"form-control error":"form-control",onChange:p,name:"elenco",rows:"5",value:v})}),Object(a.jsxs)("div",{className:"form-group col-12 col-md-4 col-lg-4",children:[s?Object(a.jsx)("label",{htmlFor:"seccion",className:"text-danger",children:"* Debe Seleccionar Donde Guardar"}):Object(a.jsx)("label",{htmlFor:"seccion",children:"Tabla donde Guardar"}),Object(a.jsxs)("select",{onChange:p,name:"seccion",className:s?"form-control error":"form-control col",value:I,children:[Object(a.jsx)("option",{value:""}),Object(a.jsx)("option",{value:"banner",children:"Banner"}),Object(a.jsx)("option",{value:"nuevas",children:"Nuevas"}),Object(a.jsx)("option",{value:"proximas",children:"Proximamente"}),Object(a.jsx)("option",{value:"series",children:"Series"}),Object(a.jsx)("option",{value:"anime",children:"Animes"}),Object(a.jsx)("option",{value:"mas",children:"Mas"})]})]})]}),Object(a.jsx)("button",{className:"btnAgregar",children:"Agregar"})]})]})})},F={titulo:"",genero:"",director:"",audio:"",elenco:"",imagen:"",plot:"",puntuacion:"",descarga:"",online:"",titulos:"",seccion:""},q=function(e){e.history;var t=Object(b.g)().id,c=Object(d.b)(),r=Object(n.useState)(F),s=Object(j.a)(r,2),o=s[0],i=s[1],m=Object(n.useState)(!1),p=Object(j.a)(m,2),O=p[0],f=p[1],x=Object(n.useState)(""),g=Object(j.a)(x,2),v=g[0],N=g[1],y=Object(n.useRef)(),w=o.titulo,E=o.genero,C=o.director,M=o.audio,S=o.elenco,A=o.imagen,_=o.plot,G=o.puntuacion,L=o.descarga,D=o.online,q=o.titulos,R=o.seccion,V=o.trailerId,U=function(){var e=Object(u.a)(l.a.mark((function e(){var c,a,n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://movieweb-react.herokuapp.com/peliculas","/").concat(t));case 2:return c=e.sent,e.next=5,c.json();case 5:a=e.sent,n=a.pelicula,N(n),r=Object.assign({},n),i(Object(B.a)(Object(B.a)({},r),{},{imagen:""}));case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){U()}),[c]);var J=function(e){var t=e.target;i(Object(B.a)(Object(B.a)({},o),{},Object(P.a)({},t.name,t.value)))};return Object(a.jsx)("section",{className:"AdminGrid",children:Object(a.jsxs)("article",{className:"contenedor",children:[Object(a.jsx)("h3",{children:"Formulario Editar "}),Object(a.jsxs)("div",{className:"row",children:[Object(a.jsxs)("div",{className:"col-12 col-md-4 col-lg-4",children:[Object(a.jsx)("img",{src:v.imagen,alt:v.titulo,className:"img-fluid rounded mb-4"}),Object(a.jsx)("button",{onClick:function(){c(function(e){return function(t){try{h.a.fire({title:"Esta Seguro?",text:"Si es borrado esta accion no se puede revertir!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Si,Borrar!"}).then(function(){var c=Object(u.a)(l.a.mark((function c(a){var n;return l.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:if(!a.isConfirmed){c.next=9;break}return c.next=3,fetch("".concat("https://movieweb-react.herokuapp.com/peliculas","/delete/").concat(e),{method:"DELETE"});case 3:return n=c.sent,c.next=6,n.json();case 6:c.sent,t(I),h.a.fire("Borrado!","Se ha borrado satisfactoriamente.","success");case 9:case"end":return c.stop()}}),c)})));return function(e){return c.apply(this,arguments)}}())}catch(O){console.log(O)}}}(t))},className:"btn btn-primary",children:"Borrar Pelicula"})]}),Object(a.jsx)("div",{className:"col-12 col-md-8 col-lg-8",children:Object(a.jsxs)("form",{onSubmit:function(e){if(""==w)return f(!0);if(""==E)return f(!0);if(""==C)return f(!0);if(""==M)return f(!0);if(""==S)return f(!0);if(""==_)return f(!0);if(""==G)return f(!0);if(""==q)return f(!0);if(""==R)return f(!0);h.a.fire({text:"Espere...",allowOutsideClick:!1,icon:"info"}),h.a.showLoading(),e.preventDefault();var a=T.ref(),n=y.current.files[0];if(void 0!==n){var r=n.name,s={contentType:n.type};a.child(r).put(n,s).then((function(e){return e.ref.getDownloadURL()})).then(function(){var e=Object(u.a)(l.a.mark((function e(a){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c(k(t,o,a));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}else c(k(t,o))},children:[Object(a.jsxs)("section",{className:"row",children:[Object(a.jsx)("article",{className:"col-12 col-md-4 col-lg-4",children:Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{placeholder:O?"* Titulo no puede quedar vacio":"Titulo",className:O?"form-control error":"form-control",onChange:J,type:"text",name:"titulo",value:w})})}),Object(a.jsx)("article",{className:"col-12 col-md-4 col-lg-4",children:Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{placeholder:O?"* Titulos no puede quedar vacio":"Titulos Adicionales",className:O?"form-control error":"form-control",onChange:J,type:"text",name:"titulos",value:q})})}),Object(a.jsx)("article",{className:"col-12 col-md-4 col-lg-4",children:Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{placeholder:O?"* Generos no puede quedar vacio":"Generos Ex:('Accion,Aventura')",className:O?"form-control error":"form-control",onChange:J,type:"text",name:"genero",value:E})})})]}),Object(a.jsxs)("section",{className:"row",children:[Object(a.jsx)("article",{className:"col-12 col-md-4 col-lg-4",children:Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{placeholder:O?"* Director no puede quedar vacio":"director",className:O?"form-control error":"form-control",onChange:J,type:"text",name:"director",value:C})})}),Object(a.jsx)("article",{className:"col-12 col-md-4 col-lg-4",children:Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{placeholder:O?"* Audio no puede quedar vacio":"Tipos de Audio",className:O?"form-control error":"form-control",onChange:J,type:"text",name:"audio",value:M})})}),Object(a.jsx)("article",{className:"col-12 col-md-4 col-lg-4",children:Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{placeholder:O?"* Puntuacion no puede quedar vacio":"Puntuacion o Valoracion",className:O?"form-control error":"form-control",onChange:J,type:"text",name:"puntuacion",value:G})})})]}),Object(a.jsxs)("section",{className:"row",children:[Object(a.jsx)("article",{className:"col-12 col-md-3 col-lg-3",children:Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("input",{id:"actual-btn",ref:y,onChange:J,type:"file",name:"imagen",value:A,hidden:!0}),Object(a.jsx)("label",{className:"btnImg",htmlFor:"actual-btn",children:"Cambiar Imagen"})]})}),Object(a.jsx)("article",{className:"col-12 col-md-3 col-lg-3",children:Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{placeholder:"Link Para ver online",className:"form-control",onChange:J,type:"text",name:"online",value:D})})}),Object(a.jsx)("article",{className:"col-12 col-md-3 col-lg-3",children:Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{placeholder:"Link de Descarga",className:"form-control",onChange:J,type:"text",name:"descarga",value:L})})}),Object(a.jsx)("article",{className:"col-12 col-md-3 col-lg-3",children:Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{placeholder:"Id de Youtube Para Trailers",onChange:J,type:"text",name:"trailerId",value:V,className:"form-control"})})})]}),Object(a.jsxs)("section",{className:"row",children:[Object(a.jsx)("div",{className:"form-group col-12 col-md-4 col-lg-4",children:Object(a.jsx)("textarea",{placeholder:O?"* Plot no puede quedar vacio":"Plot o Trama de la Pelicula/Serie/Anime",className:O?"form-control error":"form-control",onChange:J,name:"plot",rows:"5",value:_})}),Object(a.jsx)("div",{className:"form-group col-12 col-md-4 col-lg-4",children:Object(a.jsx)("textarea",{placeholder:O?"* Elenco no puede quedar vacio":"Informacion del Elenco",className:O?"form-control error":"form-control",onChange:J,name:"elenco",rows:"5",value:S})}),Object(a.jsxs)("div",{className:"form-group col-12 col-md-4 col-lg-4",children:[O?Object(a.jsx)("label",{htmlFor:"seccion",className:"text-danger",children:"* Debe Seleccionar Donde Guardar"}):Object(a.jsx)("label",{htmlFor:"seccion",children:"Tabla donde Guardar"}),Object(a.jsxs)("select",{onChange:J,name:"seccion",className:O?"form-control error":"form-control col",value:R,children:[Object(a.jsx)("option",{value:""}),Object(a.jsx)("option",{value:"banner",children:"Banner"}),Object(a.jsx)("option",{value:"nuevas",children:"Nuevas"}),Object(a.jsx)("option",{value:"proximas",children:"Proximamente"}),Object(a.jsx)("option",{value:"series",children:"Series"}),Object(a.jsx)("option",{value:"anime",children:"Animes"}),Object(a.jsx)("option",{value:"mas",children:"Mas"})]})]})]}),Object(a.jsx)("button",{className:"btnAgregar",children:"Editar"})]})})]})]})})},R=function(){return Object(a.jsxs)(b.d,{children:[Object(a.jsx)(b.b,{exact:!0,path:"/admin/agregar",component:D}),Object(a.jsx)(b.b,{exact:!0,path:"/admin/editar/:id",component:q}),Object(a.jsx)(b.a,{to:"/home"})]})},V=c(12),U=function(e,t){return{type:V.types.login,payload:{uid:e,displayName:t}}},J=function(e){e.history;var t=Object(d.b)(),c=(Object(d.c)((function(e){return e.auth})).uid,G({email:"",password:""})),n=Object(j.a)(c,2),r=n[0],s=n[1],o=r.email,i=r.password;return Object(a.jsx)("section",{className:"login",children:Object(a.jsxs)("article",{className:"container",children:[Object(a.jsx)("h1",{children:"MOVIE WEB"}),Object(a.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(function(e,t){return function(c){_.auth().signInWithEmailAndPassword(e,t).then((function(e){var t=e.user;c(U(t.uid,t.email))})).catch((function(e){console.log(e),h.a.fire("Error",e.message,"error")}))}}(o,i))},children:[Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{htmlFor:"email",children:"Email"}),Object(a.jsx)("input",{type:"email",value:o,onChange:s,name:"email",className:"form-control"})]}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsxs)("div",{className:"formGroup",children:[Object(a.jsx)("label",{htmlFor:"password",children:"Password"}),Object(a.jsx)("input",{type:"password",value:i,onChange:s,name:"password",className:"form-control"})]})}),Object(a.jsx)("button",{className:"btn",children:"Login"})]})]})})},X=function(e){var t=e.banner;return Object(a.jsx)("div",{className:"modal fade",id:"exampleModal",tabIndex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",children:Object(a.jsx)("div",{className:"modal-dialog modal-lg",role:"document",children:Object(a.jsx)("div",{className:"modal-content",children:Object(a.jsxs)("div",{className:"modal-body",children:["`",Object(a.jsx)("iframe",{className:"bannerPlayer",id:"ytplayer",type:"text/html",width:"760",height:"550",src:"https://www.youtube.com/embed/".concat(t[0].trailerId,"?&origin=http://example.com"),frameBorder:"0",allowFullScreen:!0})," ","`",Object(a.jsx)("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close",children:Object(a.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]})})})})},z=(c(176),function(){var e=Object(n.useState)(!0),t=Object(j.a)(e,2),c=t[0],r=t[1],s=Object(d.c)((function(e){return e.auth})).uid;return Object(a.jsxs)("header",{children:[Object(a.jsxs)("div",{style:c?{display:"none"}:{display:"flex"},className:"animate__animated animate__fadeInDown burgerMenu",children:[Object(a.jsx)(m.b,{to:"/home",children:"INICIO"}),Object(a.jsx)("a",{href:"",children:"NOSOTROS"}),Object(a.jsx)("i",{className:"fas fa-ticket-alt"})]}),Object(a.jsx)("nav",{className:"menu",children:Object(a.jsx)("button",{className:"btnBurger",onClick:function(){r(!c)},children:Object(a.jsx)("i",{className:c?"fas fa-bars":"fas fa-times"})})}),Object(a.jsxs)("article",{className:"busqueda",children:[Object(a.jsx)("button",{className:"btnSearch",children:Object(a.jsx)("i",{className:"fas fa-search"})}),s&&Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(m.b,{to:"/admin/agregar",className:"btnAgregar",children:Object(a.jsx)("i",{className:"fas fa-plus"})}),Object(a.jsx)("button",{onClick:function(){_.auth().signOut().then((function(){})).catch((function(e){console.log(e)})),window.location.reload(!1)},className:"btnLogout",children:Object(a.jsx)("i",{className:"fas fa-sign-out-alt"})})]})]})]})}),H=function(e){var t=e.banner;return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("section",{className:"movieInfo",children:[Object(a.jsx)("h2",{children:t[0].titulo}),Object(a.jsx)("p",{className:"detalle",children:t[0].plot}),Object(a.jsxs)("article",{className:"btnBox",children:[Object(a.jsxs)("button",{className:"btnBanner","data-toggle":"modal","data-target":"#exampleModal",children:[Object(a.jsx)("i",{className:"fas fa-play"}),"Reproducir"]}),Object(a.jsxs)(m.b,{to:"/pelicula/".concat(t[0]._id),className:"btnBanner btnInfo",children:[Object(a.jsx)("img",{src:"img/infoIcon.png",alt:""}),"Mas informacion"]})]})]})})},K=function(){var e=Object(n.useState)(!1),t=Object(j.a)(e,2),c=t[0],r=t[1],s=Object(d.c)((function(e){return e.peliculas})).banner,o=Object(d.b)();return Object(n.useEffect)((function(){o(function(){var e=Object(u.a)(l.a.mark((function e(t){var c,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O();case 3:c=e.sent,a=c.filter((function(e){return"banner"===e.seccion})),t(C(a)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}())}),[o]),Object(a.jsx)("section",{className:"banner",onClick:function(){r(!c)},children:s&&Object(a.jsxs)("div",{className:"contenedor",children:[c?Object(a.jsx)(X,{banner:s}):null,Object(a.jsx)(z,{}),Object(a.jsx)(H,{banner:s})]})})},Y=function(){return Object(a.jsxs)("footer",{children:[Object(a.jsxs)("article",{className:"socials",children:[Object(a.jsx)("i",{className:"fa fa-twitter"}),Object(a.jsx)("i",{className:"fa fa-facebook-square"}),Object(a.jsx)("i",{className:"fa fa-instagram"})]}),Object(a.jsx)("p",{className:"autor",children:"Dise\xf1ado por Ernesto Media / Creado por Eidy Trinidad"})]})},Q=function(e){var t=e.id;return Object(a.jsx)(m.b,{to:"/admin/editar/".concat(t),children:"Administrar"})},W=function(e){var t=e.peliculas,c=Object(d.c)((function(e){return e.auth})).uid;return Object(a.jsx)(a.Fragment,{children:t&&t.map((function(e){return Object(a.jsxs)("div",{className:"movie",id:"MovieGrid",children:[Object(a.jsxs)("div",{className:"imagen",children:[Object(a.jsx)("div",{className:"overlay",children:Object(a.jsxs)("div",{className:"info",children:[Object(a.jsx)("p",{children:e.titulo}),Object(a.jsx)(m.b,{to:"/pelicula/".concat(e._id),className:"btnVerMas","pelicula-id":"",children:"VER MAS"})]})}),Object(a.jsx)("img",{src:e.imagen,alt:e.titulo})]}),Object(a.jsxs)("div",{className:"texto",children:[Object(a.jsx)("h4",{className:"titulo",children:e.titulo}),Object(a.jsx)("p",{className:"genero",children:e.genero}),Object(a.jsxs)("div",{className:"puntuacion",children:[Object(a.jsx)("i",{className:"fas fa-star"}),Object(a.jsx)("i",{className:"fas fa-star"}),Object(a.jsx)("i",{className:"fas fa-star"}),Object(a.jsx)("i",{className:"fas fa-star"}),Object(a.jsx)("i",{className:"fas fa-star"}),Object(a.jsx)("p",{children:e.puntuacion})]}),c&&Object(a.jsx)("div",{className:"admin",children:Object(a.jsx)(Q,{id:e._id})})]})]},e._id)}))})},Z=function(){var e=Object(d.b)(),t=Object(d.c)((function(e){return e.peliculas})).peliculas;return Object(n.useEffect)((function(){e(function(){var e=Object(u.a)(l.a.mark((function e(t){var c,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O();case 2:c=e.sent,a=c.filter((function(e){return"anime"===e.seccion})),t(g(a));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]),Object(a.jsx)("article",{className:"MovieGrid",children:t?Object(a.jsx)(W,{peliculas:t}):Object(a.jsxs)("h4",{className:"loading animate__animated animate__flash",children:[Object(a.jsx)("i",{className:"fas fa-spinner fa-spin"})," Loading"]})})},$=function(){var e=Object(d.b)(),t=Object(d.c)((function(e){return e.peliculas})).peliculas;return Object(n.useEffect)((function(){e(function(){var e=Object(u.a)(l.a.mark((function e(t){var c,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O();case 2:c=e.sent,a=c.filter((function(e){return"mas"===e.seccion})),t(y(a));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]),Object(a.jsx)("article",{className:"MovieGrid",children:t?Object(a.jsx)(W,{peliculas:t}):Object(a.jsxs)("h4",{className:"loading animate__animated animate__flash",children:[Object(a.jsx)("i",{className:"fas fa-spinner fa-spin"})," Loading"]})})},ee=function(){var e=Object(d.b)(),t=Object(d.c)((function(e){return e.peliculas})).peliculas;return Object(n.useEffect)((function(){e(function(){var e=Object(u.a)(l.a.mark((function e(t){var c,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O();case 2:c=e.sent,a=c.filter((function(e){return"nuevas"===e.seccion})),t(N(a));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]),Object(a.jsx)("article",{className:"MovieGrid",children:t?Object(a.jsx)(W,{peliculas:t}):Object(a.jsxs)("h4",{className:"loading animate__animated animate__flash",children:[Object(a.jsx)("i",{className:"fas fa-spinner fa-spin"})," Loading"]})})},te=function(){var e=Object(d.b)(),t=Object(d.c)((function(e){return e.peliculas})).peliculas;return Object(n.useEffect)((function(){e(function(){var e=Object(u.a)(l.a.mark((function e(t){var c,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O();case 2:c=e.sent,a=c.filter((function(e){return"proximas"===e.seccion})),t(x(a));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]),Object(a.jsx)("article",{className:"MovieGrid",children:t?t.map((function(e){return Object(a.jsxs)("div",{className:"movie",children:[Object(a.jsxs)("div",{className:"imagen",children:[Object(a.jsx)("div",{className:"overlay",children:Object(a.jsxs)("div",{className:"info",children:[Object(a.jsx)("p",{children:e.titulo}),Object(a.jsx)(m.b,{to:"/pelicula/".concat(e._id),className:"btnVerMas",children:"VER MAS"})]})}),Object(a.jsx)("img",{src:e.imagen,alt:"Proximamente"})]}),Object(a.jsxs)("div",{className:"texto",children:[Object(a.jsx)("h4",{className:"titulo",children:e.titulo}),Object(a.jsx)("p",{className:"genero",children:e.genero}),Object(a.jsx)("p",{children:Object(a.jsx)("b",{children:"PROXIMAMENTE"})})]})]},e._id)})):Object(a.jsxs)("h4",{className:"loading animate__animated animate__flash",children:[Object(a.jsx)("i",{className:"fas fa-spinner fa-spin"})," Loading"]})})},ce=function(){var e=Object(d.b)(),t=Object(d.c)((function(e){return e.peliculas})).peliculas;return Object(n.useEffect)((function(){e(function(){var e=Object(u.a)(l.a.mark((function e(t){var c,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O();case 2:c=e.sent,a=c.filter((function(e){return"series"===e.seccion})),t(v(a));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]),Object(a.jsx)("article",{className:"MovieGrid",children:t?Object(a.jsx)(W,{peliculas:t}):Object(a.jsxs)("h4",{className:"loading animate__animated animate__flash",children:[Object(a.jsx)("i",{className:"fas fa-spinner fa-spin"})," Loading"]})})},ae=function(e){var t=e.trailerId;return Object(a.jsx)("div",{className:"playerSection",children:Object(a.jsx)("div",{className:"player",id:"player",children:Object(a.jsx)("iframe",{title:"trailerPlayer",id:"ytplayer",type:"text/html",width:"550",height:"350",src:"https://www.youtube.com/embed/".concat(t,"?&origin=http://example.com"),frameBorder:"0",allowFullScreen:!0})})})},ne=function(e){var t=e.trailers,c=e.setTrailerID;return Object(a.jsx)("div",{className:"trailers",children:t.map((function(e){return Object(a.jsxs)("div",{className:"trailer",children:[Object(a.jsx)("img",{src:e.imagen,alt:e.titulo}),Object(a.jsx)("a",{onClick:function(){return c(e.trailerId)},href:"#player",className:"btnVerTrailer",children:"Ver Trailer"})]},e._id)}))})},re=function(){var e=Object(d.b)(),t=Object(d.c)((function(e){return e.peliculas})).trailers,c=Object(n.useState)("KK8FHdFluOQ"),r=Object(j.a)(c,2),s=r[0],o=r[1];return Object(n.useEffect)((function(){e(function(){var e=Object(u.a)(l.a.mark((function e(t){var c,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O();case 3:c=e.sent,a=c.filter((function(e){return e.trailerId})),t(w(a)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}())}),[e,s]),Object(a.jsx)("article",{className:"MovieGrid",children:t&&Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(ae,{trailerId:s}),Object(a.jsx)(ne,{trailers:t,setTrailerID:o})]})})},se=function(){return Object(a.jsx)("main",{children:Object(a.jsxs)("section",{className:"contenedor",children:[Object(a.jsxs)("article",{className:"MenuBotones",children:[Object(a.jsx)(m.c,{to:"/home/nuevos",children:"NUEVO"}),Object(a.jsx)(m.c,{to:"/home/proximamente",children:"PROXIMAMENTE"}),Object(a.jsx)(m.c,{to:"/home/anime",children:"ANIME"}),Object(a.jsx)(m.c,{to:"/home/series",children:"SERIES"}),Object(a.jsx)(m.c,{to:"/home/trailers",children:"TRAILERS"}),Object(a.jsx)(m.c,{to:"/home/mas",children:"MAS"})]}),Object(a.jsx)("hr",{}),Object(a.jsxs)(b.d,{children:[Object(a.jsx)(b.b,{exact:!0,path:"/home/nuevos",component:ee}),Object(a.jsx)(b.b,{exact:!0,path:"/home/proximamente",component:te}),Object(a.jsx)(b.b,{exact:!0,path:"/home/anime",component:Z}),Object(a.jsx)(b.b,{exact:!0,path:"/home/series",component:ce}),Object(a.jsx)(b.b,{exact:!0,path:"/home/trailers",component:re}),Object(a.jsx)(b.b,{exact:!0,path:"/home/mas",component:$}),Object(a.jsx)(b.a,{to:"/home/nuevos"})]}),Object(a.jsx)("div",{className:"btnBox",children:Object(a.jsx)("button",{className:"btnMas",children:Object(a.jsx)("img",{src:"/images/Dots_Mas.png",alt:"mas"})})})]})})},oe=function(){var e=Object(b.g)().id,t=Object(d.b)(),c=Object(d.c)((function(e){return e.peliculas})).pelicula;return Object(n.useEffect)((function(){t(function(e){return function(){var t=Object(u.a)(l.a.mark((function t(c){var a,n,r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat("https://movieweb-react.herokuapp.com/peliculas","/").concat(e));case 2:return a=t.sent,t.next=5,a.json();case 5:n=t.sent,r=n.pelicula,c(E(r));case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(e)),console.log("PeliculaDetails",c)}),[t,e]),Object(a.jsx)("main",{children:c&&Object(a.jsxs)("section",{className:"contenedor",children:[Object(a.jsx)("h3",{className:"tituloPelicula",children:c.titulo}),Object(a.jsxs)("article",{className:"detallePelicula",children:[Object(a.jsx)("div",{className:"portada",children:Object(a.jsx)("img",{src:c.imagen,alt:c.titulo})}),Object(a.jsxs)("div",{className:"texto",children:[Object(a.jsx)("p",{className:"plot",children:c.plot}),Object(a.jsxs)("p",{className:"titulo",children:[Object(a.jsx)("b",{children:"T\xedtulos"}),":",c.titulos]}),Object(a.jsxs)("p",{className:"generos",children:[Object(a.jsx)("b",{children:"G\xe9neros"}),":",c.genero,"r"]}),Object(a.jsxs)("p",{className:"audio",children:[Object(a.jsx)("b",{children:"Audio:"}),c.audio]}),Object(a.jsxs)("p",{className:"director",children:[Object(a.jsx)("b",{children:"Director"}),":",c.director]}),Object(a.jsxs)("p",{className:"elenco",children:[Object(a.jsx)("b",{children:"Elenco: "}),c.elenco]})]})]}),Object(a.jsx)("article",{className:"links",children:""===c.descarga||void 0===c.descarga?Object(a.jsx)("h5",{className:"mt-5 text-center",children:"No disponible para descargas por el momento"}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h3",{children:"VER ONLINE/DESCARGAR"}),Object(a.jsx)("a",{href:c.online,target:"_blank",children:Object(a.jsx)("img",{src:"/images/veronline.png",alt:"ver online"})}),Object(a.jsx)("a",{href:c.descarga,target:"_blank",children:Object(a.jsx)("img",{src:"/images/descargar.png",alt:"descargar"})})]})})]})})},ie=function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(K,{}),Object(a.jsxs)(b.d,{children:[Object(a.jsx)(b.b,{exact:!0,path:"/pelicula/:id",component:oe}),Object(a.jsx)(b.b,{path:"/",component:se})]}),Object(a.jsx)(Y,{})]})},le=c(70),ue=function(e){var t=e.isLoggedIn,c=e.component,n=Object(le.a)(e,["isLoggedIn","component"]);return Object(a.jsx)(b.b,Object(B.a)(Object(B.a)({},n),{},{component:function(e){return t?Object(a.jsx)(b.a,{to:"/"}):Object(a.jsx)(c,Object(B.a)({},e))}}))},je=function(e){var t=e.isLoggedIn,c=e.component,n=Object(le.a)(e,["isLoggedIn","component"]);return localStorage.setItem("lastPath",n.location.pathname),Object(a.jsx)(b.b,Object(B.a)(Object(B.a)({},n),{},{component:function(e){return t?Object(a.jsx)(c,Object(B.a)({},e)):Object(a.jsx)(b.a,{to:"/login"})}}))};var de=function(){var e=Object(d.b)(),t=Object(n.useState)(!1),c=Object(j.a)(t,2),r=c[0],s=c[1];return Object(n.useEffect)((function(){_.auth().onAuthStateChanged(function(){var t=Object(u.a)(l.a.mark((function t(c){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:(null===c||void 0===c?void 0:c.uid)?(e(U(c.uid,c.displayName)),s(!0)):s(!1);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}),[e,s]),Object(a.jsx)(m.a,{children:Object(a.jsxs)(b.d,{children:[Object(a.jsx)(je,{path:"/admin",component:R,isLoggedIn:r}),Object(a.jsx)(ue,{path:"/login",component:J,isLoggedIn:r}),Object(a.jsx)(b.b,{path:"/",component:ie})]})})},me=c(36),be=c(158),pe=Object(me.c)({peliculas:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case V.types.getAllMovies:case V.types.getProximas:case V.types.getAnimes:case V.types.getSeries:case V.types.getNuevas:case V.types.getMas:return Object(B.a)(Object(B.a)({},e),{},{peliculas:t.payload});case V.types.getTrailers:return Object(B.a)(Object(B.a)({},e),{},{trailers:t.payload});case V.types.getOneMovie:return Object(B.a)(Object(B.a)({},e),{},{pelicula:t.payload});case V.types.getBanner:return Object(B.a)(Object(B.a)({},e),{},{banner:t.payload});case V.types.createMovie:case V.types.deleteMovie:return Object(B.a)({},e);default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case V.types.login:return{uid:t.payload.uid,name:t.payload.displayName};case V.types.logout:return{};default:return e}}}),he="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||me.d,Oe=Object(me.e)(pe,he(Object(me.a)(be.a)));var fe=function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(d.a,{store:Oe,children:Object(a.jsx)(de,{})})})};o.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(fe,{})}),document.getElementById("root"))}},[[479,1,2]]]);
//# sourceMappingURL=main.32945587.chunk.js.map