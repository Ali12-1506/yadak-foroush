// Security: Simple hash function (not production-grade, but demonstrates hashing)
function simpleHash(str){
  let hash=0;
  for(let i=0;i<str.length;i++){
    const char=str.charCodeAt(i);
    hash=((hash<<5)-hash)+char;
    hash=hash&hash;
  }
  return 'h'+Math.abs(hash).toString(36);
}

// Credentials (hashed)
const ADMIN_USER='admin';
const ADMIN_PASS_HASH=simpleHash('admin');

// Attempt tracking
let attempts=5;
let isLocked=false;
let lockTimer=null;

function togglePassword(){
  const inp=document.getElementById('password');
  const eye=document.getElementById('eyeIcon');
  if(inp.type==='password'){inp.type='text';eye.innerHTML='<path d="M12 7c2.76 0 5 2.24 5 5s-2.24 5-5 5-5-2.24-5-5 2.24-5 5-5zM12 2C7 2 2.73 5.11 1 9.5 2.73 13.89 7 17 12 17s9.27-3.11 11-7.5C21.27 5.11 17 2 12 2z"/><path d="M0 0h24v24H0z" fill="none"/>'}
  else{inp.type='password';eye.innerHTML='<path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>'}
}

function showAlert(type,msg){
  document.querySelectorAll('.alert').forEach(a=>a.classList.remove('show'));
  const el=document.getElementById('alert'+type.charAt(0).toUpperCase()+type.slice(1));
  if(el){el.classList.add('show');document.getElementById(type+'Msg').textContent=msg}
}

function updateAttempts(){
  const fill=document.getElementById('attemptFill');
  const text=document.getElementById('attemptText');
  const pct=(attempts/5)*100;
  fill.style.width=pct+'%';
  if(attempts<=2)fill.style.background='var(--red)';
  else if(attempts<=3)fill.style.background='var(--gold)';
  else fill.style.background='var(--green)';
  text.textContent=attempts+' تلاش باقی مانده';
}

function lockAccount(){
  isLocked=true;
  attempts=0;
  updateAttempts();
  document.getElementById('btnLogin').disabled=true;
  document.getElementById('btnLogin').style.opacity='.5';
  showAlert('locked','حساب به دلیل تلاش‌های ناموفق متعدد قفل شد. ۳۰ ثانیه صبر کنید.');
  let countdown=30;
  const interval=setInterval(()=>{
    countdown--;
    document.getElementById('lockedMsg').textContent='حساب قفل است. '+countdown+' ثانیه باقی مانده.';
    if(countdown<=0){
      clearInterval(interval);
      isLocked=false;
      attempts=5;
      updateAttempts();
      document.getElementById('btnLogin').disabled=false;
      document.getElementById('btnLogin').style.opacity='1';
      document.querySelectorAll('.alert').forEach(a=>a.classList.remove('show'));
    }
  },1000);
}

function handleLogin(e){
  e.preventDefault();
  if(isLocked)return false;

  const username=document.getElementById('username').value.trim();
  const password=document.getElementById('password').value;
  const remember=document.getElementById('rememberMe').checked;

  // Validate inputs
  if(!username||!password){
    showAlert('error','لطفاً نام کاربری و رمز عبور را وارد کنید');
    return false;
  }

  // Sanitize: prevent XSS
  const safeUser=username.replace(/[<>"']/g,'');
  const passHash=simpleHash(password);

  // Check credentials
  if(safeUser===ADMIN_USER && passHash===ADMIN_PASS_HASH){
    // Generate session token
    const token=btoa(Date.now()+'_'+Math.random().toString(36).substr(2));
    const sessionData={
      token:token,
      user:safeUser,
      loginTime:Date.now(),
      expires:Date.now()+(remember?7*24*60*60*1000:30*60*1000)
    };

    // Store session
    if(remember){
      localStorage.setItem('yadakijat_admin',JSON.stringify(sessionData));
    }else{
      sessionStorage.setItem('yadakijat_admin',JSON.stringify(sessionData));
    }

    // Show success and redirect
    const successAlert=document.querySelector('.alert.success');
    if(successAlert){successAlert.classList.add('show');successAlert.querySelector('span').textContent='ورود موفق! در حال انتقال به پنل...'}
    else{showAlert('success','ورود موفق! در حال انتقال...')}

    setTimeout(()=>{window.location.replace('admin.html')},800);
  }else{
    attempts--;
    updateAttempts();
    if(attempts<=0){
      lockAccount();
    }else{
      showAlert('error','نام کاربری یا رمز عبور اشتباه است. '+attempts+' تلاش باقی مانده.');
      // Clear password field
      document.getElementById('password').value='';
      document.getElementById('password').focus();
    }
  }
  return false;
}

// Check if already logged in
const existing=localStorage.getItem('yadakijat_admin')||sessionStorage.getItem('yadakijat_admin');
if(existing){
  try{
    const s=JSON.parse(existing);
    if(s.expires>Date.now()){window.location.href='admin.html'}
  }catch(e){}
}

updateAttempts();
