(this.webpackJsonpsocial=this.webpackJsonpsocial||[]).push([[0],{106:function(e,t,n){"use strict";t.a=n.p+"static/media/user.96e310a6.png"},127:function(e,t,n){"use strict";n.d(t,"b",(function(){return s}));var r=n(41),a=n(3),c="SEND_MESSAGE",o={dialogs:[{id:1,name:"Dimych"},{id:2,name:"Andrew"},{id:3,name:"Sveta"},{id:4,name:"Sasha"},{id:5,name:"Viktor"},{id:6,name:"Valera"}],messages:[{id:1,message:"Hi"},{id:2,message:"How is your it-kamasutra?"},{id:3,message:"Yo"},{id:4,message:"Yo"},{id:5,message:"Yo"}]},s=function(e){return{type:c,newMessageBody:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c:var n=t.newMessageBody;return Object(a.a)(Object(a.a)({},e),{},{messages:[].concat(Object(r.a)(e.messages),[{id:6,message:n}])});default:return e}}},13:function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return s}));var r=n(131),a=r.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"ebcfee80-0a62-4c97-abac-67d1bcd076d6"}}),c={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return a.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return a.post("follow/".concat(e))},unfollow:function(e){return a.delete("follow/".concat(e))},getProfile:function(e){return console.warn("Obsolete method. Please profileAPI object."),o.getProfile(e)}},o={getProfile:function(e){return a.get("profile/"+e)},getStatus:function(e){return a.get("profile/status/"+e)},updateStatus:function(e){return a.put("profile/status",{status:e})},savePhoto:function(e){var t=new FormData;return t.append("image",e),a.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}})}},s={me:function(){return a.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return a.post("auth/login",{email:e,password:t,rememberMe:n})},logout:function(){return a.delete("auth/login")}}},133:function(e,t,n){e.exports={userPhoto:"users_userPhoto__1IlJV"}},166:function(e,t,n){},167:function(e,t,n){},193:function(e,t,n){},20:function(e,t,n){e.exports={nav:"Navbar_nav__12BLH",item:"Navbar_item__2qhCY",activeLink:"Navbar_activeLink__2_ewL"}},293:function(e,t,n){"use strict";n.r(t);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var r=n(0),a=n.n(r),c=n(66),o=n.n(c),s=(n(166),n(36)),i=n(37),u=n(39),l=n(38),d=(n(167),n(20)),f=n.n(d),j=n(22),p=n(1),b=function(){return Object(p.jsxs)("nav",{className:f.a.nav,children:[Object(p.jsx)("div",{className:f.a.item,children:Object(p.jsx)(j.b,{to:"/profile",activeClassName:f.a.activeLink,children:"Profile"})}),Object(p.jsx)("div",{className:"".concat(f.a.item," ").concat(f.a.active),children:Object(p.jsx)(j.b,{to:"/dialogs",activeClassName:f.a.activeLink,children:"Messages"})}),Object(p.jsx)("div",{className:"".concat(f.a.item," ").concat(f.a.active),children:Object(p.jsx)(j.b,{to:"/users",activeClassName:f.a.activeLink,children:"Users"})}),Object(p.jsx)("div",{className:f.a.item,children:Object(p.jsx)("a",{children:"News"})}),Object(p.jsx)("div",{className:f.a.item,children:Object(p.jsx)("a",{children:"Music"})}),Object(p.jsx)("div",{className:f.a.item,children:Object(p.jsx)("a",{children:"Settings"})})]})},h=n(11),g=n(17),O=n(9),m=n.n(O),v=n(15),x=n(41),w=n(3),P=n(13),_=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(w.a)(Object(w.a)({},e),r):e}))},y="FOLLOW",S="UNFOLLOW",C="SET_USERS",k="SET_CURRENT_PAGE",E="SET_TOTAL_USERS_COUNT",I="TOGGLE_IS_FETCHING",N="TOGGLE_IS_FOLLOWING_PROGRESS",T={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[],fake:10},L=function(e){return{type:y,userId:e}},U=function(e){return{type:S,userId:e}},A=function(e){return{type:k,currentPage:e}},F=function(e){return{type:I,isFetching:e}},z=function(e,t){return{type:N,isFetching:e,userId:t}},D=function(){var e=Object(v.a)(m.a.mark((function e(t,n,r,a){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(z(!0,n)),e.next=3,r(n);case 3:0==e.sent.data.resultCode&&t(a(n)),t(z(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return Object(w.a)(Object(w.a)({},e),{},{users:_(e.users,t.userId,"id",{followed:!0})});case S:return Object(w.a)(Object(w.a)({},e),{},{users:_(e.users,t.userId,"id",{followed:!1})});case C:return Object(w.a)(Object(w.a)({},e),{},{users:t.users});case k:return Object(w.a)(Object(w.a)({},e),{},{currentPage:t.currentPage});case E:return Object(w.a)(Object(w.a)({},e),{},{totalUsersCount:t.count});case I:return Object(w.a)(Object(w.a)({},e),{},{isFetching:t.isFetching});case N:return Object(w.a)(Object(w.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(x.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!=t.userId}))});default:return e}},R=n(56),B=n(69),G=n(129),H=n(71),V=n.n(H),W=n(132),Y=n.n(W),J=function(e){for(var t=e.totalItemsCount,n=e.pageSize,a=e.currentPage,c=e.onPageChanged,o=e.portionSize,s=void 0===o?10:o,i=Math.ceil(t/n),u=[],l=1;l<=i;l++)u.push(l);var d=Math.ceil(i/s),f=Object(r.useState)(1),j=Object(G.a)(f,2),b=j[0],h=j[1],g=(b-1)*s+1,O=b*s;return Object(p.jsxs)("div",{className:V.a.paginator,children:[b>1&&Object(p.jsx)("button",{onClick:function(){h(b-1)},children:"PREV"}),u.filter((function(e){return e>=g&&e<=O})).map((function(e){return Object(p.jsx)("span",{className:Y()(Object(B.a)({},V.a.selectedPage,a===e),V.a.pageNumber),onClick:function(t){c(e)},children:e},e)})),d>b&&Object(p.jsx)("button",{onClick:function(){h(b+1)},children:"NEXT"})]})},X=n(133),q=n.n(X),Z=n(106),K=function(e){var t=e.user,n=e.followingInProgress,r=e.unfollow,a=e.follow;return Object(p.jsxs)("div",{children:[Object(p.jsxs)("span",{children:[Object(p.jsx)("div",{children:Object(p.jsx)(j.b,{to:"/profile/"+t.id,children:Object(p.jsx)("img",{src:null!=t.photos.small?t.photos.small:Z.a,className:q.a.userPhoto})})}),Object(p.jsx)("div",{children:t.followed?Object(p.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){r(t.id)},children:"Unfollow"}):Object(p.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){a(t.id)},children:"Follow"})})]}),Object(p.jsxs)("span",{children:[Object(p.jsxs)("span",{children:[Object(p.jsx)("div",{children:t.name}),Object(p.jsx)("div",{children:t.status})]}),Object(p.jsxs)("span",{children:[Object(p.jsx)("div",{children:"user.location.country"}),Object(p.jsx)("div",{children:"user.location.city"})]})]})]})},$=["currentPage","totalUsersCount","pageSize","onPageChanged","users"],Q=function(e){var t=e.currentPage,n=e.totalUsersCount,r=e.pageSize,a=e.onPageChanged,c=e.users,o=Object(R.a)(e,$);return Object(p.jsxs)("div",{children:[Object(p.jsx)(J,{currentPage:t,onPageChanged:a,totalItemsCount:n,pageSize:r}),Object(p.jsx)("div",{children:c.map((function(e){return Object(p.jsx)(K,{user:e,followingInProgress:o.followingInProgress,unfollow:o.unfollow,follow:o.follow},e.id)}))})]})},ee=n(47),te=n(10),ne=n(134),re=Object(ne.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),ae=function(e){return e.usersPage.pageSize},ce=function(e){return e.usersPage.totalUsersCount},oe=function(e){return e.usersPage.currentPage},se=function(e){return e.usersPage.isFetching},ie=function(e){return e.usersPage.followingInProgress},ue=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(s.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).onPageChanged=function(t){var n=e.props.pageSize;e.props.getUsers(t,n)},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.getUsers(t,n)}},{key:"render",value:function(){return Object(p.jsxs)(p.Fragment,{children:[this.props.isFetching?Object(p.jsx)(ee.a,{}):null,Object(p.jsx)(Q,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress})]})}}]),n}(a.a.Component),le=Object(te.d)(Object(g.b)((function(e){return{users:re(e),pageSize:ae(e),totalUsersCount:ce(e),currentPage:oe(e),isFetching:se(e),followingInProgress:ie(e)}}),{follow:function(e){return function(){var t=Object(v.a)(m.a.mark((function t(n){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:D(n,e,P.c.follow.bind(P.c),L);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(v.a)(m.a.mark((function t(n){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:D(n,e,P.c.unfollow.bind(P.c),U);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:A,toggleFollowingProgress:z,getUsers:function(e,t){return function(){var n=Object(v.a)(m.a.mark((function n(r){var a;return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(F(!0)),r(A(e)),n.next=4,P.c.getUsers(e,t);case 4:a=n.sent,r(F(!1)),r((o=a.items,{type:C,users:o})),r((c=a.totalCount,{type:E,count:c}));case 8:case"end":return n.stop()}var c,o}),n)})));return function(e){return n.apply(this,arguments)}}()}}))(ue),de=n(93),fe=n.n(de),je=function(e){return Object(p.jsxs)("header",{className:fe.a.header,children:[Object(p.jsx)("img",{src:"https://www.freelogodesign.org/Content/img/logo-ex-7.png"}),Object(p.jsx)("div",{className:fe.a.loginBlock,children:e.isAuth?Object(p.jsxs)("div",{children:[e.login," - ",Object(p.jsx)("button",{onClick:e.logout,children:"Log out"})," "]}):Object(p.jsx)(j.b,{to:"/login",children:"Login"})})]})},pe=n(34),be="samurai-network/auth/SET_USER_DATA",he={userId:null,email:null,login:null,isAuth:!1},ge=function(e,t,n,r){return{type:be,payload:{userId:e,email:t,login:n,isAuth:r}}},Oe=function(){return function(){var e=Object(v.a)(m.a.mark((function e(t){var n,r,a,c,o;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.a.me();case 2:0===(n=e.sent).data.resultCode&&(r=n.data.data,a=r.id,c=r.login,o=r.email,t(ge(a,o,c,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case be:return Object(w.a)(Object(w.a)({},e),t.payload);default:return e}},ve=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(p.jsx)(je,Object(w.a)({},this.props))}}]),n}(a.a.Component),xe=Object(g.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(){var e=Object(v.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.a.logout();case 2:0===e.sent.data.resultCode&&t(ge(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(ve),we=n(128),Pe=n(33),_e=n(57),ye=n(53),Se=n.n(ye),Ce=Object(we.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error;return Object(p.jsxs)("form",{onSubmit:t,children:[Object(Pe.c)("Email","email",[_e.b],Pe.a),Object(Pe.c)("Password","password",[_e.b],Pe.a,{type:"password"}),Object(Pe.c)(null,"rememberMe",[],Pe.a,{type:"checkbox"},"remember me"),n&&Object(p.jsx)("div",{className:Se.a.formSummaryError,children:n}),Object(p.jsx)("div",{children:Object(p.jsx)("button",{children:"Login"})})]})})),ke=Object(g.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e,t,n){return function(){var r=Object(v.a)(m.a.mark((function r(a){var c,o;return m.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,P.a.login(e,t,n);case 2:0===(c=r.sent).data.resultCode?a(Oe()):(o=c.data.messages.length>0?c.data.messages[0]:"Some error",a(Object(pe.a)("login",{_error:o})));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}})((function(e){return e.isAuth?Object(p.jsx)(h.a,{to:"/profile"}):Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{children:"Login"}),Object(p.jsx)(Ce,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe)}})]})})),Ee="INITIALIZED_SUCCESS",Ie={initialized:!1},Ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Ee:return Object(w.a)(Object(w.a)({},e),{},{initialized:!0});default:return e}},Te=n(96),Le=n(127),Ue={},Ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ue;return e},Fe=n(136),ze=n(130),De=Object(te.c)({profilePage:Te.b,dialogsPage:Le.a,sidebar:Ae,usersPage:M,auth:me,form:ze.a,app:Ne}),Me=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||te.d,Re=Object(te.e)(De,Me(Object(te.a)(Fe.a)));window.__store__=Re;var Be=Re,Ge=function(e){return function(t){return Object(p.jsx)(a.a.Suspense,{fallback:Object(p.jsx)("div",{children:"loading..."}),children:Object(p.jsx)(e,Object(w.a)({},t))})}},He=a.a.lazy((function(){return n.e(4).then(n.bind(null,299))})),Ve=a.a.lazy((function(){return n.e(3).then(n.bind(null,298))})),We=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(p.jsxs)("div",{className:"app-wrapper",children:[Object(p.jsx)(xe,{}),Object(p.jsx)(b,{}),Object(p.jsxs)("div",{className:"app-wrapper-content",children:[Object(p.jsx)(h.b,{path:"/dialogs",render:Ge(He)}),Object(p.jsx)(h.b,{path:"/profile/:userId?",render:Ge(Ve)}),Object(p.jsx)(h.b,{path:"/users",render:function(){return Object(p.jsx)(le,{})}}),Object(p.jsx)(h.b,{path:"/login",render:function(){return Object(p.jsx)(ke,{})}})]})]}):Object(p.jsx)(ee.a,{})}}]),n}(r.Component),Ye=Object(te.d)(h.f,Object(g.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(Oe());Promise.all([t]).then((function(){e({type:Ee})}))}}}))(We),Je=function(e){return Object(p.jsx)(j.a,{children:Object(p.jsx)(g.a,{store:Be,children:Object(p.jsx)(Ye,{})})})};o.a.render(Object(p.jsx)(Je,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},33:function(e,t,n){"use strict";n.d(t,"b",(function(){return f})),n.d(t,"a",(function(){return j})),n.d(t,"c",(function(){return p}));var r=n(3),a=n(56),c=(n(0),n(53)),o=n.n(c),s=(n(57),n(90)),i=n(1),u=["input","meta","child"],l=["input","meta","child"],d=function(e){e.input;var t=e.meta,n=t.touched,r=t.error,a=e.children,c=n&&r;return Object(i.jsxs)("div",{className:o.a.formControl+" "+(c?o.a.error:""),children:[Object(i.jsx)("div",{children:a}),c&&Object(i.jsx)("span",{children:r})]})},f=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,u));return Object(i.jsx)(d,Object(r.a)(Object(r.a)({},e),{},{children:Object(i.jsx)("textarea",Object(r.a)(Object(r.a)({},t),n))}))},j=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,l));return Object(i.jsx)(d,Object(r.a)(Object(r.a)({},e),{},{children:Object(i.jsx)("input",Object(r.a)(Object(r.a)({},t),n))}))},p=function(e,t,n,a){var c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return Object(i.jsxs)("div",{children:[Object(i.jsx)(s.a,Object(r.a)({placeholder:e,name:t,validate:n,component:a},c))," ",o]})}},47:function(e,t,n){"use strict";n(0),n(193);var r=n(1);t.a=function(e){return Object(r.jsx)("div",{className:"preloader"})}},53:function(e,t,n){e.exports={formControl:"FormsControls_formControl__12DRj",error:"FormsControls_error__20Zom",formSummaryError:"FormsControls_formSummaryError__2IjDJ"}},57:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r=function(e){if(!e)return"Field is required"},a=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}}},71:function(e,t,n){e.exports={paginator:"Paginator_paginator__1cOvt",pageNumber:"Paginator_pageNumber__1d4Pu",selectedPage:"Paginator_selectedPage__DyVRO"}},93:function(e,t,n){e.exports={header:"Header_header__3cL8L",loginBlock:"Header_loginBlock__2jhED"}},96:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"d",(function(){return g})),n.d(t,"c",(function(){return O})),n.d(t,"f",(function(){return m})),n.d(t,"e",(function(){return v}));var r=n(9),a=n.n(r),c=n(15),o=n(41),s=n(3),i=n(13),u="ADD-POST",l="SET_USER_PROFILE",d="SET_STATUS",f="DELETE_POST",j="SAVE_PHOTO_SUCCESS",p={posts:[{id:1,message:"Hi, how are you?",likesCount:12},{id:2,message:"It's my first post",likesCount:11},{id:3,message:"Blabla",likesCount:11},{id:4,message:"Dada",likesCount:11}],profile:null,status:""},b=function(e){return{type:u,newPostText:e}},h=function(e){return{type:d,status:e}},g=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.c.getProfile(e);case 2:r=t.sent,n((a=r.data,{type:l,profile:a}));case 4:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()},O=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.getStatus(e);case 2:r=t.sent,n(h(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},m=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(h(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.savePhoto(e);case 2:0===(r=t.sent).data.resultCode&&n((a=r.data.data.photos,{type:j,photos:a}));case 4:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:var n={id:5,message:t.newPostText,likesCount:0};return Object(s.a)(Object(s.a)({},e),{},{posts:[].concat(Object(o.a)(e.posts),[n]),newPostText:""});case d:return Object(s.a)(Object(s.a)({},e),{},{status:t.status});case l:return Object(s.a)(Object(s.a)({},e),{},{profile:t.profile});case f:return Object(s.a)(Object(s.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!=t.postId}))});case j:return Object(s.a)(Object(s.a)({},e),{},{profile:Object(s.a)(Object(s.a)({},e.profile),{},{photos:t.photos})});default:return e}}}},[[293,1,2]]]);
//# sourceMappingURL=main.9e505a13.chunk.js.map