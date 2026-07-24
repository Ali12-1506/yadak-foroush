(function(){var s=JSON.parse(localStorage.getItem("yadakijat_user")||"null");if(!s||s.expires<Date.now()){localStorage.removeItem("yadakijat_user");window.location.replace("login.html")}})();

document.getElementById('hamburger').addEventListener('click',()=>document.getElementById('nav').classList.toggle('open'));

function getCart(){return JSON.parse(localStorage.getItem('yadakijat_cart')||'[]')}
function updateCartCount(){document.getElementById('cartCount').textContent=getCart().length}
updateCartCount();

function switchTab(tabId,el){
  document.querySelectorAll('.profile-section').forEach(s=>s.classList.remove('active'));
  document.getElementById(tabId).classList.add('active');
  document.querySelectorAll('.menu-item').forEach(m=>m.classList.remove('active'));
  el.classList.add('active');
}

function fmtPrice(p){return p.toLocaleString('fa-IR')}

const orders=[
  {id:'YD-1403-0589',date:'۱۴۰۳/۰۴/۱۵',status:'delivered',statusText:'تحویل شده',total:545000,items:3,icon:'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z',shipping:'تهران، خیابان ولیعصر، کوچه گلستان، پلاک ۱۲',trackingCode:'TRK-789456123',detailItems:[{name:'فیلتر روغن تویوتا اورجینال',code:'PT-90915-YZZD4',price:85000,qty:2,icon:'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z'},{name:'لنت ترمز جلو کمری',code:'PT-04465-33471',price:320000,qty:1,icon:'M7 2v11h3v9l7-12h-4l4-8z'}]},
  {id:'YD-1403-0612',date:'۱۴۰۳/۰۴/۲۲',status:'shipping',statusText:'در حال ارسال',total:1850000,items:1,icon:'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z',shipping:'تهران، خیابان مفتح، برج سپهر، طبقه ۵',trackingCode:'TRK-456789123',detailItems:[{name:'کویل پمپ بنزین کورولا',code:'PT-23200-0T040',price:1850000,qty:1,icon:'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z'}]},
  {id:'YD-1403-0634',date:'۱۴۰۳/۰۴/۲۸',status:'pending',statusText:'در انتظار تایید',total:320000,items:2,icon:'M7 2v11h3v9l7-12h-4l4-8z',shipping:'تهران، خیابان ولیعصر، کوچه گلستان، پلاک ۱۲',trackingCode:null,detailItems:[{name:'شمع موتور کمری',code:'PT-90919-02212',price:280000,qty:1,icon:'M7 2v11h3v9l7-12h-4l4-8z'},{name:'فیلتر روغن اورجینال',code:'PT-90915-YZZD4',price:40000,qty:1,icon:'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z'}]},
  {id:'YD-1403-0645',date:'۱۴۰۳/۰۵/۰۲',status:'delivered',statusText:'تحویل شده',total:780000,items:1,icon:'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z',shipping:'تهران، خیابان مفتح، برج سپهر، طبقه ۵',trackingCode:'TRK-123456789',detailItems:[{name:'سنسور اکسیژن تویوتا',code:'PT-89465-02040',price:780000,qty:1,icon:'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z'}]},
  {id:'YD-1403-0651',date:'۱۴۰۳/۰۵/۰۸',status:'pending',statusText:'در انتظار پرداخت',total:4500000,items:1,icon:'M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2z',shipping:'تهران، خیابان ولیعصر، کوچه گلستان، پلاک ۱۲',trackingCode:null,detailItems:[{name:'چراغ جلو پروژکتوری لکسوس ES',code:'LX-81110-33A80',price:4500000,qty:1,icon:'M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2z'}]}
];

