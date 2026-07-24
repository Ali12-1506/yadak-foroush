window.addEventListener('DOMContentLoaded',function(){var s=JSON.parse(localStorage.getItem('yadakijat_user')||'null');var l=document.getElementById('userLink');if(l){if(s){l.textContent='خروج';l.onclick=function(e){e.preventDefault();localStorage.removeItem('yadakijat_user');window.location.href='index.html'}}}}})

document.getElementById('hamburger').addEventListener('click',()=>document.getElementById('nav').classList.toggle('open'));
function getCart(){return JSON.parse(localStorage.getItem('yadakijat_cart')||'[]')}
function updateCartCount(){document.getElementById('cartCount').textContent=getCart().length}
updateCartCount();

const params=new URLSearchParams(window.location.search);
const catKey=params.get('cat')||'all';

const catInfo={
motor:{name:'قطعات موتور',icon:'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z',desc:'سرسیلندر، دریچه گاز، زنجیر تایم، واشر کامل، پمپ آب'},
body:{name:'لوازم یدکی بدنه',icon:'M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2z',desc:'کاور موتور، رینگ چرخ، سپر، درب، گلگیر، آینه'},
electric:{name:'قطعات برقی',icon:'M7 2v11h3v9l7-12h-4l4-8z',desc:'سنسورها، پمپ بنزین، کویل، ترموستات، استارت'},
lights:{name:'چراغ و پروژکتور',icon:'M12 4a4 4 0 0 1 4 4 4 4 0 0 1-4 4 4 4 0 0 1-4-4 4 4 0 0 1 4-4',desc:'چراغ جلو، مه‌شکن، پروژکتور، راهنما، چراغ عقب'},
consumable:{name:'لوازم مصرفی',icon:'M19 6h-3V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2H5a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2z',desc:'فیلتر بنزین، دیسک چرخ، شمع، لنت ترمز، فیلتر هوا'},
suspension:{name:'جلوبندی و تعلیق',icon:'M12 2L4 12l8 10 8-10z',desc:'قرقری، کمک فنر، بوش طبق، میل موج‌گیر'},
brakes:{name:'سیستم ترمز',icon:'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z',desc:'پمپ ترمز، کاسه چرخ، بوستر، شیلنگ ترمز، دیسک'},
interior:{name:'تزئینات داخلی',icon:'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z',desc:'روکش صندلی، دسته دنده، کلیلیدون'}
};

