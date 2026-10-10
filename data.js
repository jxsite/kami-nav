/* 卡密导航站点数据 — 每日自动验证更新。字段：
   name: 网站名, url: 首页地址, category: faka|kami|ai-account|game-topup,
   desc: 一句话简介, score: 可靠度0-100, signals: 加分依据[], risks: 风险点[],
   verified: 验证日期, status: ok|down, down_days: 连续无法访问天数 */
const UPDATED_AT = "2026-10-11";
const SITES = [
  {
    "name": "Green Man Gaming",
    "url": "https://greenmangaming.com/",
    "category": "kami",
    "desc": "英国官方授权数字游戏零售商，直接从1500多家发行商拿货，游戏激活码即时交付。",
    "score": 75,
    "signals": [
      "HTTPS 有效",
      "运营超3年（2010年成立）",
      "官方授权零售商（索尼PS官方合作）",
      "支持主流信用卡/PayPal",
      "24/7 客服团队",
      "Trustpilot 企业认证页面与大量测评",
      "7天未激活退款政策"
    ],
    "risks": [
      "退款政策较严格（预购/已激活不退）"
    ],
    "verified": "2026-10-11",
    "status": "ok",
    "down_days": 0
  },
  {
    "name": "SEAGM",
    "url": "https://seagm.com/",
    "category": "kami",
    "desc": "马来西亚老牌数字商品商城，主营游戏点卡、礼品卡与手游直充，卡密秒发。",
    "score": 65,
    "signals": [
      "HTTPS 有效",
      "运营超3年（2007年成立）",
      "支持信用卡/借记卡及多种电子钱包",
      "24/7 在线客服",
      "站内商品评价量巨大（如Apple礼品卡17.8万条评价4.99分）"
    ],
    "risks": [],
    "verified": "2026-10-11",
    "status": "ok",
    "down_days": 0
  },
  {
    "name": "OffGamers",
    "url": "https://offgamers.com/",
    "category": "kami",
    "desc": "新加坡背景的全球数字游戏商店，礼品卡/游戏点卡/CDKey 即时交付，官网自称20年以上运营记录。",
    "score": 65,
    "signals": [
      "HTTPS 有效",
      "运营超3年（官网自称20年以上记录）",
      "支持200多种本地化支付方式",
      "24/7 客服",
      "第三方公司档案与行业媒体多次提及"
    ],
    "risks": [],
    "verified": "2026-10-11",
    "status": "ok",
    "down_days": 0
  },
  {
    "name": "G2A",
    "url": "https://www.g2a.com",
    "category": "faka",
    "desc": "全球最大数字娱乐品市场之一，游戏激活码、软件、订阅由认证商家上架自动发卡。",
    "score": 65,
    "signals": [
      "HTTPS 有效",
      "运营超3年（2010年成立）",
      "支持PayPal/信用卡/加密货币（G2A Pay）",
      "客服与买家保护（G2A Shield）",
      "Trustpilot 4.0+ 大量评价，多家科技媒体测评"
    ],
    "risks": [
      "灰市属性：曾卷入盗刷key争议（如2016年tinyBuild事件），key来源依赖卖家，存在被撤销风险"
    ],
    "verified": "2026-10-11",
    "status": "ok",
    "down_days": 0
  },
  {
    "name": "Kinguin",
    "url": "https://www.kinguin.net",
    "category": "faka",
    "desc": "总部香港的数字商品市场，游戏key、软件授权、订阅码由审核商家上架销售。",
    "score": 65,
    "signals": [
      "HTTPS 有效",
      "运营超3年（2013年成立）",
      "支持信用卡/PayPal/加密货币及银行转账",
      "卖家多级审核与买家保护",
      "Trustpilot 4万+评价，多家比价站介绍"
    ],
    "risks": [
      "灰市属性：key多为区域低价转售，非发行商直接授权，偶有区域锁问题"
    ],
    "verified": "2026-10-11",
    "status": "ok",
    "down_days": 0
  },
  {
    "name": "Eneba",
    "url": "https://www.eneba.com",
    "category": "faka",
    "desc": "立陶宛的高速增长型玩家市场，游戏key、礼品卡、点券即时交付，有官方App。",
    "score": 65,
    "signals": [
      "HTTPS 有效",
      "运营超3年（2018年成立）",
      "支持主流信用卡/PayPal",
      "客服与纠纷处理机制",
      "Google Play官方App上架，多家媒体测评"
    ],
    "risks": [
      "市场模式：体验取决于具体卖家，需留意商品区域锁说明"
    ],
    "verified": "2026-10-11",
    "status": "ok",
    "down_days": 0
  },
  {
    "name": "MMOGA",
    "url": "https://mmoga.com/",
    "category": "kami",
    "desc": "德国老牌虚拟商品中介平台，游戏key、点卡、游戏币5分钟邮件交付，自称1300万客户。",
    "score": 55,
    "signals": [
      "HTTPS 有效",
      "运营超3年（官网自称19年经验）",
      "支持PayPal等即时支付",
      "第三方比价站（saashub等）正面测评",
      "老客户忠诚折扣体系"
    ],
    "risks": [
      "以德语/英语为主，中文支持弱",
      "客服响应情况本次未验证"
    ],
    "verified": "2026-10-11",
    "status": "ok",
    "down_days": 0
  },
  {
    "name": "HRKGame",
    "url": "https://hrkgame.com/",
    "category": "kami",
    "desc": "捷克背景的数字key商店，Steam游戏与软件授权低价即时交付，带站内积分系统。",
    "score": 55,
    "signals": [
      "HTTPS 有效",
      "运营超3年（2016年上线）",
      "第三方测评称客服响应快、月访问约百万",
      "第三方测评称运营以来无重大负面反馈",
      "卡密即时交付"
    ],
    "risks": [
      "key来源不明（第三方测评亦指出可能为灰色渠道）",
      "首页未明确展示全部支付方式"
    ],
    "verified": "2026-10-11",
    "status": "ok",
    "down_days": 0
  },
  {
    "name": "交易猫",
    "url": "https://jiaoyimao.com/",
    "category": "game-topup",
    "desc": "阿里巴巴灵犀互娱旗下游戏交易平台，手游/端游账号、道具、代充全品类，业内唯一全场永久包赔。",
    "score": 90,
    "signals": [
      "HTTPS有效",
      "域名2012年注册、公司2014年成立（>3年）",
      "ICP备案：粤ICP备14053110号-1",
      "阿里巴巴灵犀互娱旗下",
      "支持支付宝",
      "千人客服团队",
      "中关村在线等媒体横向测评推荐",
      "全场永久包赔售后"
    ],
    "risks": [
      "游戏账号找回是品类固有风险",
      "平台以个人卖家/商家为主，需自行甄别商品描述"
    ],
    "verified": "2026-10-11",
    "status": "ok",
    "down_days": 0
  },
  {
    "name": "账号星球（AccountBoy）",
    "url": "https://accountboy.com/",
    "category": "ai-account",
    "desc": "海外数字账号一站式商城，含ChatGPT/Claude/Midjourney等AI工具账号、代充与合租，自称2019年成立。",
    "score": 75,
    "signals": [
      "HTTPS有效",
      "2019年成立（>3年）",
      "支持微信/支付宝/银联",
      "24小时在线客服",
      "YouTube/GitHub多方测评提及",
      "站内提及退换货政策",
      "自称全球超一百万用户"
    ],
    "risks": [
      "站内提示警惕仿冒网站，谨防钓鱼",
      "合租/成品账号模式可能违反各平台ToS",
      "未见ICP备案公示"
    ],
    "verified": "2026-10-11",
    "status": "ok",
    "down_days": 0
  },
  {
    "name": "GamsGo",
    "url": "https://www.gamsgo.com/",
    "category": "ai-account",
    "desc": "英国伦敦的全球数字订阅合租平台，AI工具、流媒体、游戏代充一站式，自称运营7年、1000万用户。",
    "score": 75,
    "signals": [
      "HTTPS有效",
      "自称运营7年、1000万用户",
      "支持Visa/Mastercard/PayPal",
      "24/7人工客服",
      "第三方评测与媒体报道多",
      "DealShield买家保护：1-24小时退款"
    ],
    "risks": [
      "账号合租模式可能违反各平台服务条款",
      "平台兼营集市模式，卖家质量需自行甄别"
    ],
    "verified": "2026-10-11",
    "status": "ok",
    "down_days": 0
  },
  {
    "name": "5173",
    "url": "https://5173.com/",
    "category": "game-topup",
    "desc": "国内老牌游戏交易平台，游戏账号、装备、游戏币全品类交易，实名认证+资金担保。",
    "score": 75,
    "signals": [
      "HTTPS有效",
      "2001年前后成立（>3年）",
      "支持支付宝/微信/银行转账",
      "24小时客服团队",
      "老牌头部平台、多家媒体提及",
      "实名认证+资金担保+纠纷仲裁"
    ],
    "risks": [
      "成立年份各方说法不一（2001/2002/2005）",
      "未在站内显著位置查到ICP备案公示"
    ],
    "verified": "2026-10-11",
    "status": "ok",
    "down_days": 0
  },
  {
    "name": "G2G",
    "url": "https://g2g.com/",
    "category": "game-topup",
    "desc": "国际知名数字商品交易市场，游戏账号、游戏币、道具、代练，escrow资金托管。",
    "score": 75,
    "signals": [
      "HTTPS有效",
      "国际知名老牌游戏交易市场（>3年）",
      "支持200+支付方式（含PayPal/Visa）",
      "24/7客服",
      "多家第三方游戏指南提及",
      "escrow资金托管、买家确认后放款"
    ],
    "risks": [
      "C2C集市，卖家质量参差，需看卖家评分",
      "英文站为主"
    ],
    "verified": "2026-10-11",
    "status": "ok",
    "down_days": 0
  },
  {
    "name": "PlayerAuctions",
    "url": "https://www.playerauctions.com/",
    "category": "game-topup",
    "desc": "1999年开始运营的国际玩家对玩家游戏资产交易平台，300+游戏，PlayerGuardian交易保护。",
    "score": 75,
    "signals": [
      "HTTPS有效",
      "1999年开始交易（>20年）",
      "支持PayPal/Skrill/信用卡",
      "24/7支持团队",
      "210万用户、多家媒体曝光",
      "PlayerGuardian未交付全额退款"
    ],
    "risks": [
      "英文站，无中文客服"
    ],
    "verified": "2026-10-11",
    "status": "ok",
    "down_days": 0
  },
  {
    "name": "DD373（嘟嘟网络游戏交易平台）",
    "url": "https://dd373.com/",
    "category": "game-topup",
    "desc": "老牌综合游戏交易平台（新乡市嘟嘟网络技术有限公司），游戏币、账号、装备、手游充值，寄售/担保/求购多种模式。",
    "score": 65,
    "signals": [
      "HTTPS有效",
      "老牌综合交易平台（>3年）",
      "7×24小时客服热线0373-5805373",
      "中关村在线横向测评提及",
      "站内公示赔付案例"
    ],
    "risks": [
      "未公示ICP备案号",
      "支付方式未在首页确认"
    ],
    "verified": "2026-10-11",
    "status": "ok",
    "down_days": 0
  },
  {
    "name": "糖果（Tangguo）",
    "url": "https://tangguo.app/",
    "category": "ai-account",
    "desc": "ChatGPT/Claude/Grok订阅代充商城，国内支付、全自动充值，Plus 120元/月起、30天质保。",
    "score": 55,
    "signals": [
      "HTTPS有效",
      "支持国内支付、无需海外信用卡",
      "订单售后可查",
      "V2EX社区提及",
      "站内有售后/退款政策说明",
      "Plus 30天质保"
    ],
    "risks": [
      "新站，运营主体不明",
      "代充需提交AuthSession/sessionKey登录凭据，有账号安全风险",
      "无ICP备案公示"
    ],
    "verified": "2026-10-11",
    "status": "ok",
    "down_days": 0
  },
  {
    "name": "HuiAI",
    "url": "https://www.huiai.shop/",
    "category": "ai-account",
    "desc": "ChatGPT Plus/Pro、Claude Pro/Max国内订阅代充，微信/支付宝付款，承诺失败全额退款。",
    "score": 55,
    "signals": [
      "HTTPS有效",
      "支持微信/支付宝",
      "人工履约、订单可追踪",
      "V2EX社区提及",
      "失败全额退款承诺"
    ],
    "risks": [
      "新站，运营主体不明",
      "人工代充需账号配合",
      "无ICP备案公示"
    ],
    "verified": "2026-10-11",
    "status": "ok",
    "down_days": 0
  },
  {
    "name": "Pockyt Shop",
    "url": "https://shop.pockyt.io/",
    "category": "game-topup",
    "desc": "知名电子礼品卡商城，App Store/Google Play/PS/Netflix等各区礼品卡，支付宝小程序可购。",
    "score": 55,
    "signals": [
      "HTTPS有效",
      "老牌礼品卡平台（多年运营）",
      "支付宝小程序/官网支持支付宝、银联",
      "V2EX/GitHub教程多推荐为礼品卡正规渠道"
    ],
    "risks": [
      "V2EX有用户报告买到黑卡",
      "客服与退款政策未在公开页确认",
      "成立年份未单独核验"
    ],
    "verified": "2026-10-11",
    "status": "ok",
    "down_days": 0
  },
  {
    "name": "SUKAI（速开AI）",
    "url": "https://sukai.ai/",
    "category": "ai-account",
    "desc": "ChatGPT/Claude成品账号购买与套餐代充平台，支持菲区/美区/日区多区域选择，订单进度可查。",
    "score": 35,
    "signals": [
      "HTTPS有效",
      "ChatGPT/Claude成品号+代充",
      "订单进度可查",
      "YouTube科技博主实测推荐"
    ],
    "risks": [
      "新站，运营时间短",
      "仅支持USDT/钱包余额支付",
      "代充需提交账号资料",
      "推广含邀请返佣"
    ],
    "verified": "2026-10-11",
    "status": "ok",
    "down_days": 0
  },
  {
    "name": "五五AI（55ai.net）",
    "url": "https://55ai.net/",
    "category": "ai-account",
    "desc": "Claude/GPT订阅代充小店，微信客服对接，自称合法经营、可看营业执照。",
    "score": 35,
    "signals": [
      "HTTPS有效",
      "微信客服big825（9:00-23:00）",
      "V2EX多帖提及",
      "站内公示营业执照链接"
    ],
    "risks": [
      "疑似个人/小团队运营（微信客服即V2EX发帖人）",
      "'可开正规企业发票'与营业执照自称未核验",
      "无ICP备案公示",
      "支付方式未在公开页确认"
    ],
    "verified": "2026-10-11",
    "status": "ok",
    "down_days": 0
  }
];
