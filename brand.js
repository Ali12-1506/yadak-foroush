document.getElementById('hamburger').addEventListener('click',()=>document.getElementById('nav').classList.toggle('open'));
function getCart(){return JSON.parse(localStorage.getItem('yadakijat_cart')||'[]')}
function updateCartCount(){document.getElementById('cartCount').textContent=getCart().length}
updateCartCount();

const params=new URLSearchParams(window.location.search);
const brandKey=params.get('brand')||'toyota';
const modelFilter=params.get('model')||'';

const brandInfo={
toyota:{name:'تویوتا',en:'Toyota',logo:'T',desc:'قطعات اورجینال و وارداتی تویوتا با ضمانت اصالت کالا و ارسال به سراسر کشور',models:['کمری','کورولا','یاریس','پریوس','لندکروز','هایلوکس','فورچونر','راو4','ساینا','آوالون']},
lexus:{name:'لکسوس',en:'Lexus',logo:'L',desc:'لوازم یدکی اورجینال لکسوس با کیفیت برتر و ضمانت اصالت',models:['ES 350','RX 350','IS 300','GX 460','LX 570','CT 200h','NX 300','RC 350','LS 500','UX 250h']},
hyundai:{name:'هیوندای',en:'Hyundai',logo:'H',desc:'قطعات وارداتی هیوندای با قیمت رقابتی و کیفیت تضمینی',models:['النترا','سوناتا','توسان','ix35','کورپ','سنتافه','i20','i30','ورناست','استارریا']},
kia:{name:'کیا',en:'Kia',logo:'K',desc:'لوازم یدکی کیا با اصالت تضمینی و ارسال سریع',models:['سراتو','اسپورتیج','سورنتو','پیکانتو','موهاوی','کارنس','ستونیک','سلتوس','ریو','اوریوس']}
};

const info=brandInfo[brandKey]||brandInfo.toyota;
document.getElementById('brandName').textContent=info.name;
document.getElementById('brandLogo').textContent=info.logo;
document.getElementById('brandDesc').textContent=info.desc;
document.getElementById('bcBrand').textContent=info.name;
document.getElementById('navBrand').textContent=info.name;
document.getElementById('navBrand').href='brand.html?brand='+brandKey;
document.getElementById('statModels').textContent=info.models.length.toLocaleString('fa-IR');

