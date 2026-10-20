/* 卡密导航站点数据 — 每日自动验证更新。字段：
   name: 网站名, url: 首页地址, category: faka|kami|ai-account|game-topup,
   desc: 一句话简介, score: 可靠度0-100, signals: 加分依据[], risks: 风险点[],
   verified: 验证日期, status: ok|down, down_days: 连续无法访问天数 */
const UPDATED_AT = "2026-10-21";
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
    "verified": "2026-10-21",
    "status": "ok",
    "down_days": 0,
    "products": [
      {
        "pid": "steam-key",
        "name": "Elden Ring（PC Steam Key）",
        "spec": "标准版",
        "price": 59.99,
        "currency": "USD",
        "buy_url": "https://www.greenmangaming.com/games/elden-ring-pc/",
        "stock": true,
        "pverified": "2026-10-21"
      }
    ]
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
    "verified": "2026-10-21",
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
    "verified": "2026-10-21",
    "status": "ok",
    "down_days": 0,
    "products": [
      {
        "pid": "apple-gift",
        "name": "iTunes Gift Card JPY 15,000 (JP)",
        "spec": "15000日元/日区",
        "price": 104.9,
        "currency": "USD",
        "buy_url": "https://www.offgamers.com/ID/buynow/15000yen-itunes-gift-card-jp.html",
        "stock": false,
        "pverified": "2026-10-21"
      }
    ]
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
    "verified": "2026-10-19",
    "status": "ok",
    "down_days": 0,
    "products": [
      {
        "pid": "steam-key",
        "name": "Elden Ring (PC) - Steam Key - EUROPE",
        "spec": "标准版/欧区",
        "price": 56.54,
        "currency": "USD",
        "buy_url": "https://www.g2a.com/elden-ring-pc-steam-key-europe-i10000273674006?adid=news_gaming.guides_119208_read.more.button&id=119",
        "stock": true,
        "pverified": "2026-10-21"
      },
      {
        "pid": "netflix",
        "name": "Netflix Account Basic 1 Month - GLOBAL",
        "spec": "Basic 1个月/成品账号直登",
        "price": 6.59,
        "currency": "USD",
        "buy_url": "https://www.g2a.com/netflix-account-basic-1-month-netflix-account-global-i10000337248004",
        "stock": true,
        "pverified": "2026-10-21"
      },
      {
        "pid": "spotify",
        "name": "Spotify Premium Subscription Card Individual 12 Months",
        "spec": "个人版12个月",
        "price": 24.57,
        "currency": "USD",
        "buy_url": "https://www.g2a.com/spotify-premium-subscription-card-individual-12-months-spotify-account-account-global-i10000000243117?mosaic2=",
        "stock": false,
        "pverified": "2026-10-21"
      }
    ]
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
    "verified": "2026-10-19",
    "status": "ok",
    "down_days": 0,
    "products": [
      {
        "pid": "steam-key",
        "name": "Elden Ring EU Steam CD Key",
        "spec": "标准版/欧区",
        "price": 49.74,
        "currency": "USD",
        "buy_url": "https://www.kinguin.net/category/111448/elden-ring-eu-steam-cd-key",
        "stock": true,
        "pverified": "2026-10-21"
      }
    ]
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
    "verified": "2026-10-21",
    "status": "ok",
    "down_days": 0,
    "products": [
      {
        "pid": "steam-key",
        "name": "Elden Ring (PC) Steam Key NORTH AMERICA",
        "spec": "标准版/北美区",
        "price": 61.9,
        "currency": "USD",
        "buy_url": "https://www.eneba.com/ms-my/steam-elden-ring-pc-steam-key-north-america",
        "stock": true,
        "pverified": "2026-10-21"
      }
    ]
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
    "verified": "2026-10-21",
    "status": "ok",
    "down_days": 0,
    "products": [
      {
        "pid": "steam-key",
        "name": "Elden Ring（Steam Key）",
        "spec": "标准版/欧区",
        "price": 57.58,
        "currency": "USD",
        "buy_url": "https://www.mmoga.com/Steam-Games/Elden-Ring.html?ref=59257&Partner=thebadbeard",
        "stock": true,
        "pverified": "2026-10-21"
      }
    ]
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
    "verified": "2026-10-19",
    "status": "ok",
    "down_days": 0,
    "products": [
      {
        "pid": "steam-key",
        "name": "Elden Ring（Steam PC Key）",
        "spec": "标准版",
        "price": 184.86,
        "currency": "USD",
        "buy_url": "https://www.hrkgame.com/en/games/product/elden-ring/",
        "stock": false,
        "pverified": "2026-10-21"
      }
    ]
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
    "verified": "2026-10-21",
    "status": "ok",
    "down_days": 0,
    "products": [
      {
        "pid": "game-account",
        "name": "游戏账号（C2C议价）",
        "spec": "",
        "price": null,
        "currency": "CNY",
        "buy_url": "https://jiaoyimao.com/",
        "stock": true,
        "pverified": "2026-10-21"
      }
    ]
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
    "verified": "2026-10-21",
    "status": "ok",
    "down_days": 0,
    "products": [
      {
        "pid": "gmail",
        "name": "谷歌邮箱",
        "spec": "各地区统一价/成品号",
        "price": 30.8,
        "currency": "CNY",
        "buy_url": "https://www.accountboy.com/zh-cn-cny/buy-Gmail",
        "stock": true,
        "pverified": "2026-10-21"
      },
      {
        "pid": "gpt-account",
        "name": "ChatGPT账号",
        "spec": "成品号（Free版）",
        "price": 48.8,
        "currency": "CNY",
        "buy_url": "https://www.accountboy.com/zh-cn-cny/buy-chatai",
        "stock": true,
        "pverified": "2026-10-21"
      },
      {
        "pid": "gpt-plus",
        "name": "ChatGPT Plus",
        "spec": "独享会员账号/月",
        "price": 198,
        "currency": "CNY",
        "buy_url": "https://www.accountboy.com/zh-cn-cny/buy-chatai",
        "stock": true,
        "pverified": "2026-10-21"
      },
      {
        "pid": "claude",
        "name": "Claude Pro",
        "spec": "直充/月（188起，Max规格至1880）",
        "price": 188,
        "currency": "CNY",
        "buy_url": "https://www.accountboy.com/zh-cn-cny/buy-claude",
        "stock": true,
        "pverified": "2026-10-21"
      },
      {
        "pid": "midjourney",
        "name": "Midjourney（30 Standard高级版）独享会员账号",
        "spec": "独享/月",
        "price": 299,
        "currency": "CNY",
        "buy_url": "https://www.accountboy.com/zh-cn-cny/buy-midjourney",
        "stock": true,
        "pverified": "2026-10-21"
      },
      {
        "pid": "netflix",
        "name": "奈飞Netflix 30天会员（Premium）",
        "spec": "共享/30天（页面注明实际有效期26天）",
        "price": 39.8,
        "currency": "CNY",
        "buy_url": "https://www.accountboy.com/zh-cn-cny/buy-Netflix",
        "stock": true,
        "pverified": "2026-10-21"
      },
      {
        "pid": "spotify",
        "name": "Spotify",
        "spec": "会员账号/12个月",
        "price": 299,
        "currency": "CNY",
        "buy_url": "https://www.accountboy.com/zh-cn-cny/buy-Spotify",
        "stock": true,
        "pverified": "2026-10-21"
      }
    ]
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
    "verified": "2026-10-19",
    "status": "ok",
    "down_days": 0,
    "products": [
      {
        "pid": "gpt-plus",
        "name": "GPT-6 ChatGPT",
        "spec": "合租/月",
        "price": 4.83,
        "currency": "USD",
        "buy_url": "https://www.gamsgo.com/",
        "stock": true,
        "pverified": "2026-10-21"
      },
      {
        "pid": "spotify",
        "name": "Spotify",
        "spec": "合租/月",
        "price": 3.17,
        "currency": "USD",
        "buy_url": "https://www.gamsgo.com/",
        "stock": true,
        "pverified": "2026-10-21"
      },
      {
        "pid": "netflix",
        "name": "Netflix",
        "spec": "合租起/月",
        "price": 3.49,
        "currency": "USD",
        "buy_url": "https://www.gamsgo.com/accounts/netflix",
        "stock": true,
        "pverified": "2026-10-21"
      },
      {
        "pid": "midjourney",
        "name": "Midjourney Standard",
        "spec": "共享/1个月（4.9分卖家款$13）",
        "price": 13.0,
        "currency": "USD",
        "buy_url": "https://www.gamsgo.com/accounts/midjourney",
        "stock": true,
        "pverified": "2026-10-21"
      }
    ]
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
    "verified": "2026-10-21",
    "status": "ok",
    "down_days": 0,
    "products": [
      {
        "pid": "game-account",
        "name": "游戏账号（C2C议价）",
        "spec": "",
        "price": null,
        "currency": "CNY",
        "buy_url": "https://www.5173.com/",
        "stock": true,
        "pverified": "2026-10-21"
      }
    ]
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
    "verified": "2026-10-21",
    "status": "ok",
    "down_days": 0,
    "products": [
      {
        "pid": "game-account",
        "name": "游戏账号（C2C议价）",
        "spec": "",
        "price": null,
        "currency": "USD",
        "buy_url": "https://g2g.com/",
        "stock": true,
        "pverified": "2026-10-21"
      }
    ]
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
    "verified": "2026-10-19",
    "status": "ok",
    "down_days": 0,
    "products": [
      {
        "pid": "game-account",
        "name": "游戏账号（C2C议价）",
        "spec": "",
        "price": null,
        "currency": "USD",
        "buy_url": "https://www.playerauctions.com/",
        "stock": true,
        "pverified": "2026-10-21"
      }
    ]
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
    "verified": "2026-10-21",
    "status": "ok",
    "down_days": 0,
    "products": [
      {
        "pid": "game-account",
        "name": "游戏账号（C2C议价）",
        "spec": "",
        "price": null,
        "currency": "CNY",
        "buy_url": "https://www.dd373.com/",
        "stock": true,
        "pverified": "2026-10-21"
      }
    ]
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
    "verified": "2026-10-21",
    "status": "ok",
    "down_days": 0,
    "products": [
      {
        "pid": "gpt-plus",
        "name": "Plus",
        "spec": "订单直充/30天（30天质保）",
        "price": 128,
        "currency": "CNY",
        "buy_url": "https://tangguo.app/",
        "stock": true,
        "pverified": "2026-10-21"
      },
      {
        "pid": "claude",
        "name": "Claude Pro 月卡｜iOS 充值卡",
        "spec": "iOS充值卡/月",
        "price": 189,
        "currency": "CNY",
        "buy_url": "https://tangguo.app/store/business",
        "stock": true,
        "pverified": "2026-10-21"
      }
    ]
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
    "verified": "2026-10-21",
    "status": "ok",
    "down_days": 0,
    "products": [
      {
        "pid": "gpt-plus",
        "name": "ChatGPT Plus/Pro",
        "spec": "人工代充起/月",
        "price": 138,
        "currency": "CNY",
        "buy_url": "https://www.huiai.shop/",
        "stock": true,
        "pverified": "2026-10-21"
      },
      {
        "pid": "claude",
        "name": "Claude Pro/Max",
        "spec": "人工代充起/月",
        "price": 179,
        "currency": "CNY",
        "buy_url": "https://www.huiai.shop/",
        "stock": true,
        "pverified": "2026-10-21"
      }
    ]
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
    "verified": "2026-10-21",
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
    "verified": "2026-10-21",
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
    "verified": "2026-10-21",
    "status": "ok",
    "down_days": 0
  },
  {
    "name": "Fanatical",
    "url": "https://www.fanatical.com",
    "category": "kami",
    "desc": "英国官方授权游戏 key 商城（前身 Bundle Stars），与约 1000 家发行商直接合作，主营 Steam key 与超值捆绑包。",
    "score": 65,
    "signals": [
      "HTTPS 有效",
      "运营超3年（前身 Bundle Stars 可追溯至 2012）",
      "官方授权零售商（约1000家发行商直接合作）",
      "支持 PayPal/主流信用卡等多种支付",
      "Trustpilot 近期评价多为 4-5 星、客服逐条回复",
      "Steam 社区确认 100% 正规渠道"
    ],
    "risks": [
      "一家测评站称其无退款政策，退款条款以官网 ToS 为准",
      "主要面向海外用户，无中文/ICP 备案"
    ],
    "verified": "2026-10-21",
    "status": "ok",
    "down_days": 0
  },
  {
    "name": "Loaded（原 CDKeys）",
    "url": "https://www.cdkeys.com",
    "category": "kami",
    "desc": "原 CDKeys（2025 年 9 月更名 Loaded），运营十余年的自营数字游戏密钥零售商，主营游戏 key、礼品卡与订阅。",
    "score": 75,
    "signals": [
      "HTTPS 有效",
      "运营 10 余年（2014 年前成立）",
      "支持信用卡/PayPal 等主流支付",
      "在线客服与帮助中心",
      "Trustpilot 4.8 分/20 万+评价、Google 4.9 分",
      "主流媒体（Windows Central/PC Gamer）列为可信渠道",
      "7 天内未拆码可退"
    ],
    "risks": [
      "自营转售密钥、非官方授权经销商，灰市属性存争议",
      "无 ICP 备案"
    ],
    "verified": "2026-10-19",
    "status": "ok",
    "down_days": 0
  },
  {
    "name": "BitTopup",
    "url": "https://bittopup.com",
    "category": "kami",
    "desc": "数字礼品卡与游戏充值平台，主营 Amazon/PSN/Xbox 礼品卡兑换码即时发货与手游代充，官网公开香港公司地址。",
    "score": 30,
    "signals": [
      "HTTPS 有效",
      "支持多种支付（含加密货币）",
      "宣称 7×24 多语言客服",
      "官网公开香港公司地址"
    ],
    "risks": [
      "成立年份查不到，运营时长无法验证",
      "无 ICP 备案",
      "无第三方独立测评/社区口碑",
      "退款政策未在公开页面确认"
    ],
    "verified": "2026-10-21",
    "status": "ok",
    "down_days": 0
  },
  {
    "name": "银河录像局",
    "url": "https://nf.video",
    "category": "ai-account",
    "desc": "杭州公司运营的流媒体与 AI 订阅账号合租/代充平台（Netflix、ChatGPT Plus、Claude 等），自称 2019 年起运营。",
    "score": 50,
    "signals": [
      "HTTPS 有效",
      "主体为杭州崇宇信息科技有限公司，自称 2019 年起运营（>3 年）",
      "自称累计 1000 万+ 笔交易、100 万+ 用户",
      "第三方介绍文章列出客服渠道与退款承诺"
    ],
    "risks": [
      "账号合租模式违反 Netflix/OpenAI 等官方 ToS，存在封号致售后纠纷的固有风险",
      "信息主要来自一篇带推广优惠码的软文，独立第三方测评少",
      "ICP 备案为自称，未独立核验"
    ],
    "verified": "2026-10-21",
    "status": "ok",
    "down_days": 0
  },
  {
    "name": "Z2U",
    "url": "https://www.z2u.com",
    "category": "game-topup",
    "desc": "全球数字商品交易市集（游戏账号/游戏币/代充/游戏密钥/礼品卡），自称服务 1800 万+ 用户、2008 年起运营。",
    "score": 75,
    "signals": [
      "HTTPS 有效",
      "自称 2008 年起运营（>3 年）",
      "支持 PayPal/Skrill/信用卡",
      "24/7 在线客服",
      "多家评测与 YouTube 实测博主提及",
      "GamerProtect 资金托管与买家保护"
    ],
    "risks": [
      "开放卖家市集模式，商品质量依卖家而异",
      "有个别卖家提款纠纷报道",
      "无 ICP 备案"
    ],
    "verified": "2026-10-19",
    "status": "ok",
    "down_days": 0
  },
  {
    "name": "GroupbuySEO",
    "url": "https://groupbuyseo.org",
    "category": "ai-account",
    "desc": "拼团共享订阅平台，ChatGPT Plus 共享访问约 $5/月，另含 90+ SEO/AI 工具拼团。",
    "score": 55,
    "signals": [
      "HTTPS 有效",
      "7 种支付路线（含加密货币/UPI）",
      "24/7 客服",
      "Trustpilot 5 星评价",
      "激活失败 14 天内可退"
    ],
    "risks": [
      "共享账号模式违反 OpenAI 等官方 ToS，存在封号风险",
      "非官方授权渠道",
      "成立年份无法独立验证"
    ],
    "verified": "2026-10-21",
    "status": "ok",
    "down_days": 0
  },
  {
    "name": "aishop.homes",
    "url": "https://aishop.homes/",
    "category": "ai-account",
    "desc": "AI 订阅代充站，覆盖 ChatGPT/Claude/Gemini/Grok/X，售充值卡密与成品号。",
    "score": 45,
    "signals": [
      "HTTPS 有效",
      "TG 客服 + 微信客服",
      "V2EX 用户留言推荐",
      "站内有服务规则与质保条款"
    ],
    "risks": [
      "新站，成立年份不明",
      "代充需提交账号密码，有隐私风险",
      "虚拟产品售后限制多（卡密数据仅保留 7 天）",
      "无 ICP 备案"
    ],
    "verified": "2026-10-21",
    "status": "ok",
    "down_days": 0
  },
  {
    "name": "KACN 海外充值",
    "url": "https://ka-cn.vip",
    "category": "game-topup",
    "desc": "面向海外华人的充值/代充平台（抖音/小红书/Q币/游戏点卡等），支持 VISA/Master/PayPal。",
    "score": 30,
    "signals": [
      "HTTPS 有效",
      "支持 VISA/MasterCard/PayPal 等国际支付",
      "宣称 24 小时客服"
    ],
    "risks": [
      "口碑证据多为自营 Medium 软文，第三方独立口碑不足",
      "运营年份无法独立验证",
      "落地页模板与 cardmvp.com 高度一致，疑似同一运营方",
      "无 ICP 备案"
    ],
    "verified": "2026-10-21",
    "status": "ok",
    "down_days": 0
  },
  {
    "name": "CARDMVP",
    "url": "https://www.cardmvp.com",
    "category": "game-topup",
    "desc": "海外手游充值代充（原神/明日方舟/阴阳师/和平精英等），白卡直充，宣称 7×24 客服。",
    "score": 30,
    "signals": [
      "HTTPS 有效",
      "支持 PayPal/Visa/MasterCard/超商支付",
      "宣称 7×24 小时客服"
    ],
    "risks": [
      "口碑证据多为自营 Medium 软文，第三方独立口碑不足",
      "成立年份不明",
      "与 ka-cn.vip 模板高度一致，疑似同一运营方",
      "无 ICP 备案"
    ],
    "verified": "2026-10-21",
    "status": "ok",
    "down_days": 0
  },
  {
    "name": "环球巴士",
    "url": "https://universalbus.cn",
    "category": "ai-account",
    "desc": "流媒体账号合租平台（\"奈飞站\"：Netflix/Spotify/YouTube/Disney+ 等），宣称自动化交付、售后无忧。",
    "score": 10,
    "signals": [
      "HTTPS 有效",
      "官网宣称自动化交付与售后保障"
    ],
    "risks": [
      "成立年份不明",
      "无第三方独立口碑",
      "无 ICP 备案公示",
      "账号合租模式违反流媒体官方 ToS，存在封号风险",
      "V2EX 用户反馈其\"借个号\"业务体验差（账号可用性/退款条款/客服响应慢）"
    ],
    "verified": "2026-10-21",
    "status": "ok",
    "down_days": 0
  },
  {
    "name": "William",
    "url": "https://willam.ka8.ai/",
    "category": "ai-account",
    "desc": "AI 代充与账号小店，主营 ChatGPT Plus/Pro 代充、Gemini Pro、Muse 成品号、X Premium 与 X 老号，自动发货、支持游客购买。",
    "score": 30,
    "signals": [
      "HTTPS 有效",
      "支持支付宝/微信/USDT-BSC/USDT-Polygon",
      "Telegram/WhatsApp/在线客服",
      "自动发货、游客可购"
    ],
    "risks": [
      "运营时长无从考证",
      "无 ICP 备案公示",
      "退款政策未在公开页明确",
      "第三方口碑未独立核验",
      "该站无 Claude 订阅代充商品，仅有 Muse 成品号",
      "2026-10-12 起全站暂停销售（站方公告），所有商品已下架；站方称 10 月底前发布恢复/清仓公告（浏览器实地核验）",
      "部分商品页下线（ChatGPT Plus/Pro 系列、Gemini Pro、Muse 成品号），2026-10-19 起无货"
    ],
    "verified": "2026-10-21",
    "products": [
      {
        "pid": "gpt-plus",
        "name": "ChatGPT-Plus官方充值-自助卡密充值-菲区",
        "spec": "官方充值·自助卡密充值·菲区",
        "price": 155.4,
        "currency": "CNY",
        "buy_url": "https://willam.ka8.ai/products/ChatGPT-Plus",
        "stock": false,
        "pverified": "2026-10-21"
      },
      {
        "pid": "gpt-pro",
        "name": "ChatGPT-Pro 100官方充值-自助卡密充值-智利区",
        "spec": "官方充值·自助卡密充值·智利区",
        "price": 882,
        "currency": "CNY",
        "buy_url": "https://willam.ka8.ai/products/ChatGPT-Pro-5x",
        "stock": false,
        "pverified": "2026-10-21"
      },
      {
        "pid": "gpt-pro",
        "name": "ChatGPT-Pro 200官方充值-自助卡密充值-菲区",
        "spec": "官方充值·自助卡密充值·菲区",
        "price": 1313,
        "currency": "CNY",
        "buy_url": "https://willam.ka8.ai/products/ChatGPT-Pro-20x",
        "stock": false,
        "pverified": "2026-10-21"
      },
      {
        "pid": "gpt-pro",
        "name": "ChatGPT-Pro 500官方充值-自助卡密充值-智利区（购买联系客服）",
        "spec": "官方充值·自助卡密充值·智利区",
        "price": 3075,
        "currency": "CNY",
        "buy_url": "https://willam.ka8.ai/products/ChatGPT-Pro-50x",
        "stock": false,
        "pverified": "2026-10-21"
      },
      {
        "pid": "gemini-pro",
        "name": "Jio · Gemini Pro 18个月｜官方活动·直充自己账号",
        "spec": "官方活动·直充自己账号·18个月",
        "price": 8.4,
        "currency": "CNY",
        "buy_url": "https://willam.ka8.ai/products/gemini-pro-18m",
        "stock": false,
        "pverified": "2026-10-21"
      },
      {
        "pid": "claude",
        "name": "Muse 成品号（微软邮箱·验证码登录）",
        "spec": "微软邮箱·验证码登录",
        "price": 7.8,
        "currency": "CNY",
        "buy_url": "https://willam.ka8.ai/products/muse-account",
        "stock": false,
        "pverified": "2026-10-21"
      }
    ],
    "status": "ok",
    "down_days": 0
  },
  {
    "name": "WanWuEXC",
    "url": "https://shop.moct.cloud",
    "category": "ai-account",
    "desc": "综合数字账号小店，主营美区 Apple ID、Gmail/Google Voice、ChatGPT/Gemini 账号、Telegram 账号与 Netflix 等流媒体账号，自动秒发。",
    "score": 20,
    "signals": [
      "HTTPS 有效",
      "自动发货、游客可购",
      "站内公告提及在线客服",
      "商品带库存状态展示"
    ],
    "risks": [
      "运营时长无从考证",
      "支付方式未在首页确认",
      "无 ICP 备案公示",
      "第三方口碑未独立核验"
    ],
    "verified": "2026-10-21",
    "products": [],
    "status": "ok",
    "down_days": 0
  },
  {
    "name": "dma小店",
    "url": "https://dmakk.top",
    "category": "kami",
    "desc": "游戏 DMA 作弊卡密小店，主营 OW2/CS2/ARC Raiders 等作弊软件月卡与 PUBG 硬件 ID 重置，自动发卡。",
    "score": 10,
    "signals": [
      "HTTPS 有效",
      "自动发货、游客可购"
    ],
    "risks": [
      "作弊软件违反各游戏 ToS，封号风险极高",
      "运营主体不明",
      "无客服与退款政策公示",
      "SSL 证书已过期（2026-09-11），访问时浏览器会显示安全警告"
    ],
    "verified": "2026-10-21",
    "products": [],
    "status": "ok",
    "down_days": 0
  },
  {
    "name": "木木商店",
    "url": "https://feifeivip.com",
    "category": "ai-account",
    "desc": "Telegram 账号小店，主营各国 TG 账号（尼日利亚/印尼/泰国等）与群组频道僵尸粉，自动发货。",
    "score": 10,
    "signals": [
      "HTTPS 有效",
      "自动发货、游客可购",
      "有购买须知公告"
    ],
    "risks": [
      "运营主体不明",
      "支付方式与退款政策未公示",
      "账号封禁风险"
    ],
    "verified": "2026-10-21",
    "products": [],
    "status": "ok",
    "down_days": 0
  },
  {
    "name": "GETGPT Pro",
    "url": "https://getgpt.pro",
    "category": "ai-account",
    "desc": "ChatGPT Plus/Pro、Claude、Cursor、Gemini 代充平台，卡密自助充值，支付宝/微信支付，自称服务 2.4 万+用户。",
    "score": 65,
    "signals": [
      "HTTPS 有效",
      "上线一年多（>1年）",
      "支持支付宝/微信",
      "真人客服",
      "GitHub 第三方代充指南引用",
      "充值失败 100% 全额退款"
    ],
    "risks": [
      "用户数、成功率等为站方自述，未独立验证",
      "代充需提交账号 Session，有账号安全风险"
    ],
    "verified": "2026-10-21",
    "products": [
      {
        "pid": "gpt-plus",
        "name": "ChatGPT Plus 充值",
        "spec": "每月·续费制",
        "price": 179,
        "currency": "CNY",
        "buy_url": "https://getgpt.pro/purchase",
        "stock": true,
        "pverified": "2026-10-21"
      }
    ],
    "status": "ok",
    "down_days": 0
  },
  {
    "name": "PayAI.Plus",
    "url": "https://payai.plus",
    "category": "ai-account",
    "desc": "ChatGPT Plus（¥179/月起）、Pro、Claude Pro（¥189/月起）代充，美区 Apple iOS 渠道卡密自助激活，自称服务 10000+用户。",
    "score": 55,
    "signals": [
      "HTTPS 有效",
      "支持微信/支付宝",
      "客服响应",
      "GitHub 第三方代充指南引用",
      "充值失败当天全额退款",
      "可开企业发票"
    ],
    "risks": [
      "运营时长无明确说法",
      "用户数、成功率为站方自述"
    ],
    "verified": "2026-10-21",
    "products": [
      {
        "pid": "gpt-plus",
        "name": "ChatGPT Plus",
        "spec": "账号续费·1个月",
        "price": 179,
        "currency": "CNY",
        "buy_url": "https://payai.plus/chatgpt?product=chatgpt-plus",
        "stock": true,
        "pverified": "2026-10-21"
      },
      {
        "pid": "claude",
        "name": "Claude Pro 充值",
        "spec": "账号续费·1个月",
        "price": 189,
        "currency": "CNY",
        "buy_url": "https://payai.plus/claude",
        "stock": true,
        "pverified": "2026-10-21"
      }
    ],
    "status": "ok",
    "down_days": 0
  },
  {
    "name": "PlusGO",
    "url": "https://plusgo.pro",
    "category": "ai-account",
    "desc": "ChatGPT Go/Plus/Pro 代充，自称 2025 年起运营、服务 1.5 万+用户，承诺 30 天不掉订阅，支付宝/微信支付。",
    "score": 65,
    "signals": [
      "HTTPS 有效",
      "2025 年起运营（>1年）",
      "支持支付宝/微信",
      "7×16 小时真人客服",
      "GitHub 第三方代充指南引用",
      "失败 100% 当天原路退款",
      "30 天不掉订阅承诺"
    ],
    "risks": [
      "用户数为站方自述",
      "代充需提交一次性登录凭证"
    ],
    "verified": "2026-10-21",
    "products": [
      {
        "pid": "gpt-plus",
        "name": "ChatGPT Plus",
        "spec": "原账号升级 Plus·按月充值",
        "price": 169,
        "currency": "CNY",
        "buy_url": "https://plusgo.pro/purchase?sku=plus",
        "stock": false,
        "pverified": "2026-10-21"
      }
    ],
    "status": "ok",
    "down_days": 0
  },
  {
    "name": "GoPlus",
    "url": "https://goplus.pro",
    "category": "ai-account",
    "desc": "ChatGPT Plus/Pro、Claude Pro/Max、Grok Super 代充，自称累计 8000+订单，微信/支付宝支付，卡密自助或人工交付。",
    "score": 55,
    "signals": [
      "HTTPS 有效",
      "支持微信/支付宝",
      "微信客服",
      "GitHub 第三方代充指南引用",
      "全程质保不掉订阅"
    ],
    "risks": [
      "运营时长无明确说法",
      "代充需提交 Session/Organization ID 等凭证",
      "封号不在质保范围",
      "经第三方小店下单（购买链接跳转至第三方小店）"
    ],
    "verified": "2026-10-21",
    "products": [
      {
        "pid": "gpt-plus",
        "name": "ChatGPT Plus 充值",
        "spec": "官方充值·微信支付宝开通（活动特价 ¥163）",
        "price": 172,
        "currency": "CNY",
        "buy_url": "https://qfcc99.com/shop/panghu",
        "stock": true,
        "pverified": "2026-10-21"
      },
      {
        "pid": "claude",
        "name": "Claude Pro 充值",
        "spec": "185元/月",
        "price": 185,
        "currency": "CNY",
        "buy_url": "https://qfcc99.com/shop/panghu",
        "stock": true,
        "pverified": "2026-10-21"
      }
    ],
    "status": "ok",
    "down_days": 0
  },
  {
    "name": "PayForChat",
    "url": "https://payforchat.com",
    "category": "ai-account",
    "desc": "ChatGPT Plus（¥199/月起）、Pro 代充，微信/支付宝/Stripe 支付，自称服务 10000+用户、可开 PDF Invoice。",
    "score": 55,
    "signals": [
      "HTTPS 有效",
      "支持微信/支付宝/Stripe",
      "客服跟进",
      "GitHub 第三方代充指南引用",
      "充值失败全额退款",
      "可开 PDF 发票"
    ],
    "risks": [
      "运营时长仅自称 365 天持续服务，未满明确 >1 年口径",
      "代充需提交 Session 凭证",
      "套餐页购买按钮需登录后可用"
    ],
    "verified": "2026-10-21",
    "products": [
      {
        "pid": "gpt-plus",
        "name": "ChatGPT Plus",
        "spec": "自有账号充值·官方订阅同等权益",
        "price": 189,
        "currency": "CNY",
        "buy_url": "https://www.payforchat.com/plans",
        "stock": true,
        "pverified": "2026-10-21"
      }
    ],
    "status": "ok",
    "down_days": 0
  },
  {
    "name": "星桥订阅",
    "url": "https://xingqiaosub.com",
    "category": "ai-account",
    "desc": "ChatGPT Plus（¥165 起）、Claude Pro（¥185 起）代充小站，只给本人账号开通，微信/支付宝支付，自称服务 110+位用户。",
    "score": 40,
    "signals": [
      "HTTPS 有效",
      "支持微信/支付宝",
      "微信客服",
      "开通失败全额退款",
      "可开电子普通发票"
    ],
    "risks": [
      "规模小（自称 110+用户）",
      "GitHub 指南引用方为利益相关（仓库维护者自营）",
      "代充需提交 Session"
    ],
    "verified": "2026-10-21",
    "products": [
      {
        "pid": "gpt-plus",
        "name": "ChatGPT Plus",
        "spec": "165元起·按阶梯时长定价",
        "price": 165,
        "currency": "CNY",
        "buy_url": "https://xingqiaosub.com/services/chatgpt-plus",
        "stock": true,
        "pverified": "2026-10-21"
      },
      {
        "pid": "claude",
        "name": "Claude Pro",
        "spec": "185元起·按阶梯时长定价",
        "price": 199,
        "currency": "CNY",
        "buy_url": "https://xingqiaosub.com/services/claude-pro",
        "stock": true,
        "pverified": "2026-10-21"
      }
    ],
    "status": "ok",
    "down_days": 0
  },
  {
    "name": "数字严选",
    "url": "https://digitalchose.com",
    "category": "ai-account",
    "desc": "AI 账号代充与成品号商城，主营 ChatGPT/Claude/Grok 代充、成品账号、API 中转与 Gmail 批发，附带大量使用教程博客。",
    "score": 20,
    "signals": [
      "HTTPS 有效",
      "博客自 2024-05 持续更新，运营超 1 年",
      "商品目录完整（代充/成品号/API/邮箱批发）"
    ],
    "risks": [
      "未见 ICP 备案公示",
      "支付方式/客服/售后政策未在首页公示",
      "第三方口碑待查"
    ],
    "verified": "2026-10-19",
    "products": [],
    "status": "ok",
    "down_days": 0
  },
  {
    "name": "2000Fun商城",
    "url": "https://openshop.com.hk",
    "category": "game-topup",
    "desc": "香港老牌游戏点卡商城（2003 年门市、2008 年开网店），主营 Steam/PSN/Xbox/Netflix 等礼品卡与游戏点卡。",
    "score": 40,
    "signals": [
      "HTTPS 有效",
      "2003 年门市、2008 年网店，运营超 15 年",
      "支持信用卡/PayPal/支付宝"
    ],
    "risks": [
      "香港公司，无 ICP 备案",
      "首页客服与售后政策信息未充分公示",
      "中文第三方口碑待查"
    ],
    "verified": "2026-10-21",
    "products": [],
    "status": "ok",
    "down_days": 0
  },
  {
    "name": "八马批发商铺",
    "url": "https://tg999.top",
    "category": "faka",
    "desc": "落地页式发卡批发商铺，24 小时自助服务通过 Telegram（@tg999topp）完成，宣称每 12 小时分配安全入口。",
    "score": 20,
    "signals": [
      "HTTPS 有效",
      "提供 Telegram 客服 @tg999topp"
    ],
    "risks": [
      "仅落地页，实际交易走 Telegram，透明度低",
      "运营时长/备案/支付方式未知",
      "频繁更换入口域名的模式需警惕"
    ],
    "verified": "2026-10-21",
    "products": [],
    "status": "ok",
    "down_days": 0
  },
  {
    "name": "兮颜出海",
    "url": "https://xiyanchuhai.com",
    "category": "ai-account",
    "desc": "TikTok 账号商城，主营白号/千粉号/带作品号，面向跨境电商与社媒运营人群。",
    "score": 20,
    "signals": [
      "HTTPS 有效",
      "Threads 官方账号 @xiyanhaoshang 宣称 24h 自助发卡"
    ],
    "risks": [
      "运营时长与备案未知",
      "支付与售后政策未公示",
      "社媒账号交易本身有封号风险"
    ],
    "verified": "2026-10-21",
    "products": [],
    "status": "ok",
    "down_days": 0
  },
  {
    "name": "AI账号空投站",
    "url": "https://ai-airdrop.com",
    "category": "ai-account",
    "desc": "AI 账号自助卡密代充站，主营 ChatGPT Plus/Pro、Claude、Grok 代充，支持微信/支付宝/USDT，页面公示销量 3607。",
    "score": 40,
    "signals": [
      "HTTPS 有效",
      "支持微信/支付宝/USDT",
      "QQ 售后群 799054957",
      "页面公示销量 3607、上架 17 件商品"
    ],
    "risks": [
      "运营时长与 ICP 备案未知",
      "销量为站方自述",
      "退款政策未明确公示"
    ],
    "verified": "2026-10-21",
    "products": [
      {
        "pid": "gpt-plus",
        "name": "ChatGPT Plus 月卡｜菲区官方正规卡充",
        "spec": "月卡·菲区官方正规卡充",
        "price": 125,
        "currency": "CNY",
        "buy_url": "https://ai-airdrop.com/products/chatgpt-plus-two",
        "stock": true,
        "pverified": "2026-10-21"
      },
      {
        "pid": "gpt-plus",
        "name": "ChatGPT Plus 月卡｜iOS 官方正规充值",
        "spec": "月卡·iOS官方正规充值",
        "price": 150,
        "currency": "CNY",
        "buy_url": "https://ai-airdrop.com/products/4",
        "stock": true,
        "pverified": "2026-10-21"
      },
      {
        "pid": "claude",
        "name": "Claude Pro 月卡｜IOS官方正规充值",
        "spec": "月卡·IOS官方正规充值",
        "price": 159,
        "currency": "CNY",
        "buy_url": "https://ai-airdrop.com/products/Claudeproka",
        "stock": true,
        "pverified": "2026-10-21"
      }
    ],
    "status": "ok",
    "down_days": 0
  },
  {
    "name": "旧Gmail邮箱批发平台",
    "url": "https://oldgmailbuy.com",
    "category": "ai-account",
    "desc": "Gmail 账号批发平台，主营全新号、2010–2024 各年份老号与多国 IP 注册号，明码标价 ¥5–33，库存/已售公示完整。",
    "score": 20,
    "signals": [
      "HTTPS 有效",
      "微信客服",
      "商品/价格/库存/已售数量公示完整"
    ],
    "risks": [
      "运营时长与备案未知",
      "支付方式未在站内公示",
      "售后政策未在站内公示"
    ],
    "verified": "2026-10-21",
    "products": [],
    "status": "ok",
    "down_days": 0
  },
  {
    "name": "AI杂货铺",
    "url": "https://store.ai-headshot.net",
    "category": "ai-account",
    "desc": "2023 年 12 月成立的 AI 代充杂货铺，主营 ChatGPT/Claude 等代充卡密，7×24 自动发货，带分销返利与分站加盟体系。",
    "score": 40,
    "signals": [
      "HTTPS 有效",
      "2023-12-02 成立，运营超 1 年",
      "QQ 1402709211 / 微信 gracereview618 双客服",
      "7×24 自动发货",
      "提现支持支付宝/微信"
    ],
    "risks": [
      "ICP 备案未见",
      "退款售后政策未明确",
      "第三方口碑待查"
    ],
    "verified": "2026-10-21",
    "products": [],
    "status": "ok",
    "down_days": 0
  },
  {
    "name": "AI服务代充值服务（littlemagic8）",
    "url": "https://littlemagic8.github.io/gptplus/",
    "category": "ai-account",
    "desc": "个人运营的 AI 代充页，主营 GPT/Claude/Gemini/Perplexity/Grok/X Premium 代充，微信客服一对一服务。",
    "score": 30,
    "signals": [
      "HTTPS 有效",
      "自 2025 年初运营超 1 年",
      "微信客服 aicygg888",
      "配套图文教程站"
    ],
    "risks": [
      "个人运营，无公司主体与备案",
      "支付与售后政策未公示",
      "GitHub Pages 托管，域名可随时更换"
    ],
    "verified": "2026-10-21",
    "products": [],
    "status": "ok",
    "down_days": 0
  },
  {
    "name": "TOPUPlive",
    "url": "https://www.topuplive.com",
    "category": "game-topup",
    "desc": "新加坡公司（SEA WHALE TECHNOLOGY PTE.LTD.）运营的游戏充值与礼品卡平台，主营手游/直播充值、Apple/Google 礼品卡与 CD-KEY，公示退款与配送政策。",
    "score": 30,
    "signals": [
      "HTTPS 有效",
      "新加坡公司主体",
      "公示 Refund/Shipping/Transaction Security 政策",
      "PCI 合规标识"
    ],
    "risks": [
      "面向海外用户，中文支持弱",
      "运营时长未知",
      "中文第三方口碑少"
    ],
    "verified": "2026-10-21",
    "products": [],
    "status": "ok",
    "down_days": 0
  },
  {
    "name": "远方充值",
    "url": "https://tgcz.cc",
    "category": "ai-account",
    "desc": "主营 Telegram 会员/电报成品号、AI 软件与海外社媒代充，自称 5 年老平台，在线秒充 8:00–24:00，TG+QQ 双客服。",
    "score": 40,
    "signals": [
      "HTTPS 有效",
      "自称 5 年安全稳定运营",
      "TG @ttsss / QQ 353513246 双客服",
      "在线秒充时间公示"
    ],
    "risks": [
      "5 年为站方自述",
      "ICP 备案与支付方式未公示",
      "售后政策未明确"
    ],
    "verified": "2026-10-21",
    "products": [],
    "status": "ok",
    "down_days": 0
  },
  {
    "name": "Tibo AI",
    "url": "https://gptibo.com",
    "category": "ai-account",
    "desc": "Threads 中文卖家直链的 AI 订阅小店，主营 ChatGPT Plus/Pro、Gemini、Duolingo、X Premium 代充与 Gmail 账号，人民币明码标价。",
    "score": 0,
    "signals": [
      "HTTPS 有效",
      "人民币明码标价（Plus ¥169/月起）",
      "微信客服（社媒帖子披露）",
      "社媒宣称带质保"
    ],
    "risks": [
      "个人小店，运营时长/备案未知",
      "支付方式未公示",
      "质保承诺仅见于社媒帖子",
      "2026-10-15 V2EX 实名举报：购买的会员几天后失效、网站关停且无售后（t/1248869）",
      "连续8天无法访问（HTTPError: HTTP Error 503: HTTP Error 503: Service Unavailable）"
    ],
    "verified": "2026-10-19",
    "products": [
      {
        "pid": "gpt-plus",
        "name": "ChatGPT Plus",
        "spec": "日常之选·自有账号充值·月",
        "price": 169,
        "currency": "CNY",
        "buy_url": "https://gptibo.com/product/chatgpt",
        "stock": false,
        "pverified": "2026-10-21"
      }
    ],
    "status": "down",
    "down_days": 8
  },
  {
    "name": "12GPT",
    "url": "https://12gpt.com",
    "category": "ai-account",
    "desc": "ChatGPT Plus/Pro 代充到自己账号，Plus ¥135/月，微信/支付宝支付",
    "score": 70,
    "signals": [
      "HTTPS有效",
      "自称专注跨境订阅3年半",
      "支持微信/支付宝",
      "微信人工客服",
      "详细售后规则（失败退款/掉订阅赔付）",
      "GitHub代充指南推荐"
    ],
    "risks": [
      "运营时长与用户规模为自称未独立验证"
    ],
    "verified": "2026-10-21",
    "products": [
      {
        "pid": "gpt-plus",
        "name": "ChatGPT Plus",
        "spec": "月付·135元/月·人工充值",
        "price": 135,
        "currency": "CNY",
        "buy_url": "https://12gpt.com/",
        "stock": true,
        "pverified": "2026-10-21"
      }
    ],
    "status": "ok",
    "down_days": 0
  },
  {
    "name": "CODS.IO",
    "url": "https://cods.io/",
    "category": "kami",
    "desc": "Steam/PSN/Xbox/Apple/Netflix 礼品卡与游戏币，即时邮件发货",
    "score": 55,
    "signals": [
      "HTTPS有效",
      "支持俄罗斯银行卡/MIR/SBP",
      "24/7客服",
      "自称评分4.8",
      "官方码保证（激活失败替换）"
    ],
    "risks": [
      "纯俄语站，无中文与支付宝/微信",
      "主要服务俄罗斯用户",
      "自称数据未独立验证"
    ],
    "verified": "2026-10-21",
    "products": [],
    "status": "ok",
    "down_days": 0
  },
  {
    "name": "Hablax",
    "url": "https://www.hablax.com",
    "category": "game-topup",
    "desc": "游戏充值/礼品卡/500+运营商话费充值，App 50万+下载",
    "score": 45,
    "signals": [
      "HTTPS有效",
      "支持Visa/MC/PayPal/Apple Pay/加密货币",
      "在线聊天+邮件+24/7电话预约客服",
      "App Store评分4.8"
    ],
    "risks": [
      "英文站为主",
      "无支付宝/微信",
      "退款政策未在首页确认"
    ],
    "verified": "2026-10-21",
    "products": [],
    "status": "ok",
    "down_days": 0
  },
  {
    "name": "ANTNUM 蚂蚁充值",
    "url": "https://antnum.com",
    "category": "game-topup",
    "desc": "海外代充：抖音/Q币/苹果礼品卡/话费充值，24h客服",
    "score": 45,
    "signals": [
      "HTTPS有效",
      "支持多种支付",
      "24h客服"
    ],
    "risks": [
      "自称老牌未独立验证"
    ],
    "verified": "2026-10-21",
    "products": [],
    "status": "ok",
    "down_days": 0
  },
  {
    "name": "Gameflip",
    "url": "https://gameflip.com/",
    "category": "game-topup",
    "desc": "游戏与礼品卡 C2C 交易市场，Gameflip Guarantee 买家保护",
    "score": 40,
    "signals": [
      "HTTPS有效",
      "客服支持团队",
      "Gameflip Guarantee 100%现金返还买家保护",
      "知名老牌C2C市场"
    ],
    "risks": [
      "C2C卖家质量参差",
      "支付方式未在首页确认",
      "运营时长本次未独立核验"
    ],
    "verified": "2026-10-21",
    "products": [],
    "status": "ok",
    "down_days": 0
  },
  {
    "name": "PatewayAI",
    "url": "https://pateway.ai/?ch=1tsfr51",
    "category": "ai-account",
    "desc": "Claude/Codex 大模型 API 中转站，支付宝支付，最低$1起充",
    "score": 40,
    "signals": [
      "HTTPS有效",
      "支持支付宝跨境支付",
      "邮箱+微信群/QQ群客服",
      "GitHub项目README推荐",
      "注册赠体验额度"
    ],
    "risks": [
      "API中转非官方直充",
      "运营时长未核验"
    ],
    "verified": "2026-10-21",
    "products": [],
    "status": "ok",
    "down_days": 0
  },
  {
    "name": "MMOPIXEL",
    "url": "https://mmopixel.com",
    "category": "game-topup",
    "desc": "游戏币/礼品卡/游戏Key，24/7在线客服，自称100万+客户",
    "score": 30,
    "signals": [
      "HTTPS有效",
      "24/7在线客服",
      "自称5K+好评"
    ],
    "risks": [
      "运营时长未核验",
      "支付方式未在首页确认",
      "自称数据未独立验证"
    ],
    "verified": "2026-10-21",
    "products": [],
    "status": "ok",
    "down_days": 0
  },
  {
    "name": "Jour Cards",
    "url": "https://jour-cards.com",
    "category": "kami",
    "desc": "加密货币礼品卡商城（5000品牌），英文站",
    "score": 30,
    "signals": [
      "HTTPS有效"
    ],
    "risks": [
      "运营时长未核验",
      "纯英文站"
    ],
    "verified": "2026-10-21",
    "products": [],
    "status": "ok",
    "down_days": 0
  },
  {
    "name": "笔墨小铺 BmoPlus",
    "url": "https://shop.bmoplus.com/",
    "category": "ai-account",
    "desc": "GPT/Claude Max/Gemini Pro/Grok 代充，TG客服对接",
    "score": 30,
    "signals": [
      "HTTPS有效",
      "Telegram客服",
      "GitHub sub2api项目README推荐"
    ],
    "risks": [
      "个人小店性质",
      "运营时长未知",
      "售后政策未明确",
      "支付方式未在首页明示"
    ],
    "verified": "2026-10-21",
    "products": [],
    "status": "ok",
    "down_days": 0
  },
  {
    "name": "AIGoCode",
    "url": "https://aigocode.com/",
    "category": "ai-account",
    "desc": "AI开发者工作台/模型额度订阅，按量或订阅付费",
    "score": 30,
    "signals": [
      "HTTPS有效",
      "1v1工程师客服",
      "自称10000+开发者"
    ],
    "risks": [
      "API中转/工作台非官方直充",
      "运营时长未核验",
      "自称数据未独立验证"
    ],
    "verified": "2026-10-21",
    "products": [],
    "status": "ok",
    "down_days": 0
  },
  {
    "name": "Instant Gaming",
    "url": "https://www.instant-gaming.com/",
    "category": "kami",
    "desc": "欧洲老牌游戏折扣直营商，批量采购压价，Trustpilot 70万+评价4.6分，支持加密货币支付。",
    "score": 75,
    "signals": [
      "HTTPS 有效",
      "运营超10年（2005年成立）",
      "主流信用卡/PayPal/加密货币支付",
      "24/7 客服支持",
      "Trustpilot 70万+评价4.6/5",
      "未激活密钥可申请退款"
    ],
    "risks": [
      "非官方授权经销商（地区套利货源争议）"
    ],
    "verified": "2026-10-21",
    "status": "ok",
    "down_days": 0,
    "products": []
  },
  {
    "name": "Gamivo",
    "url": "https://www.gamivo.com/",
    "category": "faka",
    "desc": "游戏CD Key第三方卖家集市，多卖家同品竞价，2017年成立，带返现计划。",
    "score": 65,
    "signals": [
      "HTTPS 有效",
      "运营超3年（2017年成立）",
      "PayPal/信用卡等主流支付",
      "客服支持",
      "allkeyshop等多家测评列为G2A可靠替代",
      "密钥未展示可退"
    ],
    "risks": [
      "第三方卖家模式，个别密钥可能被撤销",
      "结账页有附加保险/订阅勾选，需注意"
    ],
    "verified": "2026-10-19",
    "status": "ok",
    "down_days": 0,
    "products": []
  },
  {
    "name": "DLGamer",
    "url": "https://www.dlgamer.com/",
    "category": "kami",
    "desc": "法国官方授权数字游戏零售商，2004年成立，PC/主机游戏即时交付。",
    "score": 65,
    "signals": [
      "HTTPS 有效",
      "运营超20年（2004年成立，自称官方授权经销商）",
      "主流信用卡/PayPal支付",
      "客服支持",
      "OzBargain/比价站等多家第三方收录"
    ],
    "risks": [
      "欧美站点，中文支持弱"
    ],
    "verified": "2026-10-19",
    "status": "ok",
    "down_days": 0,
    "products": []
  },
  {
    "name": "GVGMall",
    "url": "https://www.gvgmall.com/",
    "category": "game-topup",
    "desc": "游戏币/装备/代练与CD Key综合卖场，自称12年运营、100万+注册用户。",
    "score": 50,
    "signals": [
      "HTTPS 有效",
      "运营超10年（自称12年，100万+注册用户）",
      "PayPal认证商家/PaymentWall合作",
      "7×24 在线客服"
    ],
    "risks": [
      "第三方独立口碑少，多为站方自述",
      "部分商品为预售，发货时效波动"
    ],
    "verified": "2026-10-21",
    "status": "ok",
    "down_days": 0,
    "products": [
      {
        "pid": "gemini-pro",
        "name": "Google AI Gemini Pro",
        "spec": "18个月激活",
        "price": 14.88,
        "currency": "GBP",
        "buy_url": "https://uk.gvgmall.com/pc-games-cdkey/google-ai-gemini-pro-18-months.html",
        "stock": true,
        "pverified": "2026-10-21"
      }
    ]
  },
  {
    "name": "Eldorado",
    "url": "https://www.eldorado.gg/",
    "category": "game-topup",
    "desc": "立陶宛公司运营的游戏资产 P2P 市场，覆盖数百款游戏的账号/金币/道具/代练，托管交易+Trustpilot 28万条评价4.4分。",
    "score": 75,
    "signals": [
      "HTTPS 有效",
      "运营超3年（2018年起活跃）",
      "支持信用卡/Apple Pay/加密货币",
      "24/7 在线客服",
      "Trustpilot 28.4万条评价4.4分",
      "TradeShield 托管+纠纷仲裁"
    ],
    "risks": [
      "P2P 市场，卖家质量参差，第三方测评有买家保护纠纷案例",
      "游戏账号交易本身存在被官方封号风险"
    ],
    "verified": "2026-10-21",
    "status": "ok",
    "down_days": 0
  },
  {
    "name": "BuySellVouchers",
    "url": "https://buysellvouchers.com/",
    "category": "kami",
    "desc": "运营超10年的加密货币礼品卡 P2P 市场，支持70余种加密货币买卖 Apple/Steam/PSN 等礼品卡，资金托管+卖家评级。",
    "score": 50,
    "signals": [
      "HTTPS 有效",
      "运营超3年（域名2012年注册，自称10年以上）",
      "支持70余种加密货币+银行卡",
      "托管交易+24小时纠纷窗口"
    ],
    "risks": [
      "第三方检测站点结论不一（ScamAdviser/scam-detector 算法标记可疑，另两家给高分）",
      "P2P 市场，需选择高信誉卖家"
    ],
    "verified": "2026-10-21",
    "status": "ok",
    "down_days": 0
  },
  {
    "name": "CNLGaming",
    "url": "https://cnlgaming.com/",
    "category": "game-topup",
    "desc": "源自 Path of Exile 的游戏币/账号/代练自营商家，自称超100万订单、99.2%好评，同时在 G2G/Eldorado 以 CNL Team 名义经营。",
    "score": 40,
    "signals": [
      "HTTPS 有效",
      "运营超1年（官网展示2020年起客户评价）",
      "经主流支付商收款",
      "live chat 实时客服"
    ],
    "risks": [
      "自营商家非平台，纠纷依赖商家自身解决",
      "口碑数据（Trustpilot 1000+条）为官网自述，未独立核实"
    ],
    "verified": "2026-10-21",
    "status": "ok",
    "down_days": 0
  },
  {
    "name": "Startselect",
    "url": "https://www.startselect.com/",
    "category": "kami",
    "desc": "欧洲数字礼品卡直营店，PSN/Xbox/Steam/任天堂礼品卡及 Netflix/Spotify 会员即时屏幕+邮件发货。",
    "score": 30,
    "signals": [
      "HTTPS 有效",
      "支持信用卡/Apple Pay/PayPal/Klarna",
      "客服团队每周7天在线（邮件/WhatsApp/社媒）"
    ],
    "risks": [
      "运营年限等背景信息未公开核实"
    ],
    "verified": "2026-10-21",
    "status": "ok",
    "down_days": 0
  },
  {
    "name": "DigitalLicense",
    "url": "https://digitallicense.net/",
    "category": "ai-account",
    "desc": "软件密钥与 AI 订阅直营店，主营 ChatGPT Plus 独享账号、Gemini、Adobe 等，全程质保+24/7客服。",
    "score": 30,
    "signals": [
      "HTTPS 有效",
      "24/7 客服",
      "全程 replacement 质保"
    ],
    "risks": [
      "2026年新站，运营年限短",
      "第三方独立评价少"
    ],
    "verified": "2026-10-19",
    "status": "ok",
    "down_days": 0,
    "products": [
      {
        "pid": "gpt-plus",
        "name": "ChatGPT Plus 独享账号 3个月",
        "spec": "独享/自动发货",
        "price": 51.47,
        "currency": "USD",
        "buy_url": "https://digitallicense.net/product/chatgpt-plus-3-months",
        "stock": true,
        "pverified": "2026-10-21"
      }
    ]
  },
  {
    "name": "泡泡手游代储",
    "url": "https://ppgame.tw/",
    "category": "game-topup",
    "desc": "台湾手游代储值平台，覆盖百款热门手游官方储值，LINE 24小时客服，3~12分钟到账。",
    "score": 20,
    "signals": [
      "HTTPS 有效",
      "24小时 LINE 真人客服"
    ],
    "risks": [
      "代储需提供游戏账号密码，存在账号安全风险",
      "具体价格需加LINE询客服，页面多为 NT$10 起引流价"
    ],
    "verified": "2026-10-21",
    "status": "ok",
    "down_days": 0
  },
  {
    "name": "Gamecardsdirect",
    "url": "https://www.gamecardsdirect.com/",
    "category": "kami",
    "desc": "荷兰数字礼品卡网店，游戏卡/礼品卡邮件秒发，电话邮件在线客服。",
    "score": 20,
    "signals": [
      "HTTPS 有效",
      "电话/邮件/在线聊天客服"
    ],
    "risks": [
      "荷兰小公司，第三方评价（Kiyoh）未核实分数",
      "运营年限未知"
    ],
    "verified": "2026-10-19",
    "status": "ok",
    "down_days": 0
  },
  {
    "name": "MaximusCards",
    "url": "https://maximuscards.com/",
    "category": "kami",
    "desc": "老牌数字卡直营小站，iTunes/Xbox/PSN/任天堂点卡邮件即时发货，支持多种本地支付。",
    "score": 20,
    "signals": [
      "HTTPS 有效",
      "支持多种本地化支付方式（iDEAL/SafetyPay/boleto等）"
    ],
    "risks": [
      "网站信息极简，无公司/客服/退款政策说明",
      "第三方评价难找"
    ],
    "verified": "2026-10-21",
    "status": "ok",
    "down_days": 0
  },
  {
    "category": "kami",
    "desc": "香港直营 key 店（Shopify 自营），主打 Windows/Office 激活码与游戏订阅，低加价模式，付款后自动邮件发货；TrustPilot 累计数千条评价。",
    "down_days": 0,
    "name": "RoyalCDKeys",
    "products": [
      {
        "buy_url": "https://royalcdkeys.com/products/windows-11-pro-retail-cd-key",
        "currency": "USD",
        "name": "Windows 11 Pro Retail CD Key",
        "pid": "windows-key",
        "price": 5.26,
        "pverified": "2026-10-21",
        "spec": "Retail 25位激活码/邮件即时发货",
        "stock": true
      }
    ],
    "risks": [
      "灰市属性：key 为区域折扣转售，存在被撤销风险",
      "运营成立年份未独立核验"
    ],
    "score": 65,
    "signals": [
      "HTTPS 有效",
      "运营>1年（TrustPilot 累计数千条评价，持续运营多年）",
      "支持信用卡/电子钱包（FAQ 明确）",
      "订单客服与激活报错处理流程",
      "TrustPilot 4.5/400+ 条近期评价，allkeyshop 聚合 3268 条 TrustPilot 评论",
      "60 天退款承诺，激活失败可换新或退款"
    ],
    "status": "ok",
    "url": "https://royalcdkeys.com/",
    "verified": "2026-10-19"
  },
  {
    "category": "faka",
    "desc": "欧洲 key 市场平台，Steam/Origin/PSN/Xbox 激活码与礼品卡，主播大使计划与慈善捐赠（累计捐赠 15,712 欧元）。",
    "down_days": 0,
    "name": "K4G.com",
    "risks": [
      "灰市属性：第三方转售市场，key 来源依赖卖家",
      "第三方评测（YouTube 2026）指出部分用户遇到区域锁 key、退款慢、仅退钱包余额",
      "运营时长未独立核验；结算页支付方式未展示"
    ],
    "score": 30,
    "signals": [
      "HTTPS 有效",
      "持续运营多年（慈善计划累计捐赠 €15,712.79、大使计划活跃）",
      "主页宣称客服支持，多语种站点"
    ],
    "status": "ok",
    "url": "https://k4g.com",
    "verified": "2026-10-21"
  },
  {
    "category": "game-topup",
    "desc": "老牌游戏交易平台（2008 年起），游戏账号、装备、金币、点卡与代练担保交易，首创求购交易模式。",
    "down_days": 0,
    "name": "UU898（悠悠游戏服务网）",
    "risks": [
      "公开页面信息有限，客服/退款/第三方口碑未独立核验"
    ],
    "score": 30,
    "signals": [
      "HTTPS 有效",
      "运营>3年（成立于 2008 年）"
    ],
    "status": "ok",
    "url": "https://uu898.com/",
    "verified": "2026-10-19"
  },
  {
    "category": "game-topup",
    "desc": "印尼头部游戏充值/数字商品市场，Mobile Legends、Free Fire 等代充，托管（rekber）交易，24 小时客服，100% 退款承诺。",
    "down_days": 0,
    "name": "VCGamers",
    "risks": [
      "主要面向印尼用户（印尼语/印尼支付为主），海外购买便利性一般",
      "游戏代充受游戏公司封号政策影响"
    ],
    "score": 60,
    "signals": [
      "HTTPS 有效",
      "运营>1年（印尼本地大平台）",
      "支付齐全：QRIS/DANA/GoPay/OVO/信用卡/银行虚拟账户等",
      "24 小时 WhatsApp 客服+邮件",
      "100% 退款承诺，托管（rekber）交易"
    ],
    "status": "ok",
    "url": "https://vcgamers.com",
    "verified": "2026-10-21"
  },
  {
    "name": "LDShop",
    "url": "https://www.ldshop.gg/",
    "category": "game-topup",
    "desc": "LDPlayer旗下游戏代充站，原神UID直充折扣。",
    "score": 0,
    "signals": [
      "HTTPS 有效",
      "域名注册2023-12（运营超1年）",
      "主流支付（Visa/MasterCard/PayPal）",
      "24/7 在线客服按钮",
      "Trustpilot 4.1/5（公司自称LDPlayer旗下）"
    ],
    "risks": [
      "首页文本抓取偶发失败（疑反爬），商品页可正常打开、站点确存活",
      "第三方代充非官方渠道，存在封号风险争议",
      "交付后严格无退款政策",
      "Trustpilot 个别联盟佣金与客服投诉",
      "连续6天无法访问（HTTPError: HTTP Error 403: HTTP Error 403: Forbidden）"
    ],
    "status": "down",
    "verified": "2026-10-19",
    "down_days": 6,
    "products": [
      {
        "pid": "genshin-6480",
        "name": "原神 6480+1600 创世结晶",
        "spec": "UID 直充",
        "price": 67.99,
        "currency": "USD",
        "buy_url": "https://www.ldshop.gg/top-up/genshin-impact.html",
        "stock": null,
        "pverified": "2026-10-21"
      },
      {
        "pid": "welkin-moon",
        "name": "原神 空月祝福（月卡）",
        "spec": "UID 直充",
        "price": 1.0,
        "currency": "USD",
        "buy_url": "https://www.ldshop.gg/top-up/genshin-impact.html",
        "stock": null,
        "pverified": "2026-10-21"
      }
    ]
  },
  {
    "name": "ManaBuy",
    "url": "https://manabuy.com/",
    "category": "game-topup",
    "desc": "香港公司运营的手游代充平台，原神UID直充。",
    "score": 55,
    "signals": [
      "HTTPS 有效",
      "运营超1年（2025-07新闻稿至今）",
      "主流支付（Visa/MasterCard/PayPal/Apple Pay/Google Pay）",
      "24/7 在线客服",
      "Trustpilot 4.2/5，ScamAdviser评为Very Likely Safe，香港公司FUTURE OUTLOOK TECHNOLOGY LIMITED"
    ],
    "risks": [
      "退款政策不明：直充交付后通常不可撤销",
      "页面JSON-LD仅展示价格区间0.99–99.99 USD，未抓到分规格SKU价格，故不收录商品比价"
    ],
    "status": "ok",
    "verified": "2026-10-21",
    "down_days": 0,
    "products": []
  },
  {
    "name": "LootBar",
    "url": "https://www.lootbar.com/",
    "category": "game-topup",
    "desc": "2022年创立的全球游戏代充平台，覆盖100+游戏。",
    "score": 75,
    "signals": [
      "HTTPS 有效",
      "2022年创立（PR Newswire多家转载证实）",
      "60+支付方式（PayPal/Visa/Mastercard/地区钱包）",
      "24/7 多语言客服",
      "Trustpilot 4.9/5（2.8万+评价）",
      "未发货/不可用承诺退款"
    ],
    "risks": [
      "第三方代充可能违反部分游戏官方条款（Reddit封号争议，非诈骗举报）",
      "个别chargeback延迟投诉"
    ],
    "status": "ok",
    "verified": "2026-10-21",
    "down_days": 0,
    "products": []
  },
  {
    "name": "Codashop",
    "url": "https://www.codashop.com/",
    "category": "game-topup",
    "desc": "新加坡Coda Payments旗下，游戏厂商官方合作代充。",
    "score": 75,
    "signals": [
      "HTTPS 有效",
      "Coda Payments 2011年成立（超3年）",
      "250+支付方式（卡/电子钱包/运营商话费/便利店）",
      "客服团队（支持交易单号申诉）",
      "与Moonton/Garena/腾讯/动视暴雪等厂商官方合作，FT亚太高增长金融科技、WEF技术先锋",
      "扣费未到账可联系客服处理"
    ],
    "risks": [
      "无明确公开退款政策细则",
      "价格按地区站点区分，此次采集为马来西亚站点MYR价格"
    ],
    "status": "ok",
    "verified": "2026-10-21",
    "down_days": 0,
    "products": [
      {
        "pid": "mlbb-14-diamond",
        "name": "MLBB 钻石",
        "spec": "14钻石 UID+ZoneID直充",
        "price": 1.09,
        "currency": "MYR",
        "buy_url": "https://www.codashop.com/en-my/mobile-legends",
        "stock": true,
        "pverified": "2026-10-21"
      },
      {
        "pid": "mlbb-weekly-pass",
        "name": "MLBB 每周钻石通行证",
        "spec": "80钻石即时+每日20钻石×7天",
        "price": 9.3,
        "currency": "MYR",
        "buy_url": "https://www.codashop.com/en-my/mobile-legends",
        "stock": true,
        "pverified": "2026-10-21"
      },
      {
        "pid": "mlbb-twilight-pass",
        "name": "MLBB 暮光通行证",
        "spec": "UID直充",
        "price": 46.7,
        "currency": "MYR",
        "buy_url": "https://www.codashop.com/en-my/mobile-legends",
        "stock": true,
        "pverified": "2026-10-21"
      }
    ]
  },
  {
    "category": "kami",
    "desc": "瑞典老牌 PC 游戏官方授权数字发行商（2006 年起运营），密钥全部来自发行商直供，非灰市，Steam/Epic/Rockstar 均可激活。",
    "down_days": 0,
    "name": "GamersGate",
    "products": [],
    "risks": [
      "VPS 复核 HTTP 200 确认在营（browser.open 直连曾超时，疑传输层问题）"
    ],
    "score": 75,
    "signals": [
      "2006 年运营，瑞典 GamersGate AB，维基有条目",
      "发行商官方授权直供正版密钥，非灰市",
      "多轮第三方测评列为可信 CD Key 站"
    ],
    "status": "ok",
    "url": "https://www.gamersgate.com",
    "verified": "2026-10-21"
  },
  {
    "category": "kami",
    "desc": "数字商品交易市场（俄语区用户为主），卖家入驻制，平台提供交易保护与纠纷处理，Steam 充值、礼品卡、游戏密钥、AI 订阅均有售，支持 PayPal 与加密货币。",
    "down_days": 0,
    "name": "GGSel",
    "products": [
      {
        "buy_url": "https://ggsel.net/en/catalog/last-epoch-keys",
        "currency": "USD",
        "name": "Last Epoch 游戏密钥",
        "pid": "last-epoch-key",
        "price": 7.75,
        "pverified": "2026-10-21",
        "spec": "Steam 激活（目录页起价）",
        "stock": true
      },
      {
        "buy_url": "https://ggsel.net/en/catalog/sea-of-thieves-dlc-ps",
        "currency": "USD",
        "name": "Sea of Thieves 远古金币 150",
        "pid": "sea-of-thieves-coins-150",
        "price": 16,
        "pverified": "2026-10-21",
        "spec": "PSN 充值码",
        "stock": true
      },
      {
        "buy_url": "https://ggsel.net/en/catalog/warframe-accounts",
        "currency": "USD",
        "name": "Warframe 白金 1400",
        "pid": "warframe-platinum-1400",
        "price": 37,
        "pverified": "2026-10-21",
        "spec": "PC 平台",
        "stock": false
      }
    ],
    "risks": [
      "第三方独立口碑较少，站内评论为主",
      "俄语界面为主，英语目录页可用"
    ],
    "score": 55,
    "signals": [
      "卖家验证+交易保护+纠纷处理机制",
      "24/7 在线客服",
      "支持信用卡/PayPal/加密货币",
      "单品页销售量大（Steam 充值 610 万+成交）"
    ],
    "status": "ok",
    "url": "https://ggsel.net",
    "verified": "2026-10-19"
  },
  {
    "category": "kami",
    "desc": "香港官方授权数字零售商（2014 年运营），发行商直供正版游戏密钥，即时发货，支持支付宝与 PayPal，24/7 在线客服。",
    "down_days": 0,
    "name": "2Game",
    "products": [
      {
        "buy_url": "https://www.2game.com/products/itunes-gift-card-jp-itunes-gift-card-500-jpy",
        "currency": "USD",
        "name": "iTunes Gift Card JP",
        "pid": "apple-gift-jp-500",
        "price": 4.24,
        "pverified": "2026-10-21",
        "spec": "500 JPY 日区",
        "stock": false
      },
      {
        "buy_url": "https://www.2game.com/products/itunes-gift-card-jp-itunes-gift-card-1000-jpy",
        "currency": "USD",
        "name": "iTunes Gift Card JP",
        "pid": "apple-gift-jp-1000",
        "price": 8.48,
        "pverified": "2026-10-21",
        "spec": "1000 JPY 日区",
        "stock": false
      }
    ],
    "risks": [],
    "score": 75,
    "signals": [
      "2014 年运营，香港 2Game Digital",
      "发行商官方授权，密钥来源正规",
      "24/7 在线客服",
      "支持支付宝/PayPal/信用卡",
      "第三方比价站 allkeyshop 认证为官方零售商"
    ],
    "status": "ok",
    "url": "https://2game.com",
    "verified": "2026-10-19"
  },
  {
    "category": "kami",
    "desc": "知名\"按需付费\"游戏慈善包平台（2010 年运营），月度 Humble Choice 订阅与单品商店，全部为 Steam 密钥，部分收入捐慈善。",
    "down_days": 0,
    "name": "Humble Bundle",
    "products": [],
    "risks": [
      "本轮首页文本稀疏，仅验证可打开，未提取到商品价格"
    ],
    "score": 75,
    "signals": [
      "2010 年运营，IGN 旗下全球知名平台",
      "慈善包模式+单品商店双线",
      "支持信用卡/PayPal/Amazon Pay/支付宝",
      "主流媒体长期报道，口碑广泛"
    ],
    "status": "ok",
    "url": "https://www.humblebundle.com",
    "verified": "2026-10-21"
  },
  {
    "category": "kami",
    "desc": "土耳其数字游戏商店，游戏礼品卡/直充/充值卡全球即时邮件发货，700+ 本地支付方式，支持支付宝与微信支付。",
    "down_days": 0,
    "name": "MTCGAME",
    "products": [],
    "risks": [
      "运营年限未核实到权威来源，未计年限分"
    ],
    "score": 55,
    "signals": [
      "24/7 客服",
      "700+ 支付方式含支付宝/微信",
      "买家保护与退款保证",
      "V2EX 用户 2026-09 真实讨论帖推荐"
    ],
    "status": "ok",
    "url": "https://www.mtcgame.com",
    "verified": "2026-10-19"
  },
  {
    "category": "kami",
    "desc": "土耳其最大游戏 E-pin 平台（2006 年成立，MGM Bilgi 旗下），Steam/Xbox/PSN 礼品卡与游戏密钥，与 85+ 发行商官方合作。",
    "down_days": 0,
    "name": "Oyunfor",
    "products": [],
    "risks": [
      "土耳其语为主，英语支持有限"
    ],
    "score": 75,
    "signals": [
      "2006 年成立，土耳其 MGM Bilgi Teknolojileri A.S.",
      "85+ 发行商官方合作（Animoca 公告佐证）",
      "V2EX 用户 2026-09 真实推荐、Xbox Store Checker 有购买教程",
      "7/24 在线客服+客服电话 444 00 69"
    ],
    "status": "ok",
    "url": "https://www.oyunfor.com",
    "verified": "2026-10-19"
  },
  {
    "category": "ai-account",
    "desc": "专注 Claude Pro 代充的国内平台，卡密核销模式、充值无需提供账号密码，支持支付宝/微信，页面明示 Claude 代充存在风控封号风险。",
    "down_days": 0,
    "name": "UpClaude",
    "products": [
      {
        "buy_url": "https://upclaude.com/",
        "currency": "CNY",
        "name": "Claude Pro 月充",
        "pid": "claude-pro",
        "price": 169,
        "pverified": "2026-10-21",
        "spec": "Claude Pro 月度套餐充值卡密",
        "stock": true
      }
    ],
    "risks": [
      "未展示ICP备案信息",
      "Claude 代充本身有风控封号风险，站方声明风险自担",
      "运营时长不明"
    ],
    "score": 55,
    "signals": [
      "HTTPS 有效",
      "支持支付宝/微信支付",
      "微信客服 9:00-24:00",
      "充值失败支持退款",
      "GitHub 独立教程站推荐"
    ],
    "status": "ok",
    "url": "https://upclaude.com/",
    "verified": "2026-10-21"
  },
  {
    "category": "ai-account",
    "desc": "多模型聚合订阅平台，一个账号可用 GPT/Claude/Gemini/Midjourney 等百余模型与图像视频工具，按积分计费，订阅起价 $5.75/月（年付）。",
    "down_days": 0,
    "name": "GlobalGPT",
    "products": [
      {
        "buy_url": "https://www.glbgpt.com/",
        "currency": "USD",
        "name": "GlobalGPT 订阅",
        "pid": "globalgpt-subscription",
        "price": 5.75,
        "pverified": "2026-10-21",
        "spec": "起步价，年付",
        "stock": true
      }
    ],
    "risks": [
      "新兴聚合平台，运营时长不明",
      "退款/客服政策页面未明示",
      "是服务聚合而非官方账号转售，模型可用性依平台而定"
    ],
    "score": 25,
    "signals": [
      "HTTPS 有效",
      "多篇独立博客/购买指南讨论该平台"
    ],
    "status": "ok",
    "url": "https://www.glbgpt.com/",
    "verified": "2026-10-21"
  },
  {
    "category": "ai-account",
    "desc": "老牌多模型聚合平台，GPT/Claude/Gemini/文生图/视频/音频全覆盖，按积分计费，免费档可用；Macworld 与 StackSocial 曾报道其终身套餐优惠。",
    "down_days": 0,
    "name": "1min.AI",
    "products": [
      {
        "buy_url": "https://1min.ai/",
        "currency": "USD",
        "name": "1min.AI PRO",
        "pid": "1minai-pro",
        "price": 6.5,
        "pverified": "2026-10-21",
        "spec": "PRO 档，月付",
        "stock": true
      }
    ],
    "risks": [
      "是服务聚合而非官方账号转售",
      "客服/退款政策页面未明示"
    ],
    "score": 25,
    "signals": [
      "HTTPS 有效",
      "Macworld/StackSocial 媒体报道",
      "站内展示 GDPR/HIPAA/SOC2 合规标识",
      "全平台客户端（Web/iOS/安卓/桌面/插件）"
    ],
    "status": "ok",
    "url": "https://1min.ai/",
    "verified": "2026-10-21"
  },
  {
    "category": "game-topup",
    "desc": "SEAGM 孵化的全球 C2C 游戏数字商品集市，玩家间买卖游戏币、代充与装备，UID 直充类商品丰富，SEAGM 官网在售 KALEOZ 礼品卡。",
    "down_days": 0,
    "name": "KALEOZ",
    "products": [],
    "risks": [
      "C2C 市场，单个卖家发货速度与价格差异大，买前看卖家评分"
    ],
    "score": 85,
    "signals": [
      "HTTPS 有效",
      "运营超3年（SEAGM 孵化，SEAGM 自 2007 年运营）",
      "支持信用卡/PayPal/电子钱包",
      "专业客服团队（8:00-24:00 GMT+8，多渠道）",
      "SEAGM 官方在售 KALEOZ 礼品卡",
      "站内有 Refund & Return 政策"
    ],
    "status": "ok",
    "url": "https://www.kaleoz.com/",
    "verified": "2026-10-21"
  },
  {
    "category": "game-topup",
    "desc": "新兴游戏直充站，覆盖原神/星铁/MLBB/Valorant 等 28+ 游戏与主流礼品卡，主打 UID 直充免登录，宣称 24/7 客服与全额退款保障。",
    "down_days": 0,
    "name": "KeyGold",
    "products": [],
    "risks": [
      "新域名（2026 年内容指向新站），运营历史不明",
      "第三方口碑暂无",
      "客服/退款均为站方自述"
    ],
    "score": 30,
    "signals": [
      "HTTPS 有效",
      "宣称 24/7 客服",
      "宣称 Full Refund Guarantee"
    ],
    "status": "ok",
    "url": "https://keygold.gg/",
    "verified": "2026-10-21"
  },
  {
    "category": "game-topup",
    "desc": "香港公司运营的游戏直充商店，覆盖 181+ 款手游与端游，支持支付宝/微信与多本地支付，Trustpilot 4.2/5（2,238 条，站方展示）。",
    "down_days": 0,
    "name": "Elitedias",
    "products": [],
    "risks": [
      "运营时长与 Trustpilot 数据为站方自述，需独立核验",
      "退款政策偏严格（已充值无法退款，只有无法交付才退）"
    ],
    "score": 65,
    "signals": [
      "HTTPS 有效",
      "运营超3年（页脚 ©2016-2026 自述）",
      "PCI DSS 支付网关+多本地支付",
      "WhatsApp/Telegram 客服",
      "Trustpilot 4.2/5 共 2,238 条评价（站方展示）"
    ],
    "status": "ok",
    "url": "https://elitedias.com/",
    "verified": "2026-10-19"
  },
  {
    "category": "game-topup",
    "desc": "菲律宾本土游戏代充站（自称 2018 年成立），主打 MLBB/王者荣耀/原神等 UID 直充，支持 GCash/Maya/GrabPay/USDT，有实体公司与公开地址。",
    "down_days": 0,
    "name": "GPDS Game Shop",
    "products": [],
    "risks": [
      "运营时长与口碑为站方自述，需独立核验",
      "主要面向菲律宾市场，国际用户支付以 PayPal/卡/USDT 为主"
    ],
    "score": 65,
    "signals": [
      "HTTPS 有效",
      "运营超3年（自述 2018 年成立）",
      "支持多本地支付+USDT/信用卡",
      "WhatsApp/Facebook 客服+帮助中心",
      "FAQ 称 Trustpilot 有独立反馈可查"
    ],
    "status": "ok",
    "url": "https://gpdsgameshop.com/",
    "verified": "2026-10-21"
  },
  {
    "name": "Driffle",
    "url": "https://driffle.com/",
    "category": "kami",
    "desc": "2021年成立的数字游戏市集，认证卖家销售Steam游戏Key、礼品卡与游戏点卡，覆盖100多个国家本地支付。",
    "score": 75,
    "signals": [
      "2021年成立（美国特拉华/印度班加罗尔），获BEENEXT领投340万美元种子轮",
      "支持信用卡、PayPal、Neosurf及多地区本地支付",
      "24/7客服，未拆封密钥14天无理由退款",
      "Trustpilot真实买家评价，Entrepreneur/YourStory/Inc42等多家媒体报道"
    ],
    "risks": [
      "卖家制市集，个别密钥可能存在区域锁，购买前需核对版本"
    ],
    "verified": "2026-10-21",
    "status": "ok",
    "down_days": 0
  },
  {
    "name": "IndieGala",
    "url": "https://www.indiegala.com/",
    "category": "kami",
    "desc": "意大利老牌游戏商店（2011年起），以低价Steam Key捆绑包、独立游戏促销和免费赠送活动见长。",
    "score": 75,
    "signals": [
      "2011年成立，意大利罗马公司，持续运营14年",
      "r/GameDeals认证商店，Wikipedia收录，Steam官方社区近10万在线",
      "支持信用卡、PayPal、加密货币支付",
      "Steam社区置顶客服FAQ，Discord客服渠道"
    ],
    "risks": [
      "数字商品退款政策相对严格，购买前建议确认区域版本"
    ],
    "verified": "2026-10-21",
    "status": "ok",
    "down_days": 0,
    "products": [
      {
        "pid": "game-bundle",
        "name": "IndieGala 限时游戏捆绑包",
        "spec": "多款游戏Steam Key合集（如17 Key合集），价格随捆绑包浮动",
        "price": 1.49,
        "currency": "USD",
        "buy_url": "https://www.indiegala.com/",
        "stock": true,
        "pverified": "2026-10-21"
      }
    ]
  },
  {
    "name": "ChongGrok",
    "url": "https://chonggrok.com",
    "category": "ai-account",
    "desc": "面向中文用户的 AI 订阅代充站，只做官方会员代充（不卖成品号），覆盖 ChatGPT、Grok、Claude、Gemini、Perplexity。",
    "score": 40,
    "signals": [
      "HTTPS",
      "支付宝/微信主流支付",
      "人工客服协助",
      "公开退款与售后规则，明确声明非官方服务"
    ],
    "risks": [
      "运营时长无公开证据",
      "第三方代充非官方，账号风控风险需自担"
    ],
    "verified": "2026-10-21",
    "status": "ok",
    "down_days": 0,
    "products": [
      {
        "pid": "gpt-plus",
        "name": "ChatGPT Plus 代充",
        "spec": "自有账号，按页面指引自助兑换",
        "price": 179,
        "currency": "CNY",
        "buy_url": "https://chonggrok.com",
        "stock": true,
        "pverified": "2026-10-21"
      },
      {
        "pid": "claude-pro",
        "name": "Claude Pro 代充",
        "spec": "自有账号，人工开通",
        "price": 179,
        "currency": "CNY",
        "buy_url": "https://chonggrok.com",
        "stock": true,
        "pverified": "2026-10-21"
      },
      {
        "pid": "gemini-pro",
        "name": "Gemini Pro",
        "spec": "家庭组/自有账号多档，会员权益质保一个月",
        "price": 69,
        "currency": "CNY",
        "buy_url": "https://chonggrok.com",
        "stock": true,
        "pverified": "2026-10-21"
      }
    ]
  },
  {
    "name": "明月Plus",
    "url": "https://aicz123.com",
    "category": "ai-account",
    "desc": "国内 ChatGPT Plus/Pro 订阅充值平台（曾名明月GPT），美区 iOS 订阅通道一卡一充，全程无需提供账号密码。",
    "score": 45,
    "signals": [
      "HTTPS",
      "微信/支付宝付款，支持正规公司发票",
      "QQ 客服+邮箱+订单可查",
      "完整退款售后政策（充值失败全额退款、掉订阅按天退赔）",
      "V2EX/GitHub 第三方教程交叉提及"
    ],
    "risks": [
      "双域名并行运营（mingyue188.com 已无法解析，现用 aicz123.com）",
      "用户数等数字为平台自述未独立验证"
    ],
    "verified": "2026-10-21",
    "status": "ok",
    "down_days": 0
  },
  {
    "name": "Aifory Pro",
    "url": "https://aifory.pro/",
    "category": "ai-account",
    "desc": "俄罗斯 AI 订阅代充服务商，以激活码形式自助开通 ChatGPT Plus，卢布支付，博客持续更新教程与价格。",
    "score": 30,
    "signals": [
      "HTTPS",
      "СБП/银行卡卢布支付",
      "邮箱/TG/电话客服联系方式齐全",
      "博客 2026-10 仍在更新，内容真实"
    ],
    "risks": [
      "纯俄语站点，仅支持卢布支付，对中文用户门槛高",
      "第三方口碑与运营年限无公开证据"
    ],
    "verified": "2026-10-21",
    "status": "ok",
    "down_days": 0
  },
  {
    "name": "AiZolo",
    "url": "https://aizolo.com",
    "category": "ai-account",
    "desc": "All-in-One AI 聚合订阅平台，单订阅多模型并排对比对话（GPT/Claude/Gemini/Grok 等），含免费档。",
    "score": 30,
    "signals": [
      "HTTPS",
      "邮件客服+优先支持",
      "7 天未使用退款政策公开"
    ],
    "risks": [
      "新站（自述活跃用户 1000+，运营年限无证据）",
      "聚合器非官方直售，第三方口碑缺失"
    ],
    "verified": "2026-10-21",
    "status": "ok",
    "down_days": 0,
    "products": [
      {
        "pid": "all-in-one",
        "name": "AiZolo Pro 全能 AI 订阅",
        "spec": "多模型并排对话，300 万 tokens/月",
        "price": 9.9,
        "currency": "USD",
        "buy_url": "https://aizolo.com",
        "stock": true,
        "pverified": "2026-10-21"
      }
    ]
  },
  {
    "name": "U7BUY",
    "url": "https://www.u7buy.com",
    "category": "game-topup",
    "desc": "游戏账号交易市场，主打 Steam 账号买卖（新号/单游戏/捆绑包/高等级号），卖家实名认证+买家托管担保。",
    "score": 40,
    "signals": [
      "HTTPS",
      "40+ 支付方式（含 PayPal、信用卡、支付宝）",
      "买家托管担保+售后支持",
      "卖家实名认证与评分机制"
    ],
    "risks": [
      "账号买卖为非官方授权的灰色地带",
      "15 万+交易为平台自述"
    ],
    "verified": "2026-10-19",
    "status": "ok",
    "down_days": 0,
    "products": [
      {
        "pid": "game-account",
        "name": "Steam 游戏账号",
        "spec": "新号/单游戏/捆绑包多档，成品号 1.20 美元起",
        "price": 1.2,
        "currency": "USD",
        "buy_url": "https://www.u7buy.com/steam/steam-accounts",
        "stock": true,
        "pverified": "2026-10-21"
      }
    ]
  },
  {
    "name": "Gamers Outlet",
    "url": "https://www.gamers-outlet.net/",
    "category": "kami",
    "desc": "2013 年创立的美国游戏/软件密钥零售商，Steam/Xbox/微软软件密钥即时邮件交付，支持 PayPal 等多支付方式。",
    "score": 65,
    "signals": [
      "HTTPS 有效",
      "运营超 10 年（2013 年 11 月创立，马萨诸塞）",
      "支持 PayPal / Apple Pay / Google Pay / Klarna 主流支付",
      "24/7 英文客服，订单自动生成发票",
      "Trustpilot / GoCDKeys / CDKeyWatch 第三方徽章展示"
    ],
    "risks": [
      "未经授权的密钥渠道（keyshop 性质，货源非发行商直接授权）",
      "部分商品为区域版本（如 Middle-East 版），购买前需确认区服"
    ],
    "verified": "2026-10-21",
    "status": "ok",
    "down_days": 0,
    "products": [
      {
        "pid": "windows-key",
        "name": "Windows 11 Pro 终身密钥（全球版）",
        "spec": "OEM, Global, 即时交付",
        "price": 6.6,
        "currency": "USD",
        "buy_url": "https://www.gamers-outlet.net/en/buy-windows-11-pro-cd-key-oem-microsoft-global-1",
        "stock": true,
        "pverified": "2026-10-21"
      },
      {
        "pid": "steam-key",
        "name": "Phantom Blade Zero 标准版 Steam 密钥",
        "spec": "PC Steam Key, Global",
        "price": 54.27,
        "currency": "USD",
        "buy_url": "https://www.gamers-outlet.net/en/phantom-blade-zero-standard-edition-pc-steam-key-global",
        "stock": true,
        "pverified": "2026-10-21"
      }
    ]
  },
  {
    "name": "小羊 Plus",
    "url": "https://xiaoyangplus.com/",
    "category": "ai-account",
    "desc": "国内 AI 会员自助代充站，主营 ChatGPT Plus/Pro、Claude Pro、Cursor 等代充，支持支付宝/微信支付，明确承诺充值失败当天全额退款。",
    "score": 45,
    "signals": [
      "HTTPS 有效",
      "支持支付宝 / 微信主流支付",
      "明确退款政策：充值失败当天全额退款",
      "自助充值流程，无需将账号密码交给客服",
      "站内 FAQ 与售后联系通道完善"
    ],
    "risks": [
      "运营年限未知，无可验证的公司主体信息",
      "未展示 ICP 备案号",
      "第三方口碑不足（仅一篇 V2EX 帖子提及）",
      "代充行为本身存在 OpenAI 官方风控风险"
    ],
    "verified": "2026-10-21",
    "status": "ok",
    "down_days": 0
  },
  {
    "name": "Midasbuy",
    "url": "https://www.midasbuy.com",
    "category": "game-topup",
    "desc": "腾讯旗下 PUBG Mobile 等手游官方充值中心，凭玩家 ID 直充到账、零封号风险",
    "score": 65,
    "signals": [
      "HTTPS 可访问（2026-10-19 browser.open 验证）",
      "域名 2018-06 注册、运营 8 年以上",
      "多家独立第三方确认为官方充值渠道",
      "外部声誉检查无异常、无诈骗举报",
      "多国本地支付方式、客服与隐私政策齐全"
    ],
    "risks": [
      "官方直充按官方定价，通常无第三方代充折扣",
      "首页 JS 单页渲染，未采集到具体商品价格"
    ],
    "verified": "2026-10-21",
    "status": "ok",
    "down_days": 0,
    "products": []
  },
  {
    "name": "AccountBot",
    "url": "https://accountbot.org/",
    "category": "ai-account",
    "desc": "AI 账号小店，主营 ChatGPT Plus 1/3/6/12 个月订阅，$4.99/月起，含 Replacement Warranty。",
    "score": 30,
    "signals": [
      "HTTPS 有效",
      "ChatGPT Plus 1 个月仅 $4.99（官方 $20/月）",
      "提供 Replacement Warranty",
      "支持客服团队联系"
    ],
    "risks": [
      "运营时长未知",
      "第三方口碑待查",
      "独立第三方网站，非官方授权（官网自述）",
      "低价账号存在被 OpenAI 封禁风险"
    ],
    "verified": "2026-10-21",
    "status": "ok",
    "down_days": 0,
    "products": [
      {
        "pid": "gpt-plus",
        "name": "ChatGPT Plus",
        "spec": "1 个月",
        "price": 4.99,
        "currency": "USD",
        "buy_url": "https://accountbot.org/product/chatgpt-plus/",
        "stock": true,
        "pverified": "2026-10-21"
      }
    ]
  },
  {
    "name": "Treabar",
    "url": "https://treabar.com/",
    "category": "game-topup",
    "desc": "原神/多游戏 UID 直充站，原神 6480 结晶 $86（官方 $99.99），支持信用卡与东南亚电子钱包。",
    "score": 40,
    "signals": [
      "HTTPS 有效",
      "UID 直充（无需密码）",
      "原神 6480 结晶 $86（官方 $99.99）",
      "主流信用卡与东南亚电子钱包",
      "24/7 在线客服"
    ],
    "risks": [
      "自称持有互联网经营许可，未独立核实",
      "第三方代充非官方渠道",
      "2 年口碑为网站自述，无独立第三方测评"
    ],
    "verified": "2026-10-21",
    "status": "ok",
    "down_days": 0,
    "products": [
      {
        "pid": "genshin-6480",
        "name": "原神 6480+1600 创世结晶",
        "spec": "UID 直充",
        "price": 86.0,
        "currency": "USD",
        "buy_url": "https://treabar.com/en/gameZone/genshin-impact-top-up",
        "stock": true,
        "pverified": "2026-10-21"
      },
      {
        "pid": "welkin-moon",
        "name": "原神 空月祝福（月卡）",
        "spec": "UID 直充",
        "price": 4.39,
        "currency": "USD",
        "buy_url": "https://treabar.com/en/gameZone/genshin-impact-top-up",
        "stock": true,
        "pverified": "2026-10-21"
      }
    ]
  },
  {
    "name": "EnjoyGM",
    "url": "https://www.enjoygm.com/",
    "category": "game-topup",
    "desc": "原神/多游戏 UID 直充站，原神 6480+1600 结晶 $68.92（约 31% off），60+ 支付方式，24/7 客服。",
    "score": 30,
    "signals": [
      "HTTPS 有效",
      "UID 直充（无需密码）",
      "原神 6480+1600 结晶 $68.92（官方 $99.99，约 31% off）",
      "60+ 支付方式（含 PayPal/GCash/加密货币）",
      "24/7 客服（网站自称 2 分钟内响应）"
    ],
    "risks": [
      "网站自称 4.98/5（12,726 条评价），无独立第三方测评",
      "运营时长未知",
      "第三方代充非官方渠道"
    ],
    "verified": "2026-10-21",
    "status": "ok",
    "down_days": 0,
    "products": [
      {
        "pid": "genshin-6480",
        "name": "原神 6480+1600 创世结晶",
        "spec": "UID 直充",
        "price": 68.92,
        "currency": "USD",
        "buy_url": "https://www.enjoygm.com/top-up/genshin-impact",
        "stock": true,
        "pverified": "2026-10-21"
      }
    ]
  },
  {
    "name": "Bitrefill",
    "url": "https://www.bitrefill.com/",
    "category": "kami",
    "desc": "全球加密礼品卡商（2014 年成立），5000+ 礼品卡/eSIM/话费充值，用 BTC/Lightning/USDT 等加密货币支付，Trustpilot 4.6/5。",
    "score": 55,
    "signals": [
      "HTTPS 有效",
      "运营超 3 年（2014 年成立）",
      "5000+ 礼品卡/eSIM/话费充值",
      "BTC/Lightning/ETH/USDC/USDT 等加密支付",
      "客服 Help Center",
      "Trustpilot 4.6/5"
    ],
    "risks": [
      "仅支持加密货币支付",
      "数字礼品卡售出后一般不退"
    ],
    "verified": "2026-10-19",
    "status": "ok",
    "down_days": 0,
    "products": []
  },
  {
    "name": "Gameseal",
    "url": "https://gameseal.com/",
    "category": "kami",
    "desc": "游戏 Key 与礼品卡直销商（非市场集市），8万+ 数字商品，结算价透明无隐藏费用。",
    "score": 55,
    "signals": [
      "HTTPS 有效",
      "Trustpilot 4.2/5（约1.85万条测评）",
      "支持 PayPal/主流信用卡/Apple Pay/Google Pay",
      "24/7 人工客服",
      "自称15秒即时交付",
      "价格透明、无隐藏结算费（第三方测评）"
    ],
    "risks": [
      "密钥来源非官方授权渠道（灰市批发）",
      "偶有黑键/区域锁/发货失败投诉",
      "运营时长与公司主体信息不明"
    ],
    "verified": "2026-10-21",
    "status": "ok",
    "down_days": 0,
    "products": []
  },
  {
    "name": "158card",
    "url": "https://www.158card.com/",
    "category": "game-topup",
    "desc": "海外华人游戏充值与数字点卡平台，自称2008年开站；Q币/抖音/Apple ID/原神扫码代付直充，支持 PayPal 付款。",
    "score": 50,
    "signals": [
      "HTTPS 有效",
      "自称2008年开站（站内商品素材可追溯至2019年）",
      "支持 PayPal/Visa/Mastercard/Google Pay/Apple Pay 多币种",
      "7×24小时在线客服（QQ/电话/微信）",
      "5500+ 商品在售，超时赔付承诺"
    ],
    "risks": [
      "成立年份为自称，未经独立核验",
      "第三方代充非官方渠道，存在封号/充值追回风险",
      "Apple ID 直充需提交账号密码（建议用临时密码）"
    ],
    "verified": "2026-10-21",
    "status": "ok",
    "down_days": 0,
    "products": [
      {
        "pid": "apple-gift",
        "name": "中国区 Apple ID 充值（人工直充）",
        "spec": "50元起，50/100/300/500/1000+元面额",
        "price": 9.13,
        "currency": "USD",
        "buy_url": "https://www.158card.com/card/015/402.html",
        "stock": true,
        "pverified": "2026-10-21"
      }
    ]
  },
  {
    "name": "GameBoost",
    "url": "https://gameboost.com/",
    "category": "game-topup",
    "desc": "综合游戏虚拟商品交易平台（克罗地亚公司，2018年运营至今）：游戏账号、代练、游戏货币、Top-Up充值、道具、礼品卡与游戏Key，覆盖原神/堡垒之夜/Valorant等。",
    "score": 65,
    "signals": [
      "HTTPS 有效",
      "运营超3年（2018年成立，克罗地亚注册公司 Global Gaming Services d.o.o.）",
      "支持 PaysafeCard/Apple Pay 等多种支付",
      "24/7 真人客服（Live Chat/Discord）",
      "Trustpilot 4.9/5（首页自称）",
      "自称72万+用户、210万+订单"
    ],
    "risks": [
      "第三方代充/代练为非官方渠道，存在封号风险",
      "部分商品为玩家卖家C2C，服务质量参差"
    ],
    "verified": "2026-10-21",
    "status": "ok",
    "down_days": 0,
    "products": []
  }
];
