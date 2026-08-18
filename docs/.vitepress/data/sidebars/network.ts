export const networkSidebar = [
  {
    text: '线路与网络架构',
    collapsed: false,
    items: [
      { text: '线路知识库总览', link: '/network/' },
      { text: '直连线路 (Direct)', link: '/network/direct' },
      { text: '中转线路 (Transit / Relay)', link: '/network/transit' },
      { text: '入口与落地架构 (Entry & Exit)', link: '/network/entry-and-exit' }
    ]
  },
  {
    text: '专线与优质骨干网',
    collapsed: false,
    items: [
      { text: 'IEPL 内网专线百科', link: '/network/iepl' },
      { text: 'IPLC 国际专线百科', link: '/network/iplc' },
      { text: 'CN2 (163 vs CN2)', link: '/network/cn2' },
      { text: 'CN2 GIA 高级出口线路', link: '/network/cn2-gia' },
      { text: 'BGP 多线智能接入', link: '/network/bgp' }
    ]
  },
  {
    text: 'IP 属性与解锁特征',
    collapsed: false,
    items: [
      { text: '原生 IP (Native IP)', link: '/network/native-ip' },
      { text: '广播 IP (Broadcast IP)', link: '/network/broadcast-ip' },
      { text: '住宅 IP / 家宽 IP (Residential)', link: '/network/residential-ip' }
    ]
  },
  {
    text: '线路深度对比',
    collapsed: false,
    items: [
      { text: '直连 vs 中转线路对比', link: '/network/direct-vs-transit' },
      { text: 'IEPL vs IPLC 专线对比', link: '/network/iepl-vs-iplc' },
      { text: '原生 IP vs 广播 IP 区别', link: '/network/native-vs-broadcast-ip' }
    ]
  }
]
