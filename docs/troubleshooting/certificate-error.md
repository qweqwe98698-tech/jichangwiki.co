---
title: SSL / Certificate 校验异常排查
description: 浏览器访问网站时提示“您的连接不是私密连接 (NET::ERR_CERT_AUTHORITY_INVALID)”的修复手册。
updated: 2026-08-18
lastReviewed: 2026-08-18
difficulty: hard
category: 故障排查
---

# SSL / Certificate 校验异常排查

<div class="jw-badge jw-badge-red">证书异常</div>

<AnswerBox question="浏览器访问任何网站都提示证书无效 (NET::ERR_CERT_AUTHORITY_INVALID)？">
这通常是因为开启了 **MitM (中间人解密 / HTTPS 抓包)** 但未在操作系统中安装受信任的根证书，或者杀毒软件（如卡巴斯基/ESET）开启了 HTTPS 扫描导致的拦截。在客户端中关闭 MitM 功能或导入证书即可。
</AnswerBox>

---

## 🛠️ 解决步骤

1. **关闭客户端 MitM / HTTPS 解密**：在 Shadowrocket 或 Surge 中关闭「HTTPS 解密」开关。
2. **退出第三方杀毒软件的 Web 过滤**：关闭杀毒软件中的“扫描加密连接”选项。
3. **修复系统根证书库**：Windows Update 更新最新根证书。
