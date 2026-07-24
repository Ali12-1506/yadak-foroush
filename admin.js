// AUTH CHECK
function getSession(){
  const s=localStorage.getItem('yadakijat_admin')||sessionStorage.getItem('yadakijat_admin');
  if(!s)return null;
  try{
    const data=JSON.parse(s);
    if(data.expires&&data.expires>Date.now())return data;
    localStorage.removeItem('yadakijat_admin');
    sessionStorage.removeItem('yadakijat_admin');
    return null;
  }catch(e){return null}
}

const session=getSession();
if(!session){
  document.getElementById('authGuard').style.display='flex';
}else{
  document.getElementById('authGuard').style.display='none';
  const min=Math.floor((Date.now()-session.loginTime)/60000);
  document.getElementById('sessionTime').textContent='فعال '+min+' دقیقه';
}

function logout(){
  if(confirm('آیا از خروج مطمئن هستید؟')){
    localStorage.removeItem('yadakijat_admin');
    sessionStorage.removeItem('yadakijat_admin');
    window.location.href='admin-login.html';
  }
}

// PANEL SWITCH
const panelTitles={dashboard:['داشبورد','نمای کلی از وضعیت فروشگاه'],products:['مدیریت محصولات','افزودن، ویرایش و حذف محصولات'],orders:['مدیریت سفارشات','مشاهده و مدیریت تمام سفارشات'],users:['مدیریت کاربران','مشاهده و مدیریت کاربران سایت'],settings:['تنظیمات سایت','پیکربندی فروشگاه و امنیت']};

function switchPanel(id,el){
  document.querySelectorAll('.panel').forEach(p=>p.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  document.querySelectorAll('.nav-item').forEach(n=>n.classList.remove('active'));
  if(el)el.classList.add('active');
  document.getElementById('pageTitle').textContent=panelTitles[id][0];
  document.getElementById('pageDesc').textContent=panelTitles[id][1];
  if(window.innerWidth<=768)document.getElementById('sidebar').classList.remove('open');
}

// CHART
const chartData=[{d:'شنبه',v:3.2},{d:'یکشنبه',v:4.5},{d:'دوشنبه',v:2.8},{d:'سه‌شنبه',v:5.1},{d:'چهارشنبه',v:6.8},{d:'پنجشنبه',v:7.2},{d:'جمعه',v:4.9}];
const maxVal=Math.max(...chartData.map(d=>d.v));
document.getElementById('chartBars').innerHTML=chartData.map(d=>`
  <div class="chart-bar-wrap"><div class="chart-bar" style="height:${(d.v/maxVal*100)}%"><span class="val">${d.v}م</span></div><div class="lbl">${d.d}</div></div>
`).join('');
