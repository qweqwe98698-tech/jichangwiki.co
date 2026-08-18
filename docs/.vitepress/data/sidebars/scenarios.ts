export const scenariosSidebar = [
  {
    text: '使用场景总览',
    collapsed: false,
    items: [
      { text: '常见使用场景与网络配置', link: '/scenarios/' }
    ]
  },
  {
    text: 'AI 与办公协同场景',
    collapsed: false,
    items: [
      { text: 'ChatGPT / OpenAI 访问排查与节点要求', link: '/scenarios/chatgpt' },
      { text: 'Claude / Anthropic 封号与节点排查', link: '/scenarios/claude' },
      { text: 'Google Gemini 区域限制排查', link: '/scenarios/gemini' },
      { text: 'Google 全家桶与搜索异常', link: '/scenarios/google' },
      { text: 'GitHub 访问与 Git Clone 加速', link: '/scenarios/github' },
      { text: '远程办公与企业协作 (Remote Work)', link: '/scenarios/remote-work' }
    ]
  },
  {
    text: '流媒体与社交媒体场景',
    collapsed: false,
    items: [
      { text: 'YouTube 4K/8K 播放与测速卡顿', link: '/scenarios/youtube' },
      { text: 'Netflix 网飞非自制剧解锁与地区限制', link: '/scenarios/netflix' },
      { text: 'Telegram 电报连接与收不到验证码', link: '/scenarios/telegram' },
      { text: '全球流媒体解锁机制与 DNS 关系', link: '/scenarios/streaming' }
    ]
  }
]