const allProducts={
toyota:[
{name:'فیلتر روغن تویوتا اورجینال',code:'PT-90915-YZZD4',model:'کمری',cat:'مصرفی',price:85000,oldPrice:110000,rating:4.5,reviews:128,tag:'sale',icon:'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z'},
{name:'لنت ترمز جلو تویوتا کمری',code:'PT-04465-33471',model:'کمری',cat:'ترمز',price:320000,oldPrice:null,rating:4.8,reviews:95,tag:'new',icon:'M7 2v11h3v9l7-12h-4l4-8z'},
{name:'فیلتر هوا تویوتا لندکروز',code:'PT-17801-0T020',model:'لندکروز',cat:'مصرفی',price:145000,oldPrice:null,rating:4.6,reviews:72,tag:null,icon:'M19 6h-3V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2H5a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2z'},
{name:'کویل پمپ بنزین تویوتا کورولا',code:'PT-23200-0T040',model:'کورولا',cat:'برقی',price:1850000,oldPrice:null,rating:4.3,reviews:41,tag:null,icon:'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z'},
{name:'شمع موتور تویوتا کمری',code:'PT-90919-02212',model:'کمری',cat:'موتور',price:280000,oldPrice:350000,rating:4.7,reviews:63,tag:'sale',icon:'M7 2v11h3v9l7-12h-4l4-8z'},
{name:'سنسور اکسیژن تویوتا',code:'PT-89465-02040',model:'کورولا',cat:'برقی',price:950000,oldPrice:null,rating:4.4,reviews:38,tag:null,icon:'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z'},
{name:'کمک فنر جلو تویوتا کمری',code:'PT-48510-06500',model:'کمری',cat:'جلوبندی',price:1200000,oldPrice:null,rating:4.5,reviews:29,tag:null,icon:'M12 2L4 12l8 10 8-10z'},
{name:'تسمه تایم تویوتا یاریس',code:'PT-13505-0T020',model:'یاریس',cat:'موتور',price:420000,oldPrice:null,rating:4.6,reviews:55,tag:'new',icon:'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z'},
{name:'پمپ آب تویوتا راو4',code:'PT-16100-0T040',model:'راو4',cat:'موتور',price:680000,oldPrice:null,rating:4.2,reviews:31,tag:null,icon:'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z'},
{name:'دیسک ترمز عقب تویوتا لندکروز',code:'PT-43512-60120',model:'لندکروز',cat:'ترمز',price:890000,oldPrice:1100000,rating:4.7,reviews:44,tag:'sale',icon:'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z'},
{name:'استارت موتور تویوتا هایلوکس',code:'PT-28100-0T060',model:'هایلوکس',cat:'برقی',price:1500000,oldPrice:null,rating:4.5,reviews:27,tag:null,icon:'M7 2v11h3v9l7-12h-4l4-8z'},
{name:'آینه بغل تویوتا فورچونر',code:'PT-87940-0K020',model:'فورچونر',cat:'بدنه',price:750000,oldPrice:null,rating:4.3,reviews:19,tag:'new',icon:'M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2z'}
],
lexus:[
{name:'چراغ جلو پروژکتوری لکسوس ES',code:'LX-81110-33A80',model:'ES 350',cat:'برقی',price:4500000,oldPrice:5200000,rating:4.9,reviews:67,tag:'sale',icon:'M12 4a4 4 0 0 1 4 4 4 4 0 0 1-4 4 4 4 0 0 1-4-4 4 4 0 0 1 4-4'},
{name:'سپر جلو لکسوس RX 350',code:'LX-52119-0E040',model:'RX 350',cat:'بدنه',price:3200000,oldPrice:null,rating:4.7,reviews:33,tag:'new',icon:'M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2z'},
{name:'آینه بغل لکسوس ES 350',code:'LX-87940-06A10',model:'ES 350',cat:'بدنه',price:2100000,oldPrice:2500000,rating:4.6,reviews:41,tag:'sale',icon:'M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2z'},
{name:'فیلتر روغن لکسوس IS 300',code:'LX-90915-YZZD4',model:'IS 300',cat:'مصرفی',price:180000,oldPrice:null,rating:4.8,reviews:55,tag:null,icon:'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z'},
{name:'لنت ترمز لکسوس RX 350',code:'LX-04465-0E040',model:'RX 350',cat:'ترمز',price:850000,oldPrice:null,rating:4.7,reviews:38,tag:'new',icon:'M7 2v11h3v9l7-12h-4l4-8z'},
{name:'سنسور ماف لکسوس GX 460',code:'LX-22204-0T010',model:'GX 460',cat:'برقی',price:2200000,oldPrice:null,rating:4.5,reviews:22,tag:null,icon:'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z'},
{name:'کمک فنر لکسوس LX 570',code:'LX-48510-60120',model:'LX 570',cat:'جلوبندی',price:2800000,oldPrice:3200000,rating:4.8,reviews:31,tag:'sale',icon:'M12 2L4 12l8 10 8-10z'},
{name:'شمع موتور لکسوس CT 200h',code:'LX-90919-0T010',model:'CT 200h',cat:'موتور',price:520000,oldPrice:null,rating:4.6,reviews:28,tag:null,icon:'M7 2v11h3v9l7-12h-4l4-8z'}
],
hyundai:[
{name:'فیلتر روغن هیوندای النترا',code:'HY-26320-2BA00',model:'النترا',cat:'مصرفی',price:95000,oldPrice:null,rating:4.4,reviews:62,tag:null,icon:'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z'},
{name:'لنت ترمز هیوندای سوناتا',code:'HY-58115-3X500',model:'سوناتا',cat:'ترمز',price:280000,oldPrice:350000,rating:4.5,reviews:48,tag:'sale',icon:'M7 2v11h3v9l7-12h-4l4-8z'},
{name:'فیلتر هوا هیوندای توسان',code:'HY-28113-2P100',model:'توسان',cat:'مصرفی',price:165000,oldPrice:null,rating:4.3,reviews:35,tag:'new',icon:'M19 6h-3V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2H5a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2z'},
{name:'چراغ جلو هیوندای ix35',code:'HY-92101-3X000',model:'ix35',cat:'برقی',price:1800000,oldPrice:null,rating:4.6,reviews:29,tag:null,icon:'M12 4a4 4 0 0 1 4 4 4 4 0 0 1-4 4 4 4 0 0 1-4-4 4 4 0 0 1 4-4'},
{name:'کمک فنر هیوندای کورپ',code:'HY-54660-3X000',model:'کورپ',cat:'جلوبندی',price:950000,oldPrice:null,rating:4.4,reviews:22,tag:null,icon:'M12 2L4 12l8 10 8-10z'},
{name:'سنسور اکسیژن هیوندای سنتافه',code:'HY-39210-3C100',model:'سنتافه',cat:'برقی',price:780000,oldPrice:null,rating:4.5,reviews:18,tag:'new',icon:'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z'},
{name:'تسمه تایم هیوندای i20',code:'HY-24312-2A100',model:'i20',cat:'موتور',price:320000,oldPrice:null,rating:4.2,reviews:25,tag:null,icon:'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z'},
{name:'دیسک ترمز هیوندای i30',code:'HY-51752-2A000',model:'i30',cat:'ترمز',price:620000,oldPrice:750000,rating:4.6,reviews:31,tag:'sale',icon:'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z'}
],
kia:[
{name:'فیلتر روغن کیا سراتو',code:'KI-26320-2A600',model:'سراتو',cat:'مصرفی',price:88000,oldPrice:null,rating:4.3,reviews:45,tag:null,icon:'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z'},
{name:'لنت ترمز کیا اسپورتیج',code:'KI-58115-3E500',model:'اسپورتیج',cat:'ترمز',price:290000,oldPrice:360000,rating:4.5,reviews:38,tag:'sale',icon:'M7 2v11h3v9l7-12h-4l4-8z'},
{name:'فیلتر هوا کیا سورنتو',code:'KI-28113-3S100',model:'سورنتو',cat:'مصرفی',price:155000,oldPrice:null,rating:4.4,reviews:28,tag:'new',icon:'M19 6h-3V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2H5a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2z'},
{name:'چراغ جلو کیا پیکانتو',code:'KI-92101-0Y000',model:'پیکانتو',cat:'برقی',price:1200000,oldPrice:null,rating:4.6,reviews:22,tag:null,icon:'M12 4a4 4 0 0 1 4 4 4 4 0 0 1-4 4 4 4 0 0 1-4-4 4 4 0 0 1 4-4'},
{name:'کمک فنر کیا موهاوی',code:'KI-54660-3S000',model:'موهاوی',cat:'جلوبندی',price:1100000,oldPrice:null,rating:4.5,reviews:15,tag:null,icon:'M12 2L4 12l8 10 8-10z'},
{name:'سنسور ماف کیا کارنس',code:'KI-22204-3C100',model:'کارنس',cat:'برقی',price:850000,oldPrice:null,rating:4.3,reviews:12,tag:'new',icon:'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z'},
{name:'استارت موتور کیا سلتوس',code:'KI-36100-3B100',model:'سلتوس',cat:'برقی',price:1300000,oldPrice:null,rating:4.4,reviews:18,tag:null,icon:'M7 2v11h3v9l7-12h-4l4-8z'},
{name:'آینه بغل کیا استونیک',code:'KI-87910-3B200',model:'ستونیک',cat:'بدنه',price:650000,oldPrice:800000,rating:4.2,reviews:9,tag:'sale',icon:'M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2z'}
]
};

