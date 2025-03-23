import{a as p,i as u,S as y}from"./assets/vendor-DVva8SYe.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const L=o=>p.get("https://pixabay.com/api/",{params:{key:"49447810-de68c09371bf9037b3e54ca3c",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(s=>s.data.hits).catch(s=>{throw console.error(s),s});function b(o,t){if(t.innerHTML="",o.length===0){u.error({backgroundColor:"#EF4040",messageColor:"#FAFAFB",theme:"dark",progressBarColor:"#B51B1B",maxWidth:"432",messageSize:"16",position:"topRight",message:"Sorry, there are no images matching your search query. Please, try again!"});return}const a=o.map(({webformatURL:e,largeImageURL:r,tags:i,likes:h,views:m,comments:f,downloads:g})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${r}">
          <img class="gallery-image" src="${e}" alt="${i}" />
        </a>
        <ul class="cards-data">
          <li class="card-data"><h3>Likes</h3><p>${h}</p></li>
          <li class="card-data"><h3>Views</h3><p>${m}</p></li>
          <li class="card-data"><h3>Comments</h3><p>${f}</p></li>
          <li class="card-data"><h3>Downloads</h3><p>${g}</p></li>
        </ul>
      </li>
    `).join("");t.insertAdjacentHTML("beforeend",a),new y(".gallery a").refresh()}function l(){u.error({backgroundColor:"#EF4040",messageColor:"#FAFAFB",theme:"dark",progressBarColor:"#B51B1B",maxWidth:"432",messageSize:"16",position:"topRight",message:"Sorry, there are no images matching your search query. Please, try again!"})}function n(o){const t=document.querySelector(".loader");o?t.classList.remove("visually-hidden"):t.classList.add("visually-hidden")}const c=document.querySelector(".form"),d=document.querySelector(".gallery");c.addEventListener("submit",o=>{o.preventDefault();const t=o.target["search-text"].value;d.innerHTML="",n(!0),setTimeout(()=>{L(t).then(a=>{a.length===0?l():b(a,d)}).catch(a=>{console.log(a),l()}).finally(()=>{n(!1),c.reset()})},100)});
//# sourceMappingURL=index.js.map
