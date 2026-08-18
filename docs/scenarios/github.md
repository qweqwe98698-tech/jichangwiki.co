---
title: GitHub 访问加速与 Git Clone 命令行代理配置
description: 解决 GitHub 网页打不开、图片加载失败以及 Git 命令行 Clone/Push 超时的终端代理配置方案。
updated: 2026-08-18
lastReviewed: 2026-08-18
difficulty: medium
category: 使用场景
---

# GitHub 访问加速与 Git 命令行配置

<AnswerBox question="Git 命令行 clone 代码频繁报错 Failed to connect to github.com 怎么办？">
在终端运行 Git 代理命令，将 HTTP 代理指向本地端口：<br><code>git config --global http.proxy http://127.0.0.1:7890</code><br>或在客户端中直接开启 <strong>TUN 虚拟网卡模式</strong>。
</AnswerBox>

---

## 💻 常用 Git 代理配置命令

```bash
# 设置 HTTP / HTTPS 代理 (以本地端口 7890 为例)
git config --global http.proxy http://127.0.0.1:7890
git config --global https.proxy http://127.0.0.1:7890

# 若需取消 Git 全局代理
git config --global --unset http.proxy
git config --global --unset https.proxy
```
