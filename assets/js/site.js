const b=document.getElementById('menuBtn'),n=document.getElementById('nav');
b.addEventListener('click',()=>{
  const open=n.classList.toggle('open');
  b.setAttribute('aria-expanded',String(open));
  b.setAttribute('aria-label',open?'Закрыть меню':'Открыть меню');
});
n.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
  n.classList.remove('open');
  b.setAttribute('aria-expanded','false');
  b.setAttribute('aria-label','Открыть меню');
}));
document.addEventListener('keydown',e=>{
  if(e.key==='Escape'&&n.classList.contains('open')){
    n.classList.remove('open');
    b.setAttribute('aria-expanded','false');
    b.setAttribute('aria-label','Открыть меню');
    b.focus();
  }
});

const heroSlides=[...document.querySelectorAll('.hero-slide')];
const heroReviews=document.getElementById('heroReviews');
const heroReviewData=[`<div class="hero-review-card"><div class="hero-review-text">«Завтра я увижу живого Рому Ланкина!»</div><a href="https://gin-new.livejournal.com/" target="_blank" rel="noopener">gin_new</a><div class="hero-review-text" style="margin-top:13px">«Это невозможно. Ланкин, как и прочие греческие боги, персонаж мифический. Существует только в преданиях.»</div><a href="https://pesen-net.livejournal.com/" target="_blank" rel="noopener">pesen_net</a></div>`,`<div class="hero-review-card"><div class="hero-review-text">«Как хорошо, что узнала Вас, Роман! Спасибо за песни — музыку и поэзию, лирику и юмор, вкус и интеллигентность.»</div><a href="https://www.facebook.com/galina.bir?comment_id=Y29tbWVudDoxMjYzMjI5MDU5MTU4NjgzXzEzNjg1OTIxMjE1Nzc5MjE%3D&__cft__%5b0%5d=AZXSUIxjUVokywmND486xvPfmpCtQyqn1m_8-GLgCu9ay3V3TQ2j_HKxlas5wRHfdCtrwG-uZ4PSpKqUherSmoQ4-3Nsh1-1_cFA7oKezVPiyY0yL5R_rQR1MCo9u5jNIG-oVnOPLDYMFbxJBiJ_j0WHzFA1CIwekjqOro8wvy3176keH_M8PkMMg-V1bPiWOcC-bgk4yW7R4sCunM7rJL0d&__tn__=R-R" target="_blank" rel="noopener">Галина Бирчанская</a></div>`,`<div class="hero-review-card"><div class="hero-review-text">«Тонкая струна сердца, голос, душа, аккорд, звук — все соединяется.. Спасибо, Роман, за ваше творчество и Свет!»</div><a href="https://www.youtube.com/@tatianakumaitovs5582" target="_blank" rel="noopener">@tatianakumaitovs5582</a></div>`,`<div class="hero-review-card"><div class="hero-review-text">«Какая неповторимая гармония всего: голоса, аккомпанемента, текста, смысла, такта, доброты!!! Слушаешь и не веришь: разве так можно было? Оказывается, если это Роман Ланкин, то можно!!!»</div><a href="https://www.facebook.com/valomiga?comment_id=Y29tbWVudDoxNDU0Mzk3NDEzMzc1MTc5XzEwMTY3MTgzNzEwMDA1OTc%3D&__cft__%5b0%5d=AZZQRhSFE7uO5umc2lbzHJzTqqmOZB_627HJ3qMnKVhk_uQEIrC0UdD9U_k6X-OCwoHptpeIhN6R5_KXRvG2SedlUVEkywJZ0dOBaIODf8TUhhLlt8LL9AjWH92cfweIZZRlIn5DSvKBk_uOfDhCeCmU2JIPsbIF7vjKAn4cTgLDSdUvQxG3wc81P_L8qztyMvxWhXJ392E2gQMRa18vHun4&__tn__=R-R" target="_blank" rel="noopener">Валерий Ломыга</a></div>`,`<div class="hero-review-card"><div class="hero-review-text">«Умница, умница!!! Все есть — живая гитара, голос! Пой, дружище, пой!!!»</div><a href="https://www.facebook.com/maksym.oleynikov.9?comment_id=Y29tbWVudDoxNDM0NDQ3MDQyMDM2ODgzXzEwNDM1NDQxNDE0ODI5Mjk%3D&__cft__%5b0%5d=AZZU113a8EnE9rKAfsVrJDGD4v6TqjPZkhVprrYAiTzD-KPrqSyRNBSDKf_HAqeAqYa8oRCBaeTzXrASL7AwmPQs8D0-D2l_xuI15Y-mADYVSFXfxPsIDvygR859uiAMaBgTvzBkciuliQCVE4FmvpKojSw74H_SEDWxNioE1qKVeaUQTQWGgolqXdFFUhsF3aSGR3_mb64v91M4WF3isDpQ&__cft__%5b1%5d=AZY-yBumG3vDFg8Oy4M1tjFYWns_N8cfqCOeyjUtlz2Swkp81RZbST_a0pOpl2zJmklgSUvKOLNgSAOUR6GziSKB0kr0O4XT6Y_-g4QfdsNxxYQvSQpKxJD0B2TfCjfU9v0HJEu2LU-jxaIv80ecuOipr-DRV_bbVADvxfe7BKH0FPTVZ9mKn3st6Eo9BnLjHDA&__tn__=R%5d-R" target="_blank" rel="noopener">Maksym Oleynikov</a></div>`,`<div class="hero-review-card"><div class="hero-review-text">«И что творят пальцы Романа Ланкина на грифе, и как звучит каждая струна его гитары — это фантастика!»</div><a href="https://www.facebook.com/aleksei.vasilev.1957?comment_id=Y29tbWVudDoxNDkwMzYwNjczMTEyMTg2XzMzNDI0NTg3NjU5MzgzMjg%3D&__tn__=R" target="_blank" rel="noopener">Алексей Васильев</a></div>`];
function showHeroReview(i){
  if(!heroReviews) return;
  heroReviews.innerHTML=heroReviewData[i]||'';
  heroReviews.dataset.slide=String(i+1);
  heroReviews.style.display=heroReviewData[i]?'grid':'none';
}
showHeroReview(0);
if(heroSlides.length>1){let heroIndex=0;setInterval(()=>{
  heroSlides[heroIndex].classList.remove('active');
  heroIndex=(heroIndex+1)%heroSlides.length;
  heroSlides[heroIndex].classList.add('active');
  showHeroReview(heroIndex);
},6000);}
