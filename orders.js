(function(){var s=JSON.parse(localStorage.getItem("yadakijat_user")||"null");if(!s||s.expires<Date.now()){localStorage.removeItem("yadakijat_user");window.location.replace("login.html")}})();

// ============================================

document.getElementById('hamburger').addEventListener('click',()=>document.getElementById('nav').classList.toggle('open'));
function getCart(){return JSON.parse(localStorage.getItem('yadakijat_cart')||'[]')}
function updateCartCount(){document.getElementById('cartCount').textContent=getCart().length}
updateCartCount();

const orders=[
{id:'YK-1403-001',date:'۱۴۰۳/۰۴/۲۲',status:'delivered',items:[{name:'فیلتر روغن تویوتا کمری',code:'PT-90915-YZZD4',price:'۸۵,۰۰۰',qty:2,icon:'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z'},{name:'فیلتر هوا تویوتا لندکروز',code:'PT-17801-0T020',price:'۱۴۵,۰۰۰',qty:1,icon:'M19 6h-3V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2H5a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2z'}],total:'۳۱۵,۰۰۰'},
{id:'YK-1403-002',date:'۱۴۰۳/۰۴/۱۵',status:'delivered',items:[{name:'لنت ترمز جلو تویوتا کمری',code:'PT-04946-06110',price:'۳۲۰,۰۰۰',qty:1,icon:'M7 2v11h3v9l7-12h-4l4-8z'}],total:'۳۲۰,۰۰۰'},
{id:'YK-1403-003',date:'۱۴۰۳/۰۴/۰۸',status:'delivered',items:[{name:'شمع موتور تویوتا کمری',code:'PT-90919-02212',price:'۲۸۰,۰۰۰',qty:4,icon:'M7 2v11h3v9l7-12h-4l4-8z'},{name:'سنسور اکسیژن تویوتا',code:'PT-89465-02040',price:'۹۵۰,۰۰۰',qty:1,icon:'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z'}],total:'۲,۰۷۰,۰۰۰'},
{id:'YK-1403-004',date:'۱۴۰۳/۰۴/۲۵',status:'shipping',items:[{name:'چراغ جلو لکسوس ES 350',code:'LX-81110-06A10',price:'۴,۵۰۰,۰۰۰',qty:1,icon:'M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2z'}],total:'۴,۵۰۰,۰۰۰'},
{id:'YK-1403-005',date:'۱۴۰۳/۰۴/۲۸',status:'pending',items:[{name:'کمک فنر جلو تویوتا کمری',code:'PT-48510-06500',price:'۱,۲۰۰,۰۰۰',qty:2,icon:'M12 2L4 12l8 10 8-10z'}],total:'۲,۴۰۰,۰۰۰'}
];

const statusLabels={delivered:'تحویل شده',pending:'در انتظار',shipping:'در حال ارسال',cancelled:'لغو شده'};

function renderOrders(filter){
  const list=document.getElementById('orderList');
  const filtered=filter==='all'?orders:orders.filter(o=>o.status===filter);
  if(filtered.length===0){
    list.innerHTML='<div class="empty-state"><svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/></svg><h3>سفارشی یافت نشد</h3><p>در این دسته سفارشی وجود ندارد</p><a href="products.html" class="btn-shop">مشاهده محصولات</a></div>';
    return;
  }
  list.innerHTML=filtered.map(o=>`
    <div class="order-item">
      <div class="order-header">
        <div><span class="order-id">#${o.id}</span> <span class="order-date">| ${o.date}</span></div>
        <span class="status-badge status-${o.status}">${statusLabels[o.status]}</span>
      </div>
      <div class="order-body">
        <div class="order-products">
          ${o.items.map(p=>`
            <div class="order-product">
              <div class="p-icon"><svg viewBox="0 0 24 24" fill="currentColor"><path d="${p.icon}"/></svg></div>
              <div class="p-info"><h4>${p.name}</h4><div class="p-code">کد: ${p.code} | تعداد: ${p.qty}</div></div>
              <div class="p-price">${p.price} تومان</div>
            </div>
          `).join('')}
        </div>
        <div class="order-footer">
          <div class="order-total">جمع کل: ${o.total} تومان</div>
          <div class="order-actions">
            <button class="btn-track" onclick="alert('پیگیری سفارش: ${o.id}')">پیگیری سفارش</button>
            <button class="btn-reorder" onclick="alert('سفارش مجدد ثبت شد!')">سفارش مجدد</button>
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

function filterOrders(status,el){
  document.querySelectorAll('.filter-tab').forEach(t=>t.classList.remove('active'));
  el.classList.add('active');
  renderOrders(status);
}

// Check URL param for initial filter
const params=new URLSearchParams(window.location.search);
const initFilter=params.get('status')||'all';
if(initFilter!=='all'){const tab=document.querySelectorAll('.filter-tab')[['all','delivered','shipping','pending'].indexOf(initFilter)];if(tab){tab.click()}else{renderOrders('all')}}else{renderOrders('all')}

// ============================================

(function(){var s=JSON.parse(localStorage.getItem("yadakijat_user")||"null");var l=document.getElementById("userLink");if(l){if(s&&s.expires>Date.now()){l.textContent="خروج";l.onclick=function(e){e.preventDefault();localStorage.removeItem("yadakijat_user");window.location.href="index.html"}}}})();
