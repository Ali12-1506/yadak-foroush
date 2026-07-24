document.getElementById('hamburger').addEventListener('click',()=>document.getElementById('nav').classList.toggle('open'));

function getCart(){return JSON.parse(localStorage.getItem('yadakijat_cart')||'[]')}
function saveCart(c){localStorage.setItem('yadakijat_cart',JSON.stringify(c));updateCartCount()}
function updateCartCount(){document.getElementById('cartCount').textContent=getCart().length}
function fmtPrice(p){return p.toLocaleString('fa-IR')}

function renderCart(){
  const cart=getCart();
  const container=document.getElementById('cartContent');
  if(cart.length===0){
    container.innerHTML=`
      <div class="empty-cart">
        <svg viewBox="0 0 24 24"><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.73 1.31-.14 2.96 1.19 3.46h13.56v-2H7.35c-.19 0-.34-.15-.34-.34l.03-.12.9-1.66h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.28.12-.42 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/></svg>
        <h3>سبد خرید شما خالی است</h3>
        <p>هنوز هیچ قطعه‌ای به سبد خرید اضافه نکرده‌اید</p>
        <a href="products.html" class="btn-continue">مشاهده محصولات ←</a>
      </div>
    `;
    return;
  }
  const subtotal=cart.reduce((s,i)=>s+i.price*i.qty,0);
  const shipping=subtotal>2000000?0:150000;
  const discount=0;
  const total=subtotal+shipping-discount;
  container.innerHTML=`
    <div class="cart-layout">
      <div class="cart-items">
        <div class="cart-header">
          <h2>قطعات سبد خرید</h2>
          <span class="count">${cart.length} کالا</span>
        </div>
        ${cart.map((item,idx)=>`
          <div class="cart-item">
            <div class="cart-item-img">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="${item.icon||'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z'}"/></svg>
            </div>
            <div class="cart-item-info">
              <h3>${item.name}</h3>
              <div class="code">کد قطعه: ${item.code}</div>
              <div class="brand">قیمت واحد: <strong>${fmtPrice(item.price)} تومان</strong></div>
            </div>
            <div class="cart-item-right">
              <div class="qty-control">
                <button class="qty-btn" onclick="changeQty(${idx},-1)">−</button>
                <div class="qty-display">${item.qty}</div>
                <button class="qty-btn" onclick="changeQty(${idx},1)">+</button>
              </div>
              <div class="cart-item-total">${fmtPrice(item.price*item.qty)} <span class="currency">تومان</span></div>
              <button class="remove-btn" onclick="removeItem(${idx})" title="حذف">
                <svg viewBox="0 0 24 24"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg>
              </button>
            </div>
          </div>
        `).join('')}
      </div>
      <div class="cart-summary">
        <h2>خلاصه سفارش</h2>
        <div class="summary-row"><span class="label">مجموع کالاها (${cart.length} مورد)</span><span class="value">${fmtPrice(subtotal)} تومان</span></div>
        <div class="summary-row"><span class="label">هزینه ارسال</span><span class="value">${shipping===0?'رایگان':'۱۵۰,۰۰۰ تومان'}</span></div>
        ${discount>0?`<div class="summary-row"><span class="label">تخفیف</span><span class="value" style="color:var(--green)">−${fmtPrice(discount)} تومان</span></div>`:''}
        <div class="summary-divider"></div>
        <div class="coupon-box">
          <label>کد تخفیف</label>
          <div class="coupon-input">
            <input type="text" placeholder="کد تخفیف را وارد کنید" id="couponCode">
            <button onclick="applyCoupon()">اعمال</button>
          </div>
        </div>
        ${shipping===0?'':`<div class="shipping-box"><svg viewBox="0 0 24 24"><path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/></svg><p>برای ارسال رایگان ${(2000000-subtotal).toLocaleString('fa-IR')} تومان دیگر خرید کنید</p></div>`}
        <div class="summary-total">
          <span class="label">مبلغ قابل پرداخت</span>
          <span class="value">${fmtPrice(total)} <span class="currency">تومان</span></span>
        </div>
        <button class="btn-checkout" onclick="checkout()">
          <svg viewBox="0 0 24 24"><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.73 1.31-.14 2.96 1.19 3.46h13.56v-2H7.35c-.19 0-.34-.15-.34-.34l.03-.12.9-1.66h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.28.12-.42 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/></svg>
          ثبت سفارش و پرداخت
        </button>
        <a href="products.html" class="btn-continue-shopping">← ادامه خرید</a>
        <div class="trust-badges">
          <div class="trust-badge"><svg viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/></svg> ضمانت اصالت</div>
          <div class="trust-badge"><svg viewBox="0 0 24 24"><path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4z"/></svg> ارسال سریع</div>
          <div class="trust-badge"><svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/></svg> پرداخت امن</div>
          <div class="trust-badge"><svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/></svg> ضمانت بازگشت</div>
        </div>
      </div>
    </div>
  `;
}

function changeQty(idx,delta){
  let cart=getCart();
  cart[idx].qty+=delta;
  if(cart[idx].qty<1)cart[idx].qty=1;
  saveCart(cart);
  renderCart();
}

function removeItem(idx){
  let cart=getCart();
  cart.splice(idx,1);
  saveCart(cart);
  renderCart();
}

function applyCoupon(){
  const code=document.getElementById('couponCode').value.trim();
  if(!code){alert('لطفاً کد تخفیف را وارد کنید');return}
  alert('کد تخفیف "'+code+'" اعمال شد! ✓\n(در نسخه دمو تخفیف اعمال نمی‌شود)');
}

function checkout(){
  const cart=getCart();
  if(cart.length===0){alert('سبد خرید خالی است!');return}
  const total=cart.reduce((s,i)=>s+i.price*i.qty,0);
  alert('سفارش شما با موفقیت ثبت شد! ✓\n\nمبلغ کل: '+total.toLocaleString('fa-IR')+' تومان\n\nکارشناسان ما در کوتاه‌ترین زمان با شما تماس خواهند گرفت.\n\nیدک فروش - 02126651532');
  localStorage.removeItem('yadakijat_cart');
  updateCartCount();
  renderCart();
}

renderCart();
updateCartCount();

(function(){var s=JSON.parse(localStorage.getItem("yadakijat_user")||"null");var l=document.getElementById("userLink");if(l){if(s&&s.expires>Date.now()){l.textContent="خروج";l.onclick=function(e){e.preventDefault();localStorage.removeItem("yadakijat_user");window.location.href="index.html"}}}})();
