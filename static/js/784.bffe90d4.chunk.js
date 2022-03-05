"use strict";(self.webpackChunkgenshin_optimizer=self.webpackChunkgenshin_optimizer||[]).push([[784],{3992:function(e,t,n){var r=n(66934),o=n(57621),i=(0,r.ZP)(o.Z)((function(e){return{backgroundColor:e.theme.palette.contentDark.main}}));t.Z=i},71310:function(e,t,n){var r=n(66934),o=n(57621),i=(0,r.ZP)(o.Z)((function(e){return{backgroundColor:e.theme.palette.contentLight.main}}));t.Z=i},91732:function(e,t,n){var r=n(1413),o=n(45987),i=n(66934),a=n(13400),s=n(80184),c=["expand"],l=(0,i.ZP)((function(e){e.expand;var t=(0,o.Z)(e,c);return(0,s.jsx)(a.Z,(0,r.Z)({},t))}))((function(e){var t=e.theme;return{transform:e.expand?"rotate(180deg)":"rotate(0deg)",marginLeft:"auto",transition:t.transitions.create("transform",{duration:t.transitions.duration.shortest})}}));t.Z=l},20784:function(e,t,n){n.r(t),n.d(t,{default:function(){return R}});var r=n(1413),o=n(29439),i=n(27118),a=n(53174),s=n(54483),c=n(76189),l=n(80184),d=(0,c.Z)((0,l.jsx)("path",{d:"M19.8 10.7 4.2 5l-.7 1.9L17.6 12H5c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-5.5c0-.8-.5-1.6-1.2-1.8zM7 17H5v-2h2v2zm12 0H9v-2h10v2z"}),"Scanner"),u=n(37355),h=n(39504),m=n(42169),f=n(9585),p=n(56125),x=n(23060),g=n(20890),j=n(24518),y=n(68870),v=n(61889),Z=n(72791),b=n(16129),w=n(76899),k=n(22020),C=n(91523),G=n(3992),O=n(71310),z=n(91732),B=n(4196),M=n(21282);function P(e){var t=e.image,n=e.title,r=e.content,i=e.t,a=(0,Z.useState)(!1),s=(0,o.Z)(a,2),c=s[0],d=s[1];return(0,l.jsxs)(O.Z,{children:[(0,l.jsx)(h.Z,{sx:{p:1,pb:0},children:(0,l.jsx)(m.Z,{component:"img",image:t,alt:"test",sx:{width:"100%",height:"auto"}})}),(0,l.jsx)(f.Z,{action:(0,l.jsx)(z.Z,{expand:c,onClick:function(){return d(!c)},"aria-expanded":c,"aria-label":"show more",children:(0,l.jsx)(u.Z,{})}),titleTypographyProps:{variant:"subtitle1"},title:n(i)}),(0,l.jsx)(p.Z,{in:c,timeout:"auto",unmountOnExit:!0,children:(0,l.jsx)(h.Z,{sx:{pt:0},children:r(i)})})]})}var T=[{image:B,title:function(e){return(0,l.jsx)(x.Z,{component:C.rU,to:"/artifact",children:(0,l.jsx)(w.c,{i18nKey:"features.artifact.title",t:e,children:"Artifact Editor & Inventory"})})},content:function(e){return(0,l.jsx)(g.Z,{component:"div",variant:"body1",color:"text.secondary",children:(0,l.jsx)(w.c,{i18nKey:"features.artifact.content",t:e,children:(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:"Fully featured Artifact editor."}),(0,l.jsx)("li",{children:"Add Artifacts by scanning a screenshot."}),(0,l.jsx)("li",{children:"Automatically calculate the exact rolled value of each artifact."}),(0,l.jsx)("li",{children:"Calculate substat efficiency, using the roll calculations. Use a single number to determine whether to keep or trash an artifact!"}),(0,l.jsx)("li",{children:"Maintains a completely sortable, filterable artifact inventory."}),(0,l.jsxs)("li",{children:["Imports artifact database from ",(0,l.jsx)(x.Z,{component:C.rU,to:"/scanner",children:"3rd party automatic scanners"}),"."]})]})})})}},{image:n(80113),title:function(e){return(0,l.jsx)(x.Z,{component:C.rU,to:"/character",children:(0,l.jsx)(w.c,{i18nKey:"features.characterEditor.title",t:e,children:"Character & Weapon Editor"})})},content:function(e){return(0,l.jsx)(g.Z,{component:"div",variant:"body1",color:"text.secondary",children:(0,l.jsx)(w.c,{i18nKey:"features.characterEditor.content",t:e,children:(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:"Fully featured Character editor."}),(0,l.jsx)("li",{children:"Automatically populate character stats at every milestone level/ascension."}),(0,l.jsx)("li",{children:"Fully editable stats for customization."}),(0,l.jsx)("li",{children:"Calculate current stats based on weapon/artifacts."}),(0,l.jsx)("li",{children:"Fully featured weapon editor, with milestone level/ascension stats"}),(0,l.jsx)("li",{children:"Apply conditional passives, from talents & weapons & artifacts to accurately mimic in-game conditions. "})]})})})}},{image:n(70083),title:function(e){return(0,l.jsx)(x.Z,{component:C.rU,to:"/character",children:(0,l.jsx)(w.c,{i18nKey:"features.characterCalc.title",t:e,children:"Character Damage Calculations"})})},content:function(e){return(0,l.jsx)(g.Z,{component:"div",variant:"body1",color:"text.secondary",children:(0,l.jsx)(w.c,{i18nKey:"features.characterCalc.content",t:e,children:(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:"All the details for every character's talents."}),(0,l.jsx)("li",{children:"All numbers should reflect real in game damage (within 1% error)."}),(0,l.jsx)("li",{children:"Conditional stats and modifications from every Constellation accounted for."}),(0,l.jsx)("li",{children:"Shows calculations for all the numbers, along with formulas."}),(0,l.jsx)("li",{children:"Enemy editor with level/ resistance fields to customize damage calculations."}),(0,l.jsx)("li",{children:"Account for elemental infusion for normal/charged/plunging attacks."}),(0,l.jsx)("li",{children:"Real time damage calculations."})]})})})}},{image:M,title:function(e){return(0,l.jsx)(x.Z,{component:C.rU,to:"/build",children:(0,l.jsx)(w.c,{i18nKey:"features.build.title",t:e,children:"Build Generator"})})},content:function(e){return(0,l.jsx)(g.Z,{component:"div",variant:"body1",color:"text.secondary",children:(0,l.jsx)(w.c,{i18nKey:"features.build.content",t:e,children:(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:"Generates builds for specific characters using artifact inventory."}),(0,l.jsx)("li",{children:"Allows the maximization of character build based on specified optimization target."}),(0,l.jsx)("li",{children:"Limit builds by artifact sets, main stats..."}),(0,l.jsx)("li",{children:"Fully featured build settings to fine-tune build results."}),(0,l.jsx)("li",{children:"Compare generated artifact build against artifacts currently on character."}),(0,l.jsx)("li",{children:"Use conditional stats from artifact sets, e.g. Embled of Severed Fate's 4-set Elemental Burst DMG Bonus conversion, as part of the build calculations."})]})})})}},{image:n(29568),title:function(e){return(0,l.jsx)(x.Z,{component:C.rU,to:"/tools",children:(0,l.jsx)(w.c,{i18nKey:"features.tools.title",t:e,children:"Tools and Gadgets"})})},content:function(e){return(0,l.jsx)(g.Z,{component:"div",variant:"body1",color:"text.secondary",children:(0,l.jsx)(w.c,{i18nKey:"features.tools.content",t:e,children:(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:"Server time, with countdown to reset."}),(0,l.jsx)("li",{children:"Resin Counter."}),(0,l.jsx)("li",{children:"Experience Calculator, to optimize EXP. books usage."})]})})})}}];function S(e){var t=e.href,n=e.icon,r=e.children;return(0,l.jsx)(j.Z,{variant:"text",size:"small",component:"a",href:t,target:"_blank",rel:"noreferrer",startIcon:n,children:r})}function R(){var e=(0,k.$)("page_home").t;return b.ZP.pageview("/home"),(0,l.jsxs)(y.Z,{my:1,display:"flex",flexDirection:"column",gap:1,children:[(0,l.jsx)(G.Z,{children:(0,l.jsxs)(h.Z,{children:[(0,l.jsx)(g.Z,{variant:"h5",gutterBottom:!0,color:"warning.main",children:"Welcome to Genshin Optimizer Waverider Beta!"}),(0,l.jsx)(g.Z,{variant:"body1",color:"text.secondary",gutterBottom:!0,children:"Ever since version 2.0, MHY has released characters/weapons with kits that seem to defy the original design considerations of the Optimizer. The system implemented here is designed with these mechanisms in mind, and provide some future-proofing for future MHY feature-creeping."}),(0,l.jsx)(g.Z,{variant:"body1",color:"text.secondary",gutterBottom:!0,children:"Since this is a beta, a lot of thing might be broken. Please funnel bugreports towards our discord."})]})}),(0,l.jsx)(G.Z,{children:(0,l.jsx)(h.Z,{children:(0,l.jsxs)(w.c,{i18nKey:"intro",t:e,children:[(0,l.jsx)(g.Z,{variant:"h5",gutterBottom:!0,children:"What is Genshin Optimizer?"}),(0,l.jsxs)(g.Z,{variant:"body1",color:"text.secondary",gutterBottom:!0,children:["Genshin Optimizer (GO) is an open-source fan-made website for the action-RPG gacha game ",(0,l.jsx)(x.Z,{href:"https://genshin.mihoyo.com/",target:"_blank",rel:"noreferrer",children:(0,l.jsx)("strong",{children:"Genshin Impact"})}),". It is mainly intended to help players with the complex aspect of the game: Artifact Optimization. Since artifacts are heavily RNG-based elements that directly contribute to how effective your characters are in the game, GO will try to find the best artifacts for your characters based on your current artifact inventory."]}),(0,l.jsx)(g.Z,{variant:"body1",color:"text.secondary",gutterBottom:!0,children:"GO can keep track of your artifacts, and allows more ease in filtering/comparing artifacts, it serves as a tool to help user find good artifacts in their inventory to level up, and bad artifacts to use as fodder."}),(0,l.jsx)(g.Z,{variant:"body1",color:"text.secondary",children:"Since GO can replicate the exact stats of any character, along with calculate all their damage numbers to up 1% accuracy, it can also serve as a Damage calculator, and a tool for theory crafting."})]})})}),(0,l.jsx)(G.Z,{children:(0,l.jsx)(h.Z,{children:(0,l.jsxs)(w.c,{i18nKey:"notGO",t:e,children:[(0,l.jsx)(g.Z,{variant:"h5",gutterBottom:!0,children:"What Genshin Optimizer is NOT:"}),(0,l.jsx)(g.Z,{variant:"body1",color:"text.secondary",gutterBottom:!0,children:"GO does NOT tell you how to play the game. The information/calculations are intended to be un-opinionated as possible."}),(0,l.jsx)(g.Z,{variant:"body1",color:"text.secondary",gutterBottom:!0,children:"GO does NOT supplement your lack of in-game knowledge, inappropriate configuration of the builder can provide misleading results. Please research your characters, and figure out how you want to use them before configuring them on GO. Think of GO as more of a calculator."}),(0,l.jsx)(g.Z,{variant:"body1",color:"text.secondary",children:"GO does NOT generally take consideration of Energy Recharge, or team rotations. Please keep those mechanics in mind when you use this tool."})]})})}),(0,l.jsx)(G.Z,{sx:{width:"100%"},children:(0,l.jsxs)(h.Z,{children:[(0,l.jsx)(g.Z,{variant:"h5",gutterBottom:!0,children:(0,l.jsx)(w.c,{i18nKey:"quickLinks.title",t:e,children:"Quick Links"})}),(0,l.jsx)(O.Z,{sx:{mb:1},children:(0,l.jsxs)(h.Z,{children:[(0,l.jsx)(g.Z,{variant:"h6",gutterBottom:!0,children:(0,l.jsx)(w.c,{i18nKey:"quickLinks.scannerTitle",t:e,children:"Do you want to automate some of the artifact input process?"})}),(0,l.jsx)(g.Z,{color:"text.secondary",gutterBottom:!0,children:(0,l.jsx)(w.c,{i18nKey:"quickLinks.scannerText",t:e,children:"Here is a list of compatible automatic scanners that can feed data into GO. These programs will automatically scan artifacts from your game, and exporting that data into a file. This file can then be imported to GO."})}),(0,l.jsx)(j.Z,{component:C.rU,size:"small",to:"/scanner",variant:"contained",startIcon:(0,l.jsx)(d,{}),children:(0,l.jsx)(w.c,{i18nKey:"quickLinks.scannerBtn",t:e,children:"Scanner List"})})]})}),(0,l.jsx)(O.Z,{children:(0,l.jsxs)(h.Z,{children:[(0,l.jsx)(g.Z,{variant:"body1",color:"text.secondary",gutterBottom:!0,children:(0,l.jsxs)(w.c,{i18nKey:"quickLinks.goGithubText",t:e,children:["GO is completely open-source, written in TypeScript, with the ",(0,l.jsx)(s.G,{icon:i.wn1}),"React framework."]})}),(0,l.jsx)(j.Z,{size:"small",variant:"contained",component:"a",href:"https://github.com/frzyc/genshin-optimizer",target:"_blank",rel:"noreferrer",startIcon:(0,l.jsx)(s.G,{icon:i.zhw}),children:(0,l.jsx)(w.c,{i18nKey:"quickLinks.goGithubBtn",t:e,children:"Genshin Optimizer Github"})})]})})]})}),(0,l.jsx)(G.Z,{children:(0,l.jsxs)(h.Z,{children:[(0,l.jsx)(g.Z,{variant:"h5",gutterBottom:!0,children:(0,l.jsx)(w.c,{i18nKey:"features.title",t:e,children:"Features"})}),(0,l.jsx)(v.ZP,{container:!0,spacing:2,children:T.map((function(t,n){return(0,l.jsx)(v.ZP,{item:!0,xs:12,md:4,children:(0,l.jsx)(P,(0,r.Z)((0,r.Z)({},t),{},{t:e}))},n)}))})]})}),(0,l.jsx)(G.Z,{children:(0,l.jsxs)(v.ZP,{container:!0,children:[(0,l.jsx)(v.ZP,{item:!0,xs:12,md:6,children:(0,l.jsx)(h.Z,{children:(0,l.jsxs)(w.c,{i18nKey:"helpDev",t:e,children:[(0,l.jsx)(g.Z,{variant:"h5",gutterBottom:!0,children:"Want to help the developer?"}),(0,l.jsxs)(g.Z,{variant:"body1",color:"text.secondary",gutterBottom:!0,children:["If you want to financially support the developer, please consider donating via ",(0,l.jsx)(S,{href:"https://www.paypal.com/donate?hosted_button_id=WAHN2DGLCXPZW",icon:(0,l.jsx)(s.G,{icon:i.PDv}),children:"Paypal"})," or ",(0,l.jsx)(S,{href:"https://www.patreon.com/frzyc",icon:(0,l.jsx)(s.G,{icon:i.MkT}),children:"Patreon"}),". GO does not host ads, and will not lock any features behind a paywall."]}),(0,l.jsxs)(g.Z,{variant:"body1",color:"text.secondary",gutterBottom:!0,children:["If you want to help with localization/translation of GO to your native language, request a feature or report a bug, join our ",(0,l.jsx)(S,{href:"https://discord.gg/CXUbQXyfUs",icon:(0,l.jsx)(s.G,{icon:i.omb}),children:"discord"}),". This is where you will find more GO-related information, and checkout what is being actively worked on."]}),(0,l.jsxs)(g.Z,{variant:"body1",color:"text.secondary",gutterBottom:!0,children:["You can also join the ",(0,l.jsx)(S,{href:"https://discord.gg/8Hpz2F7AnR",icon:(0,l.jsx)(s.G,{icon:i.omb}),children:"Genshin Dev discord"})," if you are interested in creating Genshin apps."]})]})})}),(0,l.jsx)(v.ZP,{item:!0,xs:12,md:6,children:(0,l.jsx)(h.Z,{sx:{width:"100%",height:"100%",minHeight:300},children:(0,l.jsx)("iframe",{src:"https://discord.com/widget?id=785153694478893126&theme=dark",width:"100%",height:"100%",frameBorder:"0",sandbox:"allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts",title:"discordFrame"})})})]})}),(0,l.jsx)(G.Z,{children:(0,l.jsx)(h.Z,{children:(0,l.jsxs)(w.c,{i18nKey:"credits",t:e,children:[(0,l.jsx)(g.Z,{variant:"h5",gutterBottom:!0,children:"Credit where credit is due"}),(0,l.jsxs)(g.Z,{variant:"body1",color:"text.secondary",gutterBottom:!0,children:["GO is the culmination of hundreds of hours of programming/designing by two maintainers, ",(0,l.jsx)(S,{href:"https://github.com/frzyc",icon:(0,l.jsx)(s.G,{icon:a.ILF}),children:(0,l.jsx)("strong",{children:" frzyc"})})," and ",(0,l.jsx)(S,{href:"https://github.com/lantua",icon:(0,l.jsx)(s.G,{icon:a.ILF}),children:(0,l.jsx)("strong",{children:" lantua"})}),". There are also a ton of other resources that aid in the creation of this website. Time to take a bow and thank them."]}),(0,l.jsx)(g.Z,{component:"div",variant:"body1",color:"text.secondary",children:(0,l.jsxs)("ul",{children:[(0,l.jsxs)("li",{children:["Thanks to everyone in the community, and especially people on our ",(0,l.jsx)(x.Z,{href:"https://discord.gg/CXUbQXyfUs",target:"_blank",rel:"noreferrer",children:"discord"})," for providing feedback and helping us improve this tool."]}),(0,l.jsxs)("li",{children:["Thanks to ",(0,l.jsx)(x.Z,{href:"https://github.com/Dimbreath",target:"_blank",rel:"noreferrer",children:"Dimbreath"}),", for giving us a reliable, consistent source for Genshin data and numbers. All our calculations would be moot without them."]}),(0,l.jsx)("li",{children:"Special thanks to members of our community who has gone the extra mile, and has been helping us with localization/translation of GO to other languages, help us test formulas by recording in-game data, and programmers who has helped us with source code contributions."}),(0,l.jsx)("li",{children:"Thanks for everyone else, for sharing this tool, and getting more people to use this tool."}),(0,l.jsxs)("li",{children:["Lastly, and most importantly, thank ",(0,l.jsx)("strong",{children:"YOU"}),", for using GO right now."]})]})})]})})})]})}},39504:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(87462),o=n(63366),i=n(72791),a=n(28182),s=n(90767),c=n(66934),l=n(93736),d=n(95159);function u(e){return(0,d.Z)("MuiCardContent",e)}(0,n(30208).Z)("MuiCardContent",["root"]);var h=n(80184),m=["className","component"],f=(0,c.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(){return{padding:16,"&:last-child":{paddingBottom:24}}})),p=i.forwardRef((function(e,t){var n=(0,l.Z)({props:e,name:"MuiCardContent"}),i=n.className,c=n.component,d=void 0===c?"div":c,p=(0,o.Z)(n,m),x=(0,r.Z)({},n,{component:d}),g=function(e){var t=e.classes;return(0,s.Z)({root:["root"]},u,t)}(x);return(0,h.jsx)(f,(0,r.Z)({as:d,className:(0,a.Z)(g.root,i),ownerState:x,ref:t},p))}))},42169:function(e,t,n){n.d(t,{Z:function(){return g}});var r=n(63366),o=n(87462),i=n(72791),a=n(28182),s=n(90767),c=n(93736),l=n(66934),d=n(95159);function u(e){return(0,d.Z)("MuiCardMedia",e)}(0,n(30208).Z)("MuiCardMedia",["root","media","img"]);var h=n(80184),m=["children","className","component","image","src","style"],f=(0,l.ZP)("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState,r=n.isMediaComponent,o=n.isImageComponent;return[t.root,r&&t.media,o&&t.img]}})((function(e){var t=e.ownerState;return(0,o.Z)({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},t.isMediaComponent&&{width:"100%"},t.isImageComponent&&{objectFit:"cover"})})),p=["video","audio","picture","iframe","img"],x=["picture","img"],g=i.forwardRef((function(e,t){var n=(0,c.Z)({props:e,name:"MuiCardMedia"}),i=n.children,l=n.className,d=n.component,g=void 0===d?"div":d,j=n.image,y=n.src,v=n.style,Z=(0,r.Z)(n,m),b=-1!==p.indexOf(g),w=!b&&j?(0,o.Z)({backgroundImage:'url("'.concat(j,'")')},v):v,k=(0,o.Z)({},n,{component:g,isMediaComponent:b,isImageComponent:-1!==x.indexOf(g)}),C=function(e){var t=e.classes,n={root:["root",e.isMediaComponent&&"media",e.isImageComponent&&"img"]};return(0,s.Z)(n,u,t)}(k);return(0,h.jsx)(f,(0,o.Z)({className:(0,a.Z)(C.root,l),as:g,role:!b&&j?"img":void 0,ref:t,style:w,ownerState:k,src:b?j||y:void 0},Z,{children:i}))}))},57621:function(e,t,n){n.d(t,{Z:function(){return x}});var r=n(87462),o=n(63366),i=n(72791),a=n(28182),s=n(90767),c=n(66934),l=n(93736),d=n(10703),u=n(95159);function h(e){return(0,u.Z)("MuiCard",e)}(0,n(30208).Z)("MuiCard",["root"]);var m=n(80184),f=["className","raised"],p=(0,c.ZP)(d.Z,{name:"MuiCard",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(){return{overflow:"hidden"}})),x=i.forwardRef((function(e,t){var n=(0,l.Z)({props:e,name:"MuiCard"}),i=n.className,c=n.raised,d=void 0!==c&&c,u=(0,o.Z)(n,f),x=(0,r.Z)({},n,{raised:d}),g=function(e){var t=e.classes;return(0,s.Z)({root:["root"]},h,t)}(x);return(0,m.jsx)(p,(0,r.Z)({className:(0,a.Z)(g.root,i),elevation:d?8:void 0,ref:t,ownerState:x},u))}))},23060:function(e,t,n){n.d(t,{Z:function(){return C}});var r=n(29439),o=n(4942),i=n(63366),a=n(87462),s=n(72791),c=n(28182),l=n(90767),d=n(18529),u=n(12065),h=n(14036),m=n(66934),f=n(93736),p=n(68221),x=n(42071),g=n(20890),j=n(95159);function y(e){return(0,j.Z)("MuiLink",e)}var v=(0,n(30208).Z)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),Z=n(80184),b=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant"],w={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},k=(0,m.ZP)(g.Z,{name:"MuiLink",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t["underline".concat((0,h.Z)(n.underline))],"button"===n.component&&t.button]}})((function(e){var t=e.theme,n=e.ownerState,r=(0,d.D)(t,"palette.".concat(function(e){return w[e]||e}(n.color)))||n.color;return(0,a.Z)({},"none"===n.underline&&{textDecoration:"none"},"hover"===n.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===n.underline&&{textDecoration:"underline",textDecorationColor:"inherit"!==r?(0,u.Fq)(r,.4):void 0,"&:hover":{textDecorationColor:"inherit"}},"button"===n.component&&(0,o.Z)({position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"}},"&.".concat(v.focusVisible),{outline:"auto"}))})),C=s.forwardRef((function(e,t){var n=(0,f.Z)({props:e,name:"MuiLink"}),o=n.className,d=n.color,u=void 0===d?"primary":d,m=n.component,g=void 0===m?"a":m,j=n.onBlur,v=n.onFocus,w=n.TypographyClasses,C=n.underline,G=void 0===C?"always":C,O=n.variant,z=void 0===O?"inherit":O,B=(0,i.Z)(n,b),M=(0,p.Z)(),P=M.isFocusVisibleRef,T=M.onBlur,S=M.onFocus,R=M.ref,K=s.useState(!1),L=(0,r.Z)(K,2),A=L[0],D=L[1],N=(0,x.Z)(t,R),F=(0,a.Z)({},n,{color:u,component:g,focusVisible:A,underline:G,variant:z}),I=function(e){var t=e.classes,n=e.component,r=e.focusVisible,o=e.underline,i={root:["root","underline".concat((0,h.Z)(o)),"button"===n&&"button",r&&"focusVisible"]};return(0,l.Z)(i,y,t)}(F);return(0,Z.jsx)(k,(0,a.Z)({className:(0,c.Z)(I.root,o),classes:w,color:u,component:g,onBlur:function(e){T(e),!1===P.current&&D(!1),j&&j(e)},onFocus:function(e){S(e),!0===P.current&&D(!0),v&&v(e)},ref:N,ownerState:F,variant:z},B))}))},4196:function(e,t,n){e.exports=n.p+"static/media/art_editor.e1c49f87bc2bcb114b03.png"},21282:function(e,t,n){e.exports=n.p+"static/media/build_generator.2002f43b646058042b72.png"},80113:function(e,t,n){e.exports=n.p+"static/media/character_editor.b21d8cc2553c56b7f6dc.png"},70083:function(e,t,n){e.exports=n.p+"static/media/talent_scr.3bb2e9ad8322f3e52f09.png"},29568:function(e,t,n){e.exports=n.p+"static/media/tools.9c56cfe9453c19c42994.png"}}]);
//# sourceMappingURL=784.bffe90d4.chunk.js.map