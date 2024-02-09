import{S as m,i as l}from"./assets/vendor-46aac873.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const p="/goit-js-hw-10/assets/dang-75a3a476.svg",g="/goit-js-hw-10/assets/err-d9947029.svg",c="/goit-js-hw-10/assets/x-a193917d.svg",d=new m(".gallery a",{captionDelay:250,captionsData:"alt"}),u=document.querySelector("#searchForm"),a=document.querySelector(".gallery");u.addEventListener("submit",f);function f(s){s.preventDefault();const o=s.target.keyword.value.trim();o&&(a.innerHTML='<span class="loader"></span>',h(o).then(n=>y(n)).catch(n=>b(n)),u.reset())}function h(s){const o="https://pixabay.com/",n="api/",r=new URLSearchParams({key:"YOUR_PIXABAY_API_KEY",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=`${o}${n}?${r}`;return fetch(e).then(t=>{if(t.ok)return t.json();throw new Error(`${t.status} - ${t.statusText}`)})}function y({totalHits:s,hits:o}){if(parseInt(s)>0){const n=o.map(x).join("");a.innerHTML=n,d.refresh()}else a.innerHTML="",F()}function F(){l.warning({title:"Sorry,",titleColor:"#FFFFFF",message:"there are no images matching your search query. Please try again!",messageColor:"#FFFFFF",messageSize:"16px",backgroundColor:"#FFA000",iconUrl:p,position:"center",close:!1,buttons:[[`<button type="button" style="
          background-color: #FFA000; 
          width: 20px; 
          height: 20px; 
          padding: 5px">
            <img style="
              width: 10px; 
              height: 10px" 
              src=${c}>
        </button>`,function(s,o){s.hide({transitionOut:"fadeOut"},o)}]]})}function b(s){l.show({title:"Error",titleColor:"#FFFFFF",message:`${s}`,messageColor:"#FFFFFF",messageSize:"16px",backgroundColor:"#EF4040",iconUrl:g,position:"topRight",close:!1,buttons:[[`<button type="button" style="
          background-color: #EF4040; 
          width: 20px; 
          height: 20px; 
          padding: 5px">
            <img style="
              width: 10px; 
              height: 10px" 
                src=${c}>
        </button>`,function(o,n){o.hide({transitionOut:"fadeOut"},n)}]]})}function x({webformatURL:s,largeImageURL:o,tags:n,likes:r,views:e,comments:t,downloads:i}){return`
  <ul class="card">
    <a class="gallery-link" href="${o}">
      <img class="gallery-image" src="${s}" alt="${n}">
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
  </ul>
  `}
//# sourceMappingURL=commonHelpers.js.map
