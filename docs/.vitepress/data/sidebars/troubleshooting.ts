export const troubleshootingSidebar = [
  {
    text: '故障诊断中心',
    collapsed: false,
    items: [
      { text: '故障排查中心总览', link: '/troubleshooting/' }
    ]
  },
  {
    text: '核心连接与节点故障',
    collapsed: false,
    items: [
      { text: '客户端完全无法连接', link: '/troubleshooting/cannot-connect' },
      { text: '节点全部超时 (Timeout)', link: '/troubleshooting/all-nodes-timeout' },
      { text: '节点测速全红 / 延迟极高', link: '/troubleshooting/nodes-red' },
      { text: '已显示连接成功但打不开网页', link: '/troubleshooting/connected-but-no-internet' }
    ]
  },
  {
    text: '订阅与配置异常',
    collapsed: false,
    items: [
      { text: '订阅链接无法访问或 404', link: '/troubleshooting/subscription-url-error' },
      { text: '订阅更新失败 / 解析错误', link: '/troubleshooting/subscription-update-failed' },
      { text: '导入订阅失败排查', link: '/troubleshooting/import-failed' }
    ]
  },
  {
    text: '网络、DNS 与证书故障',
    collapsed: false,
    items: [
      { text: 'DNS 解析失败 / 域名无法解析', link: '/troubleshooting/dns-error' },
      { text: 'TLS 握手失败 / 证书过期错误', link: '/troubleshooting/tls-error' },
      { text: 'SSL / Certificate 校验异常', link: '/troubleshooting/certificate-error' },
      { text: '高延迟与持续丢包原因排查', link: '/troubleshooting/high-latency' },
      { text: '连接速度极慢 / 视频卡顿', link: '/troubleshooting/slow-speed' }
    ]
  },
  {
    text: '跨环境与设备差异故障',
    collapsed: false,
    items: [
      { text: 'Wi-Fi 正常但手机流量不行', link: '/troubleshooting/wifi-works-mobile-data-fails' },
      { text: '手机正常但电脑无法上网', link: '/troubleshooting/mobile-works-pc-fails' }
    ]
  }
]
