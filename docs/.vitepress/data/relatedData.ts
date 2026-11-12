import { airportsData } from './airportsData'

export interface RelatedLinkItem {
  text: string
  link: string
  category?: string
}

export interface ArticleRelation {
  parent?: { text: string; link: string }
  related: RelatedLinkItem[]
  nextStep?: { text: string; link: string; description: string }
}

export const knowledgeGraph: Record<string, ArticleRelation> = {
  // Recommend Pillar & Cluster
  '/recommend/': {
    parent: { text: '网站首页中心', link: '/' },
    related: [
      { text: '2026 机场综合口碑排行榜', link: '/navigation/ranking', category: '综合榜单' },
      { text: '全 IEPL 物理专线机场精选', link: '/recommend/iepl-airports', category: '高端专线' },
      { text: '便宜高性价比月付机场 (5~15元)', link: '/recommend/cheap-airports', category: '平价预算' },
      { text: '地区节点推荐与延迟对比', link: '/guides/how-to-choose-node', category: '节点选型' }
    ],
    nextStep: {
      text: '42 家机场深度评测档案库（含实测抓包与解锁矩阵）',
      link: '/reviews/',
      description: '查看各服务商单日测速抓包、三网流媒体解锁图、套餐资费结构、优缺点及专属优惠码。'
    }
  },
  '/recommend/best-overall': {
    parent: { text: '2026 机场推荐专题中心', link: '/recommend/' },
    related: [
      { text: '全 IEPL 专线高端方案对比', link: '/recommend/iepl-airports', category: '专线品质' },
      { text: '2026 最新机场网址导航', link: '/navigation/', category: '官网入口' },
      { text: '光速云深度评测报告', link: '/reviews/guangsuyun', category: '品牌实测' },
      { text: 'Clash Verge 订阅导入实战', link: '/clients/clash-verge/import-subscription', category: '客户端教程' }
    ],
    nextStep: {
      text: '新手如何完成首次订阅配置',
      link: '/start/how-to-start',
      description: '选定服务商后，按五步法完成客户端安装、订阅导入与节点测速验证。'
    }
  },
  '/recommend/cheap-airports': {
    parent: { text: '2026 机场推荐专题中心', link: '/recommend/' },
    related: [
      { text: '不限时按量备用机场方案', link: '/recommend/pay-as-you-go', category: '应急备用' },
      { text: '支持纯按月付款服务合集', link: '/navigation/monthly-pay', category: '月付防跑路' },
      { text: '宇宙云平价专线评测', link: '/reviews/yuzhoucloud', category: '品牌实测' },
      { text: '新手选型避坑指南', link: '/guides/beginner-airport', category: '选型必读' }
    ],
    nextStep: {
      text: '唯兔云入门套餐实测详情',
      link: '/reviews/v2yun',
      description: '了解入门平价套餐流量配额、协议兼容性与节点地区分布。'
    }
  },
  '/recommend/iepl-airports': {
    parent: { text: '2026 机场推荐专题中心', link: '/recommend/' },
    related: [
      { text: '什么是 IEPL 内网专线', link: '/network/iepl', category: '线路百科' },
      { text: 'IEPL 与 IPLC 专线差异对比', link: '/network/iepl-vs-iplc', category: '架构对比' },
      { text: 'SOGO 云 IEPL 专线评测', link: '/reviews/sogoyun', category: '品牌实测' },
      { text: '外服游戏低延迟优化指南', link: '/scenarios/gaming', category: '游戏场景' }
    ],
    nextStep: {
      text: '如何选择网络线路（直连/中转/专线）',
      link: '/guides/how-to-choose-network',
      description: '结合晚高峰丢包率与预算差异，判断何时必须升级专线传输。'
    }
  },
  '/recommend/pay-as-you-go': {
    parent: { text: '2026 机场推荐专题中心', link: '/recommend/' },
    related: [
      { text: '高可用防失联备用线路合集', link: '/navigation/backup', category: '备用防失联' },
      { text: '灵猫网络不限时与大流量评测', link: '/reviews/civetnet', category: '品牌实测' },
      { text: '星岛梦按量与年付方案评测', link: '/reviews/xingdaomeng', category: '品牌实测' },
      { text: '节点全部超时 (Timeout) 应急修复', link: '/troubleshooting/all-nodes-timeout', category: '故障排查' }
    ],
    nextStep: {
      text: '节点倍率与流量扣费规则解析',
      link: '/glossary/node-multiplier',
      description: '用好按量计费流量包，先看懂 0.5x / 1x / 2x 节点倍率计算方式。'
    }
  },
  '/recommend/chatgpt-airport': {
    parent: { text: '2026 机场推荐专题中心', link: '/recommend/' },
    related: [
      { text: 'ChatGPT 访问 1020 风控排查', link: '/scenarios/chatgpt', category: 'AI 场景' },
      { text: 'Claude 防封号节点环境要求', link: '/scenarios/claude', category: 'AI 场景' },
      { text: '原生 IP 与广播 IP 区分方法', link: '/network/native-vs-broadcast-ip', category: 'IP 纯净度' },
      { text: 'IP 欺诈分检测与降风控指南', link: '/glossary/fraud-score', category: '词典解析' }
    ],
    nextStep: {
      text: '如何挑选低风控国家地区节点',
      link: '/guides/how-to-choose-node',
      description: '避开香港禁用区，为 ChatGPT、Claude 与 Gemini 匹配高可用落地地区。'
    }
  },
  '/recommend/streaming-airport': {
    parent: { text: '2026 机场推荐专题中心', link: '/recommend/' },
    related: [
      { text: 'Netflix 4K 非自制剧解锁指南', link: '/scenarios/netflix', category: '流媒体场景' },
      { text: 'YouTube 4K/8K 缓冲卡顿调优', link: '/scenarios/youtube', category: '视频优化' },
      { text: '原生 IP 与住宅 IP 深度百科', link: '/network/native-ip', category: '线路知识' },
      { text: 'Apple TV 软路由与旁路网关', link: '/glossary/soft-routing', category: '大屏方案' }
    ],
    nextStep: {
      text: '全球流媒体节点地区选择指南',
      link: '/guides/how-to-choose-node',
      description: '了解香港、日本、新加坡与美国节点在版权片库上的核心差异。'
    }
  },

  // Clash Verge Subscription Cluster
  '/clients/clash-verge/': {
    parent: { text: '客户端全景中心', link: '/clients/' },
    related: [
      { text: 'Clash Verge 订阅导入与链接获取', link: '/clients/clash-verge/import-subscription', category: '核心教程' },
      { text: '手动与自动定时更新订阅教程', link: '/clients/clash-verge/update-subscription', category: '订阅维护' },
      { text: 'Clash Verge 节点全部超时排查', link: '/clients/clash-verge/node-timeout', category: '故障排错' },
      { text: 'Clash 适用订阅与策略组选型考量', link: '/guides/clash-airport', category: '选型指南' }
    ],
    nextStep: {
      text: 'Clash Verge 订阅导入完整图文步骤',
      link: '/clients/clash-verge/import-subscription',
      description: '一步步完成订阅 URL 复制、Profile 导入激活与首次延迟测速。'
    }
  },
  '/clients/clash-verge/import-subscription': {
    parent: { text: 'Clash Verge / Rev 知识树', link: '/clients/clash-verge/' },
    related: [
      { text: '设置 Clash Verge 定时自动更新订阅', link: '/clients/clash-verge/update-subscription', category: '后续维护' },
      { text: '订阅链接结构与 Clash YAML 格式解析', link: '/subscription/subscription-url', category: '底层原理' },
      { text: 'Clash Verge 开启系统代理与 TUN 模式', link: '/clients/clash-verge/tun-mode', category: '联网接管' },
      { text: '支持 Clash 原生托管订阅的服务选型', link: '/guides/clash-airport', category: '订阅适配' }
    ],
    nextStep: {
      text: '导入后节点全部超时 (Timeout) 怎么处理？',
      link: '/clients/clash-verge/node-timeout',
      description: '核对系统时钟、DNS 配置与 Mihomo 内核放行状态，30 秒恢复节点测速。'
    }
  },
  '/clients/clash-verge/update-subscription': {
    parent: { text: 'Clash Verge / Rev 知识树', link: '/clients/clash-verge/' },
    related: [
      { text: '初次使用：Clash Verge 订阅导入教程', link: '/clients/clash-verge/import-subscription', category: '导入步骤' },
      { text: '更新订阅失败 404/500 状态码排查', link: '/troubleshooting/subscription-update-failed', category: '报错修复' },
      { text: '订阅链接打不开或直连被阻断应对', link: '/subscription/url-not-working', category: '网络排错' },
      { text: '主流订阅格式与订阅转换安全警告', link: '/subscription/conversion', category: '安全须知' }
    ],
    nextStep: {
      text: '开启 Clash Verge 系统代理与端口验证',
      link: '/clients/clash-verge/system-proxy',
      description: '更新节点后确认 7897 混合端口与系统代理状态正常接管浏览器流量。'
    }
  },
  '/clients/clash-verge/node-timeout': {
    parent: { text: 'Clash Verge / Rev 知识树', link: '/clients/clash-verge/' },
    related: [
      { text: '通用节点全部超时 (Timeout) 诊断清单', link: '/troubleshooting/all-nodes-timeout', category: '故障总控' },
      { text: 'Clash Verge DNS 与 Fake-IP 模式设置', link: '/clients/clash-verge/dns', category: 'DNS 调优' },
      { text: '连接成功但无法打开网页排查', link: '/clients/clash-verge/cannot-open-websites', category: '连通排查' },
      { text: '检查或刷新 Clash Verge 订阅配置', link: '/clients/clash-verge/update-subscription', category: '订阅更新' }
    ],
    nextStep: {
      text: '如何挑选稳妥的低延迟地区节点',
      link: '/guides/how-to-choose-node',
      description: '测速恢复后，根据网页、流媒体或 AI 使用需求选择对应国家节点。'
    }
  },

  // Timeout & Troubleshooting Cluster
  '/troubleshooting/all-nodes-timeout': {
    parent: { text: '故障诊断与排错中心', link: '/troubleshooting/' },
    related: [
      { text: 'Clash Verge 节点全部 Timeout 专篇', link: '/clients/clash-verge/node-timeout', category: 'Clash Verge' },
      { text: 'v2rayN 节点全部超时与真连接排查', link: '/clients/v2rayn/node-timeout', category: 'v2rayN' },
      { text: 'Shadowrocket 小火箭超时排查指南', link: '/clients/shadowrocket/node-timeout', category: 'iOS 小火箭' },
      { text: '节点延迟飘红 (500ms+) 与丢包调优', link: '/troubleshooting/nodes-red', category: '高延迟排查' }
    ],
    nextStep: {
      text: '节点正常但浏览器打不开网页？',
      link: '/troubleshooting/connected-but-no-internet',
      description: '继续排查系统代理环境变量残留、扩展冲突与 DNS 解析劫持。'
    }
  },
  '/troubleshooting/subscription-update-failed': {
    parent: { text: '故障诊断与排错中心', link: '/troubleshooting/' },
    related: [
      { text: 'Clash Verge 订阅导入与链接获取', link: '/clients/clash-verge/import-subscription', category: 'Clash Verge' },
      { text: '订阅链接打不开或 404/502 排查', link: '/subscription/url-not-working', category: '链接异常' },
      { text: '导入后节点列表为空原因定位', link: '/subscription/no-nodes', category: '解析故障' },
      { text: '判断订阅是否过期或流量耗尽', link: '/subscription/expired', category: '账户状态' }
    ],
    nextStep: {
      text: '如何规范设置客户端定时自动更新',
      link: '/subscription/how-to-update',
      description: '修复下载故障后，配置定时刷新策略防止节点域名变更导致失联。'
    }
  },

  // Node Recommendation (Protected Rank 1-3 Hub) & Guides
  '/guides/how-to-choose-node': {
    parent: { text: '选择指南导读中心', link: '/guides/' },
    related: [
      { text: '2026 机场综合稳定性排行榜', link: '/navigation/ranking', category: '综合榜单' },
      { text: '2026 年度最佳机场推荐专题', link: '/recommend/', category: '选型总榜' },
      { text: '节点倍率 (0.5x/1x/2x) 流量扣费解析', link: '/glossary/node-multiplier', category: '流量计费' },
      { text: '原生 IP 与广播 IP 解锁差异', link: '/network/native-vs-broadcast-ip', category: 'IP 属性' }
    ],
    nextStep: {
      text: '如何选择网络线路（直连 / 中转 / IEPL 专线）',
      link: '/guides/how-to-choose-network',
      description: '确定目标地区后，进一步了解不同传输线路在晚高峰的真实表现差异。'
    }
  },
  '/guides/clash-airport': {
    parent: { text: '选择指南导读中心', link: '/guides/' },
    related: [
      { text: 'Clash Verge 订阅链接导入与设置', link: '/clients/clash-verge/import-subscription', category: '导入教程' },
      { text: '常见订阅格式 (Clash YAML vs Base64)', link: '/subscription/formats', category: '格式对比' },
      { text: 'Clash 分流规则 Rules 语法详解', link: '/clients/clash/rules', category: '策略组' },
      { text: '2026 综合推荐支持 Clash 托管的服务商', link: '/recommend/best-overall', category: '推荐方案' }
    ],
    nextStep: {
      text: 'Clash Verge / Rev 完整知识树',
      link: '/clients/clash-verge/',
      description: '查看 Clash Verge 安装、TUN 模式、DNS 防污染与常见报错排错文档。'
    }
  },

  // Start & Navigation Hubs
  '/start/': {
    parent: { text: '网站首页中心', link: '/' },
    related: [
      { text: '什么是机场与代理服务商？', link: '/start/what-is-airport', category: '基础概念' },
      { text: '新手如何开始第一步实操', link: '/start/how-to-start', category: '起步教程' },
      { text: '新手选购第一份服务的避坑指南', link: '/guides/beginner-airport', category: '避坑手册' },
      { text: '全平台客户端选型矩阵', link: '/clients/', category: '工具选择' }
    ],
    nextStep: {
      text: '2026 年度最佳机场推荐指南',
      link: '/recommend/',
      description: '掌握基础概念后，对照预算、专线与月付原则挑选合适的代理服务。'
    }
  },
  '/start/what-is-airport': {
    parent: { text: '新手入门中心', link: '/start/' },
    related: [
      { text: '什么是节点服务器？', link: '/start/what-is-node', category: '基础概念' },
      { text: '什么是订阅链接与托管配置？', link: '/start/what-is-subscription', category: '基础概念' },
      { text: '机场与传统 VPN 有什么区别？', link: '/start/airport-vs-vpn', category: '概念辨析' },
      { text: '2026 最新机场网址导航页', link: '/navigation/', category: '入口导航' }
    ],
    nextStep: {
      text: '新手如何开始第一步？',
      link: '/start/how-to-start',
      description: '按照“客户端安装 → 订阅导入 → 节点测速 → 开启分流”五步完成首次连接。'
    }
  },
  '/start/what-is-node': {
    parent: { text: '新手入门中心', link: '/start/' },
    related: [
      { text: '什么是机场服务商？', link: '/start/what-is-airport', category: '基础概念' },
      { text: '节点与订阅的区别解析', link: '/start/node-vs-subscription', category: '概念辨析' },
      { text: '如何选择合适的节点与地区', link: '/guides/how-to-choose-node', category: '节点推荐' },
      { text: '原生 IP 与广播 IP 区别', link: '/network/native-vs-broadcast-ip', category: '线路进阶' }
    ],
    nextStep: {
      text: '如何选择合适的节点与国家地区？',
      link: '/guides/how-to-choose-node',
      description: '了解香港、日本、新加坡与美国节点在延迟、流媒体与 AI 解锁上的分工。'
    }
  },
  '/navigation/': {
    parent: { text: '网站首页中心', link: '/' },
    related: [
      { text: '2026 机场综合口碑排行榜', link: '/navigation/ranking', category: '综合评分' },
      { text: '支持按月付款机场精选合集', link: '/navigation/monthly-pay', category: '纯月付' },
      { text: '高可用防失联备用机场推荐', link: '/navigation/backup', category: '按量备用' },
      { text: '2026 年度最佳机场推荐专题', link: '/recommend/', category: '推荐总榜' }
    ],
    nextStep: {
      text: '查看 42 家现役品牌深度评测报告',
      link: '/reviews/',
      description: '对比每家服务商的线路架构、多图实测抓包、客户端兼容与专属优惠码详情。'
    }
  },
  '/navigation/ranking': {
    parent: { text: '机场网址导航中心', link: '/navigation/' },
    related: [
      { text: '光速云 2026 第一主推深度评测 (6图)', link: '/reviews/guangsuyun', category: 'Top 1 主推' },
      { text: '暮光加速 BGP 大流量评测 (Top 2)', link: '/reviews/muguang', category: 'Top 2 推荐' },
      { text: '无忧链接晚高峰与御三家双图评测', link: '/reviews/wuyou', category: '双图实测' },
      { text: '微风网络 50节点 07-19实测评测', link: '/reviews/weifeng', category: 'Top 4 专线' }
    ],
    nextStep: {
      text: '全 IEPL 企业级专线机场专题',
      link: '/recommend/iepl-airports',
      description: '深入了解企业级二层内网专线为何能在晚高峰保持更低丢包率。'
    }
  },
  '/clients/v2rayn/import-subscription': {
    parent: { text: 'v2rayN 知识树', link: '/clients/v2rayn/' },
    related: [
      { text: 'v2rayN 系统代理设置与清除', link: '/clients/v2rayn/system-proxy', category: '核心设置' },
      { text: 'v2rayN 路由规则与绕过大陆', link: '/clients/v2rayn/routing', category: '分流设置' },
      { text: 'v2rayN 更新订阅失败排查', link: '/clients/v2rayn/subscription-update-failed', category: '排错手册' }
    ],
    nextStep: {
      text: 'v2rayN 更新订阅与自动维护',
      link: '/clients/v2rayn/update-subscription',
      description: '配置不通过代理更新与定期拉取，保持节点状态实时可用。'
    }
  },
  '/protocols/vless': {
    parent: { text: '协议百科总览', link: '/protocols/' },
    related: [
      { text: 'VLESS vs VMess 深度对比', link: '/protocols/vless-vs-vmess', category: '对比评测' },
      { text: 'VLESS-Reality 协议百科', link: '/protocols/reality', category: '抗探测协议' },
      { text: '2026 全协议横向对比速查', link: '/protocols/protocol-comparison', category: '综合指南' }
    ],
    nextStep: {
      text: '如何选择最适合的代理协议？',
      link: '/guides/how-to-choose-protocol',
      description: '结合抗封锁、网速与客户端兼容性做出理性协议选择。'
    }
  },
  '/network/iepl': {
    parent: { text: '线路知识库总览', link: '/network/' },
    related: [
      { text: 'IPLC 国际物理专线百科', link: '/network/iplc', category: '专线技术' },
      { text: 'IEPL vs IPLC 专线深度对比', link: '/network/iepl-vs-iplc', category: '线路对比' },
      { text: '全 IEPL 专线机场推荐列表', link: '/recommend/iepl-airports', category: '专题推荐' }
    ],
    nextStep: {
      text: '如何选择网络线路类型？',
      link: '/guides/how-to-choose-network',
      description: '理解不同预算与晚高峰要求下的专线与中转方案取舍。'
    }
  }
}