function renderOrders(containerId,limit){
  const list=limit?orders.slice(0,limit):orders;
  document.getElementById(containerId).innerHTML=list.map(o=>`
    <div class="order-card">
      <div class="order-header">
        <div>
          <div class="order-id">${o.id}</div>
          <div class="order-date">${o.date} — ${o.items} کالا</div>
        </div>
        <span class="order-status ${o.status}">${o.statusText}</span>
      </div>
      <div class="order-items">
        ${Array(o.items).fill(0).map(()=>`<div class="order-item-thumb"><svg viewBox="0 0 24 24" fill="currentColor"><path d="${o.icon}"/></svg></div>`).join('')}
      </div>
      <div class="order-footer">
        <div class="order-total">${fmtPrice(o.total)} <span class="currency">تومان</span></div>
        <div class="order-actions">
          <button class="order-btn" onclick="showOrderDetail('${o.id}')">جزئیات</button>
          ${o.status==='delivered'?'<button class="order-btn primary">خرید مجدد</button>':''}
          ${o.status==='pending'?'<button class="order-btn danger" style="border-color:var(--accent);color:var(--accent)">لغو سفارش</button>':''}
        </div>
      </div>
    </div>
  `).join('');
}
renderOrders('recentOrders',3);
renderOrders('allOrders');

function showOrderDetail(orderId){
  var o=orders.find(function(x){return x.id===orderId});
  if(!o)return;
  document.getElementById('modalTitle').textContent='جزئیات سفارش '+o.id;
  var shippingCost=o.total>=500000?0:45000;
  var subtotal=o.detailItems.reduce(function(s,i){return s+i.price*i.qty},0);
  var html='<div class="detail-row"><span class="lbl">شماره سفارش:</span><span class="val">'+o.id+'</span></div>';
  html+='<div class="detail-row"><span class="lbl">تاریخ:</span><span class="val">'+o.date+'</span></div>';
  html+='<div class="detail-row"><span class="lbl">وضعیت:</span><span class="val"><span class="order-status '+o.status+'">'+o.statusText+'</span></span></div>';
  html+='<div class="detail-row"><span class="lbl">آدرس ارسال:</span><span class="val" style="text-align:left;max-width:300px">'+o.shipping+'</span></div>';
  html+='<h4 style="margin:16px 0 10px;font-size:.95rem;font-weight:800;color:var(--primary-dark)">اقلام سفارش</h4>';
  html+='<div class="detail-items">';
  o.detailItems.forEach(function(item){
    html+='<div class="detail-item"><div class="detail-item-thumb"><svg viewBox="0 0 24 24" fill="currentColor"><path d="'+item.icon+'"/></svg></div><div class="detail-item-info"><h4>'+item.name+'</h4><p>کد قطعه: '+item.code+'</p></div><div class="detail-item-price"><div class="price">'+fmtPrice(item.price)+' تومان</div><div class="qty">تعداد: '+item.qty+'</div></div></div>';
  });
  html+='</div>';
  html+='<div class="detail-summary">';
  html+='<div class="row"><span>جمع کالاها:</span><span>'+fmtPrice(subtotal)+' تومان</span></div>';
  html+='<div class="row"><span>هزینه ارسال:</span><span>'+(shippingCost===0?'رایگان':fmtPrice(shippingCost)+' تومان')+'</span></div>';
  html+='<div class="row total"><span>مبلغ کل:</span><span>'+fmtPrice(o.total)+' تومان</span></div>';
  html+='</div>';
  if(o.trackingCode){
    html+='<div class="detail-tracking"><svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg><div><h4>کد رهگیری: '+o.trackingCode+'</h4><p>می‌توانید وضعیت ارسال را از طریق این کد پیگیری کنید</p></div></div>';
  }
  document.getElementById('modalBody').innerHTML=html;
  document.getElementById('orderModal').classList.add('show');
  document.body.style.overflow='hidden';
}
function closeModal(){
  document.getElementById('orderModal').classList.remove('show');
  document.body.style.overflow='';
}
function logout(){
  if(confirm('آیا از خروج اطمینان دارید؟')){
    localStorage.removeItem('yadakijat_user');
    window.location.href='index.html';
  }
}

(function(){var s=JSON.parse(localStorage.getItem("yadakijat_user")||"null");var l=document.getElementById("userLink");if(l){if(s&&s.expires>Date.now()){l.textContent="خروج";l.onclick=function(e){e.preventDefault();localStorage.removeItem("yadakijat_user");window.location.href="index.html"}}}})();