const allProducts=[
{name:'فیلتر روغن تویوتا اورجینال',code:'PT-90915-YZZD4',brand:'toyota',brandFa:'تویوتا',cat:'consumable',price:85000,oldPrice:110000,rating:4.5,reviews:128,tag:'sale',icon:'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z'},
{name:'لنت ترمز جلو تویوتا کمری',code:'PT-04465-33471',brand:'toyota',brandFa:'تویوتا',cat:'brakes',price:320000,oldPrice:null,rating:4.8,reviews:95,tag:'new',icon:'M7 2v11h3v9l7-12h-4l4-8z'},
{name:'فیلتر هوا تویوتا لندکروز',code:'PT-17801-0T020',brand:'toyota',brandFa:'تویوتا',cat:'consumable',price:145000,oldPrice:null,rating:4.6,reviews:72,tag:null,icon:'M19 6h-3V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2H5a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2z'},
{name:'کویل پمپ بنزین تویوتا کورولا',code:'PT-23200-0T040',brand:'toyota',brandFa:'تویوتا',cat:'electric',price:1850000,oldPrice:null,rating:4.3,reviews:41,tag:null,icon:'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z'},
{name:'شمع موتور تویوتا کمری',code:'PT-90919-02212',brand:'toyota',brandFa:'تویوتا',cat:'motor',price:280000,oldPrice:350000,rating:4.7,reviews:63,tag:'sale',icon:'M7 2v11h3v9l7-12h-4l4-8z'},
{name:'کمک فنر جلو تویوتا کمری',code:'PT-48510-06500',brand:'toyota',brandFa:'تویوتا',cat:'suspension',price:1200000,oldPrice:null,rating:4.5,reviews:29,tag:null,icon:'M12 2L4 12l8 10 8-10z'},
{name:'تسمه تایم تویوتا یاریس',code:'PT-13505-0T020',brand:'toyota',brandFa:'تویوتا',cat:'motor',price:420000,oldPrice:null,rating:4.6,reviews:55,tag:'new',icon:'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z'},
{name:'پمپ آب تویوتا راو4',code:'PT-16100-0T040',brand:'toyota',brandFa:'تویوتا',cat:'motor',price:680000,oldPrice:null,rating:4.2,reviews:31,tag:null,icon:'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z'},
{name:'دیسک ترمز عقب تویوتا لندکروز',code:'PT-43512-60120',brand:'toyota',brandFa:'تویوتا',cat:'brakes',price:890000,oldPrice:1100000,rating:4.7,reviews:44,tag:'sale',icon:'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z'},
{name:'استارت موتور تویوتا هایلوکس',code:'PT-28100-0T060',brand:'toyota',brandFa:'تویوتا',cat:'electric',price:1500000,oldPrice:null,rating:4.5,reviews:27,tag:null,icon:'M7 2v11h3v9l7-12h-4l4-8z'},
{name:'آینه بغل تویوتا فورچونر',code:'PT-87940-0K020',brand:'toyota',brandFa:'تویوتا',cat:'body',price:750000,oldPrice:null,rating:4.3,reviews:19,tag:'new',icon:'M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2z'},
{name:'چراغ جلو پروژکتوری لکسوس ES',code:'LX-81110-33A80',brand:'lexus',brandFa:'لکسوس',cat:'lights',price:4500000,oldPrice:5200000,rating:4.9,reviews:67,tag:'sale',icon:'M12 4a4 4 0 0 1 4 4 4 4 0 0 1-4 4 4 4 0 0 1-4-4 4 4 0 0 1 4-4'},
{name:'سپر جلو لکسوس RX 350',code:'LX-52119-0E040',brand:'lexus',brandFa:'لکسوس',cat:'body',price:3200000,oldPrice:null,rating:4.7,reviews:33,tag:'new',icon:'M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2z'},
{name:'آینه بغل لکسوس ES 350',code:'LX-87940-06A10',brand:'lexus',brandFa:'لکسوس',cat:'body',price:2100000,oldPrice:2500000,rating:4.6,reviews:41,tag:'sale',icon:'M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2z'},
{name:'فیلتر روغن لکسوس IS 300',code:'LX-90915-YZZD4',brand:'lexus',brandFa:'لکسوس',cat:'consumable',price:180000,oldPrice:null,rating:4.8,reviews:55,tag:null,icon:'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z'},
{name:'لنت ترمز لکسوس RX 350',code:'LX-04465-0E040',brand:'lexus',brandFa:'لکسوس',cat:'brakes',price:850000,oldPrice:null,rating:4.7,reviews:38,tag:'new',icon:'M7 2v11h3v9l7-12h-4l4-8z'},
{name:'سنسور ماف لکسوس GX 460',code:'LX-22204-0T010',brand:'lexus',brandFa:'لکسوس',cat:'electric',price:2200000,oldPrice:null,rating:4.5,reviews:22,tag:null,icon:'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z'},
{name:'کمک فنر لکسوس LX 570',code:'LX-48510-60120',brand:'lexus',brandFa:'لکسوس',cat:'suspension',price:2800000,oldPrice:3200000,rating:4.8,reviews:31,tag:'sale',icon:'M12 2L4 12l8 10 8-10z'},
{name:'شمع موتور لکسوس CT 200h',code:'LX-90919-0T010',brand:'lexus',brandFa:'لکسوس',cat:'motor',price:520000,oldPrice:null,rating:4.6,reviews:28,tag:null,icon:'M7 2v11h3v9l7-12h-4l4-8z'},
{name:'چراغ مه‌شکن لکسوس NX 300',code:'LX-81210-33A80',brand:'lexus',brandFa:'لکسوس',cat:'lights',price:1800000,oldPrice:null,rating:4.5,reviews:25,tag:'new',icon:'M12 4a4 4 0 0 1 4 4 4 4 0 0 1-4 4 4 4 0 0 1-4-4 4 4 0 0 1 4-4'},
{name:'فیلتر روغن هیوندای النترا',code:'HY-26320-2BA00',brand:'hyundai',brandFa:'هیوندای',cat:'consumable',price:95000,oldPrice:null,rating:4.4,reviews:62,tag:null,icon:'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z'},
{name:'لنت ترمز هیوندای سوناتا',code:'HY-58115-3X500',brand:'hyundai',brandFa:'هیوندای',cat:'brakes',price:280000,oldPrice:350000,rating:4.5,reviews:48,tag:'sale',icon:'M7 2v11h3v9l7-12h-4l4-8z'},
{name:'فیلتر هوا هیوندای توسان',code:'HY-28113-2P100',brand:'hyundai',brandFa:'هیوندای',cat:'consumable',price:165000,oldPrice:null,rating:4.3,reviews:35,tag:'new',icon:'M19 6h-3V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2H5a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2z'},
{name:'چراغ جلو هیوندای ix35',code:'HY-92101-3X000',brand:'hyundai',brandFa:'هیوندای',cat:'lights',price:1800000,oldPrice:null,rating:4.6,reviews:29,tag:null,icon:'M12 4a4 4 0 0 1 4 4 4 4 0 0 1-4 4 4 4 0 0 1-4-4 4 4 0 0 1 4-4'},
{name:'کمک فنر هیوندای کورپ',code:'HY-54660-3X000',brand:'hyundai',brandFa:'هیوندای',cat:'suspension',price:950000,oldPrice:null,rating:4.4,reviews:22,tag:null,icon:'M12 2L4 12l8 10 8-10z'},
{name:'سنسور اکسیژن هیوندای سنتافه',code:'HY-39210-3C100',brand:'hyundai',brandFa:'هیوندای',cat:'electric',price:780000,oldPrice:null,rating:4.5,reviews:18,tag:'new',icon:'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z'},
{name:'تسمه تایم هیوندای i20',code:'HY-24312-2A100',brand:'hyundai',brandFa:'هیوندای',cat:'motor',price:320000,oldPrice:null,rating:4.2,reviews:25,tag:null,icon:'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z'},
{name:'دیسک ترمز هیوندای i30',code:'HY-51752-2A000',brand:'hyundai',brandFa:'هیوندای',cat:'brakes',price:620000,oldPrice:750000,rating:4.6,reviews:31,tag:'sale',icon:'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z'},
{name:'فیلتر روغن کیا سراتو',code:'KI-26320-2A600',brand:'kia',brandFa:'کیا',cat:'consumable',price:88000,oldPrice:null,rating:4.3,reviews:45,tag:null,icon:'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z'},
{name:'لنت ترمز کیا اسپورتیج',code:'KI-58115-3E500',brand:'kia',brandFa:'کیا',cat:'brakes',price:290000,oldPrice:360000,rating:4.5,reviews:38,tag:'sale',icon:'M7 2v11h3v9l7-12h-4l4-8z'},
{name:'فیلتر هوا کیا سورنتو',code:'KI-28113-3S100',brand:'kia',brandFa:'کیا',cat:'consumable',price:155000,oldPrice:null,rating:4.4,reviews:28,tag:'new',icon:'M19 6h-3V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2H5a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2z'},
{name:'چراغ جلو کیا پیکانتو',code:'KI-92101-0Y000',brand:'kia',brandFa:'کیا',cat:'lights',price:1200000,oldPrice:null,rating:4.6,reviews:22,tag:null,icon:'M12 4a4 4 0 0 1 4 4 4 4 0 0 1-4 4 4 4 0 0 1-4-4 4 4 0 0 1 4-4'},
{name:'کمک فنر کیا موهاوی',code:'KI-54660-3S000',brand:'kia',brandFa:'کیا',cat:'suspension',price:1100000,oldPrice:null,rating:4.5,reviews:15,tag:null,icon:'M12 2L4 12l8 10 8-10z'},
{name:'سنسور ماف کیا کارنس',code:'KI-22204-3C100',brand:'kia',brandFa:'کیا',cat:'electric',price:850000,oldPrice:null,rating:4.3,reviews:12,tag:'new',icon:'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z'},
{name:'استارت موتور کیا سلتوس',code:'KI-36100-3B100',brand:'kia',brandFa:'کیا',cat:'electric',price:1300000,oldPrice:null,rating:4.4,reviews:18,tag:null,icon:'M7 2v11h3v9l7-12h-4l4-8z'},
{name:'آینه بغل کیا استونیک',code:'KI-87910-3B200',brand:'kia',brandFa:'کیا',cat:'body',price:650000,oldPrice:800000,rating:4.2,reviews:9,tag:'sale',icon:'M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2z'}
];

