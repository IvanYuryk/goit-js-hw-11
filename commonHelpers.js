import{i as c,S as g}from"./assets/vendor-9310f15c.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const p="/goit-js-hw-11/assets/dang-75a3a476.svg",d="/goit-js-hw-11/assets/err-d9947029.svg",u="/goit-js-hw-11/assets/x-a193917d.svg";function f(){c.warning({title:"Sorry,",titleColor:"#FFFFFF",message:"there are no images matching your search query. Please try again!",messageColor:"#FFFFFF",messageSize:"16px",backgroundColor:"#FFA000",iconUrl:p,position:"center",close:!1,buttons:[[`<button type="button" style="
          background-color: #FFA000; 
          width: 20px; 
          height: 20px; 
          padding: 5px">
            <img style="
              width: 10px; 
              height: 10px" 
              src=${u}>
        </button>`,function(n,o){n.hide({transitionOut:"fadeOut"},o)}]]})}function h(n){c.show({title:"Error",titleColor:"#FFFFFF",message:`${n}`,messageColor:"#FFFFFF",messageSize:"16px",backgroundColor:"#EF4040",iconUrl:d,position:"topRight",close:!1,buttons:[[`<button type="button" style="
          background-color: #EF4040; 
          width: 20px; 
          height: 20px; 
          padding: 5px">
            <img style="
              width: 10px; 
              height: 10px" 
                src=${u}>
        </button>`,function(o,r){o.hide({transitionOut:"fadeOut"},r)}]]})}const y=new g(".gallery a",{captionDelay:250,captionsData:"alt"}),a=document.querySelector(".gallery");function F({totalHits:n,hits:o}){if(parseInt(n)>0){const r=o.map(b).join("");a.innerHTML=r,y.refresh()}else a.innerHTML="",f()}function b({webformatURL:n,largeImageURL:o,tags:r,likes:s,views:e,comments:t,downloads:i}){return`
  <li class="gallery-item">
    <a class="gallery-link" href="${o}">
      <img class="gallery-image" src="${n}" alt="${r}">
    </a>
    <ul class="item-img">
      <li class="elem-img">
        <p class="elem-name">Likes</p>
        <p>${s}</p>
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
  `}function x(n){const o="https://pixabay.com/",r="api/",s=new URLSearchParams({key:"42208232-118910d8102453b47e924ae6c",q:n,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=`${o}${r}?${s}`;return fetch(e).then(t=>{if(t.ok)return t.json();throw new Error(`${t.status} - ${t.statusText}`)})}const m=document.querySelector("#searchForm"),l=document.querySelector(".loader");m.addEventListener("submit",w);function w(n){n.preventDefault();const o=n.target.keyword.value.trim();o&&(l.style.display="block",x(o).then(r=>{F(r)}).catch(r=>{h(r)}).finally(()=>l.style.display="none"),m.reset())}
//# sourceMappingURL=commonHelpers.js.map
