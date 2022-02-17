(this["webpackJsonpgenshin-optimizer"]=this["webpackJsonpgenshin-optimizer"]||[]).push([[0],{442:function(e,t,n){"use strict";var o=n(2),r=n(7),a=n(0),i=(n(3),n(6)),c=n(102),s=n(9),u=n(11),l=n(254),d=n(89),p=n(103);function f(e){return Object(d.a)("MuiCard",e)}Object(p.a)("MuiCard",["root"]);var b=n(1),v=["className","raised"],m=Object(s.a)(l.a,{name:"MuiCard",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(){return{overflow:"hidden"}})),O=a.forwardRef((function(e,t){var n=Object(u.a)({props:e,name:"MuiCard"}),a=n.className,s=n.raised,l=void 0!==s&&s,d=Object(r.a)(n,v),p=Object(o.a)({},n,{raised:l}),O=function(e){var t=e.classes;return Object(c.a)({root:["root"]},f,t)}(p);return Object(b.jsx)(m,Object(o.a)({className:Object(i.a)(O.root,a),elevation:l?8:void 0,ref:t,ownerState:p},d))}));t.a=O},443:function(e,t,n){"use strict";var o=n(2),r=n(7),a=n(0),i=(n(3),n(6)),c=n(102),s=n(9),u=n(11),l=n(89),d=n(103);function p(e){return Object(l.a)("MuiCardContent",e)}Object(d.a)("MuiCardContent",["root"]);var f=n(1),b=["className","component"],v=Object(s.a)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(){return{padding:16,"&:last-child":{paddingBottom:24}}})),m=a.forwardRef((function(e,t){var n=Object(u.a)({props:e,name:"MuiCardContent"}),a=n.className,s=n.component,l=void 0===s?"div":s,d=Object(r.a)(n,b),m=Object(o.a)({},n,{component:l}),O=function(e){var t=e.classes;return Object(c.a)({root:["root"]},p,t)}(m);return Object(f.jsx)(v,Object(o.a)({as:l,className:Object(i.a)(O.root,a),ownerState:m,ref:t},d))}));t.a=m},739:function(e,t,n){"use strict";var o=n(2),r=n(7),a=n(0),i=(n(163),n(3),n(6)),c=n(102),s=n(789),u=n(254),l=n(9),d=n(11),p=n(56),f=n(139),b=n(143),v=n(28),m=n(764),O=n(248),j=n(89),h=n(103);function g(e){return Object(j.a)("MuiPopover",e)}Object(h.a)("MuiPopover",["root","paper"]);var y=n(1),x=["onEntering"],C=["action","anchorEl","anchorOrigin","anchorPosition","anchorReference","children","className","container","elevation","marginThreshold","open","PaperProps","transformOrigin","TransitionComponent","transitionDuration","TransitionProps"];function M(e,t){var n=0;return"number"===typeof t?n=t:"center"===t?n=e.height/2:"bottom"===t&&(n=e.height),n}function E(e,t){var n=0;return"number"===typeof t?n=t:"center"===t?n=e.width/2:"right"===t&&(n=e.width),n}function w(e){return[e.horizontal,e.vertical].map((function(e){return"number"===typeof e?"".concat(e,"px"):e})).join(" ")}function P(e){return"function"===typeof e?e():e}var R=Object(l.a)(O.a,{name:"MuiPopover",slot:"Root",overridesResolver:function(e,t){return t.root}})({}),T=Object(l.a)(u.a,{name:"MuiPopover",slot:"Paper",overridesResolver:function(e,t){return t.paper}})({position:"absolute",overflowY:"auto",overflowX:"hidden",minWidth:16,minHeight:16,maxWidth:"calc(100% - 32px)",maxHeight:"calc(100% - 32px)",outline:0}),k=a.forwardRef((function(e,t){var n=Object(d.a)({props:e,name:"MuiPopover"}),s=n.action,u=n.anchorEl,l=n.anchorOrigin,O=void 0===l?{vertical:"top",horizontal:"left"}:l,j=n.anchorPosition,h=n.anchorReference,k=void 0===h?"anchorEl":h,D=n.children,z=n.className,F=n.container,I=n.elevation,S=void 0===I?8:I,N=n.marginThreshold,L=void 0===N?16:N,H=n.open,A=n.PaperProps,K=void 0===A?{}:A,V=n.transformOrigin,B=void 0===V?{vertical:"top",horizontal:"left"}:V,W=n.TransitionComponent,G=void 0===W?m.a:W,J=n.transitionDuration,U=void 0===J?"auto":J,X=n.TransitionProps,Y=(X=void 0===X?{}:X).onEntering,q=Object(r.a)(n.TransitionProps,x),Q=Object(r.a)(n,C),Z=a.useRef(),$=Object(v.a)(Z,K.ref),_=Object(o.a)({},n,{anchorOrigin:O,anchorReference:k,elevation:S,marginThreshold:L,PaperProps:K,transformOrigin:B,TransitionComponent:G,transitionDuration:U,TransitionProps:q}),ee=function(e){var t=e.classes;return Object(c.a)({root:["root"],paper:["paper"]},g,t)}(_),te=a.useCallback((function(){if("anchorPosition"===k)return j;var e=P(u),t=(e&&1===e.nodeType?e:Object(f.a)(Z.current).body).getBoundingClientRect();return{top:t.top+M(t,O.vertical),left:t.left+E(t,O.horizontal)}}),[u,O.horizontal,O.vertical,j,k]),ne=a.useCallback((function(e){return{vertical:M(e,B.vertical),horizontal:E(e,B.horizontal)}}),[B.horizontal,B.vertical]),oe=a.useCallback((function(e){var t={width:e.offsetWidth,height:e.offsetHeight},n=ne(t);if("none"===k)return{top:null,left:null,transformOrigin:w(n)};var o=te(),r=o.top-n.vertical,a=o.left-n.horizontal,i=r+t.height,c=a+t.width,s=Object(b.a)(P(u)),l=s.innerHeight-L,d=s.innerWidth-L;if(r<L){var p=r-L;r-=p,n.vertical+=p}else if(i>l){var f=i-l;r-=f,n.vertical+=f}if(a<L){var v=a-L;a-=v,n.horizontal+=v}else if(c>d){var m=c-d;a-=m,n.horizontal+=m}return{top:"".concat(Math.round(r),"px"),left:"".concat(Math.round(a),"px"),transformOrigin:w(n)}}),[u,k,te,ne,L]),re=a.useCallback((function(){var e=Z.current;if(e){var t=oe(e);null!==t.top&&(e.style.top=t.top),null!==t.left&&(e.style.left=t.left),e.style.transformOrigin=t.transformOrigin}}),[oe]);a.useEffect((function(){H&&re()})),a.useImperativeHandle(s,(function(){return H?{updatePosition:function(){re()}}:null}),[H,re]),a.useEffect((function(){if(H){var e=Object(p.a)((function(){re()})),t=Object(b.a)(u);return t.addEventListener("resize",e),function(){e.clear(),t.removeEventListener("resize",e)}}}),[u,H,re]);var ae=U;"auto"!==U||G.muiSupportAuto||(ae=void 0);var ie=F||(u?Object(f.a)(P(u)).body:void 0);return Object(y.jsx)(R,Object(o.a)({BackdropProps:{invisible:!0},className:Object(i.a)(ee.root,z),container:ie,open:H,ref:t,ownerState:_},Q,{children:Object(y.jsx)(G,Object(o.a)({appear:!0,in:H,onEntering:function(e,t){Y&&Y(e,t),re()},timeout:ae},q,{children:Object(y.jsx)(T,Object(o.a)({elevation:S},K,{ref:$,className:Object(i.a)(ee.paper,K.className),children:D}))}))}))})),D=n(33);function z(e){return Object(j.a)("MuiMenu",e)}Object(h.a)("MuiMenu",["root","paper","list"]);var F=["onEntering"],I=["autoFocus","children","disableAutoFocusItem","MenuListProps","onClose","open","PaperProps","PopoverClasses","transitionDuration","TransitionProps","variant"],S={vertical:"top",horizontal:"right"},N={vertical:"top",horizontal:"left"},L=Object(l.a)(k,{shouldForwardProp:function(e){return Object(l.b)(e)||"classes"===e},name:"MuiMenu",slot:"Root",overridesResolver:function(e,t){return t.root}})({}),H=Object(l.a)(u.a,{name:"MuiMenu",slot:"Paper",overridesResolver:function(e,t){return t.paper}})({maxHeight:"calc(100% - 96px)",WebkitOverflowScrolling:"touch"}),A=Object(l.a)(s.a,{name:"MuiMenu",slot:"List",overridesResolver:function(e,t){return t.list}})({outline:0}),K=a.forwardRef((function(e,t){var n=Object(d.a)({props:e,name:"MuiMenu"}),s=n.autoFocus,u=void 0===s||s,l=n.children,p=n.disableAutoFocusItem,f=void 0!==p&&p,b=n.MenuListProps,v=void 0===b?{}:b,m=n.onClose,O=n.open,j=n.PaperProps,h=void 0===j?{}:j,g=n.PopoverClasses,x=n.transitionDuration,C=void 0===x?"auto":x,M=n.TransitionProps,E=(M=void 0===M?{}:M).onEntering,w=n.variant,P=void 0===w?"selectedMenu":w,R=Object(r.a)(n.TransitionProps,F),T=Object(r.a)(n,I),k=Object(D.a)(),K="rtl"===k.direction,V=Object(o.a)({},n,{autoFocus:u,disableAutoFocusItem:f,MenuListProps:v,onEntering:E,PaperProps:h,transitionDuration:C,TransitionProps:R,variant:P}),B=function(e){var t=e.classes;return Object(c.a)({root:["root"],paper:["paper"],list:["list"]},z,t)}(V),W=u&&!f&&O,G=a.useRef(null),J=-1;return a.Children.map(l,(function(e,t){a.isValidElement(e)&&(e.props.disabled||("selectedMenu"===P&&e.props.selected||-1===J)&&(J=t))})),Object(y.jsx)(L,Object(o.a)({classes:g,onClose:m,anchorOrigin:{vertical:"bottom",horizontal:K?"right":"left"},transformOrigin:K?S:N,PaperProps:Object(o.a)({component:H},h,{classes:Object(o.a)({},h.classes,{root:B.paper})}),className:B.root,open:O,ref:t,transitionDuration:C,TransitionProps:Object(o.a)({onEntering:function(e,t){G.current&&G.current.adjustStyleForScrollbar(e,k),E&&E(e,t)}},R),ownerState:V},T,{children:Object(y.jsx)(A,Object(o.a)({onKeyDown:function(e){"Tab"===e.key&&(e.preventDefault(),m&&m(e,"tabKeyDown"))},actions:G,autoFocus:u&&(-1===J||f),autoFocusItem:W,variant:P},v,{className:Object(i.a)(B.list,v.className),children:l}))}))}));t.a=K},764:function(e,t,n){"use strict";var o=n(2),r=n(7),a=n(0),i=(n(3),n(212)),c=n(33),s=n(35),u=n(28),l=n(1),d=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function p(e){return"scale(".concat(e,", ").concat(Math.pow(e,2),")")}var f={entering:{opacity:1,transform:p(1)},entered:{opacity:1,transform:"none"}},b=a.forwardRef((function(e,t){var n=e.addEndListener,b=e.appear,v=void 0===b||b,m=e.children,O=e.easing,j=e.in,h=e.onEnter,g=e.onEntered,y=e.onEntering,x=e.onExit,C=e.onExited,M=e.onExiting,E=e.style,w=e.timeout,P=void 0===w?"auto":w,R=e.TransitionComponent,T=void 0===R?i.a:R,k=Object(r.a)(e,d),D=a.useRef(),z=a.useRef(),F=Object(c.a)(),I=a.useRef(null),S=Object(u.a)(m.ref,t),N=Object(u.a)(I,S),L=function(e){return function(t){if(e){var n=I.current;void 0===t?e(n):e(n,t)}}},H=L(y),A=L((function(e,t){Object(s.b)(e);var n,o=Object(s.a)({style:E,timeout:P,easing:O},{mode:"enter"}),r=o.duration,a=o.delay,i=o.easing;"auto"===P?(n=F.transitions.getAutoHeightDuration(e.clientHeight),z.current=n):n=r,e.style.transition=[F.transitions.create("opacity",{duration:n,delay:a}),F.transitions.create("transform",{duration:.666*n,delay:a,easing:i})].join(","),h&&h(e,t)})),K=L(g),V=L(M),B=L((function(e){var t,n=Object(s.a)({style:E,timeout:P,easing:O},{mode:"exit"}),o=n.duration,r=n.delay,a=n.easing;"auto"===P?(t=F.transitions.getAutoHeightDuration(e.clientHeight),z.current=t):t=o,e.style.transition=[F.transitions.create("opacity",{duration:t,delay:r}),F.transitions.create("transform",{duration:.666*t,delay:r||.333*t,easing:a})].join(","),e.style.opacity="0",e.style.transform=p(.75),x&&x(e)})),W=L(C);return a.useEffect((function(){return function(){clearTimeout(D.current)}}),[]),Object(l.jsx)(T,Object(o.a)({appear:v,in:j,nodeRef:I,onEnter:A,onEntered:K,onEntering:H,onExit:B,onExited:W,onExiting:V,addEndListener:function(e){"auto"===P&&(D.current=setTimeout(e,z.current||0)),n&&n(I.current,e)},timeout:"auto"===P?null:P},k,{children:function(e,t){return a.cloneElement(m,Object(o.a)({style:Object(o.a)({opacity:0,transform:p(.75),visibility:"exited"!==e||j?void 0:"hidden"},f[e],E,m.props.style),ref:N},t))}}))}));b.muiSupportAuto=!0,t.a=b},766:function(e,t,n){"use strict";var o=n(62),r=n(1);t.a=Object(o.a)(Object(r.jsx)("path",{d:"M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"}),"KeyboardArrowDown")},789:function(e,t,n){"use strict";var o=n(2),r=n(7),a=n(0),i=(n(163),n(3),n(139)),c=n(256),s=n(235).a,u=n(28),l=n(91),d=n(1),p=["actions","autoFocus","autoFocusItem","children","className","disabledItemsFocusable","disableListWrap","onKeyDown","variant"];function f(e,t,n){return e===t?e.firstChild:t&&t.nextElementSibling?t.nextElementSibling:n?null:e.firstChild}function b(e,t,n){return e===t?n?e.firstChild:e.lastChild:t&&t.previousElementSibling?t.previousElementSibling:n?null:e.lastChild}function v(e,t){if(void 0===t)return!0;var n=e.innerText;return void 0===n&&(n=e.textContent),0!==(n=n.trim().toLowerCase()).length&&(t.repeating?n[0]===t.keys[0]:0===n.indexOf(t.keys.join("")))}function m(e,t,n,o,r,a){for(var i=!1,c=r(e,t,!!t&&n);c;){if(c===e.firstChild){if(i)return!1;i=!0}var s=!o&&(c.disabled||"true"===c.getAttribute("aria-disabled"));if(c.hasAttribute("tabindex")&&v(c,a)&&!s)return c.focus(),!0;c=r(e,c,n)}return!1}var O=a.forwardRef((function(e,t){var n=e.actions,O=e.autoFocus,j=void 0!==O&&O,h=e.autoFocusItem,g=void 0!==h&&h,y=e.children,x=e.className,C=e.disabledItemsFocusable,M=void 0!==C&&C,E=e.disableListWrap,w=void 0!==E&&E,P=e.onKeyDown,R=e.variant,T=void 0===R?"selectedMenu":R,k=Object(r.a)(e,p),D=a.useRef(null),z=a.useRef({keys:[],repeating:!0,previousKeyMatched:!0,lastTime:null});Object(l.a)((function(){j&&D.current.focus()}),[j]),a.useImperativeHandle(n,(function(){return{adjustStyleForScrollbar:function(e,t){var n=!D.current.style.width;if(e.clientHeight<D.current.clientHeight&&n){var o="".concat(s(Object(i.a)(e)),"px");D.current.style["rtl"===t.direction?"paddingLeft":"paddingRight"]=o,D.current.style.width="calc(100% + ".concat(o,")")}return D.current}}}),[]);var F=Object(u.a)(D,t),I=-1;a.Children.forEach(y,(function(e,t){a.isValidElement(e)&&(e.props.disabled||("selectedMenu"===T&&e.props.selected||-1===I)&&(I=t))}));var S=a.Children.map(y,(function(e,t){if(t===I){var n={};return g&&(n.autoFocus=!0),void 0===e.props.tabIndex&&"selectedMenu"===T&&(n.tabIndex=0),a.cloneElement(e,n)}return e}));return Object(d.jsx)(c.a,Object(o.a)({role:"menu",ref:F,className:x,onKeyDown:function(e){var t=D.current,n=e.key,o=Object(i.a)(t).activeElement;if("ArrowDown"===n)e.preventDefault(),m(t,o,w,M,f);else if("ArrowUp"===n)e.preventDefault(),m(t,o,w,M,b);else if("Home"===n)e.preventDefault(),m(t,null,w,M,f);else if("End"===n)e.preventDefault(),m(t,null,w,M,b);else if(1===n.length){var r=z.current,a=n.toLowerCase(),c=performance.now();r.keys.length>0&&(c-r.lastTime>500?(r.keys=[],r.repeating=!0,r.previousKeyMatched=!0):r.repeating&&a!==r.keys[0]&&(r.repeating=!1)),r.lastTime=c,r.keys.push(a);var s=o&&!r.repeating&&v(o,r);r.previousKeyMatched&&(s||m(t,o,!1,M,f,r))?e.preventDefault():r.previousKeyMatched=!1}P&&P(e)},tabIndex:j?0:-1},k,{children:S}))}));t.a=O},790:function(e,t,n){"use strict";var o=n(5),r=n(7),a=n(2),i=n(0),c=(n(3),n(6)),s=n(102),u=n(88),l=n(9),d=n(11),p=n(43),f=n(210),b=n(91),v=n(28),m=n(152),O=n(151),j=n(100),h=n(89),g=n(103);function y(e){return Object(h.a)("MuiMenuItem",e)}var x=Object(g.a)("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),C=n(1),M=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex"],E=Object(l.a)(f.a,{shouldForwardProp:function(e){return Object(l.b)(e)||"classes"===e},name:"MuiMenuItem",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,n.dense&&t.dense,n.divider&&t.divider,!n.disableGutters&&t.gutters]}})((function(e){var t,n=e.theme,r=e.ownerState;return Object(a.a)({},n.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!r.disableGutters&&{paddingLeft:16,paddingRight:16},r.divider&&{borderBottom:"1px solid ".concat(n.palette.divider),backgroundClip:"padding-box"},(t={"&:hover":{textDecoration:"none",backgroundColor:n.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},Object(o.a)(t,"&.".concat(x.selected),Object(o.a)({backgroundColor:Object(u.a)(n.palette.primary.main,n.palette.action.selectedOpacity)},"&.".concat(x.focusVisible),{backgroundColor:Object(u.a)(n.palette.primary.main,n.palette.action.selectedOpacity+n.palette.action.focusOpacity)})),Object(o.a)(t,"&.".concat(x.selected,":hover"),{backgroundColor:Object(u.a)(n.palette.primary.main,n.palette.action.selectedOpacity+n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:Object(u.a)(n.palette.primary.main,n.palette.action.selectedOpacity)}}),Object(o.a)(t,"&.".concat(x.focusVisible),{backgroundColor:n.palette.action.focus}),Object(o.a)(t,"&.".concat(x.disabled),{opacity:n.palette.action.disabledOpacity}),Object(o.a)(t,"& + .".concat(m.a.root),{marginTop:n.spacing(1),marginBottom:n.spacing(1)}),Object(o.a)(t,"& + .".concat(m.a.inset),{marginLeft:52}),Object(o.a)(t,"& .".concat(j.a.root),{marginTop:0,marginBottom:0}),Object(o.a)(t,"& .".concat(j.a.inset),{paddingLeft:36}),Object(o.a)(t,"& .".concat(O.a.root),{minWidth:36}),t),!r.dense&&Object(o.a)({},n.breakpoints.up("sm"),{minHeight:"auto"}),r.dense&&Object(a.a)({minHeight:32,paddingTop:4,paddingBottom:4},n.typography.body2,Object(o.a)({},"& .".concat(O.a.root," svg"),{fontSize:"1.25rem"})))})),w=i.forwardRef((function(e,t){var n=Object(d.a)({props:e,name:"MuiMenuItem"}),o=n.autoFocus,u=void 0!==o&&o,l=n.component,f=void 0===l?"li":l,m=n.dense,O=void 0!==m&&m,j=n.divider,h=void 0!==j&&j,g=n.disableGutters,x=void 0!==g&&g,w=n.focusVisibleClassName,P=n.role,R=void 0===P?"menuitem":P,T=n.tabIndex,k=Object(r.a)(n,M),D=i.useContext(p.a),z={dense:O||D.dense||!1,disableGutters:x},F=i.useRef(null);Object(b.a)((function(){u&&F.current&&F.current.focus()}),[u]);var I,S=Object(a.a)({},n,{dense:z.dense,divider:h,disableGutters:x}),N=function(e){var t=e.disabled,n=e.dense,o=e.divider,r=e.disableGutters,i=e.selected,c=e.classes,u={root:["root",n&&"dense",t&&"disabled",!r&&"gutters",o&&"divider",i&&"selected"]},l=Object(s.a)(u,y,c);return Object(a.a)({},c,l)}(n),L=Object(v.a)(F,t);return n.disabled||(I=void 0!==T?T:-1),Object(C.jsx)(p.a.Provider,{value:z,children:Object(C.jsx)(E,Object(a.a)({ref:L,role:R,tabIndex:I,component:f,focusVisibleClassName:Object(c.a)(N.focusVisible,w)},k,{ownerState:S,classes:N}))})}));t.a=w}}]);
//# sourceMappingURL=0.a9f3f05b.chunk.js.map