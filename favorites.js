(function(){var s=JSON.parse(localStorage.getItem("yadakijat_user")||"null");if(!s||s.expires<Date.now()){localStorage.removeItem("yadakijat_user");window.location.replace("login.html")}})();

// ============================================

document.getElementById('hamburger').addEventListener('click',()=>document.getElementById('nav').classList.toggle('open'));
function getCart(){return JSON.parse(localStorage.getItem('yadakijat_cart')||'[]')}
function updateCartCount(){document.getElementById('cartCount').textContent=getCart().length}
updateCartCount();

const favProducts=[
{name:'فیلتر روغن تویوتا اورجینال',code:'PT-90915-YZZD4',price:'۸۵,۰۰۰',icon:'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z'},
{name:'لنت ترمز جلو تویوتا کمری',code:'PT-04946-06110',price:'۳۲۰,۰۰۰',icon:'M7 2v11h3v9l7-12h-4l4-8z'},
{name:'چراغ جلو لکسوس ES 350',code:'LX-81110-06A10',price:'۴,۵۰۰,۰۰۰',icon:'M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2z'},
{name:'فیلتر هوا تویوتا لندکروز',code:'PT-17801-0T020',price:'۱۴۵,۰۰۰',icon:'M19 6h-3V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2H5a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2z'},
{name:'سنسور اکسیژن تویوتا',code:'PT-89465-02040',price:'۹۵۰,۰۰۰',icon:'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z'},
{name:'کمک فنر جلو تویوتا کمری',code:'PT-48510-06500',price:'۱,۲۰۰,۰۰۰',icon:'M12 2L4 12l8 10 8-10z'},
{name:'تسمه تایم تویوتا یاریس',code:'PT-13505-0T020',price:'۴۲۰,۰۰۰',icon:'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z'},
{name:'شمع موتور تویوتا کمری',code:'PT-90919-02212',price:'۲۸۰,۰۰۰',icon:'M7 2v11h3v9l7-12h-4l4-8z'}
];

function renderFavs(){
  const grid=document.getElementById('favGrid');
  if(favProducts.length===0){
    grid.innerHTML='<div class="empty-state" style="grid-column:1/-1"><svg viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg><h3>علاقه‌مندی خالی است</h3><p>محصولات مورد علاقه خود را اینجا ذخیره کنید</p><a href="products.html" class="btn-shop">مشاهده محصولات</a></div>';
    return;
  }
  grid.innerHTML=favProducts.map((p,i)=>`
    <div class="fav-card">
      <button class="fav-remove" onclick="removeFav(${i})"><svg viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg></button>
      <div class="fav-img" onclick="window.location.href='product-detail.html'"><svg viewBox="0 0 24 24" fill="currentColor"><path d="${p.icon}"/></svg></div>
      <div class="fav-info">
        <h4 onclick="window.location.href='product-detail.html'">${p.name}</h4>
        <div class="code">کد قطعه: ${p.code}</div>
        <div class="price">${p.price} <span class="currency">تومان</span></div>
        <button class="btn-add-fav" onclick="addToCart('${p.code}','${p.name}',${parseInt(p.price.replace(/[,،]/g,''))},'${p.icon}')">افزودن به سبد خرید</button>
      </div>
    </div>
  `).join('');
  document.getElementById('favNum').textContent=favProducts.length;
}

function removeFav(idx){
  favProducts.splice(idx,1);
  renderFavs();
}

function clearAll(){
  if(confirm('آیا از حذف تمام علاقه‌مندی‌ها مطمئن هستید؟')){favProducts.length=0;renderFavs()}
}

function addToCart(code,name,price,icon){
  let cart=getCart();
  let existing=cart.find(i=>i.code===code);
  if(existing)existing.qty++;else cart.push({code,name,price,icon,qty:1});
  localStorage.setItem('yadakijat_cart',JSON.stringify(cart));
  updateCartCount();
  alert('✅ '+name+' به سبد خرید اضافه شد!');
}

renderFavs();

// ============================================

(function(){var s=JSON.parse(localStorage.getItem("yadakijat_user")||"null");var l=document.getElementById("userLink");if(l){if(s&&s.expires>Date.now()){l.textContent="خروج";l.onclick=function(e){e.preventDefault();localStorage.removeItem("yadakijat_user");window.location.href="index.html"}}}})();
