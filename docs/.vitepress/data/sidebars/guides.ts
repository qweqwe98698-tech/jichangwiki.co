export const guidesSidebar = [
  {
    text: '选择指南总览',
    collapsed: false,
    items: [
      { text: '选择指南导读', link: '/guides/' }
    ]
  },
  {
    text: '通用决策与选型',
    collapsed: false,
    items: [
      { text: '如何选择适合自己的客户端？', link: '/guides/how-to-choose-client' },
      { text: '如何选择最适合的代理协议？', link: '/guides/how-to-choose-protocol' },
      { text: '如何选择合适的节点与国家地区？', link: '/guides/how-to-choose-node' },
      { text: '如何选择网络线路 (直连/中转/IEPL)？', link: '/guides/how-to-choose-network' }
    ]
  },
  {
    text: '特定场景与客户端适配',
    collapsed: false,
    items: [
      { text: 'Clash 适用的机场类型与配置考量', link: '/guides/clash-airport' },
      { text: 'Shadowrocket (小火箭) 节点与服务考量', link: '/guides/shadowrocket-airport' },
      { text: 'v2rayN 适用的节点服务选型考量', link: '/guides/v2rayn-airport' },
      { text: '新手如何选择第一份代理服务与避坑指南', link: '/guides/beginner-airport' }
    ]
  }
]