let products=allProducts[brandKey]||allProducts.toyota;
let activeModel='all';
let activeCat='all';
let maxPrice=5000000;

function renderModels(){
  const list=document.getElementById('modelList');
  list.innerHTML='<div class="model-item active" onclick="filterModel(\'all\',this)"><div class="m-icon">★</div>همه مدل‌ها</div>';
  list.innerHTML+=info.models.map(m=>'<div class="model-item" onclick="filterModel(\''+m+'\',this)"><div class="m-icon">'+m[0]+'</div>'+m+'</div>').join('');
  if(modelFilter){const decoded=modelFilter.replace(/-/g,' ');const item=[...list.querySelectorAll('.model-item')].find(i=>i.textContent.includes(decoded));if(item)filterModel(decoded,item)}
}

function renderCats(){
  const cats=[...new Set(products.map(p=>p.cat))];
  const counts={};
  cats.forEach(c=>counts[c]=products.filter(p=>p.cat===c).length);
  const list=document.getElementById('catList');
  list.innerHTML='<div class="cat-item active" onclick="filterCat(\'all\',this)"><span>همه دسته‌ها</span><span class="count">'+products.length+'</span></div>';
  list.innerHTML+=cats.map(c=>'<div class="cat-item" onclick="filterCat(\''+c+'\',this)"><span>'+c+'</span><span class="count">'+counts[c]+'</span></div>').join('');
}

