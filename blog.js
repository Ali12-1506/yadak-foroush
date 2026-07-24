document.getElementById('hamburger').addEventListener('click',()=>document.getElementById('nav').classList.toggle('open'));
function getCart(){return JSON.parse(localStorage.getItem('yadakijat_cart')||'[]')}
function updateCartCount(){document.getElementById('cartCount').textContent=getCart().length}
updateCartCount();

document.querySelectorAll('.cat-item').forEach(item=>{
  item.addEventListener('click',function(){
    document.querySelectorAll('.cat-item').forEach(i=>i.classList.remove('active'));
    this.classList.add('active');
  });
});

// ============================================

(function(){var s=JSON.parse(localStorage.getItem("yadakijat_user")||"null");var l=document.getElementById("userLink");if(l){if(s&&s.expires>Date.now()){l.textContent="خروج";l.onclick=function(e){e.preventDefault();localStorage.removeItem("yadakijat_user");window.location.href="index.html"}}}})();
