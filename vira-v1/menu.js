(()=>{
  const ids=['menu','home','cards','rank','how','game','reveal'];
  function go(id){
    ids.forEach(name=>{const el=document.getElementById(name);if(el)el.classList.toggle('on',name===id)});
    window.scrollTo(0,0);
  }
  function addBack(id,title){
    const screen=document.getElementById(id); if(!screen)return;
    const head=screen.querySelector('.pageHead'); if(!head||head.dataset.fixedBack)return;
    head.dataset.fixedBack='1'; head.classList.add('pageHeadWithBack');
    const back=document.createElement('button'); back.className='screenBack'; back.type='button'; back.setAttribute('aria-label','Voltar para início'); back.textContent='‹';
    back.addEventListener('click',()=>go('menu'));
    head.insertBefore(back,head.firstChild);
  }
  document.addEventListener('DOMContentLoaded',()=>{
    document.querySelectorAll('[data-menu-go]').forEach(btn=>btn.addEventListener('click',e=>{e.preventDefault();e.stopPropagation();go(btn.dataset.menuGo)}));
    addBack('cards','Cartas'); addBack('rank','Ranking'); addBack('how','Como jogar');
    go('menu');
  });
  window.viraMenu=go;
})();