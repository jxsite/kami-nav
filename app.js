const CATS = {
"faka": { name: "发卡平台", icon: "🃏"},
"kami": { name: "卡密商城", icon: "🎫"},
"ai-account": { name: "AI账号", icon: "🤖"},
"game-topup": { name: "游戏账号 / 充值代充", icon: "🎮"}
};
const SITE_URL = "https://jxsite.github.io/kami-nav/";
const REPO = "https://github.com/jxsite/kami-nav";
let activeCat = "all", query = "";

function scoreClass(s){ return s >= 80? "s-high": s >= 55? "s-mid": "s-low";}
function hostOf(u){ try { return new URL(u).host;} catch(e){ return u;}}
function esc(s){ return String(s).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));}

function tweetText(s){
const d = s.desc.length > 36? s.desc.slice(0, 36) + "…": s.desc;
return `${s.name}｜${d} ${s.url} 可靠度${s.score}/100 👉 ${SITE_URL}`;
}

function toast(msg){
const t = document.getElementById("toast");
t.textContent = msg; t.classList.add("show");
setTimeout(() => t.classList.remove("show"), 1800);
}

function copyTweet(i){
const s = SITES[i], txt = tweetText(s);
const done = () => toast("推文已复制，去 X 粘贴发布吧");
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

function cardHTML(s, idx){
const rankCls = idx === 0? "r1": idx === 1? "r2": idx === 2? "r3": "";
const chips = (s.signals || []).map(x => `<span class="chip">${esc(x)}</span>`).join("");
const risks = (s.risks || []).map(x => `<div class="risk">⚠️ ${esc(x)}</div>`).join("");
return `<div class="card">
<div class="top"><span class="rank ${rankCls}">#${idx + 1}</span><h3>${esc(s.name)}</h3><span class="score ${scoreClass(s.score)}">${s.score}分</span></div>
<div class="host">${esc(hostOf(s.url))}</div>
<div class="desc">${esc(s.desc)}</div>
${chips? `<div class="chips">${chips}</div>`: ""}
${risks}
<div class="verified">✅ 验证于 ${esc(s.verified || "")} · 状态：${s.status === "down"? "❌ 无法访问": "🟢 可访问"}</div>
<div class="actions">
<a class="btn-visit" href="${esc(s.url)}" target="_blank" rel="noopener nofollow">访问网站</a>
<button class="btn-tweet" onclick='copyTweet(${s._i})'>复制推文</button>
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

function render(){
SITES.forEach((s, i) => s._i = i);
const nav = document.getElementById("catnav");
const cats = [["all", "全部"]].concat(Object.entries(CATS).map(([k, v]) => [k, v.icon + " " + v.name]));
nav.innerHTML = cats.map(([k, label]) =>
`<button class="${k === activeCat? "active": ""}" onclick="setCat('${k}')">${label}</button>`).join("");

const main = document.getElementById("main");
const showCats = activeCat === "all"? Object.keys(CATS): [activeCat];
let html = "";
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
document.getElementById("updated").textContent = "数据更新于 " + (UPDATED_AT || "");
}

function setCat(c){ activeCat = c; render(); document.getElementById("main").scrollIntoView();}
function doSearch(){ query = document.getElementById("q").value.trim().toLowerCase(); render();}
document.getElementById("q").addEventListener("input", e => { query = e.target.value.trim().toLowerCase(); render();});
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
