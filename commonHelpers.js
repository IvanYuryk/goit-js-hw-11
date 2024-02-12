import{S as p,i as c}from"./assets/vendor-46aac873.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const g="/goit-js-hw-11/assets/dang-75a3a476.svg",d="/goit-js-hw-11/assets/err-d9947029.svg",u="/goit-js-hw-11/assets/x-a193917d.svg",f=new p(".gallery a",{captionDelay:250,captionsData:"alt"}),m=document.querySelector("#searchForm"),l=document.querySelector(".gallery"),a=document.querySelector(".loader");m.addEventListener("submit",h);function h(n){n.preventDefault();const o=n.target.keyword.value.trim();o&&(a.style.display="block",y(o).then(s=>{F(s),a.style.display="none"}).catch(s=>{x(s),a.style.display="none"}),m.reset())}function y(n){const o="https://pixabay.com/",s="api/",r=new URLSearchParams({key:"42208232-118910d8102453b47e924ae6c",q:n,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=`${o}${s}?${r}`;return fetch(e).then(t=>{if(t.ok)return t.json();throw new Error(`${t.status} - ${t.statusText}`)})}function F({totalHits:n,hits:o}){if(parseInt(n)>0){const s=o.map(w).join("");l.innerHTML=s,f.refresh()}else l.innerHTML="",b()}function b(){c.warning({title:"Sorry,",titleColor:"#FFFFFF",message:"there are no images matching your search query. Please try again!",messageColor:"#FFFFFF",messageSize:"16px",backgroundColor:"#FFA000",iconUrl:g,position:"center",close:!1,buttons:[[`<button type="button" style="
          background-color: #FFA000; 
          width: 20px; 
          height: 20px; 
          padding: 5px">
            <img style="
              width: 10px; 
              height: 10px" 
              src=${u}>
        </button>`,function(n,o){n.hide({transitionOut:"fadeOut"},o)}]]})}function x(n){c.show({title:"Error",titleColor:"#FFFFFF",message:`${n}`,messageColor:"#FFFFFF",messageSize:"16px",backgroundColor:"#EF4040",iconUrl:d,position:"topRight",close:!1,buttons:[[`<button type="button" style="
          background-color: #EF4040; 
          width: 20px; 
          height: 20px; 
          padding: 5px">
            <img style="
              width: 10px; 
              height: 10px" 
                src=${u}>
        </button>`,function(o,s){o.hide({transitionOut:"fadeOut"},s)}]]})}function w({webformatURL:n,largeImageURL:o,tags:s,likes:r,views:e,comments:t,downloads:i}){return`
  <li class="gallery-item">
    <a class="gallery-link" href="${o}">
      <img class="gallery-image" src="${n}" alt="${s}">
    </a>
    <ul class="item-img">
      <li class="elem-img">
        <p class="elem-name">Likes</p>
        <p>${r}</p>
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
        <p>${i}</p>
      </li>
    </ul>
  </li>
  `}
//# sourceMappingURL=commonHelpers.js.map
