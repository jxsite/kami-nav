const CATS = {
"faka": { name: "发卡平台", icon: "🃏"},
"kami": { name: "卡密商城", icon: "🎫"},
"ai-account": { name: "AI账号", icon: "🤖"},
"game-topup": { name: "游戏账号 / 充值代充", icon: "🎮"}
};
/* 热门商品 taxonomy：pid -> 展示名/图标 */
const PRODUCTS = {
"gmail": { name: "谷歌邮箱", icon: "📧"},
"gpt-account": { name: "ChatGPT 账号", icon: "🤖"},
"gpt-plus": { name: "ChatGPT Plus 代充", icon: "💳"},
"gpt-pro": { name: "ChatGPT Pro 代充", icon: "🚀"},
"gemini-pro": { name: "Gemini Pro 代充", icon: "✨"},
"claude": { name: "Claude 代充", icon: "🟠"},
"claude-pro": { name: "Claude Pro 代充", icon: "🟠"},
"claude-max": { name: "Claude Max 代充", icon: "🟠"},
"midjourney": { name: "Midjourney", icon: "🎨"},
"netflix": { name: "Netflix 会员", icon: "🎬"},
"spotify": { name: "Spotify 会员", icon: "🎵"},
"apple-gift": { name: "Apple 礼品卡", icon: "🍎"},
"steam-key": { name: "Steam 游戏 Key", icon: "🎮"},
"game-account":{ name: "游戏账号交易", icon: "🕹️"}
};
/* 跨币种比价折算（约算，仅用于排序） */
const RATE = { "CNY": 1, "USD": 7.2, "EUR": 7.8, "JPY": 0.048, "MYR": 1.55, "SGD": 5.35 };
const SITE_URL = "https://jxsite.github.io/kami-nav/";
const REPO = "https://github.com/jxsite/kami-nav";
let activeCat = "all", query = "";
let view = { type: "cats"}; // {type:"cats"} | {type:"product", pid, sort:"price"|"score"}

function scoreClass(s){ return s >= 80? "s-high": s >= 55? "s-mid": "s-low";}
function hostOf(u){ try { return new URL(u).host;} catch(e){ return u;}}
function esc(s){ return String(s).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));}
function cnyOf(price, cur){ return price == null? Infinity: price * (RATE[cur] || 1);}
function fmtPrice(p, cur){ return p == null? "议价": `${cur === "CNY"? "¥": cur + " "}${p}`;}

function tweetText(s){
const d = s.desc.length > 36? s.desc.slice(0, 36) + "…": s.desc;
return `${s.name}｜${d} ${s.url} 可靠度${s.score}/100 👉 ${SITE_URL}`;
}
function offerTweetText(site, o){
const pn = PRODUCTS[o.pid]? PRODUCTS[o.pid].name: o.name;
return `【卡密导航比价】${pn}｜${site.name} 售价 ${fmtPrice(o.price, o.currency)}（可靠度${site.score}/100）${o.buy_url} 👉 ${SITE_URL}`;
}

function toast(msg){
const t = document.getElementById("toast");
t.textContent = msg; t.classList.add("show");
setTimeout(() => t.classList.remove("show"), 1800);
}
function copyText(txt, okMsg){
const done = () => toast(okMsg || "已复制，去 X 粘贴发布吧");
if (navigator.clipboard && navigator.clipboard.writeText) {
navigator.clipboard.writeText(txt).then(done).catch(() => fallbackCopy(txt, done));
} else fallbackCopy(txt, done);
}
function fallbackCopy(txt, done){
const ta = document.createElement("textarea");
ta.value = txt; ta.style.position = "fixed"; ta.style.opacity = "0";
document.body.appendChild(ta); ta.select();
try { document.execCommand("copy"); done();} catch(e){ toast("复制失败，请长按复制");}
document.body.removeChild(ta);
}
function copyTweet(i){ copyText(tweetText(SITES[i]));}
function copyOfferTweet(si, oi){
const s = SITES[si], o = s.products[oi];
copyText(offerTweetText(s, o));
}

