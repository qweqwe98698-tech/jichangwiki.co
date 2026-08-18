export interface DiagnosticStep {
  id: string
  label: string
  icon?: string
}

export interface DiagnosticResult {
  title: string
  summary: string
  url: string
  solutionSteps: string[]
}

export const diagnosticIssues: DiagnosticStep[] = [
  { id: 'node-timeout', label: '节点全部超时 (Timeout / 全红)' },
  { id: 'import-sub-failed', label: '导入 / 更新订阅失败' },
  { id: 'connected-no-internet', label: '已显示连接但打不开网页' },
  { id: 'cannot-connect', label: '客户端完全无法连接 / 报错' },
  { id: 'slow-speed', label: '网速极慢 / 延迟极高 / 频繁断流' },
  { id: 'scenario-blocked', label: '特定网站无法访问 (ChatGPT/Netflix/Google)' }
]

export const diagnosticClients: DiagnosticStep[] = [
  { id: 'clash-verge', label: 'Clash Verge / Clash Verge Rev' },
  { id: 'shadowrocket', label: 'Shadowrocket (小火箭 iOS)' },
  { id: 'v2rayn', label: 'v2rayN (Windows)' },
  { id: 'v2rayng', label: 'v2rayNG (Android)' },
  { id: 'sing-box', label: 'sing-box (跨平台)' },
  { id: 'general', label: '通用或其他客户端' }
]

