(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{199:function(e,t,a){e.exports=a(399)},204:function(e,t,a){},399:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(195),i=a.n(c),l=(a(204),a(17)),o=a(18),s=a(20),m=a(19),u=a(21),h=a(402),d=a(404),p=a(400),E=a(211),f=a(401),b=a(8),g=Object(b.b)(null,function(e){return{signOut:function(){e(function(e,t,a){(0,a.getFirebase)().auth().signOut().then(function(){e({type:"SIGNOUT_SUCCESS"})})})}}})(function(e){return r.a.createElement("ul",{className:"right"},r.a.createElement("li",null,r.a.createElement(f.a,{to:"/create"},"New Project")),r.a.createElement("li",null,r.a.createElement("a",{onClick:e.signOut},"Log Out")),r.a.createElement("li",null,r.a.createElement(f.a,{to:"/",className:"btn btn-floating pink lighten-1"},e.profile.initials)))}),j=function(){return r.a.createElement("ul",{className:"right"},r.a.createElement("li",null,r.a.createElement(f.a,{to:"/signup"},"Sign Up")),r.a.createElement("li",null,r.a.createElement(f.a,{to:"/signin"},"Log In")))},N=Object(b.b)(function(e){return{auth:e.firebase.auth,profile:e.firebase.profile}})(function(e){var t=e.auth,a=e.profile,n=t.uid?r.a.createElement(g,{profile:a}):r.a.createElement(j,null);return r.a.createElement("nav",{className:"nav-wrapper grey darken-3"},r.a.createElement("div",{className:"container"},r.a.createElement(E.a,{to:"/",className:"brand-logo"},"JojiPlan"),n))}),v=a(42),O=a.n(v),y=function(e){var t=e.notifications,a=t?t.map(function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("span",{className:"pink-text"},e.user," "),r.a.createElement("span",null,e.content),r.a.createElement("div",{className:"grey-text note-date"},O()(e.time.toDate()).fromNow()))}):null;return r.a.createElement("div",{className:"section"},r.a.createElement("div",{className:"card z-depth-0"},r.a.createElement("div",{className:"card-content"},r.a.createElement("span",null,"Notifications"),r.a.createElement("ul",{className:"notifications"},a))))},C=function(e){var t=e.project;return r.a.createElement("div",{className:"card depth-0 project-summary"},r.a.createElement("div",{className:"card-content grey-text text-darken-3"},r.a.createElement("span",{className:"card-title"},t.title),r.a.createElement("p",{className:"grey-text"},"Posted by ",t.authorFirstName," ",t.authorLastName),r.a.createElement("p",{className:"grey-text"},O()(t.createdAt.toDate()).calendar())))},S=function(e){var t=e.projects,a=t?t.map(function(e){return r.a.createElement(E.a,{to:"/project/"+e.id,key:e.id},r.a.createElement(C,{project:e}))}):r.a.createElement("div",null,"No Projects!");return r.a.createElement("div",{className:"section project-list"},a)},w=a(23),R=a(12),F=a(403),x=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.projects,a=e.auth,n=e.notifications;return a.uid?r.a.createElement("div",{className:"container dashboard"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12 m6"},r.a.createElement(S,{projects:t})),r.a.createElement("div",{className:"col s12 m5 offset-m1"},r.a.createElement(y,{notifications:n})))):r.a.createElement(F.a,{to:"/signin"})}}]),t}(n.Component),I=Object(R.d)(Object(b.b)(function(e){return{projects:e.firestore.ordered.projects,auth:e.firebase.auth,notifications:e.firestore.ordered.notifications}}),Object(w.firestoreConnect)([{collection:"projects",orderBy:["createdAt","desc"]},{collection:"notifications",limit:3,orderBy:["time","desc"]}]))(x),P=Object(R.d)(Object(b.b)(function(e,t){var a=t.match.params.id,n=e.firestore.data.projects;return{project:n?n[a]:null,auth:e.firebase.auth}}),Object(w.firestoreConnect)([{collection:"projects"}]))(function(e){e.match.params.id;var t=e.project;return e.auth.uid?t?r.a.createElement("div",{className:"container section project-details"},r.a.createElement("div",{className:"card z-depth-0"},r.a.createElement("div",{className:"card-content"},r.a.createElement("span",{className:"card-title"},t.title),r.a.createElement("p",{className:"projectContent"},t.content),r.a.createElement("div",{className:"card-action grey lighten-4 grey-text"},r.a.createElement("div",null,"Posted by ",t.authorFirstName," ",t.authorLastName),r.a.createElement("div",null,O()(t.createdAt.toDate()).format("LLLL")))))):r.a.createElement("div",{className:"container center"},r.a.createElement("p",null,"Loading project...")):r.a.createElement(F.a,{to:"/signin"})}),U=a(27),k=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",password:""},a.handleChange=function(e){a.setState(Object(U.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),a.props.signIn(a.state)},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.authError;return e.auth.uid?r.a.createElement(F.a,{to:"/"}):r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:this.handleSubmit,className:"white"},r.a.createElement("h5",{className:"grey-text text-daren-3"},"Sign In"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{type:"email",id:"email",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",id:"password",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn pink lighten-1 z-depth-0"},"Login"),r.a.createElement("div",{className:"red-text center"},t?r.a.createElement("p",null,t):null))))}}]),t}(n.Component),L=Object(b.b)(function(e){return{authError:e.auth.authError,auth:e.firebase.auth}},function(e){return{signIn:function(t){var a;e((a=t,function(e,t,n){(0,n.getFirebase)().auth().signInWithEmailAndPassword(a.email,a.password).then(function(){e({type:"LOGIN_SUCCESS"})}).catch(function(t){e({type:"LOGIN_ERROR",err:t})})}))}}})(k),A=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",password:"",firstName:"",lastName:""},a.handleChange=function(e){a.setState(Object(U.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),a.props.signUp(a.state)},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.auth,a=e.authError;return t.uid?r.a.createElement(F.a,{to:"/"}):r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:this.handleSubmit,className:"white"},r.a.createElement("h5",{className:"grey-text text-daren-3"},"Sign Up"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{type:"email",id:"email",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",id:"password",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"firstName"},"First Name"),r.a.createElement("input",{type:"text",id:"firstName",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"lastName"},"Last Name"),r.a.createElement("input",{type:"text",id:"lastName",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn pink lighten-1 z-depth-0"},"Sign Up"),r.a.createElement("div",{className:"red-text"},a?r.a.createElement("p",null,a):null))))}}]),t}(n.Component),_=Object(b.b)(function(e){return{auth:e.firebase.auth,authError:e.auth.authError}},function(e){return{signUp:function(t){e(function(e){return function(t,a,n){var r=n.getFirebase,c=n.getFirestore,i=r(),l=c();i.auth().createUserWithEmailAndPassword(e.email,e.password).then(function(t){return l.collection("users").doc(t.user.uid).set({firstName:e.firstName,lastName:e.lastName,initials:e.firstName[0]+e.lastName[0]})}).then(function(){t({type:"SIGNUP_SUCCESS"})}).catch(function(e){t({type:"SIGNUP_ERROR",err:e})})}}(t))}}})(A),T=a(36),G=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={title:"",content:""},a.handleChange=function(e){a.setState(Object(U.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),a.props.createProject(a.state),a.props.history.push("/")},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return this.props.auth.uid?r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:this.handleSubmit,className:"white"},r.a.createElement("h5",{className:"grey-text text-daren-3"},"Create Project"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"title"},"Title"),r.a.createElement("input",{type:"text",id:"title",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"content"},"Content"),r.a.createElement("textarea",{className:"materialize-textarea",id:"content",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn pink lighten-1 z-depth-0"},"Create")))):r.a.createElement(F.a,{to:"/signin"})}}]),t}(n.Component),D=Object(b.b)(function(e){return{auth:e.firebase.auth}},function(e){return{createProject:function(t){e(function(e){return function(t,a,n){n.getFirebase;var r=(0,n.getFirestore)(),c=a().firebase.profile,i=a().firebase.auth.uid;r.collection("projects").add(Object(T.a)({},e,{authorFirstName:c.firstName,authorLastName:c.lastName,authorId:i,createdAt:new Date})).then(function(){t({type:"CREATE_PROJECT",project:e})}).catch(function(e){t({type:"CREATE_PROJECT_ERROR",err:e})})}}(t))}}})(G),z=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(h.a,null,r.a.createElement("div",null,r.a.createElement(N,null),r.a.createElement(d.a,null,r.a.createElement(p.a,{exact:!0,path:"/",component:I}),r.a.createElement(p.a,{path:"/project/:id",component:P}),r.a.createElement(p.a,{path:"/signin",component:L}),r.a.createElement(p.a,{path:"/signup",component:_}),r.a.createElement(p.a,{path:"/create",component:D}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var J={authError:null},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_ERROR":return console.log("login error"),Object(T.a)({},e,{authError:"Login failed"});case"LOGIN_SUCCESS":return console.log("login success"),Object(T.a)({},e,{authError:null});case"SIGNOUT_SUCCESS":return console.log("signout success"),e;case"SIGNUP_SUCCESS":return console.log("signup success"),Object(T.a)({},e,{authError:null});case"SIGNUP_ERROR":return console.log("signup error"),Object(T.a)({},e,{authError:t.err.message});default:return e}},W={projects:[{id:"1",title:"help me find peach",content:"blah blah blah"},{id:"2",title:"collect all the stars",content:"blah blah blah"},{id:"3",title:"egg hunt with yoshi",content:"blah blah blah"}]},Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;return"CREATE_PROJECT"===t.type?(console.log(t.project),e):"CREATE_PROJECT_ERROR"===t.type?(console.log("create project error",t.err),e):e},q=a(56),K=Object(R.c)({auth:B,project:Q,firestore:q.firestoreReducer,firebase:w.firebaseReducer}),M=a(198),X=a(82),$=a.n(X);a(392),a(397);$.a.initializeApp({apiKey:"AIzaSyDQwj4LMQPXhUCNji4EF3mqfFdSmmIUdes",authDomain:"jojiplan.firebaseapp.com",databaseURL:"https://jojiplan.firebaseio.com",projectId:"jojiplan",storageBucket:"jojiplan.appspot.com",messagingSenderId:"802566755793"}),$.a.firestore().settings({timestampsInSnapshots:!0});var H=$.a,V=Object(R.e)(K,Object(R.d)(Object(R.a)(M.a.withExtraArgument({getFirebase:w.getFirebase,getFirestore:q.getFirestore})),Object(q.reduxFirestore)(H),Object(w.reactReduxFirebase)(H,{useFirestoreForProfile:!0,userProfile:"users",attachAuthIsReady:!0})));V.firebaseAuthIsReady.then(function(){i.a.render(r.a.createElement(b.a,{store:V},r.a.createElement(z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})})}},[[199,2,1]]]);
//# sourceMappingURL=main.86baf410.chunk.js.map