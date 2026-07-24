document.getElementById('hamburger').addEventListener('click', function() {
  document.getElementById('nav').classList.toggle('open');
});

document.querySelectorAll('.hero-search-tab').forEach(tab => {
  tab.addEventListener('click', function() {
    document.querySelectorAll('.hero-search-tab').forEach(t => t.classList.remove('active'));
  this.classList.add('active');
  const input = document.getElementById('searchInput');
  const hint = document.getElementById('searchHint');
  if (this.dataset.tab === 'vin') {
    input.placeholder = 'شماره VIN خودرو را وارد کنید...';
    hint.textContent = 'VIN یک کد ۱۷ رقمی است که روی شاسی خودرو قرار دارد';
  } else {
    input.placeholder = 'شماره قطعه مورد نظر خود را وارد کنید...';
    hint.textContent = 'شماره قطعه (Part Number) را بدون فاصله وارد کنید';
  }
  });
});

const brandModels = {
  toyota: [
    {name:'کمری',en:'Camry'},{name:'کورولا',en:'Corolla'},{name:'یاریس',en:'Yaris'},
    {name:'پریوس',en:'Prius'},{name:'لندکروز',en:'Land Cruiser'},{name:'هایلوکس',en:'Hilux'},
    {name:'فورچونر',en:'Fortuner'},{name:'راو4',en:'RAV4'},{name:'ساینا',en:'Sienna'},
    {name:'آوالون',en:'Avalon'}
  ],
  lexus: [
    {name:'CT',en:'CT 200h'},{name:'ES',en:'ES 350'},{name:'GS',en:'GS 350'},
    {name:'IS',en:'IS 300'},{name:'LS',en:'LS 500'},{name:'LX',en:'LX 600'},
    {name:'NX',en:'NX 300'},{name:'RX',en:'RX 350'},{name:'RC',en:'RC 350'},
    {name:'LC',en:'LC 500'}
  ],
  hyundai: [
    {name:'سوناتا',en:'Sonata'},{name:'النترا',en:'Elantra'},{name:'توسان',en:'Tucson'},
    {name:'سنتافه',en:'Santa Fe'},{name:'اکسنت',en:'Accent'},{name:'i20',en:'i20'},
    {name:'i30',en:'i30'},{name:'کونا',en:'Kona'},{name:'پالیسید',en:'Palisade'},{name:'ولستر',en:'Veloster'}
  ],
  kia: [
    {name:'سراتو',en:'Cerato'},{name:'اسپورتیج',en:'Sportage'},{name:'سورنتو',en:'Sorento'},
    {name:'پیکانتو',en:'Picanto'},{name:'ریو',en:'Rio'},{name:'اپتیما',en:'Optima'},
    {name:'کارنس',en:'Carnival'},{name:'ستونیک',en:'Stonic'},{name:'سلتوس',en:'Seltos'},{name:'موهاوی',en:'Mohave'}
  ]
};

document.querySelectorAll('.brand-card').forEach(card => {
  card.addEventListener('click', function() {
    document.querySelectorAll('.brand-card').forEach(c => c.classList.remove('active'));
    this.classList.add('active');
    const brand = this.dataset.brand;
    const models = brandModels[brand] || [];
    const grid = document.getElementById('modelsGrid');
    grid.innerHTML = models.map(m => `
      <div class="model-card">
        <div class="model-icon">${m.en[0]}</div>
        <h4>${m.name}</h4>
        <p>${m.en}</p>
      </div>
    `).join('');
    document.getElementById('modelTitle').textContent = 'مدل‌های ' + this.querySelector('h3').textContent;
    document.getElementById('viewAllBrand').href = 'brand.html?brand=' + brand;
    document.getElementById('modelsGrid').scrollIntoView({behavior:'smooth',block:'center'});
  });
});

document.getElementById('modelsGrid').addEventListener('click', function(e) {
  const card = e.target.closest('.model-card');
  if (card) {
    const brand = document.querySelector('.brand-card.active').dataset.brand;
    const modelText = card.querySelector('p').textContent.replace(/\s/g, '-');
    window.location.href = 'brand.html?brand=' + brand + '&model=' + modelText;
  }
});

document.querySelectorAll('.category-card').forEach(card => {
  card.addEventListener('click', function() {
    const catName = this.querySelector('h3').textContent;
    const catMap = {'قطعات موتور':'motor','لوازم یدکی بدنه':'body','قطعات برقی':'electric','چراغ و پروژکتور':'lights','لوازم مصرفی':'consumable','جلوبندی و تعلیق':'suspension','سیستم ترمز':'brakes','تزئینات داخلی':'interior'};
    window.location.href = 'category.html?cat=' + (catMap[catName]||'all');
  });
});

(function(){var s=JSON.parse(localStorage.getItem('yadakijat_user')||'null');var l=document.getElementById('userLink');if(l){if(s){l.textContent='خروج';l.onclick=function(e){e.preventDefault();localStorage.removeItem('yadakijat_user');window.location.href='index.html'}}}})();

