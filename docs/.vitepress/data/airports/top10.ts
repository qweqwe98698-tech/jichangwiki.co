import type { AirportItem } from './types'

export const top10Airports: AirportItem[] = [
  {
    id: 'guangsuyun',
    rank: 1,
    isTop10: true,
    tier: 'top10',
    name: '光速云 (GuangSuCloud)',
    tagline: '2020 年起老牌运营 · 第一主推 · IEPL + 企业内网双专线 · VLESS 与双端兼容',
    affUrl: 'https://sahude.gsyvipaff.com/#/?code=keqgvT5Y',
    couponCode: 'AMM',
    discountText: '新人优惠码（按官网实时结账显示）',
    rating: 4.9,
    startingPrice: 8.25,
    priceNote: '轻量年付 ¥99/年（折合 ¥8.25/月 · 69GB/月）；纯月付极速版 ¥25/月（168GB/月）',
    monthlyPay: true,
    payAsYouGo: true,
    networkType: 'IEPL',
    protocols: ['VLESS', 'Shadowsocks'],
    clientSupport: '自研+第三方',
    scenarios: ['长期主力稳定', 'ChatGPT/Claude', 'Netflix/Disney+ 4K', '跨境办公/TikTok'],
    features: [
      '2020 年运营至今老牌团队，7×24 小时运维支持',
      'IEPL 专线 + 企业级内网专线（双线路架构）',
      '11+ 地区节点（HK×20/TW×5/JP×10/SG×10/US×10/欧亚等）',
      '自研客户端 + 完整支持 Clash Verge Rev / Shadowrocket 订阅'
    ],
    pros: [
      '兼备 2026-08-11 54节点测速图与 2026-08-19 电信/移动/联通 2G 三网 62 节点 + 70 节点 VLESS 多维实测解锁证据',
      '套餐跨度覆盖 ¥147 斯诺克永久 247GB、¥99 年付 69GB/月 到 ¥25~¥680/月 独享原生 IP 定制版',
      '不限设备同时连接，同时提供零门槛自研端与标准第三方开源端订阅'
    ],
    cons: [
      '¥8.25/月系 ¥99/年轻量版折算参考成本（不打折），纯按月付门槛为极速版 ¥25/月（168GB）',
      '2026-08-19 三网 62 节点实测中，香港专线 OpenAI 为「仅APP(HK)」、Gemini 在多地区失败（主要靠新加坡/马来西亚/土耳其解锁），需按节点实测挑选'
    ],
    speedRating: 'S+',
    recommendedBadge: 'Top 1 · 第一主推旗舰',
    reviewUrl: '/reviews/guangsuyun',
    badgeColor: 'cyan',
    trafficStarting: '69GB/月(年付) / 168GB/月(极速月付)',
    establishedYear: '2020',
    paymentMethods: ['支付宝', '微信', 'USDT'],
    speedtestImage: '/images/speedtest/guangsuyun.png',
    testedAt: '2026-08-11 & 2026-08-19',
    testToolEnv: 'MAI-TEST-BOT (SS 54节点) & MiaoKo 三网 2G/9G (62/70节点)',
    testGallery: [
      {
        label: '08-11 54节点测速',
        src: '/images/speedtest/guangsuyun.png',
        alt: '光速云 2026-08-11 节点测速实测截图（MAI-TEST-BOT 珠海联通 5Gbps）',
        testedAt: '2026-08-11 14:32:56 (CST)',
        toolEnv: 'MAI-TEST-BOT 2.0.0-dev · 珠海联通 5Gbps · 32线程',
        kind: 'speedtest',
        caption: 'Shadowsocks 54 节点单日测速：香港03~19 约 54~75MB/s（HK02 为 0B 已保留原貌），日新台美约 52~73MB/s 平均吞吐。'
      },
      {
        label: '08-19 电信2G解锁',
        src: '/images/unlock/guangsuyun-telecom-2g.jpg',
        alt: '光速云 2026-08-19 长沙电信 2Gbps 62节点测速与 Disney/Netflix/YouTube/OpenAI/Gemini 解锁截图',
        testedAt: '2026-08-19 12:13:01 (CST)',
        toolEnv: 'MiaoKo · 长沙电信 @ 2Gbps · 6线程 · 62/62 节点',
        kind: 'mixed',
        caption: '长沙电信 2G 62节点：HK TLS RTT 20~31ms（avg ~40MB/s）、JP avg 40~49MB/s；Netflix/YouTube 全绿，OpenAI 香港仅APP（美日新台解锁），Gemini 新加坡/土耳其/大马解锁。'
      },
      {
        label: '08-19 移动2G解锁',
        src: '/images/unlock/guangsuyun-mobile-2g.jpg',
        alt: '光速云 2026-08-19 广西移动 2Gbps 62节点测速与流媒体AI解锁截图',
        testedAt: '2026-08-19 12:13:50 (CST)',
        toolEnv: 'MiaoKo · 广西移动 @ 2Gbps · 6线程 · 62/62 节点',
        kind: 'mixed',
        caption: '广西移动 2G 62节点：新加坡/日本 avg 达 52~53MB/s（峰值 58MB/s），香港专线 22~32ms（avg 37~52MB/s），德国01 43KB 异常处理均完整保留。'
      },
      {
        label: '08-19 联通2G解锁',
        src: '/images/unlock/guangsuyun-unicom-2g.jpg',
        alt: '光速云 2026-08-19 河北联通 2Gbps 62节点测速与流媒体AI解锁截图',
        testedAt: '2026-08-19 12:13:58 (CST)',
        toolEnv: 'MiaoKo · 河北联通 @ 2Gbps · 6线程 · 62/62 节点',
        kind: 'mixed',
        caption: '河北联通 2G 62节点：SG/HK/JP 平均 25~41MB/s，美欧小包多区域节点可用，五项平台解锁表现与电信/移动端高度一致。'
      },
      {
        label: '08-19 VLESS/AnyTLS流媒体',
        src: '/images/unlock/guangsuyun-vless-media.jpg',
        alt: '光速云 2026-08-19 70节点 VLESS 与 AnyTLS 11项流媒体及 OpenAI 解锁矩阵图',
        testedAt: '2026-08-19 12:18:40 (CST)',
        toolEnv: 'MiaoKo · 珠海联通 9Gbps 单线程 · 70/70 节点 (VLESS + AnyTLS)',
        kind: 'unlock',
        caption: '70 节点 11 项流媒体专项矩阵：JP/US/HK 全解锁 Netflix/Disney+，HK TikTok 大多标识 ALISG，新加坡/台湾 YouTube 实测显示送中(CN)，OpenAI 在主流地区多为绿锁解锁。'
      },
      {
        label: '08-19 VLESS订阅速度',
        src: '/images/unlock/guangsuyun-vless-speed.jpg',
        alt: '光速云 2026-08-19 70节点 VLESS 单线程极限测速图',
        testedAt: '2026-08-19 12:20:10 (CST)',
        toolEnv: 'MiaoKo · 珠海联通 9Gbps 单线程 · 70/70 VLESS 节点',
        kind: 'speedtest',
        caption: 'VLESS 单线程速率图：香港 avg ~375~424MB/s（峰值 500MB/s）、美国 avg ~313~370MB/s、新加坡 avg ~220~315MB/s、日本 avg ~98~104MB/s（US02 为 1.6KB 如实保留）。'
      }
    ],
    plans: [
      { name: '致敬斯诺克147永久套餐', cycle: '一次性', price: '¥147', traffic: '247GB 永久不过期', note: '不打折' },
      { name: '光速云 · 轻量版', cycle: '年付', price: '¥99', traffic: '69GB/月', note: '约 ¥8.25/月 · 不打折' },
      { name: '光速云 · 极速版', cycle: '月付', price: '¥25', traffic: '168GB/月', note: '半年9折 / 年8折 / 两年75折 / 三年7折' },
      { name: '光速云 · 流光版', cycle: '月付', price: '¥34', traffic: '268GB/月', note: '支持长周期折上折' },
      { name: '光速云 · 量子版', cycle: '月付', price: '¥68', traffic: '568GB/月', note: '全节点×1倍率 · 不限设备' },
      { name: '光速云 · 无界版', cycle: '月付', price: '¥138', traffic: '900GB/月', note: '大流量跨境团队主力' },
      { name: '光速云 · 定制套餐', cycle: '月付', price: '¥680', traffic: '500GB/月', note: '独享原生 IP / 独立带宽按需部署' }
    ],
    benchmarks: [
      { region: '香港', latency: '22ms', download: '529Mbps', dateNote: '2026-10-19 原文标注 · 非晚高峰' },
      { region: '台湾', latency: '41ms', download: '114Mbps', dateNote: '2026-10-19 原文标注 · 非晚高峰' },
      { region: '新加坡', latency: '46ms', download: '387Mbps', dateNote: '2026-10-19 原文标注 · 非晚高峰' },
      { region: '日本', latency: '57ms', download: '135Mbps', dateNote: '2026-10-19 原文标注 · 非晚高峰' },
      { region: '美国', latency: '143ms', download: '18Mbps', dateNote: '2026-10-19 原文标注 · 非晚高峰' }
    ],
    benchmarkDisclaimer: '以上文本测速表来自 2026-10-19 品牌资料参考（明确标注非晚高峰）；实测抓包可互证上文 08-11 及 08-19 电信/移动/联通多组原图。',
    unlockSummary: {
      supported: ['Netflix', 'Disney+', 'YouTube (HK/JP/US)', 'ChatGPT/OpenAI (非HK/部分地区)', 'Claude', 'HBO Max', 'TikTok (JP/SG/US)'],
      nodeDependent: ['ChatGPT 香港节点 (08-19图显示仅APP)', 'Gemini (08-19图显示新加坡/土耳其/大马解锁)', 'YouTube 新加坡/台湾 (VLESS图存在送中CN)'],
      note: '实测截图显示不同协议分组（SS 62节点 vs VLESS 70节点）解锁策略存在差异，AI 访问建议优先绑定新加坡或美国专线节点。'
    },
    dataStatus: 'measured'
  },
  {
    id: 'muguang',
    rank: 2,
    isTop10: true,
    tier: 'top10',
    name: '暮光加速',
    tagline: '2023 年运营 · Top 2 · BGP 智能调度 + 专线级出口 · 全平台多设备覆盖',
    affUrl: 'https://varnexa.twilightaff.com/#/?code=D1LHglg3',
    couponCode: 'muguang5555',
    discountText: '专属优惠码（以官方结账实显为准）',
    rating: 4.8,
    startingPrice: 9.08,
    priceNote: '年付轻量版 ¥109/年（折合 ¥9.08/月 · 70GB/月）；基础月付 ¥20/月（120GB/月）',
    monthlyPay: true,
    payAsYouGo: true,
    networkType: 'BGP中转',
    protocols: ['多协议专线出口（以官网面板为准）'],
    clientSupport: '自研+第三方',
    scenarios: ['全平台跨设备协同', '团队/家庭共享', 'Netflix/HBO/Disney+', '不限时按量备用'],
    features: [
      '2023 年上线运营，支持 Windows/macOS/iOS/Android/Linux 全平台',
      'BGP 智能调度结合专线级出口，多设备同时在线不设严苛踢线',
      '涵盖 ¥109 年付、¥20~¥180 月付、不限时流量包与 ¥600 独享定制节点',
      '官方宣称配备 7×24 小时真人客服支持'
    ],
    pros: [
      '套餐体系完整，兼顾轻量年付（¥109）、纯月付试错（¥20/120GB）与不限时一次性流量包（150G/400G/800G）',
      '适合需要全平台（含 Linux 桌面或开发团队）多端并发访问的用户'
    ],
    cons: [
      '原文「幕光加速-节点测速实测.png」经核验实为快狸 PNG 误命名，本站不作张冠李戴，暮光加速独立高清测速截图尚待独立补充采集',
      '优惠码 muguang5555 部分渠道资料提示无公开折扣说明，下单前建议核对结账金额'
    ],
    speedRating: 'A+',
    recommendedBadge: 'Top 2 · 全平台多设备',
    reviewUrl: '/reviews/muguang',
    badgeColor: 'purple',
    trafficStarting: '70GB/月(年付) / 120GB/月(月付)',
    establishedYear: '2023',
    paymentMethods: ['支付宝', '微信', 'USDT'],
    plans: [
      { name: '暮光 · 年付轻量版', cycle: '年付', price: '¥109', traffic: '70GB/月', note: '折合约 ¥9.08/月' },
      { name: '暮光 · 基础版', cycle: '月付', price: '¥20', traffic: '120GB/月' },
      { name: '暮光 · 标准版', cycle: '月付', price: '¥40', traffic: '240GB/月' },
      { name: '暮光 · 旗舰版', cycle: '月付', price: '¥100', traffic: '700GB/月' },
      { name: '暮光 · 至尊版', cycle: '月付', price: '¥180', traffic: '1500GB/月' },
      { name: '暮光 · 不限时轻量包', cycle: '一次性', price: '¥219', traffic: '150GB 一次性' },
      { name: '暮光 · 不限时标准包', cycle: '一次性', price: '¥529', traffic: '400GB 一次性' },
      { name: '暮光 · 不限时大容量包', cycle: '一次性', price: '¥959', traffic: '800GB 一次性' },
      { name: '独享私人定制节点', cycle: '月付', price: '¥600', traffic: '500GB/月' }
    ],
    benchmarks: [
      { region: '香港', latency: '26ms', download: '509Mbps', dateNote: '2026-10-19 原文标注 · 非晚高峰' },
      { region: '台湾', latency: '40ms', download: '107Mbps', dateNote: '2026-10-19 原文标注 · 非晚高峰' },
      { region: '新加坡', latency: '43ms', download: '419Mbps', dateNote: '2026-10-19 原文标注 · 非晚高峰' },
      { region: '日本', latency: '53ms', download: '150Mbps', dateNote: '2026-10-19 原文标注 · 非晚高峰' },
      { region: '美国', latency: '160ms', download: '19Mbps', dateNote: '2026-10-19 原文标注 · 非晚高峰' }
    ],
    benchmarkDisclaimer: '暂无暮光加速独立高清抓包图片（已剔除误命名的外部 PNG）；上表为 2026-10-19 非晚高峰资料数值，购买前建议优先买 ¥20 月付基础版自测。',
    unlockSummary: {
      supported: ['ChatGPT', 'Claude', 'Netflix', 'Disney+', 'YouTube', 'HBO Max', 'TikTok', 'Spotify'],
      nodeDependent: ['Gemini (视节点而定)'],
      note: '来自品牌清单资料声明，尚缺独立 RegionRestriction 实测图复核。'
    },
    dataStatus: 'vendor'
  },
  {
    id: 'flycat',
    rank: 3,
    isTop10: true,
    tier: 'top10',
    name: '飞猫云',
    tagline: '2023 年运营 · Top 3 · 年付折合 ¥7/月学生轻量版 · 专属客户端免折腾',
    affUrl: 'https://guangs.flycataff.com/#/?code=6uq0Xe9y',
    couponCode: 'flycat888',
    discountText: '专属 8 折优惠码（以官方限定周期为准）',
    rating: 4.8,
    startingPrice: 7,
    priceNote: '学生年付 ¥84/年（折合 ¥7/月 · 50GB/月）；星耀纯月付 ¥25/月（150GB/月）',
    monthlyPay: true,
    payAsYouGo: true,
    networkType: 'IEPL',
    protocols: ['VLESS', 'Shadowsocks'],
    clientSupport: '仅自研客户端',
    scenarios: ['新手免折腾即用', '学生轻量文献查询', 'AI与基础视频', '不限时1TB包'],
    features: [
      '2023 年稳定上线，年付学生版仅 ¥84/年（合 ¥7/月 50GB）极低门槛',
      '2026 新版强调官方专属客户端下载登录即用，免找订阅配置',
      '高阶月付星耀/星环/银河/宇宙版覆盖 150GB ~ 1000GB 大流量'
    ],
    pros: [
      '保留 2026-08-11 MAI-TEST-BOT 真实高清测速原图，非虚拟宣传参数',
      '学习与新手友好：¥84 学生年付对轻度查询/写代码/邮件成本极低，也有 150GB 月付大包及 ¥680 1TB 永久包'
    ],
    cons: [
      '2026-10 新资料指出以专属客户端登录为主、并非极客向开放多端调优型机场（若重度依赖 Clash Verge 自定义分流请购前确认订阅导出状态）',
      '定位侧重省事稳定，不以极限 10Gbps 跑分见长'
    ],
    speedRating: 'A+',
    recommendedBadge: 'Top 3 · 7元学生门槛',
    reviewUrl: '/reviews/flycat',
    badgeColor: 'amber',
    trafficStarting: '50GB/月(年付) / 150GB/月(月付)',
    establishedYear: '2023',
    paymentMethods: ['支付宝', '微信', 'USDT'],
    speedtestImage: '/images/speedtest/flycat.png',
    testedAt: '2026-08-11 08:52:30',
    testToolEnv: 'MAI-TEST-BOT 2.0.0-dev · 珠海联通 5Gbps · Shadowsocks',
    plans: [
      { name: '飞猫 · 学生版', cycle: '年付', price: '¥84', traffic: '50GB/月', note: '折合 ¥7/月' },
      { name: '飞猫 · 星耀版', cycle: '月付', price: '¥25', traffic: '150GB/月' },
      { name: '飞猫 · 星环版', cycle: '月付', price: '¥45', traffic: '300GB/月' },
      { name: '飞猫 · 银河版', cycle: '月付', price: '¥85', traffic: '600GB/月' },
      { name: '飞猫 · 宇宙版', cycle: '月付', price: '¥150', traffic: '1000GB/月' },
      { name: '飞猫 · 不限时套餐', cycle: '一次性', price: '¥680', traffic: '1000GB 一次性' },
      { name: '飞猫 · 定制套餐', cycle: '月付', price: '¥550', traffic: '500GB/月' }
    ],
    benchmarks: [
      { region: '香港', latency: '21ms', download: '526Mbps', dateNote: '2026-10-19 原文标注 · 非晚高峰' },
      { region: '台湾', latency: '41ms', download: '116Mbps', dateNote: '2026-10-19 原文标注 · 非晚高峰' },
      { region: '新加坡', latency: '45ms', download: '413Mbps', dateNote: '2026-10-19 原文标注 · 非晚高峰' },
      { region: '日本', latency: '54ms', download: '138Mbps', dateNote: '2026-10-19 原文标注 · 非晚高峰' },
      { region: '美国', latency: '178ms', download: '14Mbps', dateNote: '2026-10-19 原文标注 · 非晚高峰' }
    ],
    unlockSummary: {
      supported: ['ChatGPT', 'Claude', 'Netflix', 'Disney+', 'YouTube', 'HBO Max', 'TikTok', 'Spotify'],
      nodeDependent: ['Gemini (视节点而定)']
    },
    dataStatus: 'measured'
  },
  {
    id: 'weifeng',
    rank: 4,
    isTop10: true,
    tier: 'top10',
    name: '微风网络',
    tagline: '2023 年运营 · Top 4 · IEPL + VLESS 入门性价比 · 含 50 节点 9Gbps 真实测速图',
    affUrl: 'https://edp01.breezenetaff.com/#/?code=t3huofyI',
    couponCode: 'flat888',
    discountText: '专属 9 折优惠码',
    rating: 4.8,
    startingPrice: 11.4,
    priceNote: '清风年付 ¥137/年（约 ¥11.4/月 · 100GB/月；早期资料提及7元起步档）；月付 ¥27/月（200GB/月）',
    monthlyPay: true,
    payAsYouGo: true,
    networkType: 'IEPL',
    protocols: ['VLESS'],
    clientSupport: '自研+第三方',
    scenarios: ['性价比专线', 'ChatGPT/Claude', 'Netflix 4K', '信风/长风不限时'],
    features: [
      'IEPL 专线 + 现代 VLESS 协议，覆盖港/新/日/美/台多地原生 IP 节点',
      '实附 2026-07-19 MiaoKo 珠海联通 9Gbps 50 节点 VLESS 高清测速图（港线多节点 512~546MB/s）',
      '客服 7×24 在线，夜间配备 AI 值守，兼顾年付 100GB/月与不限时信风/长风流量包'
    ],
    pros: [
      '本次新增真实 50 节点 VLESS 实测原图：香港 01~15 平均 512~546MB/s、新加坡多数 194~401MB/s、日本 99~257MB/s',
      '清风年付 ¥137 即提供 100GB/月（较一般 50~60G 年付小包更宽裕），且提供 270G / 570G 不限时流量包'
    ],
    cons: [
      '2026-07-19 实测原图亦如实暴露个别节点异常：台湾02 为 0.00B、日本05 为 8.00KB、美国线 avg 9.9~21MB/s 明显低于亚太节点',
      '纯月付「乘风」起步为 ¥27/月（200GB/月），单月试错客单价略高于 ¥15~¥20 档'
    ],
    speedRating: 'S',
    recommendedBadge: 'Top 4 · 含 VLESS 实测图',
    reviewUrl: '/reviews/weifeng',
    badgeColor: 'cyan',
    trafficStarting: '100GB/月(年付) / 200GB/月(月付)',
    establishedYear: '2023',
    paymentMethods: ['支付宝', '微信', 'USDT'],
    speedtestImage: '/images/speedtest/weifeng.png',
    testedAt: '2026-07-19 18:38:20',
    testToolEnv: 'MiaoKo speed · 珠海联通 9Gbps · 32线程 · 50/50 VLESS',
    testGallery: [
      {
        label: '07-19 50节点VLESS实测',
        src: '/images/speedtest/weifeng.png',
        alt: '微风网络 2026-07-19 50节点 VLESS MiaoKo 测速实测原图',
        testedAt: '2026-07-19 18:38:20 (CST)',
        toolEnv: 'MiaoKo 主端 4.3.3 · 珠海联通 9Gbps 32线程 · 50/50 节点',
        kind: 'speedtest',
        caption: '2026-07-19 傍晚实测 50 个 VLESS 节点：香港 01~15 普遍 512~546MB/s（峰值 619MB/s）；新加坡最高 401MB/s；台湾02 0.00B 与日本05 8.00KB 原样保留。'
      }
    ],
    plans: [
      { name: '清风 (Breeze)', cycle: '年付', price: '¥137', traffic: '100GB/月', note: '折合约 ¥11.4/月' },
      { name: '乘风 (Riding)', cycle: '月付', price: '¥27', traffic: '200GB/月' },
      { name: '破风 (Breaking)', cycle: '月付', price: '¥57', traffic: '500GB/月' },
      { name: '御风 (Mastery)', cycle: '月付', price: '¥127', traffic: '1200GB/月' },
      { name: '信风 · 不限时', cycle: '一次性', price: '¥200', traffic: '270GB 一次性' },
      { name: '长风 · 不限时', cycle: '一次性', price: '¥370', traffic: '570GB 一次性' }
    ],
    benchmarks: [
      { region: '香港', latency: '25ms', download: '546Mbps', dateNote: '2026-10-19 原文标注 · 非晚高峰' },
      { region: '台湾', latency: '40ms', download: '115Mbps', dateNote: '2026-10-19 原文标注 · 非晚高峰' },
      { region: '新加坡', latency: '43ms', download: '384Mbps', dateNote: '2026-10-19 原文标注 · 非晚高峰' },
      { region: '日本', latency: '54ms', download: '131Mbps', dateNote: '2026-10-19 原文标注 · 非晚高峰' },
      { region: '美国', latency: '167ms', download: '17Mbps', dateNote: '2026-10-19 原文标注 · 非晚高峰' }
    ],
    unlockSummary: {
      supported: ['ChatGPT', 'Claude', 'Netflix', 'Disney+', 'YouTube', 'HBO Max', 'TikTok', 'Spotify'],
      nodeDependent: ['Gemini (视节点而定)']
    },
    dataStatus: 'measured'
  },
  {
    id: 'dalaoyun',
    rank: 5,
    isTop10: true,
    tier: 'top10',
    name: '大佬云',
    tagline: '2024 年运营 · Top 5 · 年付约 ¥5.6/月 60GB 极限平价 IEPL + VLESS',
    affUrl: 'https://qwerty.dalaoyunaff.com/#/?code=jCPLmoWN',
    couponCode: 'dly888',
    discountText: '季付及以上 7 折（优惠码 dly888）',
    rating: 4.7,
    startingPrice: 5.6,
    priceNote: '年付折合约 ¥5.6/月（60GB/月），季付及以上可享 7 折',
    monthlyPay: false,
    payAsYouGo: false,
    networkType: 'IEPL',
    protocols: ['VLESS'],
    clientSupport: '自研+第三方',
    scenarios: ['极低预算平价年付', '文字检索与邮件', '轻量 AI/网页'],
    features: [
      '2024 年上线，主推极低单价 ¥5.6/月（年付折算）60GB/月方案',
      '采用 IEPL 专线 + VLESS 协议，支持自研客户端与第三方订阅导入',
      '明确比价特征：属 5.6 元档（同系含闪电鼠/云界线/榴莲云/环球梯）主力代表，注册链接格式标准完整'
    ],
    pros: [
      '预算敏感用户的极限平价入口（年付折合每月不到 6 元即可获得 60GB/月 + IEPL/VLESS 规格）',
      '同时保留自研端与第三方订阅双接入能力，且优惠入口 URL 规范可正常开启'
    ],
    cons: [
      '该极低价系长周期年付分摊结果，非单月月付；60GB 月流量不适合重度 4K 追剧',
      '与闪电鼠、云界线、榴莲云、环球梯参数高度趋同，且暂无本站独立测速原图，需以实际自测体验为准'
    ],
    speedRating: 'A+',
    recommendedBadge: 'Top 5 · 5.6元极限平价',
    reviewUrl: '/reviews/dalaoyun',
    badgeColor: 'amber',
    trafficStarting: '60GB / 月 (年付折算)',
    establishedYear: '2024',
    paymentMethods: ['支付宝', '微信', 'USDT'],
    plans: [
      { name: '大佬云 · 年付基础档', cycle: '年付', price: '约 ¥67.2', traffic: '60GB/月', note: '折合 ¥5.6/月 · 季付及以上7折（以官网实时标价为准）' }
    ],
    dataStatus: 'vendor',
    vendorNote: '与同档闪电鼠/云界线/榴莲云/环球梯同处 5.6 元区间，尚无独立实测图与流媒体分项测试。'
  },
  {
    id: 'xingdaomeng',
    rank: 6,
    isTop10: true,
    tier: 'top10',
    name: '星岛梦',
    tagline: '2020 年老牌运营 · Top 6 · 年付折合 ¥8/月 & 不限时 100G~1T 应急备选标杆',
    affUrl: 'https://guangs.xingdaomeng.com/#/?code=1TynBYnR',
    couponCode: 'nmw888',
    discountText: '专属新人优惠码',
    rating: 4.8,
    startingPrice: 8,
    priceNote: '贴心小包年付 ¥96/年（¥8/月 · 60GB/月）；月付超量 150G ¥25/月；永久不限时 ¥100 起',
    monthlyPay: true,
    payAsYouGo: true,
    networkType: 'IEPL',
    protocols: ['Trojan', 'VLESS', 'Shadowsocks'],
    clientSupport: '自研+第三方',
    scenarios: ['防失联永久不限时备用', '2020 老牌稳健', '多设备家庭/团队', '东南亚/韩节点'],
    features: [
      '2020 年成立至今老牌持续运行，IEPL 专线 + 1 倍倍率不限设备连接',
      '节点除港/台/日/美/新外，额外涵盖韩国与东南亚多地区',
      '提供 100GB(¥100)、300GB(¥300)、1TB(¥600) 三档永久不限时按量流量包及定制包'
    ],
    pros: [
      '6 年运营积淀配合完整不限时按量套餐，是目前最稳妥的「主力断联防失联应急备份」选择之一',
      '保留 2026-08-11 真实 MAI-TEST-BOT 测速快照，全线 1x 倍率不暗藏高倍扣流'
    ],
    cons: [
      '¥8/月价格需年付 ¥96 起购；若选择纯单月试用需直接选 ¥25/月（150GB）起档',
      '08-11 深夜 01:48 测速单日截图仅反映 Shadowsocks 链路样本，不代表全天高峰'
    ],
    speedRating: 'A+',
    recommendedBadge: 'Top 6 · 老牌+不限时备用',
    reviewUrl: '/reviews/xingdaomeng',
    badgeColor: 'amber',
    trafficStarting: '60GB/月(年付) / 150GB/月(月付)',
    establishedYear: '2020',
    paymentMethods: ['支付宝', '微信', 'USDT'],
    speedtestImage: '/images/speedtest/xingdaomeng.png',
    testedAt: '2026-08-11 01:48:13',
    testToolEnv: 'MAI-TEST-BOT 2.0.0-dev · 珠海联通 5Gbps · Shadowsocks',
    plans: [
      { name: '星岛梦 · 贴心小包', cycle: '年付', price: '¥96', traffic: '60GB/月', note: '折合 ¥8/月' },
      { name: '星岛梦 · 超量150G', cycle: '月付', price: '¥25', traffic: '150GB/月' },
      { name: '星岛梦 · 进阶300G', cycle: '月付', price: '¥50', traffic: '300GB/月' },
      { name: '星岛梦 · 闪光500G', cycle: '月付', price: '¥70', traffic: '500GB/月' },
      { name: '星岛梦 · 旗舰1T版', cycle: '月付', price: '¥130', traffic: '1000GB/月' },
      { name: '永久不限时 100G', cycle: '一次性', price: '¥100', traffic: '100GB 一次性' },
      { name: '永久不限时 300G', cycle: '一次性', price: '¥300', traffic: '300GB 一次性' },
      { name: '永久不限时 1TB', cycle: '一次性', price: '¥600', traffic: '1000GB 一次性' },
      { name: '星岛梦 · 定制套餐', cycle: '月付', price: '¥680', traffic: '500GB/月' }
    ],
    benchmarks: [
      { region: '香港', latency: '27ms', download: '504Mbps', dateNote: '2026-10-19 原文标注 · 非晚高峰' },
      { region: '台湾', latency: '41ms', download: '103Mbps', dateNote: '2026-10-19 原文标注 · 非晚高峰' },
      { region: '新加坡', latency: '44ms', download: '411Mbps', dateNote: '2026-10-19 原文标注 · 非晚高峰' },
      { region: '日本', latency: '57ms', download: '136Mbps', dateNote: '2026-10-19 原文标注 · 非晚高峰' },
      { region: '美国', latency: '177ms', download: '18Mbps', dateNote: '2026-10-19 原文标注 · 非晚高峰' }
    ],
    unlockSummary: {
      supported: ['ChatGPT', 'Claude', 'Netflix', 'Disney+', 'YouTube', 'HBO Max', 'TikTok', 'Spotify'],
      nodeDependent: ['Gemini (视节点而定)']
    },
    dataStatus: 'measured'
  },
  {
    id: 'ermaoyun',
    rank: 7,
    isTop10: true,
    tier: 'top10',
    name: '二猫云',
    tagline: '2023 年运营 · Top 7 · 全线 IEPL + 不限设备数 · 月付 ¥20 130GB 稳健定位',
    affUrl: 'https://guangs.2maoyunaff.cc/#/?code=7mjvgGbW',
    couponCode: 'ermao5555',
    discountText: '专属优惠码',
    rating: 4.8,
    startingPrice: 7.42,
    priceNote: '年付小包 ¥89/年（约 ¥7.42/月 · 60GB/月）；白猫纯月付 ¥20/月（130GB/月）',
    monthlyPay: true,
    payAsYouGo: true,
    networkType: 'IEPL',
    protocols: ['VLESS', 'Shadowsocks'],
    clientSupport: '自研+第三方',
    scenarios: ['长期稳定办公', '不限设备共享', 'ChatGPT/Netflix', '不限时100G'],
    features: [
      '2023 年上线，坚持全线 IEPL 专线、主打长期稳定而非低价走量',
      '明确不限设备连接数量，配备海外团队独家定制客户端及标准第三方兼容',
      '同时提供 ¥89 年付小包、¥99/100G 永久不限时包与白猫/橘猫/牛奶猫/黑猫纯月付阶梯'
    ],
    pros: [
      '拥有 2026-08-11 实测测速原图支撑；从不限时包到月付/三年付长周期配置齐备',
      '不限制设备同时在线数量，对电脑+手机+平板多终端家庭很友好'
    ],
    cons: [
      '资料指出节点主攻香港、日本、美国等枢纽，部分时段缺乏新加坡常规站点或需结合实际节点池核对',
      'Claude 与 Gemini 官方未作全节点必解锁承诺，建议月付实测后再上长期包'
    ],
    speedRating: 'S',
    recommendedBadge: 'Top 7 · 全线IEPL不限设备',
    reviewUrl: '/reviews/ermaoyun',
    badgeColor: 'cyan',
    trafficStarting: '60GB/月(年付) / 130GB/月(白猫月付)',
    establishedYear: '2023',
    paymentMethods: ['支付宝', '微信', 'USDT'],
    speedtestImage: '/images/speedtest/ermaoyun.png',
    testedAt: '2026-08-11 10:45:27',
    testToolEnv: 'MAI-TEST-BOT 2.0.0-dev · 珠海联通 5Gbps · Shadowsocks',
    plans: [
      { name: '二猫云 · 不限时套餐', cycle: '一次性', price: '¥99', traffic: '100GB 一次性' },
      { name: '二猫年付小包', cycle: '年付', price: '¥89', traffic: '60GB/月', note: '折合约 ¥7.42/月' },
      { name: '二猫云 · 白猫套餐', cycle: '月付', price: '¥20', traffic: '130GB/月' },
      { name: '二猫云 · 橘猫畅玩版', cycle: '月付', price: '¥40', traffic: '230GB/月' },
      { name: '二猫云 · 牛奶猫尊享版', cycle: '月付', price: '¥80', traffic: '430GB/月' },
      { name: '二猫云 · 黑猫重度用户版', cycle: '月付', price: '¥160', traffic: '850GB/月' }
    ],
    benchmarks: [
      { region: '香港', latency: '22ms', download: '481Mbps', dateNote: '2026-10-19 原文标注 · 非晚高峰' },
      { region: '台湾', latency: '41ms', download: '118Mbps', dateNote: '2026-10-19 原文标注 · 非晚高峰' },
      { region: '新加坡', latency: '46ms', download: '407Mbps', dateNote: '2026-10-19 原文标注 · 非晚高峰' },
      { region: '日本', latency: '53ms', download: '143Mbps', dateNote: '2026-10-19 原文标注 · 非晚高峰' },
      { region: '美国', latency: '134ms', download: '17Mbps', dateNote: '2026-10-19 原文标注 · 非晚高峰' }
    ],
    unlockSummary: {
      supported: ['ChatGPT', 'Netflix', 'Disney+', 'YouTube', 'HBO Max', 'TikTok', 'Spotify'],
      nodeDependent: ['Claude', 'Gemini']
    },
    dataStatus: 'measured'
  },
  {
    id: 'wuyou',
    rank: 8,
    isTop10: true,
    tier: 'top10',
    name: '无忧链接',
    tagline: '2025 年运营 · Top 8 · 年付约 ¥6.58/月轻量 & TikTok 直播电商 · 含晚高峰双实测图',
    affUrl: 'https://wep01.worryfreeaff.com/#/?code=4ZoSbLdL',
    couponCode: 'wuyou666',
    discountText: '专属优惠码',
    rating: 4.8,
    startingPrice: 6.58,
    priceNote: 'MINI年付 ¥79/年（约 ¥6.58/月 · 40GB/月）；舒心纯月付 ¥19/月（100GB/月）',
    monthlyPay: true,
    payAsYouGo: true,
    networkType: 'IEPL',
    protocols: ['VLESS'],
    clientSupport: '仅自研客户端',
    scenarios: ['TikTok跨境电商/直播', '晚高峰高吞吐实测', 'Netflix/Disney+全绿解锁', '不限时100G/300G'],
    features: [
      '实附 2026-07-18 21:40 晚高峰 50 节点 VLESS 实测图 + 21:47 御三家流媒体解锁图',
      '全线节点 1x 无倍率、不限速、不限设备连接数量，含港/新/日/美/台节点池',
      '2026-10 起官方强调专属客户端下载登录即用，免去第三方复杂订阅配置步骤'
    ],
    pros: [
      '拥有 21:40 晚高峰 9Gbps VLESS 真图验证：香港 HKG 01~15 均值高达 518~554MB/s（峰值 638MB/s），御三家流媒体（YT/NF/Disney+）几乎全绿',
      'MINI 年付 ¥79/年极轻量门槛兼顾 TikTok 跨区直连、永久 100G/300G 不限时流量包及 7×24 客服'
    ],
    cons: [
      'MINI 年付仅含 40GB/月且 07-18 解锁原图里「香港HKG-01」YouTube 出现一次送中(CN)（其他49节点正常）、新加坡02 曾见 17.59KB 异常',
      '2026-10 后主推官方专属客户端（不支持第三方开源软件随意导配置的用户需提前了解）'
    ],
    speedRating: 'S+',
    recommendedBadge: 'Top 8 · 晚高峰+解锁双图',
    reviewUrl: '/reviews/wuyou',
    badgeColor: 'green',
    trafficStarting: '40GB/月(年付) / 100GB/月(月付)',
    establishedYear: '2025',
    paymentMethods: ['支付宝', '微信', 'USDT'],
    speedtestImage: '/images/unlock/wuyou-speed.jpg',
    testedAt: '2026-07-18 21:40:48 (晚高峰)',
    testToolEnv: 'MiaoKo · 珠海联通 9Gbps 32线程 · 50/50 VLESS',
    testGallery: [
      {
        label: '07-18 晚高峰 50节点测速',
        src: '/images/unlock/wuyou-speed.jpg',
        alt: '无忧链接 2026-07-18 21:40 晚高峰 50节点 VLESS 实测速度图',
        testedAt: '2026-07-18 21:40:48 (CST)',
        toolEnv: 'MiaoKo speed · 珠海联通 9Gbps 32线程 · 50/50 VLESS',
        kind: 'speedtest',
        caption: '晚高峰 21:40 实测：香港 HKG 15 个节点均值稳定在 518~554MB/s（峰值 638MB/s）；新加坡 SIN-01 352MB/s（SIN-02 17.59KB 原样保留）；日本最高 198MB/s；美国 LAX avg ~12~18MB/s。'
      },
      {
        label: '07-18 御三家流媒体解锁',
        src: '/images/unlock/wuyou-streaming.jpg',
        alt: '无忧链接 2026-07-18 21:47 YouTube Netflix Disney+ 50节点解锁测试图',
        testedAt: '2026-07-18 21:47:23 (CST)',
        toolEnv: 'MiaoKo ynd · 珠海联通 9Gbps 32线程 · 50/50 VLESS',
        kind: 'unlock',
        caption: 'YouTube / Netflix / Disney+ 御三家专项检测：50 节点中除 HKG-01 的 YouTube 标注「送中(CN)」外，港/台/日/新/美所有节点三大平台均实现原生区域绿标解锁。'
      }
    ],
    plans: [
      { name: 'MINI链接', cycle: '年付', price: '¥79', traffic: '40GB/月', note: '折合 ¥6.58/月' },
      { name: '舒心链接', cycle: '月付', price: '¥19', traffic: '100GB/月' },
      { name: '省心链接', cycle: '月付', price: '¥33', traffic: '200GB/月' },
      { name: '随心链接', cycle: '月付', price: '¥77', traffic: '500GB/月' },
      { name: '忘忧链接', cycle: '月付', price: '¥117', traffic: '1000GB/月' },
      { name: '100G 永久不限时无忧链接', cycle: '一次性', price: '¥108', traffic: '100GB 一次性' },
      { name: '300G 永久不限时无忧链接', cycle: '一次性', price: '¥298', traffic: '300GB 一次性' }
    ],
    benchmarks: [
      { region: '香港', latency: '23ms', download: '531Mbps', dateNote: '2026-10-19 原文标注 · 非晚高峰' },
      { region: '台湾', latency: '41ms', download: '107Mbps', dateNote: '2026-10-19 原文标注 · 非晚高峰' },
      { region: '新加坡', latency: '42ms', download: '418Mbps', dateNote: '2026-10-19 原文标注 · 非晚高峰' },
      { region: '日本', latency: '55ms', download: '147Mbps', dateNote: '2026-10-19 原文标注 · 非晚高峰' },
      { region: '美国', latency: '145ms', download: '17Mbps', dateNote: '2026-10-19 原文标注 · 非晚高峰' }
    ],
    unlockSummary: {
      supported: ['YouTube (49/50节点实测)', 'Netflix (50/50实测)', 'Disney+ (50/50实测)', 'ChatGPT', 'Claude', 'TikTok'],
      nodeDependent: ['YouTube 香港01实测出现一次送中(CN)', 'Gemini (视节点而定)']
    },
    dataStatus: 'measured'
  },
  {
    id: 'v2yun',
    rank: 9,
    isTop10: true,
    tier: 'top10',
    name: '唯兔云',
    tagline: '2023 年运营 · Top 9 · 60+ 多节点 + 永久不限时 · 支持专线与多网均衡',
    affUrl: 'https://guangs.v2yunvipaff.com/#/?code=xIutqOBA',
    couponCode: 'weitu666',
    altCouponCode: 'rabbit',
    discountText: '专属优惠码 weitu666（历史记录亦含 rabbit 9折）',
    rating: 4.8,
    startingPrice: 6.66,
    priceNote: '年付限量 ¥79.9/年（¥6.66/月 · 45GB/月）；节假日限时 ¥14.9/月；常规月付 ¥19.9/月（150GB）',
    monthlyPay: true,
    payAsYouGo: true,
    networkType: 'IPLC',
    protocols: ['Trojan', 'VLESS', 'Shadowsocks'],
    clientSupport: '自研+第三方',
    scenarios: ['60+ 大节点冗余池', 'ChatGPT/Claude/Gemini', 'Netflix/TikTok', '永久不限时包'],
    features: [
      '2023 年老稳态运营，配备 60+ 多地区节点池与三网负载均衡机制',
      '同时保留 2026-08-11 MAI-TEST-BOT 单日测速图（13:55 CST）实测依据',
      '涵盖 ¥79.9 年付限量、¥14.9 节日限定、¥19.9 常规月付及 100G/200G/500G 永久不限时包'
    ],
    pros: [
      '1x 倍率不限速、不限设备连接，节点池充沛且支持不限时流量包',
      '新资料确认提供 IPLC/Trojan 专线与主流 AI/流媒体多区覆盖，并兼有海外团队多人客服'
    ],
    cons: [
      '¥14.9/月 100GB 属于节假日限时档位，日常纯月付普通版起步为 ¥19.9/月（150GB）；协议在历史 SS/VLESS 与新版 Trojan 间存在多版本记录',
      '购买时需以结账面板可用档位及优惠码（weitu666 或 rabbit）实际核减为准'
    ],
    speedRating: 'S',
    recommendedBadge: 'Top 9 · 60+ 节点池',
    reviewUrl: '/reviews/v2yun',
    badgeColor: 'green',
    trafficStarting: '45GB/月(年付) / 100~150GB(月付)',
    establishedYear: '2023',
    paymentMethods: ['支付宝', '微信', 'USDT'],
    speedtestImage: '/images/speedtest/v2yun.png',
    testedAt: '2026-08-11 13:55:08',
    testToolEnv: 'MAI-TEST-BOT 2.0.0-dev · 珠海联通 5Gbps · Shadowsocks',
    plans: [
      { name: '唯兔云 · 年付版限量款', cycle: '年付', price: '¥79.9', traffic: '45GB/月', note: '折合 ¥6.66/月' },
      { name: '唯兔云 · 年付加强专线', cycle: '年付', price: '¥120', traffic: '75GB/月' },
      { name: '唯兔云 · 节假日限时开启', cycle: '月付', price: '¥14.9', traffic: '100GB/月', note: '限节假日开放' },
      { name: '唯兔云 · 普通版', cycle: '月付', price: '¥19.9', traffic: '150GB/月' },
      { name: '唯兔云 · 进阶版', cycle: '月付', price: '¥29.9', traffic: '200GB/月' },
      { name: '唯兔云 · 专业版', cycle: '月付', price: '¥59.9', traffic: '500GB/月' },
      { name: '唯兔云 · 至尊版', cycle: '月付', price: '¥119.9', traffic: '1000GB/月' },
      { name: '唯兔云 · 永久不限时', cycle: '一次性', price: '¥100 / ¥160 / ¥340', traffic: '100GB / 200GB / 500GB' }
    ],
    benchmarks: [
      { region: '香港', latency: '27ms', download: '500Mbps', dateNote: '2026-10-19 原文标注 · 非晚高峰' },
      { region: '台湾', latency: '37ms', download: '100Mbps', dateNote: '2026-10-19 原文标注 · 非晚高峰' },
      { region: '新加坡', latency: '44ms', download: '414Mbps', dateNote: '2026-10-19 原文标注 · 非晚高峰' },
      { region: '日本', latency: '56ms', download: '147Mbps', dateNote: '2026-10-19 原文标注 · 非晚高峰' },
      { region: '美国', latency: '179ms', download: '17Mbps', dateNote: '2026-10-19 原文标注 · 非晚高峰' }
    ],
    unlockSummary: {
      supported: ['ChatGPT', 'Claude', 'Netflix', 'Disney+', 'YouTube', 'HBO Max', 'TikTok', 'Spotify'],
      nodeDependent: ['Gemini (视节点而定)']
    },
    dataStatus: 'measured'
  },
  {
    id: 'firefly',
    rank: 10,
    isTop10: true,
    tier: 'top10',
    name: 'Firefly (萤火虫)',
    tagline: 'IPLC + VLESS 原生 IP · Top 10 · 6 档套餐 + 专属客户端（合并原「萤火虫」词条）',
    affUrl: 'https://vip02.fireflyaff.com/#/?code=2n7VURre',
    couponCode: 'firefly',
    discountText: '新用户 8 折（年付版不适用）',
    rating: 4.8,
    startingPrice: 8,
    priceNote: 'Firefly 年付版 ¥96/年（¥8/月 · 60GB/月）；Lite 纯月付 ¥25/月（150GB/月）',
    monthlyPay: true,
    payAsYouGo: true,
    networkType: 'IPLC',
    protocols: ['VLESS'],
    clientSupport: '仅自研客户端',
    scenarios: ['IPLC 晚高峰办公', 'ChatGPT/Meta AI/Gemini', '原生 IP 流媒体', '免翻墙官网'],
    features: [
      '海外技术团队背景（资料称与微风/飞鸟/一云梯同源），全线 IPLC 专线接入',
      '资料显示采用 VLESS + 原生 IP 节点覆盖港/新/日/美，全节点不限速与不限设备数',
      '支持官方专属客户端免配置登录使用，并附 7×24 在线 + 夜间 AI 值守客服'
    ],
    pros: [
      '套餐周期从 ¥96 年付、150G~1000G 多期（含 2年/3年长折最高约64折）到 ¥100 不限时包全覆盖',
      '与资料底部「萤火虫」为同一官方品牌（vip02.fireflyaff.com），本站合并统一入口防止信息重复'
    ],
    cons: [
      '2026-10 起官方标注改用专属客户端登录而不直接提供通用第三方订阅链接，Clash Verge/Shadowrocket 用户需确认',
      '尚无独立单日测速抓包图片上传，清单内「不限速」「原生IP全解锁」属品牌资料宣称，建议先购 ¥25 月付实测'
    ],
    speedRating: 'A+',
    recommendedBadge: 'Top 10 · IPLC原生IP',
    reviewUrl: '/reviews/firefly',
    badgeColor: 'purple',
    trafficStarting: '60GB/月(年付) / 150GB/月(Lite月付)',
    establishedYear: '2024',
    paymentMethods: ['支付宝', 'USDT'],
    plans: [
      { name: 'Firefly 年付版', cycle: '年付', price: '¥96', traffic: '60GB/月', note: '折合 ¥8/月 · 不适用优惠码' },
      { name: 'Firefly Lite', cycle: '月付', price: '¥25', traffic: '150GB/月', note: '另提供季¥67 / 半年¥127 / 年¥240 / 两年¥420 / 三年¥540' },
      { name: 'Firefly Plus', cycle: '月付', price: '¥45', traffic: '300GB/月' },
      { name: 'Firefly Blaze', cycle: '月付', price: '¥85', traffic: '600GB/月' },
      { name: 'Firefly Nova', cycle: '月付', price: '¥150', traffic: '1000GB/月' },
      { name: 'Firefly 不限时', cycle: '一次性', price: '¥100', traffic: '100GB 一次性' }
    ],
    benchmarks: [
      { region: '香港', latency: '27ms', download: '547Mbps', dateNote: '2026-10-19 原文标注 · 非晚高峰' },
      { region: '台湾', latency: '39ms', download: '135Mbps', dateNote: '2026-10-19 原文标注 · 非晚高峰' },
      { region: '新加坡', latency: '42ms', download: '445Mbps', dateNote: '2026-10-19 原文标注 · 非晚高峰' },
      { region: '日本', latency: '57ms', download: '147Mbps', dateNote: '2026-10-19 原文标注 · 非晚高峰' },
      { region: '美国', latency: '143ms', download: '30Mbps', dateNote: '2026-10-19 原文标注 · 非晚高峰' }
    ],
    unlockSummary: {
      supported: ['ChatGPT', 'Claude', 'Netflix', 'Disney+', 'YouTube', 'HBO Max', 'TikTok', 'Spotify'],
      nodeDependent: ['Gemini (视节点而定)']
    },
    dataStatus: 'vendor'
  }
]
