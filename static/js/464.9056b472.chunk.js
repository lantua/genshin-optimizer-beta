"use strict";(self.webpackChunkgenshin_optimizer=self.webpackChunkgenshin_optimizer||[]).push([[464,158],{6158:function(e,n,t){t.d(n,{w:function(){return D}});var r=t(93433),o=t(29439),i=t(39504),a=t(61889),l=t(94721),c=t(66647),u=t(68870),s=t(20890),d=t(72791),f=t(9350),h=t(947),v=t(3997),x=t(26138),Z=t(31148),g=t(73036),j=t(60393),p=t(66218),C=t(13434),m=t(68544),y=t(42320),k=t(74480);var w=t(24351),b=t(50921),P=t(46956),K=t(3992),S=t(71310),M=t(68198),_=t(55942),T=t(9321),A=t(59215),B=t(25617),z=t(10157),V=t(75545),E=t(48510),W=t(73578),F=t(80184),N=["level","rarity","name"];function D(e){var n=e.show,t=e.onHide,c=e.onSelect,u=e.filter,s=void 0===u?function(){return!0}:u,f=e.newFirst,x=void 0!==f&&f,Z=(0,d.useMemo)((function(){return x?["new"].concat(N):N}),[x]),g=(0,d.useContext)(v.t4),j=(0,d.useState)(Z[0]),p=(0,o.Z)(j,2),C=p[0],m=p[1],k=(0,d.useState)(!1),S=(0,o.Z)(k,2),_=S[0],B=S[1],z=(0,d.useState)(""),V=(0,o.Z)(z,2),D=V[0],I=V[1],L=(0,d.useState)(""),H=(0,o.Z)(L,2),U=H[0],O=H[1],q=(0,y.Z)(h.ZP.getAll,[]),R=(0,d.useMemo)((function(){return q&&(0,b._L)(g,q)}),[g,q]),J=(0,d.useMemo)((function(){return q&&(0,b.zU)(q)}),[q]),$=(0,d.useMemo)((function(){return q&&R&&J?(0,r.Z)(new Set(w.IV)).filter((function(e){return s(g._getChar(e),q[e])})).filter((0,P.C)({element:D,weaponType:U},J)).sort((0,P.e)(C,_,R)):[]}),[g,q,s,D,U,C,_,R,J]);return q?(0,F.jsx)(T.Z,{open:n,onClose:t,children:(0,F.jsxs)(K.Z,{children:[(0,F.jsx)(i.Z,{sx:{py:1},children:(0,F.jsxs)(a.ZP,{container:!0,spacing:1,children:[(0,F.jsx)(a.ZP,{item:!0,children:(0,F.jsx)(W.Z,{sx:{height:"100%"},onChange:O,value:U,size:"small"})}),(0,F.jsx)(a.ZP,{item:!0,flexGrow:1,children:(0,F.jsx)(E.Z,{sx:{height:"100%"},onChange:I,value:D,size:"small"})}),(0,F.jsx)(a.ZP,{item:!0,flexGrow:1}),(0,F.jsx)(a.ZP,{item:!0,children:(0,F.jsx)(A.Z,{sx:{height:"100%"},sortKeys:Z,value:C,onChange:m,ascending:_,onChangeAsc:B})}),(0,F.jsx)(a.ZP,{item:!0,children:(0,F.jsx)(M.Z,{onClick:t})})]})}),(0,F.jsx)(l.Z,{}),(0,F.jsx)(i.Z,{children:(0,F.jsx)(a.ZP,{container:!0,spacing:1,children:$.map((function(e){return(0,F.jsx)(a.ZP,{item:!0,xs:6,md:4,lg:3,children:(0,F.jsx)(G,{characterKey:e,onClick:function(){t(),null===c||void 0===c||c(e)}},e)},e)}))})})]})}):null}function G(e){var n,t=e.onClick,i=e.characterKey,a=(0,y.Z)(h.ZP.get(i),[i]),l=function(e){var n,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=(0,d.useContext)(v.t4),a=(0,C.Z)(e),l=(0,k.Z)(null===a||void 0===a?void 0:a.equippedWeapon),c=(0,y.Z)(h.ZP.get(e),[e]),u=(0,y.Z)(Z.y.getAllData,[]),s=(0,y.Z)(l&&p.Z.get(l.key),[l]),f=(0,d.useMemo)((function(){return a&&i&&(0,j.xh)(a.equippedArtifacts,(function(e){return i._getArt(e)}))}),[a,i]),w=(0,m.Z)(),b=(0,o.Z)(w,2),P=b[0],K=b[1],S=null!==(n=null===a||void 0===a?void 0:a.team)&&void 0!==n?n:[],M=(0,o.Z)(S,3),_=M[0],T=M[1],A=M[2];(0,d.useEffect)((function(){return _?i.followChar(_,K):void 0}),[_,K,i]),(0,d.useEffect)((function(){return T?i.followChar(T,K):void 0}),[T,K,i]),(0,d.useEffect)((function(){return A?i.followChar(A,K):void 0}),[A,K,i]);var B=(0,d.useMemo)((function(){return P&&a&&c&&l&&s&&f&&u&&[(0,g.vn)(a),c.data,(0,g.v0)(l),s.data,u,x.y0]}),[P,a,c,l,s,f,u]),z=(0,d.useMemo)((function(){return B&&f&&(0,g.mP)([].concat((0,r.Z)(Object.values(f).filter((function(e){return e})).map((function(e){return(0,g.n3)(e,t)}))),(0,r.Z)(B)))}),[B,f,t]);if(z&&a&&c&&l&&s&&f&&u&&i&&B)return{data:z,character:a,characterSheet:c,weapon:l,weaponSheet:s,artifacts:f,artifactSheetsData:u,database:i,dataWoArt:B}}(i);if(!a)return null;var w=a.rarity;return(0,F.jsx)(c.Z,{onClick:t,children:(0,F.jsxs)(S.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,F.jsx)(u.Z,{component:"img",src:a.thumbImg,sx:{width:130,height:"auto"},className:"grad-".concat(w,"star")}),(0,F.jsxs)(u.Z,{sx:{pl:1},children:[(0,F.jsx)(s.Z,{children:(0,F.jsx)("strong",{children:a.name})}),l?(0,F.jsxs)(F.Fragment,{children:[(0,F.jsxs)(s.Z,{variant:"h6",children:[" ",a.elementKey&&V.ZP[a.elementKey]," ",(0,F.jsx)(_.Z,{src:null===(n=f.Z.weaponTypes)||void 0===n?void 0:n[a.weaponTypeKey]})," ",h.ZP.getLevelString(l.data.get(x.ri.lvl).value,l.data.get(x.ri.asc).value)]}),(0,F.jsxs)(s.Z,{children:[(0,F.jsx)(B.Z,{color:"success",children:"C".concat(l.data.get(x.ri.constellation).value)})," ",(0,F.jsx)(B.Z,{color:l.data.get(x.ri.bonus.auto).value?"info":"secondary",children:(0,F.jsx)("strong",{children:l.data.get(x.ri.total.auto).value})})," ",(0,F.jsx)(B.Z,{color:l.data.get(x.ri.bonus.skill).value?"info":"secondary",children:(0,F.jsx)("strong",{children:l.data.get(x.ri.total.skill).value})})," ",(0,F.jsx)(B.Z,{color:l.data.get(x.ri.bonus.burst).value?"info":"secondary",children:(0,F.jsx)("strong",{children:l.data.get(x.ri.total.burst).value})})]})]}):(0,F.jsx)(F.Fragment,{children:(0,F.jsx)(s.Z,{variant:"h6",children:(0,F.jsx)(B.Z,{color:"primary",children:"NEW"})})}),(0,F.jsx)("small",{children:(0,F.jsx)(z.t,{stars:w,colored:!0})})]})]})})}},59215:function(e,n,t){t.d(n,{Z:function(){return x}});var r=t(1413),o=t(45987),i=t(53174),a=t(54483),l=t(2199),c=t(23786),u=t(24518),s=t(22020),d=t(76899),f=t(33890),h=t(80184),v=["sortKeys","value","onChange","ascending","onChangeAsc"];function x(e){var n=e.sortKeys,t=e.value,x=e.onChange,Z=e.ascending,g=e.onChangeAsc,j=(0,o.Z)(e,v),p=(0,s.$)("ui").t;return(0,h.jsxs)(l.Z,(0,r.Z)((0,r.Z)({},j),{},{children:[(0,h.jsx)(f.Z,{title:(0,h.jsxs)(d.c,{t:p,i18nKey:"sortByFormat",value:p("sortMap.".concat(t)),children:["Sort By: ",{value:p("sortMap.".concat(t))}]}),children:n.map((function(e){return(0,h.jsx)(c.Z,{selected:t===e,disabled:t===e,onClick:function(){return x(e)},children:p("sortMap.".concat(e))},e)}))}),(0,h.jsx)(u.Z,{onClick:function(){return g(!Z)},startIcon:(0,h.jsx)(a.G,{icon:Z?i.Pa6:i.xrW,className:"fa-fw"}),children:Z?(0,h.jsx)(d.c,{t:p,i18nKey:"ascending",children:"Ascending"}):(0,h.jsx)(d.c,{t:p,i18nKey:"descending",children:"Descending"})})]}))}},48510:function(e,n,t){t.d(n,{Z:function(){return x}});var r=t(1413),o=t(45987),i=t(72466),a=t(68870),l=t(72791),c=t(24351),u=t(66934),s=t(90388),d=(0,u.ZP)(s.Z,{shouldForwardProp:function(e){return"baseColor"!==e&&"selectedColor"!==e}})((function(e){var n=e.theme,t=e.baseColor,r=void 0===t?"primary":t,o=e.selectedColor,i=void 0===o?"success":o;return{"&":{backgroundColor:n.palette[r].main,color:n.palette[r].contrastText},"&:hover":{backgroundColor:n.palette[r].dark},"&.Mui-selected":{backgroundColor:n.palette[i].main,color:n.palette[i].contrastText},"&.Mui-selected:hover":{backgroundColor:n.palette[i].dark},"&.Mui-disabled":{backgroundColor:n.palette[r].dark},"&.Mui-selected.Mui-disabled":{backgroundColor:n.palette[i].dark}}})),f=t(75545),h=t(80184),v=["value","onChange"];function x(e){var n=e.value,t=e.onChange,u=(0,o.Z)(e,v),s=(0,l.useCallback)((function(e,n){return t(n||"")}),[t]);return(0,h.jsx)(i.Z,(0,r.Z)((0,r.Z)({exclusive:!0,onChange:s,value:n||c.N},u),{},{children:c.N.map((function(e){return(0,h.jsx)(d,{value:e,selectedColor:e,children:(0,h.jsx)(a.Z,{sx:{fontSize:"2em",lineHeight:1},children:f.hJ[e]})},e)}))}))}},73578:function(e,n,t){t.d(n,{Z:function(){return h}});var r=t(1413),o=t(45987),i=t(90388),a=t(72791),l=t(9350),c=t(24351),u=t(55942),s=t(91839),d=t(80184),f=["value","onChange"];function h(e){var n=e.value,t=e.onChange,h=(0,o.Z)(e,f),v=(0,a.useCallback)((function(e,n){return t(n||"")}),[t]);return(0,d.jsx)(s.Z,(0,r.Z)((0,r.Z)({exclusive:!0,onChange:v,value:n||c.yd},h),{},{children:c.yd.map((function(e){var n;return(0,d.jsx)(i.Z,{value:e,children:(0,d.jsx)(u.Z,{src:null===(n=l.Z.weaponTypes)||void 0===n?void 0:n[e],size:2})},e)}))}))}},5139:function(e,n,t){t.r(n),t.d(n,{default:function(){return j}});var r=t(29439),o=t(53174),i=t(54483),a=t(68870),l=t(55646),c=t(19658),u=t(2199),s=t(24518),d=t(72791),f=t(79271),h=t(1011),v=t(3992),x=t(10600),Z=t(3997),g=t(80184);function j(){var e=(0,f.TH)(),n=(0,d.useContext)(Z.t4),t=e.search;if(!{})return null;if(t)return(0,g.jsx)(Z.t4.Provider,{value:n,children:(0,g.jsx)(p,{characterKey:"Sucrose"})});if(!e.characterKey)return(0,g.jsx)(f.l_,{to:"/"});return(0,g.jsx)(f.l_,{to:"/"})}function p(e){var n=e.characterKey,t=(0,d.useState)(!1),f=(0,r.Z)(t,2),Z=f[0],j=f[1],p=(0,d.useCallback)((function(){return j(!0)}),[j]),C=(0,d.useCallback)((function(e,n){"clickaway"!==n&&j(!1)}),[j]),m=(0,d.useCallback)((function(){var e=window.location.href;navigator.clipboard.writeText(e).then(p).catch(console.error)}),[p]);return(0,g.jsxs)(a.Z,{display:"flex",flexDirection:"column",gap:function(e){return e.spacing(1)},mt:1,mb:1,children:[(0,g.jsx)(l.Z,{open:Z,autoHideDuration:5e3,onClose:C,children:(0,g.jsx)(c.Z,{variant:"filled",severity:"success",sx:{width:"100%"},children:"URL copied to clipboard."})}),(0,g.jsxs)(v.Z,{children:[(0,g.jsxs)(u.Z,{sx:{width:"100%"},children:[(0,g.jsx)(s.Z,{color:"info",onClick:m,startIcon:(0,g.jsx)(i.G,{icon:o.nNP}),children:"Copy URL to clipboard"}),(0,g.jsx)(x.CC,{sx:{flexBasis:30,flexGrow:1},children:(0,g.jsx)(x.el,{readOnly:!0,value:window.location.href,onClick:function(e){var n=e.target;n.selectionStart=0,n.selectionEnd=n.value.length},sx:{px:2}})})]}),!1]}),(0,g.jsx)(h.default,{characterKey:n,isFlex:!0})]})}},74480:function(e,n,t){t.d(n,{Z:function(){return a}});var r=t(29439),o=t(72791),i=t(3997);function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=(0,o.useContext)(i.t4),t=(0,o.useState)(n._getWeapon(e)),a=(0,r.Z)(t,2),l=a[0],c=a[1];return(0,o.useEffect)((function(){return c(n._getWeapon(e))}),[n,e]),(0,o.useEffect)((function(){return e?n.followWeapon(e,c):void 0}),[e,c,n]),l}},50921:function(e,n,t){t.d(n,{vV:function(){return r},_L:function(){return o},zU:function(){return i}});var r=["level","rarity","name"];function o(e,n){return{new:{getValue:function(n){return e._getChar(n)?0:1},tieBreaker:"name"},name:{getValue:function(e){return e}},level:{getValue:function(n){var t,r;return null!==(t=null===(r=e._getChar(n))||void 0===r?void 0:r.level)&&void 0!==t?t:0},tieBreaker:"rarity"},rarity:{getValue:function(e){var t;return null===n||void 0===n||null===(t=n[e])||void 0===t?void 0:t.rarity},tieBreaker:"level"}}}function i(e){return{element:function(n,t){var r;return!t||t===(null===e||void 0===e||null===(r=e[n])||void 0===r?void 0:r.elementKey)},weaponType:function(n,t){var r;return!t||t===(null===e||void 0===e||null===(r=e[n])||void 0===r?void 0:r.weaponTypeKey)}}}},46956:function(e,n,t){t.d(n,{e:function(){return o},C:function(){return i}});var r=t(29439);function o(e,n,t){function r(e,n,t,r){var o=r.getValue(e),i=r.getValue(n);return(t?-1:1)*("string"===typeof o&&"string"===typeof i?o.localeCompare(i):i-o)}return function(o,i){if(!t[e])return 0;var a=t[e],l=r(o,i,n,a);return!l&&a.tieBreaker&&t[a.tieBreaker]&&(l=r(o,i,n,t[a.tieBreaker])),l}}function i(e,n){return function(t){return Object.entries(e).every((function(e){var o=(0,r.Z)(e,2),i=o[0],a=o[1];return n[i](t,a)}))}}}}]);
//# sourceMappingURL=464.9056b472.chunk.js.map