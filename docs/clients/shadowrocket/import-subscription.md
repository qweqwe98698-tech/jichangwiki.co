---
title: Shadowrocket (小火箭) 导入订阅链接与二维码扫描完整教程
description: 详尽讲解 iPhone / iPad Shadowrocket（小火箭）通过 URL 手动订阅导入、剪贴板自动识别、二维码扫码以及 Safari 一键添加节点配置的全部操作与失败应对方案。
updated: 2026-11-12
lastReviewed: 2026-11-12
difficulty: easy
category: 客户端指南
client: Shadowrocket
howto:
  name: 在 iPhone 上为 Shadowrocket 导入机场订阅链接
  description: 通过复制订阅 URL 或扫码快速把机场节点导入 Shadowrocket 并开启分流连接。
  steps:
    - name: 复制通用或小火箭专用订阅链接
      text: 在机场网站后台个人面板复制「通用订阅」或「Shadowrocket 订阅」地址（切勿复制错成 Clash YAML 地址）。
    - name: 在小火箭内新建 Subscribe 类型配置
      text: 打开 Shadowrocket，允许剪贴板读取弹窗，或点击右上角「+」，将类型 (Type) 选择为 Subscribe。
    - name: 粘贴 URL 并点击完成同步节点
      text: 在 URL 栏长按粘贴链接、备注填入机场名，点右上角「完成」，软件会自动拉取节点列表。
    - name: 切换到「配置 (Config)」模式并连接
      text: 确认底部栏「全局路由」选择为「配置」实现国内外自动分流，点击顶部总开关并授权系统 VPN 添加即可。
faq:
  - q: 小火箭从官网按钮点「一键导入」直接跳转到 App Store 或报错打不开怎么办？
    a: 常见原因是 Safari 弹出拦截、iOS 版本太旧或安装的是假冒盗版「小火箭」。切回 Safari 用「复制订阅地址」，手动到正版 Shadowrocket 右上角点击 + ➔ Subscribe 粘贴链接通常就能顺利完成。
  - q: 导入时 Type 选成节点格式或者混进了空格会怎么样？
    a: 类型必须选择「Subscribe（订阅）」而不是 Shadowsocks/VMess 单节点框；如果贴错成了网站首页地址或混进微信转发导致的转义字符，拉取后会报错 Invalid Subscribe。
  - q: 电脑端用什么配置？能否与小火箭共享同一个机场套餐？
    a: 完全可以。同一个机场账号下，在 iPhone 导入通用订阅到 Shadowrocket，在 Windows/macOS 按照 Clash Verge 导入指南复制 Clash 专用订阅即可在多端同时使用（留意商家账号的同时在线设备数规则）。
---

# Shadowrocket (小火箭) 导入订阅链接与二维码教程

<AnswerBox question="iPhone / iPad 小火箭怎么导入机场订阅节点？">
最稳定的三种方法：① <strong>复制「通用 / 小火箭专用订阅」URL ➔ 点右上角 <code>+</code> ➔ 类型选 <code>Subscribe</code> ➔ 粘贴 URL 保存</strong>；② <strong>点首页左上角扫码图标扫描机场页面二维码</strong>；③ 在 Safari 打开机场面板点击官方一键导入（仅部分浏览器支持）。<br>
注意：如果订阅栏原本就有旧节点，建议新导入前检查 <a href="/subscription/formats">订阅格式是否匹配</a>，避免误贴 Clash YAML 导致解析报错。
</AnswerBox>

---

## 一、方法一：手动粘贴 URL 链接（最稳定通用）

<StepGuide
  :steps="[
    {
      title: '步骤 1：从机场后台复制正确格式的订阅链接',
      desc: '用手机或电脑浏览器登录机场用户面板，点击复制「Shadowrocket 订阅」或「通用订阅（Base64）」。注意不要复制官网主页 URL，也不要直接通过微信转发后再二次复制。'
    },
    {
      title: '步骤 2：打开小火箭点击右上角 + 号',
      desc: '如果你已经开启了 iOS「从其他 App 粘贴」权限，打开小火箭可能会自动弹窗识别剪贴板并询问添加；如果没弹出，直接点主页右上角 <strong>+</strong> 号。'
    },
    {
      title: '步骤 3：类型选择 Subscribe 并保存',
      desc: '在第一行「类型 (Type)」里切换选定 <strong>Subscribe</strong>；在「URL」框长按粘贴刚刚复制的订阅链接，备注填入好辨认的名字，点击右上角「完成 (Save)」。'
    },
    {
      title: '步骤 4：切换为「配置」路由模式并连接',
      desc: '节点加载出来后，先确认主界面「全局路由」处于 <strong>配置 (Config)</strong> 模式（以保证微信、国内支付走直连），点选一条常用区域节点，拨动顶部主开关连接并按提示输入手机密码授权 VPN。'
    }
  ]"
/>

---

## 二、方法二：桌面/平板扫码一键添加（免复制防出错）

如果你正在用电脑浏览机场后台、手里拿着 iPhone 准备导入：
1. 在电脑端机场面板打开「订阅二维码」弹窗；
2. 打开手机端 Shadowrocket 首页，点击 **左上角方框扫描图标**；
3. 对准电脑屏幕二维码扫一下，软件会自动新增订阅分组并顺带拉出全部在线服务器，连粘贴错字母的可能都没有。

---

## 三、小火箭导入后常遇到的 3 个卡点与解决入口

- **提示 `Invalid Subscribe` 或 Update Failed**：重点排查 Safari 是否能够单独打开该 URL 看到内容，以及 iOS 剪贴板粘贴权限是否被系统禁用。详细按步骤修法查看：[Shadowrocket 订阅更新失败排查](/clients/shadowrocket/subscription-failed)。
- **列表导入成功，但全部测速显示 Timeout / 全红**：检查自动设置时间开关，更换测速 URL 测试，参考：[小火箭节点超时排查](/clients/shadowrocket/node-timeout)。
- **多端配合配置**：电脑端桌面推荐搭配 [Clash Verge Rev 订阅导入教程](/clients/clash-verge/import-subscription) 协同使用同一机场账号。

---

## 常见问题解答（FAQ）

### 小火箭从官网按钮点「一键导入」直接跳转到 App Store 或报错打不开怎么办？

常见原因是浏览器弹窗拦截、或误安装了高仿冒牌软件。切回 Safari 用「复制订阅地址」，手动到正版 Shadowrocket 右上角点击 `+ ➔ Subscribe` 粘贴链接最保险。

### 导入时 Type 选成节点格式或者混进了空格会怎么样？

类型必须选择 `Subscribe`（订阅）而不是单节点协议框；如果贴错成了网站首页地址或混进前后空格，拉取后会报错 `Invalid Subscribe`，排错参考 [导入失败常见原因](/subscription/import-failed)。

### 电脑端用什么配置？能否与小火箭共享同一个机场套餐？

完全可以。同一个机场账号下，在 iPhone 导入通用订阅到 Shadowrocket，在 Windows/macOS 按照 [Clash Verge 订阅导入教程](/clients/clash-verge/import-subscription) 复制 Clash 专用订阅即可协同使用。