let activeCat=catKey;

function renderCatList(){
  const list=document.getElementById('catList');
  list.innerHTML='<div class="cat-item'+(activeCat==='all'?' active':'')+'" onclick="filterCat(\'all\',this)"><span>همه دسته‌ها</span><span class="count">'+allProducts.length+'</span></div>';
  Object.entries(catInfo).forEach(([key,info])=>{
    const count=allProducts.filter(p=>p.cat===key).length;
    list.innerHTML+='<div class="cat-item'+(activeCat===key?' active':'')+'" onclick="filterCat(\''+key+'\',this)"><span>'+info.name+'</span><span class="count">'+count+'</span></div>';
  });
}

function filterCat(c,el){
  activeCat=c;
  document.querySelectorAll('.cat-item').forEach(i=>i.classList.remove('active'));
  if(el)el.classList.add('active');
  updateHero();
  renderProducts();
}

function updateHero(){
  if(activeCat==='all'){document.getElementById('catName').textContent='دسته‌بندی قطعات';document.getElementById('catDesc').textContent='انواع قطعات یدکی خودروهای خارجی';document.getElementById('bcCat').textContent='دسته‌بندی';document.getElementById('catIcon').innerHTML='<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/></svg>'}
  else{const info=catInfo[activeCat];document.getElementById('catName').textContent=info.name;document.getElementById('catDesc').textContent=info.desc;document.getElementById('bcCat').textContent=info.name;document.getElementById('catIcon').innerHTML='<svg viewBox="0 0 24 24"><path d="'+info.icon+'"/></svg>'}
}

