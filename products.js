document.getElementById('hamburger').addEventListener('click',()=>document.getElementById('nav').classList.toggle('open'));

const products=[
{name:'فیلتر روغن تویوتا اورجینال',code:'PT-90915-YZZD4',brand:'تویوتا',price:85000,oldPrice:110000,cat:'consumable',tag:'sale',rating:4.5,reviews:128,icon:'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z'},
{name:'لنت ترمز جلو تویوتا کمری',code:'PT-04465-33471',brand:'تویوتا',price:320000,oldPrice:null,cat:'consumable',tag:'new',rating:4.8,reviews:95,icon:'M7 2v11h3v9l7-12h-4l4-8z'},
{name:'چراغ جلو پروژکتوری لکسوس ES',code:'LX-81110-33A80',brand:'لکسوس',price:4500000,oldPrice:5200000,cat:'electric',tag:'sale',rating:5,reviews:42,icon:'M12 4a4 4 0 0 1 4 4 4 4 0 0 1-4 4 4 4 0 0 1-4-4 4 4 0 0 1 4-4'},
{name:'کویل پمپ بنزین تویوتا کورولا',code:'PT-23200-0T040',brand:'تویوتا',price:1850000,oldPrice:null,cat:'electric',tag:null,rating:4.3,reviews:67,icon:'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z'},
{name:'سپر جلو لکسوس RX 350',code:'LX-52119-0E040',brand:'لکسوس',price:3200000,oldPrice:null,cat:'body',tag:'new',rating:4.7,reviews:31,icon:'M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2z'},
{name:'فیلتر هوا تویوتا لندکروز',code:'PT-17801-0T020',brand:'تویوتا',price:145000,oldPrice:180000,cat:'consumable',tag:'sale',rating:4.6,reviews:203,icon:'M19 6h-3V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2H5a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2z'},
{name:'کمک فنر عقب تویوتا کمری',code:'PT-48910-33480',brand:'تویوتا',price:1200000,oldPrice:null,cat:'suspension',tag:null,rating:4.4,reviews:56,icon:'M12 2L4 12l8 10 8-10z'},
{name:'شمع موتور لکسوس NX 300',code:'LX-90919-0T026',brand:'لکسوس',price:680000,oldPrice:850000,cat:'consumable',tag:'sale',rating:4.9,reviews:89,icon:'M7 2v11h3v9l7-12h-4l4-8z'},
{name:'سنسور اکسیژن تویوتا کمری',code:'PT-89465-33260',brand:'تویوتا',price:950000,oldPrice:null,cat:'electric',tag:'new',rating:4.5,reviews:34,icon:'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z'},
{name:'دیسک چرخ جلو تویوتا کورولا',code:'PT-43512-02140',brand:'تویوتا',price:780000,oldPrice:null,cat:'brake',tag:null,rating:4.6,reviews:72,icon:'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z'},
{name:'آینه بغل لکسوس ES 350',code:'LX-87940-06A10',brand:'لکسوس',price:2100000,oldPrice:2500000,cat:'body',tag:'sale',rating:4.7,reviews:28,icon:'M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2z'},
{name:'تسمه تایم تویوتا یاریس',code:'PT-13505-0T020',brand:'تویوتا',price:420000,oldPrice:null,cat:'engine',tag:'new',rating:4.5,reviews:45,icon:'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z'}
];

function fmtPrice(p){return p.toLocaleString('fa-IR')}
function renderStars(r){let s='';for(let i=1;i<=5;i++)s+=i<=Math.round(r)?'★':'☆';return s}

function renderProducts(list){
  const grid=document.getElementById('productGrid');
  grid.innerHTML=list.map(p=>`
    <div class="product-card" onclick="window.location.href='product-detail.html'">
      <div class="product-img">
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="${p.icon}"/></svg>
        ${p.tag?`<span class="product-tag ${p.tag}">${p.tag==='sale'?'تخفیف':'جدید'}</span>`:''}
        <button class="product-fav" onclick="toggleFav(this)"><svg viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg></button>
      </div>
      <div class="product-info">
        <h3>${p.name}</h3>
        <div class="product-code">کد قطعه: ${p.code}</div>
        <div class="product-brand">برند: ${p.brand}</div>
        <div class="product-rating"><span class="stars">${renderStars(p.rating)}</span><span class="num">(${p.reviews})</span></div>
        <div class="product-price-row">
          <div>
            ${p.oldPrice?`<span class="product-old-price">${fmtPrice(p.oldPrice)}</span>`:''}
            <span class="product-price">${fmtPrice(p.price)} <span class="currency">تومان</span></span>
          </div>
        </div>
        <div class="product-actions">
          <button class="btn-add-cart" onclick="addToCart('${p.code}','${p.name.replace(/'/g,'')}',${p.price},'${p.icon}')">
            <svg viewBox="0 0 24 24"><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.73 1.31-.14 2.96 1.19 3.46h13.56v-2H7.35c-.19 0-.34-.15-.34-.34l.03-.12.9-1.66h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.28.12-.42 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/></svg>
            افزودن به سبد
          </button>
          <button class="btn-quick-view" onclick="event.stopPropagation();window.location.href='product-detail.html'">مشاهده</button>
        </div>
      </div>
    </div>
  `).join('');
}

renderProducts(products);

function sortProducts(){
  const sort=document.getElementById('sortBy').value;
  let sorted=[...products];
  if(sort==='price-asc')sorted.sort((a,b)=>a.price-b.price);
  else if(sort==='price-desc')sorted.sort((a,b)=>b.price-a.price);
  else if(sort==='popular')sorted.sort((a,b)=>b.reviews-a.reviews);
  renderProducts(sorted);
}

function setView(view,btn){
  document.querySelectorAll('.view-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  const grid=document.getElementById('productGrid');
  if(view==='list')grid.classList.add('list-view');else grid.classList.remove('list-view');
}

function toggleFav(btn){btn.classList.toggle('active')}

function applyFilters(){alert('فیلترها اعمال شد!')}
function resetFilters(){alert('فیلترها حذف شد!')}
function quickView(code){alert('مشاهده سریع محصول: '+code+'\nجزئیات کامل به زودی...')}

const slider=document.getElementById('priceSlider');
slider.addEventListener('input',function(){
  document.getElementById('maxPrice').value=this.value;
  document.getElementById('priceLabel').textContent=parseInt(this.value).toLocaleString('fa-IR');
});

function getCart(){return JSON.parse(localStorage.getItem('yadakijat_cart')||'[]')}
function saveCart(c){localStorage.setItem('yadakijat_cart',JSON.stringify(c));updateCartCount()}
function updateCartCount(){document.getElementById('cartCount').textContent=getCart().length}
function addToCart(code,name,price,icon){
  let cart=getCart();
  let existing=cart.find(i=>i.code===code);
  if(existing)existing.qty++;else cart.push({code,name,price,icon,qty:1});
  saveCart(cart);
  alert('✅ '+name+' به سبد خرید اضافه شد!');
}
updateCartCount();

(function(){var s=JSON.parse(localStorage.getItem("yadakijat_user")||"null");var l=document.getElementById("userLink");if(l){if(s&&s.expires>Date.now()){l.textContent="خروج";l.onclick=function(e){e.preventDefault();localStorage.removeItem("yadakijat_user");window.location.href="index.html"}}}})();
