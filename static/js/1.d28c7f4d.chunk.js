(this["webpackJsonpgenshin-optimizer"]=this["webpackJsonpgenshin-optimizer"]||[]).push([[1],{348:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var o=n(0),r=n(407);function a(){return o.useContext(r.a)}},349:function(e,t,n){"use strict";function o(e){var t=e.props,n=e.states,o=e.muiFormControl;return n.reduce((function(e,n){return e[n]=t[n],o&&"undefined"===typeof t[n]&&(e[n]=o[n]),e}),{})}n.d(t,"a",(function(){return o}))},407:function(e,t,n){"use strict";var o=n(0),r=o.createContext();t.a=r},408:function(e,t,n){"use strict";function o(e){return null!=e&&!(Array.isArray(e)&&0===e.length)}function r(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return e&&(o(e.value)&&""!==e.value||t&&o(e.defaultValue)&&""!==e.defaultValue)}function a(e){return e.startAdornment}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}))},441:function(e,t,n){"use strict";n.d(t,"e",(function(){return W})),n.d(t,"d",(function(){return I})),n.d(t,"b",(function(){return H})),n.d(t,"a",(function(){return T}));var o=n(8),r=n(6),a=n(3),i=n(2),l=n(97),u=n(0),c=n(7),d=n(100),s=n(155),p=n(204),f=n(203),b=n(86),m=n(1),h=["onChange","maxRows","minRows","style","value"];function v(e,t){return parseInt(e[t],10)||0}var j={visibility:"hidden",position:"absolute",overflow:"hidden",height:0,top:0,left:0,transform:"translateZ(0)"},y=u.forwardRef((function(e,t){var n=e.onChange,r=e.maxRows,l=e.minRows,c=void 0===l?1:l,d=e.style,y=e.value,O=Object(a.a)(e,h),w=u.useRef(null!=y).current,g=u.useRef(null),x=Object(s.a)(t,g),S=u.useRef(null),C=u.useRef(0),z=u.useState({}),R=Object(o.a)(z,2),A=R[0],k=R[1],F=u.useCallback((function(){var t=g.current,n=Object(p.a)(t).getComputedStyle(t);if("0px"!==n.width){var o=S.current;o.style.width=n.width,o.value=t.value||e.placeholder||"x","\n"===o.value.slice(-1)&&(o.value+=" ");var a=n["box-sizing"],i=v(n,"padding-bottom")+v(n,"padding-top"),l=v(n,"border-bottom-width")+v(n,"border-top-width"),u=o.scrollHeight;o.value="x";var d=o.scrollHeight,s=u;c&&(s=Math.max(Number(c)*d,s)),r&&(s=Math.min(Number(r)*d,s));var f=(s=Math.max(s,d))+("border-box"===a?i+l:0),b=Math.abs(s-u)<=1;k((function(e){return C.current<20&&(f>0&&Math.abs((e.outerHeightStyle||0)-f)>1||e.overflow!==b)?(C.current+=1,{overflow:b,outerHeightStyle:f}):e}))}}),[r,c,e.placeholder]);u.useEffect((function(){var e,t=Object(f.a)((function(){C.current=0,F()})),n=Object(p.a)(g.current);return n.addEventListener("resize",t),"undefined"!==typeof ResizeObserver&&(e=new ResizeObserver(t)).observe(g.current),function(){t.clear(),n.removeEventListener("resize",t),e&&e.disconnect()}}),[F]),Object(b.a)((function(){F()})),u.useEffect((function(){C.current=0}),[y]);return Object(m.jsxs)(u.Fragment,{children:[Object(m.jsx)("textarea",Object(i.a)({value:y,onChange:function(e){C.current=0,w||F(),n&&n(e)},ref:x,rows:c,style:Object(i.a)({height:A.outerHeightStyle,overflow:A.overflow?"hidden":null},d)},O)),Object(m.jsx)("textarea",{"aria-hidden":!0,className:e.className,readOnly:!0,ref:S,tabIndex:-1,style:Object(i.a)({},j,d,{padding:0})})]})})),O=n(92),w=n(349),g=n(407),x=n(348),S=n(9),C=n(11),z=n(12),R=n(30),A=n(91),k=n(207),F=n(408),E=n(89),L=n(101);function M(e){return Object(E.a)("MuiInputBase",e)}var B=Object(L.a)("MuiInputBase",["root","formControl","focused","disabled","adornedStart","adornedEnd","error","sizeSmall","multiline","colorSecondary","fullWidth","hiddenLabel","input","inputSizeSmall","inputMultiline","inputTypeSearch","inputAdornedStart","inputAdornedEnd","inputHiddenLabel"]),N=["aria-describedby","autoComplete","autoFocus","className","color","components","componentsProps","defaultValue","disabled","disableInjectingGlobalStyles","endAdornment","error","fullWidth","id","inputComponent","inputProps","inputRef","margin","maxRows","minRows","multiline","name","onBlur","onChange","onClick","onFocus","onKeyDown","onKeyUp","placeholder","readOnly","renderSuffix","rows","size","startAdornment","type","value"],W=function(e,t){var n=e.ownerState;return[t.root,n.formControl&&t.formControl,n.startAdornment&&t.adornedStart,n.endAdornment&&t.adornedEnd,n.error&&t.error,"small"===n.size&&t.sizeSmall,n.multiline&&t.multiline,n.color&&t["color".concat(Object(z.a)(n.color))],n.fullWidth&&t.fullWidth,n.hiddenLabel&&t.hiddenLabel]},I=function(e,t){var n=e.ownerState;return[t.input,"small"===n.size&&t.inputSizeSmall,n.multiline&&t.inputMultiline,"search"===n.type&&t.inputTypeSearch,n.startAdornment&&t.inputAdornedStart,n.endAdornment&&t.inputAdornedEnd,n.hiddenLabel&&t.inputHiddenLabel]},H=Object(S.a)("div",{name:"MuiInputBase",slot:"Root",overridesResolver:W})((function(e){var t=e.theme,n=e.ownerState;return Object(i.a)({},t.typography.body1,Object(r.a)({color:t.palette.text.primary,lineHeight:"1.4375em",boxSizing:"border-box",position:"relative",cursor:"text",display:"inline-flex",alignItems:"center"},"&.".concat(B.disabled),{color:t.palette.text.disabled,cursor:"default"}),n.multiline&&Object(i.a)({padding:"4px 0 5px"},"small"===n.size&&{paddingTop:1}),n.fullWidth&&{width:"100%"})})),T=Object(S.a)("input",{name:"MuiInputBase",slot:"Input",overridesResolver:I})((function(e){var t,n=e.theme,o=e.ownerState,a="light"===n.palette.mode,l={color:"currentColor",opacity:a?.42:.5,transition:n.transitions.create("opacity",{duration:n.transitions.duration.shorter})},u={opacity:"0 !important"},c={opacity:a?.42:.5};return Object(i.a)((t={font:"inherit",letterSpacing:"inherit",color:"currentColor",padding:"4px 0 5px",border:0,boxSizing:"content-box",background:"none",height:"1.4375em",margin:0,WebkitTapHighlightColor:"transparent",display:"block",minWidth:0,width:"100%",animationName:"mui-auto-fill-cancel",animationDuration:"10ms","&::-webkit-input-placeholder":l,"&::-moz-placeholder":l,"&:-ms-input-placeholder":l,"&::-ms-input-placeholder":l,"&:focus":{outline:0},"&:invalid":{boxShadow:"none"},"&::-webkit-search-decoration":{WebkitAppearance:"none"}},Object(r.a)(t,"label[data-shrink=false] + .".concat(B.formControl," &"),{"&::-webkit-input-placeholder":u,"&::-moz-placeholder":u,"&:-ms-input-placeholder":u,"&::-ms-input-placeholder":u,"&:focus::-webkit-input-placeholder":c,"&:focus::-moz-placeholder":c,"&:focus:-ms-input-placeholder":c,"&:focus::-ms-input-placeholder":c}),Object(r.a)(t,"&.".concat(B.disabled),{opacity:1,WebkitTextFillColor:n.palette.text.disabled}),Object(r.a)(t,"&:-webkit-autofill",{animationDuration:"5000s",animationName:"mui-auto-fill"}),t),"small"===o.size&&{paddingTop:1},o.multiline&&{height:"auto",resize:"none",padding:0,paddingTop:0},"search"===o.type&&{MozAppearance:"textfield"})})),K=Object(m.jsx)(k.a,{styles:{"@keyframes mui-auto-fill":{from:{display:"block"}},"@keyframes mui-auto-fill-cancel":{from:{display:"block"}}}}),P=u.forwardRef((function(e,t){var n=Object(C.a)({props:e,name:"MuiInputBase"}),r=n["aria-describedby"],s=n.autoComplete,p=n.autoFocus,f=n.className,b=n.components,h=void 0===b?{}:b,v=n.componentsProps,j=void 0===v?{}:v,S=n.defaultValue,k=n.disabled,E=n.disableInjectingGlobalStyles,L=n.endAdornment,B=n.fullWidth,W=void 0!==B&&B,I=n.id,P=n.inputComponent,D=void 0===P?"input":P,V=n.inputProps,q=void 0===V?{}:V,U=n.inputRef,G=n.maxRows,J=n.minRows,Z=n.multiline,Q=void 0!==Z&&Z,X=n.name,Y=n.onBlur,$=n.onChange,_=n.onClick,ee=n.onFocus,te=n.onKeyDown,ne=n.onKeyUp,oe=n.placeholder,re=n.readOnly,ae=n.renderSuffix,ie=n.rows,le=n.startAdornment,ue=n.type,ce=void 0===ue?"text":ue,de=n.value,se=Object(a.a)(n,N),pe=null!=q.value?q.value:de,fe=u.useRef(null!=pe).current,be=u.useRef(),me=u.useCallback((function(e){0}),[]),he=Object(R.a)(q.ref,me),ve=Object(R.a)(U,he),je=Object(R.a)(be,ve),ye=u.useState(!1),Oe=Object(o.a)(ye,2),we=Oe[0],ge=Oe[1],xe=Object(x.a)();var Se=Object(w.a)({props:n,muiFormControl:xe,states:["color","disabled","error","hiddenLabel","size","required","filled"]});Se.focused=xe?xe.focused:we,u.useEffect((function(){!xe&&k&&we&&(ge(!1),Y&&Y())}),[xe,k,we,Y]);var Ce=xe&&xe.onFilled,ze=xe&&xe.onEmpty,Re=u.useCallback((function(e){Object(F.b)(e)?Ce&&Ce():ze&&ze()}),[Ce,ze]);Object(A.a)((function(){fe&&Re({value:pe})}),[pe,Re,fe]);u.useEffect((function(){Re(be.current)}),[]);var Ae=D,ke=q;Q&&"input"===Ae&&(ke=ie?Object(i.a)({type:void 0,minRows:ie,maxRows:ie},ke):Object(i.a)({type:void 0,maxRows:G,minRows:J},ke),Ae=y);u.useEffect((function(){xe&&xe.setAdornedStart(Boolean(le))}),[xe,le]);var Fe=Object(i.a)({},n,{color:Se.color||"primary",disabled:Se.disabled,endAdornment:L,error:Se.error,focused:Se.focused,formControl:xe,fullWidth:W,hiddenLabel:Se.hiddenLabel,multiline:Q,size:Se.size,startAdornment:le,type:ce}),Ee=function(e){var t=e.classes,n=e.color,o=e.disabled,r=e.error,a=e.endAdornment,i=e.focused,l=e.formControl,u=e.fullWidth,c=e.hiddenLabel,s=e.multiline,p=e.size,f=e.startAdornment,b=e.type,m={root:["root","color".concat(Object(z.a)(n)),o&&"disabled",r&&"error",u&&"fullWidth",i&&"focused",l&&"formControl","small"===p&&"sizeSmall",s&&"multiline",f&&"adornedStart",a&&"adornedEnd",c&&"hiddenLabel"],input:["input",o&&"disabled","search"===b&&"inputTypeSearch",s&&"inputMultiline","small"===p&&"inputSizeSmall",c&&"inputHiddenLabel",f&&"inputAdornedStart",a&&"inputAdornedEnd"]};return Object(d.a)(m,M,t)}(Fe),Le=h.Root||H,Me=j.root||{},Be=h.Input||T;return ke=Object(i.a)({},ke,j.input),Object(m.jsxs)(u.Fragment,{children:[!E&&K,Object(m.jsxs)(Le,Object(i.a)({},Me,!Object(O.a)(Le)&&{ownerState:Object(i.a)({},Fe,Me.ownerState)},{ref:t,onClick:function(e){be.current&&e.currentTarget===e.target&&be.current.focus(),_&&_(e)}},se,{className:Object(c.a)(Ee.root,Me.className,f),children:[le,Object(m.jsx)(g.a.Provider,{value:null,children:Object(m.jsx)(Be,Object(i.a)({ownerState:Fe,"aria-invalid":Se.error,"aria-describedby":r,autoComplete:s,autoFocus:p,defaultValue:S,disabled:Se.disabled,id:I,onAnimationStart:function(e){Re("mui-auto-fill-cancel"===e.animationName?be.current:{value:"x"})},name:X,placeholder:oe,readOnly:re,required:Se.required,rows:ie,value:pe,onKeyDown:te,onKeyUp:ne,type:ce},ke,!Object(O.a)(Be)&&{as:Ae,ownerState:Object(i.a)({},Fe,ke.ownerState)},{ref:je,className:Object(c.a)(Ee.input,ke.className),onBlur:function(e){Y&&Y(e),q.onBlur&&q.onBlur(e),xe&&xe.onBlur?xe.onBlur(e):ge(!1)},onChange:function(e){if(!fe){var t=e.target||be.current;if(null==t)throw new Error(Object(l.a)(1));Re({value:t.value})}for(var n=arguments.length,o=new Array(n>1?n-1:0),r=1;r<n;r++)o[r-1]=arguments[r];q.onChange&&q.onChange.apply(q,[e].concat(o)),$&&$.apply(void 0,[e].concat(o))},onFocus:function(e){Se.disabled?e.stopPropagation():(ee&&ee(e),q.onFocus&&q.onFocus(e),xe&&xe.onFocus?xe.onFocus(e):ge(!0))}}))}),L,ae?ae(Object(i.a)({},Se,{startAdornment:le})):null]}))]})}));t.c=P}}]);
//# sourceMappingURL=1.d28c7f4d.chunk.js.map