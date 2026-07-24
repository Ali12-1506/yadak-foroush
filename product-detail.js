document.getElementById('hamburger').addEventListener('click',()=>document.getElementById('nav').classList.toggle('open'));

function getCart(){return JSON.parse(localStorage.getItem('yadakijat_cart')||'[]')}
function saveCart(c){localStorage.setItem('yadakijat_cart',JSON.stringify(c));updateCartCount()}
function updateCartCount(){document.getElementById('cartCount').textContent=getCart().length}

let qty=1;
function changeQty(d){qty=Math.max(1,qty+d);document.getElementById('qtyDisplay').textContent=qty.toLocaleString('fa-IR')}

function addToCart(){
  let cart=getCart();
  let existing=cart.find(i=>i.code==='PT-90915-YZZD4');
  if(existing)existing.qty+=qty;else cart.push({code:'PT-90915-YZZD4',name:'فیلتر روغن تویوتا اورجینال',price:85000,icon:'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z',qty:qty});
  saveCart(cart);
  alert('✅ فیلتر روغن تویوتا اورجینال ('+qty+' عدد) به سبد خرید اضافه شد!');
}

function toggleFav(){document.getElementById('favBtn').classList.toggle('active');alert('به علاقه‌مندی‌ها اضافه/حذف شد!')}

function switchTab(tabId,el){
  document.querySelectorAll('.tab-content').forEach(t=>t.classList.remove('active'));
  document.getElementById(tabId).classList.add('active');
  document.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));
  el.classList.add('active');
}

document.querySelectorAll('.thumb').forEach(t=>{
  t.addEventListener('click',function(){
    document.querySelectorAll('.thumb').forEach(th=>th.classList.remove('active'));
    this.classList.add('active');
    const mainSvg=document.querySelector('.gallery-main svg');
    mainSvg.innerHTML=this.querySelector('svg').innerHTML;
  });
});

updateCartCount();

// ============================================

(function(){var s=JSON.parse(localStorage.getItem("yadakijat_user")||"null");var l=document.getElementById("userLink");if(l){if(s&&s.expires>Date.now()){l.textContent="خروج";l.onclick=function(e){e.preventDefault();localStorage.removeItem("yadakijat_user");window.location.href="index.html"}}}})();
