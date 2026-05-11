import{a as d,S as u,i as n}from"./assets/vendor-73qhTu8_.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();async function f(o){return(await d.get("https://pixabay.com/api/",{params:{key:"55801241-e99e372d55d0d3e8c8675385f",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const c=document.querySelector(".gallery"),l=document.querySelector(".loader");let m=new u(".gallery a",{captionsData:"alt",captionDelay:250});function p(){l.classList.remove("is-hidden")}function h(){l.classList.add("is-hidden")}function y(){c.innerHTML=""}function g(o){const s=o.map(t=>`
    <li class="gallery-item">
        <a class="gallery-link" href="${t.largeImageURL}">
            <img
            class="gallery-image"
            src="${t.webformatURL}" 
            alt="${t.tags}"
            />
        </a>

        <div class="img-description">
            <div class="stat">
                <h3>Likes</h3>
                <p>${t.likes}</p>
            </div>
            <div class="stat">
                <h3>Views</h3>
                <p>${t.views}</p>
            </div>
            <div class="stat">
                <h3>Comments</h3>
                <p>${t.comments}</p>
            </div>
            <div class="stat">
                <h3>Downloads</h3>
                <p>${t.downloads}</p>
            </div>
        </div>  
    </li>`).join("");c.insertAdjacentHTML("beforeend",s),m.refresh()}const v=document.querySelector(".form");v.addEventListener("submit",async o=>{o.preventDefault();const s=o.target.elements["search-text"].value.trim();if(s){y(),p();try{const t=await f(s);if(t.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}g(t.hits)}catch{n.error({message:"Something went wrong. Please try again later."})}finally{h()}}});
//# sourceMappingURL=index.js.map