function getFiltered(){
  let f=allProducts;
  if(activeCat!=='all')f=f.filter(p=>p.cat===activeCat);
  const brands=[];
  if(document.getElementById('f-toyota').checked)brands.push('toyota');
  if(document.getElementById('f-lexus').checked)brands.push('lexus');
  if(document.getElementById('f-hyundai').checked)brands.push('hyundai');
  if(document.getElementById('f-kia').checked)brands.push('kia');
  f=f.filter(p=>brands.includes(p.brand));
  const sort=document.getElementById('sortBy').value;
  if(sort==='price-low')f.sort((a,b)=>a.price-b.price);
  else if(sort==='price-high')f.sort((a,b)=>b.price-a.price);
  else if(sort==='popular')f.sort((a,b)=>b.reviews-a.reviews);
  return f;
}

function fmtPrice(p){return p.toLocaleString('fa-IR')}
function renderStars(r){let s='';for(let i=1;i<=5;i++)s+=i<=Math.round(r)?'★':'☆';return s}

function renderProducts(){
  const list=getFiltered();
  document.getElementById('productCount').textContent=list.length.toLocaleString('fa-IR');
  document.getElementById('statProducts').textContent=list.length.toLocaleString('fa-IR');
  const grid=document.getElementById('productGrid');
  if(list.length===0){grid.innerHTML='<div class="empty-state"><svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/></svg><h3>محصولی یافت نشد</h3><a href="products.html">مشاهده همه محصولات</a></div>';return}
  grid.innerHTML=list.map(p=>`
    <div class="p-card" onclick="window.location.href='product-detail.html'">
      <div class="p-img"><svg viewBox="0 0 24 24" fill="currentColor"><path d="${p.icon}"/></svg></div>
      ${p.tag?`<span class="p-tag ${p.tag}">${p.tag==='sale'?'تخفیف':'جدید'}</span>`:''}
      <button class="p-fav" onclick="event.stopPropagation();this.querySelector('svg').style.fill='var(--accent)'"><svg viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg></button>
      <div class="p-info">
        <h3>${p.name}</h3>
        <div class="code">کد: ${p.code} | ${p.brandFa}</div>
        <div class="rating">${renderStars(p.rating)} (${p.reviews})</div>
        <div class="p-price-row">
          <div>${p.oldPrice?`<span class="p-old-price">${fmtPrice(p.oldPrice)}</span>`:''}<span class="p-price">${fmtPrice(p.price)} <span class="currency">تومان</span></span></div>
          <button class="btn-add" onclick="event.stopPropagation();addToCart('${p.code}','${p.name.replace(/'/g,'')}',${p.price},'${p.icon}')">افزودن</button>
        </div>
      </div>
    </div>
  `).join('');
}

function addToCart(code,name,price,icon){
  let cart=getCart();
  let existing=cart.find(i=>i.code===code);
  if(existing)existing.qty++;else cart.push({code,name,price,icon,qty:1});
  localStorage.setItem('yadakijat_cart',JSON.stringify(cart));
  updateCartCount();
  alert('✅ '+name+' به سبد خرید اضافه شد!');
}

renderCatList();
updateHero();
renderProducts();
