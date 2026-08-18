export const clientsSidebar = {
  '/clients/clash/': [
    {
      text: 'Clash 知识体系',
      collapsed: false,
      items: [
        { text: 'Clash 体系总览', link: '/clients/clash/' },
        { text: 'Clash 是什么', link: '/clients/clash/what-is-clash' },
        { text: '内核下载与客户端分支', link: '/clients/clash/install' }
      ]
    },
    {
      text: '订阅与配置',
      collapsed: false,
      items: [
        { text: '配置与订阅机制', link: '/clients/clash/subscription' },
        { text: '更新订阅的方法与排错', link: '/clients/clash/update-subscription' },
        { text: '分流规则 Rules 详解', link: '/clients/clash/rules' }
      ]
    },
    {
      text: '核心网络能力',
      collapsed: false,
      items: [
        { text: '系统代理模式详解', link: '/clients/clash/system-proxy' },
        { text: 'TUN 虚拟网卡模式', link: '/clients/clash/tun-mode' },
        { text: 'DNS 与防污染配置', link: '/clients/clash/dns' },
        { text: '出站代理模式 (Rule/Global/Direct)', link: '/clients/clash/proxy-mode' },
        { text: '节点选择与自动测速策略', link: '/clients/clash/node-selection' }
      ]
    },
    {
      text: '故障诊断',
      collapsed: false,
      items: [
        { text: 'Clash 常见故障排查', link: '/clients/clash/troubleshooting' }
      ]
    }
  ],
  '/clients/clash-verge/': [
    {
      text: 'Clash Verge / Rev 知识树',
      collapsed: false,
      items: [
        { text: 'Clash Verge 总览', link: '/clients/clash-verge/' },
        { text: '下载与安装配置', link: '/clients/clash-verge/install' },
        { text: '导入订阅链接', link: '/clients/clash-verge/import-subscription' },
        { text: '更新与维护订阅', link: '/clients/clash-verge/update-subscription' }
      ]
    },
    {
      text: '网络核心设置',
      collapsed: false,
      items: [
        { text: '系统代理开启与端口设置', link: '/clients/clash-verge/system-proxy' },
        { text: 'TUN 模式启用与驱动安装', link: '/clients/clash-verge/tun-mode' },
        { text: 'DNS 与 Fake-IP 模式解析', link: '/clients/clash-verge/dns' }
      ]
    },
    {
      text: '常见故障解决',
      collapsed: false,
      items: [
        { text: '节点全部超时 (Timeout)', link: '/clients/clash-verge/node-timeout' },
        { text: '启动或连接失败排查', link: '/clients/clash-verge/connection-failed' },
        { text: '连接成功但打不开网页', link: '/clients/clash-verge/cannot-open-websites' }
      ]
    }
  ],
  '/clients/shadowrocket/': [
    {
      text: 'Shadowrocket 小火箭知识树',
      collapsed: false,
      items: [
        { text: 'Shadowrocket 总览', link: '/clients/shadowrocket/' },
        { text: '小火箭是什么与工作原理', link: '/clients/shadowrocket/what-is-shadowrocket' },
        { text: 'iOS 下载与美区 Apple ID 安装', link: '/clients/shadowrocket/install' }
      ]
    },
    {
      text: '订阅与节点管理',
      collapsed: false,
      items: [
        { text: '导入订阅链接与二维码扫描', link: '/clients/shadowrocket/import-subscription' },
        { text: '更新订阅与自动更新设置', link: '/clients/shadowrocket/update-subscription' },
        { text: '节点测速与智能选择', link: '/clients/shadowrocket/select-node' }
      ]
    },
    {
      text: '路由分流与高级设置',
      collapsed: false,
      items: [
        { text: '全局路由模式 (配置/代理/直连)', link: '/clients/shadowrocket/global-routing' },
        { text: '分流规则与模块配置', link: '/clients/shadowrocket/rules' },
        { text: 'DNS 设置与防 DNS 泄漏', link: '/clients/shadowrocket/dns' }
      ]
    },
    {
      text: '故障诊断中心',
      collapsed: false,
      items: [
        { text: '无法连接 / 无网络访问', link: '/clients/shadowrocket/connection-failed' },
        { text: '节点全部超时排查', link: '/clients/shadowrocket/node-timeout' },
        { text: '订阅更新失败或格式错误', link: '/clients/shadowrocket/subscription-failed' },
        { text: 'Shadowrocket 常见问题 FAQ', link: '/clients/shadowrocket/faq' }
      ]
    }
  ],
  '/clients/v2rayn/': [
    {
      text: 'v2rayN (Windows) 知识树',
      collapsed: false,
      items: [
        { text: 'v2rayN 总览与架构', link: '/clients/v2rayn/' },
        { text: '下载、安装与环境准备', link: '/clients/v2rayn/download-install' },
        { text: '导入订阅链接与单节点', link: '/clients/v2rayn/import-subscription' },
        { text: '更新订阅与自动更新策略', link: '/clients/v2rayn/update-subscription' }
      ]
    },
    {
      text: '代理模式与网络设置',
      collapsed: false,
      items: [
        { text: '系统代理清除与设置', link: '/clients/v2rayn/system-proxy' },
        { text: 'TUN 模式配置与使用', link: '/clients/v2rayn/tun-mode' },
        { text: '路由规则与绕过大陆 IP', link: '/clients/v2rayn/routing' },
        { text: 'DNS 服务器与防污染设置', link: '/clients/v2rayn/dns' },
        { text: '真连接延迟与测速方法', link: '/clients/v2rayn/test-latency' },
        { text: '活动服务器选择与切换', link: '/clients/v2rayn/select-node' }
      ]
    },
    {
      text: '常见故障排查',
      collapsed: false,
      items: [
        { text: '节点全部超时解决办法', link: '/clients/v2rayn/node-timeout' },
        { text: '连接失败排错清单', link: '/clients/v2rayn/connection-failed' },
        { text: '更新订阅失败排查', link: '/clients/v2rayn/subscription-update-failed' },
        { text: 'TLS / 证书错误解决', link: '/clients/v2rayn/tls-error' },
        { text: '本地端口冲突排查 (10808/10809)', link: '/clients/v2rayn/port-conflict' },
        { text: '已连接但打不开网页', link: '/clients/v2rayn/cannot-open-websites' },
        { text: 'v2rayN 综合问题 FAQ', link: '/clients/v2rayn/faq' }
      ]
    }
  ],
  '/clients/': [
    {
      text: '客户端矩阵与平台索引',
      collapsed: false,
      items: [
        { text: '客户端总览矩阵', link: '/clients/' },
        { text: 'Clash 系列', link: '/clients/clash/' },
        { text: 'Clash Verge (Rev)', link: '/clients/clash-verge/' },
        { text: 'Shadowrocket (iOS)', link: '/clients/shadowrocket/' },
        { text: 'v2rayN (Windows)', link: '/clients/v2rayn/' },
        { text: 'v2rayNG (Android)', link: '/clients/v2rayng/' },
        { text: 'sing-box', link: '/clients/sing-box/' },
        { text: 'Hiddify', link: '/clients/hiddify/' },
        { text: 'Stash (iOS/macOS)', link: '/clients/stash/' },
        { text: 'Surge (iOS/macOS)', link: '/clients/surge/' },
        { text: 'Quantumult X (iOS)', link: '/clients/quantumult-x/' },
        { text: 'NekoBox', link: '/clients/nekobox/' },
        { text: 'Loon (iOS)', link: '/clients/loon/' }
      ]
    }
  ]
}
