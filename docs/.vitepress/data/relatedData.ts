export interface ArticleRelation {
  parent?: { text: string; link: string }
  related: { text: string; link: string; category?: string }[]
  nextStep?: { text: string; link: string; description: string }
}

export const knowledgeGraph: Record<string, ArticleRelation> = {
  // Start Section
  '/start/what-is-airport': {
    parent: { text: '新手入门', link: '/start/' },
    related: [
      { text: '什么是节点？', link: '/start/what-is-node', category: '基础概念' },
      { text: '什么是订阅？', link: '/start/what-is-subscription', category: '基础概念' },
      { text: '机场与 VPN 有什么区别？', link: '/start/airport-vs-vpn', category: '概念辨析' }
    ],
    nextStep: {
      text: '新手如何开始第一步？',
      link: '/start/how-to-start',
      description: '了解基础概念后，按照步骤挑选客户端并导入第一个节点配置。'
    }
  },
  '/start/what-is-node': {
    parent: { text: '新手入门', link: '/start/' },
    related: [
      { text: '什么是机场？', link: '/start/what-is-airport', category: '基础概念' },
      { text: '节点与订阅的区别', link: '/start/node-vs-subscription', category: '概念辨析' },
      { text: '原生 IP 与广播 IP 区别', link: '/network/native-vs-broadcast-ip', category: '线路进阶' }
    ],
    nextStep: {
      text: '如何选择合适的节点？',
      link: '/guides/how-to-choose-node',
      description: '掌握根据流媒体、游戏与日常办公不同需求挑选节点的实用策略。'
    }
  },
  // Clash Verge
  '/clients/clash-verge/node-timeout': {
    parent: { text: 'Clash Verge 知识树', link: '/clients/clash-verge/' },
    related: [
      { text: '通用节点全部超时排查', link: '/troubleshooting/all-nodes-timeout', category: '故障中心' },
      { text: 'Clash Verge TUN 模式配置', link: '/clients/clash-verge/tun-mode', category: '核心设置' },
      { text: '更新与维护订阅', link: '/clients/clash-verge/update-subscription', category: '操作指南' }
    ],
    nextStep: {
      text: '已连接但打不开网页排查',
      link: '/clients/clash-verge/cannot-open-websites',
      description: '如果节点测速恢复正常但网页仍无法加载，请继续检查 DNS 与系统代理接管。'
    }
  },
  // v2rayN
  '/clients/v2rayn/import-subscription': {
    parent: { text: 'v2rayN 知识树', link: '/clients/v2rayn/' },
    related: [
      { text: 'v2rayN 系统代理设置', link: '/clients/v2rayn/system-proxy', category: '核心设置' },
      { text: 'v2rayN 路由规则配置', link: '/clients/v2rayn/routing', category: '分流设置' },
      { text: '订阅更新失败排查', link: '/clients/v2rayn/subscription-update-failed', category: '排错手册' }
    ],
    nextStep: {
      text: 'v2rayN 更新订阅与自动维护',
      link: '/clients/v2rayn/update-subscription',
      description: '配置每天自动更新或定时拉取节点，保持代理信息时刻最新。'
    }
  },
  // Protocols
  '/protocols/vless': {
    parent: { text: '协议百科', link: '/protocols/' },
    related: [
      { text: 'VLESS vs VMess 深度对比', link: '/protocols/vless-vs-vmess', category: '对比评测' },
      { text: 'VLESS-Reality 协议百科', link: '/protocols/reality', category: '新协议' },
      { text: '全协议横向对比速查', link: '/protocols/protocol-comparison', category: '综合指南' }
    ],
    nextStep: {
      text: '如何选择最适合的代理协议？',
      link: '/guides/how-to-choose-protocol',
      description: '结合抗封锁、网速、客户端兼容性做出理性选择。'
    }
  },
  // Network
  '/network/iepl': {
    parent: { text: '线路知识库', link: '/network/' },
    related: [
      { text: 'IPLC 国际专线百科', link: '/network/iplc', category: '专线技术' },
      { text: 'IEPL vs IPLC 专线对比', link: '/network/iepl-vs-iplc', category: '线路对比' },
      { text: '直连 vs 中转线路对比', link: '/network/direct-vs-transit', category: '架构辨析' }
    ],
    nextStep: {
      text: '如何选择网络线路类型？',
      link: '/guides/how-to-choose-network',
      description: '理解不同预算与晚高峰要求下的专线与中转方案取舍。'
    }
  }
}
