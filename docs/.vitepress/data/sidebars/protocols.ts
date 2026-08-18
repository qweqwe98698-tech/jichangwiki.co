export const protocolsSidebar = [
  {
    text: '协议百科总览',
    collapsed: false,
    items: [
      { text: '协议百科导读', link: '/protocols/' },
      { text: '全协议横向对比速查', link: '/protocols/protocol-comparison' }
    ]
  },
  {
    text: '主流代理协议详解',
    collapsed: false,
    items: [
      { text: 'VLESS 协议百科', link: '/protocols/vless' },
      { text: 'VMess 协议百科', link: '/protocols/vmess' },
      { text: 'Trojan 协议百科', link: '/protocols/trojan' },
      { text: 'Shadowsocks 协议百科', link: '/protocols/shadowsocks' },
      { text: 'VLESS-Reality 新一代黑科技', link: '/protocols/reality' },
      { text: 'Hysteria 2 (基于 UDP/QUIC)', link: '/protocols/hysteria2' },
      { text: 'TUIC (基于 QUIC 协议)', link: '/protocols/tuic' },
      { text: 'SOCKS5 基础代理协议', link: '/protocols/socks5' },
      { text: 'HTTP / HTTPS 代理协议', link: '/protocols/http-proxy' }
    ]
  },
  {
    text: '协议对比与选型',
    collapsed: false,
    items: [
      { text: 'VLESS vs VMess 全方位区别', link: '/protocols/vless-vs-vmess' },
      { text: 'Trojan vs Shadowsocks 深度对比', link: '/protocols/trojan-vs-shadowsocks' },
      { text: 'Hysteria 2 vs TUIC (QUIC系对比)', link: '/protocols/hysteria2-vs-tuic' }
    ]
  }
]
