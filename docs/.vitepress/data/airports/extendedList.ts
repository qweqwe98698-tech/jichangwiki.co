import type { AirportItem } from './types'

export const extendedListAirports: AirportItem[] = [
  {
    id: 'kuaili',
    rank: 29,
    tier: 'extended',
    name: '快狸',
    tagline: '2023 年运营现役 · ¥25 纯月付 150GB · 附 08-11 19:52 VLESS 9Gbps 50节点实测图',
    affUrl: 'https://guangs.kuailicloud.cc/#/register?code=AiqyM8oG',
    couponCode: 'kkk2222',
    discountText: '优惠码专属立减',
    rating: 4.8,
    startingPrice: 25,
    priceNote: '纯月付 ¥25/月（150GB/月），2023 年运营稳态大包',
    monthlyPay: true,
    payAsYouGo: false,
    networkType: 'IEPL',
    protocols: ['VLESS', 'Shadowsocks'],
    clientSupport: '自研+第三方',
    scenarios: ['08-11晚间VLESS实测图', '25元150G大流量', '2023运营稳妥'],
    features: [
      '2023 年上线，专攻 ¥25/月 · 150GB IEPL 专线 + 双端兼容均衡定位',
      '实附 2026-08-11 19:52:22 CST 准晚高峰珠海联通 9Gbps 50 节点 VLESS 原图（HK 15节点 avg 505~550MB/s）'
    ],
    pros: [
      '经核验拥有的 08-11 19:52 PNG 实为真图本尊，50 节点全绿测出香港 505~550MB/s、新加坡 205~419MB/s（除新加坡08 9.6KB外极稳）',
      '运营年份跨越 3 年以上且兼顾自研与第三方开源客户端'
    ],
    cons: [
      '未进入新版 42 家手写前十名单（归入扩展现役库）；缺失 100 元以下轻量年付小包',
      '新加坡08节点实测图出现 9.60KB 与部分 Unknown UDP，使用需配合 url-test 测速避开'
    ],
    speedRating: 'S',
    recommendedBadge: '含 08-11 19:52 VLESS 原图',
    reviewUrl: '/reviews/kuaili',
    badgeColor: 'cyan',
    trafficStarting: '150GB / 月',
    establishedYear: '2023',
    paymentMethods: ['支付宝', '微信', 'USDT'],
    speedtestImage: '/images/speedtest/kuaili.png',
    testedAt: '2026-08-11 19:52:22',
    testToolEnv: '主端 4.3.3 (696) / 喵速 4.7.0 · 珠海联通 9Gbps · 50/50 VLESS',
    plans: [
      { name: '快狸 · 150GB 标准月付', cycle: '月付', price: '¥25', traffic: '150GB/月' }
    ],
    dataStatus: 'measured'
  },
  {
    id: 'wgetcloud',
    rank: 30,
    tier: 'extended',
    name: 'WgetCloud (全球加速)',
    tagline: '历史老牌专线 · Trojan 协议 · 2026-05-02 59节点全数非零实测（季度¥297起）',
    affUrl: 'https://invite.wgetcloud.ltd/auth/register?code=VLG2xb',
    rating: 4.7,
    startingPrice: 99,
    priceNote: '基础专线季付 ¥297/季（折合 ¥99/月 · 230GB/月）· 无低价纯月付门槛',
    monthlyPay: false,
    payAsYouGo: false,
    networkType: 'IPLC',
    protocols: ['Trojan'],
    clientSupport: '仅第三方订阅',
    scenarios: ['高精度稳定办公', '15+国家地区覆盖', '05-02 59节点全非零历史实测'],
    features: [
      '采用 Trojan 协议，覆盖港/台/新/日/美/韩/澳/加/英/巴西等 15+ 地区（具体实时池待复核）',
      '2026-05-02 历史 59 节点测试中全部 59 个节点取得非零速度：五大热点平均均超 400Mbps（日本 462M、美国 440M、香港 431M）'
    ],
    pros: [
      '历史多区域均值极为扎实（美国 9 节点即使 170ms TLS 延迟仍跑出 440Mbps 均速），高端外贸工作环境适应性强',
      '亚太近端 TLS 延迟亮眼：香港 25.9ms、台湾 41.3ms、新加坡 55.6ms'
    ],
    cons: [
      '起步就是 ¥297 季付（230GB/月），总支出远高于常规 15~25 元/月亲民机场',
      '当前价格、优惠码与最新在网可用性均标记「历史项目记录（2026-08 更新）/ 待核实」'
    ],
    speedRating: 'S',
    recommendedBadge: '高端季付 · 59节点零失败历史',
    reviewUrl: '/reviews/wgetcloud',
    badgeColor: 'purple',
    trafficStarting: '230GB/月 (季付 ¥297起)',
    establishedYear: '2021',
    paymentMethods: ['支付宝', 'USDT'],
    plans: [
      { name: '基础专线服务', cycle: '季付', price: '¥297', traffic: '230GB/月', note: '历史旧数据口径 · 未应用折扣' },
      { name: '优质专线服务', cycle: '季付', price: '¥327', traffic: '250GB/月' },
      { name: '精品专线服务', cycle: '季付', price: '¥357', traffic: '270GB/月' }
    ],
    benchmarks: [
      { region: '日本', latency: '69.4ms', download: '462.04Mbps', dateNote: '2026-05-02 历史多节点统计' },
      { region: '美国', latency: '170.2ms', download: '440.04Mbps', dateNote: '2026-05-02 历史多节点统计' },
      { region: '香港', latency: '25.9ms', download: '431.24Mbps', dateNote: '2026-05-02 历史多节点统计' },
      { region: '新加坡', latency: '55.6ms', download: '422.97Mbps', dateNote: '2026-05-02 历史多节点统计' },
      { region: '台湾', latency: '41.3ms', download: '407.66Mbps', dateNote: '2026-05-02 历史多节点统计' }
    ],
    benchmarkDisclaimer: '数据系 2026-05-02 59 节点区域平均统计历史记录（非 10 月新测亦非实时状态保证）。',
    unlockSummary: {
      supported: [],
      nodeDependent: ['OpenAI / ChatGPT (05-02部分节点可用)', 'Gemini (部分)', 'Disney+ / Netflix / YouTube (部分)']
    },
    dataStatus: 'historical'
  },
  {
    id: 'baiyueguang',
    rank: 31,
    tier: 'extended',
    name: '白月光',
    tagline: '季付 ¥66(100GB/月)起 · SS协议 · 07-17 实测覆盖 108 节点 / 79 地区极冷门地区库',
    affUrl: 'https://sibker.com/register?invite_code=gg6puAId',
    rating: 4.5,
    startingPrice: 22,
    priceNote: '小包季付 ¥66/季（折合 ¥22/月 · 100GB/月），无纯单月月付记录',
    monthlyPay: false,
    payAsYouGo: false,
    networkType: 'BGP中转',
    protocols: ['Shadowsocks'],
    clientSupport: '仅第三方订阅',
    scenarios: ['冷门多国家IP需求(79地区)', '东南亚/南亚小国', '季度灵活试用'],
    features: [
      '节点名称横跨极罕见的 79 个国家与地区（含越南、柬埔寨、孟加拉、尼泊尔、印度、马来等）',
      '2026-07-17 历史实测覆盖 108 节点：香港 10 节点全部非零（114.94Mbps），马来/泰国表现亮眼'
    ],
    pros: [
      '小众全球 IP 落地收集者的稀有选择；季付 ¥66 元入门一次性付出不算太高，适合特定冷门地区业务测试',
      '07-17 历史测试 ChatGPT、Netflix、B站、Disney+、TVB 等均有部分节点解锁记录'
    ],
    cons: [
      '平均速度明显低于 IEPL 一梯队（港线 114.94Mbps / 延迟 160.7ms；台湾 07-17 测试仅 0.03Mbps；Spotify 失败）',
      '目前缺乏最新优惠码、运营近况与实时月付档位确认'
    ],
    speedRating: 'A',
    recommendedBadge: '79国冷门节点池',
    reviewUrl: '/reviews/baiyueguang',
    badgeColor: 'amber',
    trafficStarting: '100GB/月 (季付 ¥66 起)',
    establishedYear: '历史记录',
    paymentMethods: ['支付宝', 'USDT'],
    plans: [
      { name: '小包', cycle: '季付', price: '¥66', traffic: '每月 100GB' },
      { name: '中包', cycle: '季付', price: '¥126', traffic: '每月 250GB' },
      { name: '大包', cycle: '季付', price: '¥156', traffic: '每月 400GB' },
      { name: '超大包', cycle: '季付', price: '¥216', traffic: '每月 750GB' },
      { name: '不差钱', cycle: '季付', price: '¥231', traffic: '每月 900GB' },
      { name: '旗舰包', cycle: '年付', price: '¥2500', traffic: '每月 2500GB' }
    ],
    benchmarks: [
      { region: '香港', latency: '160.7ms', download: '114.94Mbps', dateNote: '2026-07-17 历史多节点统计' },
      { region: '新加坡', latency: '186.8ms', download: '85.22Mbps', dateNote: '2026-07-17 历史多节点统计' },
      { region: '日本', latency: '202.4ms', download: '77.65Mbps', dateNote: '2026-07-17 历史多节点统计' },
      { region: '美国', latency: '302.6ms', download: '70.53Mbps', dateNote: '2026-07-17 历史多节点统计' },
      { region: '台湾', latency: '—', download: '0.03Mbps', dateNote: '2026-07-17 异常记录保留' }
    ],
    benchmarkDisclaimer: '以上系 2026-07-17 历史统计记录（台湾几乎不可用、Spotify 测试失败），不代表近期现状。',
    unlockSummary: {
      supported: [],
      nodeDependent: ['ChatGPT/Netflix/YT/D+/HBO/TikTok/Bilibili/TVBAnywhere (07-17部分节点可用)'],
      failed: ['Spotify (07-17 测试失败)']
    },
    dataStatus: 'historical'
  },
  {
    id: 'flyingbird',
    rank: 32,
    tier: 'extended',
    name: 'FlyingBird (飞鸟)',
    tagline: 'IPLC 全专线老牌衍生 · SS 无倍率不限速 · 青铜月付 ¥15(100GB)起 · 暂无独立入口',
    couponCode: 'theo',
    altCouponCode: 'year85',
    discountText: '9 折码 theo（每户1次）/ 年付85折 year85（5次）',
    rating: 4.7,
    startingPrice: 15,
    priceNote: '青铜纯月付 ¥15/月（100GB/月 · 年付折合 ¥12/月）· 暂无独立推广入口留存',
    monthlyPay: true,
    payAsYouGo: false,
    networkType: 'IPLC',
    protocols: ['Shadowsocks'],
    clientSupport: '仅第三方订阅',
    scenarios: ['老牌站群体系(一云梯系)', 'SS IPLC 无倍率', '15元档纯月付'],
    features: [
      '老牌一云梯/飞鸟同源站群衍生核心品牌之一，全专线 IPLC + SS + 无倍率不限速',
      '青铜(100G) / 白银(200G) / 黄金(500G) / 钻石(1000G) 月至年付多周期完备'
    ],
    pros: [
      '资费结构与折扣周期清晰（季9/半85/年8折及优惠码叠加），月付 ¥15 门槛适中'
    ],
    cons: [
      '清单中当前标明「未提供独立品牌入口 / 待核实」，且无微信支付，缺逐地区实测表与 AI 解锁实证',
      '属于历史资料收录档案，购买前须核验最新域名真实性以防钓鱼'
    ],
    speedRating: '待测',
    recommendedBadge: '老牌IPLC系 · 待补入口',
    reviewUrl: '/reviews/flyingbird',
    badgeColor: 'amber',
    trafficStarting: '100GB / 月 (¥15 起)',
    establishedYear: '2022',
    paymentMethods: ['支付宝', 'USDT'],
    plans: [
      { name: '青铜套餐', cycle: '月付 / 年付', price: '¥15/月 (年¥144)', traffic: '100GB/月' },
      { name: '白银套餐', cycle: '月付 / 年付', price: '¥30/月 (年¥288)', traffic: '200GB/月' },
      { name: '黄金套餐', cycle: '月付 / 年付', price: '¥75/月 (年¥720)', traffic: '500GB/月' },
      { name: '钻石套餐', cycle: '月付 / 年付', price: '¥150/月 (年¥1440)', traffic: '1000GB/月' }
    ],
    dataStatus: 'historical',
    vendorNote: '清单中「未提供独立品牌入口」且缺乏近30日测速与独立流媒体验证，仅作客观资料整理展示。'
  },
  {
    id: 'cyberguard',
    rank: 33,
    tier: 'extended',
    name: 'CyberGuard',
    tagline: '半年轻量 ¥95 / 月付 ¥32(350GB) · Trojan/VLESS · 含 2025-06-21 12地区实测表',
    affUrl: 'https://cyberguard.best/#/register?code=AxXNNYng',
    rating: 4.6,
    startingPrice: 15.83,
    priceNote: '半年付轻量 ¥95（约 ¥15.83/月 · 150GB/月）；标准纯月付 ¥32/月（350GB/月）；一次性包 ¥79 起',
    monthlyPay: true,
    payAsYouGo: true,
    networkType: '混合专线',
    protocols: ['Trojan', 'VLESS'],
    clientSupport: '仅第三方订阅',
    scenarios: ['350GB中大月付', '欧洲/中东冷门地区', '不限时220/840G包'],
    features: [
      '2025-06-21 历史测速覆盖 12 地区 29 节点（日/美/澳/韩/德/法/阿联酋等）',
      '同时配置两档一次性不限时包（220GB ¥79 / 840GB ¥188）与月付 350G/650G/2050G'
    ],
    pros: [
      '单月 350GB 起步配额大（¥32/月），且 2025-06 历史测试录得日本 488Mbps、法/德/阿联酋跨洲高速及 AI/流媒体全绿样本',
      '不限时 220GB(¥79) 与 840GB(¥188) 折算单价比同类更具弹性'
    ],
    cons: [
      '测速统计记录停留在 2025-06-21（韩国虽跑出高下载但统计延迟录得 6000ms 异常值），时效性已偏旧',
      '缺失优惠码与近期运维变动情况确认'
    ],
    speedRating: 'A+',
    recommendedBadge: '12国区域 + 大额按量包',
    reviewUrl: '/reviews/cyberguard',
    badgeColor: 'purple',
    trafficStarting: '150GB/月(半年) / 350GB/月(月付)',
    establishedYear: '2024',
    paymentMethods: ['支付宝', 'USDT'],
    plans: [
      { name: '150G｜轻量套餐', cycle: '半年付', price: '¥95', traffic: '150GB/月', note: '折合 ¥15.83/月' },
      { name: '350G｜标准套餐', cycle: '月付', price: '¥32', traffic: '350GB/月' },
      { name: '650G｜高速套餐', cycle: '月付', price: '¥55', traffic: '650GB/月' },
      { name: '2050G｜企业套餐', cycle: '月付', price: '¥200', traffic: '2050GB/月' },
      { name: '不限时流量包', cycle: '一次性', price: '¥79 / ¥188', traffic: '220GB / 840GB' }
    ],
    benchmarks: [
      { region: '日本', latency: '123.8ms', download: '488.83Mbps', dateNote: '2025-06-21 历史记录' },
      { region: '阿联酋', latency: '345ms', download: '342.76Mbps', dateNote: '2025-06-21 历史记录' },
      { region: '澳大利亚', latency: '277ms', download: '279.64Mbps', dateNote: '2025-06-21 历史记录' },
      { region: '美国', latency: '614ms', download: '245.6Mbps', dateNote: '2025-06-21 历史记录' },
      { region: '法 / 德', latency: '384~390ms', download: '160~204Mbps', dateNote: '2025-06-21 历史记录' },
      { region: '韩国', latency: '6000ms(异常)', download: '552.8Mbps', dateNote: '2025-06-21 历史异常保留' }
    ],
    unlockSummary: {
      supported: ['ChatGPT', 'Claude', 'Gemini', 'Netflix', 'Disney+', 'Max/HBO', 'TikTok (以上为 2025-06-21 当次测试)'],
      nodeDependent: ['近况可用性尚待更新测试确认']
    },
    dataStatus: 'historical'
  },
  {
    id: 'longmaoyun',
    rank: 34,
    tier: 'extended',
    name: '龙猫云',
    tagline: 'SS + IPLC 全专线 · VIP1 月付 ¥15(100GB)起 · 同源站群老牌体系 · 暂无独立入口',
    rating: 4.6,
    startingPrice: 15,
    priceNote: 'VIP1 月付 ¥15/月（100GB/月 · 3年长折合仅约48折）· 暂无独立品牌入口',
    monthlyPay: true,
    payAsYouGo: false,
    networkType: 'IPLC',
    protocols: ['Shadowsocks'],
    clientSupport: '仅第三方订阅',
    scenarios: ['SS + IPLC 基础档', '15元月付100G', '完善文档教程体系'],
    features: [
      '已核实属一云梯/飞鸟同源站群成员之一，定位于 Shadowsocks + IPLC 全专线（资料标最高 2000Mbps）',
      'VIP1~VIP4 套餐支持月付到 3 年付（季9/半85/年8/2年7/3年6折），支持支付宝/微信/USDT'
    ],
    pros: [
      '套餐价目对 ¥15(100G) / ¥30(200G) 阶梯划定清楚，原资料附带较齐全入门教程'
    ],
    cons: [
      '暂未提供独立官网注册链接，亦缺少优惠码及近 30 日实测、AI/流媒体分项验证记录',
      '提示同类衍生站群高度相似，选型时避免与同系多站同时充值分散冗余失败'
    ],
    speedRating: '待测',
    recommendedBadge: '同源站群 · 缺入口待测',
    reviewUrl: '/reviews/longmaoyun',
    badgeColor: 'amber',
    trafficStarting: '100GB / 月 (VIP1 ¥15 起)',
    establishedYear: '历史记录',
    paymentMethods: ['支付宝', '微信', 'USDT'],
    plans: [
      { name: 'VIP1', cycle: '月付 / 年付', price: '¥15/月 (年¥144)', traffic: '100GB/月' },
      { name: 'VIP2', cycle: '月付 / 年付', price: '¥30/月 (年¥288)', traffic: '200GB/月' },
      { name: 'VIP3', cycle: '月付 / 年付', price: '¥60/月 (年¥576)', traffic: '400GB/月' },
      { name: 'VIP4', cycle: '月付 / 年付', price: '¥120/月 (年¥1152)', traffic: '1000GB/月' }
    ],
    dataStatus: 'historical',
    vendorNote: '清单标注未提供独立品牌入口，缺逐地区实测与流媒体验证记录。'
  },
  {
    id: 'fatcat',
    rank: 35,
    tier: 'extended',
    name: 'FATCAT (肥猫云)',
    tagline: '企业级 IEPL/IPLC 内网专线 · 年付加强 ¥96(60G) / 基础月付 ¥20(120G) · 暂无入口',
    rating: 4.6,
    startingPrice: 8,
    priceNote: '年付加强版 ¥96/年（¥8/月 · 60GB/月）；基础纯月付 ¥20/月（120GB/月）',
    monthlyPay: true,
    payAsYouGo: false,
    networkType: 'IEPL',
    protocols: ['Shadowsocks (历史记录待详核)'],
    clientSupport: '待核实',
    scenarios: ['抗封锁企业内网', '年付加强96元', '重度1.5T月付档'],
    features: [
      '主打企业级 IEPL / IPLC 内网专线与抗干扰抗封锁定位',
      '拥有年付加强版（¥96/年 60GB）与基础/标准/旗舰/企业月付 120G~1500G 全周期档'
    ],
    pros: [
      '涵盖低价年付小包与高额 1500G 企业大包，支持支付宝、微信与 USDT'
    ],
    cons: [
      '清单无独立推广/官方入口网址、无公开优惠码、且未附带地区实测和流媒体解锁记录',
      '名称上容易被误搜索为 TOP 3「飞猫云」，撰写正文明确区隔免混淆'
    ],
    speedRating: '待测',
    recommendedBadge: '历史记录 · 注意区分飞猫云',
    reviewUrl: '/reviews/fatcat',
    badgeColor: 'amber',
    trafficStarting: '60GB/月(年付) / 120GB/月(月付)',
    establishedYear: '历史记录',
    paymentMethods: ['支付宝', '微信', 'USDT'],
    plans: [
      { name: '年付加强版', cycle: '年付', price: '¥96', traffic: '60GB/月', note: '折合 ¥8/月' },
      { name: '基础套餐', cycle: '月付 / 年付', price: '¥20/月 (年¥192)', traffic: '120GB/月' },
      { name: '标准套餐', cycle: '月付 / 年付', price: '¥40/月 (年¥384)', traffic: '300GB/月' },
      { name: '旗舰套餐', cycle: '月付 / 年付', price: '¥100/月 (年¥960)', traffic: '700GB/月' },
      { name: '企业套餐', cycle: '月付 / 年付', price: '¥180/月 (年¥1728)', traffic: '1500GB/月' }
    ],
    dataStatus: 'historical',
    vendorNote: '与榜前「飞猫云 (FlyCat)」属完全不同服务商；目前缺官网入口及独立测速证据。'
  },
  {
    id: 'tntcloud',
    rank: 36,
    tier: 'extended',
    name: 'TNTCloud',
    tagline: '原 3A 加速器分站团队 · IPLC 内网专线 + 季付限量包 ¥30 · 优惠码 TNT85',
    couponCode: 'TNT85',
    discountText: '85 折优惠码 TNT85（轻量限量包不支持）',
    rating: 4.6,
    startingPrice: 8.17,
    priceNote: '轻量包季付 ¥30/季（¥10/月）或年付 ¥98/年（¥8.17/月 · 60GB/月）；VIP1 月付 ¥20(110GB)',
    monthlyPay: true,
    payAsYouGo: false,
    networkType: 'IPLC',
    protocols: ['Shadowsocks (老牌系待复核)'],
    clientSupport: '待核实',
    scenarios: ['特色季付30元限量包', '跨境电商与TikTok定制', '2000Mbps资料定位'],
    features: [
      '老牌分站团队运营（曾用名 3A 加速器 / AAA Speed），IPLC 内网专线 2000Mbps 定位',
      '少有的「¥30/季」超短低成本轻量周期（适合季度高频出差/临时项目），并支持直播定制'
    ],
    pros: [
      '提供 ¥30 季付(60G/月) 等细颗粒轻度周期，并保留 TNT85 85折常规码'
    ],
    cons: [
      '当前档案未含可用独立官网入口，缺独立地区测速表与流媒体测试记录',
      '建议核实到最新官方域名并验证活跃状态后再下单'
    ],
    speedRating: '待测',
    recommendedBadge: '原3A加速器 · ¥30季付包',
    reviewUrl: '/reviews/tntcloud',
    badgeColor: 'amber',
    trafficStarting: '60GB/月 (季付 ¥30 起)',
    establishedYear: '历史记录',
    paymentMethods: ['支付宝', '微信', 'USDT'],
    plans: [
      { name: '轻量包', cycle: '季付 / 年付', price: '¥30/季 · ¥56/半年 · ¥98/年', traffic: '60GB/月', note: '不适用 TNT85 优惠码' },
      { name: 'VIP1', cycle: '月付 / 年付', price: '¥20/月 (年¥192)', traffic: '110GB/月' },
      { name: 'VIP2', cycle: '月付 / 年付', price: '¥40/月 (年¥336)', traffic: '220GB/月' },
      { name: 'VIP3', cycle: '月付 / 年付', price: '¥80/月 (年¥768)', traffic: '460GB/月' },
      { name: 'VIP4', cycle: '月付 / 年付', price: '¥160/月 (年¥1536)', traffic: '1100GB/月' }
    ],
    dataStatus: 'historical',
    vendorNote: '无独立品牌入口记录与近期测速图表，仅保留历史方案参考。'
  },
  {
    id: 'qingyunti',
    rank: 37,
    tier: 'extended',
    name: '青云梯',
    tagline: '6 年以上老牌团队（原 V4Speed）· SS + 企业 IPLC · 80+节点 · 优惠码 qyt85/qyt80',
    couponCode: 'qyt85',
    altCouponCode: 'qyt80',
    discountText: '85 折 qyt85 / 8 折 qyt80（年付小包不支持）',
    rating: 4.7,
    startingPrice: 8,
    priceNote: '年付小包 ¥96/年（¥8/月 · 60GB/月）；VIP1 月付 ¥25/月（150GB/月）',
    monthlyPay: true,
    payAsYouGo: false,
    networkType: 'IPLC',
    protocols: ['Shadowsocks'],
    clientSupport: '仅第三方订阅',
    scenarios: ['6年老牌历史沉淀', '80+节点/三网均衡', '企业专线定制'],
    features: [
      '老牌知名度较高（曾用名 V4Speed），运营历史 6 年以上，企业级 IPLC + 三网智能负载均衡',
      '现有资料记载涵盖 10+ 地区 80+ 节点及最高 6Gbps 带宽上限，兼营企业定制服务'
    ],
    pros: [
      '在长年运作口碑上具备老牌优势，长期两年 7 折 / 三年 6 折配合 8/85 折优惠码灵活性强'
    ],
    cons: [
      '本项目资料库未收录其独立官方入口网址，且尚未在本站进行独立抓包测速和逐项解锁验证',
      '市场上「青云梯」仿冒山寨域名较多，用户切记不可从未知搜索引擎广告随便进入'
    ],
    speedRating: '待测',
    recommendedBadge: '6年+老牌 · 防仿冒提示',
    reviewUrl: '/reviews/qingyunti',
    badgeColor: 'purple',
    trafficStarting: '60GB/月(年付) / 150GB/月(VIP1月付)',
    establishedYear: '2020',
    paymentMethods: ['支付宝', '微信', 'USDT'],
    plans: [
      { name: '年付小包', cycle: '年付', price: '¥96', traffic: '60GB/月', note: '不支持 qyt 优惠码' },
      { name: 'VIP1', cycle: '月付 / 年付', price: '¥25/月 (年¥240)', traffic: '150GB/月' },
      { name: 'VIP2', cycle: '月付 / 年付', price: '¥45/月 (年¥432)', traffic: '300GB/月' },
      { name: 'VIP3', cycle: '月付 / 年付', price: '¥85/月 (年¥816)', traffic: '600GB/月' },
      { name: 'VIP4', cycle: '月付 / 年付', price: '¥150/月 (年¥1360)', traffic: '1000GB/月' }
    ],
    dataStatus: 'historical',
    vendorNote: '清单中暂无独立入口且未独立实测；查找官网时务必警惕假冒青云梯钓鱼域名。'
  },
  {
    id: 'shanshuiyun',
    rank: 38,
    tier: 'extended',
    name: '山水云',
    tagline: '琴棋书画套餐 ¥15(100G)起 · 年付 64G 仅 ¥88 · 06-29 27节点实测美国 180M 突出',
    affUrl: 'https://sldm1.ssyylf.com/#/register?code=YD5iQ888',
    rating: 4.6,
    startingPrice: 7.33,
    priceNote: '64G轻量年付 ¥88/年（约 ¥7.33/月）；琴 ¥15/月（100GB）、棋 ¥25（200GB）、书 ¥50（500GB）',
    monthlyPay: true,
    payAsYouGo: false,
    networkType: '直连/待核实',
    protocols: ['待核实（历史记录尚未核实）'],
    clientSupport: '待核实',
    scenarios: ['美国线路相对突出(180M)', '年付¥88 64G轻量', '¥15 100G月付'],
    features: [
      '「琴/棋/书」纯月付 ¥15(100G)/¥25(200G)/¥50(500G) 梯度极清，64G 年付 ¥88 仅约 ¥7.33/月',
      '2026-06-29 历史实测 27 节点 12 地区中 22 节点非零：美国 3 节点平均 180.29Mbps 优于香港（152M）'
    ],
    pros: [
      '少见的美国地区均速高过近端香港的历史实测表现，适合看重美区服务与低月付门槛的读者',
      '历史 06-29 测试中 ChatGPT、Claude、Gemini、Netflix、Disney+、HBO、TikTok 均有可用记录'
    ],
    cons: [
      '亚太延迟偏高（06-29 香港延迟 151.4ms / 日本 229.8ms，疑偏公网直连或普通中转特征），协议尚待核实',
      '27 个测试节点中仅有 22 个跑出速度（5个零速失效），且缺乏优惠码记录'
    ],
    speedRating: 'A',
    recommendedBadge: '美区较稳 · 06-29实测史',
    reviewUrl: '/reviews/shanshuiyun',
    badgeColor: 'green',
    trafficStarting: '64GB/月(年付) / 100GB/月(琴月付)',
    establishedYear: '历史记录',
    paymentMethods: ['支付宝', 'USDT'],
    plans: [
      { name: '64G / 轻量套餐', cycle: '年付', price: '¥88', traffic: '64GB/月', note: '折合 ¥7.33/月' },
      { name: '128G / 轻量套餐', cycle: '半年付', price: '¥88', traffic: '128GB/月' },
      { name: '256G / 轻量套餐', cycle: '季付', price: '¥75', traffic: '256GB/月' },
      { name: '100G/月 - 琴', cycle: '月付', price: '¥15', traffic: '100GB/月' },
      { name: '200G/月 - 棋', cycle: '月付', price: '¥25', traffic: '200GB/月' },
      { name: '500G/月 - 书', cycle: '月付', price: '¥50', traffic: '500GB/月' }
    ],
    benchmarks: [
      { region: '美国', latency: '349.3ms', download: '180.29Mbps', dateNote: '2026-06-29 历史统计' },
      { region: '日本', latency: '229.8ms', download: '160.51Mbps', dateNote: '2026-06-29 历史统计' },
      { region: '香港', latency: '151.4ms', download: '152.86Mbps', dateNote: '2026-06-29 历史统计' },
      { region: '新加坡', latency: '179.8ms', download: '142.98Mbps', dateNote: '2026-06-29 历史统计' },
      { region: '越/泰/英', latency: '217~328ms', download: '65~88Mbps', dateNote: '2026-06-29 历史统计' }
    ],
    unlockSummary: {
      supported: ['ChatGPT', 'Claude', 'Gemini', 'Netflix', 'Disney+', 'Max/HBO', 'TikTok (以上为 2026-06-29 当次测试)'],
      nodeDependent: ['节点协议未明且5节点当次失败，建议月付先试']
    },
    dataStatus: 'historical'
  },
  {
    id: 'lingdongyun',
    rank: 39,
    tier: 'extended',
    name: '灵动云',
    tagline: '2025 年 IEPL/VLESS 专线 · 含 07-20/21 珠海9G 60节点真测摘要（OpenAI全区亮点）',
    affUrl: 'https://varnexa.lingdongaff.com/#/?code=wZvEhEoI',
    rating: 4.7,
    startingPrice: 8.25,
    priceNote: '穿云年付 ¥99/年（¥8.25/月 · 70GB/月）；拂风纯月付 ¥20/月（100GB/月）；不限时 ¥199 起',
    monthlyPay: true,
    payAsYouGo: true,
    networkType: 'IEPL',
    protocols: ['VLESS'],
    clientSupport: '仅第三方订阅',
    scenarios: ['OpenAI各区全解锁亮点', 'VLESS实测确认', '不限时闲云~飞云包'],
    features: [
      '2025 年开业专线，实测协议为 VLESS，不限速不限设备，覆盖 70G 年付、100G~1.5T 多期及单次包',
      '附 2026-07-20/21 站长珠海联通 9Gbps 60 测速 / 60 解锁完整摘要：OpenAI 基本全解锁'
    ],
    pros: [
      '如实记录高价值实地测评明细：20~80MB/s 够用速率 + OpenAI 各地区基本全解锁亮点，无吹水滤镜',
      '月/季/半年/1~3年及 150G/400G/800G 一次性包选项很全，适合偏好透明报告的用户'
    ],
    cons: [
      '07-20 实测一并暴露明显短板：HTTPS 延迟偏高、TikTok 多节点失败、新/台 YouTube 送中、美国01整节点失败、台湾落地被识别为欧洲 ES（西区）',
      '无可用优惠码核实；微信支付需经由客服处理'
    ],
    speedRating: 'A+',
    recommendedBadge: 'OpenAI亮眼 · 真实缺点曝光',
    reviewUrl: '/reviews/lingdongyun',
    badgeColor: 'cyan',
    trafficStarting: '70GB/月(穿云年付) / 100GB/月(拂风月付)',
    establishedYear: '2025',
    paymentMethods: ['支付宝', 'USDT'],
    plans: [
      { name: '灵动 · 穿云', cycle: '年付', price: '¥99', traffic: '70GB/月', note: '折合 ¥8.25/月' },
      { name: '灵动 · 拂风', cycle: '月付', price: '¥20', traffic: '100GB/月', note: '支持季~三年付至 ¥540/3年' },
      { name: '灵动 · 驭浪', cycle: '月付', price: '¥50', traffic: '300GB/月' },
      { name: '灵动 · 破晓', cycle: '月付', price: '¥100', traffic: '700GB/月' },
      { name: '灵动 · 凌霄', cycle: '月付', price: '¥180', traffic: '1.5TB/月' },
      { name: '闲云 / 惊云 / 飞云 (不限时)', cycle: '一次性', price: '¥199 / ¥499 / ¥899', traffic: '150G / 400G / 800G' }
    ],
    benchmarks: [
      { region: '全线综合 (60节点 · 珠海联通 9G)', latency: 'HTTPS 延迟偏高', download: '约 20~80 MB/s (≈160~640Mbps)', dateNote: '2026-07-20/21 站长实测摘要' }
    ],
    unlockSummary: {
      supported: ['OpenAI / ChatGPT (07-20 实测各地区基本全解锁)'],
      nodeDependent: ['台湾地区 NF/D+ 识别偏欧洲(ES)'],
      failed: ['TikTok 多节点失败', '新加坡/台湾 YouTube 送中', '美国01 整节点失败']
    },
    dataStatus: 'historical'
  },
  {
    id: 'langwang',
    rank: 40,
    tier: 'extended',
    name: '浪网',
    tagline: 'IEPL 专线定位 · 年付 ¥119(80G) / 进阶至商业 2TB · 多项参数尚缺待实测',
    affUrl: 'https://varnexa.wavenetaff.com/#/?code=xwAM4tTd',
    rating: 4.3,
    startingPrice: 9.92,
    priceNote: '年付标准 ¥119/年（¥9.92/月 · 80GB/月）；入门月付 ¥30/月（约150GB · 截图部分遮挡）',
    monthlyPay: true,
    payAsYouGo: true,
    networkType: 'IEPL',
    protocols: ['待核实 (原资料截图遮挡未标协议)'],
    clientSupport: '待核实',
    scenarios: ['商业 2TB/月 大包', 'IEPL 定制线路包', '450G/900G不限时'],
    features: [
      '截图标注 IEPL 专线定位，产品线跨入门/进阶/高端(800G)/商业(2TB)及定制线路包(¥640)',
      '配有 ¥119/年 80GB 年付标准档及 ¥239~¥1099 三档一次性包'
    ],
    pros: [
      '大流量 800G~2000G 月付到 3 年付长期价阶梯明晰，保留真实入口链接'
    ],
    cons: [
      '原文明确标注「未实测」，且入场截图部分遮挡，尚缺设备限制、协议、节点地区、支付方式、优惠码与测速/解锁等关键数据',
      '推荐度显著低于有完整抓包的 IEPL 竞品，仅适合作完整记录归档'
    ],
    speedRating: '待测',
    recommendedBadge: '未实测 · 信息缺口较大',
    reviewUrl: '/reviews/langwang',
    badgeColor: 'red',
    trafficStarting: '80GB/月(年付) / 约150GB(入门月付)',
    establishedYear: '历史记录',
    paymentMethods: ['待核实'],
    plans: [
      { name: '浪网 年付标准', cycle: '年付', price: '¥119', traffic: '80GB/月', note: '折合 ¥9.92/月' },
      { name: '浪网 入门', cycle: '月付 / 多期', price: '¥30/月', traffic: '约 150GB/月 (原图截150G)' },
      { name: '浪网 进阶', cycle: '月付 / 多期', price: '¥70/月', traffic: '450GB/月' },
      { name: '浪网 高端', cycle: '月付 / 多期', price: '¥120/月', traffic: '800GB/月' },
      { name: '浪网 商业', cycle: '月付 / 年付', price: '¥200/月', traffic: '2000GB/月' },
      { name: '流量包 (小/标准/精英)', cycle: '一次性', price: '¥239 / ¥569 / ¥1099', traffic: '180G / 450G / 900G' },
      { name: '定制线路包', cycle: '月付', price: '¥640', traffic: '500GB/月' }
    ],
    dataStatus: 'partial',
    vendorNote: '原资料明确标注「未实测」且部分字段被截图遮挡，本站遵循零虚构原则完整提示缺失信息。'
  },
  {
    id: 'edgenova',
    rank: 41,
    tier: 'extended',
    name: 'EdgeNova (边缘节点)',
    tagline: '高速直连 / IPLC · 限时月付 ¥15(72GB) / 年付 ¥108(45GB) · 新人 8 折码 TH888',
    affUrl: 'https://work.edgenovaaff.cc/#/register?code=cl3iB5YG',
    couponCode: 'TH888',
    discountText: '8 折优惠码 TH888',
    rating: 4.5,
    startingPrice: 9,
    priceNote: '限时年付 ¥108/年（¥9/月 · 45GB/月）；限时纯月付 ¥15/月（72GB/月）；极界标准 ¥25/月（120GB）',
    monthlyPay: true,
    payAsYouGo: false,
    networkType: '混合专线',
    protocols: ['待核实 (清单未单列具体协议名称)'],
    clientSupport: '待核实',
    scenarios: ['限时月付15元尝试', '多线路自动分配', '8折新人优惠 TH888'],
    features: [
      '定位于「高速直连 / IPLC」结合多线路自动分配机制，主打均衡接入',
      '设限时月付 ¥15/72G 与限时年付 ¥108/45G 低门槛尝试包，标准「极界」线涵盖 120G~1000G'
    ],
    pros: [
      '月付试错门槛低（限时 ¥15/月），支持支付宝、微信与 USDT，并配 TH888 8折码'
    ],
    cons: [
      '「混合高速直连 / IPLC」在无独立晚高峰测速图的情况下不能等同于全节点物理 IPLC，且目前缺 AI/流媒体实证',
      '注意标准档年付价格较高（¥25×12=300 但年付写¥270 较晚优，限时档更具价格优势）'
    ],
    speedRating: '待测',
    recommendedBadge: '限时¥15月付 · 缺实测图',
    reviewUrl: '/reviews/edgenova',
    badgeColor: 'amber',
    trafficStarting: '45GB/月(年付) / 72GB/月(限时月付)',
    establishedYear: '2025',
    paymentMethods: ['支付宝', '微信', 'USDT'],
    plans: [
      { name: '限时年付', cycle: '年付', price: '¥108', traffic: '45GB/月', note: '折合 ¥9/月' },
      { name: '限时月付', cycle: '月付', price: '¥15', traffic: '72GB/月' },
      { name: '极界 · 标准', cycle: '月付 / 年付', price: '¥25/月 (年¥270)', traffic: '120GB/月' },
      { name: '极界 · 进阶', cycle: '月付 / 年付', price: '¥50/月 (年¥570)', traffic: '250GB/月' },
      { name: '极界 · 高级', cycle: '月付 / 年付', price: '¥100/月 (年¥1100)', traffic: '500GB/月' },
      { name: '极界 · 极限', cycle: '月付 / 年付', price: '¥200/月 (年¥2300)', traffic: '1000GB/月' }
    ],
    dataStatus: 'vendor'
  },
  {
    id: 'sslar',
    rank: 42,
    tier: 'extended',
    name: 'SSLAR',
    tagline: '企业 IEPL + 多线 BGP · SS/VLESS 自适应 · 自研端+远程桌面协助 · 缺官网入口',
    couponCode: 'ko3eTt0w',
    discountText: '8 折优惠码 ko3eTt0w（常规季9/半85/年8折）',
    rating: 4.5,
    startingPrice: 17,
    priceNote: 'Basic 纯月付 ¥17/月（100GB/月 · 年付 ¥163/年）· 暂无独立注册入口地址',
    monthlyPay: true,
    payAsYouGo: false,
    networkType: 'IEPL',
    protocols: ['Shadowsocks', 'VLESS'],
    clientSupport: '自研+第三方',
    scenarios: ['商务远程桌面协助售后', 'SS/VLESS自适应', '17元100G月付'],
    features: [
      '企业级 IEPL + 多线 BGP 定位，支持 SS / VLESS 协议自适应；资料提及 Eons/Akari/DigitalOcean 机房落地',
      '提供 Win/macOS/Android 自研客户端，独有支持客服「远程桌面协助」商务售后配置'
    ],
    pros: [
      '支持远程桌面配置协助对彻底不熟悉电脑网络环境的纯商务用户极具差异化卖点；Basic ¥17/100GB（可用 8 折码 ko3eTt0w）性价比不俗'
    ],
    cons: [
      '清单尚未提供有效官网独立注册入口，亦缺少实测速度与 AI/流媒体解锁检验记录，且资料未见支持 USDT',
      '归入历史补充档案，待确认有效官方入口前建议优先考虑首页 Top 10 现役服务商'
    ],
    speedRating: '待测',
    recommendedBadge: '远程协助特色 · 缺入口',
    reviewUrl: '/reviews/sslar',
    badgeColor: 'purple',
    trafficStarting: '100GB / 月 (Basic ¥17 起)',
    establishedYear: '历史记录',
    paymentMethods: ['支付宝', '微信'],
    plans: [
      { name: 'Basic', cycle: '月付 / 年付', price: '¥17/月 (年¥163)', traffic: '100GB/月' },
      { name: 'Standard', cycle: '月付 / 年付', price: '¥28/月 (年¥268)', traffic: '200GB/月' },
      { name: 'Premium', cycle: '月付 / 年付', price: '¥36/月 (年¥345)', traffic: '300GB/月' }
    ],
    dataStatus: 'historical',
    vendorNote: '清单中「未提供独立品牌入口」且暂无逐地区测速与流媒体实测表。'
  }
]
