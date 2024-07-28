import{S as l,i as a}from"./assets/vendor-8c59ed88.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&t(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const m="29243392-4dbc80ece43085fc7952f4964",u="https://pixabay.com/api/";function f(i){const r=i.trim(),s=`${u}?key=${m}&q=${encodeURIComponent(r)}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(s).then(t=>{if(!t.ok)throw new Error(t.statusText);return t.json()}).then(t=>t.hits).catch(t=>{throw console.error("Error fetching images:",t),t})}function d(i){const r=document.querySelector(".image-list");r.innerHTML="";const s=i.map(e=>`<li class="gallery-item">
      <a href="${e.largeImageURL}" class="gallery-link" data-lightbox="gallery">
              <div class="image-wrapper">
                <img src="${e.webformatURL}" alt="${e.tags}" class="gallery-image" />
              </div>
              <div class="image-info">
                <p class="info-item"><b>Likes:</b> ${e.likes}</p>
                <p class="info-item"><b>Views:</b> ${e.views}</p>
                <p class="info-item"><b>Comments:</b> ${e.comments}</p>
                <p class="info-item"><b>Downloads:</b> ${e.downloads}</p>
              </div>
            </a>
          </li>`).join("");r.innerHTML=s,new l(".gallery-link",{captionsData:"alt",captionDelay:0}).refresh()}const p=document.querySelector(".form"),g=document.querySelector(".form-input"),c=document.querySelector(".loader"),y=document.querySelector(".image-list");p.addEventListener("submit",i=>{i.preventDefault();const r=g.value.trim();if(r===""){a.warning({title:"Warning",message:"Please enter a search term."});return}c.style.display="block",y.innerHTML="",f(r).then(s=>{s.length===0?a.info({title:"Info",message:"Sorry, there are no images matching your search query. Please try again!"}):d(s)}).catch(s=>{a.error({title:"Error",message:`Something went wrong: ${s.message}`})}).finally(()=>{c.style.display="none"})});
//# sourceMappingURL=commonHelpers.js.map