interface PrefixClusterRule {
  prefix: string
  parent: { text: string; link: string }
  pool: RelatedLinkItem[]
  nextStep: { text: string; link: string; description: string }
}

const clusterFallbacks: PrefixClusterRule[] = [
  {
    prefix: '/recommend/',
    parent: { text: '2026 机场推荐专题中心', link: '/recommend/' },
    pool: [
      { text: '2026 年度最佳机场推荐总榜', link: '/recommend/', category: '推荐总榜' },
      { text: '2026 机场综合口碑排行榜', link: '/navigation/ranking', category: '实时榜单' },
      { text: '全 IEPL 专线高端机场', link: '/recommend/iepl-airports', category: '专线品质' },
      { text: '便宜高性价比月付机场', link: '/recommend/cheap-airports', category: '预算方案' },
      { text: '不限时按量备用机场', link: '/recommend/pay-as-you-go', category: '防失联备用' }
    ],
    nextStep: {
      text: '进入 42 家机场深度评测库',
      link: '/reviews/',
      description: '对照每家服务商的套餐定价、协议支持与实测测速解锁快照做出最终选择。'
    }
  },
  {
    prefix: '/navigation/',
    parent: { text: '2026 机场网址导航中心', link: '/navigation/' },
    pool: [
      { text: '2026 最新机场网址发布页', link: '/navigation/', category: '导航入口' },
      { text: '2026 机场综合口碑排行榜', link: '/navigation/ranking', category: '综合榜单' },
      { text: '支持按月付费机场合集', link: '/navigation/monthly-pay', category: '纯月付' },
      { text: '高可用防失联备用机场', link: '/navigation/backup', category: '应急备用' },
      { text: '2026 年度最佳机场推荐', link: '/recommend/', category: '推荐专题' }
    ],
    nextStep: {
      text: '新手购买服务避坑指南',
      link: '/guides/beginner-airport',
      description: '核对年付风险、节点倍率与测速误区，安全挑选主力与备用组合。'
    }
  },
  {
    prefix: '/reviews/',
    parent: { text: '42 家品牌深度评测档案库', link: '/reviews/' },
    pool: [
      { text: '2026 机场综合口碑排行榜', link: '/navigation/ranking', category: '横向对比' },
      { text: '2026 年度最佳机场推荐专题', link: '/recommend/', category: '场景选型' },
      { text: 'Clash Verge 订阅导入完整教程', link: '/clients/clash-verge/import-subscription', category: '使用教程' },
      { text: '如何选择合适的节点地区', link: '/guides/how-to-choose-node', category: '节点推荐' },
      { text: '数据采集与评测方法说明', link: '/sources/', category: '评测规范' }
    ],
    nextStep: {
      text: '订阅导入与客户端快速上手',
      link: '/clients/clash-verge/import-subscription',
      description: '获取订阅后，按照图文步骤完成客户端配置、延迟测速与分流启用。'
    }
  },
  {
    prefix: '/clients/clash-verge/',
    parent: { text: 'Clash Verge / Rev 知识树', link: '/clients/clash-verge/' },
    pool: [
      { text: 'Clash Verge 订阅导入与链接获取', link: '/clients/clash-verge/import-subscription', category: '订阅导入' },
      { text: '手动与定时自动更新订阅', link: '/clients/clash-verge/update-subscription', category: '订阅维护' },
      { text: 'TUN 虚拟网卡模式与服务安装', link: '/clients/clash-verge/tun-mode', category: '核心设置' },
      { text: 'Clash Verge 节点全部 Timeout 排查', link: '/clients/clash-verge/node-timeout', category: '排错指南' },
      { text: 'Clash 适用订阅与策略组选型', link: '/guides/clash-airport', category: '选型考量' }
    ],
    nextStep: {
      text: '通用节点全部超时 (Timeout) 排查手册',
      link: '/troubleshooting/all-nodes-timeout',
      description: '若跨客户端仍出现超时，对照五大根因快速定位时钟、权限或订阅异常。'
    }
  },
  {
    prefix: '/clients/clash/',
    parent: { text: 'Clash 核心知识体系', link: '/clients/clash/' },
    pool: [
      { text: 'Clash Verge 现代订阅导入教程', link: '/clients/clash-verge/import-subscription', category: '推荐客户端' },
      { text: 'Clash 配置文件与订阅托管机制', link: '/clients/clash/subscription', category: '订阅机制' },
      { text: 'Rules 分流规则语法详解', link: '/clients/clash/rules', category: '规则分流' },
      { text: 'TUN 模式与系统代理差异', link: '/clients/clash/tun-mode', category: '网络接管' },
      { text: 'Clash 适用机场选型指南', link: '/guides/clash-airport', category: '服务匹配' }
    ],
    nextStep: {
      text: '升级至现代 Clash Verge Rev 指南',
      link: '/clients/clash-verge/',
      description: '了解基于 Mihomo 内核的现代开源界面、订阅自动更新与排错方法。'
    }
  },
  {
    prefix: '/clients/shadowrocket/',
    parent: { text: 'Shadowrocket (小火箭) 知识树', link: '/clients/shadowrocket/' },
    pool: [
      { text: '小火箭扫码与链接导入订阅教程', link: '/clients/shadowrocket/import-subscription', category: '订阅导入' },
      { text: '更新订阅与后台自动刷新设置', link: '/clients/shadowrocket/update-subscription', category: '订阅维护' },
      { text: '小火箭节点全部超时排查', link: '/clients/shadowrocket/node-timeout', category: '故障排查' },
      { text: '全局路由模式 (配置/代理/直连)', link: '/clients/shadowrocket/global-routing', category: '核心设置' },
      { text: 'Shadowrocket 适用服务选型考量', link: '/guides/shadowrocket-airport', category: '选型指南' }
    ],
    nextStep: {
      text: '通用订阅更新失败排查手册',
      link: '/troubleshooting/subscription-update-failed',
      description: '遇到无法拉取节点或 404/SSL 异常时快速定位原因。'
    }
  },
  {
    prefix: '/clients/v2rayn/',
    parent: { text: 'v2rayN (Windows) 知识树', link: '/clients/v2rayn/' },
    pool: [
      { text: 'v2rayN 导入订阅与单节点教程', link: '/clients/v2rayn/import-subscription', category: '订阅导入' },
      { text: 'v2rayN 系统代理与端口设置', link: '/clients/v2rayn/system-proxy', category: '核心设置' },
      { text: 'v2rayN 节点全部超时解决', link: '/clients/v2rayn/node-timeout', category: '故障排错' },
      { text: '本地端口冲突排查 (10808/10809)', link: '/clients/v2rayn/port-conflict', category: '排错指南' },
      { text: 'v2rayN 适用节点服务选型', link: '/guides/v2rayn-airport', category: '选型参考' }
    ],
    nextStep: {
      text: '真连接延迟测试与节点优选方法',
      link: '/clients/v2rayn/test-latency',
      description: '区分假延迟与真实 TLS 握手延迟，准确挑选低抖动节点。'
    }
  },
  {
    prefix: '/clients/',
    parent: { text: '全平台客户端总览矩阵', link: '/clients/' },
    pool: [
      { text: 'Clash Verge Rev 知识树', link: '/clients/clash-verge/', category: 'Windows/macOS' },
      { text: 'Shadowrocket 小火箭知识树', link: '/clients/shadowrocket/', category: 'iOS' },
      { text: 'v2rayN Windows 客户端手册', link: '/clients/v2rayn/', category: 'Windows' },
      { text: '如何选择适合自己的客户端', link: '/guides/how-to-choose-client', category: '选型对比' },
      { text: '常见订阅格式与客户端兼容性', link: '/subscription/formats', category: '格式匹配' }
    ],
    nextStep: {
      text: '新手如何开始第一步配置',
      link: '/start/how-to-start',
      description: '安装好客户端后，按步骤导入订阅并完成节点连通性测试。'
    }
  },
  {
    prefix: '/subscription/',
    parent: { text: '订阅知识库导读', link: '/subscription/' },
    pool: [
      { text: 'Clash Verge 订阅链接导入全指南', link: '/clients/clash-verge/import-subscription', category: 'Clash Verge' },
      { text: '订阅链接 URL 结构与 Token 机制', link: '/subscription/subscription-url', category: '原理解析' },
      { text: 'Clash / Base64 / sing-box 格式对比', link: '/subscription/formats', category: '格式规范' },
      { text: '更新订阅失败与 404 报错排查', link: '/troubleshooting/subscription-update-failed', category: '排错手册' },
      { text: '订阅转换工作原理与隐私风险', link: '/subscription/conversion', category: '安全指南' }
    ],
    nextStep: {
      text: '查看各客户端标准导入步骤',
      link: '/subscription/how-to-import',
      description: '对照 Clash Verge、v2rayN、Shadowrocket 与 v2rayNG 的入口完成节点同步。'
    }
  },
  {
    prefix: '/troubleshooting/',
    parent: { text: '故障诊断与排错中心', link: '/troubleshooting/' },
    pool: [
      { text: '节点全部超时 (Timeout) 5步修复', link: '/troubleshooting/all-nodes-timeout', category: '超时全红' },
      { text: '已连接但打不开网页排查', link: '/troubleshooting/connected-but-no-internet', category: '网页不通' },
      { text: '更新订阅失败 / 订阅打不开', link: '/troubleshooting/subscription-update-failed', category: '订阅故障' },
      { text: 'DNS 解析错误与防污染配置', link: '/troubleshooting/dns-error', category: 'DNS 故障' },
      { text: '连接速度慢与高延迟调优', link: '/troubleshooting/slow-speed', category: '速率优化' }
    ],
    nextStep: {
      text: '如何选择更稳定的专线与地区节点',
      link: '/guides/how-to-choose-node',
      description: '排查完本地环境后，了解不同国家节点与专线架构对稳定性的影响。'
    }
  },
  {
    prefix: '/guides/',
    parent: { text: '选择指南导读中心', link: '/guides/' },
    pool: [
      { text: '如何选择合适的节点与地区', link: '/guides/how-to-choose-node', category: '节点推荐' },
      { text: '如何选择网络线路 (直连/中转/IEPL)', link: '/guides/how-to-choose-network', category: '线路取舍' },
      { text: '如何选择适合自己的代理协议', link: '/guides/how-to-choose-protocol', category: '协议选型' },
      { text: '新手选购服务与避坑指南', link: '/guides/beginner-airport', category: '新手必看' },
      { text: '2026 年度最佳机场推荐总榜', link: '/recommend/', category: '推荐榜单' }
    ],
    nextStep: {
      text: '查看 2026 机场综合口碑排行榜',
      link: '/navigation/ranking',
      description: '结合选型标准对比现役服务商的线路架构、起步价与解锁范围。'
    }
  },
  {
    prefix: '/start/',
    parent: { text: '新手入门知识中心', link: '/start/' },
    pool: [
      { text: '新手如何开始第一步实操', link: '/start/how-to-start', category: '实操路径' },
      { text: '什么是机场与聚合节点服务', link: '/start/what-is-airport', category: '基础概念' },
      { text: '什么是订阅与节点列表', link: '/start/what-is-subscription', category: '基础概念' },
      { text: '机场与传统 VPN 架构区别', link: '/start/airport-vs-vpn', category: '概念辨析' },
      { text: '新手购买代理服务避坑指南', link: '/guides/beginner-airport', category: '选型避坑' }
    ],
    nextStep: {
      text: '挑选适合你设备的代理客户端',
      link: '/start/how-to-choose-client',
      description: '按 Windows、macOS、iOS 与 Android 平台确定安装工具并导入订阅。'
    }
  },
  {
    prefix: '/protocols/',
    parent: { text: '核心代理协议百科', link: '/protocols/' },
    pool: [
      { text: '2026 现代代理协议横向对比', link: '/protocols/protocol-comparison', category: '全景对比' },
      { text: 'VLESS 协议技术深度解析', link: '/protocols/vless', category: '主流协议' },
      { text: 'Reality 抗主动探测机制解析', link: '/protocols/reality', category: '安全伪装' },
      { text: 'Hysteria 2 与 TUIC QUIC 协议对比', link: '/protocols/hysteria2-vs-tuic', category: '高丢包环境' },
      { text: '如何选择适合自己的协议', link: '/guides/how-to-choose-protocol', category: '选型指南' }
    ],
    nextStep: {
      text: '了解传输协议背后的物理线路架构',
      link: '/network/',
      description: '协议负责加密伪装，而决定晚高峰速率上限的往往是公网、中转或 IEPL 专线。'
    }
  },
  {
    prefix: '/network/',
    parent: { text: '线路知识库总览', link: '/network/' },
    pool: [
      { text: 'IEPL 内网专线架构解析', link: '/network/iepl', category: '内网专线' },
      { text: 'IEPL 与 IPLC 专线区别对比', link: '/network/iepl-vs-iplc', category: '架构差异' },
      { text: '直连 vs 中转线路体验差异', link: '/network/direct-vs-transit', category: '基础架构' },
      { text: '原生 IP 与广播 IP 区别', link: '/network/native-vs-broadcast-ip', category: 'IP 归属' },
      { text: '全 IEPL 专线机场推荐专题', link: '/recommend/iepl-airports', category: '专线推荐' }
    ],
    nextStep: {
      text: '按地区特征选择更低延迟节点',
      link: '/guides/how-to-choose-node',
      description: '理清线路类型后，结合香港、日本、新加坡与美国地理距离挑选节点。'
    }
  },
  {
    prefix: '/scenarios/',
    parent: { text: '使用场景专题总览', link: '/scenarios/' },
    pool: [
      { text: 'ChatGPT / AI 访问与 1020 排查', link: '/scenarios/chatgpt', category: 'AI 工具' },
      { text: 'Netflix 4K 流媒体解锁条件', link: '/scenarios/netflix', category: '流媒体' },
      { text: '外服游戏低延迟与 TUN 模式', link: '/scenarios/gaming', category: '游戏联机' },
      { text: '跨境电商与远程办公环境', link: '/scenarios/remote-work', category: '办公场景' },
      { text: '如何按场景挑选对应地区节点', link: '/guides/how-to-choose-node', category: '节点推荐' }
    ],
    nextStep: {
      text: '查看按解锁场景分类的服务推荐',
      link: '/recommend/',
      description: '匹配支持原生 IP、AI 解锁或 4K 流媒体的节点网络方案。'
    }
  },
  {
    prefix: '/glossary/',
    parent: { text: '百科词典全景速查', link: '/glossary/' },
    pool: [
      { text: '节点倍率与流量计算公式', link: '/glossary/node-multiplier', category: '计费词条' },
      { text: '订阅 (Subscription) 原理与格式', link: '/glossary/subscription', category: '核心词条' },
      { text: 'TUN 虚拟网卡模式解析', link: '/glossary/tun-mode', category: '代理机制' },
      { text: 'DNS 污染与 Fake-IP 防御原理', link: '/glossary/dns-pollution', category: 'DNS 安全' },
      { text: 'IP 欺诈分与原生 IP 概念', link: '/glossary/fraud-score', category: '风控指标' }
    ],
    nextStep: {
      text: '将这些术语应用到实际排错与选型',
      link: '/troubleshooting/',
      description: '前往故障排查中心或选型指南，解决实际使用中的连接与配置问题。'
    }
  }
]

