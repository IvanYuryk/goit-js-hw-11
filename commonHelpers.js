import{S as u,i as l}from"./assets/vendor-46aac873.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const m=new u(".gallery a",{captionDelay:250,captionsData:"alt"}),c=document.querySelector("#searchForm"),a=document.querySelector(".gallery");c.addEventListener("submit",p);function p(n){n.preventDefault();const o=n.target.keyword.value.trim();o&&(a.innerHTML='<span class="loader"></span>',d(o).then(r=>g(r)).catch(r=>h(r)),c.reset())}function d(n){const o="https://pixabay.com/",r="api/",i=new URLSearchParams({key:"42208232-118910d8102453b47e924ae6c",q:n,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=`${o}${r}?${i}`;return fetch(e).then(t=>{if(t.ok)return t.json();throw new Error(`${t.status} - ${t.statusText}`)})}function g({totalHits:n,hits:o}){if(parseInt(n)>0){const r=o.map(y).join("");a.innerHTML=r,m.refresh()}else a.innerHTML="",f()}function f(){l.warning({title:"Sorry,",titleColor:"#FFFFFF",message:"there are no images matching your search query. Please try again!",messageColor:"#FFFFFF",messageSize:"16px",backgroundColor:"#FFA000",iconUrl:dangIcon,position:"center",close:!1,buttons:[[`<button type="button" style="
          background-color: #FFA000; 
          width: 20px; 
          height: 20px; 
          padding: 5px">
            <img style="
              width: 10px; 
              height: 10px" 
              src=${xIcon}>
        </button>`,function(n,o){n.hide({transitionOut:"fadeOut"},o)}]]})}function h(n){l.show({title:"Error",titleColor:"#FFFFFF",message:`${n}`,messageColor:"#FFFFFF",messageSize:"16px",backgroundColor:"#EF4040",iconUrl:errorIcon,position:"topRight",close:!1,buttons:[[`<button type="button" style="
          background-color: #EF4040; 
          width: 20px; 
          height: 20px; 
          padding: 5px">
            <img style="
              width: 10px; 
              height: 10px" 
                src=${xIcon}>
        </button>`,function(o,r){o.hide({transitionOut:"fadeOut"},r)}]]})}function y({webformatURL:n,largeImageURL:o,tags:r,likes:i,views:e,comments:t,downloads:s}){return`
  <ul class="card">
    <a class="gallery-link" href="${o}">
      <img class="gallery-image" src="${n}" alt="${r}">
    </a>
    <ul class="item-img">
      <li class="elem-img">
        <p class="elem-name">Likes</p>
        <p>${i}</p>
      </li>
      <li class="elem-img">
        <p class="elem-name">Views</p>
        <p>${e}</p>
      </li>
      <li class="elem-img">
        <p class="elem-name">Comments</p>
        <p>${t}</p>
      </li>
      <li class="elem-img">
        <p class="elem-name">Downloads</p>
        <p>${s}</p>
      </li>
    </ul>
  </ul>
  `}
//# sourceMappingURL=commonHelpers.js.map