function filterModel(m,el){
  activeModel=m;
  document.querySelectorAll('.model-item').forEach(i=>i.classList.remove('active'));
  if(el)el.classList.add('active');
  renderProducts();
}
function filterCat(c,el){
  activeCat=c;
  document.querySelectorAll('.cat-item').forEach(i=>i.classList.remove('active'));
  if(el)el.classList.add('active');
  renderProducts();
}
function sortProducts(){renderProducts()}
function setView(v,el){
  document.querySelectorAll('.view-btn').forEach(b=>b.classList.remove('active'));
  el.classList.add('active');
  document.getElementById('productGrid').className='products-grid'+(v==='list'?' list-view':'');
}
function fmtPrice(p){return p.toLocaleString('fa-IR')}
function renderStars(r){let s='';for(let i=1;i<=5;i++)s+=i<=Math.round(r)?'★':'☆';return s}

function getFiltered(){
  let f=products;
  if(activeModel!=='all')f=f.filter(p=>p.model===activeModel);
  if(activeCat!=='all')f=f.filter(p=>p.cat===activeCat);
  f=f.filter(p=>p.price<=maxPrice);
  const sort=document.getElementById('sortBy').value;
  if(sort==='price-low')f.sort((a,b)=>a.price-b.price);
  else if(sort==='price-high')f.sort((a,b)=>b.price-a.price);
  return f;
}

function renderProducts(){
  const list=getFiltered();
  document.getElementById('productCount').textContent=list.length.toLocaleString('fa-IR');
  const grid=document.getElementById('productGrid');
  if(list.length===0){grid.innerHTML='<div class="empty-state"><svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/></svg><h3>محصولی یافت نشد</h3><a href="products.html">مشاهده همه محصولات</a></div>';return}
  grid.innerHTML=list.map(p=>`
    <div class="p-card" onclick="window.location.href='product-detail.html'">
      <div class="p-img"><svg viewBox="0 0 24 24" fill="currentColor"><path d="${p.icon}"/></svg></div>
      ${p.tag?`<span class="p-tag ${p.tag}">${p.tag==='sale'?'تخفیف':'جدید'}</span>`:''}
      <button class="p-fav" onclick="event.stopPropagation();this.querySelector('svg').style.fill='var(--accent)'"><svg viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg></button>
      <div class="p-info">
        <h3>${p.name}</h3>
        <div class="code">کد قطعه: ${p.code} | مدل: ${p.model}</div>
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

document.getElementById('priceRange').addEventListener('input',function(){
  maxPrice=parseInt(this.value);
  document.getElementById('priceMax').textContent=fmtPrice(maxPrice);
  renderProducts();
});

renderModels();
renderCats();
renderProducts();
