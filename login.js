function getCart(){return JSON.parse(localStorage.getItem('yadakijat_cart')||'[]')}
function updateCartCount(){document.getElementById('cartCount').textContent=getCart().length}
updateCartCount();
document.getElementById('hamburger').addEventListener('click',()=>document.getElementById('nav').classList.toggle('open'));

function switchLoginTab(tab,el){
  document.querySelectorAll('.login-tab').forEach(t=>t.classList.remove('active'));
  document.querySelectorAll('.tab-content').forEach(c=>c.classList.remove('active'));
  el.classList.add('active');
  document.getElementById('tab-'+tab).classList.add('active');
  document.querySelectorAll('.alert').forEach(a=>a.classList.remove('show'));
}
function togglePass(id,el){var p=document.getElementById(id);p.type=p.type==='password'?'text':'password';el.textContent=p.type==='password'?'👁':'🙈'}
function showAlert(prefix,type,msg){var el=document.getElementById('alert'+type.charAt(0).toUpperCase()+type.slice(1)+'-'+prefix);document.querySelectorAll('#tab-'+prefix+' .alert').forEach(a=>a.classList.remove('show'));if(el){el.classList.add('show');var span=el.querySelector('span');if(span&&msg)span.textContent=msg}}
function handleUserLogin(e){
  e.preventDefault();
  var u=document.getElementById('user-username').value.trim();
  var p=document.getElementById('user-password').value;
  if(!u||!p){showAlert('user','error','لطفاً همه فیلدها را پر کنید');return false}
  if(u==='user'&&p==='user123'){
    showAlert('user','success','ورود موفق! در حال انتقال...');
    var session={username:u,loginTime:Date.now(),expires:Date.now()+86400000};
    localStorage.setItem('yadakijat_user',JSON.stringify(session));
    setTimeout(function(){window.location.replace('profile.html')},800);
  }else{showAlert('user','error','نام کاربری یا رمز عبور اشتباه است')}
  return false;
}
function handleAdminLogin(e){
  e.preventDefault();
  var u=document.getElementById('admin-username').value.trim();
  var p=document.getElementById('admin-password').value;
  if(!u||!p){showAlert('admin','error','لطفاً همه فیلدها را پر کنید');return false}
  if(u==='admin'&&p==='admin'){
    showAlert('admin','success','ورود موفق! در حال انتقال به پنل...');
    var session={user:u,token:'admin_'+Date.now(),loginTime:Date.now(),expires:Date.now()+3600000};
    localStorage.setItem('yadakijat_admin',JSON.stringify(session));
    setTimeout(function(){window.location.replace('admin.html')},800);
  }else{showAlert('admin','error','نام کاربری یا رمز عبور ادمین اشتباه است')}
  return false;
}
(function(){var s=JSON.parse(localStorage.getItem('yadakijat_user')||'null');var l=document.getElementById('userLink');if(l){if(s&&s.expires>Date.now()){l.textContent='خروج';l.onclick=function(e){e.preventDefault();localStorage.removeItem('yadakijat_user');window.location.href='index.html'}}}})();
