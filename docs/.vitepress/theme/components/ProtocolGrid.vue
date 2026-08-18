<template>
  <div class="protocol-grid">
    <a
      v-for="p in protocols"
      :key="p.name"
      :href="p.link"
      class="protocol-item"
    >
      <div class="p-top">
        <span class="p-name">{{ p.name }}</span>
        <span :class="['p-badge', p.badgeClass]">{{ p.badge }}</span>
      </div>
      <p class="p-summary">{{ p.summary }}</p>
      <div class="p-footer">
        <span class="p-scenario">适用: {{ p.scenario }}</span>
      </div>
    </a>
  </div>
</template>

<script setup lang="ts">
const protocols = [
  {
    name: 'VLESS',
    link: '/protocols/vless',
    badge: '现代主流',
    badgeClass: 'badge-cyan',
    summary: '去除了 VMess 的繁重对称加密设计，依托底层 TLS/XTLS 保证安全性，兼具高吞吐与低开销。',
    scenario: '高性能日常上网、大流量下载'
  },
  {
    name: 'VLESS-Reality',
    link: '/protocols/reality',
    badge: '抗封锁黑科技',
    badgeClass: 'badge-purple',
    summary: '借用真实网站的 TLS 证书与 SNI 流量特征，无需自建域名与证书，消除中间人主动探测。',
    scenario: '高风控网络环境、免域名自建'
  },
  {
    name: 'Hysteria 2',
    link: '/protocols/hysteria2',
    badge: 'QUIC / 暴力抗丢包',
    badgeClass: 'badge-amber',
    summary: '基于标准 UDP / QUIC 协议修改，具备定制拥塞控制算法，在恶劣丢包网络下仍能跑满带宽。',
    scenario: '晚高峰网络拥堵、高丢包线路'
  },
  {
    name: 'Trojan',
    link: '/protocols/trojan',
    badge: '标准 TLS 伪装',
    badgeClass: 'badge-green',
    summary: '将代理流量伪装成标准 HTTPS 流量，直接通过标准 443 端口与合规 TLS 握手进行数据交互。',
    scenario: '标准 Web 流量伪装、全平台通用'
  },
  {
    name: 'TUIC',
    link: '/protocols/tuic',
    badge: 'QUIC 协议系',
    badgeClass: 'badge-amber',
    summary: '基于 QUIC 协议设计，具备 0-RTT 极速握手能力与原生多路复用，对移动网络切换支持优异。',
    scenario: '移动端网络、低延迟握手'
  },
  {
    name: 'Shadowsocks',
    link: '/protocols/shadowsocks',
    badge: '经典基石',
    badgeClass: 'badge-gray',
    summary: '早期基于对称流加密的轻量代理协议（AEAD 现代版），配置简单，广泛用于各类中转专线。',
    scenario: 'IEPL / IPLC 专线内部转发'
  },
  {
    name: 'IEPL 专线',
    link: '/network/iepl',
    badge: '内网专线',
    badgeClass: 'badge-cyan',
    summary: '国际以太网专线，国内入口走内网专线直达境外落地，完全不经过公网 GFW 审查。',
    scenario: '超稳定晚高峰、游戏低延迟'
  },
  {
    name: 'IPLC 专线',
    link: '/network/iplc',
    badge: '物理专线',
    badgeClass: 'badge-cyan',
    summary: '国际点对点物理光缆专线，物理层隔离，延迟稳定，不受任何外部公网波动干扰。',
    scenario: '高敏感度外贸、金融交易与流媒体'
  }
]
</script>

<style scoped>
.protocol-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1rem;
  margin: 1.5rem 0;
}

.protocol-item {
  background: #11151A;
  border: 1px solid #1E2633;
  border-radius: 10px;
  padding: 1.15rem;
  text-decoration: none !important;
  transition: all 0.18s ease;
  display: flex;
  flex-direction: column;
}

.protocol-item:hover {
  background: #151C24;
  border-color: #2E3B4D;
  transform: translateY(-2px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
}

.p-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;
}

.p-name {
  font-size: 1rem;
  font-weight: 700;
  color: #FFFFFF;
}

.p-badge {
  font-size: 0.72rem;
  font-weight: 600;
  padding: 0.15rem 0.45rem;
  border-radius: 4px;
}

.badge-cyan {
  background: rgba(0, 229, 255, 0.1);
  color: #00E5FF;
  border: 1px solid rgba(0, 229, 255, 0.3);
}

.badge-purple {
  background: rgba(168, 85, 247, 0.1);
  color: #C084FC;
  border: 1px solid rgba(168, 85, 247, 0.3);
}

.badge-amber {
  background: rgba(245, 158, 11, 0.1);
  color: #FBBF24;
  border: 1px solid rgba(245, 158, 11, 0.3);
}

.badge-green {
  background: rgba(16, 185, 129, 0.1);
  color: #34D399;
  border: 1px solid rgba(16, 185, 129, 0.3);
}

.badge-gray {
  background: #1E293B;
  color: #94A3B8;
  border: 1px solid #334155;
}

.p-summary {
  font-size: 0.84rem;
  color: #94A3B8;
  line-height: 1.5;
  margin: 0 0 0.85rem 0;
  flex: 1;
}

.p-footer {
  border-top: 1px solid #1A222D;
  padding-top: 0.5rem;
}

.p-scenario {
  font-size: 0.75rem;
  color: #64748B;
}
</style>
