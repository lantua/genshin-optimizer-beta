(this["webpackJsonpgenshin-optimizer"]=this["webpackJsonpgenshin-optimizer"]||[]).push([[18],{263:function(e,t,n){"use strict";var i=n(9),a=n(442),c=Object(i.a)(a.a)((function(e){return{backgroundColor:e.theme.palette.contentLight.main}}));t.a=c},267:function(e,t,n){"use strict";var i=n(9),a=n(442),c=Object(i.a)(a.a)((function(e){return{backgroundColor:e.theme.palette.contentDark.main}}));t.a=c},268:function(e,t,n){"use strict";var i=n(9),a=Object(i.a)("img",{name:"ImgIcon",slot:"Root"})((function(e){var t=e.size;return{display:"inline-block",width:"auto",height:"".concat(1.2*(void 0===t?1:t),"em"),verticalAlign:"text-bottom"}}));t.a=a},270:function(e,t,n){"use strict";n.d(t,"a",(function(){return j}));var i=n(10),a=n(8),c=n(127),r=n(766),o=n(258),s=n(158),l=n(739),d=n(0),u=n(1);function j(e){var t=e.title,n=e.children,j=e.id,b=void 0===j?"dropdownbtn":j,h=Object(c.a)(e,["title","children","id"]),O=Object(d.useState)(null),p=Object(a.a)(O,2),x=p[0],f=p[1],m=Boolean(x),v=Object(d.useCallback)((function(e){return f(e.currentTarget)}),[f]),g=Object(d.useCallback)((function(){return f(null)}),[f]);return Object(u.jsxs)(d.Suspense,{fallback:Object(u.jsx)(o.a,Object(i.a)(Object(i.a)({endIcon:Object(u.jsx)(r.a,{})},h),{},{children:Object(u.jsx)(s.a,{width:50})})),children:[Object(u.jsx)(o.a,Object(i.a)(Object(i.a)({},h),{},{id:b,"aria-controls":"basic-menu","aria-haspopup":"true","aria-expanded":m?"true":void 0,onClick:v,endIcon:Object(u.jsx)(r.a,{}),children:t})),Object(u.jsx)(l.a,{id:"basic-menu",anchorEl:x,open:m,onClose:g,MenuListProps:{"aria-labelledby":b},onClick:g,children:Object(u.jsx)(d.Suspense,{fallback:Object(u.jsx)(s.a,{width:"100%",height:"1000"}),children:n})})]})}},273:function(e,t,n){"use strict";var i={weaponTypes:{bow:n.p+"static/media/icon_bow.7ceaa8e2.png",catalyst:n.p+"static/media/icon_catalyst.db078b7b.png",claymore:n.p+"static/media/icon_claymore.63b1abb8.png",polearm:n.p+"static/media/icon_polearm.e5f4a2a1.png",sword:n.p+"static/media/icon_sword.619c9c2d.png"},resin:{fragile:n.p+"static/media/Item_Fragile_Resin.f9ec8223.png",condensed:n.p+"static/media/Item_Condensed_Resin.1cecf64a.png"},exp_books:{advice:n.p+"static/media/Item_Wanderer's_Advice.58c62cf7.png",wit:n.p+"static/media/Item_Hero's_Wit.a79e36d0.png",experience:n.p+"static/media/Item_Adventurer's_Experience.92b5d195.png"}};t.a=i},281:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return b})),n.d(t,"c",(function(){return h}));var i=n(8),a=n(10),c=n(127),r=n(9),o=n(441),s=n(258),l=n(0),d=n(1),u=Object(r.a)(o.c)((function(e){var t=e.theme;return{backgroundColor:t.palette.primary.main,transition:"all 0.5s ease","&:hover":{backgroundColor:t.palette.primary.dark},"&.Mui-focused":{backgroundColor:t.palette.primary.dark},"&.Mui-disabled":{backgroundColor:t.palette.primary.dark}}})),j=Object(r.a)(s.a)((function(e){return{backgroundColor:e.theme.palette.primary.main,padding:0,overflow:"hidden",div:{width:"100%",height:"100%"}}}));function b(e){var t=e.children,n=(e.disableRipple,e.disableFocusRipple,e.disableTouchRipple,Object(c.a)(e,["children","disableRipple","disableFocusRipple","disableTouchRipple"]));return Object(d.jsx)(j,Object(a.a)(Object(a.a)({disableRipple:!0,disableFocusRipple:!0,disableTouchRipple:!0},n),{},{children:t}))}function h(e){var t=e.value,n=void 0===t?0:t,r=e.onChange,o=e.disabled,s=void 0!==o&&o,j=e.float,b=void 0!==j&&j,h=Object(c.a)(e,["value","onChange","disabled","float"]),O=Object(l.useState)(n),p=Object(i.a)(O,2),x=p[0],f=p[1],m=Object(l.useState)(!1),v=Object(i.a)(m,2),g=v[0],y=v[1],C=Object(l.useMemo)((function(){return b?parseFloat:parseInt}),[b]),w=Object(l.useCallback)((function(){r(x),y(!1)}),[r,x,y]),R=Object(l.useCallback)((function(){y(!0)}),[y]);Object(l.useEffect)((function(){return f(n)}),[n,f]);var k=Object(l.useCallback)((function(e){return f(C(e.target.value)||0)}),[f,C]),M=Object(l.useCallback)((function(e){return"Enter"===e.key&&w()}),[w]);return Object(d.jsx)(u,Object(a.a)({value:g&&!x?"":x,"aria-label":"custom-input",type:"number",onChange:k,onBlur:w,onFocus:R,disabled:s,onKeyDown:M},h))}},317:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var i=n(10),a=n(127),c=n(9),r=n(258),o=n(1),s=Object(c.a)(r.a)((function(e){var t=e.theme;return{"&.Mui-disabled":{backgroundColor:t.palette.primary.dark,color:t.palette.text.secondary}}}));function l(e){var t=e.children,n=(e.disabled,Object(a.a)(e,["children","disabled"]));return Object(o.jsx)(s,Object(i.a)(Object(i.a)({},n),{},{disabled:!0,children:t}))}},331:function(e,t,n){"use strict";var i=n(9),a=Object(i.a)("img")({width:"100%",height:"auto"});t.a=a},374:function(e,t,n){"use strict";var i=n(5),a=n(7),c=n(2),r=n(0),o=(n(3),n(6)),s=n(102),l=n(88),d=n(9),u=n(11),j=n(12),b=n(254),h=n(89),O=n(103);function p(e){return Object(h.a)("MuiAlert",e)}var x,f=Object(O.a)("MuiAlert",["root","action","icon","message","filled","filledSuccess","filledInfo","filledWarning","filledError","outlined","outlinedSuccess","outlinedInfo","outlinedWarning","outlinedError","standard","standardSuccess","standardInfo","standardWarning","standardError"]),m=n(259),v=n(62),g=n(1),y=Object(v.a)(Object(g.jsx)("path",{d:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"}),"SuccessOutlined"),C=Object(v.a)(Object(g.jsx)("path",{d:"M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"}),"ReportProblemOutlined"),w=Object(v.a)(Object(g.jsx)("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"ErrorOutline"),R=Object(v.a)(Object(g.jsx)("path",{d:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"}),"InfoOutlined"),k=Object(v.a)(Object(g.jsx)("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close"),M=["action","children","className","closeText","color","icon","iconMapping","onClose","role","severity","variant"],S=Object(d.a)(b.a,{name:"MuiAlert",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t[n.variant],t["".concat(n.variant).concat(Object(j.a)(n.color||n.severity))]]}})((function(e){var t=e.theme,n=e.ownerState,a="light"===t.palette.mode?l.b:l.e,r="light"===t.palette.mode?l.e:l.b,o=n.color||n.severity;return Object(c.a)({},t.typography.body2,{backgroundColor:"transparent",display:"flex",padding:"6px 16px"},o&&"standard"===n.variant&&Object(i.a)({color:a(t.palette[o].light,.6),backgroundColor:r(t.palette[o].light,.9)},"& .".concat(f.icon),{color:"dark"===t.palette.mode?t.palette[o].main:t.palette[o].light}),o&&"outlined"===n.variant&&Object(i.a)({color:a(t.palette[o].light,.6),border:"1px solid ".concat(t.palette[o].light)},"& .".concat(f.icon),{color:"dark"===t.palette.mode?t.palette[o].main:t.palette[o].light}),o&&"filled"===n.variant&&{color:"#fff",fontWeight:t.typography.fontWeightMedium,backgroundColor:"dark"===t.palette.mode?t.palette[o].dark:t.palette[o].main})})),T=Object(d.a)("div",{name:"MuiAlert",slot:"Icon",overridesResolver:function(e,t){return t.icon}})({marginRight:12,padding:"7px 0",display:"flex",fontSize:22,opacity:.9}),z=Object(d.a)("div",{name:"MuiAlert",slot:"Message",overridesResolver:function(e,t){return t.message}})({padding:"8px 0"}),_=Object(d.a)("div",{name:"MuiAlert",slot:"Action",overridesResolver:function(e,t){return t.action}})({display:"flex",alignItems:"flex-start",padding:"4px 0 0 16px",marginLeft:"auto",marginRight:-8}),E={success:Object(g.jsx)(y,{fontSize:"inherit"}),warning:Object(g.jsx)(C,{fontSize:"inherit"}),error:Object(g.jsx)(w,{fontSize:"inherit"}),info:Object(g.jsx)(R,{fontSize:"inherit"})},I=r.forwardRef((function(e,t){var n=Object(u.a)({props:e,name:"MuiAlert"}),i=n.action,r=n.children,l=n.className,d=n.closeText,b=void 0===d?"Close":d,h=n.color,O=n.icon,f=n.iconMapping,v=void 0===f?E:f,y=n.onClose,C=n.role,w=void 0===C?"alert":C,R=n.severity,I=void 0===R?"success":R,A=n.variant,L=void 0===A?"standard":A,D=Object(a.a)(n,M),W=Object(c.a)({},n,{color:h,severity:I,variant:L}),B=function(e){var t=e.variant,n=e.color,i=e.severity,a=e.classes,c={root:["root","".concat(t).concat(Object(j.a)(n||i)),"".concat(t)],icon:["icon"],message:["message"],action:["action"]};return Object(s.a)(c,p,a)}(W);return Object(g.jsxs)(S,Object(c.a)({role:w,elevation:0,ownerState:W,className:Object(o.a)(B.root,l),ref:t},D,{children:[!1!==O?Object(g.jsx)(T,{ownerState:W,className:B.icon,children:O||v[I]||E[I]}):null,Object(g.jsx)(z,{ownerState:W,className:B.message,children:r}),null!=i?Object(g.jsx)(_,{className:B.action,children:i}):null,null==i&&y?Object(g.jsx)(_,{ownerState:W,className:B.action,children:Object(g.jsx)(m.a,{size:"small","aria-label":b,title:b,color:"inherit",onClick:y,children:x||(x=Object(g.jsx)(k,{fontSize:"small"}))})}):null]}))}));t.a=I},398:function(e,t,n){"use strict";n.d(t,"d",(function(){return a})),n.d(t,"c",(function(){return c})),n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o})),n.d(t,"e",(function(){return l})),n.d(t,"f",(function(){return d}));var i=n(23),a=1e3,c=60*a,r=60*c,o=24*r;function s(e){var t=e%1e3,n=Math.floor(e/1e3%60),i=Math.floor(e/6e4%60);return{hours:Math.floor(e/36e5),minutes:i,seconds:n,milliseconds:t}}function l(e){var t=s(e),n=t.hours,a=t.minutes,c=t.seconds,r="Minutes";return n&&(r="Hours"),"".concat(n?"".concat(n,":"):"").concat(Object(i.q)(a,"0",2),":").concat(Object(i.q)(c,"0",2)," ").concat(r)}function d(e){var t=s(e),n=t.hours,a=t.minutes,c=t.seconds,r=t.milliseconds,o="Minutes";return n&&(o="Hours"),"".concat(n?"".concat(n,":"):"").concat(Object(i.q)(a,"0",2),":").concat(Object(i.q)(c,"0",2),".").concat(Object(i.q)(r,"0",3)," ").concat(o)}},709:function(e,t,n){"use strict";function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.d(t,"a",(function(){return i}))},710:function(e,t,n){"use strict";function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}n.d(t,"a",(function(){return i}))},711:function(e,t,n){"use strict";function i(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}n.d(t,"a",(function(){return i}))},740:function(e,t,n){"use strict";var i=n(5),a=n(7),c=n(2),r=n(0),o=(n(3),n(6)),s=n(102),l=n(88),d=n(12),u=n(9),j=n(11),b=n(89),h=n(103);function O(e){return Object(b.a)("MuiButtonGroup",e)}var p=Object(h.a)("MuiButtonGroup",["root","contained","outlined","text","disableElevation","disabled","fullWidth","vertical","grouped","groupedHorizontal","groupedVertical","groupedText","groupedTextHorizontal","groupedTextVertical","groupedTextPrimary","groupedTextSecondary","groupedOutlined","groupedOutlinedHorizontal","groupedOutlinedVertical","groupedOutlinedPrimary","groupedOutlinedSecondary","groupedContained","groupedContainedHorizontal","groupedContainedVertical","groupedContainedPrimary","groupedContainedSecondary"]),x=n(141),f=n(1),m=["children","className","color","component","disabled","disableElevation","disableFocusRipple","disableRipple","fullWidth","orientation","size","variant"],v=Object(u.a)("div",{name:"MuiButtonGroup",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[Object(i.a)({},"& .".concat(p.grouped),t.grouped),Object(i.a)({},"& .".concat(p.grouped),t["grouped".concat(Object(d.a)(n.orientation))]),Object(i.a)({},"& .".concat(p.grouped),t["grouped".concat(Object(d.a)(n.variant))]),Object(i.a)({},"& .".concat(p.grouped),t["grouped".concat(Object(d.a)(n.variant)).concat(Object(d.a)(n.orientation))]),Object(i.a)({},"& .".concat(p.grouped),t["grouped".concat(Object(d.a)(n.variant)).concat(Object(d.a)(n.color))]),t.root,t[n.variant],!0===n.disableElevation&&t.disableElevation,n.fullWidth&&t.fullWidth,"vertical"===n.orientation&&t.vertical]}})((function(e){var t=e.theme,n=e.ownerState;return Object(c.a)({display:"inline-flex",borderRadius:t.shape.borderRadius},"contained"===n.variant&&{boxShadow:t.shadows[2]},n.disableElevation&&{boxShadow:"none"},n.fullWidth&&{width:"100%"},"vertical"===n.orientation&&{flexDirection:"column"},Object(i.a)({},"& .".concat(p.grouped),Object(c.a)({minWidth:40,"&:not(:first-of-type)":Object(c.a)({},"horizontal"===n.orientation&&{borderTopLeftRadius:0,borderBottomLeftRadius:0},"vertical"===n.orientation&&{borderTopRightRadius:0,borderTopLeftRadius:0},"outlined"===n.variant&&"horizontal"===n.orientation&&{marginLeft:-1},"outlined"===n.variant&&"vertical"===n.orientation&&{marginTop:-1}),"&:not(:last-of-type)":Object(c.a)({},"horizontal"===n.orientation&&{borderTopRightRadius:0,borderBottomRightRadius:0},"vertical"===n.orientation&&{borderBottomRightRadius:0,borderBottomLeftRadius:0},"text"===n.variant&&"horizontal"===n.orientation&&{borderRight:"1px solid ".concat("light"===t.palette.mode?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)")},"text"===n.variant&&"vertical"===n.orientation&&{borderBottom:"1px solid ".concat("light"===t.palette.mode?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)")},"text"===n.variant&&"inherit"!==n.color&&{borderColor:Object(l.a)(t.palette[n.color].main,.5)},"outlined"===n.variant&&"horizontal"===n.orientation&&{borderRightColor:"transparent"},"outlined"===n.variant&&"vertical"===n.orientation&&{borderBottomColor:"transparent"},"contained"===n.variant&&"horizontal"===n.orientation&&Object(i.a)({borderRight:"1px solid ".concat(t.palette.grey[400])},"&.".concat(p.disabled),{borderRight:"1px solid ".concat(t.palette.action.disabled)}),"contained"===n.variant&&"vertical"===n.orientation&&Object(i.a)({borderBottom:"1px solid ".concat(t.palette.grey[400])},"&.".concat(p.disabled),{borderBottom:"1px solid ".concat(t.palette.action.disabled)}),"contained"===n.variant&&"inherit"!==n.color&&{borderColor:t.palette[n.color].dark},{"&:hover":Object(c.a)({},"outlined"===n.variant&&"horizontal"===n.orientation&&{borderRightColor:"currentColor"},"outlined"===n.variant&&"vertical"===n.orientation&&{borderBottomColor:"currentColor"})}),"&:hover":Object(c.a)({},"contained"===n.variant&&{boxShadow:"none"})},"contained"===n.variant&&{boxShadow:"none"})))})),g=r.forwardRef((function(e,t){var n=Object(j.a)({props:e,name:"MuiButtonGroup"}),i=n.children,l=n.className,u=n.color,b=void 0===u?"primary":u,h=n.component,p=void 0===h?"div":h,g=n.disabled,y=void 0!==g&&g,C=n.disableElevation,w=void 0!==C&&C,R=n.disableFocusRipple,k=void 0!==R&&R,M=n.disableRipple,S=void 0!==M&&M,T=n.fullWidth,z=void 0!==T&&T,_=n.orientation,E=void 0===_?"horizontal":_,I=n.size,A=void 0===I?"medium":I,L=n.variant,D=void 0===L?"outlined":L,W=Object(a.a)(n,m),B=Object(c.a)({},n,{color:b,component:p,disabled:y,disableElevation:w,disableFocusRipple:k,disableRipple:S,fullWidth:z,orientation:E,size:A,variant:D}),H=function(e){var t=e.classes,n=e.color,i=e.disabled,a=e.disableElevation,c=e.fullWidth,r=e.orientation,o=e.variant,l={root:["root",o,"vertical"===r&&"vertical",c&&"fullWidth",a&&"disableElevation"],grouped:["grouped","grouped".concat(Object(d.a)(r)),"grouped".concat(Object(d.a)(o)),"grouped".concat(Object(d.a)(o)).concat(Object(d.a)(r)),"grouped".concat(Object(d.a)(o)).concat(Object(d.a)(n)),i&&"disabled"]};return Object(s.a)(l,O,t)}(B),P=r.useMemo((function(){return{className:H.grouped,color:b,disabled:y,disableElevation:w,disableFocusRipple:k,disableRipple:S,fullWidth:z,size:A,variant:D}}),[b,y,w,k,S,z,A,D,H.grouped]);return Object(f.jsx)(v,Object(c.a)({as:p,role:"group",className:Object(o.a)(H.root,l),ref:t,ownerState:B},W,{children:Object(f.jsx)(x.a.Provider,{value:P,children:i})}))}));t.a=g},776:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return Y}));var i=n(31),a=n(32),c=n(709);var r=n(710),o=n(711);function s(e){return(s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){return!t||"object"!==s(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}var d=n(233),u=n(252),j=n(73),b=n(240),h=n(443),O=n(441),p=n(740),x=n(258),f=n(0),m=n.n(f),v=n(76),g=n(273),y=n(267),C=n(268),w=n(75),R=n(398),k=n(23),M=n(8),S=n(62),T=n(1),z=Object(S.a)(Object(T.jsx)("path",{d:"M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"}),"Check"),_=n(374),E=n(263),I=n(55),A=n(281),L=n(331),D=n(317),W={advice:{name:"Wanderer's Advice",exp:1e3,cost:200,img:g.a.exp_books.advice},experience:{name:"Adventurer's Experience",exp:5e3,cost:1e3,img:g.a.exp_books.experience},wit:{name:"Hero's Wit",exp:2e4,cost:4e3,img:g.a.exp_books.wit}},B=[0,1e3,1325,1700,2150,2625,3150,3725,4350,5e3,5700,6450,7225,8050,8925,9825,10750,11725,12725,13775,14875,16800,18e3,19250,20550,21875,23250,24650,26100,27575,29100,30650,32250,33875,35550,37250,38975,40750,42575,44425,46300,50625,52700,54775,56900,59075,61275,63525,65800,68125,70475,76500,79050,81650,84275,86950,89650,92400,95175,98e3,100875,108950,112050,115175,118325,121525,124775,128075,131400,134775,138175,148700,152375,156075,159825,163600,167425,171300,175225,179175,183175,216225,243025,273100,306800,344600,386950,434425,487625,547200],H=[20,40,50,60,70,80,90];function P(e){var t=Object(f.useState)(0),n=Object(M.a)(t,2),i=n[0],a=n[1],c=Object(f.useState)(0),r=Object(M.a)(c,2),o=r[0],s=r[1],l=Object(f.useState)(0),O=Object(M.a)(l,2),m=O[0],v=O[1],g={advice:i,experience:o,wit:m},R={advice:a,experience:s,wit:v},S=Object(f.useState)(!1),L=Object(M.a)(S,2),P=L[0],N=L[1],G=Object(f.useState)(1),q=Object(M.a)(G,2),V=q[0],U=q[1],X=Object(f.useState)(0),Y=Object(M.a)(X,2),Z=Y[0],J=Y[1],K=Object(f.useState)(0),Q=Object(M.a)(K,2),$=Q[0],ee=Q[1];Object(f.useEffect)((function(){return ee(w.b.get("mora")||0)}),[]),Object(f.useEffect)((function(){w.b.set("mora",$)}),[$]),Object(f.useEffect)((function(){return U(w.b.get("exp_calc_level")||1)}),[]),Object(f.useEffect)((function(){w.b.set("exp_calc_level",V)}),[V]),Object(f.useEffect)((function(){return J(w.b.get("exp_calc_cur_exp")||0)}),[]),Object(f.useEffect)((function(){w.b.set("exp_calc_cur_exp",Z)}),[Z]),Object(f.useEffect)((function(){var e=w.b.get("exp_books")||{},t={advice:a,experience:s,wit:v};Object.entries(e).forEach((function(e){var n,i=Object(M.a)(e,2),a=i[0],c=i[1];return null===(n=t[a])||void 0===n?void 0:n.call(t,c)}))}),[]),Object(f.useEffect)((function(){return w.b.set("exp_books",{advice:i,experience:o,wit:m})}),[i,o,m]);for(var te=H.find((function(e){return e>V})),ne=-Z,ie=V;ie<Math.min(te,B.length);ie++)ne+=B[ie];for(var ae=function(e,t,n,i,a){var c=a?Math.floor(i/1e3):Math.ceil(i/1e3),r=Math.min(Math.floor(c/20),e);c-=20*r;var o=Math.min(Math.floor(c/5),t);c-=5*o;var s=Math.min(c,n);if(c-=s,a||0===c)return[r,o,s];if(3===o&&r!==e)return[r+1,0,0];if(o!==t)return[r,o+1,0];if(r!==e)return[r+1,0,0];return null}(m,o,i,ne,P)||[],ce=Object(M.a)(ae,3),re=ce[0],oe=void 0===re?0:re,se=ce[1],le=void 0===se?0:se,de=ce[2],ue=void 0===de?0:de,je={advice:ue,experience:le,wit:oe},be=2e4*oe+5e3*le+1e3*ue,he=be/5,Oe=ne-be,pe=$-he,xe=be+Z,fe=V;fe<Math.min(te,B.length)&&B[fe]<=xe;fe++)xe-=B[fe];fe===te&&(xe=0);var me="";return pe<0?me=Object(T.jsxs)("span",{children:["You don't have enough ",Object(T.jsx)("b",{children:"Mora"})," for this operation."]}):0===ae.length?me=Object(T.jsxs)("span",{children:["You don't have enough ",Object(T.jsx)("b",{children:"EXP. books"})," to level to the next milestone."]}):90===V&&(me="You are at the maximum level."),Object(T.jsxs)(y.a,{children:[Object(T.jsxs)(u.a,{container:!0,sx:{px:2,py:1},spacing:2,children:[Object(T.jsx)(u.a,{item:!0,children:Object(T.jsx)(C.a,{src:W.wit.img,sx:{fontSize:"2em"}})}),Object(T.jsx)(u.a,{item:!0,flexGrow:1,children:Object(T.jsx)(j.a,{variant:"h6",children:"Experience Calculator"})}),Object(T.jsx)(u.a,{item:!0,children:Object(T.jsxs)(p.a,{children:[Object(T.jsx)(x.a,{color:"primary",disabled:!P,onClick:function(){return N(!1)},children:"Full Level"}),Object(T.jsx)(x.a,{color:"primary",disabled:P,onClick:function(){return N(!0)},children:"Don't fully level"})]})})]}),Object(T.jsx)(b.a,{}),Object(T.jsx)(h.a,{children:Object(T.jsxs)(u.a,{container:!0,spacing:1,children:[Object(T.jsx)(u.a,{item:!0,children:Object(T.jsxs)(j.a,{children:[Object(T.jsx)("span",{children:"This calculator tries to calculate the amount of exp books required to get to the next milestone level. "}),P?"It will try to get as close to the milestone level as possible, so you can grind the rest of the exp without any waste.":"It will try to calculate the amount of books needed to minimize as much exp loss as possible."]})}),Object(T.jsx)(u.a,{item:!0,xs:6,md:3,children:Object(T.jsxs)(p.a,{sx:{display:"flex"},children:[Object(T.jsx)(D.a,{children:"Current Level"}),Object(T.jsx)(A.a,{sx:{flexBasis:30,flexGrow:1},children:Object(T.jsx)(A.c,{value:V,onChange:function(e){return U(Object(k.b)(e,0,90))},sx:{px:2}})})]})}),Object(T.jsx)(u.a,{item:!0,xs:6,md:3,children:Object(T.jsxs)(p.a,{sx:{display:"flex"},children:[Object(T.jsx)(D.a,{children:"Current EXP."}),Object(T.jsx)(A.a,{sx:{flexBasis:30,flexGrow:1},children:Object(T.jsx)(A.c,{value:Z,onChange:function(e){return J(Object(k.b)(e,0,(B[V]||1)-1))},endAdornment:"/".concat(B[V]||0),sx:{px:2}})})]})}),Object(T.jsx)(u.a,{item:!0,xs:6,md:3,children:Object(T.jsx)(E.a,{children:Object(T.jsxs)(d.a,{sx:{p:1,display:"flex",justifyContent:"space-between"},children:[Object(T.jsx)(j.a,{children:"Next Milestone Level:"}),Object(T.jsx)(j.a,{children:Object(T.jsx)("b",{children:te})})]})})}),Object(T.jsx)(u.a,{item:!0,xs:6,md:3,children:Object(T.jsx)(E.a,{children:Object(T.jsxs)(d.a,{sx:{p:1,display:"flex",justifyContent:"space-between"},children:[Object(T.jsx)(j.a,{children:"EXP. to milestone:"}),Object(T.jsx)(j.a,{children:Object(T.jsxs)("span",{children:[Object(T.jsx)("strong",{children:be})," / ",Object(T.jsx)("strong",{children:ne})]})})]})})}),Object.entries(W).map((function(e){var t=Object(M.a)(e,2),n=t[0],i=t[1];return Object(T.jsx)(u.a,{item:!0,xs:12,md:4,children:Object(T.jsx)(F,{bookObj:i,value:g[n],setValue:R[n],required:je[n]})},n)})),Object(T.jsx)(u.a,{item:!0,xs:12,md:4,children:Object(T.jsxs)(p.a,{sx:{display:"flex"},children:[Object(T.jsx)(D.a,{children:"Current Mora"}),Object(T.jsx)(A.a,{sx:{flexBasis:30,flexGrow:1},children:Object(T.jsx)(A.c,{value:$,onChange:function(e){return ee(Math.max(null!==e&&void 0!==e?e:0,0))},sx:{px:2}})})]})}),Object(T.jsx)(u.a,{item:!0,xs:12,md:4,children:Object(T.jsx)(E.a,{children:Object(T.jsxs)(d.a,{sx:{p:1,display:"flex",justifyContent:"space-between"},children:[Object(T.jsx)(j.a,{children:"Mora Cost: "}),Object(T.jsx)(j.a,{children:Object(T.jsx)("b",{children:he})})]})})}),Object(T.jsx)(u.a,{item:!0,xs:12,md:4,children:Object(T.jsx)(E.a,{children:Object(T.jsxs)(d.a,{sx:{p:1,display:"flex",justifyContent:"space-between"},children:[Object(T.jsxs)(j.a,{children:["EXP ",P?"Diff":"Waste",": "]}),Object(T.jsx)(j.a,{children:Object(T.jsx)("b",{children:Object(T.jsx)(I.a,{color:Oe<0?"error":"success",children:Oe})})})]})})}),Object(T.jsx)(u.a,{item:!0,xs:12,md:4,children:Object(T.jsx)(E.a,{children:Object(T.jsxs)(d.a,{sx:{p:1,display:"flex",justifyContent:"space-between"},children:[Object(T.jsx)(j.a,{children:"Final Mora: "}),Object(T.jsx)(j.a,{children:Object(T.jsx)("b",{children:Object(T.jsx)(I.a,{color:pe<0?"error":"success",children:pe})})})]})})}),Object(T.jsx)(u.a,{item:!0,xs:12,md:4,children:Object(T.jsx)(E.a,{children:Object(T.jsxs)(d.a,{sx:{p:1,display:"flex",justifyContent:"space-between"},children:[Object(T.jsx)(j.a,{children:"Final Level: "}),Object(T.jsx)(j.a,{children:Object(T.jsx)("b",{children:Object(T.jsx)(I.a,{color:"success",children:fe})})})]})})}),Object(T.jsx)(u.a,{item:!0,xs:12,md:4,children:Object(T.jsx)(E.a,{children:Object(T.jsxs)(d.a,{sx:{p:1,display:"flex",justifyContent:"space-between"},children:[Object(T.jsx)(j.a,{children:"Final EXP: "}),Object(T.jsx)(j.a,{children:Object(T.jsx)("b",{children:Object(T.jsx)(I.a,{color:xe<0?"error":"success",children:xe})})})]})})})]})}),Object(T.jsx)(b.a,{}),Object(T.jsx)(h.a,{sx:{py:1},children:Object(T.jsxs)(u.a,{container:!0,spacing:2,children:[Object(T.jsx)(u.a,{item:!0,flexGrow:1,children:!!me&&Object(T.jsx)(_.a,{variant:"filled",severity:"error",children:me})}),Object(T.jsx)(u.a,{item:!0,xs:"auto",children:Object(T.jsx)(x.a,{disabled:!!me,onClick:function(){U(fe),J(xe),Object.entries(je).forEach((function(e){var t,n=Object(M.a)(e,2),i=n[0],a=n[1];return null===(t=R[i])||void 0===t?void 0:t.call(R,g[i]-a)})),ee(pe)},color:"success",startIcon:Object(T.jsx)(z,{}),sx:{height:"100%"},children:"Apply"})})]})})]})}function F(e){var t=e.bookObj,n=t.name,i=t.img,a=e.value,c=void 0===a?0:a,r=e.setValue,o=e.required,s=void 0===o?0:o;return Object(T.jsxs)(E.a,{children:[Object(T.jsx)(h.a,{sx:{py:1},children:Object(T.jsx)(j.a,{children:n})}),Object(T.jsx)(b.a,{}),Object(T.jsx)(h.a,{children:Object(T.jsxs)(u.a,{container:!0,children:[Object(T.jsx)(u.a,{item:!0,xs:3,children:Object(T.jsx)(L.a,{src:i})}),Object(T.jsxs)(u.a,{item:!0,xs:9,children:[Object(T.jsxs)(p.a,{sx:{display:"flex"},children:[Object(T.jsx)(D.a,{children:"Amount"}),Object(T.jsx)(A.a,{sx:{flexBasis:30,flexGrow:1},children:Object(T.jsx)(A.c,{value:c,onChange:function(e){return r(Math.max(null!==e&&void 0!==e?e:0,0))},sx:{px:2}})})]}),Object(T.jsxs)(d.a,{display:"flex",justifyContent:"space-between",mt:1,children:[Object(T.jsx)(j.a,{children:"Required:"}),Object(T.jsx)(j.a,{children:Object(T.jsx)("b",{children:Object(T.jsx)(I.a,{color:s?"success":"",children:s})})})]})]})]})})]})}var N=n(54),G=n(53),q=n(790),V=n(270),U={America:-5*R.b,Europe:R.b,Asia:8*R.b,"TW, HK, MO":8*R.b};function X(e){var t=Object(f.useState)(Object.keys(U)[0]),n=Object(M.a)(t,2),i=n[0],a=n[1],c=Object(f.useState)(new Date(Date.now()+U[i])),r=Object(M.a)(c,2),o=r[0],s=r[1];Object(f.useEffect)((function(){return a(w.b.get("server_timezone")||Object.keys(U)[0])}),[]),Object(f.useEffect)((function(){var e=function t(){return s(new Date(Date.now()+U[i])),setTimeout((function(){e=t()}),R.d-Date.now()%R.d)}();return w.b.set("server_timezone",i),function(){return clearTimeout(e)}}),[i]);var l=new Date(o);l.getUTCHours()<4?l.setUTCHours(4,0,0,0):(l=new Date(l.getTime()+R.a)).setUTCHours(4,0,0,0);var d=l.getTime()-o.getTime(),O=Object(R.e)(d);return Object(T.jsxs)(y.a,{children:[Object(T.jsxs)(u.a,{container:!0,sx:{px:2,py:1},spacing:2,children:[Object(T.jsx)(u.a,{item:!0,children:Object(T.jsx)(j.a,{variant:"h6",children:Object(T.jsx)(G.a,{icon:N.i,className:"fa-fw"})})}),Object(T.jsx)(u.a,{item:!0,flexGrow:1,children:Object(T.jsx)(j.a,{variant:"h6",children:"Teyvat Time"})}),Object(T.jsx)(u.a,{item:!0,children:Object(T.jsx)(V.a,{title:i,children:Object.keys(U).map((function(e){return Object(T.jsx)(q.a,{selected:i===e,disabled:i===e,onClick:function(){return a(e)},children:e},e)}))})})]}),Object(T.jsx)(b.a,{}),Object(T.jsx)(h.a,{children:Object(T.jsxs)(u.a,{container:!0,justifyContent:"center",spacing:3,children:[Object(T.jsx)(u.a,{item:!0,sx:{my:4},children:Object(T.jsx)(j.a,{variant:"h2",children:o.toLocaleTimeString([],{timeZone:"UTC"})})}),Object(T.jsxs)(u.a,{item:!0,display:"flex",flexDirection:"column",justifyContent:"space-around",children:[Object(T.jsxs)(j.a,{children:["Server Date: ",Object(T.jsx)("b",{children:o.toDateString()})]}),Object(T.jsxs)(j.a,{children:["Time until reset: ",Object(T.jsx)("b",{children:O})]}),Object(T.jsxs)(j.a,{children:["Resin until reset: ",Object(T.jsx)("b",{children:Math.floor(d/(8*R.c))})]})]})]})})]})}function Y(e){return Object(T.jsxs)(d.a,{sx:{mt:1,"> div":{mb:1}},children:[Object(T.jsx)(X,{}),Object(T.jsx)(K,{}),Object(T.jsx)(P,{})]})}var Z=160,J=8*R.c,K=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Object(c.a)(e,t)}(n,e);var t=function(e){var t=Object(o.a)();return function(){var n,i=Object(r.a)(e);if(t){var a=Object(r.a)(this).constructor;n=Reflect.construct(i,arguments,a)}else n=i.apply(this,arguments);return l(this,n)}}(n);function n(e){var a;Object(i.a)(this,n),(a=t.call(this,e)).resinIncrement=void 0,a.updateTimer=void 0,a.setResin=function(e){return a.setState((function(t){var n={resin:e=parseInt(e)||0};return e>=Z?(a.resinIncrement&&clearTimeout(a.resinIncrement),a.resinIncrement=0,t.resin<Z&&(n.date=(new Date).getTime())):(a.resinIncrement&&clearTimeout(a.resinIncrement),a.resinIncrement=setInterval((function(){return a.setResin(a.state.resin+1)}),J),n.date=(new Date).getTime()),n}))};var c=w.b.get("resinInfo");a.state=c||{resin:100,date:(new Date).getTime()};var r=a.state,o=r.resin,s=r.date;if(o<Z&&Date.now()-s>J){var l=Z-o,d=Math.min(Math.floor((Date.now()-s)/J),l);o+=d,s+=d*J,a.state.resin=o,a.state.date=s}return v.a.pageview("/tools"),a}return Object(a.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.state,n=t.resin,i=t.date;if(n<Z){var a=i+J-new Date;this.resinIncrement=setTimeout((function(){e.setResin(e.state.resin+1)}),a)}this.updateTimer=setInterval((function(){return e.forceUpdate()}),R.d)}},{key:"componentWillUnmount",value:function(){this.updateTimer&&clearInterval(this.updateTimer),this.resinIncrement&&clearTimeout(this.resinIncrement)}},{key:"componentDidUpdate",value:function(){var e=Object(k.e)(this.state);w.b.set("resinInfo",e)}},{key:"render",value:function(){var e=this,t=this.state,n=t.resin,i=t.date,a=n>=Z?i:i+J,c=new Date(n>=Z?i:i+(Z-n)*J),r=Object(R.e)(Math.abs(a-Date.now()));return Object(T.jsxs)(y.a,{children:[Object(T.jsxs)(u.a,{container:!0,sx:{px:2,py:1},spacing:2,children:[Object(T.jsx)(u.a,{item:!0,children:Object(T.jsx)(C.a,{src:g.a.resin.fragile,sx:{fontSize:"2em"}})}),Object(T.jsx)(u.a,{item:!0,children:Object(T.jsx)(j.a,{variant:"h6",children:"Resin Counter"})})]}),Object(T.jsx)(b.a,{}),Object(T.jsx)(h.a,{children:Object(T.jsxs)(u.a,{container:!0,spacing:2,children:[Object(T.jsx)(u.a,{item:!0,children:Object(T.jsxs)(j.a,{variant:"h2",children:[Object(T.jsx)(C.a,{src:g.a.resin.fragile}),Object(T.jsx)(O.c,{type:"number",sx:{width:"2em",fontSize:"4rem"},value:n,inputProps:{min:0,max:999,sx:{textAlign:"right"}},onChange:function(t){return e.setResin(t.target.value)}}),Object(T.jsxs)("span",{children:["/",Z]})]})}),Object(T.jsxs)(u.a,{item:!0,flexGrow:1,children:[Object(T.jsxs)(p.a,{fullWidth:!0,children:[Object(T.jsx)(x.a,{onClick:function(){return e.setResin(0)},disabled:0===n,children:"0"}),Object(T.jsx)(x.a,{onClick:function(){return e.setResin(n-1)},disabled:0===n,children:"-1"}),Object(T.jsx)(x.a,{onClick:function(){return e.setResin(n-20)},disabled:n<20,children:"-20"}),Object(T.jsx)(x.a,{onClick:function(){return e.setResin(n-40)},disabled:n<40,children:"-40"}),Object(T.jsx)(x.a,{onClick:function(){return e.setResin(n-60)},disabled:n<60,children:"-60"}),Object(T.jsx)(x.a,{onClick:function(){return e.setResin(n+1)},children:"+1"}),Object(T.jsx)(x.a,{onClick:function(){return e.setResin(n+60)},children:"+60"}),Object(T.jsxs)(x.a,{onClick:function(){return e.setResin(Z)},disabled:n===Z,children:["MAX ",Z]})]}),Object(T.jsx)(j.a,{variant:"subtitle1",sx:{mt:2},children:n<Z?Object(T.jsxs)("span",{children:["Next resin in ",r,", full Resin at ",c.toLocaleTimeString()," ",c.toLocaleDateString()]}):Object(T.jsxs)("span",{children:["Resin has been full for at least ",r,", since ",c.toLocaleTimeString()," ",c.toLocaleDateString()]})})]}),Object(T.jsx)(u.a,{item:!0,xs:12,children:Object(T.jsx)(j.a,{variant:"caption",children:"Because we do not provide a mechanism to synchronize resin time, actual resin recharge time might be as much as 8 minutes earlier than predicted."})})]})})]})}}]),n}(m.a.Component)}}]);
//# sourceMappingURL=18.d25ff265.chunk.js.map