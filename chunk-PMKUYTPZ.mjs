import './polyfills.server.mjs';
import{D as P1,G as F1,H as w1,J as _1,K as I1,L as T1,M as D1,N as R1,Q as j1,U as H1,W as W1,X as M2,Y as q1,Z as x2,a as j2,b as M1,c as x1,d as L,e as b1,f as L1,g as C2,h as y1,i as v1,j as n2,k as P,l as E1,m as k1,n as A1,o as c2,p as H2,q as r,r as f,s as h,t as N1,u as V,v as S1,w as O1,x as l,y}from"./chunk-7K7XFM67.mjs";import{a as m,b}from"./chunk-5XUXGTUW.mjs";var b2=class e{static \u0275fac=function(n){return new(n||e)};static \u0275cmp=L({type:e,selectors:[["app-footer"]],standalone:!0,features:[y],decls:6,vars:0,consts:[[1,"footer"],["routerLink","/contact",1,"button-like"]],template:function(n,c){n&1&&(r(0,"div",0)(1,"h1"),l(2,"Fontos a ment\xE1lis eg\xE9szs\xE9ge"),f(),r(3,"p")(4,"a",1),l(5,"Kapcsolat felv\xE9tel"),f()()())},dependencies:[x2,M2],styles:[".footer[_ngcontent-%COMP%]{display:flex;width:100%;height:25vh;background-color:#c5d0e6;justify-content:center;align-items:center;flex-direction:column;text-align:center}.footer[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:5vh;font-weight:300;margin:0}.footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-top:2vh;font-size:2.5vh}.footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;color:inherit}.button-like[_ngcontent-%COMP%]{border-radius:5px;box-shadow:0 4px 6px #0000004d;display:inline-block;padding:10px 20px;background-color:#849ec9;color:#fff;text-decoration:none;border:rgba(0,0,0,.3) 2px solid;font-size:3.5vh;font-weight:400;text-align:center;transition:background-color .3s ease,transform .2s ease}.button-like[_ngcontent-%COMP%]:hover{transform:translateY(-2px)}.button-like[_ngcontent-%COMP%]:active{transform:translateY(1px)}@media (max-width: 768px){.footer[_ngcontent-%COMP%]{height:25vh;padding:10px}.footer[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:4vh}.footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:2vh}.button-like[_ngcontent-%COMP%]{font-size:3vh;padding:8px 16px}}@media (max-width: 480px){.footer[_ngcontent-%COMP%]{height:20vh;padding:8px}.footer[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:3.5vh}.footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.8vh}.button-like[_ngcontent-%COMP%]{font-size:2.8vh;padding:6px 12px}}"]})};var a2=class e{menuActive=!1;toggleMenu(){this.menuActive=!this.menuActive}static \u0275fac=function(n){return new(n||e)};static \u0275cmp=L({type:e,selectors:[["app-nav"]],standalone:!0,features:[y],decls:23,vars:2,consts:[[1,"logo"],[1,"menu-toggle",3,"click"],["routerLink","/",3,"click"],["routerLink","/consultation",3,"click"],["routerLink","/about",3,"click"],["routerLink","/contact",3,"click"],["routerLink","/pricing",3,"click"]],template:function(n,c){n&1&&(r(0,"header")(1,"div",0)(2,"h1"),l(3,"Husz\xE1r Anna"),f()(),r(4,"button",1),V("click",function(){return c.toggleMenu()}),l(5,"\u2630"),f(),r(6,"nav")(7,"ul")(8,"li")(9,"a",2),V("click",function(){return c.toggleMenu()}),l(10,"Kezd\u0151lap"),f()(),r(11,"li")(12,"a",3),V("click",function(){return c.toggleMenu()}),l(13,"Pszichol\xF3giai tan\xE1csad\xE1s"),f()(),r(14,"li")(15,"a",4),V("click",function(){return c.toggleMenu()}),l(16,"R\xF3lam"),f()(),r(17,"li")(18,"a",5),V("click",function(){return c.toggleMenu()}),l(19,"Kapcsolat"),f()(),r(20,"li")(21,"a",6),V("click",function(){return c.toggleMenu()}),l(22,"D\xEDjszab\xE1s"),f()()()()()),n&2&&(n2(6),H2("active",c.menuActive))},dependencies:[x2,M2],styles:["header[_ngcontent-%COMP%]{width:100%;background-color:#c5d0e6;display:flex;justify-content:space-between;align-items:center;padding:2vh 5%;position:relative;z-index:1000}nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;display:flex;gap:20px}nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;color:#000;font-size:18px;padding:5px 10px;border-radius:5px;transition:background-color .3s}nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background:#3868b429}.logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-height:30px}.menu-toggle[_ngcontent-%COMP%]{display:none;font-size:40px;background:none;border:none;cursor:pointer;position:absolute;top:50%;right:3vh;transform:translateY(-50%)}@media (max-width: 960px){nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:none;flex-direction:column;gap:10px;padding:10px;position:absolute;top:60px;right:0;background-color:#c5d0e6;width:100%;z-index:1000}nav.active[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:flex}.menu-toggle[_ngcontent-%COMP%]{display:block;z-index:1001}}"]})};function o4(e,t){e&1&&h(0,"app-nav")}var L2=class e{constructor(t){this.router=t}title="anna-web";showNav=!1;ngOnInit(){this.router.events.subscribe(()=>{this.showNav=this.router.url!=="/"})}static \u0275fac=function(n){return new(n||e)(P(W1))};static \u0275cmp=L({type:e,selectors:[["app-root"]],standalone:!0,features:[y],decls:3,vars:1,consts:[[4,"ngIf"]],template:function(n,c){n&1&&(k1(0,o4,1,0,"app-nav",0),h(1,"router-outlet")(2,"app-footer")),n&2&&c2("ngIf",c.showNav)},dependencies:[H1,b2,a2,I1,_1]})};var y2=class e{static \u0275fac=function(n){return new(n||e)};static \u0275cmp=L({type:e,selectors:[["app-about"]],standalone:!0,features:[y],decls:47,vars:0,consts:[["id","rolam"],[1,"rovid"],[1,"about-section"],["src","assets/profilkep.jpg","alt","Profil K\xE9p",1,"profil"],[1,"about"]],template:function(n,c){n&1&&(r(0,"section",0)(1,"div",1)(2,"h1"),l(3,"PSZICHOL\xD3GIAI KONZULT\xC1CI\xD3"),f(),r(4,"p"),l(5,"Lelki folyamataink megismer\xE9se"),f()(),r(6,"section",2),h(7,"img",3),r(8,"div",4)(9,"p")(10,"strong"),l(11,"Husz\xE1r Anna vagyok, pszichol\xF3gus, tan\xE1csad\xF3 szakpszichol\xF3gus."),f(),h(12,"br")(13,"br"),r(14,"strong"),l(15,"Okleveles pszichol\xF3gusk\xE9nt a P\xE9csi Tudom\xE1nyegyetemen v\xE9geztem. Tan\xE1csad\xF3 szakpszichol\xF3gus k\xE9pes\xEDt\xE9semet az E\xF6tv\xF6s Lor\xE1nd Tudom\xE1nyegyetemen csal\xE1d \xE9s p\xE1rkapcsolat specializ\xE1ci\xF3n szereztem. "),f(),h(16,"br")(17,"br"),l(18," 2017 \xF3ta \xF6nismereti t\xE9m\xE1j\xFA seg\xEDt\u0151 besz\xE9lget\xE9sekkel t\xE1mogatom a hozz\xE1m fordul\xF3kat \xE9lethelyzet\xFCk, probl\xE9m\xE1juk \xE1tgondol\xE1s\xE1ban, meghalad\xE1s\xE1ban. Fontosnak tartom szakmai tud\xE1som, eszk\xF6zt\xE1ram fejleszt\xE9s\xE9t, \xEDgy az \xE9vek sor\xE1n tov\xE1bbk\xE9pz\xE9seken, konferenci\xE1kon vettem r\xE9szt. Szeretem a megszerzett gyakorlati tud\xE1st beemelni a konzult\xE1ci\xF3s folyamatba, \xEDgy sz\xEDvesen haszn\xE1lok eszk\xF6z\xF6ket, amelyek abban seg\xEDtenek minket, hogy az \xE9rzelmek k\xF6nnyebben megfogalmazhat\xF3k legyenek \xE9s tiszt\xE1bb k\xE9pet kaphassunk saj\xE1t m\u0171k\xF6d\xE9s\xFCnkr\u0151l."),h(19,"br")(20,"br"),l(21," A besz\xE9lget\xE9sek sor\xE1n gyakran haszn\xE1lunk test-alap\xFA megk\xF6zel\xEDt\xE9st a trauma, a sokk \xE9s egy\xE9b stressz-zavarok kezel\xE9s\xE9re, mely a test bels\u0151, \xF6ngy\xF3gy\xEDt\xF3 folyamatait mobiliz\xE1lja."),h(22,"br")(23,"br"),l(24," A munk\xE1mhoz sz\xFCks\xE9ges \xF6nismeretet 150 \xF3r\xE1s pszichodr\xE1ma csoport, valamint egy\xE9ni ter\xE1pia keretein bel\xFCl szereztem meg. Az\xF3ta is folyamatosan fejlesztem magam ter\xE1pi\xE1s \xE9s egy\xE9b m\xF3dszerek seg\xEDts\xE9g\xE9vel."),h(25,"br"),l(26," Sz\xE9kesfeh\xE9rv\xE1ron mag\xE1nrendel\u0151mben v\xE1rom a hozz\xE1m fordul\xF3kat."),h(27,"br")(28,"br"),r(29,"strong"),l(30," Milyen esetben szoktak felkeresni?"),h(31,"br"),f()(),r(32,"ul")(33,"li"),l(34,"\xE9letvezet\xE9si neh\xE9zs\xE9gek"),f(),r(35,"li"),l(36,"p\xE1lyav\xE1laszt\xE1si k\xE9rd\xE9sek"),f(),r(37,"li"),l(38,"p\xE1rkapcsolati probl\xE9m\xE1k"),f(),r(39,"li"),l(40,"kr\xEDzishelyzet"),f(),r(41,"li"),l(42,"ki\xE9g\xE9s"),f(),r(43,"li"),l(44,"munka-mag\xE1n\xE9let egyens\xFAly felborul\xE1sa "),f(),r(45,"li"),l(46,"\xF6nismeret m\xE9ly\xEDt\xE9se"),f()()()()())},styles:['#rolam[_ngcontent-%COMP%]{max-width:1300px;margin:0 auto;padding:40px 20px;background-color:#fff}.rovid[_ngcontent-%COMP%]{text-align:center;margin-bottom:20px}.rovid[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:2rem;margin-bottom:10px;color:#444}.rovid[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.2rem;color:#666;margin:0}.about-section[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 2fr;gap:20px;align-items:start;border:1px dashed #ccc;padding:20px;border-radius:8px;background-color:#fefefe}.profil[_ngcontent-%COMP%]{width:100%;max-width:300px;border-radius:8px;justify-self:center}.about[_ngcontent-%COMP%]{font-size:1rem;line-height:1.6}.about[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:20px}ul[_ngcontent-%COMP%]{list-style-type:none;padding:0;margin:0}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{position:relative;margin:5px 0;padding-left:20px;font-size:1rem}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before{content:"-";position:absolute;left:0;color:#444;font-weight:700}@media (max-width: 768px){.about-section[_ngcontent-%COMP%]{grid-template-columns:1fr;text-align:center}.profil[_ngcontent-%COMP%]{max-width:200px}ul[_ngcontent-%COMP%]{text-align:left;font-size:.9rem}}@media (max-width: 480px){.rovid[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:1.5rem}.rovid[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1rem}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{font-size:.85rem}.about[_ngcontent-%COMP%]{font-size:.9rem}}']})};var v2=class e{static \u0275fac=function(n){return new(n||e)};static \u0275cmp=L({type:e,selectors:[["app-consultation"]],standalone:!0,features:[y],decls:56,vars:0,consts:[[1,"services"],[1,"service"],["src","assets/online.jpg","alt","Online konzult\xE1ci\xF3"],[1,"content"],[1,"fo"]],template:function(n,c){n&1&&(r(0,"section",0)(1,"div",1),h(2,"img",2),r(3,"h3"),l(4,"Online konzult\xE1ci\xF3"),f()()(),r(5,"section",3)(6,"h2",4),l(7,"Online pszichol\xF3giai tan\xE1csad\xE1s "),f(),h(8,"br"),r(9,"p"),l(10,"A pszichol\xF3giai tan\xE1csad\xE1s c\xE9lja: saj\xE1t er\u0151forr\xE1sokb\xF3l \xE9s megold\xE1si lehet\u0151s\xE9gekb\u0151l mer\xEDt\u0151 \xF6n\xE1ll\xF3 egyens\xFAlyteremt\xE9s, tudatoss\xE1g n\xF6vel\xE9se, szem\xE9lyes megk\xFCzd\xE9si hat\xE9konys\xE1g kialak\xEDt\xE1sa."),f(),h(11,"br"),r(12,"h2"),l(13,"\xDCl\xE9sek gyakoris\xE1ga \xE9s id\u0151tartama"),f(),h(14,"br"),r(15,"ul")(16,"li"),l(17,"\xDCl\xE9sek gyakoris\xE1g\xE1t a kliens probl\xE9m\xE1ja hat\xE1rozza meg."),f(),r(18,"li"),l(19,"\xDCl\xE9sek hossza: 45-50 perc."),f()(),h(20,"br"),r(21,"h2"),l(22,"Mit nem csin\xE1l a tan\xE1csad\xF3 szakpszichol\xF3gus?"),f(),h(23,"br"),r(24,"ul")(25,"li"),l(26,"Nem ad direkt \xFAtmutat\xE1st, nem d\xF6nt a kliens helyett."),f(),r(27,"li"),l(28,"Nem t\xE1maszt elv\xE1r\xE1st."),f(),r(29,"li"),l(30,"Nem \xEDr fel gy\xF3gyszert."),f(),r(31,"li"),l(32,"Nem v\xE9gez hossz\xFA ter\xE1pi\xE1t."),f()(),h(33,"br"),r(34,"h2"),l(35,"Mit csin\xE1l a tan\xE1csad\xF3 szakpszichol\xF3gus?"),f(),h(36,"br"),r(37,"ul")(38,"li"),l(39,"Seg\xEDt\u0151 besz\xE9lget\xE9st ny\xFAjt."),f(),r(40,"li"),l(41,"Objekt\xEDven seg\xEDti meg\xE9rteni \xE9s feldolgozni a helyzetet."),f(),r(42,"li"),l(43,"Az eg\xE9szs\xE9ges m\u0171k\xF6d\xE9sre \xE9s a kliens er\u0151ss\xE9geire f\xF3kusz\xE1l."),f()()(),h(44,"br"),r(45,"section",3)(46,"h2",4),l(47,"Milyen felt\xE9telek kellenek az online konzult\xE1ci\xF3hoz?"),f(),h(48,"br"),r(49,"ul")(50,"li"),l(51,"El\u0151re egyeztetett alkalmaz\xE1son kereszt\xFCl vegy\xFCk fel a kapcsolatot (pl. Zoom, Skype)."),f(),r(52,"li"),l(53,"Olyan helyen legyen, ahogy egyed\xFCl van."),f(),r(54,"li"),l(55,"Biztos\xEDtsa a zavartalan technikai kapcsol\xF3d\xE1st."),f()()())},styles:['.services[_ngcontent-%COMP%]{display:flex;justify-content:space-evenly;flex-wrap:wrap;margin:2.4vh 1.2vh;gap:2vh}.service[_ngcontent-%COMP%]{text-align:left;max-width:300px}.service[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:auto;border-radius:30px;box-shadow:0 4px 6px #0000004d}.service[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-top:2vh;margin-bottom:4vh;padding-left:0;font-size:1.2rem;font-weight:400;text-align:center}.content[_ngcontent-%COMP%]{max-width:800px;margin:0 auto 2vh;background:#fff;padding:20px;border-radius:8px;box-shadow:0 4px 6px #0000001a}.content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1.5rem;margin-bottom:10px}.content[_ngcontent-%COMP%]   .fo[_ngcontent-%COMP%]{text-align:center;font-size:2.5rem}.content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:1.5rem;margin-top:20px}.content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1rem;margin-bottom:15px;color:#555}.content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style-type:none;padding:0}.content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding-left:20px;position:relative;margin-bottom:10px;font-size:1rem;color:#333}.content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before{content:"\\2022";color:#007bff;position:absolute;left:0;top:0}@media (max-width: 768px){.services[_ngcontent-%COMP%]{flex-direction:column;align-items:center}.service[_ngcontent-%COMP%]{max-width:90%}.content[_ngcontent-%COMP%]{padding:15px}.content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1.8rem}.content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{font-size:.9rem}}@media (max-width: 480px){.service[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:20px}.content[_ngcontent-%COMP%]{padding:10px}.content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1.5rem}.content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:.9rem}.content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{font-size:.8rem}}']})};var E2=class e{static \u0275fac=function(n){return new(n||e)};static \u0275cmp=L({type:e,selectors:[["app-contact"]],standalone:!0,features:[y],decls:17,vars:0,consts:[["id","kapcsolat",1,"contact-section"],[1,"contact-details"],["href","#"],[1,"map"],["src","assets/map.jpg","alt","T\xE9rk\xE9p Sz\xE9kesfeh\xE9rv\xE1rhoz","width","400"]],template:function(n,c){n&1&&(r(0,"section",0)(1,"h2"),l(2,"L\xE9pjen velem kapcsolatba Sz\xE9kesfeh\xE9rv\xE1ron"),f(),r(3,"div",1)(4,"p"),l(5,"Husz\xE1r Anna - Tan\xE1csad\xF3 szakpszichol\xF3gus"),f(),r(6,"p"),l(7,"Sz\xE9kesfeh\xE9rv\xE1r, Sziget utca 4."),f(),r(8,"p"),l(9,"Telefon: +36-70-343-7128"),f(),r(10,"p"),l(11,"Email: pszichologusannagmail.com"),f(),r(12,"p")(13,"a",2),l(14,"Facebook"),f()()(),r(15,"div",3),h(16,"img",4),f()())},styles:[".contact-section[_ngcontent-%COMP%]{padding:40px 20px;text-align:center}.contact-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:28px;color:#333}.contact-details[_ngcontent-%COMP%]{margin-top:20px;font-size:16px;color:#666}.map[_ngcontent-%COMP%]{margin-top:20px}@media (max-width: 768px){.contact-section[_ngcontent-%COMP%]{padding:20px 10px}}"]})};var k2=class e{static \u0275fac=function(n){return new(n||e)};static \u0275cmp=L({type:e,selectors:[["app-header"]],standalone:!0,features:[y],decls:7,vars:0,consts:[[1,"header"],[1,"header-content"]],template:function(n,c){n&1&&(r(0,"header",0)(1,"div",1)(2,"h1"),l(3,"PSZICHOL\xD3GIAI KONZULT\xC1CI\xD3"),f(),r(4,"p"),l(5,"Lelki folyamataink megismer\xE9se"),f()()(),h(6,"app-nav"))},dependencies:[a2],styles:[".header[_ngcontent-%COMP%]{position:relative;width:100%;height:55vh;background:url(https://Adi001100.github.io/anna/assets/forest.jpg) bottom / cover no-repeat;display:flex;justify-content:center;align-items:center}.header-content[_ngcontent-%COMP%]{text-align:center;color:#fff;padding:20px;border-radius:10px}.header-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:6vh;margin:0 0 10px;font-weight:400;background-color:#6886b5;color:#fff;padding:10px;border-radius:8px;display:inline-block}.header-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:3vh;margin:0;background:#0000004d;padding:5px;border-radius:5px}@media (max-width: 900px){.header[_ngcontent-%COMP%]{height:50vh}.header-content[_ngcontent-%COMP%]{padding:15px}.header-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:5vh;padding:8px}.header-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:2.5vh}}@media (max-width: 700px){.header[_ngcontent-%COMP%]{height:45vh;background-position:center}.header-content[_ngcontent-%COMP%]{padding:12px}.header-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:4.5vh;padding:8px}.header-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:2.2vh}}@media (max-width: 480px){.header[_ngcontent-%COMP%]{height:40vh;background-size:cover}.header-content[_ngcontent-%COMP%]{padding:10px}.header-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:4vh;padding:6px}.header-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:2vh}}"]})};var G1=()=>{},s1={},p0={},g0=null,h0={mark:G1,measure:G1};try{typeof window<"u"&&(s1=window),typeof document<"u"&&(p0=document),typeof MutationObserver<"u"&&(g0=MutationObserver),typeof performance<"u"&&(h0=performance)}catch{}var{userAgent:U1=""}=s1.navigator||{},G=s1,M=p0,Y1=g0,A2=h0,ye=!!G.document,j=!!M.documentElement&&!!M.head&&typeof M.addEventListener=="function"&&typeof M.createElement=="function",z0=~U1.indexOf("MSIE")||~U1.indexOf("Trident/"),x="classic",C0="duotone",k="sharp",A="sharp-duotone",s4=[x,C0,k,A],r4={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}},$1={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},l4=["kit"],f4=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,m4=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,u4={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},d4={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"}},p4={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}},g4={classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]},h4={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}},z4={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}},M0={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},C4=["solid","regular","light","thin","duotone","brands"],x0=[1,2,3,4,5,6,7,8,9,10],M4=x0.concat([11,12,13,14,15,16,17,18,19,20]),f2={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},x4=[...Object.keys(g4),...C4,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",f2.GROUP,f2.SWAP_OPACITY,f2.PRIMARY,f2.SECONDARY].concat(x0.map(e=>"".concat(e,"x"))).concat(M4.map(e=>"w-".concat(e))),b4={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},L4={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},y4={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},V1={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},D="___FONT_AWESOME___",Y2=16,b0="fa",L0="svg-inline--fa",Q="data-fa-i2svg",$2="data-fa-pseudo-element",v4="data-fa-pseudo-element-pending",r1="data-prefix",l1="data-icon",X1="fontawesome-i2svg",E4="async",k4=["HTML","HEAD","STYLE","SCRIPT"],y0=(()=>{try{return process.env.NODE_ENV==="production"}catch{return!1}})(),v0=[x,k,A];function h2(e){return new Proxy(e,{get(t,n){return n in t?t[n]:t[x]}})}var E0=m({},M0);E0[x]=m(m(m({},M0[x]),$1.kit),$1["kit-duotone"]);var K=h2(E0),V2=m({},z4);V2[x]=m(m(m({},V2[x]),V1.kit),V1["kit-duotone"]);var p2=h2(V2),X2=m({},h4);X2[x]=m(m({},X2[x]),y4.kit);var Z=h2(X2),K2=m({},p4);K2[x]=m(m({},K2[x]),L4.kit);var A4=h2(K2),N4=f4,k0="fa-layers-text",S4=m4,O4=m({},r4),ve=h2(O4),P4=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],W2=f2,s2=new Set;Object.keys(p2[x]).map(s2.add.bind(s2));Object.keys(p2[k]).map(s2.add.bind(s2));Object.keys(p2[A]).map(s2.add.bind(s2));var F4=[...l4,...x4],u2=G.FontAwesomeConfig||{};function w4(e){var t=M.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function _4(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}M&&typeof M.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(t=>{let[n,c]=t,a=_4(w4(n));a!=null&&(u2[c]=a)});var A0={styleDefault:"solid",familyDefault:"classic",cssPrefix:b0,replacementClass:L0,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};u2.familyPrefix&&(u2.cssPrefix=u2.familyPrefix);var r2=m(m({},A0),u2);r2.autoReplaceSvg||(r2.observeMutations=!1);var p={};Object.keys(A0).forEach(e=>{Object.defineProperty(p,e,{enumerable:!0,set:function(t){r2[e]=t,d2.forEach(n=>n(p))},get:function(){return r2[e]}})});Object.defineProperty(p,"familyPrefix",{enumerable:!0,set:function(e){r2.cssPrefix=e,d2.forEach(t=>t(p))},get:function(){return r2.cssPrefix}});G.FontAwesomeConfig=p;var d2=[];function I4(e){return d2.push(e),()=>{d2.splice(d2.indexOf(e),1)}}var q=Y2,F={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function T4(e){if(!e||!j)return;let t=M.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;let n=M.head.childNodes,c=null;for(let a=n.length-1;a>-1;a--){let i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(c=i)}return M.head.insertBefore(t,c),e}var D4="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function g2(){let e=12,t="";for(;e-- >0;)t+=D4[Math.random()*62|0];return t}function l2(e){let t=[];for(let n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function f1(e){return e.classList?l2(e.classList):(e.getAttribute("class")||"").split(" ").filter(t=>t)}function N0(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function R4(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,'="').concat(N0(e[n]),'" '),"").trim()}function F2(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,": ").concat(e[n].trim(),";"),"")}function m1(e){return e.size!==F.size||e.x!==F.x||e.y!==F.y||e.rotate!==F.rotate||e.flipX||e.flipY}function j4(e){let{transform:t,containerWidth:n,iconWidth:c}=e,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),u={transform:"".concat(i," ").concat(o," ").concat(s)},d={transform:"translate(".concat(c/2*-1," -256)")};return{outer:a,inner:u,path:d}}function H4(e){let{transform:t,width:n=Y2,height:c=Y2,startCentered:a=!1}=e,i="";return a&&z0?i+="translate(".concat(t.x/q-n/2,"em, ").concat(t.y/q-c/2,"em) "):a?i+="translate(calc(-50% + ".concat(t.x/q,"em), calc(-50% + ").concat(t.y/q,"em)) "):i+="translate(".concat(t.x/q,"em, ").concat(t.y/q,"em) "),i+="scale(".concat(t.size/q*(t.flipX?-1:1),", ").concat(t.size/q*(t.flipY?-1:1),") "),i+="rotate(".concat(t.rotate,"deg) "),i}var W4=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function S0(){let e=b0,t=L0,n=p.cssPrefix,c=p.replacementClass,a=W4;if(n!==e||c!==t){let i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(c))}return a}var K1=!1;function q2(){p.autoAddCss&&!K1&&(T4(S0()),K1=!0)}var q4={mixout(){return{dom:{css:S0,insertCss:q2}}},hooks(){return{beforeDOMElementCreation(){q2()},beforeI2svg(){q2()}}}},R=G||{};R[D]||(R[D]={});R[D].styles||(R[D].styles={});R[D].hooks||(R[D].hooks={});R[D].shims||(R[D].shims=[]);var w=R[D],O0=[],P0=function(){M.removeEventListener("DOMContentLoaded",P0),O2=1,O0.map(e=>e())},O2=!1;j&&(O2=(M.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(M.readyState),O2||M.addEventListener("DOMContentLoaded",P0));function B4(e){j&&(O2?setTimeout(e,0):O0.push(e))}function z2(e){let{tag:t,attributes:n={},children:c=[]}=e;return typeof e=="string"?N0(e):"<".concat(t," ").concat(R4(n),">").concat(c.map(z2).join(""),"</").concat(t,">")}function Z1(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var G4=function(t,n){return function(c,a,i,o){return t.call(n,c,a,i,o)}},B2=function(t,n,c,a){var i=Object.keys(t),o=i.length,s=a!==void 0?G4(n,a):n,u,d,g;for(c===void 0?(u=1,g=t[i[0]]):(u=0,g=c);u<o;u++)d=i[u],g=s(g,t[d],d,t);return g};function U4(e){let t=[],n=0,c=e.length;for(;n<c;){let a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<c){let i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function Z2(e){let t=U4(e);return t.length===1?t[0].toString(16):null}function Y4(e,t){let n=e.length,c=e.charCodeAt(t),a;return c>=55296&&c<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(c-55296)*1024+a-56320+65536:c}function Q1(e){return Object.keys(e).reduce((t,n)=>{let c=e[n];return!!c.icon?t[c.iconName]=c.icon:t[n]=c,t},{})}function Q2(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},{skipHooks:c=!1}=n,a=Q1(t);typeof w.hooks.addPack=="function"&&!c?w.hooks.addPack(e,Q1(t)):w.styles[e]=m(m({},w.styles[e]||{}),a),e==="fas"&&Q2("fa",t)}var{styles:X,shims:$4}=w,V4={[x]:Object.values(Z[x]),[k]:Object.values(Z[k]),[A]:Object.values(Z[A])},u1=null,F0={},w0={},_0={},I0={},T0={},X4={[x]:Object.keys(K[x]),[k]:Object.keys(K[k]),[A]:Object.keys(K[A])};function K4(e){return~F4.indexOf(e)}function Z4(e,t){let n=t.split("-"),c=n[0],a=n.slice(1).join("-");return c===e&&a!==""&&!K4(a)?a:null}var D0=()=>{let e=c=>B2(X,(a,i,o)=>(a[o]=B2(i,c,{}),a),{});F0=e((c,a,i)=>(a[3]&&(c[a[3]]=i),a[2]&&a[2].filter(s=>typeof s=="number").forEach(s=>{c[s.toString(16)]=i}),c)),w0=e((c,a,i)=>(c[i]=i,a[2]&&a[2].filter(s=>typeof s=="string").forEach(s=>{c[s]=i}),c)),T0=e((c,a,i)=>{let o=a[2];return c[i]=i,o.forEach(s=>{c[s]=i}),c});let t="far"in X||p.autoFetchSvg,n=B2($4,(c,a)=>{let i=a[0],o=a[1],s=a[2];return o==="far"&&!t&&(o="fas"),typeof i=="string"&&(c.names[i]={prefix:o,iconName:s}),typeof i=="number"&&(c.unicodes[i.toString(16)]={prefix:o,iconName:s}),c},{names:{},unicodes:{}});_0=n.names,I0=n.unicodes,u1=w2(p.styleDefault,{family:p.familyDefault})};I4(e=>{u1=w2(e.styleDefault,{family:p.familyDefault})});D0();function d1(e,t){return(F0[e]||{})[t]}function Q4(e,t){return(w0[e]||{})[t]}function B(e,t){return(T0[e]||{})[t]}function R0(e){return _0[e]||{prefix:null,iconName:null}}function J4(e){let t=I0[e],n=d1("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function U(){return u1}var p1=()=>({prefix:null,iconName:null,rest:[]});function w2(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{family:n=x}=t,c=K[n][e],a=p2[n][e]||p2[n][c],i=e in w.styles?e:null;return a||i||null}var e6={[x]:Object.keys(Z[x]),[k]:Object.keys(Z[k]),[A]:Object.keys(Z[A])};function _2(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{skipLookups:n=!1}=t,c={[x]:"".concat(p.cssPrefix,"-").concat(x),[k]:"".concat(p.cssPrefix,"-").concat(k),[A]:"".concat(p.cssPrefix,"-").concat(A)},a=null,i=x,o=s4.filter(u=>u!==C0);o.forEach(u=>{(e.includes(c[u])||e.some(d=>e6[u].includes(d)))&&(i=u)});let s=e.reduce((u,d)=>{let g=Z4(p.cssPrefix,d);if(X[d]?(d=V4[i].includes(d)?A4[i][d]:d,a=d,u.prefix=d):X4[i].indexOf(d)>-1?(a=d,u.prefix=w2(d,{family:i})):g?u.iconName=g:d!==p.replacementClass&&!o.some(C=>d===c[C])&&u.rest.push(d),!n&&u.prefix&&u.iconName){let C=a==="fa"?R0(u.iconName):{},z=B(u.prefix,u.iconName);C.prefix&&(a=null),u.iconName=C.iconName||z||u.iconName,u.prefix=C.prefix||u.prefix,u.prefix==="far"&&!X.far&&X.fas&&!p.autoFetchSvg&&(u.prefix="fas")}return u},p1());return(e.includes("fa-brands")||e.includes("fab"))&&(s.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(s.prefix="fad"),!s.prefix&&i===k&&(X.fass||p.autoFetchSvg)&&(s.prefix="fass",s.iconName=B(s.prefix,s.iconName)||s.iconName),!s.prefix&&i===A&&(X.fasds||p.autoFetchSvg)&&(s.prefix="fasds",s.iconName=B(s.prefix,s.iconName)||s.iconName),(s.prefix==="fa"||a==="fa")&&(s.prefix=U()||"fas"),s}var J2=class{constructor(){this.definitions={}}add(){for(var t=arguments.length,n=new Array(t),c=0;c<t;c++)n[c]=arguments[c];let a=n.reduce(this._pullDefinitions,{});Object.keys(a).forEach(i=>{this.definitions[i]=m(m({},this.definitions[i]||{}),a[i]),Q2(i,a[i]);let o=Z[x][i];o&&Q2(o,a[i]),D0()})}reset(){this.definitions={}}_pullDefinitions(t,n){let c=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(c).map(a=>{let{prefix:i,iconName:o,icon:s}=c[a],u=s[2];t[i]||(t[i]={}),u.length>0&&u.forEach(d=>{typeof d=="string"&&(t[i][d]=s)}),t[i][o]=s}),t}},J1=[],i2={},o2={},t6=Object.keys(o2);function n6(e,t){let{mixoutsTo:n}=t;return J1=e,i2={},Object.keys(o2).forEach(c=>{t6.indexOf(c)===-1&&delete o2[c]}),J1.forEach(c=>{let a=c.mixout?c.mixout():{};if(Object.keys(a).forEach(i=>{typeof a[i]=="function"&&(n[i]=a[i]),typeof a[i]=="object"&&Object.keys(a[i]).forEach(o=>{n[i]||(n[i]={}),n[i][o]=a[i][o]})}),c.hooks){let i=c.hooks();Object.keys(i).forEach(o=>{i2[o]||(i2[o]=[]),i2[o].push(i[o])})}c.provides&&c.provides(o2)}),n}function e1(e,t){for(var n=arguments.length,c=new Array(n>2?n-2:0),a=2;a<n;a++)c[a-2]=arguments[a];return(i2[e]||[]).forEach(o=>{t=o.apply(null,[t,...c])}),t}function J(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),c=1;c<t;c++)n[c-1]=arguments[c];(i2[e]||[]).forEach(i=>{i.apply(null,n)})}function Y(){let e=arguments[0],t=Array.prototype.slice.call(arguments,1);return o2[e]?o2[e].apply(null,t):void 0}function t1(e){e.prefix==="fa"&&(e.prefix="fas");let{iconName:t}=e,n=e.prefix||U();if(t)return t=B(n,t)||t,Z1(j0.definitions,n,t)||Z1(w.styles,n,t)}var j0=new J2,c6=()=>{p.autoReplaceSvg=!1,p.observeMutations=!1,J("noAuto")},a6={i2svg:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return j?(J("beforeI2svg",e),Y("pseudoElements2svg",e),Y("i2svg",e)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:t}=e;p.autoReplaceSvg===!1&&(p.autoReplaceSvg=!0),p.observeMutations=!0,B4(()=>{o6({autoReplaceSvgRoot:t}),J("watch",e)})}},i6={icon:e=>{if(e===null)return null;if(typeof e=="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:B(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){let t=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],n=w2(e[0]);return{prefix:n,iconName:B(n,t)||t}}if(typeof e=="string"&&(e.indexOf("".concat(p.cssPrefix,"-"))>-1||e.match(N4))){let t=_2(e.split(" "),{skipLookups:!0});return{prefix:t.prefix||U(),iconName:B(t.prefix,t.iconName)||t.iconName}}if(typeof e=="string"){let t=U();return{prefix:t,iconName:B(t,e)||e}}}},N={noAuto:c6,config:p,dom:a6,parse:i6,library:j0,findIconDefinition:t1,toHtml:z2},o6=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:t=M}=e;(Object.keys(w.styles).length>0||p.autoFetchSvg)&&j&&p.autoReplaceSvg&&N.dom.i2svg({node:t})};function I2(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(n=>z2(n))}}),Object.defineProperty(e,"node",{get:function(){if(!j)return;let n=M.createElement("div");return n.innerHTML=e.html,n.children}}),e}function s6(e){let{children:t,main:n,mask:c,attributes:a,styles:i,transform:o}=e;if(m1(o)&&n.found&&!c.found){let{width:s,height:u}=n,d={x:s/u/2,y:.5};a.style=F2(b(m({},i),{"transform-origin":"".concat(d.x+o.x/16,"em ").concat(d.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function r6(e){let{prefix:t,iconName:n,children:c,attributes:a,symbol:i}=e,o=i===!0?"".concat(t,"-").concat(p.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:b(m({},a),{id:o}),children:c}]}]}function g1(e){let{icons:{main:t,mask:n},prefix:c,iconName:a,transform:i,symbol:o,title:s,maskId:u,titleId:d,extra:g,watchable:C=!1}=e,{width:z,height:v}=n.found?n:t,H=c==="fak",$=[p.replacementClass,a?"".concat(p.cssPrefix,"-").concat(a):""].filter(t2=>g.classes.indexOf(t2)===-1).filter(t2=>t2!==""||!!t2).concat(g.classes).join(" "),S={children:[],attributes:b(m({},g.attributes),{"data-prefix":c,"data-icon":a,class:$,role:g.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(z," ").concat(v)})},I=H&&!~g.classes.indexOf("fa-fw")?{width:"".concat(z/v*16*.0625,"em")}:{};C&&(S.attributes[Q]=""),s&&(S.children.push({tag:"title",attributes:{id:S.attributes["aria-labelledby"]||"title-".concat(d||g2())},children:[s]}),delete S.attributes.title);let E=b(m({},S),{prefix:c,iconName:a,main:t,mask:n,maskId:u,transform:i,symbol:o,styles:m(m({},I),g.styles)}),{children:O,attributes:e2}=n.found&&t.found?Y("generateAbstractMask",E)||{children:[],attributes:{}}:Y("generateAbstractIcon",E)||{children:[],attributes:{}};return E.children=O,E.attributes=e2,o?r6(E):s6(E)}function e0(e){let{content:t,width:n,height:c,transform:a,title:i,extra:o,watchable:s=!1}=e,u=b(m(m({},o.attributes),i?{title:i}:{}),{class:o.classes.join(" ")});s&&(u[Q]="");let d=m({},o.styles);m1(a)&&(d.transform=H4({transform:a,startCentered:!0,width:n,height:c}),d["-webkit-transform"]=d.transform);let g=F2(d);g.length>0&&(u.style=g);let C=[];return C.push({tag:"span",attributes:u,children:[t]}),i&&C.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),C}function l6(e){let{content:t,title:n,extra:c}=e,a=b(m(m({},c.attributes),n?{title:n}:{}),{class:c.classes.join(" ")}),i=F2(c.styles);i.length>0&&(a.style=i);let o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var{styles:G2}=w;function n1(e){let t=e[0],n=e[1],[c]=e.slice(4),a=null;return Array.isArray(c)?a={tag:"g",attributes:{class:"".concat(p.cssPrefix,"-").concat(W2.GROUP)},children:[{tag:"path",attributes:{class:"".concat(p.cssPrefix,"-").concat(W2.SECONDARY),fill:"currentColor",d:c[0]}},{tag:"path",attributes:{class:"".concat(p.cssPrefix,"-").concat(W2.PRIMARY),fill:"currentColor",d:c[1]}}]}:a={tag:"path",attributes:{fill:"currentColor",d:c}},{found:!0,width:t,height:n,icon:a}}var f6={found:!1,width:512,height:512};function m6(e,t){!y0&&!p.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function c1(e,t){let n=t;return t==="fa"&&p.styleDefault!==null&&(t=U()),new Promise((c,a)=>{if(n==="fa"){let i=R0(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&G2[t]&&G2[t][e]){let i=G2[t][e];return c(n1(i))}m6(e,t),c(b(m({},f6),{icon:p.showMissingIcons&&e?Y("missingIconAbstract")||{}:{}}))})}var t0=()=>{},a1=p.measurePerformance&&A2&&A2.mark&&A2.measure?A2:{mark:t0,measure:t0},m2='FA "6.6.0"',u6=e=>(a1.mark("".concat(m2," ").concat(e," begins")),()=>H0(e)),H0=e=>{a1.mark("".concat(m2," ").concat(e," ends")),a1.measure("".concat(m2," ").concat(e),"".concat(m2," ").concat(e," begins"),"".concat(m2," ").concat(e," ends"))},h1={begin:u6,end:H0},N2=()=>{};function n0(e){return typeof(e.getAttribute?e.getAttribute(Q):null)=="string"}function d6(e){let t=e.getAttribute?e.getAttribute(r1):null,n=e.getAttribute?e.getAttribute(l1):null;return t&&n}function p6(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(p.replacementClass)}function g6(){return p.autoReplaceSvg===!0?S2.replace:S2[p.autoReplaceSvg]||S2.replace}function h6(e){return M.createElementNS("http://www.w3.org/2000/svg",e)}function z6(e){return M.createElement(e)}function W0(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{ceFn:n=e.tag==="svg"?h6:z6}=t;if(typeof e=="string")return M.createTextNode(e);let c=n(e.tag);return Object.keys(e.attributes||[]).forEach(function(i){c.setAttribute(i,e.attributes[i])}),(e.children||[]).forEach(function(i){c.appendChild(W0(i,{ceFn:n}))}),c}function C6(e){let t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var S2={replace:function(e){let t=e[0];if(t.parentNode)if(e[1].forEach(n=>{t.parentNode.insertBefore(W0(n),t)}),t.getAttribute(Q)===null&&p.keepOriginalSource){let n=M.createComment(C6(t));t.parentNode.replaceChild(n,t)}else t.remove()},nest:function(e){let t=e[0],n=e[1];if(~f1(t).indexOf(p.replacementClass))return S2.replace(e);let c=new RegExp("".concat(p.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){let i=n[0].attributes.class.split(" ").reduce((o,s)=>(s===p.replacementClass||s.match(c)?o.toSvg.push(s):o.toNode.push(s),o),{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?t.removeAttribute("class"):t.setAttribute("class",i.toNode.join(" "))}let a=n.map(i=>z2(i)).join(`
`);t.setAttribute(Q,""),t.innerHTML=a}};function c0(e){e()}function q0(e,t){let n=typeof t=="function"?t:N2;if(e.length===0)n();else{let c=c0;p.mutateApproach===E4&&(c=G.requestAnimationFrame||c0),c(()=>{let a=g6(),i=h1.begin("mutate");e.map(a),i(),n()})}}var z1=!1;function B0(){z1=!0}function i1(){z1=!1}var P2=null;function a0(e){if(!Y1||!p.observeMutations)return;let{treeCallback:t=N2,nodeCallback:n=N2,pseudoElementsCallback:c=N2,observeMutationsRoot:a=M}=e;P2=new Y1(i=>{if(z1)return;let o=U();l2(i).forEach(s=>{if(s.type==="childList"&&s.addedNodes.length>0&&!n0(s.addedNodes[0])&&(p.searchPseudoElements&&c(s.target),t(s.target)),s.type==="attributes"&&s.target.parentNode&&p.searchPseudoElements&&c(s.target.parentNode),s.type==="attributes"&&n0(s.target)&&~P4.indexOf(s.attributeName))if(s.attributeName==="class"&&d6(s.target)){let{prefix:u,iconName:d}=_2(f1(s.target));s.target.setAttribute(r1,u||o),d&&s.target.setAttribute(l1,d)}else p6(s.target)&&n(s.target)})}),j&&P2.observe(a,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function M6(){P2&&P2.disconnect()}function x6(e){let t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce((c,a)=>{let i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(c[o]=s.join(":").trim()),c},{})),n}function b6(e){let t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),c=e.innerText!==void 0?e.innerText.trim():"",a=_2(f1(e));return a.prefix||(a.prefix=U()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&c.length>0&&(a.iconName=Q4(a.prefix,e.innerText)||d1(a.prefix,Z2(e.innerText))),!a.iconName&&p.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function L6(e){let t=l2(e.attributes).reduce((a,i)=>(a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a),{}),n=e.getAttribute("title"),c=e.getAttribute("data-fa-title-id");return p.autoA11y&&(n?t["aria-labelledby"]="".concat(p.replacementClass,"-title-").concat(c||g2()):(t["aria-hidden"]="true",t.focusable="false")),t}function y6(){return{iconName:null,title:null,titleId:null,prefix:null,transform:F,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function i0(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},{iconName:n,prefix:c,rest:a}=b6(e),i=L6(e),o=e1("parseNodeAttributes",{},e),s=t.styleParser?x6(e):[];return m({iconName:n,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:c,transform:F,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:s,attributes:i}},o)}var{styles:v6}=w;function G0(e){let t=p.autoReplaceSvg==="nest"?i0(e,{styleParser:!1}):i0(e);return~t.extra.classes.indexOf(k0)?Y("generateLayersText",e,t):Y("generateSvgReplacementMutation",e,t)}var _=new Set;v0.map(e=>{_.add("fa-".concat(e))});Object.keys(K[x]).map(_.add.bind(_));Object.keys(K[k]).map(_.add.bind(_));Object.keys(K[A]).map(_.add.bind(_));_=[..._];function o0(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!j)return Promise.resolve();let n=M.documentElement.classList,c=g=>n.add("".concat(X1,"-").concat(g)),a=g=>n.remove("".concat(X1,"-").concat(g)),i=p.autoFetchSvg?_:v0.map(g=>"fa-".concat(g)).concat(Object.keys(v6));i.includes("fa")||i.push("fa");let o=[".".concat(k0,":not([").concat(Q,"])")].concat(i.map(g=>".".concat(g,":not([").concat(Q,"])"))).join(", ");if(o.length===0)return Promise.resolve();let s=[];try{s=l2(e.querySelectorAll(o))}catch{}if(s.length>0)c("pending"),a("complete");else return Promise.resolve();let u=h1.begin("onTree"),d=s.reduce((g,C)=>{try{let z=G0(C);z&&g.push(z)}catch(z){y0||z.name==="MissingIcon"&&console.error(z)}return g},[]);return new Promise((g,C)=>{Promise.all(d).then(z=>{q0(z,()=>{c("active"),c("complete"),a("pending"),typeof t=="function"&&t(),u(),g()})}).catch(z=>{u(),C(z)})})}function E6(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;G0(e).then(n=>{n&&q0([n],t)})}function k6(e){return function(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},c=(t||{}).icon?t:t1(t||{}),{mask:a}=n;return a&&(a=(a||{}).icon?a:t1(a||{})),e(c,b(m({},n),{mask:a}))}}var A6=function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:n=F,symbol:c=!1,mask:a=null,maskId:i=null,title:o=null,titleId:s=null,classes:u=[],attributes:d={},styles:g={}}=t;if(!e)return;let{prefix:C,iconName:z,icon:v}=e;return I2(m({type:"icon"},e),()=>(J("beforeDOMElementCreation",{iconDefinition:e,params:t}),p.autoA11y&&(o?d["aria-labelledby"]="".concat(p.replacementClass,"-title-").concat(s||g2()):(d["aria-hidden"]="true",d.focusable="false")),g1({icons:{main:n1(v),mask:a?n1(a.icon):{found:!1,width:null,height:null,icon:{}}},prefix:C,iconName:z,transform:m(m({},F),n),symbol:c,title:o,maskId:i,titleId:s,extra:{attributes:d,styles:g,classes:u}})))},N6={mixout(){return{icon:k6(A6)}},hooks(){return{mutationObserverCallbacks(e){return e.treeCallback=o0,e.nodeCallback=E6,e}}},provides(e){e.i2svg=function(t){let{node:n=M,callback:c=()=>{}}=t;return o0(n,c)},e.generateSvgReplacementMutation=function(t,n){let{iconName:c,title:a,titleId:i,prefix:o,transform:s,symbol:u,mask:d,maskId:g,extra:C}=n;return new Promise((z,v)=>{Promise.all([c1(c,o),d.iconName?c1(d.iconName,d.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(H=>{let[$,S]=H;z([t,g1({icons:{main:$,mask:S},prefix:o,iconName:c,transform:s,symbol:u,maskId:g,title:a,titleId:i,extra:C,watchable:!0})])}).catch(v)})},e.generateAbstractIcon=function(t){let{children:n,attributes:c,main:a,transform:i,styles:o}=t,s=F2(o);s.length>0&&(c.style=s);let u;return m1(i)&&(u=Y("generateAbstractTransformGrouping",{main:a,transform:i,containerWidth:a.width,iconWidth:a.width})),n.push(u||a.icon),{children:n,attributes:c}}}},S6={mixout(){return{layer(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{classes:n=[]}=t;return I2({type:"layer"},()=>{J("beforeDOMElementCreation",{assembler:e,params:t});let c=[];return e(a=>{Array.isArray(a)?a.map(i=>{c=c.concat(i.abstract)}):c=c.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(p.cssPrefix,"-layers"),...n].join(" ")},children:c}]})}}}},O6={mixout(){return{counter(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{title:n=null,classes:c=[],attributes:a={},styles:i={}}=t;return I2({type:"counter",content:e},()=>(J("beforeDOMElementCreation",{content:e,params:t}),l6({content:e.toString(),title:n,extra:{attributes:a,styles:i,classes:["".concat(p.cssPrefix,"-layers-counter"),...c]}})))}}}},P6={mixout(){return{text(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:n=F,title:c=null,classes:a=[],attributes:i={},styles:o={}}=t;return I2({type:"text",content:e},()=>(J("beforeDOMElementCreation",{content:e,params:t}),e0({content:e,transform:m(m({},F),n),title:c,extra:{attributes:i,styles:o,classes:["".concat(p.cssPrefix,"-layers-text"),...a]}})))}}},provides(e){e.generateLayersText=function(t,n){let{title:c,transform:a,extra:i}=n,o=null,s=null;if(z0){let u=parseInt(getComputedStyle(t).fontSize,10),d=t.getBoundingClientRect();o=d.width/u,s=d.height/u}return p.autoA11y&&!c&&(i.attributes["aria-hidden"]="true"),Promise.resolve([t,e0({content:t.innerHTML,width:o,height:s,transform:a,title:c,extra:i,watchable:!0})])}}},F6=new RegExp('"',"ug"),s0=[1105920,1112319],r0=m(m(m({FontAwesome:{normal:"fas",400:"fas"}},d4),u4),b4),o1=Object.keys(r0).reduce((e,t)=>(e[t.toLowerCase()]=r0[t],e),{}),w6=Object.keys(o1).reduce((e,t)=>{let n=o1[t];return e[t]=n[900]||[...Object.entries(n)][0][1],e},{});function _6(e){let t=e.replace(F6,""),n=Y4(t,0),c=n>=s0[0]&&n<=s0[1],a=t.length===2?t[0]===t[1]:!1;return{value:Z2(a?t[0]:t),isSecondary:c||a}}function I6(e,t){let n=e.replace(/^['"]|['"]$/g,"").toLowerCase(),c=parseInt(t),a=isNaN(c)?"normal":c;return(o1[n]||{})[a]||w6[n]}function l0(e,t){let n="".concat(v4).concat(t.replace(":","-"));return new Promise((c,a)=>{if(e.getAttribute(n)!==null)return c();let o=l2(e.children).filter(z=>z.getAttribute($2)===t)[0],s=G.getComputedStyle(e,t),u=s.getPropertyValue("font-family"),d=u.match(S4),g=s.getPropertyValue("font-weight"),C=s.getPropertyValue("content");if(o&&!d)return e.removeChild(o),c();if(d&&C!=="none"&&C!==""){let z=s.getPropertyValue("content"),v=I6(u,g),{value:H,isSecondary:$}=_6(z),S=d[0].startsWith("FontAwesome"),I=d1(v,H),E=I;if(S){let O=J4(H);O.iconName&&O.prefix&&(I=O.iconName,v=O.prefix)}if(I&&!$&&(!o||o.getAttribute(r1)!==v||o.getAttribute(l1)!==E)){e.setAttribute(n,E),o&&e.removeChild(o);let O=y6(),{extra:e2}=O;e2.attributes[$2]=t,c1(I,v).then(t2=>{let a4=g1(b(m({},O),{icons:{main:t2,mask:p1()},prefix:v,iconName:E,extra:e2,watchable:!0})),R2=M.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(R2,e.firstChild):e.appendChild(R2),R2.outerHTML=a4.map(i4=>z2(i4)).join(`
`),e.removeAttribute(n),c()}).catch(a)}else c()}else c()})}function T6(e){return Promise.all([l0(e,"::before"),l0(e,"::after")])}function D6(e){return e.parentNode!==document.head&&!~k4.indexOf(e.tagName.toUpperCase())&&!e.getAttribute($2)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function f0(e){if(j)return new Promise((t,n)=>{let c=l2(e.querySelectorAll("*")).filter(D6).map(T6),a=h1.begin("searchPseudoElements");B0(),Promise.all(c).then(()=>{a(),i1(),t()}).catch(()=>{a(),i1(),n()})})}var R6={hooks(){return{mutationObserverCallbacks(e){return e.pseudoElementsCallback=f0,e}}},provides(e){e.pseudoElements2svg=function(t){let{node:n=M}=t;p.searchPseudoElements&&f0(n)}}},m0=!1,j6={mixout(){return{dom:{unwatch(){B0(),m0=!0}}}},hooks(){return{bootstrap(){a0(e1("mutationObserverCallbacks",{}))},noAuto(){M6()},watch(e){let{observeMutationsRoot:t}=e;m0?i1():a0(e1("mutationObserverCallbacks",{observeMutationsRoot:t}))}}}},u0=e=>{let t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce((n,c)=>{let a=c.toLowerCase().split("-"),i=a[0],o=a.slice(1).join("-");if(i&&o==="h")return n.flipX=!0,n;if(i&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(i){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},t)},H6={mixout(){return{parse:{transform:e=>u0(e)}}},hooks(){return{parseNodeAttributes(e,t){let n=t.getAttribute("data-fa-transform");return n&&(e.transform=u0(n)),e}}},provides(e){e.generateAbstractTransformGrouping=function(t){let{main:n,transform:c,containerWidth:a,iconWidth:i}=t,o={transform:"translate(".concat(a/2," 256)")},s="translate(".concat(c.x*32,", ").concat(c.y*32,") "),u="scale(".concat(c.size/16*(c.flipX?-1:1),", ").concat(c.size/16*(c.flipY?-1:1),") "),d="rotate(".concat(c.rotate," 0 0)"),g={transform:"".concat(s," ").concat(u," ").concat(d)},C={transform:"translate(".concat(i/2*-1," -256)")},z={outer:o,inner:g,path:C};return{tag:"g",attributes:m({},z.outer),children:[{tag:"g",attributes:m({},z.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:m(m({},n.icon.attributes),z.path)}]}]}}}},U2={x:0,y:0,width:"100%",height:"100%"};function d0(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function W6(e){return e.tag==="g"?e.children:[e]}var q6={hooks(){return{parseNodeAttributes(e,t){let n=t.getAttribute("data-fa-mask"),c=n?_2(n.split(" ").map(a=>a.trim())):p1();return c.prefix||(c.prefix=U()),e.mask=c,e.maskId=t.getAttribute("data-fa-mask-id"),e}}},provides(e){e.generateAbstractMask=function(t){let{children:n,attributes:c,main:a,mask:i,maskId:o,transform:s}=t,{width:u,icon:d}=a,{width:g,icon:C}=i,z=j4({transform:s,containerWidth:g,iconWidth:u}),v={tag:"rect",attributes:b(m({},U2),{fill:"white"})},H=d.children?{children:d.children.map(d0)}:{},$={tag:"g",attributes:m({},z.inner),children:[d0(m({tag:d.tag,attributes:m(m({},d.attributes),z.path)},H))]},S={tag:"g",attributes:m({},z.outer),children:[$]},I="mask-".concat(o||g2()),E="clip-".concat(o||g2()),O={tag:"mask",attributes:b(m({},U2),{id:I,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[v,S]},e2={tag:"defs",children:[{tag:"clipPath",attributes:{id:E},children:W6(C)},O]};return n.push(e2,{tag:"rect",attributes:m({fill:"currentColor","clip-path":"url(#".concat(E,")"),mask:"url(#".concat(I,")")},U2)}),{children:n,attributes:c}}}},B6={provides(e){let t=!1;G.matchMedia&&(t=G.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){let n=[],c={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:b(m({},c),{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});let i=b(m({},a),{attributeName:"opacity"}),o={tag:"circle",attributes:b(m({},c),{cx:"256",cy:"364",r:"28"}),children:[]};return t||o.children.push({tag:"animate",attributes:b(m({},a),{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:b(m({},i),{values:"1;0;1;1;0;1;"})}),n.push(o),n.push({tag:"path",attributes:b(m({},c),{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:t?[]:[{tag:"animate",attributes:b(m({},i),{values:"1;0;0;0;0;1;"})}]}),t||n.push({tag:"path",attributes:b(m({},c),{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:b(m({},i),{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},G6={hooks(){return{parseNodeAttributes(e,t){let n=t.getAttribute("data-fa-symbol"),c=n===null?!1:n===""?!0:n;return e.symbol=c,e}}}},U6=[q4,N6,S6,O6,P6,R6,j6,H6,q6,B6,G6];n6(U6,{mixoutsTo:N});var Ee=N.noAuto,U0=N.config,ke=N.library,Y0=N.dom,$0=N.parse,Ae=N.findIconDefinition,Ne=N.toHtml,V0=N.icon,Se=N.layer,Y6=N.text,$6=N.counter;var V6=["*"],X6=e=>{throw new Error(`Could not find icon with iconName=${e.iconName} and prefix=${e.prefix} in the icon library.`)},K6=()=>{throw new Error("Property `icon` is required for `fa-icon`/`fa-duotone-icon` components.")},Z6=e=>{let t={[`fa-${e.animation}`]:e.animation!=null&&!e.animation.startsWith("spin"),"fa-spin":e.animation==="spin"||e.animation==="spin-reverse","fa-spin-pulse":e.animation==="spin-pulse"||e.animation==="spin-pulse-reverse","fa-spin-reverse":e.animation==="spin-reverse"||e.animation==="spin-pulse-reverse","fa-pulse":e.animation==="spin-pulse"||e.animation==="spin-pulse-reverse","fa-fw":e.fixedWidth,"fa-border":e.border,"fa-inverse":e.inverse,"fa-layers-counter":e.counter,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both",[`fa-${e.size}`]:e.size!==null,[`fa-rotate-${e.rotate}`]:e.rotate!==null,[`fa-pull-${e.pull}`]:e.pull!==null,[`fa-stack-${e.stackItemSize}`]:e.stackItemSize!=null};return Object.keys(t).map(n=>t[n]?n:null).filter(n=>n)},C1=new WeakSet,X0="fa-auto-css";function Q6(e,t){if(!t.autoAddCss||C1.has(e))return;if(e.getElementById(X0)!=null){t.autoAddCss=!1,C1.add(e);return}let n=e.createElement("style");n.setAttribute("type","text/css"),n.setAttribute("id",X0),n.innerHTML=Y0.css();let c=e.head.childNodes,a=null;for(let i=c.length-1;i>-1;i--){let o=c[i],s=o.nodeName.toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(a=o)}e.head.insertBefore(n,a),t.autoAddCss=!1,C1.add(e)}var J6=e=>e.prefix!==void 0&&e.iconName!==void 0,ee=(e,t)=>J6(e)?e:Array.isArray(e)&&e.length===2?{prefix:e[0],iconName:e[1]}:{prefix:t,iconName:e},te=(()=>{class e{constructor(){this.defaultPrefix="fas",this.fallbackIcon=null,this._autoAddCss=!0}set autoAddCss(n){U0.autoAddCss=n,this._autoAddCss=n}get autoAddCss(){return this._autoAddCss}static{this.\u0275fac=function(c){return new(c||e)}}static{this.\u0275prov=j2({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})(),ne=(()=>{class e{constructor(){this.definitions={}}addIcons(...n){for(let c of n){c.prefix in this.definitions||(this.definitions[c.prefix]={}),this.definitions[c.prefix][c.iconName]=c;for(let a of c.icon[2])typeof a=="string"&&(this.definitions[c.prefix][a]=c)}}addIconPacks(...n){for(let c of n){let a=Object.keys(c).map(i=>c[i]);this.addIcons(...a)}}getIconDefinition(n,c){return n in this.definitions&&c in this.definitions[n]?this.definitions[n][c]:null}static{this.\u0275fac=function(c){return new(c||e)}}static{this.\u0275prov=j2({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})(),ce=(()=>{class e{constructor(){this.stackItemSize="1x"}ngOnChanges(n){if("size"in n)throw new Error('fa-icon is not allowed to customize size when used inside fa-stack. Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.')}static{this.\u0275fac=function(c){return new(c||e)}}static{this.\u0275dir=L1({type:e,selectors:[["fa-icon","stackItemSize",""],["fa-duotone-icon","stackItemSize",""]],inputs:{stackItemSize:"stackItemSize",size:"size"},standalone:!0,features:[C2]})}}return e})(),ae=(()=>{class e{constructor(n,c){this.renderer=n,this.elementRef=c}ngOnInit(){this.renderer.addClass(this.elementRef.nativeElement,"fa-stack")}ngOnChanges(n){"size"in n&&(n.size.currentValue!=null&&this.renderer.addClass(this.elementRef.nativeElement,`fa-${n.size.currentValue}`),n.size.previousValue!=null&&this.renderer.removeClass(this.elementRef.nativeElement,`fa-${n.size.previousValue}`))}static{this.\u0275fac=function(c){return new(c||e)(P(E1),P(y1))}}static{this.\u0275cmp=L({type:e,selectors:[["fa-stack"]],inputs:{size:"size"},standalone:!0,features:[C2,y],ngContentSelectors:V6,decls:1,vars:0,template:function(c,a){c&1&&(S1(),O1(0))},encapsulation:2})}}return e})(),K0=(()=>{class e{constructor(n,c,a,i,o){this.sanitizer=n,this.config=c,this.iconLibrary=a,this.stackItem=i,this.document=x1(w1),o!=null&&i==null&&console.error('FontAwesome: fa-icon and fa-duotone-icon elements must specify stackItemSize attribute when wrapped into fa-stack. Example: <fa-icon stackItemSize="2x"></fa-icon>.')}ngOnChanges(n){if(this.icon==null&&this.config.fallbackIcon==null){K6();return}if(n){let c=this.findIconDefinition(this.icon??this.config.fallbackIcon);if(c!=null){let a=this.buildParams();Q6(this.document,this.config);let i=V0(c,a);this.renderedIconHTML=this.sanitizer.bypassSecurityTrustHtml(i.html.join(`
`))}}}render(){this.ngOnChanges({})}findIconDefinition(n){let c=ee(n,this.config.defaultPrefix);if("icon"in c)return c;let a=this.iconLibrary.getIconDefinition(c.prefix,c.iconName);return a??(X6(c),null)}buildParams(){let n={flip:this.flip,animation:this.animation,border:this.border,inverse:this.inverse,size:this.size||null,pull:this.pull||null,rotate:this.rotate||null,fixedWidth:typeof this.fixedWidth=="boolean"?this.fixedWidth:this.config.fixedWidth,stackItemSize:this.stackItem!=null?this.stackItem.stackItemSize:null},c=typeof this.transform=="string"?$0.transform(this.transform):this.transform;return{title:this.title,transform:c,classes:Z6(n),mask:this.mask!=null?this.findIconDefinition(this.mask):null,symbol:this.symbol,attributes:{role:this.a11yRole}}}static{this.\u0275fac=function(c){return new(c||e)(P(D1),P(te),P(ne),P(ce,8),P(ae,8))}}static{this.\u0275cmp=L({type:e,selectors:[["fa-icon"]],hostAttrs:[1,"ng-fa-icon"],hostVars:2,hostBindings:function(c,a){c&2&&(N1("innerHTML",a.renderedIconHTML,v1),A1("title",a.title))},inputs:{icon:"icon",title:"title",animation:"animation",mask:"mask",flip:"flip",size:"size",pull:"pull",border:"border",inverse:"inverse",symbol:"symbol",rotate:"rotate",fixedWidth:"fixedWidth",transform:"transform",a11yRole:"a11yRole"},standalone:!0,features:[C2,y],decls:0,vars:0,template:function(c,a){},encapsulation:2})}}return e})();var Z0=(()=>{class e{static{this.\u0275fac=function(c){return new(c||e)}}static{this.\u0275mod=b1({type:e})}static{this.\u0275inj=M1({})}}return e})();var Q0={prefix:"far",iconName:"compass",icon:[512,512,[129517],"f14e","M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm306.7 69.1L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"]};var J0={prefix:"far",iconName:"handshake",icon:[640,512,[],"f2b5","M272.2 64.6l-51.1 51.1c-15.3 4.2-29.5 11.9-41.5 22.5L153 161.9C142.8 171 129.5 176 115.8 176L96 176l0 128c20.4 .6 39.8 8.9 54.3 23.4l35.6 35.6 7 7c0 0 0 0 0 0L219.9 397c6.2 6.2 16.4 6.2 22.6 0c1.7-1.7 3-3.7 3.7-5.8c2.8-7.7 9.3-13.5 17.3-15.3s16.4 .6 22.2 6.5L296.5 393c11.6 11.6 30.4 11.6 41.9 0c5.4-5.4 8.3-12.3 8.6-19.4c.4-8.8 5.6-16.6 13.6-20.4s17.3-3 24.4 2.1c9.4 6.7 22.5 5.8 30.9-2.6c9.4-9.4 9.4-24.6 0-33.9L340.1 243l-35.8 33c-27.3 25.2-69.2 25.6-97 .9c-31.7-28.2-32.4-77.4-1.6-106.5l70.1-66.2C303.2 78.4 339.4 64 377.1 64c36.1 0 71 13.3 97.9 37.2L505.1 128l38.9 0 40 0 40 0c8.8 0 16 7.2 16 16l0 208c0 17.7-14.3 32-32 32l-32 0c-11.8 0-22.2-6.4-27.7-16l-84.9 0c-3.4 6.7-7.9 13.1-13.5 18.7c-17.1 17.1-40.8 23.8-63 20.1c-3.6 7.3-8.5 14.1-14.6 20.2c-27.3 27.3-70 30-100.4 8.1c-25.1 20.8-62.5 19.5-86-4.1L159 404l-7-7-35.6-35.6c-5.5-5.5-12.7-8.7-20.4-9.3C96 369.7 81.6 384 64 384l-32 0c-17.7 0-32-14.3-32-32L0 144c0-8.8 7.2-16 16-16l40 0 40 0 19.8 0c2 0 3.9-.7 5.3-2l26.5-23.6C175.5 77.7 211.4 64 248.7 64L259 64c4.4 0 8.9 .2 13.2 .6zM544 320l0-144-48 0c-5.9 0-11.6-2.2-15.9-6.1l-36.9-32.8c-18.2-16.2-41.7-25.1-66.1-25.1c-25.4 0-49.8 9.7-68.3 27.1l-70.1 66.2c-10.3 9.8-10.1 26.3 .5 35.7c9.3 8.3 23.4 8.1 32.5-.3l71.9-66.4c9.7-9 24.9-8.4 33.9 1.4s8.4 24.9-1.4 33.9l-.8 .8 74.4 74.4c10 10 16.5 22.3 19.4 35.1l74.8 0zM64 336a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm528 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32z"]};var e4={prefix:"far",iconName:"heart",icon:[512,512,[128153,128154,128155,128156,128420,129293,129294,129505,9829,10084,61578],"f004","M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8l0-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5l0 3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20-.1-.1s0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5l0 3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2l0-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"]};var T2=class e{faHandshake=J0;faCompass=Q0;faHeart=e4;static \u0275fac=function(n){return new(n||e)};static \u0275cmp=L({type:e,selectors:[["app-home"]],standalone:!0,features:[y],decls:28,vars:3,consts:[[1,"section-title"],[1,"section-content"],[1,"consultation-options"],[1,"consultation-option"],[1,"large-icon",3,"icon"]],template:function(n,c){n&1&&(h(0,"app-header"),r(1,"section")(2,"h2",0),l(3,"Ami\xE9rt \xE9rdemes pszichol\xF3gushoz fordulni"),f(),r(4,"p",1),l(5,"Ezekben \xE1llok rendelkez\xE9s\xE9re"),f()(),r(6,"section",2)(7,"div",3),h(8,"fa-icon",4),r(9,"p")(10,"strong"),l(11,"Kapcsolat"),f()(),r(12,"p"),l(13,"T\xE1masz ny\xFAjt\xE1sa elfogad\xF3, empatikus, nyugodt l\xE9gk\xF6rben."),f()(),r(14,"div",3),h(15,"fa-icon",4),r(16,"p")(17,"strong"),l(18,"Ir\xE1nyt\u0171"),f()(),r(19,"p"),l(20,"A gondolkod\xE1s, az \xE9rzelmek \xE9s a viselked\xE9s \xF6sszef\xFCgg\xE9seinek meg\xE9rt\xE9se."),f()(),r(21,"div",3),h(22,"fa-icon",4),r(23,"p")(24,"strong"),l(25,"V\xE1ltoz\xE1s"),f()(),r(26,"p"),l(27,"Probl\xE9ma felt\xE1r\xE1sa, fejl\u0151d\xE9s \xFAtj\xE1n val\xF3 elindul\xE1s."),f()()()),n&2&&(n2(8),c2("icon",c.faHandshake),n2(7),c2("icon",c.faCompass),n2(7),c2("icon",c.faHeart))},dependencies:[k2,Z0,K0],styles:[".section-title[_ngcontent-%COMP%]{text-align:center;padding:10vh 5vh;font-size:5vh;color:#333}.section-content[_ngcontent-%COMP%]{text-align:center;font-size:3vh;color:#666;margin-bottom:5vh}.consultation-options[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:20px;justify-content:center;align-items:start;padding:40px 20px}.consultation-option[_ngcontent-%COMP%]{text-align:center;padding:20px;border:1px solid #ddd;border-radius:8px;background-color:#f9f9f9;box-shadow:0 4px 6px #0000001a;transition:transform .3s ease,box-shadow .3s ease}.consultation-option[_ngcontent-%COMP%]:hover{transform:translateY(-5px);box-shadow:0 6px 10px #00000026}.large-icon[_ngcontent-%COMP%]{font-size:16vh;color:#555}.consultation-option[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-top:10px;font-size:18px;color:#333}@media (max-width: 768px){.section-title[_ngcontent-%COMP%]{padding:5vh 2vh;font-size:4vh}.large-icon[_ngcontent-%COMP%]{font-size:14vh}}"]})};var D2=class e{static \u0275fac=function(n){return new(n||e)};static \u0275cmp=L({type:e,selectors:[["app-pricing"]],standalone:!0,features:[y],decls:7,vars:0,consts:[["id","pszichologiai-tanacsadas",1,"pricing-section"]],template:function(n,c){n&1&&(r(0,"section",0)(1,"h2"),l(2,"D\xEDjszab\xE1s"),f(),r(3,"p"),l(4,"50 perces konzult\xE1ci\xF3 2024. szeptember 1-t\u0151l 16.000 Ft"),f(),r(5,"p"),l(6,"Id\u0151pont egyeztet\xE9se \xE9s inform\xE1ci\xF3 k\xE9r\xE9se telefonon. Keressen bizalommal!"),f()())},styles:[".pricing-section[_ngcontent-%COMP%]{padding:40px 20px;text-align:center}.pricing-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:28px;color:#333}.pricing-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-top:20px;font-size:16px;color:#666}@media (max-width: 768px){.pricing-section[_ngcontent-%COMP%]{padding:20px 10px}}"]})};var t4=[{path:"",component:T2},{path:"consultation",component:v2},{path:"about",component:y2},{path:"contact",component:E2},{path:"pricing",component:D2},{path:"**",redirectTo:""}];var n4={providers:[P1({eventCoalescing:!0}),q1(t4),R1()]};var oe={providers:[j1()]},c4=F1(n4,oe);var se=()=>T1(L2,c4),Mt=se;export{Mt as a};
