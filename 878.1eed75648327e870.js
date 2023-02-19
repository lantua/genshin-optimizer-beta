"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[878],{86113:(e,t,n)=>{n.d(t,{Z:()=>s});var i=n(67550),a=n(62197),l=n(52903);function s({avatar:e,title:t,action:n}){return(0,l.BX)(i.Z,{display:"flex",gap:1,p:2,alignItems:"center",children:[e,(0,l.tZ)(a.Z,{variant:"subtitle1",sx:{flexGrow:1},children:t}),n&&(0,l.tZ)(a.Z,{variant:"caption",children:n})]})}},73740:(e,t,n)=>{n.d(t,{X:()=>$,Z:()=>I});var i=n(67550),a=n(62197),l=n(56961),s=n(2784),o=n(790),c=n(41015),r=n(87985),d=n(86113),Z=n(7671),u=n(2720),h=n(5658),p=n(27216),f=n(83249),m=n(94380),v=n(38553),x=n(53710),b=n(35711),C=n(83673),g=n(21845),y=n(52903);function k({conditional:e,disabled:t=!1}){return 1===Object.keys(e.states).length&&"path"in e?(0,y.tZ)(w,{conditional:e,disabled:t}):"path"in e?(0,y.tZ)(B,{conditional:e,disabled:t}):(0,y.tZ)(D,{conditional:e,disabled:t})}function w({conditional:e,disabled:t}){const{character:n,characterDispatch:i}=(0,s.useContext)(x.K),{data:a}=(0,s.useContext)(o.R),l=(0,s.useCallback)((t=>{const a=(0,c.I8)(n.conditional);t?(0,c.SR)(a,e.path,t):(0,c.uH)(a,e.path),i({conditional:a})}),[e,n,i]),r=a.get(e.value).value,[d,Z]=Object.entries(e.states)[0],u=P(Z.name),m=R(e.name);return(0,y.BX)(f.Z,{fullWidth:!0,size:"small",sx:{borderRadius:0},color:r?"success":"primary",onClick:()=>l(r?void 0:d),disabled:t,startIcon:r?(0,y.tZ)(h.Z,{}):(0,y.tZ)(p.Z,{}),children:[m," ",u]})}function B({conditional:e,disabled:t}){const{character:n,characterDispatch:i}=(0,s.useContext)(x.K),{data:a}=(0,s.useContext)(o.R),r=(0,s.useCallback)((t=>{const a=(0,c.I8)(n.conditional);t?(0,c.SR)(a,e.path,t):(0,c.uH)(a,e.path),i({conditional:a})}),[e,n,i]),d=a.get(e.value).value,Z=d?e.states[d]:void 0,u=Z?P(Z.name):(0,y.tZ)(C.Z,{color:"secondary",children:"Not Active"}),h=R(e.name);return(0,y.BX)(b.Z,{fullWidth:!0,size:"small",sx:{borderRadius:0},color:d?"success":"primary",title:(0,y.BX)("span",{children:[h," ",u]}),disabled:t,children:[(0,y.tZ)(m.Z,{onClick:()=>r(),selected:!Z,disabled:!Z,children:(0,y.tZ)("span",{children:"Not Active"})}),(0,y.tZ)(l.Z,{}),Object.entries(e.states).map((([e,t])=>(0,y.tZ)(m.Z,{onClick:()=>r(e),selected:d===e,disabled:d===e,children:t.name},e)))]})}function D({conditional:e,disabled:t}){const{character:n,characterDispatch:i}=(0,s.useContext)(x.K),{data:a}=(0,s.useContext)(o.R),l=(0,s.useCallback)(((e,t)=>{const a=(0,c.I8)(n.conditional);t?(0,c.SR)(a,e,t):(0,c.uH)(a,e),i({conditional:a})}),[n,i]);return(0,y.tZ)(v.Z,{fullWidth:!0,orientation:"vertical",disableElevation:!0,color:"secondary",children:Object.entries(e.states).map((([e,n])=>{const i=a.get(n.value).value,s=i===e;return(0,y.tZ)(f.Z,{color:s?"success":"primary",disabled:t,fullWidth:!0,onClick:()=>l(n.path,i?void 0:e),size:"small",startIcon:s?(0,y.tZ)(h.Z,{}):(0,y.tZ)(p.Z,{}),sx:{borderRadius:0},children:R(n.name)},e)}))})}function X(e){return"string"!=typeof e}function P(e){if(!e)return"";let t="primary",n=e;return e&&X(e)&&e.props.color&&(t=e.props.color,n=(0,y.tZ)("span",{children:e.props.children})),(0,y.tZ)(C.Z,{sx:{ml:.5},color:t,children:n})}function R(e){if(X(e)){const t=e.props.key18,n=e.props.ns,i=e.props.values;return(0,y.tZ)(g.v,{ns:n,key18:t,values:i,useBadge:!0})}return e}function H({conditional:e,hideHeader:t=!1,hideDesc:n=!1}){const{data:i}=(0,s.useContext)(o.R);let a;if("path"in e){var l;const t=i.get(e.value).value;a=t&&(null==(l=e.states[t])?void 0:l.fields)}else a=Object.values(e.states).flatMap((e=>i.get(e.value).value?e.fields:[]));return(0,y.BX)(r.Z,{children:[!(0,c.mY)(t,e)&&(0,y.tZ)($,{header:e.header,hideDesc:n}),(0,y.tZ)(Z.Z,{sx:{p:0,"&:last-child":{pb:0}},children:(0,y.tZ)(k,{conditional:e})}),a&&(0,y.tZ)(u.ZP,{fields:a})]})}var S=n(82334);function I({sections:e,teamBuffOnly:t,hideDesc:n=!1,hideHeader:a=!1}){const{data:l}=(0,s.useContext)(o.R);if(!e.length)return null;const c=e.map(((e,i)=>e.canShow&&!l.get(e.canShow).value||t&&!e.teamBuff?null:(0,y.tZ)(W,{section:e,hideDesc:n,hideHeader:a},i))).filter((e=>e));return c.length?(0,y.tZ)(i.Z,{display:"flex",flexDirection:"column",gap:1,children:c}):null}function W({section:e,hideDesc:t=!1,hideHeader:n=!1}){return"fields"in e?(0,y.tZ)(L,{section:e,hideDesc:t,hideHeader:n}):"states"in e?(0,y.tZ)(H,{conditional:e,hideDesc:t,hideHeader:n}):(0,y.tZ)(O,{section:e})}function L({section:e,hideDesc:t,hideHeader:n}){return(0,y.BX)(r.Z,{children:[!(0,c.mY)(n,e)&&e.header&&(0,y.tZ)($,{header:e.header,hideDesc:t,hideDivider:0===e.fields.length}),(0,y.tZ)(u.ZP,{fields:e.fields})]})}function O({section:e}){const{data:t}=(0,s.useContext)(o.R);return(0,y.tZ)("div",{children:(0,c.mY)(e.text,t)})}function $({header:e,hideDesc:t,hideDivider:n}){const{data:i}=(0,s.useContext)(o.R),{icon:r,title:Z,action:u}=e,h=(0,c.mY)(r,i),p=!t&&(0,c.mY)(e.description,i),f=t?Z:(0,y.BX)("span",{children:[Z,(0,y.tZ)(S.L,{title:(0,y.tZ)(a.Z,{children:p})})]});return(0,y.BX)(y.HY,{children:[(0,y.tZ)(d.Z,{avatar:h,title:f,action:u}),!n&&(0,y.tZ)(l.Z,{})]})}},97859:(e,t,n)=>{n.d(t,{Z:()=>h});var i=n(38553),a=n(83249),l=n(94380),s=n(2784),o=n(21548),c=n(21626),r=n(41015),d=n(89343),Z=n(35711),u=n(52903);function h({level:e,ascension:t,setBoth:n,useLow:h=!1}){const{t:p}=(0,o.$G)("ui"),f=h?c.sU:c.SJ,m=(0,s.useCallback)(((e=1)=>{e=(0,r.uZ)(e,1,h?c.d8:c.Qq);const t=f.findIndex((t=>e<=t));n({level:e,ascension:t})}),[n,f,h]),v=(0,s.useCallback)((()=>{const i=f.findIndex((t=>90!==e&&e===t));n(t===i?{ascension:t+1}:{ascension:i})}),[n,f,t,e]);return(0,u.BX)(i.Z,{sx:{bgcolor:e=>e.palette.contentDark.main},children:[(0,u.tZ)(d.CC,{children:(0,u.tZ)(d.ZP,{onChange:m,value:e,startAdornment:"Lv. ",inputProps:{min:1,max:90,sx:{textAlign:"center",width:"3em"}},sx:{height:"100%",pl:2}})}),(0,u.tZ)(a.Z,{sx:{pl:1,whiteSpace:"nowrap"},disabled:!(h?c.nB:c.ek)(e),onClick:v,children:(0,u.BX)("strong",{children:["/ ",c.SJ[t]]})}),(0,u.tZ)(Z.Z,{title:p("selectlevel"),sx:{flexGrow:1},children:[...h?c.vF:c.D4].map((([i,a])=>{const s=i===e&&a===t;return(0,u.tZ)(l.Z,{selected:s,disabled:s,onClick:()=>n({level:i,ascension:a}),children:i===f[a]?`Lv. ${i}`:`Lv. ${i}/${f[a]}`},`${i}/${a}`)}))})]})}},14520:(e,t,n)=>{n.d(t,{Z:()=>c});var i=n(94380),a=n(21548),l=n(36893),s=n(35711),o=n(52903);function c({refinement:e,setRefinement:t}){const{t:n}=(0,a.$G)("ui");return(0,o.tZ)(s.Z,{title:n("refinement",{value:e}),children:l.a.map((a=>(0,o.tZ)(i.Z,{onClick:()=>t(a),selected:e===a,disabled:e===a,children:n("refinement",{value:a})},a)))})}},15878:(e,t,n)=>{n.r(t),n.d(t,{default:()=>G});var i=n(65396),a=n(54278),l=n(40535),s=n(7671),o=n(41075),c=n(67550),r=n(62197),d=n(38553),Z=n(83249),u=n(42523),h=n(56961),p=n(15873),f=n(2784),m=n(87985),v=n(67937),x=n(43007),b=n(72055),C=n(73740),g=n(2720),y=n(97859),k=n(98927),w=n(14520),B=n(71765),D=n(790),X=n(70630),P=n(21626),R=n(51077),H=n(25870),S=n(34958),I=n(30507),W=n(94657),L=n(10002),O=n(94758),$=n(52903);const j=f.lazy((()=>n.e(592).then(n.bind(n,89431))));function G({weaponId:e,footer:t=!1,onClose:n,extraButtons:G}){var K;const{data:N}=(0,f.useContext)(D.R),{database:T}=(0,f.useContext)(H.t),Y=(0,O.Z)(e),{key:A="",level:z=0,refinement:J=1,ascension:M=0,lock:q,location:E="",id:F}=null!=Y?Y:{},U=A?(0,R.ub)(A):void 0,Q=(0,f.useCallback)((t=>{T.weapons.set(e,t)}),[e,T]),{gender:V}=(0,L.Z)(),_=(0,f.useMemo)((()=>E?(0,X.m)(T.chars.LocationToCharacterKey(E),V):void 0),[T,V,E]),ee=_&&_.weaponTypeKey,te=(0,f.useCallback)((e=>F&&T.weapons.set(F,{location:e})),[T,F]),ne=(0,f.useCallback)((e=>e.weaponTypeKey===(null==U?void 0:U.weaponType)),[U]),[ie,ae,le]=(0,W.Z)(),se=A?(0,i.Aq)(A,M>=2):"";(0,f.useEffect)((()=>{if(U&&Q&&U.key===(null==Y?void 0:Y.key)&&U.rarity<=2&&(z>70||M>4)){const[e,t]=P.vF[0];Q({level:e,ascension:t})}}),[U,Y,Q,z,M]);const oe=(0,f.useMemo)((()=>U&&Y&&(0,I.mP)([U.data,(0,I.v0)(Y)])),[U,Y]);return(0,$.tZ)(k.Z,{open:!!e,onClose:n,containerProps:{maxWidth:"md"},children:(0,$.BX)(v.Z,{children:[(0,$.tZ)(j,{ascension:M,show:ie,onHide:le,onSelect:e=>Q({key:e}),weaponTypeFilter:ee}),(0,$.tZ)(s.Z,{children:U&&oe&&(0,$.BX)(o.ZP,{container:!0,spacing:1.5,children:[(0,$.tZ)(o.ZP,{item:!0,xs:12,sm:3,children:(0,$.BX)(o.ZP,{container:!0,spacing:1.5,children:[(0,$.tZ)(o.ZP,{item:!0,xs:6,sm:12,children:(0,$.tZ)(c.Z,{component:"img",src:se,className:`grad-${U.rarity}star`,sx:{maxWidth:256,width:"100%",height:"auto",borderRadius:1}})}),(0,$.tZ)(o.ZP,{item:!0,xs:6,sm:12,children:(0,$.tZ)(r.Z,{children:(0,$.tZ)("small",{children:U.description})})})]})}),(0,$.BX)(o.ZP,{item:!0,xs:12,sm:9,sx:{display:"flex",flexDirection:"column",gap:1},children:[(0,$.tZ)(c.Z,{display:"flex",gap:1,flexWrap:"wrap",justifyContent:"space-between",children:(0,$.BX)(d.Z,{children:[(0,$.tZ)(Z.Z,{color:"info",onClick:ae,children:null!=(K=null==U?void 0:U.name)?K:"Select a Weapon"}),(null==U?void 0:U.hasRefinement)&&(0,$.tZ)(w.Z,{refinement:J,setRefinement:e=>Q({refinement:e})}),G]})}),(0,$.BX)(c.Z,{display:"flex",gap:1,flexWrap:"wrap",justifyContent:"space-between",children:[U&&(0,$.tZ)(y.Z,{level:z,ascension:M,setBoth:Q,useLow:!U.hasRefinement}),(0,$.tZ)(Z.Z,{color:"error",onClick:()=>F&&T.weapons.set(F,{lock:!q}),startIcon:q?(0,$.tZ)(a.Z,{}):(0,$.tZ)(l.Z,{}),children:q?"Locked":"Unlocked"})]}),(0,$.tZ)(B.q,{stars:U.rarity}),(0,$.tZ)(r.Z,{variant:"subtitle1",children:(0,$.tZ)("strong",{children:U.passiveName})}),(0,$.tZ)(r.Z,{gutterBottom:!0,children:U.passiveName&&U.passiveDescription(oe.get(S.ri.weapon.refineIndex).value)}),(0,$.BX)(c.Z,{display:"flex",flexDirection:"column",gap:1,children:[(0,$.BX)(m.Z,{children:[(0,$.tZ)(u.Z,{title:"Main Stats",titleTypographyProps:{variant:"subtitle2"}}),(0,$.tZ)(h.Z,{}),(0,$.tZ)(g.lD,{children:[S.ri.weapon.main,S.ri.weapon.sub,S.ri.weapon.sub2].map((e=>{const t=oe.get(e);return t.isEmpty||!t.value?null:(0,$.tZ)(g.JW,{node:t,component:p.ZP},JSON.stringify(t.info))}))})]}),N&&U.document&&(0,$.tZ)(C.Z,{sections:U.document})]})]})]})}),t&&F&&(0,$.tZ)(s.Z,{sx:{py:1},children:(0,$.BX)(o.ZP,{container:!0,spacing:1,children:[(0,$.tZ)(o.ZP,{item:!0,flexGrow:1,children:(0,$.tZ)(x.W,{location:E,setLocation:te,filter:ne,autoCompleteProps:{getOptionDisabled:e=>!e.key}})}),(0,$.tZ)(o.ZP,{item:!0,flexGrow:2}),!!n&&(0,$.tZ)(o.ZP,{item:!0,children:(0,$.tZ)(b.Z,{sx:{height:"100%"},large:!0,onClick:n})})]})})]})})}}}]);