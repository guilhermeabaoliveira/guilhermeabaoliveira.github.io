(function(){
  var root=document.documentElement;
  function syncAlts(l){document.querySelectorAll('img[data-alt-en]').forEach(function(im){if(!im.dataset.altPt)im.dataset.altPt=im.alt;im.alt=l==='en'?im.dataset.altEn:im.dataset.altPt})}
  function setLang(l){
    root.setAttribute('data-lang',l);root.lang=l==='en'?'en':'pt-BR';
    document.querySelectorAll('.lang button').forEach(function(b){b.setAttribute('aria-pressed',String(b.dataset.set===l))});
    syncAlts(l);try{localStorage.setItem('ga-lang',l)}catch(e){}
  }
  setLang(root.getAttribute('data-lang')==='en'?'en':'pt');
  document.querySelectorAll('.lang button').forEach(function(b){b.addEventListener('click',function(){setLang(b.dataset.set)})});

  var tb=document.getElementById('themeBtn');
  function syncTheme(){var d=root.getAttribute('data-theme')!=='light';tb.setAttribute('aria-pressed',String(!d));document.querySelector('meta[name=theme-color]').content=d?'#0B1214':'#F4F6F6'}
  tb.addEventListener('click',function(){var n=root.getAttribute('data-theme')==='light'?'dark':'light';root.setAttribute('data-theme',n);try{localStorage.setItem('ga-theme',n)}catch(e){}syncTheme()});
  syncTheme();

  var reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var items=document.querySelectorAll('.rv,.facts');
  if(reduce||!('IntersectionObserver' in window)){items.forEach(function(e){e.classList.add('in')})}
  else{
    var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{rootMargin:'0px 0px -12% 0px',threshold:0.08});
    items.forEach(function(e){io.observe(e)});
  }

})();
