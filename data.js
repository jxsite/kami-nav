/* 卡密导航站点数据 — 每日自动验证更新。字段：
   name: 网站名, url: 首页地址, category: faka|kami|ai-account|game-topup,
   desc: 一句话简介, score: 可靠度0-100, signals: 加分依据[], risks: 风险点[],
   verified: 验证日期, status: ok|down, down_days: 连续无法访问天数 */
const UPDATED_AT = "2026-10-13";
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
    "verified": "2026-10-13",
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
        "pverified": "2026-10-13"
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
    "verified": "2026-10-13",
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
    "verified": "2026-10-13",
    "status": "ok",
    "down_days": 0,
    "products": [
      {
        "pid": "apple-gift",
        "name": "iTunes Gift Card JPY 15,000 (JP)",
        "spec": "15000日元/日区",
        "price": 16302.09,
        "currency": "JPY",
        "buy_url": "https://www.offgamers.com/ID/buynow/15000yen-itunes-gift-card-jp.html",
        "stock": false,
        "pverified": "2026-10-13"
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
    "verified": "2026-10-13",
    "status": "ok",
    "down_days": 0,
    "products": [
      {
        "pid": "steam-key",
        "name": "Elden Ring (PC) - Steam Key - EUROPE",
        "spec": "标准版/欧区",
        "price": 54.85,
        "currency": "USD",
        "buy_url": "https://www.g2a.com/elden-ring-pc-steam-key-europe-i10000273674006?adid=news_gaming.guides_119208_read.more.button&id=119",
        "stock": true,
        "pverified": "2026-10-13"
      },
      {
        "pid": "netflix",
        "name": "Netflix Account Basic 1 Month - GLOBAL",
        "spec": "Basic 1个月/成品账号直登",
        "price": 21.06,
        "currency": "USD",
        "buy_url": "https://www.g2a.com/netflix-account-basic-1-month-netflix-account-global-i10000337248004",
        "stock": true,
        "pverified": "2026-10-13"
      },
      {
        "pid": "spotify",
        "name": "Spotify Premium Subscription Card Individual 12 Months",
        "spec": "个人版12个月",
        "price": 33.02,
        "currency": "USD",
        "buy_url": "https://www.g2a.com/spotify-premium-subscription-card-individual-12-months-spotify-account-account-global-i10000000243117?mosaic2=",
        "stock": true,
        "pverified": "2026-10-13"
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
    "verified": "2026-10-13",
    "status": "ok",
    "down_days": 0,
    "products": [
      {
        "pid": "steam-key",
        "name": "Elden Ring EU Steam CD Key",
        "spec": "标准版/欧区",
        "price": 47.99,
        "currency": "EUR",
        "buy_url": "https://www.kinguin.net/category/111448/elden-ring-eu-steam-cd-key",
        "stock": true,
        "pverified": "2026-10-13"
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
    "verified": "2026-10-13",
    "status": "ok",
    "down_days": 0,
    "products": [
      {
        "pid": "steam-key",
        "name": "Elden Ring (PC) Steam Key NORTH AMERICA",
        "spec": "标准版/北美区",
        "price": 57.16,
        "currency": "USD",
        "buy_url": "https://www.eneba.com/ms-my/steam-elden-ring-pc-steam-key-north-america",
        "stock": true,
        "pverified": "2026-10-13"
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
    "verified": "2026-10-13",
    "status": "ok",
    "down_days": 0,
    "products": [
      {
        "pid": "steam-key",
        "name": "Elden Ring（Steam Key）",
        "spec": "标准版/欧区",
        "price": 43.73,
        "currency": "GBP",
        "buy_url": "https://www.mmoga.com/Steam-Games/Elden-Ring.html?ref=59257&Partner=thebadbeard",
        "stock": true,
        "pverified": "2026-10-13"
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
    "verified": "2026-10-13",
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
        "pverified": "2026-10-11"
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
    "verified": "2026-10-13",
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
        "pverified": "2026-10-11"
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
    "verified": "2026-10-13",
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
        "pverified": "2026-10-13"
      },
      {
        "pid": "gpt-account",
        "name": "ChatGPT账号",
        "spec": "成品号（Free版）",
        "price": 48.8,
        "currency": "CNY",
        "buy_url": "https://www.accountboy.com/zh-cn-cny/buy-chatai",
        "stock": true,
        "pverified": "2026-10-13"
      },
      {
        "pid": "gpt-plus",
        "name": "ChatGPT Plus",
        "spec": "独享会员账号/月",
        "price": 198,
        "currency": "CNY",
        "buy_url": "https://www.accountboy.com/zh-cn-cny/buy-chatai",
        "stock": true,
        "pverified": "2026-10-13"
      },
      {
        "pid": "claude",
        "name": "Claude Pro",
        "spec": "直充/月（188起，Max规格至1880）",
        "price": 188,
        "currency": "CNY",
        "buy_url": "https://www.accountboy.com/zh-cn-cny/buy-claude",
        "stock": true,
        "pverified": "2026-10-13"
      },
      {
        "pid": "midjourney",
        "name": "Midjourney（30 Standard高级版）独享会员账号",
        "spec": "独享/月",
        "price": 299,
        "currency": "CNY",
        "buy_url": "https://www.accountboy.com/zh-cn-cny/buy-midjourney",
        "stock": true,
        "pverified": "2026-10-13"
      },
      {
        "pid": "netflix",
        "name": "奈飞Netflix 30天会员（Premium）",
        "spec": "共享/30天（页面注明实际有效期26天）",
        "price": 39.8,
        "currency": "CNY",
        "buy_url": "https://www.accountboy.com/zh-cn-cny/buy-Netflix",
        "stock": true,
        "pverified": "2026-10-13"
      },
      {
        "pid": "spotify",
        "name": "Spotify",
        "spec": "会员账号/12个月",
        "price": 299,
        "currency": "CNY",
        "buy_url": "https://www.accountboy.com/zh-cn-cny/buy-Spotify",
        "stock": true,
        "pverified": "2026-10-13"
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
    "verified": "2026-10-13",
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
        "pverified": "2026-10-13"
      },
      {
        "pid": "spotify",
        "name": "Spotify",
        "spec": "合租/月",
        "price": 3.17,
        "currency": "USD",
        "buy_url": "https://www.gamsgo.com/",
        "stock": true,
        "pverified": "2026-10-13"
      },
      {
        "pid": "netflix",
        "name": "Netflix",
        "spec": "合租起/月",
        "price": 3.49,
        "currency": "USD",
        "buy_url": "https://www.gamsgo.com/accounts/netflix",
        "stock": true,
        "pverified": "2026-10-13"
      },
      {
        "pid": "midjourney",
        "name": "Midjourney Standard",
        "spec": "共享/1个月（4.9分卖家款$13）",
        "price": 13.0,
        "currency": "USD",
        "buy_url": "https://www.gamsgo.com/accounts/midjourney",
        "stock": true,
        "pverified": "2026-10-13"
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
    "verified": "2026-10-13",
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
        "pverified": "2026-10-11"
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
    "verified": "2026-10-13",
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
        "pverified": "2026-10-11"
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
    "verified": "2026-10-13",
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
        "pverified": "2026-10-11"
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
    "verified": "2026-10-13",
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
        "pverified": "2026-10-11"
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
    "verified": "2026-10-13",
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
        "pverified": "2026-10-13"
      },
      {
        "pid": "claude",
        "name": "Claude Pro 月卡｜iOS 充值卡",
        "spec": "iOS充值卡/月",
        "price": 189,
        "currency": "CNY",
        "buy_url": "https://tangguo.app/store/business",
        "stock": true,
        "pverified": "2026-10-13"
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
    "verified": "2026-10-13",
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
        "pverified": "2026-10-13"
      },
      {
        "pid": "claude",
        "name": "Claude Pro/Max",
        "spec": "人工代充起/月",
        "price": 178,
        "currency": "CNY",
        "buy_url": "https://www.huiai.shop/",
        "stock": true,
        "pverified": "2026-10-13"
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
    "verified": "2026-10-13",
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
    "verified": "2026-10-13",
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
    "verified": "2026-10-13",
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
    "verified": "2026-10-13",
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
    "verified": "2026-10-13",
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
    "verified": "2026-10-13",
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
    "verified": "2026-10-13",
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
    "verified": "2026-10-13",
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
    "verified": "2026-10-13",
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
    "verified": "2026-10-13",
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
    "verified": "2026-10-13",
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
    "verified": "2026-10-13",
    "status": "ok",
    "down_days": 0
  },
  {
    "name": "环球巴士",
    "url": "https://universalbus.cn",
    "category": "ai-account",
    "desc": "流媒体账号合租平台（\"奈飞站\"：Netflix/Spotify/YouTube/Disney+ 等），宣称自动化交付、售后无忧。",
    "score": 20,
    "signals": [
      "HTTPS 有效",
      "官网宣称自动化交付与售后保障"
    ],
    "risks": [
      "成立年份不明",
      "无第三方独立口碑",
      "无 ICP 备案公示",
      "账号合租模式违反流媒体官方 ToS，存在封号风险"
    ],
    "verified": "2026-10-13",
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
      "该站无 Claude 订阅代充商品，仅有 Muse 成品号"
    ],
    "verified": "2026-10-13",
    "products": [
      {
        "pid": "gpt-plus",
        "name": "ChatGPT-Plus官方充值-自助卡密充值-菲区",
        "spec": "官方充值·自助卡密充值·菲区",
        "price": 155.4,
        "currency": "CNY",
        "buy_url": "https://willam.ka8.ai/products/ChatGPT-Plus",
        "stock": true,
        "pverified": "2026-10-13"
      },
      {
        "pid": "gpt-pro",
        "name": "ChatGPT-Pro 100官方充值-自助卡密充值-智利区",
        "spec": "官方充值·自助卡密充值·智利区",
        "price": 882,
        "currency": "CNY",
        "buy_url": "https://willam.ka8.ai/products/ChatGPT-Pro-5x",
        "stock": true,
        "pverified": "2026-10-13"
      },
      {
        "pid": "gpt-pro",
        "name": "ChatGPT-Pro 200官方充值-自助卡密充值-菲区",
        "spec": "官方充值·自助卡密充值·菲区",
        "price": 1313,
        "currency": "CNY",
        "buy_url": "https://willam.ka8.ai/products/ChatGPT-Pro-20x",
        "stock": false,
        "pverified": "2026-10-13"
      },
      {
        "pid": "gpt-pro",
        "name": "ChatGPT-Pro 500官方充值-自助卡密充值-智利区",
        "spec": "官方充值·自助卡密充值·智利区",
        "price": 3065,
        "currency": "CNY",
        "buy_url": "https://willam.ka8.ai/products/ChatGPT-Pro-50x",
        "stock": true,
        "pverified": "2026-10-13"
      },
      {
        "pid": "gemini-pro",
        "name": "Jio · Gemini Pro 18个月｜官方活动·直充自己账号",
        "spec": "官方活动·直充自己账号·18个月",
        "price": 8.4,
        "currency": "CNY",
        "buy_url": "https://willam.ka8.ai/products/gemini-pro-18m",
        "stock": false,
        "pverified": "2026-10-12"
      },
      {
        "pid": "claude",
        "name": "Muse 成品号（微软邮箱·验证码登录）",
        "spec": "微软邮箱·验证码登录",
        "price": 7.8,
        "currency": "CNY",
        "buy_url": "https://willam.ka8.ai/products/muse-account",
        "stock": true,
        "pverified": "2026-10-13"
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
    "verified": "2026-10-13",
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
      "无客服与退款政策公示"
    ],
    "verified": "2026-10-13",
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
    "verified": "2026-10-13",
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
    "verified": "2026-10-13",
    "products": [
      {
        "pid": "gpt-plus",
        "name": "ChatGPT Plus 充值",
        "spec": "每月·续费制",
        "price": 179,
        "currency": "CNY",
        "buy_url": "https://getgpt.pro/purchase",
        "stock": true,
        "pverified": "2026-10-11"
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
    "verified": "2026-10-13",
    "products": [
      {
        "pid": "gpt-plus",
        "name": "ChatGPT Plus",
        "spec": "账号续费·1个月",
        "price": 179,
        "currency": "CNY",
        "buy_url": "https://payai.plus/chatgpt?product=chatgpt-plus",
        "stock": true,
        "pverified": "2026-10-13"
      },
      {
        "pid": "claude",
        "name": "Claude Pro 充值",
        "spec": "账号续费·1个月",
        "price": 189,
        "currency": "CNY",
        "buy_url": "https://payai.plus/claude",
        "stock": true,
        "pverified": "2026-10-13"
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
    "verified": "2026-10-13",
    "products": [
      {
        "pid": "gpt-plus",
        "name": "ChatGPT Plus",
        "spec": "原账号升级 Plus·按月充值",
        "price": 169,
        "currency": "CNY",
        "buy_url": "https://plusgo.pro/purchase?sku=plus",
        "stock": true,
        "pverified": "2026-10-11"
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
    "verified": "2026-10-13",
    "products": [
      {
        "pid": "gpt-plus",
        "name": "ChatGPT Plus 充值",
        "spec": "165元起·微信支付宝开通",
        "price": 165,
        "currency": "CNY",
        "buy_url": "https://qfcc99.com/shop/panghu",
        "stock": true,
        "pverified": "2026-10-11"
      },
      {
        "pid": "claude",
        "name": "Claude Pro 充值",
        "spec": "185元/月",
        "price": 185,
        "currency": "CNY",
        "buy_url": "https://qfcc99.com/shop/panghu",
        "stock": true,
        "pverified": "2026-10-11"
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
    "verified": "2026-10-13",
    "products": [
      {
        "pid": "gpt-plus",
        "name": "ChatGPT Plus",
        "spec": "自有账号充值·官方订阅同等权益",
        "price": 199,
        "currency": "CNY",
        "buy_url": "https://www.payforchat.com/plans",
        "stock": true,
        "pverified": "2026-10-13"
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
    "verified": "2026-10-13",
    "products": [
      {
        "pid": "gpt-plus",
        "name": "ChatGPT Plus",
        "spec": "165元起·按阶梯时长定价",
        "price": 165,
        "currency": "CNY",
        "buy_url": "https://xingqiaosub.com/services/chatgpt-plus",
        "stock": true,
        "pverified": "2026-10-13"
      },
      {
        "pid": "claude",
        "name": "Claude Pro",
        "spec": "185元起·按阶梯时长定价",
        "price": 185,
        "currency": "CNY",
        "buy_url": "https://xingqiaosub.com/services/claude-pro",
        "stock": true,
        "pverified": "2026-10-13"
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
    "verified": "2026-10-13",
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
    "verified": "2026-10-13",
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
    "verified": "2026-10-13",
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
    "verified": "2026-10-13",
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
    "verified": "2026-10-13",
    "products": [
      {
        "pid": "gpt-plus",
        "name": "ChatGPT Plus 月卡｜菲区官方正规卡充",
        "spec": "月卡·菲区官方正规卡充",
        "price": 125,
        "currency": "CNY",
        "buy_url": "https://ai-airdrop.com/products/chatgpt-plus-two",
        "stock": true,
        "pverified": "2026-10-13"
      },
      {
        "pid": "gpt-plus",
        "name": "ChatGPT Plus 月卡｜iOS 官方正规充值",
        "spec": "月卡·iOS官方正规充值",
        "price": 150,
        "currency": "CNY",
        "buy_url": "https://ai-airdrop.com/products/4",
        "stock": true,
        "pverified": "2026-10-13"
      },
      {
        "pid": "claude",
        "name": "Claude Pro 月卡｜IOS官方正规充值",
        "spec": "月卡·IOS官方正规充值",
        "price": 159,
        "currency": "CNY",
        "buy_url": "https://ai-airdrop.com/products/Claudeproka",
        "stock": true,
        "pverified": "2026-10-13"
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
    "verified": "2026-10-13",
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
    "verified": "2026-10-13",
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
    "verified": "2026-10-13",
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
    "verified": "2026-10-13",
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
    "verified": "2026-10-13",
    "products": [],
    "status": "ok",
    "down_days": 0
  },
  {
    "name": "Tibo AI",
    "url": "https://gptibo.com",
    "category": "ai-account",
    "desc": "Threads 中文卖家直链的 AI 订阅小店，主营 ChatGPT Plus/Pro、Gemini、Duolingo、X Premium 代充与 Gmail 账号，人民币明码标价。",
    "score": 30,
    "signals": [
      "HTTPS 有效",
      "人民币明码标价（Plus ¥169/月起）",
      "微信客服（社媒帖子披露）",
      "社媒宣称带质保"
    ],
    "risks": [
      "个人小店，运营时长/备案未知",
      "支付方式未公示",
      "质保承诺仅见于社媒帖子"
    ],
    "verified": "2026-10-13",
    "products": [
      {
        "pid": "gpt-plus",
        "name": "ChatGPT Plus",
        "spec": "日常之选·自有账号充值·月",
        "price": 169,
        "currency": "CNY",
        "buy_url": "https://gptibo.com/product/chatgpt",
        "stock": false,
        "pverified": "2026-10-13"
      }
    ],
    "status": "ok",
    "down_days": 0
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
    "verified": "2026-10-13",
    "products": [
      {
        "pid": "gpt-plus",
        "name": "ChatGPT Plus",
        "spec": "月付·135元/月·人工充值",
        "price": 135,
        "currency": "CNY",
        "buy_url": "https://12gpt.com/",
        "stock": true,
        "pverified": "2026-10-13"
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
    "verified": "2026-10-13",
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
    "verified": "2026-10-13",
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
    "verified": "2026-10-13",
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
    "verified": "2026-10-13",
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
    "verified": "2026-10-13",
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
    "verified": "2026-10-13",
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
    "verified": "2026-10-13",
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
    "verified": "2026-10-13",
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
    "verified": "2026-10-13",
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
    "verified": "2026-10-13",
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
    "verified": "2026-10-13",
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
    "verified": "2026-10-13",
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
    "verified": "2026-10-13",
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
        "pverified": "2026-10-12"
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
    "verified": "2026-10-13",
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
    "verified": "2026-10-13",
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
    "verified": "2026-10-13",
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
    "verified": "2026-10-13",
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
    "verified": "2026-10-13",
    "status": "ok",
    "down_days": 0,
    "products": [
      {
        "pid": "gpt-plus",
        "name": "ChatGPT Plus 独享账号 3个月",
        "spec": "独享/自动发货",
        "price": 23.99,
        "currency": "USD",
        "buy_url": "https://digitallicense.net/product/chatgpt-plus-3-months",
        "stock": true,
        "pverified": "2026-10-13"
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
    "verified": "2026-10-13",
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
    "verified": "2026-10-13",
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
    "verified": "2026-10-13",
    "status": "ok",
    "down_days": 0
  }
];
