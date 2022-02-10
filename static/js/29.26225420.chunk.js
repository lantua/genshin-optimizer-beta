(this["webpackJsonpgenshin-optimizer"]=this["webpackJsonpgenshin-optimizer"]||[]).push([[29],{330:function(t,e,a){"use strict";var i=a(9),c=Object(i.a)("img")({width:"100%",height:"auto"});e.a=c},767:function(t,e,a){"use strict";a.r(e),a.d(e,"default",(function(){return g}));var i=a(14),c=a(53),r=a(52),n=a(250),s=a(70),o=a(406),l=a(124),h=a(89),j=a(46),f=a(330),d=a(267),b=a(274),u=a.p+"static/media/artifactcard.b41c23a2.png",x=a.p+"static/media/artifacteditor.707cebe8.png",O=a.p+"static/media/artifactfilter.610b641f.png",m=a(1);function y(){return Object(m.jsx)("span",{children:Object(i.a)(Array(6).keys()).map((function(t){return Object(m.jsx)(d.a,{color:"roll".concat(t+1),sx:{ml:1},children:Object(m.jsx)("b",{children:t+1})},t)}))})}function g(){var t=Object(l.a)("artifact").t;return Object(m.jsxs)(n.a,{container:!0,spacing:1,children:[Object(m.jsx)(n.a,{item:!0,xs:12,lg:5,xl:4,children:Object(m.jsx)(f.a,{src:u})}),Object(m.jsx)(n.a,{item:!0,xs:12,lg:7,xl:8,children:Object(m.jsxs)(h.a,{t:t,i18nKey:"info.section1",children:[Object(m.jsx)(s.a,{variant:"h5",children:"Substat rolls"}),Object(m.jsxs)(s.a,{gutterBottom:!0,children:["The ",Object(m.jsx)("b",{children:"number of rolls"})," a substat has is shown to the left of the substat. As the number gets higher, the substat is more colorful:",Object(m.jsx)(y,{}),"."]}),Object(m.jsx)(s.a,{variant:"h5",children:"Substat Efficiency"}),Object(m.jsxs)(s.a,{gutterBottom:!0,children:["The Efficiency of an subtat is a percentage of the current value over the highest potential 5",Object(m.jsx)(b.a,{stars:1})," value. From the Image, the maximum roll value of CRIT DMG is 7.8%. In efficiency: ",Object(m.jsx)("b",{children:"5.8/7.8 = 69.2%."})]}),Object(m.jsx)(s.a,{variant:"h5",children:"Current substats Efficiency vs. Maximum Substats Efficiency"}),Object(m.jsxs)(s.a,{gutterBottom:!0,children:["When a 5",Object(m.jsx)(b.a,{stars:1})," have 9(4+5) total rolls, with each of the rolls having the highest value, that is defined as a 100% efficient artifact. However, most of the artifacts are not this lucky. The ",Object(m.jsx)("b",{children:"Current substats Efficiency"})," of an artifact is a percentage over that 100% artifact. The ",Object(m.jsx)("b",{children:"Maximum Substats Efficiency"})," is the maximum possible efficiency an artifact can achieve, if the remaining artifact rolls from upgrades are the hightest possible value."]}),Object(m.jsx)(s.a,{variant:"h5",children:"Locking an artifact"}),Object(m.jsxs)(s.a,{children:["By locking an artifact ",Object(m.jsx)(r.a,{icon:c.b}),", This artifact will not be picked up by the build generator for optimization. An equipped artifact is locked by default."]})]})}),Object(m.jsx)(n.a,{item:!0,xs:12,lg:6,xl:7,children:Object(m.jsxs)(h.a,{t:t,i18nKey:"info.section2",children:[Object(m.jsx)(s.a,{variant:"h5",children:"Artifact Editor"}),Object(m.jsxs)(s.a,{gutterBottom:!0,children:["A fully featured artifact editor, that can accept any 3",Object(m.jsx)(b.a,{stars:1})," to 5",Object(m.jsx)(b.a,{stars:1})," Artifact. When a substat is inputted, it can calculate the exact roll values, and from it, the efficiency. It will also make sure that you have the correct number of rolls in the artifact according to the level, along with other metrics of validation."]}),Object(m.jsx)(s.a,{variant:"h5",children:"Scan screenshots"}),Object(m.jsxs)(s.a,{gutterBottom:!0,children:["Manual input is not your cup of tea? You can scan in your artifacts with screenshots! On the Artifact Editor, click the ",Object(m.jsx)(d.a,{color:"info",children:"Show Me How!"})," button to learn more."]}),Object(m.jsx)(s.a,{variant:"h6",children:"Automatic Artifact Scanner"}),Object(m.jsxs)(s.a,{gutterBottom:!0,children:["If you are playing Genshin on PC, you can download a tool that automatically scans all your artifacts for you, and you can then import that data in ",Object(m.jsx)(r.a,{icon:c.j})," Database. ",Object(m.jsx)(o.a,{component:j.b,to:"/scanner",children:"Click here"})," for a list of scanners that are compatible with GO."]}),Object(m.jsx)(s.a,{variant:"h5",children:"Duplicate/Upgrade artifact detection"}),Object(m.jsxs)(s.a,{children:["Did you know GO can detect if you are adding a ",Object(m.jsx)("b",{children:"duplicate"})," artifact that exists in the system? It can also detect if the current artifact in editor is an ",Object(m.jsx)("b",{children:"upgrade"})," of an existing artifact as well. Once a duplicate/upgrade is detected, a preview will allow you to compare the two artifacts in question(See Image)."]})]})}),Object(m.jsx)(n.a,{item:!0,xs:12,lg:6,xl:5,children:Object(m.jsx)(f.a,{src:x})}),Object(m.jsx)(n.a,{item:!0,xs:12,lg:7,xl:6,children:Object(m.jsx)(f.a,{src:O})}),Object(m.jsx)(n.a,{item:!0,xs:12,lg:5,xl:6,children:Object(m.jsxs)(h.a,{t:t,i18nKey:"info.section3",children:[Object(m.jsx)(s.a,{variant:"h5",children:"Artifact Inventory"}),Object(m.jsx)(s.a,{gutterBottom:!0,children:"All your artifacts that you've added to GO is displayed here. The filters here allow you to further refine your view of your artifacts. "}),Object(m.jsx)(s.a,{variant:"h5",children:"Example: Finding Fodder Artifacts"}),Object(m.jsx)(s.a,{children:"By utilizing the artifact filter, and the artifact efficiency calculations, you can quickly find artifacts to feed as food."}),Object(m.jsx)(s.a,{children:"In this example, the filters are set thusly: "}),Object(m.jsx)(s.a,{component:"div",children:Object(m.jsxs)("ul",{children:[Object(m.jsx)("li",{children:"Limit level to 0-8."}),Object(m.jsx)("li",{children:"Unlocked artifacts in Inventory."}),Object(m.jsx)("li",{children:"Removing the contribution of flat HP, flat DEF and Energy Recharge to efficiency calculations."}),Object(m.jsx)("li",{children:"Sorted by Ascending Max Efficiency."})]})}),Object(m.jsx)(s.a,{children:"This will filter the artifact Inventory by the lowest efficiency artifacts, for desired substats."})]})})]})}}}]);
//# sourceMappingURL=29.26225420.chunk.js.map