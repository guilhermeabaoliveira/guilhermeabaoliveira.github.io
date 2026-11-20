(function(){
  var root=document.documentElement;
  function syncAlts(l){document.querySelectorAll('img[data-alt-en]').forEach(function(im){if(!im.dataset.altPt)im.dataset.altPt=im.alt;im.alt=l==='en'?im.dataset.altEn:im.dataset.altPt})}
  function setLang(l){
    root.setAttribute('data-lang',l);root.lang=l==='en'?'en':'pt-BR';
    document.querySelectorAll('.lang button').forEach(function(b){b.setAttribute('aria-pressed',String(b.dataset.set===l))});
    syncAlts(l);document.querySelectorAll('input[data-ph-en]').forEach(function(i){if(!i.dataset.phPt)i.dataset.phPt=i.placeholder;i.placeholder=l==='en'?i.dataset.phEn:i.dataset.phPt});if(window.__projSync)window.__projSync();try{localStorage.setItem('ga-lang',l)}catch(e){}
  }
  setLang(root.getAttribute('data-lang')==='en'?'en':'pt');
  document.querySelectorAll('.lang button').forEach(function(b){b.addEventListener('click',function(){setLang(b.dataset.set)})});

  var tb=document.getElementById('themeBtn');
  function syncTheme(){var d=root.getAttribute('data-theme')!=='light';tb.setAttribute('aria-pressed',String(!d));document.querySelector('meta[name=theme-color]').content=d?'#0D0B09':'#EEE4CE'}
  tb.addEventListener('click',function(){var n=root.getAttribute('data-theme')==='light'?'dark':'light';root.setAttribute('data-theme',n);try{localStorage.setItem('ga-theme',n)}catch(e){}syncTheme()});
  syncTheme();

  var reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var items=document.querySelectorAll('.rv,.facts');
  if(reduce||!('IntersectionObserver' in window)){items.forEach(function(e){e.classList.add('in')})}
  else{
    var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{rootMargin:'0px 0px -12% 0px',threshold:0.08});
    items.forEach(function(e){io.observe(e)});
  }

  /* busca de projetos */
  var q=document.getElementById('proj-search');
  if(q){
    var cards=[].slice.call(document.querySelectorAll('#proj-list .pcard')),chips=[].slice.call(document.querySelectorAll('.chips button')),cnt=document.getElementById('proj-count'),empty=document.getElementById('proj-empty'),f='all';
    function norm(t){return (t||'').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'')}
    function run(){var t=norm(q.value).trim().split(/\s+/).filter(Boolean),n=0;
      cards.forEach(function(c){var hay=norm(c.textContent+' '+c.dataset.kw+' '+c.dataset.tags);var ok=(f==='all'||c.dataset.tags.split(' ').indexOf(f)>-1)&&t.every(function(w){return hay.indexOf(w)>-1});c.hidden=!ok;if(ok)n++});
      var en=root.getAttribute('data-lang')==='en';cnt.textContent=en?(n===1?'1 project':n+' projects'):(n===1?'1 projeto':n+' projetos');empty.hidden=n>0}
    q.addEventListener('input',run);
    chips.forEach(function(b){b.addEventListener('click',function(){f=b.dataset.f;chips.forEach(function(x){x.setAttribute('aria-pressed',String(x===b))});run()})});
    window.__projSync=run;run();
  }

  /* rolagem: polaroids da home e telas dos projetos */
  function prog(sec){var r=sec.getBoundingClientRect(),tot=sec.offsetHeight-window.innerHeight;return tot>0?Math.min(1,Math.max(0,-r.top/tot)):0}
  var me=document.getElementById('eu');
  var rest=[[-38,-10,-6],[34,-24,5],[-20,22,-3],[40,16,7]];
  function ease(t){return 1-Math.pow(1-t,3)}
  var shotsSecs=[].slice.call(document.querySelectorAll('.shots-scene'));
  function setOn(list,k){list.forEach(function(e,i){e.classList.toggle('on',i===k)})}
  function onScroll(){
    if(me&&!reduce){var p=prog(me),ps=[].slice.call(me.querySelectorAll('.me-p')),ls=[].slice.call(me.querySelectorAll('.me-lines li')),n=ps.length;
      ps.forEach(function(el,i){var t=i===0?1:Math.min(1,Math.max(0,(p*n-i+0.15)/0.55)),e=ease(t),r=rest[i%4];
        el.style.opacity=t>0?1:0;el.style.zIndex=i+1;
        el.style.transform='translate(-50%,-50%) translate('+r[0]+'px,'+(r[1]+(1-e)*window.innerHeight*1.1)+'px) rotate('+(r[2]+(1-e)*(i%2?18:-18))+'deg)'});
      setOn(ls,Math.min(n-1,Math.floor(p*n+0.15)))}
    shotsSecs.forEach(function(sec){var p=prog(sec),ly=[].slice.call(sec.querySelectorAll('.layer')),st=[].slice.call(sec.querySelectorAll('.shot-steps li')),k=Math.min(st.length-1,Math.floor(p*st.length));ly.forEach(function(e){e.classList.toggle('on',e.dataset.k.split(',').indexOf(String(k))>-1)});sec.querySelectorAll('.hl').forEach(function(h){h.classList.toggle('on',h.dataset.k===String(k))});setOn(st,k)})
  }
  if(me&&reduce){me.querySelectorAll('.me-lines li').forEach(function(l){l.classList.add('on')})}
  if(reduce)shotsSecs.forEach(function(sec){sec.querySelectorAll('.shot-steps li').forEach(function(l){l.classList.add('on')})});
  if(me||shotsSecs.length){window.addEventListener('scroll',function(){requestAnimationFrame(onScroll)},{passive:true});window.addEventListener('resize',onScroll);onScroll()}

  /* texto que acende palavra por palavra */
  var rv=document.querySelector('.reveal-scene');
  if(rv){
    rv.querySelectorAll('.reveal-text > span').forEach(function(sp){var ws=sp.textContent.split(/(\s+)/);sp.textContent='';ws.forEach(function(w){if(/^\s+$/.test(w)){sp.appendChild(document.createTextNode(w))}else if(w){var e=document.createElement('span');e.className='w';e.textContent=w;sp.appendChild(e)}})});
    function lite(){var r=rv.getBoundingClientRect(),tot=rv.offsetHeight-innerHeight,p=reduce?1:Math.min(1,Math.max(0,(-r.top+innerHeight*.35)/(tot+innerHeight*.2)));
      rv.querySelectorAll('.reveal-text > span').forEach(function(sp){var ws=sp.querySelectorAll('.w'),n=Math.round(p*ws.length*1.05);ws.forEach(function(w,i){w.classList.toggle('lit',i<n)})})}
    window.addEventListener('scroll',function(){requestAnimationFrame(lite)},{passive:true});lite();
  }

  /* brasas subindo, bem esparsas: só no tema escuro e sem movimento reduzido */
  if(!reduce){
    var cv=document.createElement('canvas');cv.id='embers';cv.setAttribute('aria-hidden','true');document.body.insertBefore(cv,document.body.firstChild);
    var cx=cv.getContext('2d'),W=0,H=0,dpr=Math.min(window.devicePixelRatio||1,2),ps=[];
    function size(){W=cv.clientWidth;H=cv.clientHeight;cv.width=W*dpr;cv.height=H*dpr;cx.setTransform(dpr,0,0,dpr,0,0)}
    function spawn(y){return{x:Math.random()*W,y:y==null?H+10:y,r:.8+Math.random()*1.9,vy:.18+Math.random()*.45,ph:Math.random()*6.28,a:.25+Math.random()*.55,life:0}}
    size();window.addEventListener('resize',size);
    var N=Math.round(Math.min(70,W/20));for(var i=0;i<N;i++)ps.push(spawn(Math.random()*H));
    function tick(){
      if(!document.hidden){var lt=root.getAttribute('data-theme')==='light';
        cx.clearRect(0,0,W,H);
        for(var i=0;i<ps.length;i++){var p=ps[i];p.life+=.016;p.y-=p.vy;p.x+=Math.sin(p.life*1.3+p.ph)*.35;
          var fl=p.a*(.65+.35*Math.sin(p.life*6+p.ph))*Math.min(1,p.y/(H*.25));
          var g=cx.createRadialGradient(p.x,p.y,0,p.x,p.y,p.r*5);if(lt){g.addColorStop(0,'rgba(176,104,38,'+fl*.75+')');g.addColorStop(.4,'rgba(196,140,60,'+fl*.3+')');g.addColorStop(1,'rgba(196,140,60,0)')}else{g.addColorStop(0,'rgba(255,190,120,'+fl+')');g.addColorStop(.35,'rgba(224,112,58,'+fl*.45+')');g.addColorStop(1,'rgba(224,112,58,0)')}
          cx.fillStyle=g;cx.beginPath();cx.arc(p.x,p.y,p.r*5,0,6.283);cx.fill();
          if(p.y<-20)ps[i]=spawn()}
      }
      requestAnimationFrame(tick)}
    requestAnimationFrame(tick);
  }
})();