export const diagnosticRoutes: Record<string, Record<string, DiagnosticResult>> = {
  'node-timeout': {
    'clash-verge': {
      title: 'Clash Verge 节点全部超时解决方案',
      summary: '通常由订阅链接过期、内核 DNS 配置冲突、本地系统时间未同步或端口被占用引起。',
      url: '/clients/clash-verge/node-timeout',
      solutionSteps: [
        '检查 Windows/macOS 系统时间是否与标准北京时间同步（误差不能超过 60 秒）',
        '在 Clash Verge 订阅列表右键选择“刷新”，排查节点信息是否更新成功',
        '开启/关闭 TUN 模式，若开启请确保驱动服务正常安装'
      ]
    },
    'shadowrocket': {
      title: 'Shadowrocket 节点全部超时排查',
      summary: 'iOS 权限限制、Wi-Fi 代理污染或订阅节点域名失效是最常见原因。',
      url: '/clients/shadowrocket/node-timeout',
      solutionSteps: [
        '进入小火箭首页下拉刷新订阅，核对节点列表',
        '检查全局路由是否设为“配置”模式，避免误设为直连',
        '尝试切换 Wi-Fi 与 4G/5G 移动蜂窝网络测试'
      ]
    },
    'v2rayn': {
      title: 'v2rayN 节点全部超时解决方案',
      summary: '优先排查 Core 内核选择、Xray TLS 握手配置与 Windows 系统时间偏差。',
      url: '/clients/v2rayn/node-timeout',
      solutionSteps: [
        '校准系统时间：Windows 设置 -> 时间与语言 -> 立即同步',
        '在 v2rayN 菜单栏点击“订阅分组” -> “更新所有订阅(不通过代理)”',
        '按 Ctrl+O 进行真连接延迟测试，观察是否能正常握手'
      ]
    },
    'default': {
      title: '通用节点全部超时综合排查',
      summary: '从订阅有效性、本地时间同步、TLS 握手及网络环境四个层级逐一排查。',
      url: '/troubleshooting/all-nodes-timeout',
      solutionSteps: [
        '校准本地设备系统时间',
        '检查订阅是否已到期或流量已用尽',
        '排查本地防火墙或杀毒软件是否拦截代理核心进程'
      ]
    }
  },
  'import-sub-failed': {
    'clash-verge': {
      title: 'Clash Verge 导入与更新订阅排查',
      summary: '排查订阅链接格式（Clash YAML）、URL 编码及直连网络阻断。',
      url: '/clients/clash-verge/import-subscription',
      solutionSteps: [
        '在浏览器隐身窗口直接访问订阅 URL，确认能返回纯文本配置',
        '在 Clash Verge 设置中检查代理端口是否被占用',
        '检查订阅配置是否勾选了 Auto Update'
      ]
    },
    'shadowrocket': {
      title: 'Shadowrocket 订阅更新失败排查',
      summary: 'iOS 剪贴板权限或机场订阅下发格式不兼容。',
      url: '/clients/shadowrocket/subscription-failed',
      solutionSteps: [
        '通过扫码或重新手动复制纯 URL 添加节点',
        '在节点列表长按订阅条目选择“更新”',
        '检查机场面板是否重置了订阅 Token'
      ]
    },
    'v2rayn': {
      title: 'v2rayN 订阅更新失败排查',
      summary: '排查是否由于系统代理开启导致循环死锁或 Base64 解码异常。',
      url: '/clients/v2rayn/subscription-update-failed',
      solutionSteps: [
        '使用“更新订阅(不通过代理)”菜单项',
        '检查订阅设置中的 URL 是否包含多余空格或不可见字符',
        '查看底部日志窗口的具体 HTTP 错误代码'
      ]
    },
    'default': {
      title: '订阅链接更新失败排查指南',
      summary: '深入分析 URL 404/500 报错、Base64 格式与转换工具安全。',
      url: '/troubleshooting/subscription-update-failed',
      solutionSteps: [
        '确认订阅链接在普通网络下是否可连通',
        '排查机场服务商域名是否已更换',
        '确认订阅是否已欠费或被封禁'
      ]
    }
  },
  'connected-no-internet': {
    'clash-verge': {
      title: 'Clash Verge 已连接但打不开网页排查',
      summary: '通常是系统代理环境变量残留、TUN 虚拟网卡 DNS 劫持冲突或分流规则走 DIRECT。',
      url: '/clients/clash-verge/cannot-open-websites',
      solutionSteps: [
        '检查 Clash Verge 界面底部系统代理开关是否正常开启',
        '将代理模式切换为“Rule (规则)”或“Global (全局)”测试',
        '重启 TUN 虚拟网卡驱动'
      ]
    },
    'v2rayn': {
      title: 'v2rayN 已连接但打不开网页排查',
      summary: '检查任务栏右下角 v2rayN 图标是否为红色（系统代理自动配置），排查本地 10809 端口。',
      url: '/clients/v2rayn/cannot-open-websites',
      solutionSteps: [
        '在底部状态栏将系统代理设为“自动配置系统代理”',
        '将路由模式设为“绕过大陆(Whitelist)”',
        '检查浏览器扩展程序是否劫持了代理设置'
      ]
    },
    'default': {
      title: '代理已连接但打不开网页排查指南',
      summary: '针对系统代理未接管、DNS 污染与死循环路由的全流程检测。',
      url: '/troubleshooting/connected-but-no-internet',
      solutionSteps: [
        '检查 Windows/macOS 系统代理设置是否生效',
        '检查 DNS 设置，尝试将 DNS 切换至 1.1.1.1 或 8.8.8.8',
        '在命令行 ping 127.0.0.1 确认本地代理端口监听'
      ]
    }
  },
  'cannot-connect': {
    'default': {
      title: '客户端完全无法连接 / 崩溃报错排查',
      summary: '解决核心程序无法启动、端口被占用、系统权限不足与依赖库缺失。',
      url: '/troubleshooting/cannot-connect',
      solutionSteps: [
        '以管理员身份运行客户端程序',
        '排查 10808 / 7890 端口是否被其他软件占用',
        '检查杀毒软件日志是否误删了 Xray/Mihomo 内核组件'
      ]
    }
  },
  'slow-speed': {
    'default': {
      title: '网速慢与高延迟排查指南',
      summary: '排查本地带宽瓶颈、线路类型（直连 vs IEPL/IPLC）、晚高峰拥堵与倍率机制。',
      url: '/troubleshooting/slow-speed',
      solutionSteps: [
        '切换为香港/日本/新加坡低物理延迟节点',
        '确认当前所连线路是直连、普通中转还是 IEPL 专线',
        '使用 Fast.com 或 YouTube Stats for Nerds 测量真实下行带宽'
      ]
    }
  },
  'scenario-blocked': {
    'default': {
      title: '特定平台访问限制与 IP 纯净度排查',
      summary: '针对 ChatGPT/Claude/Netflix 的风控拦截、IP 欺诈度与原生节点要求。',
      url: '/scenarios/chatgpt',
      solutionSteps: [
        '使用原生 IP (Native IP) 或住宅 IP 节点',
        '开启全局模式 (Global) 排查分流规则遗漏',
        '清理浏览器 Cookie 或开启隐私无痕窗口访问'
      ]
    }
  }
}
