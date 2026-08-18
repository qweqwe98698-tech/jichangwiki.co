export const glossarySidebar = [
  {
    text: '📖 百科词典总览',
    items: [
      { text: '词汇全景索引 (A-Z & 分类)', link: '/glossary/' }
    ]
  },
  {
    text: '1. 基础概念与计费',
    collapsed: false,
    items: [
      { text: '节点 (Node)', link: '/glossary/node' },
      { text: '订阅 (Subscription)', link: '/glossary/subscription' },
      { text: '延迟与 Ping (Latency)', link: '/glossary/latency' },
      { text: '丢包率 (Packet Loss)', link: '/glossary/packet-loss' },
      { text: '带宽 (Bandwidth)', link: '/glossary/bandwidth' },
      { text: '节点倍率 (Multiplier)', link: '/glossary/node-multiplier' }
    ]
  },
  {
    text: '2. 客户端模式与系统',
    collapsed: false,
    items: [
      { text: 'TUN 虚拟网卡模式', link: '/glossary/tun-mode' },
      { text: '系统代理 (System Proxy)', link: '/glossary/system-proxy' },
      { text: '规则分流模式 (Rule Mode)', link: '/glossary/rule-mode' },
      { text: '全局代理模式 (Global Mode)', link: '/glossary/global-mode' },
      { text: '软路由与旁路网关', link: '/glossary/soft-routing' },
      { text: 'Clash / Mihomo 内核', link: '/glossary/clash-core' }
    ]
  },
  {
    text: '3. 网络链路与架构',
    collapsed: false,
    items: [
      { text: '入口服务器 (Entry Node)', link: '/glossary/entry-node' },
      { text: '落地服务器 (Exit Node)', link: '/glossary/exit-node' },
      { text: '中转隧道 (Transit Relay)', link: '/glossary/transit' },
      { text: 'BGP 动态多线接入', link: '/glossary/bgp' },
      { text: 'IEPL 内网专线', link: '/glossary/iepl' },
      { text: 'IPLC 物理专线', link: '/glossary/iplc' }
    ]
  },
  {
    text: '4. IP 类型与风控安全',
    collapsed: false,
    items: [
      { text: '原生 IP (Native IP)', link: '/glossary/native-ip' },
      { text: '广播 IP (Broadcast IP)', link: '/glossary/broadcast-ip' },
      { text: '住宅 IP (Residential IP)', link: '/glossary/residential-ip' },
      { text: 'IP 欺诈分 (Fraud Score)', link: '/glossary/fraud-score' },
      { text: 'DNS 污染 (DNS Pollution)', link: '/glossary/dns-pollution' },
      { text: 'DNS 泄露 (DNS Leak)', link: '/glossary/dns-leak' }
    ]
  },
  {
    text: '5. 协议加密与防护',
    collapsed: false,
    items: [
      { text: 'GFW 防火长城机制', link: '/glossary/gfw' },
      { text: 'QoS 运营商限速', link: '/glossary/qos' },
      { text: 'TLS 安全传输层协议', link: '/glossary/tls' }
    ]
  }
]
