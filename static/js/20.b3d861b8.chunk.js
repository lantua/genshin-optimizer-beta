(this["webpackJsonpgenshin-optimizer"]=this["webpackJsonpgenshin-optimizer"]||[]).push([[20],{331:function(e,t,a){"use strict";a.d(t,"d",(function(){return o})),a.d(t,"c",(function(){return l})),a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return d})),a.d(t,"e",(function(){return b}));var n=a(14),s=a(126),c=a(268),i=a(1),o=function(e){return Object(i.jsx)(s.a,{ns:"sheet",key18:e})},l=function(e){return Object(i.jsx)(s.a,{ns:"sheet_gen",key18:e})},r=function(e){return Object(c.c)(["conditional"].concat(Object(n.a)(e)))};function d(e,t){var a=[e,t];return[a,r(a)]}function b(e,t){return[function(a){return Object(i.jsx)(s.a,{ns:"".concat(e,"_").concat(t,"_gen"),key18:a})},function(a){return Object(i.jsx)(s.a,{ns:"".concat(e,"_").concat(t),key18:a})}]}},373:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"d",(function(){return j})),a.d(t,"c",(function(){return h})),a.d(t,"b",(function(){return f}));var n=a(6),s=a(10),c=a(14),i=a(262),o=a(273),l=a(311),r=a(268),d=a(61),b=a(25),u=a(440),p=["hydro","pyro","cryo","electro"],m=Object(b.o)(u,(function(e){return[0].concat(Object(c.a)(Object.values(e)))})),g=Object(b.m)([].concat(Object(c.a)(d.b),["heal_"]),(function(e){return i.b.total[e]}));function O(e){switch(e){case"normal":case"charged":case"plunging":return"auto";case"skill":return"skill";case"burst":return"burst"}}function j(e,t,a){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return Object(r.d)(i.b.hit.dmg,Object(o.f)([{hit:{base:Object(r.n)(i.b.total[e],t),move:Object(r.a)(a)}},n]))}function h(e,t,a){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},s=O(a);return Object(r.d)(i.b.hit.dmg,Object(o.f)([{hit:{base:Object(r.n)(Object(r.u)(i.b.total["".concat(s,"Index")],t,{key:"_"}),i.b.total[e]),move:Object(r.a)(a)}},n]))}function f(e,t,a,u,p){var O=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{};function j(e,t){return Object(r.n)(e,Object(r.u)(i.b.lvl,m[t]))}p.basic=Object(s.a)({},g);var h,f={charKey:Object(r.a)(e),base:{},weaponType:Object(r.a)(u.weaponTypeKey),premod:{},display:p};t&&(f.charEle=Object(r.a)(t),f.teamBuff={tally:Object(n.a)({},t,Object(r.a)(1))},f.display.basic["".concat(t,"_dmg_")]=i.b.total["".concat(t,"_dmg_")],f.display.reaction=l.a[t]),a&&Object(b.k)(f,["teamBuff","tally",a],Object(r.a)(1)),"catalyst"!==u.weaponTypeKey&&(f.display.basic||(f.display.basic={}),f.display.basic.physical_dmg_=i.b.total.physical_dmg_);for(var k=function(){var e=v[_],t=[];if(u.curves[e]&&t.push(j(u.base[e],u.curves[e])),u.ascensions.some((function(t){return t.props[e]}))&&t.push(Object(r.u)(i.b.asc,u.ascensions.map((function(t){var a;return null!==(a=t.props[e])&&void 0!==a?a:NaN})))),!t.length)return"continue";var a=Object(r.f)(1===t.length?t[0]:r.v.apply(void 0,t),{key:e,prefix:"char",asConst:!0});if(e.endsWith("_dmg_")&&(a.info.variant=e.slice(0,-5)),"atk"===e||"def"===e||"hp"===e)f.base[e]=a;else{if(h)throw new Error("Duplicated Char Special");h=!0,f.special=a,f.premod[e]=i.b.special}},_=0,v=[].concat(Object(c.a)(d.a),["def"]);_<v.length;_++)k();return Object(o.f)([f,Object(o.e)(O)])}g.critRate_=i.b.total.cappedCritRate},374:function(e,t,a){"use strict";a.r(t);var n=a(14),s=a(10),c=a(8),i=a(54),o=a(126),l=a(262),r=a(268),d=a(331),b=a(270),u=a(373),p=a.p+"static/media/Character_Kazuha_Card.0dd97246.png",m=a.p+"static/media/Icon.fc7d5d73.png",g=a.p+"static/media/IconSide.409d7442.png",O=a.p+"static/media/Banner.d334fcb1.png",j=a.p+"static/media/constellation1.eba05def.png",h=a.p+"static/media/constellation2.99f250de.png",f=a.p+"static/media/constellation3.fe15c23c.png",k=a.p+"static/media/constellation4.4be95339.png",_=a.p+"static/media/constellation5.4f5bb9fc.png",v=a.p+"static/media/constellation6.b8d04a02.png",y=a.p+"static/media/skill.fe15c23c.png",x=a.p+"static/media/burst.c0346e9f.png",w=a.p+"static/media/passive1.37e9f644.png",S=a.p+"static/media/passive2.98be404f.png",P=a.p+"static/media/passive3.b4e1fa9b.png",K=a(709),C=a(710),E=a(1),A=K,R="KaedeharaKazuha",I=Object(d.e)("char",R),T=Object(c.a)(I,2),M=T[0],H=T[1],N=0,B=0,G=0,W=0,U=0,V={normal:{hitArr:[C.auto[N++],C.auto[N++],C.auto[N++],C.auto[N++],C.auto[N++],C.auto[N++]]},charged:{dmg1:C.auto[N++],dmg2:C.auto[N++],stamina:C.auto[N++][0]},plunging:{dmg:C.auto[N++],low:C.auto[N++],high:C.auto[N++]},skill:{press:C.skill[B++],cd:C.skill[B++][0],hold:C.skill[B++],cdHold:C.skill[B++][0]},burst:{dmg:C.burst[G++],dot:C.burst[G++],add:C.burst[G++],duration:C.burst[G++][0],cd:C.burst[G++][0],enerCost:C.burst[G++][0]},passive1:{asorbAdd:C.passive1[W++][0]},passive2:{elemas_dmg_:C.passive2[U++][0],duration:C.passive2[U++][0]},constellation2:{elemas:C.constellation2[0]},constellation6:{auto_:C.constellation6[0],duration:C.constellation6[1]}},z=Object(d.a)(R,"burstAbsorption"),J=Object(c.a)(z,2),q=J[0],D=J[1],F=Object(d.a)(R,"skillAbsorption"),L=Object(c.a)(F,2),Q=L[0],X=L[1],Y=Object.fromEntries(u.a.map((function(e){return[e,[R,"swirl".concat(e)]]}))),Z=Object.fromEntries(u.a.map((function(e){return[e,Object(d.b)(Y[e])]}))),$=Object.fromEntries(u.a.map((function(e){return["".concat(e,"_dmg_"),Object(r.x)(l.b.asc,4,Object(r.h)("swirl",Z[e],Object(r.n)(Object(r.m)(V.passive2.elemas_dmg_),l.b.premod.eleMas)))]}))),ee=Object(d.a)(R,"c2"),te=Object(c.a)(ee,2),ae=te[0],ne=te[1],se=Object(r.x)(l.b.constellation,2,Object(r.h)("c2",ne,V.constellation2.elemas),{key:"eleMas"}),ce=Object(d.a)(R,"c2p"),ie=Object(c.a)(ce,2),oe=ie[0],le=ie[1],re=Object(r.x)(l.b.constellation,2,Object(r.h)("c2p",le,Object(r.z)(l.c.charKey,R,V.constellation2.elemas)),{key:"eleMas"}),de=Object(d.a)(R,"c6"),be=Object(c.a)(de,2),ue=be[0],pe=be[1],me=Object(r.w)(l.b.constellation,6,Object(r.i)("c6",pe,"anemo",void 0),void 0),ge=Object(r.x)(l.b.constellation,6,Object(r.h)("c6",pe,Object(r.n)(Object(r.m)(V.constellation6.auto_),l.b.premod.eleMas))),Oe=Object(s.a)({},ge),je=Object(s.a)({},ge),he=Object(s.a)({},ge),fe=Object(r.m)(.2),ke={normal:Object.fromEntries(V.normal.hitArr.map((function(e,t){return[t,Object(u.c)("atk",e,"normal")]}))),charged:{dmg1:Object(u.c)("atk",V.charged.dmg1,"charged"),dmg2:Object(u.c)("atk",V.charged.dmg2,"charged")},plunging:Object.fromEntries(Object.entries(V.plunging).map((function(e){var t=Object(c.a)(e,2),a=t[0],n=t[1];return[a,Object(u.c)("atk",n,"plunging")]}))),skill:{press:Object(u.c)("atk",V.skill.press,"skill"),hold:Object(u.c)("atk",V.skill.hold,"skill"),pdmg:Object(u.c)("atk",V.plunging.dmg,"plunging",{hit:{ele:Object(r.a)("anemo")}}),plow:Object(u.c)("atk",V.plunging.low,"plunging",{hit:{ele:Object(r.a)("anemo")}}),phigh:Object(u.c)("atk",V.plunging.high,"plunging",{hit:{ele:Object(r.a)("anemo")}})},burst:Object(s.a)({dmg:Object(u.c)("atk",V.burst.dmg,"burst"),dot:Object(u.c)("atk",V.burst.dot,"burst")},Object.fromEntries(u.a.map((function(e){return[e,Object(r.h)(D,e,Object(u.c)("atk",V.burst.add,"burst",{hit:{ele:Object(r.a)(e)}}))]})))),passive1:Object.fromEntries(u.a.map((function(e){return[e,Object(r.h)(X,e,Object(u.d)("atk",V.passive1.asorbAdd,"plunging",{hit:{ele:Object(r.a)(e)}}))]}))),constellation6:{normal_dmg_:Oe,charged_dmg_:je,plunging_dmg_:he}},_e=Object(u.b)(R,"anemo","inazuma",A,ke,{bonus:{skill:Object(r.x)(l.b.constellation,3,3),burst:Object(r.x)(l.b.constellation,5,3)},teamBuff:{premod:Object(s.a)(Object(s.a)({},$),{},{staminaSprintDec_:fe}),total:{eleMas:re}},infusion:me,premod:{normal_dmg_:Oe,charged_dmg_:je,plunging_dmg_:he},total:{eleMas:se}}),ve={name:M("name"),cardImg:p,thumbImg:m,thumbImgSide:g,bannerImg:O,rarity:A.star,elementKey:"anemo",weaponTypeKey:A.weaponTypeKey,gender:"M",constellationName:M("constellationName"),title:M("title"),talent:{sheets:{auto:{name:M("auto.name"),img:Object(b.c)(A.weaponTypeKey),sections:[{text:M("auto.fields.normal"),fields:V.normal.hitArr.map((function(e,t){return{node:Object(r.f)(ke.normal[t],{key:"char_".concat(R,"_gen:auto.skillParams.").concat(t+(t<3?0:-1))}),textSuffix:2===t?"(1)":3===t?"(2)":5===t?Object(E.jsxs)("span",{children:["(",Object(E.jsx)(o.a,{ns:"sheet",key18:"hits",values:{count:3}}),")"]}):""}}))},{text:M("auto.fields.charged"),fields:[{node:Object(r.f)(ke.charged.dmg1,{key:"char_".concat(R,"_gen:auto.skillParams.5")}),textSuffix:"(1)"},{node:Object(r.f)(ke.charged.dmg2,{key:"char_".concat(R,"_gen:auto.skillParams.5")}),textSuffix:"(2)"},{text:M("auto.skillParams.6"),value:V.charged.stamina}]},{text:M("auto.fields.plunging"),fields:[{node:Object(r.f)(ke.plunging.dmg,{key:"sheet_gen:plunging.dmg"})},{node:Object(r.f)(ke.plunging.low,{key:"sheet_gen:plunging.low"})},{node:Object(r.f)(ke.plunging.high,{key:"sheet_gen:plunging.high"})}]}]},skill:{name:M("skill.name"),img:y,sections:[{text:M("skill.description"),fields:[{node:Object(r.f)(ke.skill.press,{key:"char_".concat(R,"_gen:skill.skillParams.0")})},{text:M("skill.skillParams.1"),value:function(e){return e.get(l.b.constellation).value>=1?"".concat(V.skill.cd,"s - 10%"):"".concat(V.skill.cd,"s")}},{node:Object(r.f)(ke.skill.hold,{key:"char_".concat(R,"_gen:skill.skillParams.2")})},{text:M("skill.skillParams.1"),value:function(e){return e.get(l.b.constellation).value>=1?"".concat(V.skill.cdHold,"s - 10%"):"".concat(V.skill.cdHold,"s")}},{canShow:function(e){return e.get(l.b.constellation).value>=1},text:H("c1")}]},{fields:[{node:Object(r.f)(ke.skill.pdmg,{key:"sheet_gen:plunging.dmg"})},{node:Object(r.f)(ke.skill.plow,{key:"sheet_gen:plunging.low"})},{node:Object(r.f)(ke.skill.phigh,{key:"sheet_gen:plunging.high"})}]}]},burst:{name:M("burst.name"),img:x,sections:[{text:M("burst.description"),fields:[{node:Object(r.f)(ke.burst.dmg,{key:"char_".concat(R,"_gen:burst.skillParams.0")})},{node:Object(r.f)(ke.burst.dot,{key:"char_".concat(R,"_gen:burst.skillParams.1")})},{text:M("burst.skillParams.3"),value:V.burst.duration,unit:"s"},{text:M("burst.skillParams.4"),value:V.burst.cd,unit:"s"},{text:M("burst.skillParams.5"),value:V.burst.enerCost}]},{conditional:{value:D,path:q,name:Object(d.d)("eleAbsor"),states:Object.fromEntries(u.a.map((function(e){return[e,{name:Object(E.jsx)(i.a,{color:e,children:Object(d.c)("element.".concat(e))}),fields:[{node:Object(r.f)(ke.burst[e],{key:"char_".concat(R,"_gen:burst.skillParams.2")})}]}]})))}},{conditional:{canShow:Object(r.x)(l.b.constellation,2,1),value:ne,path:ae,name:H("c2"),states:{c2:{fields:[{node:se}]}}}},{conditional:{canShow:Object(r.x)(l.b.constellation,2,Object(r.z)(l.c.charKey,R,1)),value:le,path:oe,teamBuff:!0,header:Object(b.a)("constellation2",M,h),description:M("constellation2.description"),name:H("c2p"),states:{c2p:{fields:[{node:re}]}}}}]},passive1:{name:M("passive1.name"),img:w,sections:[{text:M("passive1.description"),conditional:{value:X,path:Q,name:Object(d.d)("eleAbsor"),states:Object.fromEntries(u.a.map((function(e){return[e,{name:Object(E.jsx)(i.a,{color:e,children:Object(d.c)("element.".concat(e))}),fields:[{node:Object(r.f)(ke.passive1[e],{key:"sheet_gen:addEleDMG"})}]}]})))}}]},passive2:{name:M("passive2.name"),img:S,sections:[{text:M("passive2.description")}].concat(Object(n.a)(u.a.map((function(e){return{conditional:{value:Z[e],path:Y[e],teamBuff:!0,header:Object(b.a)("passive2",M,S),description:M("passive2.description"),name:H("a4.name_".concat(e)),states:{swirl:{fields:[{node:$["".concat(e,"_dmg_")]},{text:Object(d.c)("duration"),value:V.passive2.duration,unit:"s"}]}}}}}))))},passive3:{name:M("passive3.name"),img:P,sections:[{text:M("passive3.description"),fields:[{node:fe}]}]},constellation1:Object(b.d)("constellation1",M,j),constellation2:Object(b.d)("constellation2",M,h),constellation3:Object(b.d)("constellation3",M,f),constellation4:Object(b.d)("constellation4",M,k),constellation5:Object(b.d)("constellation5",M,_),constellation6:{name:M("constellation6.name"),img:v,sections:[{text:M("constellation6.description"),conditional:{value:pe,path:ue,name:H("c6.after"),states:{c6:{fields:[{canShow:function(e){return"anemo"===e.get(me).value},text:Object(E.jsx)(i.a,{color:"anemo",children:"Anemo Infusion"})},{node:Oe},{node:je},{node:he},{text:Object(d.c)("duration"),value:V.constellation6.duration,unit:"s"}]}}}}]}}}},ye=new b.b(ve,_e),xe=a.p+"static/media/Character_Shenhe_Card.2bf30635.jpg",we=a.p+"static/media/Icon.317f8076.png",Se=a.p+"static/media/IconSide.12f3c0e6.png",Pe=a.p+"static/media/Banner.86a78cff.png",Ke=a.p+"static/media/constellation1.cc60752a.png",Ce=a.p+"static/media/constellation2.79de4e68.png",Ee=a.p+"static/media/constellation3.30046692.png",Ae=a.p+"static/media/constellation4.0e736a56.png",Re=a.p+"static/media/constellation5.7cdb1048.png",Ie=a.p+"static/media/constellation6.185d80e5.png",Te=a.p+"static/media/skill.30046692.png",Me=a.p+"static/media/burst.dbb21c7d.png",He=a.p+"static/media/passive1.0d4c095c.png",Ne=a.p+"static/media/passive2.b5358073.png",Be=a.p+"static/media/passive3.32b68928.png",Ge=a(711),We=a(712),Ue=Ge,Ve="Shenhe",ze=Object(d.e)("char",Ve),Je=Object(c.a)(ze,2),qe=Je[0],De=Je[1],Fe=0,Le=0,Qe=0,Xe=0,Ye={normal:{hitArr:[We.auto[0],We.auto[1],We.auto[2],We.auto[3],We.auto[5]]},charged:{dmg:We.auto[6],stamina:We.auto[7][0]},plunging:{dmg:We.auto[8],low:We.auto[9],high:We.auto[10]},skill:{press:We.skill[Fe++],hold:We.skill[Fe++],dmgAtk_:We.skill[Fe++],duration:We.skill[Fe++][0],durationHold:We.skill[Fe++][0],trigger:We.skill[Fe++][0],triggerHold:We.skill[Fe++][0],cd:We.skill[Fe++][0],cdHold:We.skill[Fe++][0]},burst:{dmg:We.burst[Le++],res_:We.burst[Le++],dot:We.burst[Le++],duration:We.burst[Le++][0],cd:We.burst[Le++][0],enerCost:We.burst[Le++][0]},passive1:{cryo_dmg_:We.passive1[Qe++][0]},passive2:{press_dmg_:We.passive2[Xe++][0],durationPress:We.passive2[Xe++][0],hold_dmg_:We.passive2[Xe++][0],durationHold:We.passive2[Xe++][0]},constellation2:{durationInc:We.constellation2[0]},constellation6:{auto_:We.constellation6[0],duration:We.constellation6[1]}},Ze=Object(d.a)(Ve,"quill"),$e=Object(c.a)(Ze,2),et=$e[0],tt=$e[1],at=Object(r.h)("quill",tt,Object(r.n)(l.b.premod.atk,Object(r.u)(l.b.total.skillIndex,Ye.skill.dmgAtk_,{key:"_"}))),nt=Object(d.a)(Ve,"burst"),st=Object(c.a)(nt,2),ct=st[0],it=st[1],ot=Object(r.h)("burst",it,Object(r.u)(l.b.total.burstIndex,Ye.burst.res_.map((function(e){return-e})),{key:"_"})),lt=Object(s.a)({},ot),rt=Object(s.a)({},ot),dt=Object(d.a)(Ve,"asc1"),bt=Object(c.a)(dt,2),ut=bt[0],pt=bt[1],mt=Object(r.x)(l.b.asc,1,Object(r.h)(pt,"field",Object(r.h)(l.b.activeCharKey,l.b.charKey,Ye.passive1.cryo_dmg_))),gt=Object(d.a)(Ve,"asc4"),Ot=Object(c.a)(gt,2),jt=Ot[0],ht=Ot[1],ft=Object(r.x)(l.b.asc,1,Object(r.h)(ht,"press",Ye.passive2.press_dmg_)),kt=Object(s.a)({},ft),_t=Object(s.a)({},ft),vt=Object(r.x)(l.b.asc,1,Object(r.h)(ht,"hold",Ye.passive2.hold_dmg_)),yt=Object(s.a)({},vt),xt=Object(s.a)({},vt),wt=Object(s.a)({},vt),St=Object(r.x)(l.b.constellation,2,Object(r.h)(pt,"field",Object(r.h)(l.b.activeCharKey,l.b.charKey,Ye.passive1.cryo_dmg_))),Pt={normal:Object.fromEntries(Ye.normal.hitArr.map((function(e,t){return[t,Object(u.c)("atk",e,"normal")]}))),charged:{dmg:Object(u.c)("atk",Ye.charged.dmg,"charged")},plunging:Object.fromEntries(Object.entries(Ye.plunging).map((function(e){var t=Object(c.a)(e,2),a=t[0],n=t[1];return[a,Object(u.c)("atk",n,"plunging")]}))),skill:{press:Object(u.c)("atk",Ye.skill.press,"skill"),hold:Object(u.c)("atk",Ye.skill.hold,"skill"),quillDmg:at},burst:{dmg:Object(u.c)("atk",Ye.burst.dmg,"burst"),dot:Object(u.c)("atk",Ye.burst.dot,"burst")}},Kt=Object(u.b)(Ve,"cryo","liyue",Ue,Pt,{bonus:{skill:Object(r.x)(l.b.constellation,3,3),burst:Object(r.x)(l.b.constellation,5,3)},teamBuff:{premod:{all_dmgInc:at,cryo_enemyRes_:lt,physical_enemyRes_:rt,cryo_dmg_:mt,skill_dmg_:kt,burst_dmg_:_t,normal_dmg_:yt,charged_dmg_:xt,plunging_dmg_:wt}}}),Ct={name:qe("name"),cardImg:xe,thumbImg:we,thumbImgSide:Se,bannerImg:Pe,rarity:Ue.star,elementKey:"anemo",weaponTypeKey:Ue.weaponTypeKey,gender:"M",constellationName:qe("constellationName"),title:qe("title"),talent:{sheets:{auto:{name:qe("auto.name"),img:Object(b.c)(Ue.weaponTypeKey),sections:[{text:qe("auto.fields.normal"),fields:Ye.normal.hitArr.map((function(e,t){return{node:Object(r.f)(Pt.normal[t],{key:"char_".concat(Ve,"_gen:auto.skillParams.").concat(t)}),textSuffix:3===t?Object(E.jsxs)("span",{children:["(",Object(E.jsx)(o.a,{ns:"sheet",key18:"hits",values:{count:2}}),")"]}):""}}))},{text:qe("auto.fields.charged"),fields:[{node:Object(r.f)(Pt.charged.dmg,{key:"char_".concat(Ve,"_gen:auto.skillParams.5")})},{text:qe("auto.skillParams.6"),value:Ye.charged.stamina}]},{text:qe("auto.fields.plunging"),fields:[{node:Object(r.f)(Pt.plunging.dmg,{key:"sheet_gen:plunging.dmg"})},{node:Object(r.f)(Pt.plunging.low,{key:"sheet_gen:plunging.low"})},{node:Object(r.f)(Pt.plunging.high,{key:"sheet_gen:plunging.high"})}]}]},skill:{name:qe("skill.name"),img:Te,sections:[{text:qe("skill.description"),fields:[{node:Object(r.f)(Pt.skill.press,{key:"char_".concat(Ve,"_gen:skill.skillParams.0")})},{node:Object(r.f)(Pt.skill.hold,{key:"char_".concat(Ve,"_gen:skill.skillParams.1")})},{text:qe("skill.skillParams.3"),value:"".concat(Ye.skill.duration,"s / ").concat(Ye.skill.durationHold,"s")},{text:qe("skill.skillParams.4"),value:"".concat(Ye.skill.trigger,"s / ").concat(Ye.skill.triggerHold,"s")},{text:qe("skill.skillParams.5"),value:Ye.skill.cd},{text:qe("skill.skillParams.6"),value:Ye.skill.cd},{text:Object(d.d)("charges"),value:function(e){return e.get(l.b.constellation).value>=1?3:2}}],conditional:{teamBuff:!0,value:tt,path:et,name:De("quill"),states:{quill:{fields:[{node:at}]}}}},{conditional:{canShow:Object(r.x)(l.b.asc,4,1),value:ht,path:jt,teamBuff:!0,header:Object(b.a)("passive2",qe,Ne),description:qe("passive2.description"),name:Object(E.jsxs)("span",{children:["After Shenhe uses ",Object(E.jsx)("strong",{children:"Spring Spirit Summoning"})]}),states:{press:{name:"Press",fields:[{node:kt},{node:_t}]},hold:{name:"Hold",fields:[{node:yt},{node:xt},{node:wt}]}}}}]},burst:{name:qe("burst.name"),img:Me,sections:[{text:qe("burst.description"),fields:[{node:Object(r.f)(Pt.burst.dmg,{key:"char_".concat(Ve,"_gen:burst.skillParams.0")})},{node:Object(r.f)(Pt.burst.dot,{key:"char_".concat(Ve,"_gen:burst.skillParams.2")})},{text:qe("burst.skillParams.3"),value:function(e){return"".concat(Ye.burst.duration)+(e.get(l.b.constellation).value>=2?"s + ".concat(Ye.constellation2.durationInc):"")},unit:"s"},{text:qe("burst.skillParams.4"),value:Ye.burst.cd,unit:"s"},{text:qe("burst.skillParams.5"),value:Ye.burst.enerCost}]},{conditional:{teamBuff:!0,value:it,path:ct,name:qe("burst.name"),states:{burst:{fields:[{node:lt},{node:rt}]}}}},{conditional:{canShow:Object(r.x)(l.b.asc,1,Object(r.h)(l.b.activeCharKey,l.b.charKey,1)),value:pt,path:ut,teamBuff:!0,header:Object(b.a)("passive1",qe,He),description:qe("passive1.description"),name:"Active Character in field",states:{field:{fields:[{node:mt},{node:St}]}}}}]},passive1:Object(b.d)("passive1",qe,He),passive2:Object(b.d)("passive2",qe,Ne),passive3:Object(b.d)("passive3",qe,Be),constellation1:Object(b.d)("constellation1",qe,Ke),constellation2:Object(b.d)("constellation2",qe,Ce),constellation3:Object(b.d)("constellation3",qe,Ee),constellation4:{name:qe("constellation4.name"),img:Ae,sections:[{text:qe("constellation4.description")}]},constellation5:Object(b.d)("constellation5",qe,Re),constellation6:Object(b.d)("constellation6",qe,Ie)}}},Et=new b.b(Ct,Kt),At=a(25),Rt=a.p+"static/media/Character_Sucrose_Card.ef1bd7db.jpg",It=a.p+"static/media/Icon.b2fb024a.png",Tt=a.p+"static/media/IconSide.8d617903.png",Mt=a.p+"static/media/Banner.3f41953c.png",Ht=a.p+"static/media/constellation1.7d9e1daa.png",Nt=a.p+"static/media/constellation2.41513e9d.png",Bt=a.p+"static/media/constellation3.4522cc05.png",Gt=a.p+"static/media/constellation4.36becbc7.png",Wt=a.p+"static/media/constellation5.bc47f845.png",Ut=a.p+"static/media/constellation6.00893665.png",Vt=a.p+"static/media/skill.4522cc05.png",zt=a.p+"static/media/burst.5c5ea28e.png",Jt=a.p+"static/media/passive1.80218f92.png",qt=a.p+"static/media/passive2.153ce525.png",Dt=a.p+"static/media/passive3.469169c5.png",Ft=a(713),Lt=a(714),Qt=Ft,Xt="Sucrose",Yt=Object(d.e)("char",Xt),Zt=Object(c.a)(Yt,2),$t=Zt[0],ea=Zt[1],ta=0,aa=0,na=0,sa=0,ca=0,ia={normal:{hitArr:[Lt.auto[ta++],Lt.auto[ta++],Lt.auto[ta++],Lt.auto[ta++]]},charged:{dmg:Lt.auto[ta++],stamina:Lt.auto[ta++][0]},plunging:{dmg:Lt.auto[ta++],low:Lt.auto[ta++],high:Lt.auto[ta++]},skill:{press:Lt.skill[aa++],cd:Lt.skill[aa++][0]},burst:{dot:Lt.burst[na++],dmg_:Lt.burst[na++],duration:Lt.burst[na++][0],cd:Lt.burst[na++][0],enerCost:Lt.burst[na++][0]},passive1:{eleMas:Lt.passive1[sa++][0],duration:Lt.passive1[sa++][0]},passive2:{eleMas_:Lt.passive2[ca++][0],duration:Lt.passive2[ca++][0]},constellation2:{durationInc:Lt.constellation2[0]},constellation6:{ele_dmg_:Lt.constellation6[0]}},oa=Object(d.a)(Xt,"absorption"),la=Object(c.a)(oa,2),ra=la[0],da=la[1],ba=Object(d.a)(Xt,"swirl"),ua=Object(c.a)(ba,2),pa=ua[0],ma=ua[1],ga=Object(d.a)(Xt,"skillHit"),Oa=Object(c.a)(ga,2),ja=Oa[0],ha=Oa[1],fa=Object(r.x)(l.b.asc,1,Object(r.z)(l.c.charKey,Xt,Object(r.h)(l.c.charEle,ma,ia.passive1.eleMas)),{key:"eleMas"}),ka=Object(r.h)("hit",ha,Object(r.z)(l.c.charKey,Xt,Object(r.x)(l.b.asc,4,Object(r.n)(Object(r.m)(ia.passive2.eleMas_),l.b.premod.eleMas))),{key:"eleMas"}),_a=Object(r.x)(l.b.constellation,6,Object(r.m)(.2)),va=Object(At.m)(u.a.map((function(e){return"".concat(e,"_dmg_")})),(function(e){return Object(r.h)(da,e.slice(0,-5),_a)})),ya={normal:Object.fromEntries(ia.normal.hitArr.map((function(e,t){return[t,Object(u.c)("atk",e,"normal")]}))),charged:{dmg:Object(u.c)("atk",ia.charged.dmg,"charged")},plunging:Object.fromEntries(Object.entries(ia.plunging).map((function(e){var t=Object(c.a)(e,2),a=t[0],n=t[1];return[a,Object(u.c)("atk",n,"plunging")]}))),skill:{press:Object(u.c)("atk",ia.skill.press,"skill")},burst:Object(s.a)({dot:Object(u.c)("atk",ia.burst.dot,"burst")},Object.fromEntries(u.a.map((function(e){return[e,Object(r.h)(da,e,Object(u.c)("atk",ia.burst.dmg_,"burst",{hit:{ele:Object(r.a)(e)}}))]}))))},xa=Object(u.b)(Xt,"anemo","mondstadt",Qt,ya,{bonus:{skill:Object(r.x)(l.b.constellation,3,3),burst:Object(r.x)(l.b.constellation,5,3)},teamBuff:{total:{eleMas:Object(r.v)(fa,ka)},premod:va}}),wa={name:$t("name"),cardImg:Rt,thumbImg:It,thumbImgSide:Tt,bannerImg:Mt,rarity:Qt.star,elementKey:"anemo",weaponTypeKey:Qt.weaponTypeKey,gender:"F",constellationName:$t("constellationName"),title:$t("title"),talent:{sheets:{auto:{name:$t("auto.name"),img:Object(b.c)(Qt.weaponTypeKey),sections:[{text:$t("auto.fields.normal"),fields:ia.normal.hitArr.map((function(e,t){return{node:Object(r.f)(ya.normal[t],{key:"char_".concat(Xt,"_gen:auto.skillParams.").concat(t)})}}))},{text:$t("auto.fields.charged"),fields:[{node:Object(r.f)(ya.charged.dmg,{key:"char_".concat(Xt,"_gen:auto.skillParams.4")})},{text:$t("auto.skillParams.5"),value:ia.charged.stamina}]},{text:$t("auto.fields.plunging"),fields:[{node:Object(r.f)(ya.plunging.dmg,{key:"sheet_gen:plunging.dmg"})},{node:Object(r.f)(ya.plunging.low,{key:"sheet_gen:plunging.low"})},{node:Object(r.f)(ya.plunging.high,{key:"sheet_gen:plunging.high"})}]}]},skill:{name:$t("skill.name"),img:Vt,sections:[{text:$t("skill.description"),fields:[{node:Object(r.f)(ya.skill.press,{key:"char_".concat(Xt,"_gen:skill.skillParams.0")})},{text:$t("skill.skillParams.1"),value:ia.skill.cd,unit:"s"},{canShow:function(e){return e.get(l.b.constellation).value>=1},text:Object(d.d)("charges"),value:2}]}]},burst:{name:$t("burst.name"),img:zt,sections:[{text:$t("burst.description"),fields:[{node:Object(r.f)(ya.burst.dot,{key:"char_".concat(Xt,"_gen:burst.skillParams.0")})},{text:$t("burst.skillParams.2"),value:function(e){return e.get(l.b.constellation).value>=2?"".concat(ia.burst.duration,"s + 2"):ia.burst.duration},unit:"s"},{text:$t("burst.skillParams.3"),value:ia.burst.cd,unit:"s"},{text:$t("burst.skillParams.4"),value:ia.burst.enerCost}],conditional:{value:da,path:ra,name:Object(d.d)("eleAbsor"),states:Object.fromEntries(u.a.map((function(e){return[e,{name:Object(E.jsx)(i.a,{color:e,children:Object(d.c)("element.".concat(e))}),fields:[{node:Object(r.f)(ya.burst[e],{key:"char_".concat(Xt,"_gen:burst.skillParams.1")})}]}]})))}},{conditional:{value:da,path:ra,header:Object(b.a)("constellation6",$t,Ut),description:$t("constellation6.description"),name:Object(d.d)("eleAbsor"),states:Object.fromEntries(u.a.map((function(e){return[e,{name:Object(E.jsx)(i.a,{color:e,children:Object(d.c)("element.".concat(e))}),fields:[{node:va["".concat(e,"_dmg_")]}]}]})))}}]},passive1:{name:$t("passive1.name"),img:Jt,sections:[{text:$t("passive1.description"),conditional:{value:ma,path:pa,header:Object(b.a)("passive1",$t,Jt),description:$t("passive1.description"),name:Object(d.d)("eleSwirled"),states:Object.fromEntries(u.a.map((function(e){return[e,{name:Object(E.jsx)(i.a,{color:e,children:Object(d.c)("element.".concat(e))}),fields:[{node:fa},{text:Object(d.c)("duration"),value:ia.passive1.duration,unit:"s"}]}]})))}}]},passive2:{name:$t("passive2.name"),img:qt,sections:[{text:$t("passive2.description"),conditional:{value:ha,path:ja,header:Object(b.a)("passive1",$t,Jt),description:$t("passive1.description"),name:ea("asc4"),states:{hit:{fields:[{node:ka},{text:Object(d.c)("duration"),value:ia.passive2.duration,unit:"s"}]}}}}]},passive3:Object(b.d)("passive3",$t,Dt),constellation1:Object(b.d)("constellation1",$t,Ht),constellation2:Object(b.d)("constellation2",$t,Nt),constellation3:Object(b.d)("constellation3",$t,Bt),constellation4:Object(b.d)("constellation4",$t,Gt),constellation5:Object(b.d)("constellation5",$t,Wt),constellation6:Object(b.d)("constellation6",$t,Ut)}}},Sa={KaedeharaKazuha:ye,Shenhe:Et,Sucrose:new b.b(wa,xa)};t.default=Sa},440:function(e){e.exports=JSON.parse('{"GROW_CURVE_HP_S4":{"1":1,"2":1.083,"3":1.165,"4":1.248,"5":1.33,"6":1.413,"7":1.495,"8":1.578,"9":1.661,"10":1.743,"11":1.826,"12":1.908,"13":1.991,"14":2.073,"15":2.156,"16":2.239,"17":2.321,"18":2.404,"19":2.486,"20":2.569,"21":2.651,"22":2.734,"23":2.817,"24":2.899,"25":2.982,"26":3.064,"27":3.147,"28":3.229,"29":3.312,"30":3.394,"31":3.477,"32":3.56,"33":3.642,"34":3.725,"35":3.807,"36":3.89,"37":3.972,"38":4.055,"39":4.138,"40":4.22,"41":4.303,"42":4.385,"43":4.468,"44":4.55,"45":4.633,"46":4.716,"47":4.798,"48":4.881,"49":4.963,"50":5.046,"51":5.128,"52":5.211,"53":5.294,"54":5.376,"55":5.459,"56":5.541,"57":5.624,"58":5.706,"59":5.789,"60":5.872,"61":5.954,"62":6.037,"63":6.119,"64":6.202,"65":6.284,"66":6.367,"67":6.45,"68":6.532,"69":6.615,"70":6.697,"71":6.78,"72":6.862,"73":6.945,"74":7.028,"75":7.11,"76":7.193,"77":7.275,"78":7.358,"79":7.44,"80":7.523,"81":7.606,"82":7.688,"83":7.771,"84":7.853,"85":7.936,"86":8.018,"87":8.101,"88":8.183,"89":8.266,"90":8.349,"91":8.431,"92":8.514,"93":8.596,"94":8.679,"95":8.761,"96":8.844,"97":8.927,"98":9.009,"99":9.092,"100":9.174},"GROW_CURVE_ATTACK_S4":{"1":1,"2":1.083,"3":1.165,"4":1.248,"5":1.33,"6":1.413,"7":1.495,"8":1.578,"9":1.661,"10":1.743,"11":1.826,"12":1.908,"13":1.991,"14":2.073,"15":2.156,"16":2.239,"17":2.321,"18":2.404,"19":2.486,"20":2.569,"21":2.651,"22":2.734,"23":2.817,"24":2.899,"25":2.982,"26":3.064,"27":3.147,"28":3.229,"29":3.312,"30":3.394,"31":3.477,"32":3.56,"33":3.642,"34":3.725,"35":3.807,"36":3.89,"37":3.972,"38":4.055,"39":4.138,"40":4.22,"41":4.303,"42":4.385,"43":4.468,"44":4.55,"45":4.633,"46":4.716,"47":4.798,"48":4.881,"49":4.963,"50":5.046,"51":5.128,"52":5.211,"53":5.294,"54":5.376,"55":5.459,"56":5.541,"57":5.624,"58":5.706,"59":5.789,"60":5.872,"61":5.954,"62":6.037,"63":6.119,"64":6.202,"65":6.284,"66":6.367,"67":6.45,"68":6.532,"69":6.615,"70":6.697,"71":6.78,"72":6.862,"73":6.945,"74":7.028,"75":7.11,"76":7.193,"77":7.275,"78":7.358,"79":7.44,"80":7.523,"81":7.606,"82":7.688,"83":7.771,"84":7.853,"85":7.936,"86":8.018,"87":8.101,"88":8.183,"89":8.266,"90":8.349,"91":8.431,"92":8.514,"93":8.596,"94":8.679,"95":8.761,"96":8.844,"97":8.927,"98":9.009,"99":9.092,"100":9.174},"GROW_CURVE_HP_S5":{"1":1,"2":1.083,"3":1.166,"4":1.25,"5":1.333,"6":1.417,"7":1.5,"8":1.584,"9":1.668,"10":1.751,"11":1.835,"12":1.919,"13":2.003,"14":2.088,"15":2.172,"16":2.256,"17":2.341,"18":2.425,"19":2.51,"20":2.594,"21":2.679,"22":2.764,"23":2.849,"24":2.934,"25":3.019,"26":3.105,"27":3.19,"28":3.275,"29":3.361,"30":3.446,"31":3.532,"32":3.618,"33":3.704,"34":3.789,"35":3.875,"36":3.962,"37":4.048,"38":4.134,"39":4.22,"40":4.307,"41":4.393,"42":4.48,"43":4.567,"44":4.653,"45":4.74,"46":4.827,"47":4.914,"48":5.001,"49":5.089,"50":5.176,"51":5.263,"52":5.351,"53":5.438,"54":5.526,"55":5.614,"56":5.702,"57":5.79,"58":5.878,"59":5.966,"60":6.054,"61":6.142,"62":6.23,"63":6.319,"64":6.407,"65":6.496,"66":6.585,"67":6.673,"68":6.762,"69":6.851,"70":6.94,"71":7.029,"72":7.119,"73":7.208,"74":7.297,"75":7.387,"76":7.476,"77":7.566,"78":7.656,"79":7.746,"80":7.836,"81":7.926,"82":8.016,"83":8.106,"84":8.196,"85":8.286,"86":8.377,"87":8.467,"88":8.558,"89":8.649,"90":8.739,"91":8.83,"92":8.921,"93":9.012,"94":9.103,"95":9.195,"96":9.286,"97":9.377,"98":9.469,"99":9.56,"100":9.652},"GROW_CURVE_ATTACK_S5":{"1":1,"2":1.083,"3":1.166,"4":1.25,"5":1.333,"6":1.417,"7":1.5,"8":1.584,"9":1.668,"10":1.751,"11":1.835,"12":1.919,"13":2.003,"14":2.088,"15":2.172,"16":2.256,"17":2.341,"18":2.425,"19":2.51,"20":2.594,"21":2.679,"22":2.764,"23":2.849,"24":2.934,"25":3.019,"26":3.105,"27":3.19,"28":3.275,"29":3.361,"30":3.446,"31":3.532,"32":3.618,"33":3.704,"34":3.789,"35":3.875,"36":3.962,"37":4.048,"38":4.134,"39":4.22,"40":4.307,"41":4.393,"42":4.48,"43":4.567,"44":4.653,"45":4.74,"46":4.827,"47":4.914,"48":5.001,"49":5.089,"50":5.176,"51":5.263,"52":5.351,"53":5.438,"54":5.526,"55":5.614,"56":5.702,"57":5.79,"58":5.878,"59":5.966,"60":6.054,"61":6.142,"62":6.23,"63":6.319,"64":6.407,"65":6.496,"66":6.585,"67":6.673,"68":6.762,"69":6.851,"70":6.94,"71":7.029,"72":7.119,"73":7.208,"74":7.297,"75":7.387,"76":7.476,"77":7.566,"78":7.656,"79":7.746,"80":7.836,"81":7.926,"82":8.016,"83":8.106,"84":8.196,"85":8.286,"86":8.377,"87":8.467,"88":8.558,"89":8.649,"90":8.739,"91":8.83,"92":8.921,"93":9.012,"94":9.103,"95":9.195,"96":9.286,"97":9.377,"98":9.469,"99":9.56,"100":9.652}}')},709:function(e){e.exports=JSON.parse('{"weaponTypeKey":"sword","base":{"hp":1039.1187744140625,"atk":23.08880043029785,"def":62.82149887084961},"curves":{"hp":"GROW_CURVE_HP_S5","atk":"GROW_CURVE_ATTACK_S5","def":"GROW_CURVE_HP_S5"},"birthday":{"month":10,"day":29},"star":5,"ascensions":[{"props":{"hp":0,"def":0,"atk":0,"eleMas":0}},{"props":{"hp":890.950439453125,"def":53.8650016784668,"atk":19.79511260986328,"eleMas":0}},{"props":{"hp":1523.994140625,"def":92.13749694824219,"atk":33.86006164550781,"eleMas":28.799999237060547}},{"props":{"hp":2368.052490234375,"def":143.16749572753906,"atk":52.61332321166992,"eleMas":57.599998474121094}},{"props":{"hp":3001.09619140625,"def":181.44000244140625,"atk":66.67826843261719,"eleMas":57.599998474121094}},{"props":{"hp":3634.139892578125,"def":219.71249389648438,"atk":80.74321746826172,"eleMas":86.4000015258789}},{"props":{"hp":4267.18359375,"def":257.9849853515625,"atk":94.80816650390625,"eleMas":115.19999694824219}}]}')},710:function(e){e.exports=JSON.parse('{"auto":[[0.44978,0.48639,0.523,0.5753,0.61191,0.65375,0.71128,0.76881,0.82634,0.8891,0.961013,1.045582,1.130151,1.21472,1.306977],[0.45236,0.48918,0.526,0.5786,0.61542,0.6575,0.71536,0.77322,0.83108,0.8942,0.966525,1.051579,1.136633,1.221688,1.314474],[0.258,0.279,0.3,0.33,0.351,0.375,0.408,0.441,0.474,0.51,0.55125,0.59976,0.64827,0.69678,0.7497],[0.3096,0.3348,0.36,0.396,0.4212,0.45,0.4896,0.5292,0.5688,0.612,0.6615,0.719712,0.777924,0.836136,0.89964],[0.60716,0.65658,0.706,0.7766,0.82602,0.8825,0.96016,1.03782,1.11548,1.2002,1.297275,1.411435,1.525595,1.639756,1.764294],[0.2537,0.27435,0.295,0.3245,0.34515,0.36875,0.4012,0.43365,0.4661,0.5015,0.542063,0.589764,0.637465,0.685167,0.737205],[0.43,0.465,0.5,0.55,0.585,0.625,0.68,0.735,0.79,0.85,0.91875,0.9996,1.08045,1.1613,1.2495],[0.74648,0.80724,0.868,0.9548,1.01556,1.085,1.18048,1.27596,1.37144,1.4756,1.59495,1.735306,1.875661,2.016017,2.169132],[20,20,20,20,20,20,20,20,20,20,20,20,20,20,20],[0.818335,0.884943,0.951552,1.046707,1.113316,1.18944,1.294111,1.398781,1.503452,1.617638,1.731825,1.846011,1.960197,2.074383,2.18857],[1.636323,1.769512,1.902701,2.092971,2.22616,2.378376,2.587673,2.79697,3.006267,3.234591,3.462915,3.69124,3.919564,4.147888,4.376212],[2.043855,2.210216,2.376576,2.614234,2.780594,2.97072,3.232143,3.493567,3.75499,4.040179,4.325368,4.610557,4.895747,5.180936,5.466125]],"skill":[[1.92,2.064,2.208,2.4,2.544,2.688,2.88,3.072,3.264,3.456,3.648,3.84,4.08,4.32,4.56],[6,6,6,6,6,6,6,6,6,6,6,6,6,6,6],[2.608,2.8036,2.9992,3.26,3.4556,3.6512,3.912,4.1728,4.4336,4.6944,4.9552,5.216,5.542,5.868,6.194],[9,9,9,9,9,9,9,9,9,9,9,9,9,9,9]],"burst":[[2.624,2.8208,3.0176,3.28,3.4768,3.6736,3.936,4.1984,4.4608,4.7232,4.9856,5.248,5.576,5.904,6.232],[1.2,1.29,1.38,1.5,1.59,1.68,1.8,1.92,2.04,2.16,2.28,2.4,2.55,2.7,2.85],[0.36,0.387,0.414,0.45,0.477,0.504,0.54,0.576,0.612,0.648,0.684,0.72,0.765,0.81,0.855],[8,8,8,8,8,8,8,8,8,8,8,8,8,8,8],[15,15,15,15,15,15,15,15,15,15,15,15,15,15,15],[60,60,60,60,60,60,60,60,60,60,60,60,60,60,60]],"passive1":[[2]],"passive2":[[0.0004],[8]],"passive3":[],"constellation1":[],"constellation2":[200],"constellation3":[],"constellation4":[3,4,2,0.75],"constellation5":[],"constellation6":[0.002,5]}')},711:function(e){e.exports=JSON.parse('{"weaponTypeKey":"polearm","base":{"hp":1011.4725341796875,"atk":23.64739990234375,"def":64.61640167236328},"curves":{"hp":"GROW_CURVE_HP_S5","atk":"GROW_CURVE_ATTACK_S5","def":"GROW_CURVE_HP_S5"},"birthday":{"month":3,"day":10},"star":5,"ascensions":[{"props":{"hp":0,"def":0,"atk":0,"atk_":0}},{"props":{"hp":867.2462158203125,"def":55.40399932861328,"atk":20.27402687072754,"atk_":0}},{"props":{"hp":1483.447509765625,"def":94.7699966430664,"atk":34.679256439208984,"atk_":0.07199999690055847}},{"props":{"hp":2305.049072265625,"def":147.25799560546875,"atk":53.886226654052734,"atk_":0.14399999380111694}},{"props":{"hp":2921.25048828125,"def":186.62399291992188,"atk":68.29145812988281,"atk_":0.14399999380111694}},{"props":{"hp":3537.45166015625,"def":225.99000549316406,"atk":82.69668579101562,"atk_":0.2160000056028366}},{"props":{"hp":4153.65283203125,"def":265.3559875488281,"atk":97.10191345214844,"atk_":0.2879999876022339}}]}')},712:function(e){e.exports=JSON.parse('{"auto":[[0.43258,0.46779,0.503,0.5533,0.58851,0.62875,0.68408,0.73941,0.79474,0.8551,0.91546,0.97582,1.03618,1.09654,1.1569],[0.40248,0.43524,0.468,0.5148,0.54756,0.585,0.63648,0.68796,0.73944,0.7956,0.85176,0.90792,0.96408,1.02024,1.0764],[0.5332,0.5766,0.62,0.682,0.7254,0.775,0.8432,0.9114,0.9796,1.054,1.1284,1.2028,1.2772,1.3516,1.426],[0.26316,0.28458,0.306,0.3366,0.35802,0.3825,0.41616,0.44982,0.48348,0.5202,0.55692,0.59364,0.63036,0.66708,0.7038],[0.26316,0.28458,0.306,0.3366,0.35802,0.3825,0.41616,0.44982,0.48348,0.5202,0.55692,0.59364,0.63036,0.66708,0.7038],[0.65618,0.70959,0.763,0.8393,0.89271,0.95375,1.03768,1.12161,1.20554,1.2971,1.38866,1.48022,1.57178,1.66334,1.7549],[1.106734,1.196817,1.2869,1.41559,1.505673,1.608625,1.750184,1.891743,2.033302,2.18773,2.342158,2.496586,2.651014,2.805442,2.95987],[25,25,25,25,25,25,25,25,25,25,25,25,25,25,25],[0.639324,0.691362,0.7434,0.81774,0.869778,0.92925,1.011024,1.092798,1.174572,1.26378,1.352988,1.442196,1.531404,1.620612,1.70982],[1.278377,1.382431,1.486485,1.635134,1.739187,1.858106,2.02162,2.185133,2.348646,2.527025,2.705403,2.883781,3.062159,3.240537,3.418915],[1.596762,1.726731,1.8567,2.04237,2.172339,2.320875,2.525112,2.729349,2.933586,3.15639,3.379194,3.601998,3.824802,4.047606,4.27041]],"skill":[[1.392,1.4964,1.6008,1.74,1.8444,1.9488,2.088,2.2272,2.3664,2.5056,2.6448,2.784,2.958,3.132,3.306],[1.888,2.0296,2.1712,2.36,2.5016,2.6432,2.832,3.0208,3.2096,3.3984,3.5872,3.776,4.012,4.248,4.484],[0.45656,0.490802,0.525044,0.5707,0.604942,0.639184,0.68484,0.730496,0.776152,0.821808,0.867464,0.91312,0.97019,1.02726,1.08433],[10,10,10,10,10,10,10,10,10,10,10,10,10,10,10],[15,15,15,15,15,15,15,15,15,15,15,15,15,15,15],[5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],[7,7,7,7,7,7,7,7,7,7,7,7,7,7,7],[10,10,10,10,10,10,10,10,10,10,10,10,10,10,10],[15,15,15,15,15,15,15,15,15,15,15,15,15,15,15]],"burst":[[1.008,1.0836,1.1592,1.26,1.3356,1.4112,1.512,1.6128,1.7136,1.8144,1.9152,2.016,2.142,2.268,2.394],[0.06,0.07,0.08,0.09,0.1,0.11,0.12,0.13,0.14,0.15,0.15,0.15,0.15,0.15,0.15],[0.3312,0.35604,0.38088,0.414,0.43884,0.46368,0.4968,0.52992,0.56304,0.59616,0.62928,0.6624,0.7038,0.7452,0.7866],[12,12,12,12,12,12,12,12,12,12,12,12,12,12,12],[20,20,20,20,20,20,20,20,20,20,20,20,20,20,20],[80,80,80,80,80,80,80,80,80,80,80,80,80,80,80]],"passive1":[[0.15]],"passive2":[[0.15],[10],[0.15],[15]],"passive3":[],"constellation1":[],"constellation2":[6],"constellation3":[],"constellation4":[0.05,50],"constellation5":[],"constellation6":[]}')},713:function(e){e.exports=JSON.parse('{"weaponTypeKey":"catalyst","base":{"hp":775.0223388671875,"atk":14.246399879455566,"def":58.941749572753906},"curves":{"hp":"GROW_CURVE_HP_S4","atk":"GROW_CURVE_ATTACK_S4","def":"GROW_CURVE_HP_S4"},"birthday":{"month":11,"day":26},"star":4,"ascensions":[{"props":{"hp":0,"def":0,"atk":0,"anemo_dmg_":0}},{"props":{"hp":578.9813842773438,"def":44.032501220703125,"atk":10.64303970336914,"anemo_dmg_":0}},{"props":{"hp":990.3628540039062,"def":75.3187484741211,"atk":18.2052001953125,"anemo_dmg_":0.05999999865889549}},{"props":{"hp":1538.87158203125,"def":117.03375244140625,"atk":28.2880802154541,"anemo_dmg_":0.11999999731779099}},{"props":{"hp":1950.2530517578125,"def":148.32000732421875,"atk":35.85023880004883,"anemo_dmg_":0.11999999731779099}},{"props":{"hp":2361.634521484375,"def":179.6062469482422,"atk":43.41239929199219,"anemo_dmg_":0.18000000715255737}},{"props":{"hp":2773.01611328125,"def":210.8925018310547,"atk":50.97455978393555,"anemo_dmg_":0.23999999463558197}}]}')},714:function(e){e.exports=JSON.parse('{"auto":[[0.33464,0.359738,0.384836,0.4183,0.443398,0.468496,0.50196,0.535424,0.568888,0.602352,0.635816,0.66928,0.71111,0.75294,0.79477],[0.30616,0.329122,0.352084,0.3827,0.405662,0.428624,0.45924,0.489856,0.520472,0.551088,0.581704,0.61232,0.65059,0.68886,0.72713],[0.38448,0.413316,0.442152,0.4806,0.509436,0.538272,0.57672,0.615168,0.653616,0.692064,0.730512,0.76896,0.81702,0.86508,0.91314],[0.479176,0.515114,0.551052,0.59897,0.634908,0.670846,0.718764,0.766682,0.814599,0.862517,0.910434,0.958352,1.018249,1.078146,1.138043],[1.2016,1.29172,1.38184,1.502,1.59212,1.68224,1.8024,1.92256,2.04272,2.16288,2.28304,2.4032,2.5534,2.7036,2.8538],[50,50,50,50,50,50,50,50,50,50,50,50,50,50,50],[0.568288,0.614544,0.6608,0.72688,0.773136,0.826,0.898688,0.971376,1.044064,1.12336,1.202656,1.281952,1.361248,1.440544,1.51984],[1.136335,1.228828,1.32132,1.453452,1.545944,1.65165,1.796995,1.94234,2.087686,2.246244,2.404802,2.563361,2.721919,2.880478,3.039036],[1.419344,1.534872,1.6504,1.81544,1.930968,2.063,2.244544,2.426088,2.607632,2.80568,3.003728,3.201776,3.399824,3.597872,3.79592]],"skill":[[2.112,2.2704,2.4288,2.64,2.7984,2.9568,3.168,3.3792,3.5904,3.8016,4.0128,4.224,4.488,4.752,5.016],[15,15,15,15,15,15,15,15,15,15,15,15,15,15,15]],"burst":[[1.48,1.591,1.702,1.85,1.961,2.072,2.22,2.368,2.516,2.664,2.812,2.96,3.145,3.33,3.515],[0.44,0.473,0.506,0.55,0.583,0.616,0.66,0.704,0.748,0.792,0.836,0.88,0.935,0.99,1.045],[6,6,6,6,6,6,6,6,6,6,6,6,6,6,6],[20,20,20,20,20,20,20,20,20,20,20,20,20,20,20],[80,80,80,80,80,80,80,80,80,80,80,80,80,80,80]],"passive1":[[50],[8]],"passive2":[[0.2],[8]],"passive3":[],"constellation1":[],"constellation2":[2],"constellation3":[],"constellation4":[],"constellation5":[],"constellation6":[0.2]}')}}]);
//# sourceMappingURL=20.b3d861b8.chunk.js.map