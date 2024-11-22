import './polyfills.server.mjs';
import{$ as j2,A as q2,F as D2,I as _2,J as B2,L as x1,M as R2,N as g1,O as I2,P as Z2,Q as U2,T as G2,X as W2,Z as N1,_ as b1,a as G1,aa as v1,b as S2,c as k2,d as N,e as H2,f as y2,g as u1,h as A2,i as w2,j as S,k as V,l as V2,m as d1,n as P2,o as k,p as W1,q as t,r,s as p,t as F2,u as K,v as E2,w as O2,x as f,y as T2,z as b}from"./chunk-UJXUGE7W.mjs";import{a as z,b as g}from"./chunk-5XUXGTUW.mjs";var C4=c=>({position:c});function p4(c,l){c&1&&(t(0,"p")(1,"a",2),f(2,"Kapcsolat felv\xE9tel"),r()())}var S1=class c{constructor(l){this.router=l}currentRoute="";ngOnInit(){this.router.events.subscribe(()=>{this.currentRoute=this.router.url})}getPosition(){let l=window.innerHeight>=700;return console.log(this.currentRoute,"itt"),console.log(this.currentRoute==="/contact"&&l),this.currentRoute==="/contact"&&l?"fixed":"static"}static \u0275fac=function(a){return new(a||c)(V(N1))};static \u0275cmp=N({type:c,selectors:[["app-footer"]],standalone:!0,features:[b],decls:4,vars:4,consts:[[1,"footer",3,"ngStyle"],[4,"ngIf"],["routerLink","/contact",1,"button-like"]],template:function(a,s){a&1&&(t(0,"div",0)(1,"h1"),f(2,"Fontos a ment\xE1lis eg\xE9szs\xE9ge"),r(),d1(3,p4,3,0,"p",1),r()),a&2&&(k("ngStyle",q2(2,C4,s.getPosition())),S(3),k("ngIf",s.currentRoute!=="/contact"))},dependencies:[v1,b1,g1,x1,R2],styles:[".footer[_ngcontent-%COMP%]{margin-top:1vh;display:flex;width:100%;background-color:#c5d0e6;padding:3vh 0;justify-content:center;align-items:center;flex-direction:column;text-align:center;bottom:0;left:0}.footer[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:5vh;font-weight:300;margin:0}.footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-top:2vh;font-size:2.5vh}.footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;color:inherit}.button-like[_ngcontent-%COMP%]{border-radius:5px;box-shadow:0 4px 6px #0000004d;display:inline-block;padding:10px 20px;background-color:#849ec9;color:#fff;text-decoration:none;border:rgba(0,0,0,.3) 2px solid;font-size:3.5vh;font-weight:400;text-align:center;transition:background-color .3s ease,transform .2s ease}.button-like[_ngcontent-%COMP%]:hover{transform:translateY(-2px)}.button-like[_ngcontent-%COMP%]:active{transform:translateY(1px)}@media (max-width: 768px){.footer[_ngcontent-%COMP%]{height:25vh;padding:10px}.footer[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:4vh}.footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:2vh}.button-like[_ngcontent-%COMP%]{font-size:3vh;padding:8px 16px}}@media (max-width: 480px){.footer[_ngcontent-%COMP%]{height:20vh;padding:8px}.footer[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:3.5vh}.footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.8vh}.button-like[_ngcontent-%COMP%]{font-size:2.8vh;padding:6px 12px}}"]})};var e1=class c{menuActive=!1;toggleMenu(){this.menuActive=!this.menuActive}static \u0275fac=function(a){return new(a||c)};static \u0275cmp=N({type:c,selectors:[["app-nav"]],standalone:!0,features:[b],decls:23,vars:2,consts:[[1,"logo"],[1,"menu-toggle",3,"click"],["routerLink","/",3,"click"],["routerLink","/consultation",3,"click"],["routerLink","/about",3,"click"],["routerLink","/contact",3,"click"],["routerLink","/pricing",3,"click"]],template:function(a,s){a&1&&(t(0,"header")(1,"div",0)(2,"h1"),f(3,"Husz\xE1r Anna"),r()(),t(4,"button",1),K("click",function(){return s.toggleMenu()}),f(5,"\u2630"),r(),t(6,"nav")(7,"ul")(8,"li")(9,"a",2),K("click",function(){return s.toggleMenu()}),f(10,"Kezd\u0151lap"),r()(),t(11,"li")(12,"a",3),K("click",function(){return s.toggleMenu()}),f(13,"Pszichol\xF3giai tan\xE1csad\xE1s"),r()(),t(14,"li")(15,"a",4),K("click",function(){return s.toggleMenu()}),f(16,"R\xF3lam"),r()(),t(17,"li")(18,"a",5),K("click",function(){return s.toggleMenu()}),f(19,"Kapcsolat"),r()(),t(20,"li")(21,"a",6),K("click",function(){return s.toggleMenu()}),f(22,"D\xEDjszab\xE1s"),r()()()()()),a&2&&(S(6),W1("active",s.menuActive))},dependencies:[v1,b1],styles:["header[_ngcontent-%COMP%]{width:100%;background-color:#c5d0e6;display:flex;justify-content:space-between;align-items:center;padding:2vh 5%;position:relative;z-index:1000}header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:3.5vh;margin:0;line-height:1.2}nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;display:flex;gap:20px}nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;color:#000;font-size:18px;padding:5px 10px;border-radius:5px;transition:background-color .3s}nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background:#3868b429}.logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-height:30px}.menu-toggle[_ngcontent-%COMP%]{color:#000;display:none;font-size:40px;background:none;border:none;cursor:pointer;position:absolute;top:50%;right:3vh;transform:translateY(-50%)}@media (max-width: 960px){nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:none;flex-direction:column;gap:10px;padding:10px;position:absolute;top:60px;right:0;background-color:#c5d0e6;width:100%;z-index:1000}nav.active[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:flex}.menu-toggle[_ngcontent-%COMP%]{display:block;z-index:1001}}"]})};function h4(c,l){c&1&&p(0,"app-nav")}var k1=class c{constructor(l){this.router=l}title="anna-web";showNav=!1;ngOnInit(){this.router.events.subscribe(()=>{this.showNav=this.router.url!=="/"})}static \u0275fac=function(a){return new(a||c)(V(N1))};static \u0275cmp=N({type:c,selectors:[["app-root"]],standalone:!0,features:[b],decls:3,vars:1,consts:[[4,"ngIf"]],template:function(a,s){a&1&&(d1(0,h4,1,0,"app-nav",0),p(1,"router-outlet")(2,"app-footer")),a&2&&k("ngIf",s.showNav)},dependencies:[W2,S1,e1,g1,x1]})};var H1=class c{static \u0275fac=function(a){return new(a||c)};static \u0275cmp=N({type:c,selectors:[["app-about"]],standalone:!0,features:[b],decls:47,vars:0,consts:[["id","rolam"],[1,"rovid"],[1,"about-section"],["src","assets/profilkep.jpg","alt","Profil K\xE9p",1,"profil"],[1,"about"]],template:function(a,s){a&1&&(t(0,"section",0)(1,"div",1)(2,"h1"),f(3,"R\xF3lam"),r(),t(4,"p"),f(5,"A ment\xE1lis eg\xE9szs\xE9ge szolg\xE1lat\xE1ban \xE1llok"),r()(),t(6,"section",2),p(7,"img",3),t(8,"div",4)(9,"p")(10,"strong"),f(11,"Husz\xE1r Anna vagyok, pszichol\xF3gus, tan\xE1csad\xF3 szakpszichol\xF3gus."),r(),p(12,"br")(13,"br"),t(14,"strong"),f(15,"Okleveles pszichol\xF3gusk\xE9nt a P\xE9csi Tudom\xE1nyegyetemen v\xE9geztem. Tan\xE1csad\xF3 szakpszichol\xF3gus k\xE9pes\xEDt\xE9semet az E\xF6tv\xF6s Lor\xE1nd Tudom\xE1nyegyetemen csal\xE1d \xE9s p\xE1rkapcsolat specializ\xE1ci\xF3n szereztem. "),r(),p(16,"br")(17,"br"),f(18," 2017 \xF3ta \xF6nismereti t\xE9m\xE1j\xFA seg\xEDt\u0151 besz\xE9lget\xE9sekkel t\xE1mogatom a hozz\xE1m fordul\xF3kat \xE9lethelyzet\xFCk, probl\xE9m\xE1juk \xE1tgondol\xE1s\xE1ban, meghalad\xE1s\xE1ban. Fontosnak tartom szakmai tud\xE1som, eszk\xF6zt\xE1ram fejleszt\xE9s\xE9t, \xEDgy az \xE9vek sor\xE1n tov\xE1bbk\xE9pz\xE9seken, konferenci\xE1kon vettem r\xE9szt. Szeretem a megszerzett gyakorlati tud\xE1st beemelni a konzult\xE1ci\xF3s folyamatba, \xEDgy sz\xEDvesen haszn\xE1lok eszk\xF6z\xF6ket, amelyek abban seg\xEDtenek minket, hogy az \xE9rzelmek k\xF6nnyebben megfogalmazhat\xF3k legyenek \xE9s tiszt\xE1bb k\xE9pet kaphassunk saj\xE1t m\u0171k\xF6d\xE9s\xFCnkr\u0151l."),p(19,"br")(20,"br"),f(21," A besz\xE9lget\xE9sek sor\xE1n gyakran haszn\xE1lunk test-alap\xFA megk\xF6zel\xEDt\xE9st a trauma, a sokk \xE9s egy\xE9b stressz-zavarok kezel\xE9s\xE9re, mely a test bels\u0151, \xF6ngy\xF3gy\xEDt\xF3 folyamatait mobiliz\xE1lja."),p(22,"br")(23,"br"),f(24," A munk\xE1mhoz sz\xFCks\xE9ges \xF6nismeretet 150 \xF3r\xE1s pszichodr\xE1ma csoport, valamint egy\xE9ni ter\xE1pia keretein bel\xFCl szereztem meg. Az\xF3ta is folyamatosan fejlesztem magam ter\xE1pi\xE1s \xE9s egy\xE9b m\xF3dszerek seg\xEDts\xE9g\xE9vel."),p(25,"br"),f(26," Online konzult\xE1ci\xF3 keretein bel\xFCl v\xE1rom a hozz\xE1m fordul\xF3kat."),p(27,"br")(28,"br"),t(29,"strong"),f(30," Milyen esetben szoktak felkeresni?"),p(31,"br"),r()(),t(32,"ul")(33,"li"),f(34,"\xE9letvezet\xE9si neh\xE9zs\xE9gek"),r(),t(35,"li"),f(36,"p\xE1lyav\xE1laszt\xE1si k\xE9rd\xE9sek"),r(),t(37,"li"),f(38,"p\xE1rkapcsolati probl\xE9m\xE1k"),r(),t(39,"li"),f(40,"kr\xEDzishelyzet"),r(),t(41,"li"),f(42,"ki\xE9g\xE9s"),r(),t(43,"li"),f(44,"munka-mag\xE1n\xE9let egyens\xFAly felborul\xE1sa "),r(),t(45,"li"),f(46,"\xF6nismeret m\xE9ly\xEDt\xE9se"),r()()()()())},styles:['#rolam[_ngcontent-%COMP%]{max-width:1300px;margin:0 auto;padding:40px 20px;background-color:#fff}.rovid[_ngcontent-%COMP%]{text-align:center;margin-bottom:20px}.rovid[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:2rem;margin-bottom:10px;color:#444}.rovid[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.2rem;color:#666;margin:0}.about-section[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 2fr;gap:20px;align-items:start;max-width:800px;margin:0 auto 2vh;background:#fff;padding:20px;border:1px solid #ddd;border-radius:8px;background-color:#f9f9f9;box-shadow:0 4px 6px #0000001a}.profil[_ngcontent-%COMP%]{position:sticky;top:60px;width:100%;max-width:300px;border-radius:8px;justify-self:center}.about[_ngcontent-%COMP%]{font-size:1rem;line-height:1.6}.about[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:20px}ul[_ngcontent-%COMP%]{list-style-type:none;padding:0;margin:0}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{position:relative;margin:5px 0;padding-left:20px;font-size:1rem}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before{content:"-";position:absolute;left:0;color:#444;font-weight:700}@media (max-width: 768px){.about-section[_ngcontent-%COMP%]{grid-template-columns:1fr;text-align:center}.profil[_ngcontent-%COMP%]{position:static;max-width:200px}ul[_ngcontent-%COMP%]{text-align:left;font-size:.9rem}}@media (max-width: 480px){.rovid[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:1.5rem}.rovid[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1rem}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{font-size:.85rem}.about[_ngcontent-%COMP%]{font-size:.9rem}}']})};var y1=class c{static \u0275fac=function(a){return new(a||c)};static \u0275cmp=N({type:c,selectors:[["app-consultation"]],standalone:!0,features:[b],decls:57,vars:0,consts:[[1,"tarolo"],[1,"services"],[1,"service"],["src","assets/onlineCons1.webp","alt","Online konzult\xE1ci\xF3"],[1,"content"],[1,"fo"],[1,"center"]],template:function(a,s){a&1&&(t(0,"div",0)(1,"section",1)(2,"div",2),p(3,"img",3),t(4,"h3"),f(5,"Online konzult\xE1ci\xF3"),r()()(),t(6,"section",4)(7,"h2",5),f(8,"Online pszichol\xF3giai tan\xE1csad\xE1s "),r(),p(9,"br"),t(10,"p",6),f(11,"A pszichol\xF3giai tan\xE1csad\xE1s c\xE9lja: saj\xE1t er\u0151forr\xE1sokb\xF3l \xE9s megold\xE1si lehet\u0151s\xE9gekb\u0151l mer\xEDt\u0151 \xF6n\xE1ll\xF3 egyens\xFAlyteremt\xE9s, tudatoss\xE1g n\xF6vel\xE9se, szem\xE9lyes megk\xFCzd\xE9si hat\xE9konys\xE1g kialak\xEDt\xE1sa."),r(),p(12,"br"),t(13,"h2"),f(14,"\xDCl\xE9sek gyakoris\xE1ga \xE9s id\u0151tartama"),r(),p(15,"br"),t(16,"ul")(17,"li"),f(18,"\xDCl\xE9sek gyakoris\xE1g\xE1t a kliens probl\xE9m\xE1ja hat\xE1rozza meg."),r(),t(19,"li"),f(20,"\xDCl\xE9sek hossza: 45-50 perc."),r()(),p(21,"br"),t(22,"h2"),f(23,"Mit nem csin\xE1l a tan\xE1csad\xF3 szakpszichol\xF3gus?"),r(),p(24,"br"),t(25,"ul")(26,"li"),f(27,"Nem ad direkt \xFAtmutat\xE1st, nem d\xF6nt a kliens helyett."),r(),t(28,"li"),f(29,"Nem t\xE1maszt elv\xE1r\xE1st."),r(),t(30,"li"),f(31,"Nem \xEDr fel gy\xF3gyszert."),r(),t(32,"li"),f(33,"Nem v\xE9gez hossz\xFA ter\xE1pi\xE1t."),r()(),p(34,"br"),t(35,"h2"),f(36,"Mit csin\xE1l a tan\xE1csad\xF3 szakpszichol\xF3gus?"),r(),p(37,"br"),t(38,"ul")(39,"li"),f(40,"Seg\xEDt\u0151 besz\xE9lget\xE9st ny\xFAjt."),r(),t(41,"li"),f(42,"Objekt\xEDven seg\xEDti meg\xE9rteni \xE9s feldolgozni a helyzetet."),r(),t(43,"li"),f(44,"Az eg\xE9szs\xE9ges m\u0171k\xF6d\xE9sre \xE9s a kliens er\u0151ss\xE9geire f\xF3kusz\xE1l."),r()()(),p(45,"br"),t(46,"section",4)(47,"h2",5),f(48,"Milyen felt\xE9telek kellenek az online konzult\xE1ci\xF3hoz?"),r(),p(49,"br"),t(50,"ul")(51,"li"),f(52,"El\u0151re egyeztetett alkalmaz\xE1son kereszt\xFCl vegy\xFCk fel a kapcsolatot (pl. Zoom, Skype)."),r(),t(53,"li"),f(54,"Olyan helyen legyen, ahogy egyed\xFCl van."),r(),t(55,"li"),f(56,"Biztos\xEDtsa a zavartalan technikai kapcsol\xF3d\xE1st."),r()()()())},styles:['.tarolo[_ngcontent-%COMP%]{padding:40px 20px}.services[_ngcontent-%COMP%]{display:flex;justify-content:space-evenly;flex-wrap:wrap;margin:2.4vh 1.2vh;gap:2vh}.service[_ngcontent-%COMP%]{text-align:left;max-width:300px}.service[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:auto;border-radius:30px;box-shadow:0 4px 6px #0000004d}.service[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-top:2vh;margin-bottom:4vh;padding-left:0;font-size:1.2rem;font-weight:400;text-align:center}.content[_ngcontent-%COMP%]{max-width:800px;margin:0 auto 2vh;padding:20px;border:1px solid #ddd;border-radius:8px;background-color:#f9f9f9;box-shadow:0 4px 6px #0000001a}.content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1.5rem;margin-bottom:10px}.content[_ngcontent-%COMP%]   .fo[_ngcontent-%COMP%]{text-align:center;font-size:2.5rem}.center[_ngcontent-%COMP%]{text-align:center}.content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:1.5rem;margin-top:20px}.content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1rem;margin-bottom:15px;color:#555}.content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style-type:none;padding:0 0 0 1rem}.content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding-left:20px;position:relative;margin-bottom:10px;font-size:1rem;color:#333}.content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before{content:"\\2022";color:#000;position:absolute;left:0;top:0}@media (max-width: 768px){.services[_ngcontent-%COMP%]{flex-direction:column;align-items:center}.service[_ngcontent-%COMP%]{max-width:90%}.content[_ngcontent-%COMP%]{padding:15px}.content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1.8rem}.content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{font-size:.9rem}}@media (max-width: 480px){.service[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:20px}.content[_ngcontent-%COMP%]{padding:10px}.content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1.5rem}.content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{font-size:.9rem}}']})};var X2=()=>{},L2={},d3={},x3=null,g3={mark:X2,measure:X2};try{typeof window<"u"&&(L2=window),typeof document<"u"&&(d3=document),typeof MutationObserver<"u"&&(x3=MutationObserver),typeof performance<"u"&&(g3=performance)}catch{}var{userAgent:K2=""}=L2.navigator||{},W=L2,d=d3,$2=x3,A1=g3,V6=!!W.document,R=!!d.documentElement&&!!d.head&&typeof d.addEventListener=="function"&&typeof d.createElement=="function",N3=~K2.indexOf("MSIE")||~K2.indexOf("Trident/"),x="classic",b3="duotone",y="sharp",A="sharp-duotone",u4=[x,b3,y,A],d4={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}},Q2={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},x4=["kit"],g4=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,N4=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,b4={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},v4={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"}},S4={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}},k4={classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]},H4={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}},y4={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}},v3={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},A4=["solid","regular","light","thin","duotone","brands"],S3=[1,2,3,4,5,6,7,8,9,10],w4=S3.concat([11,12,13,14,15,16,17,18,19,20]),r1={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},V4=[...Object.keys(k4),...A4,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",r1.GROUP,r1.SWAP_OPACITY,r1.PRIMARY,r1.SECONDARY].concat(S3.map(c=>"".concat(c,"x"))).concat(w4.map(c=>"w-".concat(c))),P4={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},F4={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},E4={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},J2={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},_="___FONT_AWESOME___",Q1=16,k3="fa",H3="svg-inline--fa",c1="data-fa-i2svg",J1="data-fa-pseudo-element",O4="data-fa-pseudo-element-pending",M2="data-prefix",C2="data-icon",c3="fontawesome-i2svg",T4="async",q4=["HTML","HEAD","STYLE","SCRIPT"],y3=(()=>{try{return process.env.NODE_ENV==="production"}catch{return!1}})(),A3=[x,y,A];function p1(c){return new Proxy(c,{get(l,a){return a in l?l[a]:l[x]}})}var w3=z({},v3);w3[x]=z(z(z({},v3[x]),Q2.kit),Q2["kit-duotone"]);var Q=p1(w3),c2=z({},y4);c2[x]=z(z(z({},c2[x]),J2.kit),J2["kit-duotone"]);var M1=p1(c2),l2=z({},H4);l2[x]=z(z({},l2[x]),E4.kit);var J=p1(l2),a2=z({},S4);a2[x]=z(z({},a2[x]),F4.kit);var D4=p1(a2),_4=g4,V3="fa-layers-text",B4=N4,R4=z({},d4),P6=p1(R4),I4=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],j1=r1,i1=new Set;Object.keys(M1[x]).map(i1.add.bind(i1));Object.keys(M1[y]).map(i1.add.bind(i1));Object.keys(M1[A]).map(i1.add.bind(i1));var Z4=[...x4,...V4],m1=W.FontAwesomeConfig||{};function U4(c){var l=d.querySelector("script["+c+"]");if(l)return l.getAttribute(c)}function G4(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}d&&typeof d.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(l=>{let[a,s]=l,e=G4(U4(a));e!=null&&(m1[s]=e)});var P3={styleDefault:"solid",familyDefault:"classic",cssPrefix:k3,replacementClass:H3,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};m1.familyPrefix&&(m1.cssPrefix=m1.familyPrefix);var t1=z(z({},P3),m1);t1.autoReplaceSvg||(t1.observeMutations=!1);var M={};Object.keys(P3).forEach(c=>{Object.defineProperty(M,c,{enumerable:!0,set:function(l){t1[c]=l,L1.forEach(a=>a(M))},get:function(){return t1[c]}})});Object.defineProperty(M,"familyPrefix",{enumerable:!0,set:function(c){t1.cssPrefix=c,L1.forEach(l=>l(M))},get:function(){return t1.cssPrefix}});W.FontAwesomeConfig=M;var L1=[];function W4(c){return L1.push(c),()=>{L1.splice(L1.indexOf(c),1)}}var U=Q1,E={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function j4(c){if(!c||!R)return;let l=d.createElement("style");l.setAttribute("type","text/css"),l.innerHTML=c;let a=d.head.childNodes,s=null;for(let e=a.length-1;e>-1;e--){let n=a[e],o=(n.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(s=n)}return d.head.insertBefore(l,s),c}var Y4="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function C1(){let c=12,l="";for(;c-- >0;)l+=Y4[Math.random()*62|0];return l}function f1(c){let l=[];for(let a=(c||[]).length>>>0;a--;)l[a]=c[a];return l}function p2(c){return c.classList?f1(c.classList):(c.getAttribute("class")||"").split(" ").filter(l=>l)}function F3(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function X4(c){return Object.keys(c||{}).reduce((l,a)=>l+"".concat(a,'="').concat(F3(c[a]),'" '),"").trim()}function E1(c){return Object.keys(c||{}).reduce((l,a)=>l+"".concat(a,": ").concat(c[a].trim(),";"),"")}function h2(c){return c.size!==E.size||c.x!==E.x||c.y!==E.y||c.rotate!==E.rotate||c.flipX||c.flipY}function K4(c){let{transform:l,containerWidth:a,iconWidth:s}=c,e={transform:"translate(".concat(a/2," 256)")},n="translate(".concat(l.x*32,", ").concat(l.y*32,") "),o="scale(".concat(l.size/16*(l.flipX?-1:1),", ").concat(l.size/16*(l.flipY?-1:1),") "),i="rotate(".concat(l.rotate," 0 0)"),m={transform:"".concat(n," ").concat(o," ").concat(i)},L={transform:"translate(".concat(s/2*-1," -256)")};return{outer:e,inner:m,path:L}}function $4(c){let{transform:l,width:a=Q1,height:s=Q1,startCentered:e=!1}=c,n="";return e&&N3?n+="translate(".concat(l.x/U-a/2,"em, ").concat(l.y/U-s/2,"em) "):e?n+="translate(calc(-50% + ".concat(l.x/U,"em), calc(-50% + ").concat(l.y/U,"em)) "):n+="translate(".concat(l.x/U,"em, ").concat(l.y/U,"em) "),n+="scale(".concat(l.size/U*(l.flipX?-1:1),", ").concat(l.size/U*(l.flipY?-1:1),") "),n+="rotate(".concat(l.rotate,"deg) "),n}var Q4=`:root, :host {
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
}`;function E3(){let c=k3,l=H3,a=M.cssPrefix,s=M.replacementClass,e=Q4;if(a!==c||s!==l){let n=new RegExp("\\.".concat(c,"\\-"),"g"),o=new RegExp("\\--".concat(c,"\\-"),"g"),i=new RegExp("\\.".concat(l),"g");e=e.replace(n,".".concat(a,"-")).replace(o,"--".concat(a,"-")).replace(i,".".concat(s))}return e}var l3=!1;function Y1(){M.autoAddCss&&!l3&&(j4(E3()),l3=!0)}var J4={mixout(){return{dom:{css:E3,insertCss:Y1}}},hooks(){return{beforeDOMElementCreation(){Y1()},beforeI2svg(){Y1()}}}},B=W||{};B[_]||(B[_]={});B[_].styles||(B[_].styles={});B[_].hooks||(B[_].hooks={});B[_].shims||(B[_].shims=[]);var O=B[_],O3=[],T3=function(){d.removeEventListener("DOMContentLoaded",T3),P1=1,O3.map(c=>c())},P1=!1;R&&(P1=(d.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(d.readyState),P1||d.addEventListener("DOMContentLoaded",T3));function c0(c){R&&(P1?setTimeout(c,0):O3.push(c))}function h1(c){let{tag:l,attributes:a={},children:s=[]}=c;return typeof c=="string"?F3(c):"<".concat(l," ").concat(X4(a),">").concat(s.map(h1).join(""),"</").concat(l,">")}function a3(c,l,a){if(c&&c[l]&&c[l][a])return{prefix:l,iconName:a,icon:c[l][a]}}var l0=function(l,a){return function(s,e,n,o){return l.call(a,s,e,n,o)}},X1=function(l,a,s,e){var n=Object.keys(l),o=n.length,i=e!==void 0?l0(a,e):a,m,L,C;for(s===void 0?(m=1,C=l[n[0]]):(m=0,C=s);m<o;m++)L=n[m],C=i(C,l[L],L,l);return C};function a0(c){let l=[],a=0,s=c.length;for(;a<s;){let e=c.charCodeAt(a++);if(e>=55296&&e<=56319&&a<s){let n=c.charCodeAt(a++);(n&64512)==56320?l.push(((e&1023)<<10)+(n&1023)+65536):(l.push(e),a--)}else l.push(e)}return l}function s2(c){let l=a0(c);return l.length===1?l[0].toString(16):null}function s0(c,l){let a=c.length,s=c.charCodeAt(l),e;return s>=55296&&s<=56319&&a>l+1&&(e=c.charCodeAt(l+1),e>=56320&&e<=57343)?(s-55296)*1024+e-56320+65536:s}function s3(c){return Object.keys(c).reduce((l,a)=>{let s=c[a];return!!s.icon?l[s.iconName]=s.icon:l[a]=s,l},{})}function e2(c,l){let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},{skipHooks:s=!1}=a,e=s3(l);typeof O.hooks.addPack=="function"&&!s?O.hooks.addPack(c,s3(l)):O.styles[c]=z(z({},O.styles[c]||{}),e),c==="fas"&&e2("fa",l)}var{styles:$,shims:e0}=O,n0={[x]:Object.values(J[x]),[y]:Object.values(J[y]),[A]:Object.values(J[A])},u2=null,q3={},D3={},_3={},B3={},R3={},o0={[x]:Object.keys(Q[x]),[y]:Object.keys(Q[y]),[A]:Object.keys(Q[A])};function i0(c){return~Z4.indexOf(c)}function t0(c,l){let a=l.split("-"),s=a[0],e=a.slice(1).join("-");return s===c&&e!==""&&!i0(e)?e:null}var I3=()=>{let c=s=>X1($,(e,n,o)=>(e[o]=X1(n,s,{}),e),{});q3=c((s,e,n)=>(e[3]&&(s[e[3]]=n),e[2]&&e[2].filter(i=>typeof i=="number").forEach(i=>{s[i.toString(16)]=n}),s)),D3=c((s,e,n)=>(s[n]=n,e[2]&&e[2].filter(i=>typeof i=="string").forEach(i=>{s[i]=n}),s)),R3=c((s,e,n)=>{let o=e[2];return s[n]=n,o.forEach(i=>{s[i]=n}),s});let l="far"in $||M.autoFetchSvg,a=X1(e0,(s,e)=>{let n=e[0],o=e[1],i=e[2];return o==="far"&&!l&&(o="fas"),typeof n=="string"&&(s.names[n]={prefix:o,iconName:i}),typeof n=="number"&&(s.unicodes[n.toString(16)]={prefix:o,iconName:i}),s},{names:{},unicodes:{}});_3=a.names,B3=a.unicodes,u2=O1(M.styleDefault,{family:M.familyDefault})};W4(c=>{u2=O1(c.styleDefault,{family:M.familyDefault})});I3();function d2(c,l){return(q3[c]||{})[l]}function f0(c,l){return(D3[c]||{})[l]}function G(c,l){return(R3[c]||{})[l]}function Z3(c){return _3[c]||{prefix:null,iconName:null}}function r0(c){let l=B3[c],a=d2("fas",c);return l||(a?{prefix:"fas",iconName:a}:null)||{prefix:null,iconName:null}}function j(){return u2}var x2=()=>({prefix:null,iconName:null,rest:[]});function O1(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{family:a=x}=l,s=Q[a][c],e=M1[a][c]||M1[a][s],n=c in O.styles?c:null;return e||n||null}var z0={[x]:Object.keys(J[x]),[y]:Object.keys(J[y]),[A]:Object.keys(J[A])};function T1(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{skipLookups:a=!1}=l,s={[x]:"".concat(M.cssPrefix,"-").concat(x),[y]:"".concat(M.cssPrefix,"-").concat(y),[A]:"".concat(M.cssPrefix,"-").concat(A)},e=null,n=x,o=u4.filter(m=>m!==b3);o.forEach(m=>{(c.includes(s[m])||c.some(L=>z0[m].includes(L)))&&(n=m)});let i=c.reduce((m,L)=>{let C=t0(M.cssPrefix,L);if($[L]?(L=n0[n].includes(L)?D4[n][L]:L,e=L,m.prefix=L):o0[n].indexOf(L)>-1?(e=L,m.prefix=O1(L,{family:n})):C?m.iconName=C:L!==M.replacementClass&&!o.some(u=>L===s[u])&&m.rest.push(L),!a&&m.prefix&&m.iconName){let u=e==="fa"?Z3(m.iconName):{},h=G(m.prefix,m.iconName);u.prefix&&(e=null),m.iconName=u.iconName||h||m.iconName,m.prefix=u.prefix||m.prefix,m.prefix==="far"&&!$.far&&$.fas&&!M.autoFetchSvg&&(m.prefix="fas")}return m},x2());return(c.includes("fa-brands")||c.includes("fab"))&&(i.prefix="fab"),(c.includes("fa-duotone")||c.includes("fad"))&&(i.prefix="fad"),!i.prefix&&n===y&&($.fass||M.autoFetchSvg)&&(i.prefix="fass",i.iconName=G(i.prefix,i.iconName)||i.iconName),!i.prefix&&n===A&&($.fasds||M.autoFetchSvg)&&(i.prefix="fasds",i.iconName=G(i.prefix,i.iconName)||i.iconName),(i.prefix==="fa"||e==="fa")&&(i.prefix=j()||"fas"),i}var n2=class{constructor(){this.definitions={}}add(){for(var l=arguments.length,a=new Array(l),s=0;s<l;s++)a[s]=arguments[s];let e=a.reduce(this._pullDefinitions,{});Object.keys(e).forEach(n=>{this.definitions[n]=z(z({},this.definitions[n]||{}),e[n]),e2(n,e[n]);let o=J[x][n];o&&e2(o,e[n]),I3()})}reset(){this.definitions={}}_pullDefinitions(l,a){let s=a.prefix&&a.iconName&&a.icon?{0:a}:a;return Object.keys(s).map(e=>{let{prefix:n,iconName:o,icon:i}=s[e],m=i[2];l[n]||(l[n]={}),m.length>0&&m.forEach(L=>{typeof L=="string"&&(l[n][L]=i)}),l[n][o]=i}),l}},e3=[],n1={},o1={},m0=Object.keys(o1);function L0(c,l){let{mixoutsTo:a}=l;return e3=c,n1={},Object.keys(o1).forEach(s=>{m0.indexOf(s)===-1&&delete o1[s]}),e3.forEach(s=>{let e=s.mixout?s.mixout():{};if(Object.keys(e).forEach(n=>{typeof e[n]=="function"&&(a[n]=e[n]),typeof e[n]=="object"&&Object.keys(e[n]).forEach(o=>{a[n]||(a[n]={}),a[n][o]=e[n][o]})}),s.hooks){let n=s.hooks();Object.keys(n).forEach(o=>{n1[o]||(n1[o]=[]),n1[o].push(n[o])})}s.provides&&s.provides(o1)}),a}function o2(c,l){for(var a=arguments.length,s=new Array(a>2?a-2:0),e=2;e<a;e++)s[e-2]=arguments[e];return(n1[c]||[]).forEach(o=>{l=o.apply(null,[l,...s])}),l}function l1(c){for(var l=arguments.length,a=new Array(l>1?l-1:0),s=1;s<l;s++)a[s-1]=arguments[s];(n1[c]||[]).forEach(n=>{n.apply(null,a)})}function Y(){let c=arguments[0],l=Array.prototype.slice.call(arguments,1);return o1[c]?o1[c].apply(null,l):void 0}function i2(c){c.prefix==="fa"&&(c.prefix="fas");let{iconName:l}=c,a=c.prefix||j();if(l)return l=G(a,l)||l,a3(U3.definitions,a,l)||a3(O.styles,a,l)}var U3=new n2,M0=()=>{M.autoReplaceSvg=!1,M.observeMutations=!1,l1("noAuto")},C0={i2svg:function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return R?(l1("beforeI2svg",c),Y("pseudoElements2svg",c),Y("i2svg",c)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:l}=c;M.autoReplaceSvg===!1&&(M.autoReplaceSvg=!0),M.observeMutations=!0,c0(()=>{h0({autoReplaceSvgRoot:l}),l1("watch",c)})}},p0={icon:c=>{if(c===null)return null;if(typeof c=="object"&&c.prefix&&c.iconName)return{prefix:c.prefix,iconName:G(c.prefix,c.iconName)||c.iconName};if(Array.isArray(c)&&c.length===2){let l=c[1].indexOf("fa-")===0?c[1].slice(3):c[1],a=O1(c[0]);return{prefix:a,iconName:G(a,l)||l}}if(typeof c=="string"&&(c.indexOf("".concat(M.cssPrefix,"-"))>-1||c.match(_4))){let l=T1(c.split(" "),{skipLookups:!0});return{prefix:l.prefix||j(),iconName:G(l.prefix,l.iconName)||l.iconName}}if(typeof c=="string"){let l=j();return{prefix:l,iconName:G(l,c)||c}}}},w={noAuto:M0,config:M,dom:C0,parse:p0,library:U3,findIconDefinition:i2,toHtml:h1},h0=function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:l=d}=c;(Object.keys(O.styles).length>0||M.autoFetchSvg)&&R&&M.autoReplaceSvg&&w.dom.i2svg({node:l})};function q1(c,l){return Object.defineProperty(c,"abstract",{get:l}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(a=>h1(a))}}),Object.defineProperty(c,"node",{get:function(){if(!R)return;let a=d.createElement("div");return a.innerHTML=c.html,a.children}}),c}function u0(c){let{children:l,main:a,mask:s,attributes:e,styles:n,transform:o}=c;if(h2(o)&&a.found&&!s.found){let{width:i,height:m}=a,L={x:i/m/2,y:.5};e.style=E1(g(z({},n),{"transform-origin":"".concat(L.x+o.x/16,"em ").concat(L.y+o.y/16,"em")}))}return[{tag:"svg",attributes:e,children:l}]}function d0(c){let{prefix:l,iconName:a,children:s,attributes:e,symbol:n}=c,o=n===!0?"".concat(l,"-").concat(M.cssPrefix,"-").concat(a):n;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:g(z({},e),{id:o}),children:s}]}]}function g2(c){let{icons:{main:l,mask:a},prefix:s,iconName:e,transform:n,symbol:o,title:i,maskId:m,titleId:L,extra:C,watchable:u=!1}=c,{width:h,height:v}=a.found?a:l,I=s==="fak",X=[M.replacementClass,e?"".concat(M.cssPrefix,"-").concat(e):""].filter(s1=>C.classes.indexOf(s1)===-1).filter(s1=>s1!==""||!!s1).concat(C.classes).join(" "),P={children:[],attributes:g(z({},C.attributes),{"data-prefix":s,"data-icon":e,class:X,role:C.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(h," ").concat(v)})},q=I&&!~C.classes.indexOf("fa-fw")?{width:"".concat(h/v*16*.0625,"em")}:{};u&&(P.attributes[c1]=""),i&&(P.children.push({tag:"title",attributes:{id:P.attributes["aria-labelledby"]||"title-".concat(L||C1())},children:[i]}),delete P.attributes.title);let H=g(z({},P),{prefix:s,iconName:e,main:l,mask:a,maskId:m,transform:n,symbol:o,styles:z(z({},q),C.styles)}),{children:F,attributes:a1}=a.found&&l.found?Y("generateAbstractMask",H)||{children:[],attributes:{}}:Y("generateAbstractIcon",H)||{children:[],attributes:{}};return H.children=F,H.attributes=a1,o?d0(H):u0(H)}function n3(c){let{content:l,width:a,height:s,transform:e,title:n,extra:o,watchable:i=!1}=c,m=g(z(z({},o.attributes),n?{title:n}:{}),{class:o.classes.join(" ")});i&&(m[c1]="");let L=z({},o.styles);h2(e)&&(L.transform=$4({transform:e,startCentered:!0,width:a,height:s}),L["-webkit-transform"]=L.transform);let C=E1(L);C.length>0&&(m.style=C);let u=[];return u.push({tag:"span",attributes:m,children:[l]}),n&&u.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),u}function x0(c){let{content:l,title:a,extra:s}=c,e=g(z(z({},s.attributes),a?{title:a}:{}),{class:s.classes.join(" ")}),n=E1(s.styles);n.length>0&&(e.style=n);let o=[];return o.push({tag:"span",attributes:e,children:[l]}),a&&o.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),o}var{styles:K1}=O;function t2(c){let l=c[0],a=c[1],[s]=c.slice(4),e=null;return Array.isArray(s)?e={tag:"g",attributes:{class:"".concat(M.cssPrefix,"-").concat(j1.GROUP)},children:[{tag:"path",attributes:{class:"".concat(M.cssPrefix,"-").concat(j1.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(M.cssPrefix,"-").concat(j1.PRIMARY),fill:"currentColor",d:s[1]}}]}:e={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:l,height:a,icon:e}}var g0={found:!1,width:512,height:512};function N0(c,l){!y3&&!M.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(l,'" is missing.'))}function f2(c,l){let a=l;return l==="fa"&&M.styleDefault!==null&&(l=j()),new Promise((s,e)=>{if(a==="fa"){let n=Z3(c)||{};c=n.iconName||c,l=n.prefix||l}if(c&&l&&K1[l]&&K1[l][c]){let n=K1[l][c];return s(t2(n))}N0(c,l),s(g(z({},g0),{icon:M.showMissingIcons&&c?Y("missingIconAbstract")||{}:{}}))})}var o3=()=>{},r2=M.measurePerformance&&A1&&A1.mark&&A1.measure?A1:{mark:o3,measure:o3},z1='FA "6.6.0"',b0=c=>(r2.mark("".concat(z1," ").concat(c," begins")),()=>G3(c)),G3=c=>{r2.mark("".concat(z1," ").concat(c," ends")),r2.measure("".concat(z1," ").concat(c),"".concat(z1," ").concat(c," begins"),"".concat(z1," ").concat(c," ends"))},N2={begin:b0,end:G3},w1=()=>{};function i3(c){return typeof(c.getAttribute?c.getAttribute(c1):null)=="string"}function v0(c){let l=c.getAttribute?c.getAttribute(M2):null,a=c.getAttribute?c.getAttribute(C2):null;return l&&a}function S0(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(M.replacementClass)}function k0(){return M.autoReplaceSvg===!0?V1.replace:V1[M.autoReplaceSvg]||V1.replace}function H0(c){return d.createElementNS("http://www.w3.org/2000/svg",c)}function y0(c){return d.createElement(c)}function W3(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{ceFn:a=c.tag==="svg"?H0:y0}=l;if(typeof c=="string")return d.createTextNode(c);let s=a(c.tag);return Object.keys(c.attributes||[]).forEach(function(n){s.setAttribute(n,c.attributes[n])}),(c.children||[]).forEach(function(n){s.appendChild(W3(n,{ceFn:a}))}),s}function A0(c){let l=" ".concat(c.outerHTML," ");return l="".concat(l,"Font Awesome fontawesome.com "),l}var V1={replace:function(c){let l=c[0];if(l.parentNode)if(c[1].forEach(a=>{l.parentNode.insertBefore(W3(a),l)}),l.getAttribute(c1)===null&&M.keepOriginalSource){let a=d.createComment(A0(l));l.parentNode.replaceChild(a,l)}else l.remove()},nest:function(c){let l=c[0],a=c[1];if(~p2(l).indexOf(M.replacementClass))return V1.replace(c);let s=new RegExp("".concat(M.cssPrefix,"-.*"));if(delete a[0].attributes.id,a[0].attributes.class){let n=a[0].attributes.class.split(" ").reduce((o,i)=>(i===M.replacementClass||i.match(s)?o.toSvg.push(i):o.toNode.push(i),o),{toNode:[],toSvg:[]});a[0].attributes.class=n.toSvg.join(" "),n.toNode.length===0?l.removeAttribute("class"):l.setAttribute("class",n.toNode.join(" "))}let e=a.map(n=>h1(n)).join(`
`);l.setAttribute(c1,""),l.innerHTML=e}};function t3(c){c()}function j3(c,l){let a=typeof l=="function"?l:w1;if(c.length===0)a();else{let s=t3;M.mutateApproach===T4&&(s=W.requestAnimationFrame||t3),s(()=>{let e=k0(),n=N2.begin("mutate");c.map(e),n(),a()})}}var b2=!1;function Y3(){b2=!0}function z2(){b2=!1}var F1=null;function f3(c){if(!$2||!M.observeMutations)return;let{treeCallback:l=w1,nodeCallback:a=w1,pseudoElementsCallback:s=w1,observeMutationsRoot:e=d}=c;F1=new $2(n=>{if(b2)return;let o=j();f1(n).forEach(i=>{if(i.type==="childList"&&i.addedNodes.length>0&&!i3(i.addedNodes[0])&&(M.searchPseudoElements&&s(i.target),l(i.target)),i.type==="attributes"&&i.target.parentNode&&M.searchPseudoElements&&s(i.target.parentNode),i.type==="attributes"&&i3(i.target)&&~I4.indexOf(i.attributeName))if(i.attributeName==="class"&&v0(i.target)){let{prefix:m,iconName:L}=T1(p2(i.target));i.target.setAttribute(M2,m||o),L&&i.target.setAttribute(C2,L)}else S0(i.target)&&a(i.target)})}),R&&F1.observe(e,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function w0(){F1&&F1.disconnect()}function V0(c){let l=c.getAttribute("style"),a=[];return l&&(a=l.split(";").reduce((s,e)=>{let n=e.split(":"),o=n[0],i=n.slice(1);return o&&i.length>0&&(s[o]=i.join(":").trim()),s},{})),a}function P0(c){let l=c.getAttribute("data-prefix"),a=c.getAttribute("data-icon"),s=c.innerText!==void 0?c.innerText.trim():"",e=T1(p2(c));return e.prefix||(e.prefix=j()),l&&a&&(e.prefix=l,e.iconName=a),e.iconName&&e.prefix||(e.prefix&&s.length>0&&(e.iconName=f0(e.prefix,c.innerText)||d2(e.prefix,s2(c.innerText))),!e.iconName&&M.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(e.iconName=c.firstChild.data)),e}function F0(c){let l=f1(c.attributes).reduce((e,n)=>(e.name!=="class"&&e.name!=="style"&&(e[n.name]=n.value),e),{}),a=c.getAttribute("title"),s=c.getAttribute("data-fa-title-id");return M.autoA11y&&(a?l["aria-labelledby"]="".concat(M.replacementClass,"-title-").concat(s||C1()):(l["aria-hidden"]="true",l.focusable="false")),l}function E0(){return{iconName:null,title:null,titleId:null,prefix:null,transform:E,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function r3(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},{iconName:a,prefix:s,rest:e}=P0(c),n=F0(c),o=o2("parseNodeAttributes",{},c),i=l.styleParser?V0(c):[];return z({iconName:a,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:s,transform:E,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:e,styles:i,attributes:n}},o)}var{styles:O0}=O;function X3(c){let l=M.autoReplaceSvg==="nest"?r3(c,{styleParser:!1}):r3(c);return~l.extra.classes.indexOf(V3)?Y("generateLayersText",c,l):Y("generateSvgReplacementMutation",c,l)}var T=new Set;A3.map(c=>{T.add("fa-".concat(c))});Object.keys(Q[x]).map(T.add.bind(T));Object.keys(Q[y]).map(T.add.bind(T));Object.keys(Q[A]).map(T.add.bind(T));T=[...T];function z3(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!R)return Promise.resolve();let a=d.documentElement.classList,s=C=>a.add("".concat(c3,"-").concat(C)),e=C=>a.remove("".concat(c3,"-").concat(C)),n=M.autoFetchSvg?T:A3.map(C=>"fa-".concat(C)).concat(Object.keys(O0));n.includes("fa")||n.push("fa");let o=[".".concat(V3,":not([").concat(c1,"])")].concat(n.map(C=>".".concat(C,":not([").concat(c1,"])"))).join(", ");if(o.length===0)return Promise.resolve();let i=[];try{i=f1(c.querySelectorAll(o))}catch{}if(i.length>0)s("pending"),e("complete");else return Promise.resolve();let m=N2.begin("onTree"),L=i.reduce((C,u)=>{try{let h=X3(u);h&&C.push(h)}catch(h){y3||h.name==="MissingIcon"&&console.error(h)}return C},[]);return new Promise((C,u)=>{Promise.all(L).then(h=>{j3(h,()=>{s("active"),s("complete"),e("pending"),typeof l=="function"&&l(),m(),C()})}).catch(h=>{m(),u(h)})})}function T0(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;X3(c).then(a=>{a&&j3([a],l)})}function q0(c){return function(l){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=(l||{}).icon?l:i2(l||{}),{mask:e}=a;return e&&(e=(e||{}).icon?e:i2(e||{})),c(s,g(z({},a),{mask:e}))}}var D0=function(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:a=E,symbol:s=!1,mask:e=null,maskId:n=null,title:o=null,titleId:i=null,classes:m=[],attributes:L={},styles:C={}}=l;if(!c)return;let{prefix:u,iconName:h,icon:v}=c;return q1(z({type:"icon"},c),()=>(l1("beforeDOMElementCreation",{iconDefinition:c,params:l}),M.autoA11y&&(o?L["aria-labelledby"]="".concat(M.replacementClass,"-title-").concat(i||C1()):(L["aria-hidden"]="true",L.focusable="false")),g2({icons:{main:t2(v),mask:e?t2(e.icon):{found:!1,width:null,height:null,icon:{}}},prefix:u,iconName:h,transform:z(z({},E),a),symbol:s,title:o,maskId:n,titleId:i,extra:{attributes:L,styles:C,classes:m}})))},_0={mixout(){return{icon:q0(D0)}},hooks(){return{mutationObserverCallbacks(c){return c.treeCallback=z3,c.nodeCallback=T0,c}}},provides(c){c.i2svg=function(l){let{node:a=d,callback:s=()=>{}}=l;return z3(a,s)},c.generateSvgReplacementMutation=function(l,a){let{iconName:s,title:e,titleId:n,prefix:o,transform:i,symbol:m,mask:L,maskId:C,extra:u}=a;return new Promise((h,v)=>{Promise.all([f2(s,o),L.iconName?f2(L.iconName,L.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(I=>{let[X,P]=I;h([l,g2({icons:{main:X,mask:P},prefix:o,iconName:s,transform:i,symbol:m,maskId:C,title:e,titleId:n,extra:u,watchable:!0})])}).catch(v)})},c.generateAbstractIcon=function(l){let{children:a,attributes:s,main:e,transform:n,styles:o}=l,i=E1(o);i.length>0&&(s.style=i);let m;return h2(n)&&(m=Y("generateAbstractTransformGrouping",{main:e,transform:n,containerWidth:e.width,iconWidth:e.width})),a.push(m||e.icon),{children:a,attributes:s}}}},B0={mixout(){return{layer(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{classes:a=[]}=l;return q1({type:"layer"},()=>{l1("beforeDOMElementCreation",{assembler:c,params:l});let s=[];return c(e=>{Array.isArray(e)?e.map(n=>{s=s.concat(n.abstract)}):s=s.concat(e.abstract)}),[{tag:"span",attributes:{class:["".concat(M.cssPrefix,"-layers"),...a].join(" ")},children:s}]})}}}},R0={mixout(){return{counter(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{title:a=null,classes:s=[],attributes:e={},styles:n={}}=l;return q1({type:"counter",content:c},()=>(l1("beforeDOMElementCreation",{content:c,params:l}),x0({content:c.toString(),title:a,extra:{attributes:e,styles:n,classes:["".concat(M.cssPrefix,"-layers-counter"),...s]}})))}}}},I0={mixout(){return{text(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:a=E,title:s=null,classes:e=[],attributes:n={},styles:o={}}=l;return q1({type:"text",content:c},()=>(l1("beforeDOMElementCreation",{content:c,params:l}),n3({content:c,transform:z(z({},E),a),title:s,extra:{attributes:n,styles:o,classes:["".concat(M.cssPrefix,"-layers-text"),...e]}})))}}},provides(c){c.generateLayersText=function(l,a){let{title:s,transform:e,extra:n}=a,o=null,i=null;if(N3){let m=parseInt(getComputedStyle(l).fontSize,10),L=l.getBoundingClientRect();o=L.width/m,i=L.height/m}return M.autoA11y&&!s&&(n.attributes["aria-hidden"]="true"),Promise.resolve([l,n3({content:l.innerHTML,width:o,height:i,transform:e,title:s,extra:n,watchable:!0})])}}},Z0=new RegExp('"',"ug"),m3=[1105920,1112319],L3=z(z(z({FontAwesome:{normal:"fas",400:"fas"}},v4),b4),P4),m2=Object.keys(L3).reduce((c,l)=>(c[l.toLowerCase()]=L3[l],c),{}),U0=Object.keys(m2).reduce((c,l)=>{let a=m2[l];return c[l]=a[900]||[...Object.entries(a)][0][1],c},{});function G0(c){let l=c.replace(Z0,""),a=s0(l,0),s=a>=m3[0]&&a<=m3[1],e=l.length===2?l[0]===l[1]:!1;return{value:s2(e?l[0]:l),isSecondary:s||e}}function W0(c,l){let a=c.replace(/^['"]|['"]$/g,"").toLowerCase(),s=parseInt(l),e=isNaN(s)?"normal":s;return(m2[a]||{})[e]||U0[a]}function M3(c,l){let a="".concat(O4).concat(l.replace(":","-"));return new Promise((s,e)=>{if(c.getAttribute(a)!==null)return s();let o=f1(c.children).filter(h=>h.getAttribute(J1)===l)[0],i=W.getComputedStyle(c,l),m=i.getPropertyValue("font-family"),L=m.match(B4),C=i.getPropertyValue("font-weight"),u=i.getPropertyValue("content");if(o&&!L)return c.removeChild(o),s();if(L&&u!=="none"&&u!==""){let h=i.getPropertyValue("content"),v=W0(m,C),{value:I,isSecondary:X}=G0(h),P=L[0].startsWith("FontAwesome"),q=d2(v,I),H=q;if(P){let F=r0(I);F.iconName&&F.prefix&&(q=F.iconName,v=F.prefix)}if(q&&!X&&(!o||o.getAttribute(M2)!==v||o.getAttribute(C2)!==H)){c.setAttribute(a,H),o&&c.removeChild(o);let F=E0(),{extra:a1}=F;a1.attributes[J1]=l,f2(q,v).then(s1=>{let m4=g2(g(z({},F),{icons:{main:s1,mask:x2()},prefix:v,iconName:H,extra:a1,watchable:!0})),U1=d.createElementNS("http://www.w3.org/2000/svg","svg");l==="::before"?c.insertBefore(U1,c.firstChild):c.appendChild(U1),U1.outerHTML=m4.map(L4=>h1(L4)).join(`
`),c.removeAttribute(a),s()}).catch(e)}else s()}else s()})}function j0(c){return Promise.all([M3(c,"::before"),M3(c,"::after")])}function Y0(c){return c.parentNode!==document.head&&!~q4.indexOf(c.tagName.toUpperCase())&&!c.getAttribute(J1)&&(!c.parentNode||c.parentNode.tagName!=="svg")}function C3(c){if(R)return new Promise((l,a)=>{let s=f1(c.querySelectorAll("*")).filter(Y0).map(j0),e=N2.begin("searchPseudoElements");Y3(),Promise.all(s).then(()=>{e(),z2(),l()}).catch(()=>{e(),z2(),a()})})}var X0={hooks(){return{mutationObserverCallbacks(c){return c.pseudoElementsCallback=C3,c}}},provides(c){c.pseudoElements2svg=function(l){let{node:a=d}=l;M.searchPseudoElements&&C3(a)}}},p3=!1,K0={mixout(){return{dom:{unwatch(){Y3(),p3=!0}}}},hooks(){return{bootstrap(){f3(o2("mutationObserverCallbacks",{}))},noAuto(){w0()},watch(c){let{observeMutationsRoot:l}=c;p3?z2():f3(o2("mutationObserverCallbacks",{observeMutationsRoot:l}))}}}},h3=c=>{let l={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return c.toLowerCase().split(" ").reduce((a,s)=>{let e=s.toLowerCase().split("-"),n=e[0],o=e.slice(1).join("-");if(n&&o==="h")return a.flipX=!0,a;if(n&&o==="v")return a.flipY=!0,a;if(o=parseFloat(o),isNaN(o))return a;switch(n){case"grow":a.size=a.size+o;break;case"shrink":a.size=a.size-o;break;case"left":a.x=a.x-o;break;case"right":a.x=a.x+o;break;case"up":a.y=a.y-o;break;case"down":a.y=a.y+o;break;case"rotate":a.rotate=a.rotate+o;break}return a},l)},$0={mixout(){return{parse:{transform:c=>h3(c)}}},hooks(){return{parseNodeAttributes(c,l){let a=l.getAttribute("data-fa-transform");return a&&(c.transform=h3(a)),c}}},provides(c){c.generateAbstractTransformGrouping=function(l){let{main:a,transform:s,containerWidth:e,iconWidth:n}=l,o={transform:"translate(".concat(e/2," 256)")},i="translate(".concat(s.x*32,", ").concat(s.y*32,") "),m="scale(".concat(s.size/16*(s.flipX?-1:1),", ").concat(s.size/16*(s.flipY?-1:1),") "),L="rotate(".concat(s.rotate," 0 0)"),C={transform:"".concat(i," ").concat(m," ").concat(L)},u={transform:"translate(".concat(n/2*-1," -256)")},h={outer:o,inner:C,path:u};return{tag:"g",attributes:z({},h.outer),children:[{tag:"g",attributes:z({},h.inner),children:[{tag:a.icon.tag,children:a.icon.children,attributes:z(z({},a.icon.attributes),h.path)}]}]}}}},$1={x:0,y:0,width:"100%",height:"100%"};function u3(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return c.attributes&&(c.attributes.fill||l)&&(c.attributes.fill="black"),c}function Q0(c){return c.tag==="g"?c.children:[c]}var J0={hooks(){return{parseNodeAttributes(c,l){let a=l.getAttribute("data-fa-mask"),s=a?T1(a.split(" ").map(e=>e.trim())):x2();return s.prefix||(s.prefix=j()),c.mask=s,c.maskId=l.getAttribute("data-fa-mask-id"),c}}},provides(c){c.generateAbstractMask=function(l){let{children:a,attributes:s,main:e,mask:n,maskId:o,transform:i}=l,{width:m,icon:L}=e,{width:C,icon:u}=n,h=K4({transform:i,containerWidth:C,iconWidth:m}),v={tag:"rect",attributes:g(z({},$1),{fill:"white"})},I=L.children?{children:L.children.map(u3)}:{},X={tag:"g",attributes:z({},h.inner),children:[u3(z({tag:L.tag,attributes:z(z({},L.attributes),h.path)},I))]},P={tag:"g",attributes:z({},h.outer),children:[X]},q="mask-".concat(o||C1()),H="clip-".concat(o||C1()),F={tag:"mask",attributes:g(z({},$1),{id:q,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[v,P]},a1={tag:"defs",children:[{tag:"clipPath",attributes:{id:H},children:Q0(u)},F]};return a.push(a1,{tag:"rect",attributes:z({fill:"currentColor","clip-path":"url(#".concat(H,")"),mask:"url(#".concat(q,")")},$1)}),{children:a,attributes:s}}}},c6={provides(c){let l=!1;W.matchMedia&&(l=W.matchMedia("(prefers-reduced-motion: reduce)").matches),c.missingIconAbstract=function(){let a=[],s={fill:"currentColor"},e={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};a.push({tag:"path",attributes:g(z({},s),{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});let n=g(z({},e),{attributeName:"opacity"}),o={tag:"circle",attributes:g(z({},s),{cx:"256",cy:"364",r:"28"}),children:[]};return l||o.children.push({tag:"animate",attributes:g(z({},e),{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:g(z({},n),{values:"1;0;1;1;0;1;"})}),a.push(o),a.push({tag:"path",attributes:g(z({},s),{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:l?[]:[{tag:"animate",attributes:g(z({},n),{values:"1;0;0;0;0;1;"})}]}),l||a.push({tag:"path",attributes:g(z({},s),{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:g(z({},n),{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:a}}}},l6={hooks(){return{parseNodeAttributes(c,l){let a=l.getAttribute("data-fa-symbol"),s=a===null?!1:a===""?!0:a;return c.symbol=s,c}}}},a6=[J4,_0,B0,R0,I0,X0,K0,$0,J0,c6,l6];L0(a6,{mixoutsTo:w});var F6=w.noAuto,K3=w.config,E6=w.library,$3=w.dom,Q3=w.parse,O6=w.findIconDefinition,T6=w.toHtml,J3=w.icon,q6=w.layer,s6=w.text,e6=w.counter;var n6=["*"],o6=c=>{throw new Error(`Could not find icon with iconName=${c.iconName} and prefix=${c.prefix} in the icon library.`)},i6=()=>{throw new Error("Property `icon` is required for `fa-icon`/`fa-duotone-icon` components.")},t6=c=>{let l={[`fa-${c.animation}`]:c.animation!=null&&!c.animation.startsWith("spin"),"fa-spin":c.animation==="spin"||c.animation==="spin-reverse","fa-spin-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-spin-reverse":c.animation==="spin-reverse"||c.animation==="spin-pulse-reverse","fa-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-fw":c.fixedWidth,"fa-border":c.border,"fa-inverse":c.inverse,"fa-layers-counter":c.counter,"fa-flip-horizontal":c.flip==="horizontal"||c.flip==="both","fa-flip-vertical":c.flip==="vertical"||c.flip==="both",[`fa-${c.size}`]:c.size!==null,[`fa-rotate-${c.rotate}`]:c.rotate!==null,[`fa-pull-${c.pull}`]:c.pull!==null,[`fa-stack-${c.stackItemSize}`]:c.stackItemSize!=null};return Object.keys(l).map(a=>l[a]?a:null).filter(a=>a)},v2=new WeakSet,c4="fa-auto-css";function f6(c,l){if(!l.autoAddCss||v2.has(c))return;if(c.getElementById(c4)!=null){l.autoAddCss=!1,v2.add(c);return}let a=c.createElement("style");a.setAttribute("type","text/css"),a.setAttribute("id",c4),a.innerHTML=$3.css();let s=c.head.childNodes,e=null;for(let n=s.length-1;n>-1;n--){let o=s[n],i=o.nodeName.toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(e=o)}c.head.insertBefore(a,e),l.autoAddCss=!1,v2.add(c)}var r6=c=>c.prefix!==void 0&&c.iconName!==void 0,z6=(c,l)=>r6(c)?c:Array.isArray(c)&&c.length===2?{prefix:c[0],iconName:c[1]}:{prefix:l,iconName:c},m6=(()=>{class c{constructor(){this.defaultPrefix="fas",this.fallbackIcon=null,this._autoAddCss=!0}set autoAddCss(a){K3.autoAddCss=a,this._autoAddCss=a}get autoAddCss(){return this._autoAddCss}static{this.\u0275fac=function(s){return new(s||c)}}static{this.\u0275prov=G1({token:c,factory:c.\u0275fac,providedIn:"root"})}}return c})(),L6=(()=>{class c{constructor(){this.definitions={}}addIcons(...a){for(let s of a){s.prefix in this.definitions||(this.definitions[s.prefix]={}),this.definitions[s.prefix][s.iconName]=s;for(let e of s.icon[2])typeof e=="string"&&(this.definitions[s.prefix][e]=s)}}addIconPacks(...a){for(let s of a){let e=Object.keys(s).map(n=>s[n]);this.addIcons(...e)}}getIconDefinition(a,s){return a in this.definitions&&s in this.definitions[a]?this.definitions[a][s]:null}static{this.\u0275fac=function(s){return new(s||c)}}static{this.\u0275prov=G1({token:c,factory:c.\u0275fac,providedIn:"root"})}}return c})(),M6=(()=>{class c{constructor(){this.stackItemSize="1x"}ngOnChanges(a){if("size"in a)throw new Error('fa-icon is not allowed to customize size when used inside fa-stack. Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.')}static{this.\u0275fac=function(s){return new(s||c)}}static{this.\u0275dir=y2({type:c,selectors:[["fa-icon","stackItemSize",""],["fa-duotone-icon","stackItemSize",""]],inputs:{stackItemSize:"stackItemSize",size:"size"},standalone:!0,features:[u1]})}}return c})(),C6=(()=>{class c{constructor(a,s){this.renderer=a,this.elementRef=s}ngOnInit(){this.renderer.addClass(this.elementRef.nativeElement,"fa-stack")}ngOnChanges(a){"size"in a&&(a.size.currentValue!=null&&this.renderer.addClass(this.elementRef.nativeElement,`fa-${a.size.currentValue}`),a.size.previousValue!=null&&this.renderer.removeClass(this.elementRef.nativeElement,`fa-${a.size.previousValue}`))}static{this.\u0275fac=function(s){return new(s||c)(V(V2),V(A2))}}static{this.\u0275cmp=N({type:c,selectors:[["fa-stack"]],inputs:{size:"size"},standalone:!0,features:[u1,b],ngContentSelectors:n6,decls:1,vars:0,template:function(s,e){s&1&&(E2(),O2(0))},encapsulation:2})}}return c})(),D1=(()=>{class c{constructor(a,s,e,n,o){this.sanitizer=a,this.config=s,this.iconLibrary=e,this.stackItem=n,this.document=k2(B2),o!=null&&n==null&&console.error('FontAwesome: fa-icon and fa-duotone-icon elements must specify stackItemSize attribute when wrapped into fa-stack. Example: <fa-icon stackItemSize="2x"></fa-icon>.')}ngOnChanges(a){if(this.icon==null&&this.config.fallbackIcon==null){i6();return}if(a){let s=this.findIconDefinition(this.icon??this.config.fallbackIcon);if(s!=null){let e=this.buildParams();f6(this.document,this.config);let n=J3(s,e);this.renderedIconHTML=this.sanitizer.bypassSecurityTrustHtml(n.html.join(`
`))}}}render(){this.ngOnChanges({})}findIconDefinition(a){let s=z6(a,this.config.defaultPrefix);if("icon"in s)return s;let e=this.iconLibrary.getIconDefinition(s.prefix,s.iconName);return e??(o6(s),null)}buildParams(){let a={flip:this.flip,animation:this.animation,border:this.border,inverse:this.inverse,size:this.size||null,pull:this.pull||null,rotate:this.rotate||null,fixedWidth:typeof this.fixedWidth=="boolean"?this.fixedWidth:this.config.fixedWidth,stackItemSize:this.stackItem!=null?this.stackItem.stackItemSize:null},s=typeof this.transform=="string"?Q3.transform(this.transform):this.transform;return{title:this.title,transform:s,classes:t6(a),mask:this.mask!=null?this.findIconDefinition(this.mask):null,symbol:this.symbol,attributes:{role:this.a11yRole}}}static{this.\u0275fac=function(s){return new(s||c)(V(Z2),V(m6),V(L6),V(M6,8),V(C6,8))}}static{this.\u0275cmp=N({type:c,selectors:[["fa-icon"]],hostAttrs:[1,"ng-fa-icon"],hostVars:2,hostBindings:function(s,e){s&2&&(F2("innerHTML",e.renderedIconHTML,w2),P2("title",e.title))},inputs:{icon:"icon",title:"title",animation:"animation",mask:"mask",flip:"flip",size:"size",pull:"pull",border:"border",inverse:"inverse",symbol:"symbol",rotate:"rotate",fixedWidth:"fixedWidth",transform:"transform",a11yRole:"a11yRole"},standalone:!0,features:[u1,b],decls:0,vars:0,template:function(s,e){},encapsulation:2})}}return c})();var _1=(()=>{class c{static{this.\u0275fac=function(s){return new(s||c)}}static{this.\u0275mod=H2({type:c})}static{this.\u0275inj=S2({})}}return c})();var a4={prefix:"fas",iconName:"globe",icon:[512,512,[127760],"f0ac","M352 256c0 22.2-1.2 43.6-3.3 64l-185.3 0c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64l185.3 0c2.2 20.4 3.3 41.8 3.3 64zm28.8-64l123.1 0c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64l-123.1 0c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32l-116.7 0c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0l-176.6 0c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0L18.6 160C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192l123.1 0c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64L8.1 320C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6l176.6 0c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352l116.7 0zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6l116.7 0z"]};var s4={prefix:"fas",iconName:"phone",icon:[512,512,[128222,128379],"f095","M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"]};var e4={prefix:"fas",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"]};var n4={prefix:"fab",iconName:"facebook",icon:[512,512,[62e3],"f09a","M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"]};var B1=class c{email="pszichologusanna@gmail.com";faGlobe=a4;faPhone=s4;faEnvelope=e4;faFacebook=n4;static \u0275fac=function(a){return new(a||c)};static \u0275cmp=N({type:c,selectors:[["app-contact"]],standalone:!0,features:[b],decls:27,vars:5,consts:[[1,"eleje"],["id","kapcsolat"],[1,"contact-section"],["src","assets/onlineCons2.webp","alt","Online konzult\xE1ci\xF3",1,"contact-image"],[1,"contact-info"],[1,"icon",3,"icon"],["href","tel:+36703437128"],["href","mailto:pszichologusanna@gmail.com"],["href","https://www.facebook.com/pszichologus.huszaranna/","target","_blank"],[1,"kieg"]],template:function(a,s){a&1&&(t(0,"section",0)(1,"h2"),f(2,"L\xE9pjen velem kapcsolatba"),r(),t(3,"p"),f(4,"Husz\xE1r Anna - Tan\xE1csad\xF3 szakpszichol\xF3gus"),r(),t(5,"section",1)(6,"div",2),p(7,"img",3),t(8,"div",4)(9,"ul")(10,"li"),p(11,"fa-icon",5),f(12," Online"),r(),t(13,"li"),p(14,"fa-icon",5),t(15,"a",6),f(16," +36-70-343-7128"),r()(),t(17,"li"),p(18,"fa-icon",5),t(19,"a",7),f(20),r()(),t(21,"li"),p(22,"fa-icon",5),t(23,"a",8),f(24,"Facebook"),r()()()()(),t(25,"p",9),f(26,"Szem\xE9lyes konzult\xE1ci\xF3s ig\xE9ny\xE9vel kapcsolatban keressen az el\xE9rhet\u0151s\xE8geim egyik\xE9n."),r()()()),a&2&&(S(11),k("icon",s.faGlobe),S(3),k("icon",s.faPhone),S(4),k("icon",s.faEnvelope),S(2),T2(s.email),S(2),k("icon",s.faFacebook))},dependencies:[_1,D1],styles:[".eleje[_ngcontent-%COMP%]{max-width:1200px;text-align:center;margin:0 auto;padding:40px 20px}.eleje[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:2rem;margin-bottom:10px;color:#444}.eleje[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], #kapcsolat[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:30px;font-size:1rem;color:#777}#kapcsolat[_ngcontent-%COMP%]{text-align:center;padding:40px 20px 15px;border:1px solid #ddd;border-radius:8px;background-color:#f9f9f9;box-shadow:0 4px 6px #0000001a}.contact-section[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;gap:20px;align-items:center}.contact-info[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center}.contact-image[_ngcontent-%COMP%]{width:100%;height:auto;border-radius:30px;box-shadow:0 4px 6px #0000004d}.contact-info[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;padding:0;margin:0;text-align:left}.contact-info[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:10px 0;font-size:1.3rem;display:flex;align-items:center}.contact-info[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{margin-right:10px;color:#444;font-size:1.5rem}a[_ngcontent-%COMP%]{color:inherit;text-decoration:underline}.kieg[_ngcontent-%COMP%]{margin-top:2rem;margin-bottom:0!important}@media (max-width: 900px){.contact-section[_ngcontent-%COMP%]{grid-template-columns:1fr}.contact-image[_ngcontent-%COMP%]{height:auto}#kapcsolat[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1.8rem}#kapcsolat[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:1.4rem}#kapcsolat[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1rem}.contact-info[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{font-size:.95rem}.contact-info[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{font-size:1.3rem}}@media (max-width: 700px){#kapcsolat[_ngcontent-%COMP%]{padding:20px}#kapcsolat[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1.5rem}#kapcsolat[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:1.3rem}.contact-info[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{font-size:.9rem}.contact-info[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{font-size:1.2rem}}@media (max-width: 480px){#kapcsolat[_ngcontent-%COMP%]{padding:15px}#kapcsolat[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1.3rem}#kapcsolat[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:1.1rem}#kapcsolat[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:.9rem}.contact-info[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{font-size:.85rem}.contact-info[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{font-size:1.1rem}}"]})};var R1=class c{static \u0275fac=function(a){return new(a||c)};static \u0275cmp=N({type:c,selectors:[["app-header"]],standalone:!0,features:[b],decls:7,vars:0,consts:[[1,"header"],[1,"header-content"]],template:function(a,s){a&1&&(t(0,"header",0)(1,"div",1)(2,"h1"),f(3,"PSZICHOL\xD3GIAI KONZULT\xC1CI\xD3"),r(),t(4,"p"),f(5,"Lelki folyamataink megismer\xE9se"),r()()(),p(6,"app-nav"))},dependencies:[e1],styles:[".header[_ngcontent-%COMP%]{position:relative;width:100%;height:55vh;background:url(https://Adi001100.github.io/anna/assets/forest.jpg) bottom / cover no-repeat;display:flex;justify-content:center;align-items:center}.header-content[_ngcontent-%COMP%]{text-align:center;color:#fff;padding:20px;border-radius:10px}.header-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:6vh;margin:0 0 10px;font-weight:400;background-color:#6886b5;color:#fff;padding:10px;border-radius:8px;display:inline-block}.header-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:3vh;margin:0;background:#0000004d;padding:5px;border-radius:5px}@media (max-width: 900px){.header[_ngcontent-%COMP%]{height:50vh}.header-content[_ngcontent-%COMP%]{padding:15px}.header-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:5vh;padding:8px}.header-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:2.5vh}}@media (max-width: 700px){.header[_ngcontent-%COMP%]{height:45vh;background-position:center}.header-content[_ngcontent-%COMP%]{padding:12px}.header-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:4.5vh;padding:8px}.header-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:2.2vh}}@media (max-width: 480px){.header[_ngcontent-%COMP%]{height:40vh;background-size:cover}.header-content[_ngcontent-%COMP%]{padding:10px}.header-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:4vh;padding:6px}.header-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:2vh}}"]})};var o4={prefix:"far",iconName:"compass",icon:[512,512,[129517],"f14e","M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm306.7 69.1L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"]};var i4={prefix:"far",iconName:"handshake",icon:[640,512,[],"f2b5","M272.2 64.6l-51.1 51.1c-15.3 4.2-29.5 11.9-41.5 22.5L153 161.9C142.8 171 129.5 176 115.8 176L96 176l0 128c20.4 .6 39.8 8.9 54.3 23.4l35.6 35.6 7 7c0 0 0 0 0 0L219.9 397c6.2 6.2 16.4 6.2 22.6 0c1.7-1.7 3-3.7 3.7-5.8c2.8-7.7 9.3-13.5 17.3-15.3s16.4 .6 22.2 6.5L296.5 393c11.6 11.6 30.4 11.6 41.9 0c5.4-5.4 8.3-12.3 8.6-19.4c.4-8.8 5.6-16.6 13.6-20.4s17.3-3 24.4 2.1c9.4 6.7 22.5 5.8 30.9-2.6c9.4-9.4 9.4-24.6 0-33.9L340.1 243l-35.8 33c-27.3 25.2-69.2 25.6-97 .9c-31.7-28.2-32.4-77.4-1.6-106.5l70.1-66.2C303.2 78.4 339.4 64 377.1 64c36.1 0 71 13.3 97.9 37.2L505.1 128l38.9 0 40 0 40 0c8.8 0 16 7.2 16 16l0 208c0 17.7-14.3 32-32 32l-32 0c-11.8 0-22.2-6.4-27.7-16l-84.9 0c-3.4 6.7-7.9 13.1-13.5 18.7c-17.1 17.1-40.8 23.8-63 20.1c-3.6 7.3-8.5 14.1-14.6 20.2c-27.3 27.3-70 30-100.4 8.1c-25.1 20.8-62.5 19.5-86-4.1L159 404l-7-7-35.6-35.6c-5.5-5.5-12.7-8.7-20.4-9.3C96 369.7 81.6 384 64 384l-32 0c-17.7 0-32-14.3-32-32L0 144c0-8.8 7.2-16 16-16l40 0 40 0 19.8 0c2 0 3.9-.7 5.3-2l26.5-23.6C175.5 77.7 211.4 64 248.7 64L259 64c4.4 0 8.9 .2 13.2 .6zM544 320l0-144-48 0c-5.9 0-11.6-2.2-15.9-6.1l-36.9-32.8c-18.2-16.2-41.7-25.1-66.1-25.1c-25.4 0-49.8 9.7-68.3 27.1l-70.1 66.2c-10.3 9.8-10.1 26.3 .5 35.7c9.3 8.3 23.4 8.1 32.5-.3l71.9-66.4c9.7-9 24.9-8.4 33.9 1.4s8.4 24.9-1.4 33.9l-.8 .8 74.4 74.4c10 10 16.5 22.3 19.4 35.1l74.8 0zM64 336a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm528 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32z"]};var t4={prefix:"far",iconName:"heart",icon:[512,512,[128153,128154,128155,128156,128420,129293,129294,129505,9829,10084,61578],"f004","M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8l0-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5l0 3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20-.1-.1s0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5l0 3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2l0-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"]};var I1=class c{faHandshake=i4;faCompass=o4;faHeart=t4;static \u0275fac=function(a){return new(a||c)};static \u0275cmp=N({type:c,selectors:[["app-home"]],standalone:!0,features:[b],decls:28,vars:3,consts:[[1,"section-title"],[1,"section-content"],[1,"consultation-options"],[1,"consultation-option"],[1,"large-icon",3,"icon"]],template:function(a,s){a&1&&(p(0,"app-header"),t(1,"section")(2,"h2",0),f(3,"Ami\xE9rt \xE9rdemes pszichol\xF3gushoz fordulni"),r(),t(4,"p",1),f(5,"Ezekben \xE1llok rendelkez\xE9s\xE9re"),r()(),t(6,"section",2)(7,"div",3),p(8,"fa-icon",4),t(9,"p")(10,"strong"),f(11,"Kapcsolat"),r()(),t(12,"p"),f(13,"T\xE1masz ny\xFAjt\xE1sa elfogad\xF3, empatikus, nyugodt l\xE9gk\xF6rben."),r()(),t(14,"div",3),p(15,"fa-icon",4),t(16,"p")(17,"strong"),f(18,"Ir\xE1nyt\u0171"),r()(),t(19,"p"),f(20,"A gondolkod\xE1s, az \xE9rzelmek \xE9s a viselked\xE9s \xF6sszef\xFCgg\xE9seinek meg\xE9rt\xE9se."),r()(),t(21,"div",3),p(22,"fa-icon",4),t(23,"p")(24,"strong"),f(25,"V\xE1ltoz\xE1s"),r()(),t(26,"p"),f(27,"Probl\xE9ma felt\xE1r\xE1sa, fejl\u0151d\xE9s \xFAtj\xE1n val\xF3 elindul\xE1s."),r()()()),a&2&&(S(8),k("icon",s.faHandshake),S(7),k("icon",s.faCompass),S(7),k("icon",s.faHeart))},dependencies:[R1,_1,D1],styles:[".section-title[_ngcontent-%COMP%]{text-align:center;padding:10vh 5vh;font-size:5vh;color:#333}.section-content[_ngcontent-%COMP%]{text-align:center;font-size:3vh;color:#666;margin-bottom:5vh}.consultation-options[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:20px;justify-content:center;align-items:start;padding:40px 20px}.consultation-option[_ngcontent-%COMP%]{text-align:center;padding:20px;border:1px solid #ddd;border-radius:8px;background-color:#f9f9f9;box-shadow:0 4px 6px #0000001a;transition:transform .3s ease,box-shadow .3s ease}.consultation-option[_ngcontent-%COMP%]:hover{transform:translateY(-5px);box-shadow:0 6px 10px #00000026}.large-icon[_ngcontent-%COMP%]{font-size:16vh;color:#555}.consultation-option[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-top:10px;font-size:18px;color:#333}@media (max-width: 768px){.section-title[_ngcontent-%COMP%]{padding:5vh 2vh;font-size:4vh}.large-icon[_ngcontent-%COMP%]{font-size:14vh}}"]})};var Z1=class c{static \u0275fac=function(a){return new(a||c)};static \u0275cmp=N({type:c,selectors:[["app-pricing"]],standalone:!0,features:[b],decls:20,vars:0,consts:[["id","pricing"],[1,"pricing-details"],[1,"info-box"]],template:function(a,s){a&1&&(t(0,"section",0)(1,"h2"),f(2,"D\xEDjszab\xE1s"),r(),t(3,"p"),f(4,"50 perces konzult\xE1ci\xF3 2024. szeptember 1-t\u0151l 16.000 Ft"),r(),p(5,"hr"),t(6,"div",1)(7,"h3"),f(8,"Id\u0151pont egyeztet\xE9se \xE9s inform\xE1ci\xF3 k\xE9r\xE9se telefonon. Keressen bizalommal!"),r(),t(9,"div",2)(10,"h4"),f(11,"Id\u0151pont lemond\xE1sa"),r(),t(12,"p"),f(13,"Az el\u0151re egyeztetett id\u0151pont legk\xE9s\u0151bb a konzult\xE1ci\xF3 el\u0151tt 24 \xF3r\xE1val m\xF3dos\xEDthat\xF3 d\xEDjmentesen."),r(),t(14,"p")(15,"strong"),f(16,"24 \xF3r\xE1n bel\xFCli"),r(),f(17," lemond\xE1s eset\xE9n az \xF3rad\xEDj 50%-a, 8000 Ft ker\xFCl kisz\xE1ml\xE1z\xE1sra."),r(),t(18,"p"),f(19,"Amennyiben az alkalmon nem jelenik meg, \xFAgy a d\xEDj 100%-\xE1t k\xF6teles a k\xF6vetkez\u0151 alkalommal kifizetni vagy \xE1tutal\xE1ssal rendezni."),r()()()())},styles:["#pricing[_ngcontent-%COMP%]{max-width:800px;margin:3vh auto;padding:40px 20px;text-align:center;border:1px solid #ddd;border-radius:8px;background-color:#f9f9f9;box-shadow:0 4px 6px #0000001a}#pricing[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:2rem;margin-bottom:10px;color:#444}#pricing[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.2rem;color:#666;margin-bottom:20px}#pricing[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%]{border:none;border-top:1px solid #ddd;margin:20px 0}.pricing-details[_ngcontent-%COMP%]{text-align:center;margin-top:20px}.pricing-details[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:1.5rem;margin-bottom:20px;color:#555}.info-box[_ngcontent-%COMP%]{border:1px dashed #aaa;padding:20px;border-radius:8px;text-align:left;background-color:#f9f9f9}.info-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:1.2rem;margin-bottom:10px;color:#444}.info-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1rem;margin:10px 0;color:#333;line-height:1.6}.info-box[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-weight:700}"]})};var f4=[{path:"",component:I1},{path:"consultation",component:y1},{path:"about",component:H1},{path:"contact",component:B1},{path:"pricing",component:Z1},{path:"**",redirectTo:""}];var r4={providers:[D2({eventCoalescing:!0}),j2(f4),U2()]};var p6={providers:[G2()]},z4=_2(r4,p6);var h6=()=>I2(k1,z4),F8=h6;export{F8 as a};
