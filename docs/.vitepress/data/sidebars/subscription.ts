export const subscriptionSidebar = [
  {
    text: '订阅基础知识',
    collapsed: false,
    items: [
      { text: '订阅知识库总览', link: '/subscription/' },
      { text: '什么是订阅与节点聚合', link: '/subscription/what-is-subscription' },
      { text: '订阅链接地址与结构', link: '/subscription/subscription-url' },
      { text: '常见订阅格式 (Clash/Base64/V2Ray/sing-box)', link: '/subscription/formats' },
      { text: '订阅转换的原理与安全风险', link: '/subscription/conversion' }
    ]
  },
  {
    text: '导入与更新操作',
    collapsed: false,
    items: [
      { text: '如何正确导入订阅到客户端', link: '/subscription/how-to-import' },
      { text: '如何更新订阅与自动更新策略', link: '/subscription/how-to-update' }
    ]
  },
  {
    text: '订阅常见故障排查',
    collapsed: false,
    items: [
      { text: '订阅链接打不开或无响应', link: '/subscription/url-not-working' },
      { text: '更新订阅失败排查', link: '/subscription/update-failed' },
      { text: '导入订阅失败排查', link: '/subscription/import-failed' },
      { text: '导入后没有节点或节点列表为空', link: '/subscription/no-nodes' },
      { text: '订阅过期或流量用尽判断', link: '/subscription/expired' }
    ]
  }
]
