import type { AirportItem } from './types'

export const mainListAirports: AirportItem[] = [
  {
    id: 'yuzhoucloud',
    rank: 11,
    tier: 'main',
    name: '宇宙云',
    tagline: '2023 年运营 · 60+ 节点三网优化 · VLESS 专线实测截图 + 待补充当期全量套餐',
    affUrl: 'https://wzjc.yuzoucloud.cc/#/?code=yrThwMP1',
    couponCode: 'YUZHOU553',
    discountText: '历史资料新用户 8 折（以结账页实时显示为准）',
    rating: 4.7,
    startingPrice: 8,
    priceNote: '2026-10 清单标起步年付 ¥96/年（月流量及全量套餐待官方更新核实）；历史记录 ¥14.9/月 100GB',
    monthlyPay: true,
    payAsYouGo: false,
    networkType: 'IEPL',
    protocols: ['VLESS'],
    clientSupport: '待核实',
    scenarios: ['60+ 节点三网优化', '日常网页/轻量视频', '08-11 9Gbps VLESS 实测'],
    features: [
      '2023 年上线老面孔，历史资料记载配备 60+ 节点与三网优化负载均衡',
      '保留 2026-08-11 21:04 珠海联通 9Gbps VLESS 高清晚间实测抓包原图',
      '优惠码 YUZHOU553，当前入口 wzjc.yuzoucloud.cc（历史域 guangs.yuzoucloud.cc）'
    ],
    pros: [
      '拥有 2026-08-11 21:04 CST 晚间时段 VLESS 9Gbps 实测抓包图片作为性能佐证',
      '入门门槛曾下探至 ¥96/年，兼容 VLESS 现代协议'
    ],
    cons: [
      '《42家》清单明确标注该品牌当期完整套餐截图、客户端限制（专属/订阅）及 AI 流媒体逐项解锁处于「待补充核实」状态',
      '注册域存在 wzjc 与 guangs 两版历史地址，访问请以最新有效跳转为准'
    ],
    speedRating: 'S',
    recommendedBadge: '含 08-11 VLESS 晚间实测图',
    reviewUrl: '/reviews/yuzhoucloud',
    badgeColor: 'cyan',
    trafficStarting: '年付¥96起(月流量待核实) / 历史¥14.9·100GB',
    establishedYear: '2023',
    paymentMethods: ['支付宝', '微信', 'USDT'],
    speedtestImage: '/images/speedtest/yuzhoucloud.png',
    testedAt: '2026-08-11 21:04:24',
    testToolEnv: '主端 4.3.3 / 喵速 4.7.0 (珠海联通 9Gbps · VLESS)',
    dataStatus: 'measured',
    vendorNote: '2026-10 清单标注完整套餐表与客户端下发方式尚待补充核实，本站严格保留「待核实」标注并展示 08-11 真实抓包图。'
  },
  {
    id: 'u1s1',
    rank: 12,
    tier: 'main',
    name: 'U1S1',
    tagline: '2025 年新版 IPLC 专线 · 官方标 2000Mbps 带宽 · 年付 ¥96/月付 ¥20 120GB',
    affUrl: 'https://guangs.vipaff.cc/#/?code=xhX5X22f',
    couponCode: 'akaka',
    discountText: '专属优惠码 akaka',
    rating: 4.7,
    startingPrice: 8,
    priceNote: '「就是好用包」年付 ¥96/年（¥8/月 · 60GB/月）；纯月付「普通人真够了包」¥20/月（120GB）',
    monthlyPay: true,
    payAsYouGo: false,
    networkType: 'IPLC',
    protocols: ['Shadowsocks', 'VLESS'],
    clientSupport: '自研+第三方',
    scenarios: ['IPLC 专线', '不限设备连接', '20 元 120GB 纯月付', 'ChatGPT/Netflix'],
    features: [
      '2025 年上线新锐品牌（历史库亦作 2023 记录），定位 IPLC 专线与 2000Mbps 高带宽',
      '全套餐不限设备同时连接，官方宣称晚高峰不限速',
      '附 2026-08-11 22:33 CST 晚高峰时段 MAI-TEST-BOT 高清抓包原图'
    ],
    pros: [
      '22:33 晚高峰保有实测截图；月付从 120GB(¥20) 跨到 1500GB(¥180) 并配 ¥96 年付小包',
      '支持标准订阅导入及自研方案，兼顾新手与极客用户'
    ],
    cons: [
      '品牌资料公开优惠信息偏少、运营年份相对较新（2025 年口径），建议先按 ¥20 单月付实测再考虑长期合约',
      '部分地区（如美西/欧洲）峰值速度显著弱于港新近端'
    ],
    speedRating: 'S',
    recommendedBadge: '22:33 晚高峰实测图',
    reviewUrl: '/reviews/u1s1',
    badgeColor: 'cyan',
    trafficStarting: '60GB/月(年付) / 120GB/月(月付)',
    establishedYear: '2025',
    paymentMethods: ['支付宝', '微信', 'USDT'],
    speedtestImage: '/images/speedtest/u1s1.png',
    testedAt: '2026-08-11 22:33:29',
    testToolEnv: 'MAI-TEST-BOT 2.0.0-dev · 珠海联通 5Gbps · Shadowsocks',
    plans: [
      { name: 'u1s1 · 就是好用包', cycle: '年付', price: '¥96', traffic: '60GB/月', note: '折合 ¥8/月' },
      { name: 'u1s1 · 普通人真够了包', cycle: '月付', price: '¥20', traffic: '120GB/月' },
      { name: 'u1s1 · 你以为用不到包', cycle: '月付', price: '¥40', traffic: '300GB/月' },
      { name: 'u1s1 · 瘾大就拉满包', cycle: '月付', price: '¥100', traffic: '700GB/月' },
      { name: 'u1s1 · 我全都要包', cycle: '月付', price: '¥180', traffic: '1500GB/月' }
    ],
    benchmarks: [
      { region: '香港', latency: '24ms', download: '538Mbps', dateNote: '2026-10-19 原文标注 · 非晚高峰' },
      { region: '台湾', latency: '39ms', download: '107Mbps', dateNote: '2026-10-19 原文标注 · 非晚高峰' },
      { region: '新加坡', latency: '46ms', download: '414Mbps', dateNote: '2026-10-19 原文标注 · 非晚高峰' },
      { region: '日本', latency: '57ms', download: '133Mbps', dateNote: '2026-10-19 原文标注 · 非晚高峰' },
      { region: '美国', latency: '134ms', download: '20Mbps', dateNote: '2026-10-19 原文标注 · 非晚高峰' }
    ],
    unlockSummary: {
      supported: ['ChatGPT', 'Claude', 'Netflix', 'Disney+', 'YouTube', 'HBO Max', 'TikTok', 'Spotify'],
      nodeDependent: ['Gemini (视节点而定)']
    },
    dataStatus: 'measured'
  },
  {
    id: 'civetnet',
    rank: 13,
    tier: 'main',
    name: '灵猫网络',
    tagline: '1 倍流量不限速不限设备 · 年付小包 ¥85(≈¥7.1/月) / 月付Small ¥25(150GB) · 含实测图',
    affUrl: 'https://vip01.civetnet.com/#/?code=8MIAyxak',
    couponCode: 'lingmao',
    altCouponCode: 'lmao888',
    discountText: '8 折优惠码 lingmao（年付小包不适用；历史同步记录 lmao888）',
    rating: 4.8,
    startingPrice: 7.08,
    priceNote: '年付小包 ¥85/年（约 ¥7.1/月 · 45GB/月）；月付Small ¥25/月（150GB/月 · 历史记录 ¥19）',
    monthlyPay: true,
    payAsYouGo: true,
    networkType: 'IEPL',
    protocols: ['Shadowsocks', 'VLESS'],
    clientSupport: '仅自研客户端',
    scenarios: ['不限设备共享', '150GB/300GB 大流量', 'ChatGPT/TikTok', '年付 ¥7.1 门槛'],
    features: [
      '全节点 1x 流量倍率计费、官方称不限速且不限制同时连接设备数',
      '覆盖香港、台湾、日本、美国、新加坡等亚太与欧美主流枢纽',
      '保留 2026-08-11 18:45 CST 傍晚黄金时段 MAI-TEST-BOT 高清测速抓包图'
    ],
    pros: [
      '年付 Small(¥195) 与月付 Small(¥25) 均包含 150GB 较大月度配额，家庭多设备共摊性价比高',
      '2026-08-11 18:45 实测图已落地验证；提供支付宝/微信/USDT（历史库记载含不限时选项）'
    ],
    cons: [
      '2026-10 新资料指出已转向官方专属客户端登录使用（不提供第三方订阅链接），Clash Verge 用户请选购前确认',
      '存在多组历史报价/码冲突（月付Small ¥25 vs 历史¥19，优惠码 lingmao 8折 vs lmao888），结账请以官网实付为准'
    ],
    speedRating: 'S',
    recommendedBadge: '不限设备 + 150G大包',
    reviewUrl: '/reviews/civetnet',
    badgeColor: 'cyan',
    trafficStarting: '45GB/月(年付小包) / 150GB/月(Small)',
    establishedYear: '2024',
    paymentMethods: ['支付宝', '微信', 'USDT'],
    speedtestImage: '/images/speedtest/civetnet.png',
    testedAt: '2026-08-11 18:45:40',
    testToolEnv: 'MAI-TEST-BOT 2.0.0-dev · 珠海联通 5Gbps · Shadowsocks',
    plans: [
      { name: '灵猫 · 年付小包', cycle: '年付', price: '¥85', traffic: '45GB/月', note: '折合 ¥7.08/月 · 优惠码不适用' },
      { name: '灵猫 · 年付 Small', cycle: '年付', price: '¥195', traffic: '150GB/月' },
      { name: '灵猫 · 年付 Big', cycle: '年付', price: '¥295', traffic: '300GB/月' },
      { name: '灵猫 · 季付 Big', cycle: '季付', price: '¥125', traffic: '300GB/月' },
      { name: '灵猫 · 月付 Small', cycle: '月付', price: '¥25', traffic: '150GB/月', note: '历史基础记录 ¥19/月' },
      { name: '灵猫 · 月付 Big', cycle: '月付', price: '¥45', traffic: '300GB/月' }
    ],
    benchmarks: [
      { region: '香港', latency: '22ms', download: '492Mbps', dateNote: '2026-10-19 原文标注 · 非晚高峰' },
      { region: '台湾', latency: '40ms', download: '109Mbps', dateNote: '2026-10-19 原文标注 · 非晚高峰' },
      { region: '新加坡', latency: '46ms', download: '409Mbps', dateNote: '2026-10-19 原文标注 · 非晚高峰' },
      { region: '日本', latency: '57ms', download: '147Mbps', dateNote: '2026-10-19 原文标注 · 非晚高峰' },
      { region: '美国', latency: '164ms', download: '19Mbps', dateNote: '2026-10-19 原文标注 · 非晚高峰' }
    ],
    unlockSummary: {
      supported: ['ChatGPT', 'Claude', 'Netflix', 'Disney+', 'YouTube', 'HBO Max', 'TikTok', 'Spotify'],
      nodeDependent: ['Gemini (视节点而定)']
    },
    dataStatus: 'measured'
  },
  {
    id: 'jilianyun',
    rank: 14,
    tier: 'main',
    name: '极连云',
    tagline: '2024 年运营 · ¥18 纯月付 100GB · IEPL 专线 + 覆盖 AI 工具场景',
    affUrl: 'https://guangs.jlyvipaff.com/#/?code=VM1rKGUu',
    couponCode: 'ji8888',
    discountText: '专属优惠码 ji8888',
    rating: 4.7,
    startingPrice: 18,
    priceNote: '入门纯月付 ¥18/月（100GB/月），20 元以内少有 IEPL + 双端兼容档位',
    monthlyPay: true,
    payAsYouGo: false,
    networkType: 'IEPL',
    protocols: ['Shadowsocks', 'VLESS'],
    clientSupport: '自研+第三方',
    scenarios: ['20元内纯月付', '日常 AI 访问', '自研+Clash双兼容', '晚间22:46实测'],
    features: [
      '2024 年起运行，定位 18 元档低门槛纯月付 IEPL 专线服务',
      '同时提供官方自研简化客户端与第三方主流 Clash/Shadowrocket 订阅',
      '保留 2026-08-11 22:46 CST 深夜/晚高峰末端 MAI-TEST-BOT 高清实测图'
    ],
    pros: [
      '无强制年付绑定，¥18 单月试错门槛低于常规 ¥20~¥25 专线机场',
      '品牌资料明确提及覆盖常见 AI 工具访问场景，且 08-11 22:46 有真实抓包留底'
    ],
    cons: [
      '同 ¥18 价位下月流量为 100GB（邻近光年梯同价位提供 110GB），高频 4K 影音党略紧凑',
      '除 08-11 测速抓包外，尚缺更多 10 月详尽流媒体分平台独立测评报告'
    ],
    speedRating: 'S',
    recommendedBadge: '18元档月付IEPL',
    reviewUrl: '/reviews/jilianyun',
    badgeColor: 'cyan',
    trafficStarting: '100GB / 月',
    establishedYear: '2024',
    paymentMethods: ['支付宝', '微信', 'USDT'],
    speedtestImage: '/images/speedtest/jilianyun.png',
    testedAt: '2026-08-11 22:46:50',
    testToolEnv: 'MAI-TEST-BOT 2.0.0-dev · 珠海联通 5Gbps · Shadowsocks',
    plans: [
      { name: '极连云 · 月付入门档', cycle: '月付', price: '¥18', traffic: '100GB/月', note: '具体高阶档位以官网面板实时显示为准' }
    ],
    dataStatus: 'measured'
  },
  {
    id: 'guangnianti',
    rank: 15,
    tier: 'main',
    name: '光年梯',
    tagline: '2025 年运营 · ¥18 纯月付 110GB（比极连云多 10G）· VLESS + IEPL 双端兼备',
    affUrl: 'https://guangs.gntaff.com/#/?code=X1FoxjGE',
    couponCode: 'gnt6666',
    discountText: '专属优惠码 gnt6666',
    rating: 4.7,
    startingPrice: 18,
    priceNote: '入门纯月付 ¥18/月（110GB/月）· 比同价位 ¥18 档多 10GB 月度余量',
    monthlyPay: true,
    payAsYouGo: false,
    networkType: 'IEPL',
    protocols: ['VLESS', 'Shadowsocks'],
    clientSupport: '自研+第三方',
    scenarios: ['18元110G性价比', 'VLESS+IEPL', '自研端+第三方导入', 'AI与主流流媒体'],
    features: [
      '2025 年运营，精准卡位 18 元月付 110GB「介于低价与综合专线之间」',
      'IEPL 专线 + VLESS 协议 + 官方自研客户端与第三方订阅双导入',
      '附 2026-08-11 14:38 CST 日间 MAI-TEST-BOT 高清测速抓包图'
    ],
    pros: [
      '同为 ¥18 档比极连云多 10GB 流量，明确标注支持常见 AI 工具与主流流媒体场景',
      '在 Bing 等搜索引擎品牌搜量较高，适合纯月付按月滚动验证体验'
    ],
    cons: [
      '2025 年上线品牌运行年份短于 2020 年老牌（光速云/星岛梦），长期抗风险稳定性仍需周期观察',
      '08-11 快照采集时间为 14:38 下午时段，非 21:00 拥堵高峰'
    ],
    speedRating: 'S',
    recommendedBadge: '¥18/110GB 新锐专线',
    reviewUrl: '/reviews/guangnianti',
    badgeColor: 'green',
    trafficStarting: '110GB / 月',
    establishedYear: '2025',
    paymentMethods: ['支付宝', '微信', 'USDT'],
    speedtestImage: '/images/speedtest/guangnianti.png',
    testedAt: '2026-08-11 14:38:04',
    testToolEnv: 'MAI-TEST-BOT 2.0.0-dev · 珠海联通 5Gbps · Shadowsocks',
    plans: [
      { name: '光年梯 · 月付入门档', cycle: '月付', price: '¥18', traffic: '110GB/月', note: '进阶大流量档以官网结账页实时显示为准' }
    ],
    dataStatus: 'measured'
  },
  {
    id: 'yifanyun',
    rank: 16,
    tier: 'main',
    name: '一翻云',
    tagline: 'IEPL 物理专线 + 原生住宅 IP · Hy2/VLESS-Reality/SS 三协议 · ¥20/150GB & 不限时包',
    affUrl: 'https://guangs.1flyunaff.cc/#/register?code=Yr7FhB7r',
    couponCode: 'yfy6666',
    altCouponCode: '1FLYYUN',
    discountText: '专属优惠码 yfy6666（清单原文亦提及 1FLYYUN 9折）',
    rating: 4.8,
    startingPrice: 8.17,
    priceNote: '年付小包 ¥98/年（约 ¥8.17/月 · 60GB/月）；轻享纯月付 ¥20/月（150GB/月）；永久不限时 ¥100 起',
    monthlyPay: true,
    payAsYouGo: true,
    networkType: 'IEPL',
    protocols: ['Hysteria 2', 'VLESS-Reality', 'Shadowsocks'],
    clientSupport: '仅第三方订阅',
    scenarios: ['三协议极客首选', '20元150G超大流量比', '原生住宅IP流媒体', '不限时100/250/500G'],
    features: [
      '同时支持 Hysteria 2、VLESS-Reality、Shadowsocks 三大现代高速抗封锁协议',
      '覆盖港/台/日/美/新五地原生节点，含台湾节点与不限设备数量设置',
      '提供 ¥98 年付、¥20~¥95 月付（高达 1.2TB）与 ¥100/¥200/¥400 永久不限时包，并含 08-11 实测图'
    ],
    pros: [
      '在 ¥20 纯月付梯队给出高达 150GB 流量且单节点宣称 2Gbps 带宽，折合单 GB 成本极优',
      '罕见配齐 Hy2 + Reality + SS 三协议，对 Clash Verge (Mihomo) 与 sing-box 玩家极度友好'
    ],
    cons: [
      '官方不设免费试用，且偏重开源第三方客户端订阅导入，纯新手需花 3 分钟照站内教程配置',
      '08-11 测速快照于 00:21 凌晨采集，非晚高峰极限压测'
    ],
    speedRating: 'S',
    recommendedBadge: '三协议 + ¥20/150GB',
    reviewUrl: '/reviews/yifanyun',
    badgeColor: 'cyan',
    trafficStarting: '60GB/月(年付) / 150GB/月(月付)',
    establishedYear: '2025',
    paymentMethods: ['支付宝', '微信', 'USDT'],
    speedtestImage: '/images/speedtest/yifanyun.png',
    testedAt: '2026-08-11 00:21:30',
    testToolEnv: 'MAI-TEST-BOT 2.0.0-dev · 珠海联通 5Gbps · Shadowsocks',
    plans: [
      { name: '98¥ · 年付小包', cycle: '年付', price: '¥98', traffic: '60GB/月', note: '折合 ¥8.17/月' },
      { name: '轻享版', cycle: '月付', price: '¥20', traffic: '150GB/月' },
      { name: '舒享版', cycle: '月付', price: '¥35', traffic: '350GB/月' },
      { name: '尊享版', cycle: '月付', price: '¥55', traffic: '600GB/月' },
      { name: '极致版', cycle: '月付', price: '¥95', traffic: '1.2TB/月' },
      { name: '轻享版 · 不限时包', cycle: '一次性', price: '¥100', traffic: '100GB 一次性' },
      { name: '舒享版 · 不限时包', cycle: '一次性', price: '¥200', traffic: '250GB 一次性' },
      { name: '尊享版 · 不限时包', cycle: '一次性', price: '¥400', traffic: '500GB 一次性' }
    ],
    benchmarks: [
      { region: '香港', latency: '23ms', download: '477Mbps', dateNote: '2026-10-19 原文标注 · 非晚高峰' },
      { region: '台湾', latency: '40ms', download: '117Mbps', dateNote: '2026-10-19 原文标注 · 非晚高峰' },
      { region: '新加坡', latency: '42ms', download: '390Mbps', dateNote: '2026-10-19 原文标注 · 非晚高峰' },
      { region: '日本', latency: '53ms', download: '136Mbps', dateNote: '2026-10-19 原文标注 · 非晚高峰' },
      { region: '美国', latency: '180ms', download: '20Mbps', dateNote: '2026-10-19 原文标注 · 非晚高峰' }
    ],
    unlockSummary: {
      supported: ['ChatGPT', 'Claude', 'Netflix', 'Disney+', 'YouTube', 'HBO Max', 'TikTok', 'Spotify'],
      nodeDependent: ['Gemini (视节点而定)']
    },
    dataStatus: 'measured'
  },
  {
    id: 'sogoyun',
    rank: 17,
    tier: 'main',
    name: 'SOGO 云',
    tagline: '2026 新锐旗舰 · 15 个国家/地区广泛节点 · IEPL + 三网 BGP + 08-11 18:57 S+ 实测',
    affUrl: 'https://guangs.sogoyunaff.cc/#/?code=327Vs0w7',
    couponCode: 'SOGO10000',
    altCouponCode: 'sss777',
    discountText: '9 折优惠码 SOGO10000（历史亦记录 sss777）',
    rating: 4.8,
    startingPrice: 8.17,
    priceNote: '小包年付 ¥98/年（约 ¥8.17/月 · 60GB/月）；基础纯月付 ¥25/月（150GB/月）；不限时 ¥120 起',
    monthlyPay: true,
    payAsYouGo: true,
    networkType: 'IEPL',
    protocols: ['VLESS', 'Shadowsocks'],
    clientSupport: '仅自研客户端',
    scenarios: ['15国广泛节点覆盖', '18:57 S+ 高峰测速图', '不限设备数', '全平台自研端'],
    features: [
      '海外团队运营 2026 全新轻量集群，全线 IEPL 专线 + 三网 BGP 优化 + 不限速不限设备',
      '节点覆盖 15 个国家和地区（港/台/日/新/美/韩等），站内收录地区覆盖极广',
      '保留 2026-08-11 18:57 CST 晚间接入时段 S+ 高清测速原图与四档永久不限时包（最高 1TB）'
    ],
    pros: [
      '拥有 08-11 18:57 实测图支撑，新集群轻载速率突出；节点覆盖多达 15 个国家和地区',
      '套餐灵活：含 ¥98 年付小包、¥25~¥150 月付以及 120G/250G/500G/1TB 不限时一次性流量包'
    ],
    cons: [
      '【重要更正】2026-10 清单明确标注 SOGO 云当前已不提供第三方通用订阅链接，只支持自研客户端（Win/macOS/iOS/Android/软路由）下载登录即用，无法直接导入 Clash Verge/Shadowrocket',
      'Claude、Gemini、HBO Max 标注视节点而定；作为 2026 新站建议优先纯月付 ¥25 验证长期表现'
    ],
    speedRating: 'S+',
    recommendedBadge: '15国节点 + S+级抓包',
    reviewUrl: '/reviews/sogoyun',
    badgeColor: 'cyan',
    trafficStarting: '60GB/月(年付) / 150GB/月(基础月付)',
    establishedYear: '2026',
    paymentMethods: ['支付宝', '微信', 'USDT'],
    speedtestImage: '/images/speedtest/sogoyun.png',
    testedAt: '2026-08-11 18:57:59',
    testToolEnv: 'MAI-TEST-BOT 2.0.0-dev · 珠海联通 5Gbps · Shadowsocks',
    plans: [
      { name: '小包 · 年付版', cycle: '年付', price: '¥98', traffic: '60GB/月', note: '折合 ¥8.17/月' },
      { name: '基础版', cycle: '月付', price: '¥25', traffic: '150GB/月' },
      { name: '优选版', cycle: '月付', price: '¥45', traffic: '350GB/月' },
      { name: '强化版', cycle: '月付', price: '¥80', traffic: '550GB/月' },
      { name: '顶配版', cycle: '月付', price: '¥150', traffic: '1.1TB/月' },
      { name: 'SOGO 不限时版 (四档)', cycle: '一次性', price: '¥120~¥850', traffic: '120G/250G/500G/1TB 一次性' }
    ],
    benchmarks: [
      { region: '香港', latency: '26ms', download: '488Mbps', dateNote: '2026-10-19 原文标注 · 非晚高峰' },
      { region: '台湾', latency: '39ms', download: '118Mbps', dateNote: '2026-10-19 原文标注 · 非晚高峰' },
      { region: '新加坡', latency: '43ms', download: '401Mbps', dateNote: '2026-10-19 原文标注 · 非晚高峰' },
      { region: '日本', latency: '57ms', download: '137Mbps', dateNote: '2026-10-19 原文标注 · 非晚高峰' },
      { region: '美国', latency: '140ms', download: '17Mbps', dateNote: '2026-10-19 原文标注 · 非晚高峰' }
    ],
    unlockSummary: {
      supported: ['ChatGPT', 'Netflix', 'Disney+', 'YouTube', 'TikTok'],
      nodeDependent: ['Claude', 'Gemini', 'HBO Max', 'Spotify']
    },
    dataStatus: 'measured'
  },
  {
    id: 'kexinyun',
    rank: 18,
    tier: 'main',
    name: '可信云',
    tagline: '2024 年运营 · ¥25 纯月付 150GB · IEPL + VLESS + 第三方支持 & 诚实标注数据边界',
    affUrl: 'https://guangs.kosingaff.com/#/register?code=UYDtNlCY',
    couponCode: 'kkk333',
    discountText: '专属优惠码 kkk333',
    rating: 4.7,
    startingPrice: 25,
    priceNote: '纯月付 ¥25/月（150GB/月），透明标注「缺乏统一流媒体/AI实测」',
    monthlyPay: true,
    payAsYouGo: false,
    networkType: 'IEPL',
    protocols: ['VLESS', 'Shadowsocks'],
    clientSupport: '仅第三方订阅',
    scenarios: ['第三方开源客户端', '25元150G大流量', '不夸大营销透明档'],
    features: [
      '2024 年上线，主推 IEPL 专线 + VLESS 协议 + 标准第三方客户端订阅支持',
      '唯一在品牌资料中直言「AI 与流媒体目前缺乏统一实测数据，保持中性克制描述」的服务商',
      '保留 2026-08-11 15:32:35 CST MAI-TEST-BOT 单日测速原图（具体完整日历日期按批次复核备注）'
    ],
    pros: [
      '不作虚假「全解锁 100%」宣传话术，透明度高，且仍兼容开源 Clash Verge/v2rayN/Shadowrocket',
      '¥25 月付即包含 150GB 较大流量，适合反感闭源专属端强绑定的进阶用户'
    ],
    cons: [
      '缺乏独立的 AI / 流媒体逐平台实测报告；08-11 PNG 底部未印完整年月日（已依原始压缩批次记录为 2026-08-11）',
      '同 ¥25 档缺乏 100 元级小包或低门槛年付入门 option'
    ],
    speedRating: 'S',
    recommendedBadge: '支持开源端 + 透明标注',
    reviewUrl: '/reviews/kexinyun',
    badgeColor: 'purple',
    trafficStarting: '150GB / 月',
    establishedYear: '2024',
    paymentMethods: ['支付宝', '微信', 'USDT'],
    speedtestImage: '/images/speedtest/kexinyun.png',
    testedAt: '2026-08-11 15:32:35 (按批次暂记)',
    testToolEnv: 'MAI-TEST-BOT 2.0.0-dev · 珠海联通 5Gbps · Shadowsocks',
    plans: [
      { name: '可信云 · 基础月付', cycle: '月付', price: '¥25', traffic: '150GB/月', note: '更多阶梯流量包请以官网面板为准' }
    ],
    dataStatus: 'measured',
    vendorNote: '品牌资料诚实声明「AI与流媒体目前缺乏统一实测数据」；截图 15:32:35 完整日期建议发布/下单前对照原始记录复核。'
  },
  {
    id: 'sujie',
    rank: 19,
    tier: 'main',
    name: '速界',
    tagline: '2024 年运营 · ¥25 纯月付 150GB · 25 元档唯一重点强调 AI 工具使用场景',
    affUrl: 'https://guangs.speedworldaff.cc/#/register?code=xgXzEfZB',
    couponCode: 'sss1111',
    discountText: '专属优惠码 sss1111',
    rating: 4.7,
    startingPrice: 25,
    priceNote: '纯月付 ¥25/月（150GB/月）· 专注 ChatGPT / Claude / Gemini 场景配适',
    monthlyPay: true,
    payAsYouGo: false,
    networkType: 'IEPL',
    protocols: ['VLESS', 'Shadowsocks'],
    clientSupport: '自研+第三方',
    scenarios: ['ChatGPT/Claude/Gemini 专精', '双端兼容', '25元 150GB 纯月付'],
    features: [
      '2024 年运营，采用 IEPL 专线 + VLESS 协议，支持自研客户端与第三方开源订阅导入',
      '25 元档中明确突出 ChatGPT、Claude、Gemini 等 AI 工具访问需求，同时诚实提醒受 IP/平台风控影响不承诺永久全绿',
      '保留 2026-08-11 15:39:36 CST MAI-TEST-BOT 单日测速原图'
    ],
    pros: [
      'AI 开发者友好：支持 Clash Verge 规则/TUN 分流且客观说明 AI 平台风控规律',
      '150GB 较大月包与双端生态兼顾稳定与扩展性'
    ],
    cons: [
      '缺乏独立的 RegionRestriction AI 逐项绿标实测截图；仍需用户自备规则把 AI 域名避开香港节点',
      '¥25 入门价格对于只查少量资料的低频用户偏高'
    ],
    speedRating: 'S',
    recommendedBadge: '¥25档AI工具向',
    reviewUrl: '/reviews/sujie',
    badgeColor: 'purple',
    trafficStarting: '150GB / 月',
    establishedYear: '2024',
    paymentMethods: ['支付宝', '微信', 'USDT'],
    speedtestImage: '/images/speedtest/sujie.png',
    testedAt: '2026-08-11 15:39:36',
    testToolEnv: 'MAI-TEST-BOT 2.0.0-dev · 珠海联通 5Gbps · Shadowsocks',
    plans: [
      { name: '速界 · AI 办公月付版', cycle: '月付', price: '¥25', traffic: '150GB/月' }
    ],
    unlockSummary: {
      supported: [],
      nodeDependent: ['ChatGPT / Claude / Gemini (品牌明确强调AI访问适配，同时提示受IP与平台风控影响)']
    },
    dataStatus: 'measured'
  },
  {
    id: 'shanyue',
    rank: 20,
    tier: 'main',
    name: '闪跃',
    tagline: '纯 IPLC 专线高端定位 · 年付 ¥96(¥8/月) / 闪动月付 ¥24(150GB) · 专属客户端',
    affUrl: 'https://vip02.flashleapaff.com/#/?code=3lgzm9mm',
    couponCode: 'shanyue',
    discountText: '8 折优惠码 shanyue（仅限闪动/飞跃/瞬移/跃迁，年付版不适用）',
    rating: 4.7,
    startingPrice: 8,
    priceNote: '年付版 ¥96/年（¥8/月 · 60GB/月）；闪动纯月付 ¥24/月（150GB/月 · 优惠码8折后更低）',
    monthlyPay: true,
    payAsYouGo: false,
    networkType: 'IPLC',
    protocols: ['待核实（官方未标注具体协议）'],
    clientSupport: '仅自研客户端',
    scenarios: ['高端纯 IPLC 专线', '深夜追剧/高稳 AI', '150G~1TB 大包'],
    features: [
      '主打顶级纯 IPLC 专线与骨干网接入，强调晚高峰高稳定与极低延迟',
      '节点覆盖香港、日本、美国等热门地区，原生 IP 定向 Netflix / Disney+ / HBO 及主流 AI',
      '提供 ¥96 年付小包及「闪动/飞跃/瞬移/跃迁」四档纯月付大流量套餐（150G~1000G）'
    ],
    pros: [
      '纯月付 ¥24 起即含 150GB 且支持「shanyue」8 折券（折后约 ¥19.2/月 150GB），比同级略实惠',
      '针对零配置偏好的用户提供官方专属客户端下载登录即用'
    ],
    cons: [
      '暂不支持 Clash/Shadowrocket 第三方订阅链接导入，底层协议原文亦未公开标注',
      '目前尚未收录本站独立测速抓包图片，2026-10-19 数值均为非晚高峰参考'
    ],
    speedRating: 'A+',
    recommendedBadge: 'IPLC + 闪动系列8折',
    reviewUrl: '/reviews/shanyue',
    badgeColor: 'amber',
    trafficStarting: '60GB/月(年付) / 150GB/月(闪动月付)',
    establishedYear: '2025',
    paymentMethods: ['支付宝', '微信', 'USDT'],
    plans: [
      { name: '闪跃年付版', cycle: '年付', price: '¥96', traffic: '60GB/月', note: '折合 ¥8/月 · 不适用优惠码' },
      { name: '闪动 (Flicker)', cycle: '月付', price: '¥24', traffic: '150GB/月', note: '可用 8 折券 shanyue' },
      { name: '飞跃 (Leap)', cycle: '月付', price: '¥44', traffic: '300GB/月', note: '可用 8 折券 shanyue' },
      { name: '瞬移 (Teleport)', cycle: '月付', price: '¥84', traffic: '600GB/月', note: '可用 8 折券 shanyue' },
      { name: '跃迁 (Warp)', cycle: '月付', price: '¥134', traffic: '1000GB/月', note: '可用 8 折券 shanyue' }
    ],
    benchmarks: [
      { region: '香港', latency: '23ms', download: '548Mbps', dateNote: '2026-10-19 原文标注 · 非晚高峰' },
      { region: '台湾', latency: '38ms', download: '110Mbps', dateNote: '2026-10-19 原文标注 · 非晚高峰' },
      { region: '新加坡', latency: '44ms', download: '383Mbps', dateNote: '2026-10-19 原文标注 · 非晚高峰' },
      { region: '日本', latency: '53ms', download: '144Mbps', dateNote: '2026-10-19 原文标注 · 非晚高峰' },
      { region: '美国', latency: '143ms', download: '18Mbps', dateNote: '2026-10-19 原文标注 · 非晚高峰' }
    ],
    unlockSummary: {
      supported: ['ChatGPT', 'Claude', 'Netflix', 'Disney+', 'YouTube', 'HBO Max', 'TikTok', 'Spotify'],
      nodeDependent: ['Gemini (视节点而定)']
    },
    dataStatus: 'vendor'
  },
  {
    id: 'quanqiuyun',
    rank: 21,
    tier: 'main',
    name: '全球云',
    tagline: '2026 新锐集群 · 60+ 全球节点 · BGP/专线中转 + 年付 ¥99 / 月付 ¥20 / 不限时',
    affUrl: 'https://guangs.gcvipaff.com/#/?code=Ov2nvU9C',
    couponCode: 'qq88',
    altCouponCode: 'qqy7777',
    discountText: '8 折优惠码 qq88（历史同步记录 qqy7777）',
    rating: 4.7,
    startingPrice: 8.25,
    priceNote: '轻量年付 ¥99/年（¥8.25/月 · 59GB/月）；BGP 入门月付 ¥20/月（120GB/月）；不限时 ¥100 起',
    monthlyPay: true,
    payAsYouGo: true,
    networkType: '混合专线',
    protocols: ['Trojan', 'Shadowsocks'],
    clientSupport: '仅自研客户端',
    scenarios: ['60+多地区大节点池', '2Gbps+宣传带宽', '不限时100/400/800G', '含08-11测速图'],
    features: [
      '2026 新部署基础设施集群，资料称配备全球 60+ 节点与 2Gbps+ 带宽资源',
      '升级采用 Trojan / Shadowsocks 双协议与专属客户端登录模式，免手配订阅',
      '覆盖 ¥99 年付、¥20~¥180 多档月付（最高 1500GB）、不限时三档（至 800GB）及 ¥680 独享节点，且保留 08-11 测速图'
    ],
    pros: [
      '节点矩阵规模在同 20 元档中较为庞大，支持永久不限时流量包与高额定制档',
      '保留 2026-08-11 15:50 CST 实测图片验证早期吞吐能力'
    ],
    cons: [
      '【重要更新】2026-10 最新版资料显示转为「仅专属客户端登录即用（不提供订阅链接）」，协议标为 Trojan/SS（对比早期 VLESS/第三方口径），下单前务必确认客户端需求',
      '作为 2026 年新上线服务，跨年口碑仍需随月付使用观测'
    ],
    speedRating: 'S',
    recommendedBadge: '60+节点 + 全能档位',
    reviewUrl: '/reviews/quanqiuyun',
    badgeColor: 'cyan',
    trafficStarting: '59GB/月(年付) / 120GB/月(月付)',
    establishedYear: '2026',
    paymentMethods: ['支付宝', '微信', 'USDT'],
    speedtestImage: '/images/speedtest/quanqiuyun.png',
    testedAt: '2026-08-11 15:50:43',
    testToolEnv: 'MAI-TEST-BOT 2.0.0-dev · 珠海联通 5Gbps · Shadowsocks',
    plans: [
      { name: '轻量版', cycle: '年付', price: '¥99', traffic: '59GB/月', note: '折合 ¥8.25/月' },
      { name: 'BGP 智能优化 · 入门方案', cycle: '月付', price: '¥20', traffic: '120GB/月' },
      { name: 'BGP 智能优化 · 进阶方案', cycle: '月付', price: '¥40', traffic: '300GB/月' },
      { name: 'BGP 智能优化 · 高端方案', cycle: '月付', price: '¥100', traffic: '700GB/月' },
      { name: 'BGP 智能优化 · 商业方案', cycle: '月付', price: '¥180', traffic: '1500GB/月' },
      { name: 'BGP 智能优化 · 不限时包', cycle: '一次性', price: '¥100 / ¥360 / ¥700', traffic: '100GB / 400GB / 800GB' },
      { name: '独享私人专线节点', cycle: '月付', price: '¥680', traffic: '500GB/月' }
    ],
    benchmarks: [
      { region: '香港', latency: '25ms', download: '489Mbps', dateNote: '2026-10-19 原文标注 · 非晚高峰' },
      { region: '台湾', latency: '37ms', download: '117Mbps', dateNote: '2026-10-19 原文标注 · 非晚高峰' },
      { region: '新加坡', latency: '45ms', download: '430Mbps', dateNote: '2026-10-19 原文标注 · 非晚高峰' },
      { region: '日本', latency: '55ms', download: '133Mbps', dateNote: '2026-10-19 原文标注 · 非晚高峰' },
      { region: '美国', latency: '138ms', download: '18Mbps', dateNote: '2026-10-19 原文标注 · 非晚高峰' }
    ],
    unlockSummary: {
      supported: ['ChatGPT', 'Claude', 'Netflix', 'Disney+', 'YouTube', 'HBO Max', 'TikTok', 'Spotify'],
      nodeDependent: ['Gemini (视节点而定)']
    },
    dataStatus: 'measured'
  },
  {
    id: 'shandianshu',
    rank: 22,
    tier: 'main',
    name: '闪电鼠',
    tagline: '2024 年运营 · 年付约 ¥5.6/月 60GB 极限平价代表 · IEPL + VLESS + 季付7折',
    affUrl: 'https://qwerty.shandianshuaff.com/#/?code=rUE75iYh',
    couponCode: 'sd88',
    discountText: '季付及以上 7 折（优惠码 sd88）',
    rating: 4.6,
    startingPrice: 5.6,
    priceNote: '年付折合约 ¥5.6/月（60GB/月），全库最低价格区间门槛之一',
    monthlyPay: false,
    payAsYouGo: false,
    networkType: 'IEPL',
    protocols: ['VLESS'],
    clientSupport: '自研+第三方',
    scenarios: ['极低年付预算首选', '轻量文本办公', '季付及以上7折'],
    features: [
      '2024 年起运营，与大佬云并列为「¥5.6/月极限平价档」核心标准样本',
      '明确配置 IEPL 专线 + VLESS 协议，支持自研端与第三方订阅导入',
      '季付及以上 7 折，注册链接带标准 Hash 路由格式（#/?code=...）'
    ],
    pros: [
      '价格极度低廉且规格（VLESS + IEPL）明晰，无「链接缺#格式异常」隐患',
      '双端支持使得老手也可将其直接挂进 Clash Verge 当作极低成本备用订阅'
    ],
    cons: [
      '仅 60GB/月且为长周期年付分摊单价；暂无本站独立测速抓包图',
      '与大佬云/云界线/环球梯规格几乎一致，长线晚高峰冗余空间不宜期望过高'
    ],
    speedRating: 'A',
    recommendedBadge: '5.6元极限平价标杆',
    reviewUrl: '/reviews/shandianshu',
    badgeColor: 'amber',
    trafficStarting: '60GB / 月 (年付折算)',
    establishedYear: '2024',
    paymentMethods: ['支付宝', '微信', 'USDT'],
    plans: [
      { name: '闪电鼠 · 年付轻量档', cycle: '年付', price: '约 ¥67.2', traffic: '60GB/月', note: '折合 ¥5.6/月 · 季付及以上7折' }
    ],
    dataStatus: 'vendor'
  },
  {
    id: 'yunjiexian',
    rank: 23,
    tier: 'main',
    name: '云界线',
    tagline: '2024 年运营 · 年付约 ¥5.6/月 60GB · IEPL + VLESS（链接无#特殊格式注意）',
    affUrl: 'https://qwerty.yunjiexianaff.com/?code=aycnwNUi',
    affLinkNote: '特殊查询参数格式 URL（不含 # 符号），打开前建议确认直达页面正常渲染',
    couponCode: 'yjx888',
    discountText: '季付及以上 7 折（优惠码 yjx888）',
    rating: 4.5,
    startingPrice: 5.6,
    priceNote: '年付折合约 ¥5.6/月（60GB/月），季付及以上 7 折',
    monthlyPay: false,
    payAsYouGo: false,
    networkType: 'IEPL',
    protocols: ['VLESS'],
    clientSupport: '自研+第三方',
    scenarios: ['极低年付备选', 'VLESS+IEPL', '特殊入口核对'],
    features: [
      '2024 年运营，属同系 5.6 元档成员：IEPL + VLESS + 60GB/月（年付）',
      '自研客户端 + 第三方订阅导入双向支持，季付及以上享 7 折',
      '明确技术细节提示：其官方推广入口 URL 与大多数站点不同，缺少 `#` 符号'
    ],
    pros: [
      '同等 5.6 元级别配置，适合在同类满额或维护时充当备用注册备选',
      '协议与双客户端兼容规格清晰明确'
    ],
    cons: [
      'URL 路由格式缺少 `#`，且清单多处存在两版邀请码记录（aycnwNUi / HBaZ91c6），注册请先核对网页能正常加载面板',
      '无独立测速原图，同质化极高，优先度不如大佬云或闪电鼠'
    ],
    speedRating: 'A',
    recommendedBadge: '5.6元备选·无#入口提醒',
    reviewUrl: '/reviews/yunjiexian',
    badgeColor: 'amber',
    trafficStarting: '60GB / 月 (年付折算)',
    establishedYear: '2024',
    paymentMethods: ['支付宝', '微信', 'USDT'],
    plans: [
      { name: '云界线 · 年付轻量档', cycle: '年付', price: '约 ¥67.2', traffic: '60GB/月', note: '折合 ¥5.6/月 · 季付及以上7折' }
    ],
    dataStatus: 'vendor'
  },
  {
    id: 'liulianyun',
    rank: 24,
    tier: 'main',
    name: '榴莲云',
    tagline: '2024 年运营 · 年付约 ¥5.6/月 60GB · IEPL 专线（协议未统一标注款）',
    affUrl: 'https://qwerty.liulianyunaff.com#/?code=hS5pvbfE',
    couponCode: 'll88',
    discountText: '季付及以上 7 折（优惠码 ll88）',
    rating: 4.5,
    startingPrice: 5.6,
    priceNote: '年付折合约 ¥5.6/月（60GB/月），季付及以上 7 折',
    monthlyPay: false,
    payAsYouGo: false,
    networkType: 'IEPL',
    protocols: ['待核实 (清单正反两处信息冲突，未统一标注)'],
    clientSupport: '自研+第三方',
    scenarios: ['极低年付备选', '自研登录即用', '不挑协议轻量场景'],
    features: [
      '2024 年运行，同属 5.6 元低预算年付区间（IEPL 专线 / 60GB 月流量 / 双端支持）',
      '季付及以上 7 折优惠，注册域名域名带 `#/?code=`（但域名与#间无斜杠，点击需留意跳转）'
    ],
    pros: [
      '具备极低年付门槛与双端支持，对只图开客户端用一下的极限低预算场景可用'
    ],
    cons: [
      '是 5.6 元五家中「底层协议类型品牌资料未统一公开明确」的型号（正文中同时提示未明/VLESS），若对 Clash/sing-box 特定协议有硬要求建议改看闪电鼠或大佬云',
      '无独立测速截图与解锁列表'
    ],
    speedRating: 'A',
    recommendedBadge: '5.6元 · 协议未统一',
    reviewUrl: '/reviews/liulianyun',
    badgeColor: 'amber',
    trafficStarting: '60GB / 月 (年付折算)',
    establishedYear: '2024',
    paymentMethods: ['支付宝', '微信', 'USDT'],
    plans: [
      { name: '榴莲云 · 年付基础档', cycle: '年付', price: '约 ¥67.2', traffic: '60GB/月', note: '折合 ¥5.6/月 · 季付及以上7折' }
    ],
    dataStatus: 'partial',
    vendorNote: '清单特别注明品牌资料中协议类型未统一提供，极客分流用户建议优先生效信息更明确的闪电鼠或大佬云。'
  },
  {
    id: 'shenxing',
    rank: 25,
    tier: 'main',
    name: '神行加速',
    tagline: '2024 年运营 · 年付约 ¥14/月 120GB 中档容量 · IEPL + VLESS + 新人 7 折',
    affUrl: 'https://qwerty.shenxingaff.com/#/?code=gawDQqVE',
    couponCode: 'xs0077',
    discountText: '新用户 7 折优惠码 xs0077',
    rating: 4.7,
    startingPrice: 14,
    priceNote: '年付折合约 ¥14/月（120GB/月），月均流量为 5.6 元档（60GB）的两倍',
    monthlyPay: false,
    payAsYouGo: false,
    networkType: 'IEPL',
    protocols: ['VLESS'],
    clientSupport: '自研+第三方',
    scenarios: ['14元档 120GB 中等流量', '新用户7折年付', 'IEPL+VLESS'],
    features: [
      '2024 年运营，明确卡位在 5.6 元（60GB）与 20 元（120~150GB）之间的 ¥14 中档区间',
      '采用 IEPL 专线 + VLESS 协议，支持自研客户端及第三方开源订阅导入',
      '明确给出「新用户 7 折」优惠（优惠码 xs0077），年付折算后性价比提升'
    ],
    pros: [
      '流量直接给到 120GB/月（同系 5.6 元平价组的两倍），适合中等看片与开发更新需求',
      '新用户首购 7 折优惠幅度比常规 9 折更明显'
    ],
    cons: [
      '¥14/月系年付折算价口径，且尚无本站独立测速原图与专项解锁表',
      '与 18~20 元真纯月付竞品（如光年梯/极连云/一翻云）相比，年付锁定流动性略差'
    ],
    speedRating: 'A+',
    recommendedBadge: '¥14/120GB · 新人7折',
    reviewUrl: '/reviews/shenxing',
    badgeColor: 'green',
    trafficStarting: '120GB / 月 (年付折算)',
    establishedYear: '2024',
    paymentMethods: ['支付宝', '微信', 'USDT'],
    plans: [
      { name: '神行加速 · 年付标准档', cycle: '年付', price: '约 ¥168', traffic: '120GB/月', note: '折合 ¥14/月 · 支持新人 7 折券 xs0077' }
    ],
    dataStatus: 'vendor'
  },
  {
    id: 'huanqiuti',
    rank: 26,
    tier: 'main',
    name: '环球梯',
    tagline: '2024 年运营 · 年付约 ¥5.6/月 60GB · IEPL + VLESS（无#入口提醒）',
    affUrl: 'https://qwerty.huanqiutiaff.com/?code=9I4KRNPH',
    affLinkNote: '无 # 的 URL 参数形式，建议先点开确认面板加载稳定再注册',
    couponCode: 'HQ66',
    discountText: '季付及以上 7 折（优惠码 HQ66）',
    rating: 4.5,
    startingPrice: 5.6,
    priceNote: '年付折合约 ¥5.6/月（60GB/月），季付及以上 7 折',
    monthlyPay: false,
    payAsYouGo: false,
    networkType: 'IEPL',
    protocols: ['VLESS'],
    clientSupport: '自研+第三方',
    scenarios: ['极低年付备用', 'VLESS+IEPL', '双端兼容'],
    features: [
      '2024 年上线，IEPL 专线 + VLESS 协议，支持自研客户端和第三方订阅导入',
      '年付折算约 ¥5.6/月 含 60GB 月度流量，季付及以上享 7 折（优惠码 HQ66）'
    ],
    pros: [
      '拥有清晰的 VLESS 协议标注与季付以上 7 折幅度'
    ],
    cons: [
      '同属 URL 不带 `#` 的异常格式分组（与云界线一致），注册前需核验打开情况',
      '参数几乎复刻大佬云/闪电鼠，且缺乏实测图片支撑'
    ],
    speedRating: 'A',
    recommendedBadge: '5.6元 · 无#链接格式',
    reviewUrl: '/reviews/huanqiuti',
    badgeColor: 'amber',
    trafficStarting: '60GB / 月 (年付折算)',
    establishedYear: '2024',
    paymentMethods: ['支付宝', '微信', 'USDT'],
    plans: [
      { name: '环球梯 · 年付轻量档', cycle: '年付', price: '约 ¥67.2', traffic: '60GB/月', note: '折合 ¥5.6/月 · 季付及以上7折' }
    ],
    dataStatus: 'vendor'
  },
  {
    id: 'yinxingren',
    rank: 27,
    tier: 'main',
    name: '隐形人',
    tagline: '企业级 IPLC 专线 · 仅专属客户端(无订阅链接) · 星耀年付 ¥109/月付 ¥24(144GB)',
    affUrl: 'https://yinxingren1.invisibleaff.com/#/?code=kcyEeoJT',
    couponCode: 'moon80',
    altCouponCode: 'yxr888',
    discountText: '8 折优惠码 moon80（清单首行亦标注 yxr888）',
    rating: 4.6,
    startingPrice: 9.08,
    priceNote: '星耀风暴年付 ¥109/年（¥9.08/月 · 80GB/月）；白银纯月付 ¥24/月（144GB/月）',
    monthlyPay: true,
    payAsYouGo: true,
    networkType: 'IPLC',
    protocols: ['未公开标注 (仅官方专属客户端内部调度)'],
    clientSupport: '仅自研客户端',
    scenarios: ['仅专属App免折腾', '大流量高阶包至1.6T', '一次性不限时包', '4K/8K宣称'],
    features: [
      '2024 年运营，企业级 IPLC 专线直连，全平台官方一键专属客户端登录即用',
      '不限速且套餐跨度极深：白银(144G) 到 钻石穹顶(1.6TB)、王者定制(¥680)及三档一次性流量包（至1TB）',
      '品牌资料声明可解锁 Netflix/HBO/ChatGPT/Spotify，节点涵盖港/日/美/新/台'
    ],
    pros: [
      '月付起步白银纪元即给 144GB（¥24），更有 160G/420G/1TB 一次性包满足大流量零过期需求',
      '若使用官方客户端则省去所有订阅 URL 与规则维护步骤'
    ],
    cons: [
      '明确「不提供第三方订阅链接」，Clash Verge / Shadowrocket / 软路由自配用户无法使用',
      '协议未标且 2026-10-19 测速表格全项为「—」（暂无实测数）；优惠码存在 moon80(8折) 与 yxr888 两处记录'
    ],
    speedRating: '待测',
    recommendedBadge: '专属端大包 · 无第三方订阅',
    reviewUrl: '/reviews/yinxingren',
    badgeColor: 'purple',
    trafficStarting: '80GB/月(年付) / 144GB/月(白银月付)',
    establishedYear: '2024',
    paymentMethods: ['支付宝', '微信', 'USDT'],
    plans: [
      { name: '星耀风暴 365天不熄', cycle: '年付', price: '¥109', traffic: '80GB/月', note: '折合 ¥9.08/月' },
      { name: '隐形人 · 白银纪元', cycle: '月付', price: '¥24', traffic: '144GB/月' },
      { name: '隐形人 · 黄金序列', cycle: '月付', price: '¥48', traffic: '360GB/月' },
      { name: '隐形人 · 铂金至臻', cycle: '月付', price: '¥105', traffic: '750GB/月' },
      { name: '隐形人 · 钻石穹顶', cycle: '月付', price: '¥185', traffic: '1.6TB/月' },
      { name: '王者定制版', cycle: '月付', price: '¥680', traffic: '500GB/月' },
      { name: '一次性流量包 (小/标准/精英)', cycle: '一次性', price: '¥229 / ¥549 / ¥1199', traffic: '160G / 420G / 1TB' }
    ],
    benchmarks: [
      { region: '香港 / 日本 / 美国 / 新加坡 / 台湾', latency: '—', download: '—', dateNote: '2026-10-19 清单无实测数值 · 待补测' }
    ],
    unlockSummary: {
      supported: ['ChatGPT', 'Netflix', 'Disney+', 'YouTube', 'HBO Max', 'Spotify'],
      nodeDependent: ['Claude', 'Gemini', 'TikTok']
    },
    dataStatus: 'vendor'
  },
  {
    id: 'tiziyun',
    rank: 28,
    tier: 'main',
    name: '梯子云',
    tagline: '2025 年运营 · 小白一键登录自研端 + 通用订阅双支持 · 60+节点 · 年付 ≈¥7.4/月',
    affUrl: 'https://tiziyun3.ladderaff.com/#/?code=7EmnpHs0',
    couponCode: 'tiziyun',
    discountText: '专属优惠码 tiziyun',
    rating: 4.7,
    startingPrice: 7.4,
    priceNote: '年付折合约 ¥7.4/月（60GB/月），兼享全平台自研端与通用第三方订阅双支持',
    monthlyPay: false,
    payAsYouGo: false,
    networkType: 'IEPL',
    protocols: ['VLESS'],
    clientSupport: '自研+第三方',
    scenarios: ['纯新手小白一键端', '60+多节点池', '在线工单客服', 'IEPL+VLESS'],
    features: [
      '2025 年运营，专门强调整体自研全平台客户端「小白零门槛一键登录」体验',
      '同时保留标准通用订阅（优于隐形人等仅封闭专属客户端的品牌）',
      '品牌资料声明具备 60+ 节点、2Gbps+ 独立带宽（含 500Mbps 高峰冗余）与海外团队工单维护'
    ],
    pros: [
      '少有的在新手自研易用度与资深玩家通用订阅之间完全不妥协的双支持型号',
      '覆盖港/日/新/美/台五大核心枢纽，价格下探至 ¥7.4/月区间'
    ],
    cons: [
      '尚无独立单日测速抓包图片与真实 RegionRestriction 验证表；资料内「完美解锁」系商家宣称，需标注厂商口径并建议实测核对',
      '2025 年成立时间偏新，大额长周期投入仍宜审慎'
    ],
    speedRating: 'A+',
    recommendedBadge: '零门槛自研+订阅双支持',
    reviewUrl: '/reviews/tiziyun',
    badgeColor: 'green',
    trafficStarting: '60GB / 月 (年付折算)',
    establishedYear: '2025',
    paymentMethods: ['支付宝', '微信', 'USDT'],
    plans: [
      { name: '梯子云 · 年付基础档', cycle: '年付', price: '约 ¥88.8', traffic: '60GB/月', note: '折合 ¥7.4/月（以官网最新定价为准）' }
    ],
    unlockSummary: {
      supported: [],
      nodeDependent: ['Netflix / Disney+ / TikTok / ChatGPT / Claude (品牌资料显示适配，尚缺独立抓包验证)']
    },
    dataStatus: 'vendor'
  }
]
