"use strict";(self.webpackChunkgenshin_optimizer=self.webpackChunkgenshin_optimizer||[]).push([[0],{93840:function(e,n,t){var o=t(72791).createContext();n.Z=o},76147:function(e,n,t){function o(e){var n=e.props,t=e.states,o=e.muiFormControl;return t.reduce((function(e,t){return e[t]=n[t],o&&"undefined"===typeof n[t]&&(e[t]=o[t]),e}),{})}t.d(n,{Z:function(){return o}})},52930:function(e,n,t){t.d(n,{Z:function(){return i}});var o=t(72791),r=t(93840);function i(){return o.useContext(r.Z)}},28e3:function(e,n,t){t.d(n,{rA:function(){return H},Ej:function(){return j},ZP:function(){return K},_o:function(){return I},Gx:function(){return W}});var o=t(29439),r=t(4942),i=t(63366),a=t(87462),l=t(46189),u=t(72791),d=t(28182),s=t(47563),c=t(27979),p=t(93981),f=t(75721),m=t(80184),h=["onChange","maxRows","minRows","style","value"];function b(e,n){return parseInt(e[n],10)||0}var v={visibility:"hidden",position:"absolute",overflow:"hidden",height:0,top:0,left:0,transform:"translateZ(0)"},y=u.forwardRef((function(e,n){var t=e.onChange,r=e.maxRows,l=e.minRows,d=void 0===l?1:l,y=e.style,Z=e.value,w=(0,i.Z)(e,h),g=u.useRef(null!=Z).current,x=u.useRef(null),S=(0,s.Z)(n,x),C=u.useRef(null),z=u.useRef(0),A=u.useState({}),R=(0,o.Z)(A,2),k=R[0],E=R[1],F=u.useCallback((function(){var n=x.current,t=(0,c.Z)(n).getComputedStyle(n);if("0px"!==t.width){var o=C.current;o.style.width=t.width,o.value=n.value||e.placeholder||"x","\n"===o.value.slice(-1)&&(o.value+=" ");var i=t["box-sizing"],a=b(t,"padding-bottom")+b(t,"padding-top"),l=b(t,"border-bottom-width")+b(t,"border-top-width"),u=o.scrollHeight;o.value="x";var s=o.scrollHeight,p=u;d&&(p=Math.max(Number(d)*s,p)),r&&(p=Math.min(Number(r)*s,p));var f=(p=Math.max(p,s))+("border-box"===i?a+l:0),m=Math.abs(p-u)<=1;E((function(e){return z.current<20&&(f>0&&Math.abs((e.outerHeightStyle||0)-f)>1||e.overflow!==m)?(z.current+=1,{overflow:m,outerHeightStyle:f}):e}))}}),[r,d,e.placeholder]);u.useEffect((function(){var e,n=(0,p.Z)((function(){z.current=0,F()})),t=(0,c.Z)(x.current);return t.addEventListener("resize",n),"undefined"!==typeof ResizeObserver&&(e=new ResizeObserver(n)).observe(x.current),function(){n.clear(),t.removeEventListener("resize",n),e&&e.disconnect()}}),[F]),(0,f.Z)((function(){F()})),u.useEffect((function(){z.current=0}),[Z]);return(0,m.jsxs)(u.Fragment,{children:[(0,m.jsx)("textarea",(0,a.Z)({value:Z,onChange:function(e){z.current=0,g||F(),t&&t(e)},ref:S,rows:d,style:(0,a.Z)({height:k.outerHeightStyle,overflow:k.overflow?"hidden":null},y)},w)),(0,m.jsx)("textarea",{"aria-hidden":!0,className:e.className,readOnly:!0,ref:C,tabIndex:-1,style:(0,a.Z)({},v,y,{padding:0})})]})})),Z=t(90767),w=t(20627),g=t(76147),x=t(93840),S=t(52930),C=t(66934),z=t(93736),A=t(14036),R=t(42071),k=t(40162),E=t(25502),F=t(35470),B=t(95159);function L(e){return(0,B.Z)("MuiInputBase",e)}var M=(0,t(30208).Z)("MuiInputBase",["root","formControl","focused","disabled","adornedStart","adornedEnd","error","sizeSmall","multiline","colorSecondary","fullWidth","hiddenLabel","input","inputSizeSmall","inputMultiline","inputTypeSearch","inputAdornedStart","inputAdornedEnd","inputHiddenLabel"]),N=["aria-describedby","autoComplete","autoFocus","className","color","components","componentsProps","defaultValue","disabled","disableInjectingGlobalStyles","endAdornment","error","fullWidth","id","inputComponent","inputProps","inputRef","margin","maxRows","minRows","multiline","name","onBlur","onChange","onClick","onFocus","onKeyDown","onKeyUp","placeholder","readOnly","renderSuffix","rows","size","startAdornment","type","value"],W=function(e,n){var t=e.ownerState;return[n.root,t.formControl&&n.formControl,t.startAdornment&&n.adornedStart,t.endAdornment&&n.adornedEnd,t.error&&n.error,"small"===t.size&&n.sizeSmall,t.multiline&&n.multiline,t.color&&n["color".concat((0,A.Z)(t.color))],t.fullWidth&&n.fullWidth,t.hiddenLabel&&n.hiddenLabel]},I=function(e,n){var t=e.ownerState;return[n.input,"small"===t.size&&n.inputSizeSmall,t.multiline&&n.inputMultiline,"search"===t.type&&n.inputTypeSearch,t.startAdornment&&n.inputAdornedStart,t.endAdornment&&n.inputAdornedEnd,t.hiddenLabel&&n.inputHiddenLabel]},j=(0,C.ZP)("div",{name:"MuiInputBase",slot:"Root",overridesResolver:W})((function(e){var n=e.theme,t=e.ownerState;return(0,a.Z)({},n.typography.body1,(0,r.Z)({color:n.palette.text.primary,lineHeight:"1.4375em",boxSizing:"border-box",position:"relative",cursor:"text",display:"inline-flex",alignItems:"center"},"&.".concat(M.disabled),{color:n.palette.text.disabled,cursor:"default"}),t.multiline&&(0,a.Z)({padding:"4px 0 5px"},"small"===t.size&&{paddingTop:1}),t.fullWidth&&{width:"100%"})})),H=(0,C.ZP)("input",{name:"MuiInputBase",slot:"Input",overridesResolver:I})((function(e){var n,t=e.theme,o=e.ownerState,i="light"===t.palette.mode,l={color:"currentColor",opacity:i?.42:.5,transition:t.transitions.create("opacity",{duration:t.transitions.duration.shorter})},u={opacity:"0 !important"},d={opacity:i?.42:.5};return(0,a.Z)((n={font:"inherit",letterSpacing:"inherit",color:"currentColor",padding:"4px 0 5px",border:0,boxSizing:"content-box",background:"none",height:"1.4375em",margin:0,WebkitTapHighlightColor:"transparent",display:"block",minWidth:0,width:"100%",animationName:"mui-auto-fill-cancel",animationDuration:"10ms","&::-webkit-input-placeholder":l,"&::-moz-placeholder":l,"&:-ms-input-placeholder":l,"&::-ms-input-placeholder":l,"&:focus":{outline:0},"&:invalid":{boxShadow:"none"},"&::-webkit-search-decoration":{WebkitAppearance:"none"}},(0,r.Z)(n,"label[data-shrink=false] + .".concat(M.formControl," &"),{"&::-webkit-input-placeholder":u,"&::-moz-placeholder":u,"&:-ms-input-placeholder":u,"&::-ms-input-placeholder":u,"&:focus::-webkit-input-placeholder":d,"&:focus::-moz-placeholder":d,"&:focus:-ms-input-placeholder":d,"&:focus::-ms-input-placeholder":d}),(0,r.Z)(n,"&.".concat(M.disabled),{opacity:1,WebkitTextFillColor:t.palette.text.disabled}),(0,r.Z)(n,"&:-webkit-autofill",{animationDuration:"5000s",animationName:"mui-auto-fill"}),n),"small"===o.size&&{paddingTop:1},o.multiline&&{height:"auto",resize:"none",padding:0,paddingTop:0},"search"===o.type&&{MozAppearance:"textfield"})})),P=(0,m.jsx)(E.Z,{styles:{"@keyframes mui-auto-fill":{from:{display:"block"}},"@keyframes mui-auto-fill-cancel":{from:{display:"block"}}}}),T=u.forwardRef((function(e,n){var t=(0,z.Z)({props:e,name:"MuiInputBase"}),r=t["aria-describedby"],s=t.autoComplete,c=t.autoFocus,p=t.className,f=t.components,h=void 0===f?{}:f,b=t.componentsProps,v=void 0===b?{}:b,C=t.defaultValue,E=t.disabled,B=t.disableInjectingGlobalStyles,M=t.endAdornment,W=t.fullWidth,I=void 0!==W&&W,T=t.id,K=t.inputComponent,O=void 0===K?"input":K,D=t.inputProps,V=void 0===D?{}:D,q=t.inputRef,G=t.maxRows,U=t.minRows,_=t.multiline,J=void 0!==_&&_,Q=t.name,X=t.onBlur,Y=t.onChange,$=t.onClick,ee=t.onFocus,ne=t.onKeyDown,te=t.onKeyUp,oe=t.placeholder,re=t.readOnly,ie=t.renderSuffix,ae=t.rows,le=t.startAdornment,ue=t.type,de=void 0===ue?"text":ue,se=t.value,ce=(0,i.Z)(t,N),pe=null!=V.value?V.value:se,fe=u.useRef(null!=pe).current,me=u.useRef(),he=u.useCallback((function(e){0}),[]),be=(0,R.Z)(V.ref,he),ve=(0,R.Z)(q,be),ye=(0,R.Z)(me,ve),Ze=u.useState(!1),we=(0,o.Z)(Ze,2),ge=we[0],xe=we[1],Se=(0,S.Z)();var Ce=(0,g.Z)({props:t,muiFormControl:Se,states:["color","disabled","error","hiddenLabel","size","required","filled"]});Ce.focused=Se?Se.focused:ge,u.useEffect((function(){!Se&&E&&ge&&(xe(!1),X&&X())}),[Se,E,ge,X]);var ze=Se&&Se.onFilled,Ae=Se&&Se.onEmpty,Re=u.useCallback((function(e){(0,F.vd)(e)?ze&&ze():Ae&&Ae()}),[ze,Ae]);(0,k.Z)((function(){fe&&Re({value:pe})}),[pe,Re,fe]);u.useEffect((function(){Re(me.current)}),[]);var ke=O,Ee=V;J&&"input"===ke&&(Ee=ae?(0,a.Z)({type:void 0,minRows:ae,maxRows:ae},Ee):(0,a.Z)({type:void 0,maxRows:G,minRows:U},Ee),ke=y);u.useEffect((function(){Se&&Se.setAdornedStart(Boolean(le))}),[Se,le]);var Fe=(0,a.Z)({},t,{color:Ce.color||"primary",disabled:Ce.disabled,endAdornment:M,error:Ce.error,focused:Ce.focused,formControl:Se,fullWidth:I,hiddenLabel:Ce.hiddenLabel,multiline:J,size:Ce.size,startAdornment:le,type:de}),Be=function(e){var n=e.classes,t=e.color,o=e.disabled,r=e.error,i=e.endAdornment,a=e.focused,l=e.formControl,u=e.fullWidth,d=e.hiddenLabel,s=e.multiline,c=e.size,p=e.startAdornment,f=e.type,m={root:["root","color".concat((0,A.Z)(t)),o&&"disabled",r&&"error",u&&"fullWidth",a&&"focused",l&&"formControl","small"===c&&"sizeSmall",s&&"multiline",p&&"adornedStart",i&&"adornedEnd",d&&"hiddenLabel"],input:["input",o&&"disabled","search"===f&&"inputTypeSearch",s&&"inputMultiline","small"===c&&"inputSizeSmall",d&&"inputHiddenLabel",p&&"inputAdornedStart",i&&"inputAdornedEnd"]};return(0,Z.Z)(m,L,n)}(Fe),Le=h.Root||j,Me=v.root||{},Ne=h.Input||H;return Ee=(0,a.Z)({},Ee,v.input),(0,m.jsxs)(u.Fragment,{children:[!B&&P,(0,m.jsxs)(Le,(0,a.Z)({},Me,!(0,w.Z)(Le)&&{ownerState:(0,a.Z)({},Fe,Me.ownerState)},{ref:n,onClick:function(e){me.current&&e.currentTarget===e.target&&me.current.focus(),$&&$(e)}},ce,{className:(0,d.Z)(Be.root,Me.className,p),children:[le,(0,m.jsx)(x.Z.Provider,{value:null,children:(0,m.jsx)(Ne,(0,a.Z)({ownerState:Fe,"aria-invalid":Ce.error,"aria-describedby":r,autoComplete:s,autoFocus:c,defaultValue:C,disabled:Ce.disabled,id:T,onAnimationStart:function(e){Re("mui-auto-fill-cancel"===e.animationName?me.current:{value:"x"})},name:Q,placeholder:oe,readOnly:re,required:Ce.required,rows:ae,value:pe,onKeyDown:ne,onKeyUp:te,type:de},Ee,!(0,w.Z)(Ne)&&{as:ke,ownerState:(0,a.Z)({},Fe,Ee.ownerState)},{ref:ye,className:(0,d.Z)(Be.input,Ee.className),onBlur:function(e){X&&X(e),V.onBlur&&V.onBlur(e),Se&&Se.onBlur?Se.onBlur(e):xe(!1)},onChange:function(e){if(!fe){var n=e.target||me.current;if(null==n)throw new Error((0,l.Z)(1));Re({value:n.value})}for(var t=arguments.length,o=new Array(t>1?t-1:0),r=1;r<t;r++)o[r-1]=arguments[r];V.onChange&&V.onChange.apply(V,[e].concat(o)),Y&&Y.apply(void 0,[e].concat(o))},onFocus:function(e){Ce.disabled?e.stopPropagation():(ee&&ee(e),V.onFocus&&V.onFocus(e),Se&&Se.onFocus?Se.onFocus(e):xe(!0))}}))}),M,ie?ie((0,a.Z)({},Ce,{startAdornment:le})):null]}))]})})),K=T},35470:function(e,n,t){function o(e){return null!=e&&!(Array.isArray(e)&&0===e.length)}function r(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return e&&(o(e.value)&&""!==e.value||n&&o(e.defaultValue)&&""!==e.defaultValue)}function i(e){return e.startAdornment}t.d(n,{vd:function(){return r},B7:function(){return i}})}}]);
//# sourceMappingURL=0.ce15f3db.chunk.js.map