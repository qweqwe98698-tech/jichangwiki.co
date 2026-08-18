<template>
  <div class="client-matrix">
    <div v-for="platform in platforms" :key="platform.name" class="platform-column">
      <div class="platform-header">
        <span class="platform-icon" v-html="platform.icon"></span>
        <h4 class="platform-title">{{ platform.name }}</h4>
        <span class="platform-count">{{ platform.clients.length }} 款</span>
      </div>
      <div class="clients-list">
        <a
          v-for="item in platform.clients"
          :key="item.name"
          :href="item.link"
          class="client-item"
        >
          <div class="client-top">
            <span class="client-name">{{ item.name }}</span>
            <span v-if="item.badge" :class="['tag-badge', item.badgeType || 'default']">{{ item.badge }}</span>
          </div>
          <p class="client-desc">{{ item.desc }}</p>
          <div class="client-tags">
            <span v-for="t in item.features" :key="t" class="mini-tag">{{ t }}</span>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const platforms = [
  {
    name: 'Windows',
    icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.951-1.951"/></svg>`,
    clients: [
      {
        name: 'Clash Verge (Rev)',
        link: '/clients/clash-verge/',
        desc: '现代轻量 GUI，内置 Mihomo 内核，支持 TUN 模式与脚本扩展。',
        badge: '首选推荐',
        badgeType: 'cyan',
        features: ['TUN模式', '规则分流', 'Mihomo内核']
      },
      {
        name: 'v2rayN',
        link: '/clients/v2rayn/',
        desc: '经典老牌 GUI 客户端，支持 Xray / sing-box 双内核与丰富协议。',
        badge: '全协议支持',
        badgeType: 'amber',
        features: ['Xray内核', '真连接延迟', '分流路由']
      },
      {
        name: 'sing-box (GUI)',
        link: '/clients/sing-box/',
        desc: '新一代通用网络代理核心，性能强劲，内存占用低。',
        features: ['通用核心', 'Reality', 'Hysteria2']
      },
      {
        name: 'Hiddify',
        link: '/clients/hiddify/',
        desc: '多平台一致设计，简单易用，零门槛自动更新节点。',
        features: ['多平台', '现代界面']
      }
    ]
  },
  {
    name: 'macOS',
    icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 0.92-2.85-.9.04-2 .6-2.65 1.35-.58.66-1.09 1.73-.95 2.76 1.01.08 2.06-.51 2.68-1.26z"/></svg>`,
    clients: [
      {
        name: 'Clash Verge (Rev)',
        link: '/clients/clash-verge/',
        desc: '支持 Apple Silicon 与 Intel，系统代理与 TUN 模式一键开启。',
        badge: '首选推荐',
        badgeType: 'cyan',
        features: ['原生M系列', '系统代理', '现代UI']
      },
      {
        name: 'Surge Mac',
        link: '/clients/surge/',
        desc: 'macOS 顶级网络抓包与调试代理工具，专业开发者之选。',
        badge: '专业级',
        badgeType: 'amber',
        features: ['网络捕获', 'MitM', '高性能']
      },
      {
        name: 'Stash',
        link: '/clients/stash/',
        desc: '基于 Clash 规则体系的 macOS 优雅代理客户端。',
        features: ['Clash生态', '优雅UI']
      }
    ]
  },
  {
    name: 'iPhone / iPad (iOS)',
    icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 1h-8A2.5 2.5 0 0 0 5 3.5v17A2.5 2.5 0 0 0 7.5 23h8a2.5 2.5 0 0 0 2.5-2.5v-17A2.5 2.5 0 0 0 15.5 1zm-4 21a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm5.5-3H7V4h10v15z"/></svg>`,
    clients: [
      {
        name: 'Shadowrocket (小火箭)',
        link: '/clients/shadowrocket/',
        desc: 'iOS 用户普及率最高的客户端，操作简明，支持主流协议与分流。',
        badge: 'iOS 标配',
        badgeType: 'cyan',
        features: ['美区AppStore', '扫码导入', '分流规则']
      },
      {
        name: 'Quantumult X (圈X)',
        link: '/clients/quantumult-x/',
        desc: '强大的脚本重写、策略组分流与美观的界面设计。',
        features: ['JS脚本', '策略分流', '高级规则']
      },
      {
        name: 'Stash',
        link: '/clients/stash/',
        desc: 'iOS 上的 Clash 规则兼容工具，支持订阅直接导入与重写。',
        features: ['Clash配置兼容', '按需连接']
      },
      {
        name: 'Loon',
        link: '/clients/loon/',
        desc: '功能强大的 iOS 网络工具，支持插件生态与丰富协议。',
        features: ['插件系统', '优雅分流']
      }
    ]
  },
  {
    name: 'Android (安卓)',
    icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.551 0 .9993.4482.9993.9993.0001.5511-.4483.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993 0 .5511-.4482.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5802 8.3585 13.8437 8 12 8s-3.5802.3585-5.1368.9507L4.8409 5.4477a.416.416 0 00-.5676-.1521.416.416 0 00-.1521.5676l1.9973 3.4592C2.6889 11.1867.3432 14.6589 0 18.761h24c-.3432-4.1021-2.6889-7.5743-6.1185-9.4396"/></svg>`,
    clients: [
      {
        name: 'v2rayNG',
        link: '/clients/v2rayng/',
        desc: 'Android 平台最主流的 V2Ray 客户端，开箱即用，支持丰富协议。',
        badge: '安卓标配',
        badgeType: 'cyan',
        features: ['开源免费', '分应用代理', '分流规则']
      },
      {
        name: 'NekoBox for Android',
        link: '/clients/nekobox/',
        desc: '基于 sing-box 核心构建的高性能安卓代理客户端。',
        features: ['sing-box内核', '多协议支持']
      },
      {
        name: 'Hiddify (Android)',
        link: '/clients/hiddify/',
        desc: '极简风格，支持多种最新代理协议与自动化规则。',
        features: ['极简设计', '自动连接']
      }
    ]
  }
]
</script>