/* ---------- 热门商品小卡片 ---------- */
function productCounts(){
const counts = {};
SITES.forEach(s => (s.products || []).forEach(o => {
if (o.stock!== false) counts[o.pid] = (counts[o.pid] || 0) + 1;
}));
return counts;
}
function minPriceOf(pid){
let best = null;
SITES.forEach(s => (s.products || []).forEach(o => {
if (o.pid === pid && o.stock !== false && o.price != null){
const cny = o.price * (RATE[o.currency] || 1);
if (!best || cny < best.cny) best = {price:o.price, currency:o.currency, cny};
}}));
return best;
}
function renderHot(){
const el = document.getElementById("hot-products");
if (!el) return;
const counts = productCounts();
const pids = Object.keys(PRODUCTS).filter(pid => counts[pid] > 0);
if (!pids.length) { el.innerHTML = ""; return;}
el.innerHTML = `<div class="hot-title">热门商品比价 <span>点商品看哪家在卖、哪家最便宜</span></div>
<div class="hot-grid">` + pids.map((pid, i) => {
const mp = minPriceOf(pid);
return `<button class="hot-card" onclick="showProduct('${pid}')">
<span class="hot-icon">${PRODUCTS[pid].icon}</span>
<span class="hot-name">${PRODUCTS[pid].name}</span>
${mp ? `<span class="hot-min">${fmtPrice(mp.price, mp.currency)}起</span>` : ""}
<span class="hot-n">${counts[pid]} 家在售</span>
</button>`;}).join("") + `</div>`;
}
function offersFor(pid){
const list = [];
SITES.forEach((s, si) => (s.products || []).forEach((o, oi) => {
if (o.pid === pid && o.stock!== false) list.push({ s, si, o, oi});
}));
return list;
}
function showProduct(pid, sort){
view = { type: "product", pid, sort: sort || "price"};
render();
document.getElementById("main").scrollIntoView();
}
function backToNav(){ view = { type: "cats"}; render();}

function offerCard(it, idx){
const { s, si, o, oi} = it;
const cheap = idx === 0? `<span class="cheap">💰 最便宜</span>`: "";
return `<div class="card offer">
<div class="top"><span class="rank ${idx < 3? "r" + (idx + 1): ""}">#${idx + 1}</span>
<h3>${esc(s.name)}</h3>${cheap}<span class="score ${scoreClass(s.score)}">${s.score}分</span></div>
<div class="desc">${esc(o.name)}${o.spec? ` <span class="spec">(${esc(o.spec)})</span>`: ""}</div>
<div class="price-row"><span class="price">${esc(fmtPrice(o.price, o.currency))}</span>
<span class="verified">✅ ${esc(o.pverified || s.verified || "")} 核验</span></div>
<div class="actions">
<a class="btn-visit" href="${esc(o.buy_url || s.url)}" target="_blank" rel="noopener nofollow">去购买</a>
<button class="btn-tweet" onclick="copyOfferTweet(${si},${oi})">复制推文</button>
</div>
</div>`;
}

function renderProduct(){
const { pid, sort} = view;
const meta = PRODUCTS[pid] || { name: pid, icon: "🏷️"};
let list = offersFor(pid);
list.sort((a, b) => sort === "price"
? cnyOf(a.o.price, a.o.currency) - cnyOf(b.o.price, b.o.currency)
: b.s.score - a.s.score);
const main = document.getElementById("main");
main.innerHTML = `
<button class="backbtn" onclick="backToNav()">← 返回导航</button>
<section class="cat"><h2>${meta.icon} ${esc(meta.name)} <span class="count">${list.length} 家在售 · 可购买</span></h2>
<div class="sortbar">
<button class="${sort === "price"? "active": ""}" onclick="showProduct('${pid}','price')">💰 按价格排序</button>
<button class="${sort === "score"? "active": ""}" onclick="showProduct('${pid}','score')">🛡️ 按可靠度排序</button>
</div>
<p class="fxnote">跨币种按约算汇率折算排序（1 USD≈7.2 CNY），价格以商家页面实时为准，下单前请核对。</p>
<div class="grid">${list.map((it, i) => offerCard(it, i)).join("") || `<div class="empty">暂无在售信息</div>`}</div>
</section>`;
}

/* ---------- 分类导航视图 ---------- */
function cardHTML(s, idx){
const chips = (s.signals || []).map(x => `<span class="chip">${esc(x)}</span>`).join("");
const risks = (s.risks || []).map(x => `<div class="risk">⚠️ ${esc(x)}</div>`).join("");
const prods = (s.products || []).filter(o => o.stock!== false).slice(0, 4)
.map(o => `<button class="miniprod" onclick="showProduct('${o.pid}')">${PRODUCTS[o.pid]? PRODUCTS[o.pid].icon: "🏷️"} ${esc(PRODUCTS[o.pid]? PRODUCTS[o.pid].name: o.name)}</button>`).join("");
const cat = CATS[s.category] || {name:"", icon:"🏷️"};
return `<div class="card">
<div class="chead"><span class="c-icon">${cat.icon}</span><div class="c-names"><div class="c-name">${esc(s.name)}</div><div class="c-sub">${cat.name} · ${esc(hostOf(s.url))}</div></div><span class="rank">#${idx + 1}</span><span class="score ${scoreClass(s.score)}">${s.score}分</span></div>
<div class="desc">${esc(s.desc)}</div>
${chips? `<div class="chips">${chips}</div>`: ""}
${risks}
${prods? `<div class="miniprods">${prods}</div>`: ""}
<div class="verified">✅ 验证于 ${esc(s.verified || "")} · 状态：${s.status === "down"? "❌ 无法访问": "🟢 可访问"}</div>
<div class="actions">
<a class="btn-visit" href="${esc(s.url)}" target="_blank" rel="noopener nofollow">访问网站</a>
<button class="btn-tweet" onclick="copyTweet(${s._i})">复制推文</button>
</div>
</div>`;
}