const policyRelation: ArticleRelation = {
  parent: { text: '关于 JichangWiki 百科知识库', link: '/about/' },
  related: [
    { text: '内容编辑与审校规范', link: '/editorial-policy/', category: '编辑准则' },
    { text: '测速与技术资料来源原则', link: '/sources/', category: '数据透明' },
    { text: '站点使用免责声明', link: '/disclaimer/', category: '合规边界' },
    { text: '2026 机场推荐专题总览', link: '/recommend/', category: '核心入口' }
  ]
}

export function resolveArticleRelation(rawPath: string): ArticleRelation | undefined {
  const normalized = rawPath.replace(/\.html$/, '')
  const withoutTrailing = normalized.length > 1 ? normalized.replace(/\/$/, '') : normalized
  const withTrailing = withoutTrailing === '/' ? '/' : `${withoutTrailing}/`

  if (knowledgeGraph[withoutTrailing]) return knowledgeGraph[withoutTrailing]
  if (knowledgeGraph[withTrailing]) return knowledgeGraph[withTrailing]

  // Dynamic peer + guide internal links for all 42 active brand review pages
  if (withoutTrailing.startsWith('/reviews/')) {
    const brand = airportsData.find(a => a.reviewUrl === withoutTrailing)
    if (brand) {
      const sameNetPeers = airportsData
        .filter(a => a.id !== brand.id && (a.networkType === brand.networkType || a.isTop10))
        .sort((a, b) => Math.abs(a.startingPrice - brand.startingPrice) - Math.abs(b.startingPrice - brand.startingPrice) || a.rank - b.rank)
        .slice(0, 2)

      const clientLink =
        brand.clientSupport === '仅自研客户端'
          ? { text: '仅自研端与开源第三方客户端安全性权衡', link: '/guides/how-to-choose-client', category: '客户端对比' }
          : { text: 'Clash Verge 订阅链接导入完整图文教程', link: '/clients/clash-verge/import-subscription', category: '订阅上手' }

      return {
        parent: { text: '42 家品牌深度评测档案库', link: '/reviews/' },
        related: [
          ...sameNetPeers.map(p => ({
            text: `${p.name} 深度评测（¥${p.startingPrice}/月起 · ${p.networkType}）`,
            link: p.reviewUrl,
            category: p.isTop10 ? `Top ${p.rank} 同级对比` : '同类横评'
          })),
          clientLink,
          { text: '2026 机场综合口碑与测速排行榜', link: '/navigation/ranking', category: '全站榜单' }
        ],
        nextStep:
          brand.clientSupport === '仅自研客户端'
            ? {
                text: '新手选购服务与客户端避坑指南',
                link: '/guides/beginner-airport',
                description: '核对年付风险、仅自研客户端生态与纯月付防踩坑检查清单。'
              }
            : {
                text: '订阅导入与客户端快速上手（Clash Verge / 小火箭）',
                link: '/clients/clash-verge/import-subscription',
                description: '获取订阅后，按照图文步骤完成客户端配置、真连接测速与分流启用。'
              }
      }
    }
  }

  const policyPrefixes = ['/about', '/editorial-policy', '/sources', '/disclaimer', '/privacy', '/terms']
  if (policyPrefixes.some(p => withoutTrailing === p)) {
    return {
      ...policyRelation,
      related: policyRelation.related.filter(item => item.link.replace(/\/$/, '') !== withoutTrailing)
    }
  }

  for (const rule of clusterFallbacks) {
    if (withTrailing.startsWith(rule.prefix) || withoutTrailing.startsWith(rule.prefix.replace(/\/$/, ''))) {
      const filtered = rule.pool
        .filter(item => {
          const itemNorm = item.link.replace(/\/$/, '')
          return itemNorm !== withoutTrailing
        })
        .slice(0, 4)
      return {
        parent: rule.parent.link.replace(/\/$/, '') === withoutTrailing ? { text: '网站首页中心', link: '/' } : rule.parent,
        related: filtered,
        nextStep: rule.nextStep.link.replace(/\/$/, '') === withoutTrailing ? undefined : rule.nextStep
      }
    }
  }

  return undefined
}
