(this["webpackJsonpchat-app"]=this["webpackJsonpchat-app"]||[]).push([[0],{111:function(e,a,t){e.exports=t(153)},116:function(e,a,t){},144:function(e,a){},153:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(10),o=t.n(c),l=t(101),s=(t(116),t(8)),i=t(195),m=t(12),p=t(98),u=t.n(p),d=t(212),g=t(198),h=t(200),f=t(215),b=t(59),E=t(210),v=t(202),x=Object(i.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:"red",textTransform:"capitalize"},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}})),j=function(e){var a=Object(n.useState)(""),t=Object(s.a)(a,2),c=t[0],o=t[1],l=x(e),i=Object(m.f)();return Object(n.useEffect)((function(){e.setsocket(u()())}),[]),Object(n.useEffect)((function(){null!==e.socket&&void 0!==localStorage.getItem("p-react-chat")&&null!==localStorage.getItem("p-react-chat")&&(o(localStorage.getItem("p-react-chat").name),i.push("/chat"))}),[e.socket]),r.a.createElement(g.a,{component:"main",maxWidth:"xs"},r.a.createElement(h.a,null),r.a.createElement("div",{className:l.paper},r.a.createElement(f.a,{className:l.avatar},c.length>0?c.charAt(0):"?"),r.a.createElement(b.a,{component:"h1",variant:"h5"},"Sign in"),r.a.createElement("form",{className:l.form,onSubmit:function(a){if(a.preventDefault(),null!==e.socket){var t={};t.name=c,t.id=Object(d.a)(),localStorage.setItem("p-react-chat",JSON.stringify(t)),i.push("/chat")}}},r.a.createElement(E.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,label:"Enter Name",name:"name",autoFocus:!0,value:c,onChange:function(e){return o(e.target.value)}}),r.a.createElement(v.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:l.submit},"Login"))))},k=t(48),O=t(6),y=t(31),N=t(207),w=t(203),S=t(214),C=t(213),I=t(209),B=t(201),W=t(204),M=t(205),A=t(206),U=t(99),J=t.n(U),R=t(208),T=t(15),G=t(100),P=t.n(G),_=t(33),z=Object(_.b)({key:"userState",default:{messages:[],input:"",user:[]}}),D=Object(i.a)((function(e){return{Wrapper:{display:"flex",marginBottom:"8px"},Wrapper1:{display:"flex",marginBottom:"8px"},message1Arrow:{width:0,height:0,borderTop:"0px solid transparent",borderBottom:"10px solid transparent",borderRight:"10px solid rgba(0, 0, 255, 0.103)"},message2Arrow:{width:0,height:0,borderTop:"0px solid transparent",borderBottom:"10px solid transparent",borderLeft:"10px solid rgba(0, 128, 0, 0.137)"},Message:{padding:"5px",backgroundColor:"rgba(0, 0, 255, 0.103)"},Message1:{padding:"5px",backgroundColor:"rgba(0, 128, 0, 0.137)"},User:{fontWeight:"500",fontSize:"16px"}}})),F=function(e){var a=D(e),t=r.a.createElement("div",{className:a.Wrapper},r.a.createElement("div",{className:a.message1Arrow}),r.a.createElement("div",{className:a.Message},r.a.createElement("div",{className:a.User},e.name),r.a.createElement("div",{className:a.Chat},e.children)));return e.user&&(t=r.a.createElement("div",{className:a.Wrapper1},r.a.createElement("div",{className:a.Message1},r.a.createElement("div",{className:a.User},e.name),r.a.createElement("div",{className:a.Chat},e.children)),r.a.createElement("div",{className:a.message2Arrow}))),t},L=(Object(i.a)((function(e){return{Joined:{display:"flex",justifyContent:"center"},User:{padding:"7px 15px",borderRadius:"15px",backgroundColor:"rgba(128, 128, 128, 0.116)",marginBottom:"8px"}}})),Object(i.a)((function(e){return{root:{display:"flex",height:"100%"},drawer:Object(y.a)({},e.breakpoints.up("sm"),{width:320,flexShrink:0}),appBar:Object(y.a)({},e.breakpoints.up("sm"),{width:"calc(100% - ".concat(320,"px)"),marginLeft:320}),menuButton:Object(y.a)({marginRight:e.spacing(2)},e.breakpoints.up("sm"),{display:"none"}),toolbar:e.mixins.toolbar,drawerPaper:{width:320},content:{flexGrow:1,position:"relative"},centerContent:{display:"flex",justifyContent:"center",alignItems:"center",color:e.palette.primary.main},general:{backgroundColor:"purple"},users:{backgroundColor:e.palette.secondary.main,textTransform:"capitalize"},chat:{position:"absolute",left:0,right:0,bottom:"5px",height:"50px",padding:"0 15px"},inputFlex:{display:"flex",height:"100%",justifyContent:"space-between"},Input:{width:"calc(100% - 60px)",padding:"0 12.5px",backgroundColor:"rgb(230 230 230)",borderRadius:"25px"},inputIcon:{width:"35px",textAlign:"center",padding:"5px"},SendButton:{height:"100%",backgroundColor:e.palette.primary.main,border:"none",borderRadius:"50%",padding:"7px",width:"50px"},Message:{padding:"0 15px 5px 15px"}}})));var Y=function(e){var a=e.window,t=L(),c=Object(T.a)(),o=r.a.useState(!1),l=Object(s.a)(o,2),i=l[0],p=l[1],u=Object(_.c)(z),d=Object(s.a)(u,2),g=d[0],v=d[1],x=Object(m.f)(),j=function(){p(!i)};Object(n.useEffect)((function(){if(null==e.socket||void 0===localStorage.getItem("p-react-chat")&&null===localStorage.getItem("p-react-chat"))x.push("/");else{var a=JSON.parse(localStorage.getItem("p-react-chat"));e.socket.emit("user_join",{userName:a.name,id:a.id}),e.socket.on("user_join",(function(e){var a=JSON.parse(localStorage.getItem("p-react-chat")),t=a.id,n=e.users;console.log(a,t,e,n);var r=[a];n.map((function(e){e.id!==t&&r.push(e)})),console.log("USERS ",r),v((function(e){return Object(O.a)(Object(O.a)({},e),{},{user:r})}))})),e.socket.on("user_joined",(function(e){console.log("User joined ",e)})),e.socket.on("on_message",(function(e){v((function(a){var t=Object(k.a)(a.messages);return t.push(e),Object(O.a)(Object(O.a)({},a),{},{messages:t})}))}))}}),[e.socket]);var y=function(){if(""!==g.input){e.socket.emit("message",{msg:g.input,name:JSON.parse(localStorage.getItem("p-react-chat")).name});var a=Object(k.a)(g.messages);a.push({name:"You",msg:g.input}),v((function(e){return Object(O.a)(Object(O.a)({},e),{},{input:"",messages:a})}))}},U=g.messages.map((function(e,a){return"You"===e.name?r.a.createElement("div",{key:a,style:{display:"flex",width:"100%",justifyContent:"flex-end"}},r.a.createElement(F,{user:!0,name:"You"},e.msg)):r.a.createElement(F,{key:a,name:e.name},e.msg)})),G=r.a.createElement("div",null,r.a.createElement("div",{className:[t.centerContent,t.toolbar].join(" ")},r.a.createElement(b.a,{variant:"h5",component:"h5"}," React Chat")),r.a.createElement(w.a,null),r.a.createElement(B.a,null,r.a.createElement(W.a,{button:!0},r.a.createElement(M.a,null,r.a.createElement(f.a,{className:t.general},"G")),r.a.createElement(A.a,{primary:"General"}))),r.a.createElement(w.a,null),r.a.createElement(B.a,null,g.user.map((function(e,a){return r.a.createElement(W.a,{button:!0,key:e},r.a.createElement(M.a,null,r.a.createElement(f.a,{className:t.users},e.name.charAt(0))),r.a.createElement(A.a,{primary:e.name}))})))),D=void 0!==a?function(){return a().document.body}:void 0;return r.a.createElement("div",{className:t.root},r.a.createElement(h.a,null),r.a.createElement(N.a,{position:"fixed",className:t.appBar},r.a.createElement(R.a,null,r.a.createElement(I.a,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:j,className:t.menuButton},r.a.createElement(J.a,null)),r.a.createElement(b.a,{variant:"h6",noWrap:!0},"General"))),r.a.createElement("nav",{className:t.drawer,"aria-label":"mailbox folders"},r.a.createElement(C.a,{smUp:!0,implementation:"css"},r.a.createElement(S.a,{container:D,variant:"temporary",anchor:"rtl"===c.direction?"right":"left",open:i,onClose:j,classes:{paper:t.drawerPaper},ModalProps:{keepMounted:!0}},G)),r.a.createElement(C.a,{xsDown:!0,implementation:"css"},r.a.createElement(S.a,{classes:{paper:t.drawerPaper},variant:"permanent",open:!0},G))),r.a.createElement("main",{className:t.content},r.a.createElement("div",{className:t.toolbar}),r.a.createElement("div",{className:t.Message},U),r.a.createElement("div",{className:t.chat},r.a.createElement("div",{className:t.inputFlex},r.a.createElement("div",{className:t.Input},r.a.createElement(E.a,{type:"text",fullWidth:!0,style:{padding:"10px"},onChange:function(e){return v((function(a){return Object(O.a)(Object(O.a)({},a),{},{input:e.target.value})}))},value:g.input,onKeyUp:function(e){13==e.keyCode&&y()}})),r.a.createElement("button",{className:t.SendButton,onClick:y},r.a.createElement(P.a,{style:{color:"white"}}))))))};var q=function(){var e=Object(n.useState)(null),a=Object(s.a)(e,2),t=a[0],c=a[1],o=function(e){c(e)};return r.a.createElement("div",{className:"App"},r.a.createElement(m.c,null,r.a.createElement(m.a,{path:"/",exact:!0,render:function(){return r.a.createElement(j,{socket:t,setsocket:o})}}),r.a.createElement(m.a,{path:"/chat",exact:!0,render:function(){return r.a.createElement(Y,{socket:t})}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(l.a,null,r.a.createElement(_.a,null,r.a.createElement(q,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[111,1,2]]]);
//# sourceMappingURL=main.3b040ee3.chunk.js.map