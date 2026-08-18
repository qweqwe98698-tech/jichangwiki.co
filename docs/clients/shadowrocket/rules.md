---
title: Shadowrocket 分流规则与配置模块
description: 掌握小火箭的规则语法、远程规则集导入、广告拦截模块与自定义分流策略。
updated: 2026-08-18
lastReviewed: 2026-08-18
difficulty: medium
client: Shadowrocket
---

# Shadowrocket 分流规则与配置模块

<AnswerBox question="小火箭如何实现精细化的域名与应用分流？">
在小火箭底栏进入「配置 (Config)」页面，点击「default.conf」可以查看和添加规则。常见规则语法包括 `DOMAIN-SUFFIX`（域名后缀）、`IP-CIDR`（IP段）与 `GEOIP`（国家代码）。
</AnswerBox>

---

## 📜 常用规则语法与示例

在小火箭的规则列表中，每条规则由三部分组成：`规则类型, 匹配值, 策略动作`。

```ini
# 1. 域名后缀匹配：所有以 google.com 结尾的域名走 PROXY
DOMAIN-SUFFIX,google.com,PROXY

# 2. 国内主流域名直连：所有以 baidu.com 结尾的直连
DOMAIN-SUFFIX,baidu.com,DIRECT

# 3. 广告拦截：遇到常见广告追踪域名直接 REJECT
DOMAIN-KEYWORD,adservice,REJECT

# 4. 国内 IP 地址库匹配：命中中国大陆 IP 的流量全部直连
GEOIP,CN,DIRECT

# 5. 兜底规则（必须放在最后）：未匹配到以上任何规则的全部走代理
FINAL,PROXY
```

---

## 📦 导入第三方预置规则集

如果不想手动维护规则，可以在「配置」页面点击右上角「+」，输入开源社区维护的标准规则文件 URL（如 ACL4SSR 规则），点击下载后长按选择「使用配置」即可。