<style scoped>
.client-matrix {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.25rem;
  margin: 1.5rem 0;
}

.platform-column {
  background: #11151A;
  border: 1px solid #1E2633;
  border-radius: 12px;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
}

.platform-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding-bottom: 0.85rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid #1A222E;
}

.platform-icon {
  color: #00E5FF;
  display: flex;
  align-items: center;
}

.platform-title {
  margin: 0 !important;
  font-size: 1.05rem !important;
  font-weight: 700 !important;
  color: #FFFFFF !important;
  border: none !important;
  padding: 0 !important;
}

.platform-count {
  margin-left: auto;
  font-size: 0.75rem;
  color: #64748B;
  background: #161C24;
  padding: 0.15rem 0.45rem;
  border-radius: 4px;
}

.clients-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  flex: 1;
}

.client-item {
  background: #151A22;
  border: 1px solid #202936;
  border-radius: 8px;
  padding: 0.9rem;
  text-decoration: none !important;
  transition: all 0.18s ease;
  display: flex;
  flex-direction: column;
}

.client-item:hover {
  background: #19212C;
  border-color: #334155;
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.35);
}

.client-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.35rem;
}

.client-name {
  font-size: 0.95rem;
  font-weight: 600;
  color: #F1F5F9;
}

.tag-badge {
  font-size: 0.7rem;
  font-weight: 600;
  padding: 0.15rem 0.4rem;
  border-radius: 4px;
}

.tag-badge.cyan {
  background: rgba(0, 229, 255, 0.12);
  color: #00E5FF;
  border: 1px solid rgba(0, 229, 255, 0.3);
}

.tag-badge.amber {
  background: rgba(245, 158, 11, 0.12);
  color: #F59E0B;
  border: 1px solid rgba(245, 158, 11, 0.3);
}

.client-desc {
  font-size: 0.82rem;
  color: #94A3B8;
  margin: 0 0 0.6rem 0;
  line-height: 1.45;
}

.client-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
  margin-top: auto;
}

.mini-tag {
  font-size: 0.72rem;
  background: #0E1217;
  color: #64748B;
  padding: 0.1rem 0.4rem;
  border-radius: 3px;
  border: 1px solid #1C232D;
}
</style>
