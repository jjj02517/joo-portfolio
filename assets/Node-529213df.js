import{C as p,S as f,u as C,r as u,m as h,o as c,c as j,a as o,b as d,i as r,j as t,d as l,h as m,z as v,D as x,e as k}from"./index-75412e07.js";import{_ as N,C as _}from"./Title-29ed4ed7.js";import{C as P}from"./Block-da1d8205.js";/* empty css                                                               */const w="/joo-portfolio/assets/images/mock-node.png",A="/joo-portfolio/assets/images/delivery.png",$="/joo-portfolio/assets/images/rest-code.png",y="/joo-portfolio/assets/images/config-code.png",b="/joo-portfolio/assets/images/axios-code.png";const I=x('<section class="pages-node-section1"><div class="mock-image"><img src="'+w+'" alt="nodelogo"></div><div class="title-wrap"><h1>Node.js,</h1><h2 class="mt-1">Node.js 이용한, 배송조회 API 활용 개발</h2></div></section>',1),M={class:"pages-node-section2"},S=o("hr",null,null,-1),V={class:"pages-node-section3"},E=o("h2",{class:"mb-2"},"Detail Project",-1),T=o("div",{class:"block-list"},[o("strong",null,"담당작업 : "),o("span",null," 오픈 API 활용 하여, 국내 택배사부터 국외 택배사 전체 운송장 번호 입력을 통한 배송 조회 개발 작업 및 Admin 레이아웃 View페이지 작업 ")],-1),B=o("div",{class:"block-list mt-2"},[o("strong",null,"사용Tool : "),o("span",null," Node.js ")],-1),D=o("div",{class:"detail-content"},[o("p",null," https://tracker.delivery/guide/에서 제공하는 오픈 API 이용하여 개발 작업을 진행했습니다. "),o("p",{class:"mt-1"}," Node.js 작업 환경 구축하여 진행한 작업 으로, 기존 제공하는 택배업체 전체 디버깅 및 신규개발을 도맡아 하였습니다. ")],-1),R={class:"pages-node-section4"},L=o("h2",{class:"mid-title"},"Development",-1),W={class:"panel pt-4"},H=o("p",{class:"panel-title"},"🔍 Node.js 활용한 택배사 배송조회 기능",-1),O=o("ul",{class:"mt-2"},[o("li",null,"Node.js 개발 환경 세팅 및 배송조회 API 택배사 디버깅"),o("li",null," 기존 API에서 제공하는 틀은 유지하되, 명칭 통일 작업을 통해 내부 서비스에서 사용 "),o("li",null,"배송조회 불가 택배사 신규개발")],-1),Y=o("hr",null,null,-1),z=o("figure",null,[o("img",{src:A,alt:"배송조회기능"})],-1),q={class:"point"},F=o("ol",{class:"mt-1"},[o("li",null,[t(" Node.js는 Chrome의 V8엔진을 이용하여 javascript로 브라우저가 아니라 서버를 구축 할 수 있다. 이 때, "),o("code",null,"express"),t("활용 ")]),o("li",null,[t(" 코드 수정을 할 때마다, 서버를 내렸다가 올리는 번거로움을 줄이기 위해 "),o("code",null,"nodemon"),t("을 활용하였다. ")])],-1),G={class:"mt-4"},J={class:"point"},K=o("ol",{class:"mt-1"},[o("li",null,[t(" 기존 제공하는 API에서는 서로다른 상태값을 나타내고있어 "),o("code",null,"parseStatus"),t(" 변수에 상품 인수, 배송 출발, 배송 완료 명칭통일 ")]),o("li",null,[o("code",null,"progresses"),t("변수엔 staus, time, location, description 정보를 담아 관리자 사이트에서 서로 상이한 택배사이더라도 동일하게 볼 수 있도록 작업진행 ")])],-1),Q={class:"pages-node-section5 pt-5 mt-10"},U=o("div",{class:"left-top"},"Next Project",-1),X={class:"move-link-wrap"},Z=o("div",{class:"pop-content"},[o("div",{class:"img-wrap"},[o("img",{src:$,alt:"rest-code"})]),o("div",{class:"img-wrap"},[o("img",{src:y,alt:"config-code"})])],-1),oo=o("div",{class:"pop-content"},[o("div",{class:"img-wrap"},[o("img",{src:b,alt:"axios-code"})])],-1),ao={__name:"Node",setup(eo){p.registerPlugin(f);const n=C(),i=u(!1),a=u(!1);return h(()=>{p.fromTo(".pages-node-section4 .left-top",{x:200,opacity:0},{x:0,opacity:1,duration:1,ease:"power4.out",scrollTrigger:{trigger:".pages-node-section4",start:"top 90%",scrub:!0}})}),(so,e)=>{const g=k("RouterLink");return c(),j("div",{class:"pages-node",onMouseenter:e[12]||(e[12]=s=>l(n).active=!1)},[I,o("section",M,[d(N,{title:"배송조회 API"})]),S,o("section",V,[E,d(P,null,{inner:r(()=>[T,B]),_:1}),D]),o("section",R,[L,o("div",W,[H,O,Y,o("div",null,[z,o("p",q,[t(" ✔ REST 서버를 편리하게 구현하게 해주는 프레임워크 활용 "),o("button",{type:"button",class:"modal_open view",onMouseenter:e[0]||(e[0]=s=>l(n).isActive()),onMouseleave:e[1]||(e[1]=s=>l(n).isActive()),onClick:e[2]||(e[2]=s=>i.value=!0)}," code view ",32)]),F]),o("div",G,[o("p",J,[t(" ✔ Node.js를 위한 API를 활용하는 Axios 활용 "),o("button",{type:"button",class:"modal_open view",onMouseenter:e[3]||(e[3]=s=>l(n).isActive()),onMouseleave:e[4]||(e[4]=s=>l(n).isActive()),onClick:e[5]||(e[5]=s=>a.value=!0)}," code view ",32)]),K])])]),o("section",Q,[U,o("div",X,[d(g,{to:"/Pages/Toy",class:"move",onMouseenter:e[6]||(e[6]=s=>l(n).active=!0),onMouseleave:e[7]||(e[7]=s=>l(n).active=!1)},{default:r(()=>[t(" Toy Project ")]),_:1})])]),i.value?(c(),m(_,{key:0,height:"auto",cancelLabel:"확인",confirmBtn:"",title:"CODE PREVIEW",overflowY:"auto",maxHeight:"700px",onClose:e[8]||(e[8]=s=>i.value=!1),onConfirm:e[9]||(e[9]=s=>i.value=!1)},{content:r(()=>[Z]),_:1})):v("",!0),a.value?(c(),m(_,{key:1,height:"auto",cancelLabel:"확인",confirmBtn:"",title:"CODE PREVIEW",overflowY:"auto",maxHeight:"700px",onClose:e[10]||(e[10]=s=>a.value=!1),onConfirm:e[11]||(e[11]=s=>a.value=!1)},{content:r(()=>[oo]),_:1})):v("",!0)],32)}}};export{ao as default};