const products = [
  {name:'فیلتر روغن تویوتا اورجینال',code:'PT-90915-YZZD4',brand:'تویوتا',price:'85,000',oldPrice:'110,000',cat:'consumable',tag:'sale',icon:'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z'},
  {name:'لنت ترمز جلو تویوتا کمری',code:'PT-04465-33471',brand:'تویوتا',price:'320,000',oldPrice:null,cat:'consumable',tag:'new',icon:'M7 2v11h3v9l7-12h-4l4-8z'},
  {name:'چراغ جلو پروژکتوری لکسوس ES',code:'LX-81110-33A80',brand:'لکسوس',price:'4,500,000',oldPrice:'5,200,000',cat:'electric',tag:'sale',icon:'M12 4a4 4 0 0 1 4 4 4 4 0 0 1-4 4 4 4 0 0 1-4-4 4 4 0 0 1 4-4'},
  {name:'کویل پمپ بنزین تویوتا کورولا',code:'PT-23200-0T040',brand:'تویوتا',price:'1,850,000',oldPrice:null,cat:'electric',tag:null,icon:'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z'},
  {name:'سپر جلو لکسوس RX 350',code:'LX-52119-0E040',brand:'لکسوس',price:'3,200,000',oldPrice:null,cat:'body',tag:'new',icon:'M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2z'},
  {name:'فیلتر هوا تویوتا لندکروز',code:'PT-17801-0T020',brand:'تویوتا',price:'145,000',oldPrice:'180,000',cat:'consumable',tag:'sale',icon:'M19 6h-3V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2H5a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2z'},
  {name:'کمک فنر عقب تویوتا کمری',code:'PT-48910-33480',brand:'تویوتا',price:'1,200,000',oldPrice:null,cat:'engine',tag:null,icon:'M12 2L4 12l8 10 8-10z'},
  {name:'شمع موتور لکسوس NX 300',code:'LX-90919-0T026',brand:'لکسوس',price:'680,000',oldPrice:'850,000',cat:'consumable',tag:'sale',icon:'M7 2v11h3v9l7-12h-4l4-8z'},
  {name:'سنسور اکسیژن تویوتا کمری',code:'PT-89465-33260',brand:'تویوتا',price:'950,000',oldPrice:null,cat:'electric',tag:'new',icon:'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z'},
  {name:'دیسک چرخ جلو تویوتا کورولا',code:'PT-43512-02140',brand:'تویوتا',price:'780,000',oldPrice:null,cat:'consumable',tag:null,icon:'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z'},
  {name:'آینه بغل لکسوس ES 350',code:'LX-87940-06A10',brand:'لکسوس',price:'2,100,000',oldPrice:'2,500,000',cat:'body',tag:'sale',icon:'M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2z'},
  {name:'تسمه تایم تویوتا یاریس',code:'PT-13505-0T020',brand:'تویوتا',price:'420,000',oldPrice:null,cat:'engine',tag:'new',icon:'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z'}
];

function renderProducts(filter='all') {
  const grid = document.getElementById('productsGrid');
  const filtered = filter==='all' ? products : products.filter(p=>p.cat===filter);
  grid.innerHTML = filtered.map(p => `
    <div class="product-card" onclick="window.location.href='product-detail.html'">
      <div class="product-img">
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="${p.icon}"/></svg>
        ${p.tag ? `<span class="product-tag ${p.tag}">${p.tag==='sale'?'تخفیف':'جدید'}</span>` : ''}
      </div>
      <div class="product-info">
        <h3>${p.name}</h3>
        <div class="product-code">کد قطعه: ${p.code}</div>
        <div class="product-brand">برند: ${p.brand}</div>
        <div class="product-price-row">
          <div>
            ${p.oldPrice ? `<span class="product-old-price">${p.oldPrice}</span>` : ''}
            <span class="product-price">${p.price} <span class="currency">تومان</span></span>
          </div>
          <button class="product-btn" onclick="event.stopPropagation();addToCart('${p.code}')">
            <svg viewBox="0 0 24 24"><path d="M19 6h-3V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2H5a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zm-9-2h4v2h-4V4z"/></svg>
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

renderProducts();

document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  this.classList.add('active');
  renderProducts(this.dataset.filter);
  });
});

function toggleFAQ(el) {
  el.parentElement.classList.toggle('active');
}

function handleSearch() {
  const val = document.getElementById('searchInput').value.trim();
  if (!val) { alert('لطفاً شماره قطعه یا VIN را وارد کنید'); return; }
  alert('در حال جستجو برای: ' + val + '\nبه زودی این قابلیت فعال خواهد شد.\nبرای استعلام قیمت تماس بگیرید: 02126651532');
}

function handleSubmit(e) {
  e.preventDefault();
  alert('درخواست شما با موفقیت ثبت شد!\nکارشناسان ما در کوتاه‌ترین زمان با شما تماس خواهند گرفت.\nیدک فروش - 02126651532');
  e.target.reset();
}

function addToCart(code) {
  alert('قطعه با کد ' + code + ' به سبد خرید اضافه شد!\nبرای تکمیل سفارش تماس بگیرید: 02126651532');
}

window.addEventListener('scroll', function() {
  const btn = document.getElementById('scrollTop');
  if (window.scrollY > 400) btn.classList.add('visible');
  else btn.classList.remove('visible');
});

document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    var href = this.getAttribute('href');
    if (href && href.charAt(0) === '#') {
      e.preventDefault();
      var target = document.querySelector(href);
      if (target) target.scrollIntoView({behavior:'smooth'});
    }
    document.getElementById('nav').classList.remove('open');
  });
});
