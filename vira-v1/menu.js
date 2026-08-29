(()=>{
  const screens=['menu','home','cards','rank','how','game','reveal'];
  function go(id){
    screens.forEach(name=>{
      const el=document.getElementById(name);
      if(!el)return;
      el.classList.toggle('on',name===id);
      el.style.display=name===id?'flex':'none';
    });
    window.scrollTo({top:0,left:0,behavior:'instant'});
  }
  document.addEventListener('DOMContentLoaded',()=>{
    document.querySelectorAll('[data-menu-go]').forEach(btn=>{
      btn.addEventListener('click',e=>{
        e.preventDefault();
        e.stopPropagation();
        go(btn.dataset.menuGo);
      });
    });
    go('menu');
  });
  window.viraMenu=go;
})();