function filtered(cat){
return SITES.map((s, i) => ({...s, _i: i}))
.filter(s => (cat === "all" || s.category === cat))
.filter(s => {
if (!query) return true;
const hay = (s.name + " " + s.desc + " " + s.url).toLowerCase();
return hay.includes(query);
})
.sort((a, b) => b.score - a.score);
}

function featHTML(){
const top = SITES.map((s, i) => ({...s, _i: i})).sort((a, b) => b.score - a.score).slice(0, 4);
return `<section class="cat"><h2>精选推荐 <span class="count">可靠度最高</span></h2><div class="feat-grid">` +
top.map(s => {
const cat = CATS[s.category] || {icon:"🏷️"};
return `<div class="feat-card">
<div class="f-top"><span class="f-icon">${cat.icon}</span><h3>${esc(s.name)}</h3><span class="f-score">${s.score}分</span></div>
<div class="f-desc">${esc(s.desc)}</div>
<a class="f-go" href="${esc(s.url)}" target="_blank" rel="noopener nofollow">去看看 →</a>
</div>`;}).join("") + `</div></section>`;
}

function renderCats(){
const nav = document.getElementById("catnav");
const cats = [["all", "全部"]].concat(Object.entries(CATS).map(([k, v]) => [k, v.icon + " " + v.name]));
nav.innerHTML = cats.map(([k, label]) =>
`<button class="${k === activeCat? "active": ""}" onclick="setCat('${k}')">${label}</button>`).join("");
const main = document.getElementById("main");
const showCats = activeCat === "all"? Object.keys(CATS): [activeCat];
let html = "";
if (activeCat === "all" && !query) html += featHTML();
showCats.forEach(c => {
const list = filtered(c);
if (activeCat!== "all" && list.length === 0) { html += `<div class="empty">没有匹配的结果，换个关键词试试。</div>`; return;}
if (list.length === 0) return;
html += `<section class="cat"><h2>${CATS[c].icon} ${CATS[c].name} <span class="count">${list.length} 个 · 按可靠度排序</span></h2><div class="grid">`;
html += list.map((s, i) => cardHTML(s, i)).join("");
html += `</div></section>`;
});
if (!html) html = `<div class="empty">没有匹配的结果，换个关键词试试。</div>`;
main.innerHTML = html;
}

function render(){
SITES.forEach((s, i) => s._i = i);
renderHot();
if (view.type === "product") renderProduct(); else renderCats();
document.getElementById("updated").textContent = "数据更新于 " + (UPDATED_AT || "");
}

function setCat(c){ activeCat = c; view = { type: "cats"}; render(); document.getElementById("main").scrollIntoView();}
function doSearch(){ query = document.getElementById("q").value.trim().toLowerCase(); view = { type: "cats"}; render();}
document.getElementById("q").addEventListener("input", e => { query = e.target.value.trim().toLowerCase(); view = { type: "cats"}; render();});
document.getElementById("q").addEventListener("keydown", e => { if (e.key === "Enter") e.preventDefault();});

function formData(){
return {
name: document.getElementById("f-name").value.trim(),
url: document.getElementById("f-url").value.trim(),
cat: document.getElementById("f-cat").value,
desc: document.getElementById("f-desc").value.trim(),
contact: document.getElementById("f-contact").value.trim()
};
}
function submitSite(e){
e.preventDefault();
const f = formData();
if (!f.name ||!f.url) { toast("请填写网站名称和地址"); return false;}
const body = `网站名称：${f.name}\n网站地址：${f.url}\n分类：${CATS[f.cat].name}\n简介：${f.desc || "（无）"}\n联系方式：${f.contact || "（无）"}\n\n提交时间：${new Date().toISOString().slice(0,10)}`;
const url = `${REPO}/issues/new?title=${encodeURIComponent("" + f.name)}&body=${encodeURIComponent(body)}`;
window.open(url, "_blank");
toast("已打开 GitHub 提交页，点 Create 提交即可");
return false;
}
function submitByMail(){
const f = formData();
if (!f.name ||!f.url) { toast("请填写网站名称和地址"); return false;}
const body = `网站名称：${f.name}\n网站地址：${f.url}\n分类：${CATS[f.cat].name}\n简介：${f.desc || "（无）"}\n联系方式：${f.contact || "（无）"}`;
location.href = `mailto:hhvip8@gmail.com?subject=${encodeURIComponent("" + f.name)}&body=${encodeURIComponent(body)}`;
}

render();
