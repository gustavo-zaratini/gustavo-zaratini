(()=>{
  const ids=['menu','home','cards','rank','how','game','reveal'];
  function go(id){
    ids.forEach(name=>{const el=document.getElementById(name);if(el)el.classList.toggle('on',name===id)});
    window.scrollTo(0,0);
  }
  document.addEventListener('DOMContentLoaded',()=>{
    document.querySelectorAll('[data-menu-go]').forEach(btn=>btn.addEventListener('click',e=>{e.preventDefault();e.stopPropagation();go(btn.dataset.menuGo)}));
    go('menu');
  });
  window.viraMenu=go;
})();