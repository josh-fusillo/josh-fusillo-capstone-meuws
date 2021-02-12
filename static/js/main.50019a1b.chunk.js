(this["webpackJsonpmusic-app-capstone"]=this["webpackJsonpmusic-app-capstone"]||[]).push([[0],{104:function(e,a,t){},108:function(e,a,t){},114:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),s=t(26),l=t.n(s),c=(t(74),t(15)),i=t.n(c),o=t(22),m=t(11),u=t(12),d=t(14),p=t(13),E=(t(46),t(35)),h=t.n(E),b=t(32),v=t.n(b),f=t(33),_=t.n(f),N=t(34),g=t.n(N),w=function(e){Object(d.a)(t,e);var a=Object(p.a)(t);function t(){return Object(m.a)(this,t),a.apply(this,arguments)}return Object(u.a)(t,[{key:"render",value:function(){var e="https://"+this.props.facebook,a="https://"+this.props.twitter,t="https://"+this.props.homepage,n="https://www.instagram.com/"+this.props.value;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"footer"},r.a.createElement("div",{className:"footer__left"},r.a.createElement("a",{href:e,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:v.a,className:"footer__facebook",alt:"Facebook logo"})),r.a.createElement("a",{href:a,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:_.a,className:"footer__facebook",alt:"Twitter logo"}))),r.a.createElement("img",{src:h.a,alt:"music-news",className:"footer__tagline"}),r.a.createElement("div",{className:"footer__right"},r.a.createElement("a",{href:n,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:g.a,className:"footer__facebook",alt:"Instagram logo"})),r.a.createElement("a",{href:t,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:this.props.image,className:"footer__band",alt:"header"})))))}}]),t}(n.Component),O=(t(76),t(58)),y=t.n(O),S=t(9),j=t(6),k=function(e){Object(d.a)(t,e);var a=Object(p.a)(t);function t(){return Object(m.a)(this,t),a.apply(this,arguments)}return Object(u.a)(t,[{key:"render",value:function(){this.props.facebook,this.props.twitter,this.props.homepage,this.props.value;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"footer"},r.a.createElement("img",{src:h.a,alt:"music-news",className:"footer__tagline"})))}}]),t}(n.Component),x={in:{opacity:1},out:{opacity:0}},D=function(e){Object(d.a)(t,e);var a=Object(p.a)(t);function t(){return Object(m.a)(this,t),a.apply(this,arguments)}return Object(u.a)(t,[{key:"render",value:function(){return this.props.redirect?r.a.createElement(S.a,{to:"/MainTwo"}):r.a.createElement(r.a.Fragment,null,r.a.createElement(j.b.div,{initial:"out",animate:"in",exit:"out",variants:x},r.a.createElement("div",{className:"main"},r.a.createElement("div",{className:"main__logo-wrapper"},r.a.createElement("video",{src:y.a,autoPlay:!0,loop:!0,className:"main__logo",alt:"Logo"})),r.a.createElement("div",null,r.a.createElement("form",{className:"main__form",onSubmit:this.props.handleSubmit},r.a.createElement("input",{type:"text",className:"main__search",placeholder:"Search your favourite musician!",value:this.props.searchName,onChange:this.props.onChange}))),r.a.createElement("div",{className:"footer__main-one"},r.a.createElement(k,null)))))}}]),t}(n.Component),C=t(30),I=t(60),B=t.n(I),L=(t(81),function(e){Object(d.a)(t,e);var a=Object(p.a)(t);function t(){return Object(m.a)(this,t),a.apply(this,arguments)}return Object(u.a)(t,[{key:"render",value:function(){var e=B()(this.props.dateTime,"mmmm dS, yyyy, h:MM:ss TT");return r.a.createElement("div",{className:"concert__listings"},r.a.createElement("h4",null,"DATE & TIME"),r.a.createElement("p",{className:"concert__text-style"},e),r.a.createElement("h4",null,"VENUE NAME"),r.a.createElement("p",{className:"concert__text-style"},this.props.venueName),r.a.createElement("h4",null,"VENUE LOCATION"),r.a.createElement("p",{className:"concert__text-style"},this.props.venueLocation),r.a.createElement("a",{href:this.props.ticketLink,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("button",{className:"concert__button"},"Purchase Tickets")))}}]),t}(n.Component)),A=t(40),T=t.n(A);t(82),n.Component;function R(e){var a=e.video,t=e.handleVideoSelect;return r.a.createElement(j.b.button,{onClick:function(){return t(a)},className:"video__item",whileHover:{scale:1.03},animate:{scale:1},transition:{duration:.5}},r.a.createElement("img",{className:"video__image",src:a.snippet.thumbnails.medium.url,alt:a.snippet.description}),r.a.createElement("div",{className:"video__content"},r.a.createElement("div",{className:"video__title"},a.snippet.title)))}t(48);function F(e){var a=e.videos,t=e.handleVideoSelect,n=a.map((function(e){return r.a.createElement(R,{key:e.id.videoId,video:e,handleVideoSelect:t})}));return r.a.createElement("div",{className:"video"},n)}function P(e){var a=e.video;if(!a)return r.a.createElement("div",{className:"video__no-video-wrapper"},r.a.createElement("div",{className:"video__no-video"}));var t="https://www.youtube.com/embed/".concat(a.id.videoId);return console.log(typeof a),r.a.createElement("div",null,r.a.createElement("div",{className:"video__player"},r.a.createElement("iframe",{className:"video__player-embed",src:t,allowFullScreen:!0,title:"Video player"})),r.a.createElement("div",{className:"video__player-title-wrapper"},r.a.createElement("h4",{className:"video__player-title"},a.snippet.title)))}t(83),t(84);var V=function(e){Object(d.a)(t,e);var a=Object(p.a)(t);function t(){return Object(m.a)(this,t),a.apply(this,arguments)}return Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"releases-wrapper"},r.a.createElement("div",null,this.props.title),r.a.createElement("div",null,this.props.year),r.a.createElement("br",null),r.a.createElement("img",{src:this.props.thumb,alt:"release"}),r.a.createElement("br",null),r.a.createElement("br",null)))}}]),t}(n.Component),U=t(27),H=(t(85),t(86),function(e){Object(d.a)(t,e);var a=Object(p.a)(t);function t(){return Object(m.a)(this,t),a.apply(this,arguments)}return Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(U.a,{naturalSlideWidth:5,naturalSlideHeight:4.5,totalSlides:3,isPlaying:!0},r.a.createElement(U.c,{className:"slides-wrapper"},r.a.createElement(U.b,{index:0},r.a.createElement("img",{className:"slides",src:this.props.imageTwo,alt:"slide"})),r.a.createElement(U.b,{index:1},r.a.createElement("img",{className:"slides",src:this.props.imageThree,alt:"slide"})),r.a.createElement(U.b,{index:2},r.a.createElement("img",{className:"slides",src:this.props.imageFour,alt:"slide"})))))}}]),t}(n.Component)),G=function(e){Object(d.a)(t,e);var a=Object(p.a)(t);function t(){return Object(m.a)(this,t),a.apply(this,arguments)}return Object(u.a)(t,[{key:"render",value:function(){var e,a,t=this,n={in:{opacity:1},out:{opacity:0}};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"main-mobile-tablet"},r.a.createElement(j.b.div,{initial:"out",animate:"in",exit:"out",variants:n,transition:{ease:"easeOut",duration:2}},r.a.createElement("div",null,r.a.createElement("div",{className:"card__wrapper"},r.a.createElement("div",{className:"card__wrapper-two"},r.a.createElement(j.b.div,{className:"card__two",whileHover:{scale:1.03},animate:{scale:1},transition:{duration:.5}},r.a.createElement("img",{src:this.props.audioDB.strArtistBanner,className:"hero__image",alt:"Band hero"}),r.a.createElement("div",{className:"hero__wrapper"},r.a.createElement("h1",{className:"hero__bio"},"BIOGRAPHY:"),r.a.createElement("hr",null),r.a.createElement("div",{className:"hero__bio-text"},this.props.audioDB.strBiographyEN))),r.a.createElement(j.b.div,{className:"card__four",whileHover:{scale:1.03},animate:{scale:1},transition:{duration:.5}},r.a.createElement("div",{className:"band"},r.a.createElement("h1",{className:"band__header"},"BAND DETAILS"),r.a.createElement("h2",{className:"band__header-two"},"MEMBERS:"),this.props.discogsInfo.members&&this.props.discogsInfo.members.map((function(e){return r.a.createElement("ul",{className:"band__ul"},r.a.createElement("li",{className:"band__member-name"},e.name))})),r.a.createElement("h2",{className:"band__header-two"},"YEAR FORMED:"),r.a.createElement("ul",{className:"band__ul"},r.a.createElement("li",{className:"band__member-name"},this.props.audioDB.intFormedYear)),r.a.createElement("h2",{className:"band__header-two"},"LABEL:"),r.a.createElement("ul",{className:"band__ul"},r.a.createElement("li",{className:"band__member-name"},this.props.audioDB.strLabel)),r.a.createElement("h2",{className:"band__header-two"},"COUNTRY:"),r.a.createElement("ul",{className:"band__ul"},r.a.createElement("li",{className:"band__member-name"},this.props.audioDB.strCountry)),r.a.createElement("h2",{className:"band__header-two"},"GENRE:"),r.a.createElement("ul",{className:"band__ul"},r.a.createElement("li",{className:"band__member-name"},this.props.audioDB.strGenre)),r.a.createElement("h2",{className:"band__header-two"},"STYLE:"),r.a.createElement("ul",{className:"band__ul"},r.a.createElement("li",{className:"band__member-name"},this.props.audioDB.strStyle)))),r.a.createElement(j.b.div,{className:"card__six",whileHover:{scale:1.03},animate:{scale:1},transition:{duration:.5}},r.a.createElement("h2",null,"CONCERT LISTINGS"),r.a.createElement("h3",{className:"no-event"},this.props.noData),this.props.concertInfo&&this.props.concertInfo.map((function(e){return r.a.createElement(L,{dateTime:e.datetime,onSale:e.on_sale_datetime,venueName:e.venue.name,venueLocation:e.venue.location,ticketLink:e.url,noData:t.props.noData})}))),r.a.createElement("div",{className:"card__wrapper-three"},r.a.createElement(j.b.div,(e={className:"card__five",initial:"out",animate:"in",exit:"out",variants:n,whileHover:{scale:1.03}},Object(C.a)(e,"animate",{scale:1}),Object(C.a)(e,"transition",{duration:.5}),e),r.a.createElement("h2",{className:"releases__header"},"RELEASES"),r.a.createElement("div",{className:"releases__flex"},this.props.releaseData.map((function(e){return r.a.createElement(V,{title:e.title,year:e.year,thumb:e.thumb})})))))),r.a.createElement("div",{className:"card__wrapper-four"},r.a.createElement("div",{className:"card__one"},r.a.createElement(P,{video:this.props.selectedVideo}),r.a.createElement(F,{handleVideoSelect:this.props.handleVideoSelect,videos:this.props.videos}))),r.a.createElement(j.b.div,{className:"card__three",whileHover:{scale:1.03},animate:{scale:1},transition:{duration:.5}},r.a.createElement(H,{imageOne:this.props.audioDB.strArtistClearart,imageTwo:this.props.audioDB.strArtistFanart,imageThree:this.props.audioDB.strArtistFanart2,imageFour:this.props.audioDB.strArtistFanart3,imageFive:this.props.audioDB.strArtistLogo})))))),r.a.createElement("div",{className:"main-desktop"},r.a.createElement(j.b.div,{initial:"out",animate:"in",exit:"out",variants:n,transition:{ease:"easeOut",duration:2}},r.a.createElement("div",{className:"card__wrapper"},r.a.createElement("div",{className:"card__one"},r.a.createElement(P,{video:this.props.selectedVideo}),r.a.createElement(F,{handleVideoSelect:this.props.handleVideoSelect,videos:this.props.videos})),r.a.createElement("div",{className:"card__wrapper-two"},r.a.createElement(j.b.div,{className:"card__two",whileHover:{scale:1.03},animate:{scale:1},transition:{duration:.5}},r.a.createElement("img",{src:this.props.audioDB.strArtistBanner,className:"hero__image",alt:"Band hero"}),r.a.createElement("div",{className:"hero__wrapper"},r.a.createElement("h1",{className:"hero__bio"},"BIOGRAPHY:"),r.a.createElement("hr",null),r.a.createElement("div",{className:"hero__bio-text"},this.props.audioDB.strBiographyEN))),r.a.createElement("div",{className:"card__wrapper-three"},r.a.createElement(j.b.div,{className:"card__three",whileHover:{scale:1.03},animate:{scale:1},transition:{duration:.5}},r.a.createElement("h2",{className:"releases__header"},"GALLERY"),r.a.createElement(H,{imageOne:this.props.audioDB.strArtistClearart,imageTwo:this.props.audioDB.strArtistFanart,imageThree:this.props.audioDB.strArtistFanart2,imageFour:this.props.audioDB.strArtistFanart3,imageFive:this.props.audioDB.strArtistLogo})),r.a.createElement(j.b.div,(a={className:"card__five",initial:"out",animate:"in",exit:"out",variants:n,whileHover:{scale:1.03}},Object(C.a)(a,"animate",{scale:1}),Object(C.a)(a,"transition",{duration:.5}),a),r.a.createElement("h2",{className:"releases__header"},"RELEASES"),r.a.createElement("div",{className:"releases__flex"},this.props.releaseData.map((function(e){return r.a.createElement(V,{title:e.title,year:e.year,thumb:e.thumb})})))))),r.a.createElement("div",{className:"card__wrapper-four"},r.a.createElement(j.b.div,{className:"card__four",whileHover:{scale:1.03},animate:{scale:1},transition:{duration:.5}},r.a.createElement("div",{className:"band"},r.a.createElement("h1",{className:"band__header"},"BAND DETAILS"),r.a.createElement("h2",{className:"band__header-two"},"MEMBERS:"),this.props.discogsInfo.members&&this.props.discogsInfo.members.map((function(e){return r.a.createElement("ul",{className:"band__ul"},r.a.createElement("li",{className:"band__member-name"},e.name))})),r.a.createElement("h2",{className:"band__header-two"},"YEAR FORMED:"),r.a.createElement("ul",{className:"band__ul"},r.a.createElement("li",{className:"band__member-name"},this.props.audioDB.intFormedYear)),r.a.createElement("h2",{className:"band__header-two"},"LABEL:"),r.a.createElement("ul",{className:"band__ul"},r.a.createElement("li",{className:"band__member-name"},this.props.audioDB.strLabel)),r.a.createElement("h2",{className:"band__header-two"},"COUNTRY:"),r.a.createElement("ul",{className:"band__ul"},r.a.createElement("li",{className:"band__member-name"},this.props.audioDB.strCountry)),r.a.createElement("h2",{className:"band__header-two"},"GENRE:"),r.a.createElement("ul",{className:"band__ul"},r.a.createElement("li",{className:"band__member-name"},this.props.audioDB.strGenre)),r.a.createElement("h2",{className:"band__header-two"},"STYLE:"),r.a.createElement("ul",{className:"band__ul"},r.a.createElement("li",{className:"band__member-name"},this.props.audioDB.strStyle)))),r.a.createElement(j.b.div,{className:"card__six",whileHover:{scale:1.03},animate:{scale:1},transition:{duration:.5}},r.a.createElement("h2",null,"EVENTS"),r.a.createElement("h3",{className:"no-event"},this.props.noData),this.props.concertInfo&&this.props.concertInfo.map((function(e){return r.a.createElement(L,{dateTime:e.datetime,onSale:e.on_sale_datetime,venueName:e.venue.name,venueLocation:e.venue.location,ticketLink:e.url,noData:t.props.noData})}))))))),r.a.createElement(w,{name:this.props.artistInfo.name,image:this.props.artistInfo.thumb_url,facebook:this.props.audioDB.strFacebook,twitter:this.props.audioDB.strTwitter,homepage:this.props.audioDB.strWebsite,handleSubmitTwo:this.props.handleSubmitTwo,value:this.props.value}))}}]),t}(n.Component),M=t(24),q=t.n(M),Y=q.a.create({baseURL:"https://www.googleapis.com/youtube/v3",params:{part:"snippet",maxResults:12,key:"AIzaSyDTXTDC2A2VJGDVvxN2rtPU-g5RU_KICIQ",type:"video",order:"viewCount"}}),K=(t(104),t(8)),W=t(10),z=t(118),J=t(119),X=t(61),Q=(t(105),X.a.initializeApp({apiKey:"AIzaSyDv_F9CvB97KK1ZXRn5rNsvngJxu9gjXdk",authDomain:"muews-ed035.firebaseapp.com",databaseURL:"https://muews-ed035.firebaseio.com",projectId:"muews-ed035",storageBucket:"muews-ed035.appspot.com",messagingSenderId:"142418129281",appId:"1:142418129281:web:5cc45c8a9bfc869fe7b880"})),Z=Q.auth(),$=r.a.createContext();function ee(){return Object(n.useContext)($)}function ae(e){var a=e.children,t=Object(n.useState)(),s=Object(W.a)(t,2),l=s[0],c=s[1],i=Object(n.useState)(!0),o=Object(W.a)(i,2),m=o[0],u=o[1];Object(n.useEffect)((function(){return Z.onAuthStateChanged((function(e){c(e),u(!1)}))}),[]);var d={currentUser:l,login:function(e,a){return Z.signInWithEmailAndPassword(e,a)},signup:function(e,a){return Z.createUserWithEmailAndPassword(e,a)},logout:function(){return Z.signOut()},resetPassword:function(e){return Z.sendPasswordResetEmail(e)},updateEmail:function(e){return l.updateEmail(e)},updatePassword:function(e){return l.updatePassword(e)}};return r.a.createElement($.Provider,{value:d},!m&&a)}t(28);function te(){var e=Object(n.useRef)(),a=Object(n.useRef)(),t=Object(n.useRef)(),s=ee().signup,l=Object(n.useState)(""),c=Object(W.a)(l,2),m=c[0],u=c[1],d=Object(n.useState)(!1),p=Object(W.a)(d,2),E=p[0],h=p[1],b=Object(S.g)();function v(){return(v=Object(o.a)(i.a.mark((function n(r){return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r.preventDefault(),a.current.value===t.current.value){n.next=3;break}return n.abrupt("return",u("Passwords do not match!"));case 3:return n.prev=3,u(""),h(!0),n.next=8,s(e.current.value,a.current.value);case 8:b.push("/"),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(3),u("Failed to create an account");case 14:h(!1);case 15:case"end":return n.stop()}}),n,null,[[3,11]])})))).apply(this,arguments)}return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:"header-login"},"Sign Up"),r.a.createElement(j.b.div,{className:"profile__card-two",whileHover:{scale:1.03},animate:{scale:1},transition:{duration:.5}},m&&r.a.createElement(z.a,{variant:"danger"},m),r.a.createElement(J.a,{onSubmit:function(e){return v.apply(this,arguments)}},r.a.createElement(J.a.Group,{id:"email"},r.a.createElement("div",{className:"label-header"},r.a.createElement(J.a.Label,null,"Email")),r.a.createElement(J.a.Control,{type:"email",ref:e,required:!0,className:"form-style"})),r.a.createElement(J.a.Group,{id:"password"},r.a.createElement("div",{className:"label-header-two"},r.a.createElement(J.a.Label,null,"Password")),r.a.createElement(J.a.Control,{type:"password",ref:a,required:!0,className:"form-style"})),r.a.createElement(J.a.Group,{id:"password-confirm"},r.a.createElement("div",{className:"label-header-two"},r.a.createElement(J.a.Label,null,"Password Confirmation")),r.a.createElement(J.a.Control,{type:"password",ref:t,required:!0,className:"form-style"})),r.a.createElement("button",{disabled:E,className:"btn-login-two",type:"submit"},"Sign Up")),r.a.createElement("div",{className:"forgot__need-three"},"Already have an account? "),r.a.createElement(K.b,{to:"/login",className:"forgot-pass-two"},"Log In")),r.a.createElement("div",{className:"footer__main"},r.a.createElement(k,null)))}var ne=t(66),re=t(25),se=t(64),le=t(65),ce=[{title:"Search",path:"/josh-fusillo-capstone-muews",icon:r.a.createElement(se.a,null),cName:"nav-text"},{title:"Dashboard",path:"/dashboard",icon:r.a.createElement(le.a,null),cName:"nav-text"}],ie=t(0);t(108);function oe(){var e=ee().currentUser;return null===e?null:r.a.createElement("div",null,e.email)}var me=function(e){var a=Object(n.useState)(!1),t=Object(W.a)(a,2),s=t[0],l=t[1],c=function(){return l(!s)},m=ee(),u=m.currentUser,d=m.logout,p=Object(n.useState)(""),E=Object(W.a)(p,2),h=(E[0],E[1]),b=Object(S.g)();if(null===u){var v=[r.a.createElement(K.b,{to:"/login",className:"current-nav-user"},r.a.createElement("h2",{className:"nav-link-text"},"LOGIN")),r.a.createElement(K.b,{to:"/josh-fusillo-capstone-muews",className:"current-nav-user-two",onClick:e.handleSubmitTwo},r.a.createElement("h2",{className:"nav-link-text"},"SEARCH"))];return[r.a.createElement("div",{className:"current-nav-flex"},v)]}function f(){return(f=Object(o.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h(""),e.prev=1,e.next=4,d();case 4:b.push("/login"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),h("Failed to log out");case 10:case"end":return e.stop()}}),e,null,[[1,7]])})))).apply(this,arguments)}if(null!==u){var _=r.a.createElement("li",{className:""},r.a.createElement(K.b,{variant:"link",className:"",onClick:function(){return f.apply(this,arguments)}},r.a.createElement("span",null,r.a.createElement(re.e,{className:"logout-icon"})),"Log Out"));return r.a.createElement(r.a.Fragment,null,r.a.createElement(ie.b.Provider,{value:{color:"#fff"}},r.a.createElement("div",{className:"navbar"},r.a.createElement(K.b,{to:"#",className:"menu-bars"},r.a.createElement(ne.a,{onClick:c}))),r.a.createElement("nav",{className:s?"nav-menu active":"nav-menu"},r.a.createElement("ul",{className:"nav-menu-items",onClick:c},r.a.createElement("li",{className:"navbar-toggle"},r.a.createElement(K.b,{to:"#",className:"menu-bars"},r.a.createElement(re.d,null))),ce.map((function(a,t){return r.a.createElement("li",{key:t,className:a.cName},r.a.createElement(K.b,{to:a.path,onClick:e.handleSubmitTwo},a.icon,r.a.createElement("span",null,a.title)))})),r.a.createElement("li",{className:"logout-flex"},r.a.createElement("span",{className:"logout-text"},_)),r.a.createElement("img",{src:T.a,alt:"transparent",className:"logo-transparent"})))),r.a.createElement("div",{className:"header__band"},r.a.createElement(oe,null)))}};function ue(){var e=Object(n.useRef)(),a=Object(n.useRef)(),t=ee().login,s=Object(n.useState)(""),l=Object(W.a)(s,2),c=l[0],m=l[1],u=Object(n.useState)(!1),d=Object(W.a)(u,2),p=d[0],E=d[1],h=Object(S.g)();function b(){return(b=Object(o.a)(i.a.mark((function n(r){return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r.preventDefault(),n.prev=1,m(""),E(!0),n.next=6,t(e.current.value,a.current.value);case 6:h.push("/dashboard"),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(1),m("Failed to sign in");case 12:E(!1);case 13:case"end":return n.stop()}}),n,null,[[1,9]])})))).apply(this,arguments)}return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:"header-login"},"LOG IN"),c&&r.a.createElement(z.a,{variant:"danger"},c),r.a.createElement(j.b.div,{className:"profile__card-two",whileHover:{scale:1.03},animate:{scale:1},transition:{duration:.5}},r.a.createElement(J.a,{onSubmit:function(e){return b.apply(this,arguments)}},r.a.createElement(J.a.Group,{id:"email"},r.a.createElement("div",{className:"label-header"},r.a.createElement(J.a.Label,{className:"label-header"},"EMAIL")),r.a.createElement("div",{className:"email-style"},r.a.createElement(J.a.Control,{type:"email",ref:e,required:!0,className:"form-style"}))),r.a.createElement(J.a.Group,{id:"password"},r.a.createElement(J.a.Label,null,"PASSWORD"),r.a.createElement("div",{className:"email-style"},r.a.createElement(J.a.Control,{type:"password",ref:a,required:!0,className:"form-style"}))),r.a.createElement("button",{disabled:p,className:"btn-login",type:"submit"},"Log In")),r.a.createElement("div",{className:"w-30 text-center mt-3"},r.a.createElement(K.b,{to:"/forgot-password",className:"forgot-pass"},"Forgot Password?")),r.a.createElement("div",{className:"forgot__need"},"Need an account?"),r.a.createElement(K.b,{to:"/signup",className:"forgot-pass"},"Sign Up")),r.a.createElement("div",{className:"footer__main"},r.a.createElement(k,null)))}var de=t(68);function pe(e){var a=e.component,t=Object(de.a)(e,["component"]),n=ee().currentUser;return r.a.createElement(S.b,Object.assign({},t,{render:function(e){return n?r.a.createElement(a,e):r.a.createElement(S.a,{to:"/login"})}}))}var Ee=t(117);function he(){var e=Object(n.useRef)(),a=ee().resetPassword,t=Object(n.useState)(""),s=Object(W.a)(t,2),l=s[0],c=s[1],m=Object(n.useState)(""),u=Object(W.a)(m,2),d=u[0],p=u[1],E=Object(n.useState)(!1),h=Object(W.a)(E,2),b=h[0],v=h[1];function f(){return(f=Object(o.a)(i.a.mark((function t(n){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.prev=1,p(""),c(""),v(!0),t.next=7,a(e.current.value);case 7:p("Check your inbox for further instructions"),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(1),c("Failed to reset password");case 13:v(!1);case 14:case"end":return t.stop()}}),t,null,[[1,10]])})))).apply(this,arguments)}return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:"header-login"},"PASSWORD RESET"),r.a.createElement(j.b.div,{className:"profile__card-two",whileHover:{scale:1.03},animate:{scale:1},transition:{duration:.5}},l&&r.a.createElement(z.a,{variant:"danger"},l),d&&r.a.createElement(z.a,{variant:"success"},d),r.a.createElement(J.a,{onSubmit:function(e){return f.apply(this,arguments)}},r.a.createElement(J.a.Group,{id:"email"},r.a.createElement("div",{className:"label-header"},r.a.createElement(J.a.Label,{className:"label-header"},"Email  ")),r.a.createElement(J.a.Control,{type:"email",ref:e,className:"email-style-two",required:!0})),r.a.createElement(Ee.a,{disabled:b,className:"btn-login",type:"submit"},"Reset Password")),r.a.createElement("div",{className:"w-100 text-center mt-3"},r.a.createElement(K.b,{to:"/login",className:"forgot-pass-two"},"Log In")),r.a.createElement("div",{className:"forgot__need-two"},"Need an account?  "),r.a.createElement(K.b,{to:"/signup",className:"forgot-pass-two"},"Sign Up")),r.a.createElement("div",{className:"footer__main"},r.a.createElement(k,null)))}function be(){var e=Object(n.useRef)(),a=Object(n.useRef)(),t=Object(n.useRef)(),s=ee(),l=s.currentUser,c=s.updatePassword,i=s.updateEmail,o=Object(n.useState)(""),m=Object(W.a)(o,2),u=m[0],d=m[1],p=Object(n.useState)(!1),E=Object(W.a)(p,2),h=E[0],b=E[1],v=Object(S.g)();return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:"header-login"},"UPDATE PROFILE"),r.a.createElement(j.b.div,{className:"profile__card-two",whileHover:{scale:1.03},animate:{scale:1},transition:{duration:.5}},u&&r.a.createElement(z.a,{variant:"danger"},u),r.a.createElement(J.a,{onSubmit:function(n){if(n.preventDefault(),a.current.value!==t.current.value)return d("Passwords do not match!");var r=[];b(!0),d(""),e.current.value!==l.email&&r.push(i(e.current.value)),a.current.value&&r.push(c(a.current.value)),Promise.all(r).then((function(){v.push("/")})).catch((function(){d("Failed to update account")})).finally((function(){b(!1)}));try{d(""),b(!0),v.push("/")}catch(s){d("Failed to create an account")}b(!1)}},r.a.createElement(J.a.Group,{id:"email"},r.a.createElement("div",{className:"label-header"},r.a.createElement(J.a.Label,null,"Email")),r.a.createElement(J.a.Control,{type:"email",ref:e,className:"email-style-two",required:!0,defaultValue:l.email})),r.a.createElement(J.a.Group,{id:"password"},r.a.createElement(J.a.Label,null,"Password"),r.a.createElement(J.a.Control,{type:"password",ref:a,className:"email-style-two",required:!0,placeholder:"Leave blank to keep the same"})),r.a.createElement(J.a.Group,{id:"password-confirm"},r.a.createElement(J.a.Label,null,"Password Confirmation"),r.a.createElement(J.a.Control,{type:"password",ref:t,className:"email-style-two",required:!0,placeholder:"Leave blank to keep the same"})),r.a.createElement(Ee.a,{disabled:h,className:"btn-login",type:"submit"},"Update")),r.a.createElement("div",{className:"w-100 text-center mt-2"},r.a.createElement(K.b,{to:"/dashboard",className:"forgot-pass"},"Cancel"))),r.a.createElement("div",{className:"footer__main"},r.a.createElement(k,null)))}function ve(e){var a=Object(n.useState)(""),t=Object(W.a)(a,2),s=t[0],l=t[1],c=ee(),m=c.currentUser,u=c.logout,d=Object(S.g)();function p(){return(p=Object(o.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l(""),e.prev=1,e.next=4,u();case 4:d.push("/login"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),l("Failed to log out");case 10:case"end":return e.stop()}}),e,null,[[1,7]])})))).apply(this,arguments)}return r.a.createElement(r.a.Fragment,null,r.a.createElement(j.b.div,{initial:"out",animate:"in",exit:"out",variants:{in:{opacity:1},out:{opacity:0}},transition:{ease:"easeOut",duration:2}},r.a.createElement(ie.b.Provider,{value:{color:"white"}},r.a.createElement("h2",{className:"text-center mb-4 mt-4"},"DASHBOARD"),r.a.createElement("div",{className:"profile__card-wrapper"},r.a.createElement(j.b.div,{className:"profile__card",whileHover:{scale:1.03},animate:{scale:1},transition:{duration:.5}},r.a.createElement("h3",{className:"text-center mb-4 mt-4"},"FAVORITES"),r.a.createElement(re.b,{className:"profile__icon-two"}),r.a.createElement("ul",null,r.a.createElement("li",null,"The Killers"),r.a.createElement("li",null,"Avril Lavigne"),r.a.createElement("li",null,"Aqua"),r.a.createElement("li",null,"Backstreet Boys"))),r.a.createElement(j.b.div,{className:"profile__card",whileHover:{scale:1.03},animate:{scale:1},transition:{duration:.5}},r.a.createElement("h3",{className:"text-center mb-4 mt-4"},"PROFILE"),s&&r.a.createElement(z.a,{variant:"danger"},s),r.a.createElement("strong",null,"Email:"),"  ",m.email,r.a.createElement(re.c,{className:"profile__icon"}),r.a.createElement(K.b,{to:"/update-profile",className:"btn-update forgot-pass"},"Update Profile"),r.a.createElement("div",{className:"w-100 text-center mt-2"},r.a.createElement(Ee.a,{variant:"link",className:"btn-login",onClick:function(){return p.apply(this,arguments)}},"Log Out"))),r.a.createElement(j.b.div,{className:"profile__card",whileHover:{scale:1.03},animate:{scale:1},transition:{duration:.5}},r.a.createElement("h3",{className:"text-center mb-4 mt-4"},"HISTORY"),r.a.createElement(re.a,{className:"profile__icon-two"}),r.a.createElement("ul",null,r.a.createElement("li",null,"The Killers"),r.a.createElement("li",null,"Avril Lavigne"),r.a.createElement("li",null,"Coldplay"),r.a.createElement("li",null,"The Beatles"),r.a.createElement("li",null,"Aqua"),r.a.createElement("li",null,"Backstreet Boys")))))),r.a.createElement("div",{className:"footer__main"},r.a.createElement(k,null)))}var fe=t(67),_e=t.n(fe),Ne=function(e){Object(d.a)(t,e);var a=Object(p.a)(t);function t(){var e;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=a.call.apply(a,[this].concat(r))).state={searchName:"",newsResults:[],videos:[],artistInfo:[],concertInfo:[],discogsInfo:[],audioDB:[],releaseData:[],images:[],selectedVideo:null,redirect:!1,noData:null,visible:!1},e.handleSearchName=function(a){e.setState({searchName:a.target.value})},e.getVideo=Object(o.a)(i.a.mark((function a(){var t;return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Y.get("/search",{params:{q:e.state.searchName}});case 2:t=a.sent,e.setState({videos:t.data.items});case 4:case"end":return a.stop()}}),a)}))),e.getArtist=function(){q.a.get("https://rest.bandsintown.com/artists/".concat(e.state.searchName,"/?app_id=2bfefdd4b6571ebbc6ba9afbb5bc55d8")).then((function(a){e.setState({artistInfo:a.data})}))},e.getEvent=function(){q.a.get("https://rest.bandsintown.com/artists/".concat(e.state.searchName,"/events/?app_id=2bfefdd4b6571ebbc6ba9afbb5bc55d8")).then((function(a){0===a.data.length?e.setState({noData:"No Event Listings"}):e.setState({concertInfo:a.data})}))},e.getData=function(){q.a.get("https://theaudiodb.com/api/v1/json/1/search.php?s=".concat(e.state.searchName)).then((function(a){null===a.data.artists?(e.setState({redirect:!1}),e.openModal()):e.setState({audioDB:a.data.artists[0]})}))},e.getArtistData=function(){var a={headers:{Authorization:"Discogs key=trndaRvgxPZeVGxKzXuo, secret=EfhONQaxMVYqTPCgrxkmCCmTJbVkLsjU"}};q.a.get("https://api.discogs.com/database/search?q=".concat(e.state.searchName,"&artist&key=trndaRvgxPZeVGxKzXuo&secret=EfhONQaxMVYqTPCgrxkmCCmTJbVkLsjU")).then((function(t){var n=t.data.results[0].id;q.a.get("https://api.discogs.com/artists/".concat(n),a).then((function(a){e.setState({discogsInfo:a.data,images:a.data.images}),q.a.get("https://api.discogs.com/artists/".concat(n,"/releases?year&key=trndaRvgxPZeVGxKzXuo&secret=EfhONQaxMVYqTPCgrxkmCCmTJbVkLsjU")).then((function(a){e.setState({releaseData:a.data.releases}),console.log(a.data.releases)}))}))}))},e.handleVideoSelect=function(a){e.setState({selectedVideo:a})},e.handleSubmit=function(a){a.preventDefault(),e.getData(),e.getVideo(),e.getArtist(),e.getEvent(),e.getArtistData(),e.setState({redirect:!0})},e.handleSubmitTwo=function(){e.setState({redirect:!1})},e}return Object(u.a)(t,[{key:"openModal",value:function(){this.setState({visible:!0})}},{key:"closeModal",value:function(){this.setState({visible:!1,redirect:!1})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement(K.a,null,r.a.createElement(_e.a,{visible:this.state.visible,effect:"fadeInDown"},r.a.createElement("div",{className:"modal"},r.a.createElement("h1",null,"Sorry!"),r.a.createElement("h3",null,"We were unable to get enough data for this musician, please search again!"),r.a.createElement(K.b,{to:"/josh-fusillo-capstone-muews",className:"modal__button",onClick:function(){return e.closeModal()}},"Close"))),r.a.createElement(j.a,{exitBeforeEnter:!0},r.a.createElement(ae,null,r.a.createElement(me,{handleSubmitTwo:this.handleSubmitTwo,name:this.state.artistInfo})),r.a.createElement(S.d,null,r.a.createElement(S.b,{exact:!0,path:"/josh-fusillo-capstone-muews",render:function(a){return r.a.createElement(D,Object.assign({},a,{value:e.state.searchName,onChange:e.handleSearchName,handleSubmit:e.handleSubmit,redirect:e.state.redirect}))}}),r.a.createElement(S.b,{path:"/MainTwo",render:function(a){return r.a.createElement(G,Object.assign({},a,{newsResults:e.state.newsResults,selectedVideo:e.state.selectedVideo,videos:e.state.videos,handleVideoSelect:e.handleVideoSelect,artistInfo:e.state.artistInfo,discogsInfo:e.state.discogsInfo,audioDB:e.state.audioDB,concertInfo:e.state.concertInfo,releaseData:e.state.releaseData,images:e.state.images,handleSubmitTwo:e.handleSubmitTwo,value:e.state.searchName,noData:e.state.noData}))}}),r.a.createElement(ae,null,r.a.createElement(pe,{exact:!0,path:"/dashboard",component:ve}),r.a.createElement(pe,{path:"/update-profile",component:be}),r.a.createElement(S.b,{path:"/signup",component:te}),r.a.createElement(S.b,{path:"/login",component:ue}),r.a.createElement(S.b,{path:"/forgot-password",component:he}))))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Ne,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},28:function(e,a,t){},32:function(e,a,t){e.exports=t.p+"static/media/Icon-facebook.1d4e904c.svg"},33:function(e,a,t){e.exports=t.p+"static/media/Icon-twitter.2a539e17.svg"},34:function(e,a,t){e.exports=t.p+"static/media/Icon-instagram.6866dae2.svg"},35:function(e,a,t){e.exports=t.p+"static/media/Music-news-you-can-use.d425ce08.svg"},40:function(e,a,t){e.exports=t.p+"static/media/Logo-transparent.bf5cdb0b.svg"},46:function(e,a,t){},48:function(e,a,t){},58:function(e,a,t){e.exports=t.p+"static/media/Logo-movie-wide-two.d3de24fb.mp4"},69:function(e,a,t){e.exports=t(114)},74:function(e,a,t){},76:function(e,a,t){},81:function(e,a,t){},82:function(e,a,t){},83:function(e,a,t){},84:function(e,a,t){},86:function(e,a,t){}},[[69,1,2]]]);
//# sourceMappingURL=main.50019a1b.chunk.js.map