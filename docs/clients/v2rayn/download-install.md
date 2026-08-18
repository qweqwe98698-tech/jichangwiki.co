---
title: v2rayN (Windows) 下载、安装与环境准备教程
description: 官方 GitHub Release 下载包选择（With-Core 版本与基础版）、.NET 8 桌面运行时安装与首次启动配置。
updated: 2026-08-18
lastReviewed: 2026-08-18
difficulty: easy
client: v2rayN
platform: Windows
---

# v2rayN 下载、安装与环境准备

<AnswerBox question="v2rayN 在 GitHub Release 应该下载哪一个压缩包？">
强烈建议下载名称包含 <code>With-Core.zip</code>（如 <code>v2rayN-With-Core.zip</code> 或 <code>zz_v2rayN-With-Core-SelfContained.7z</code>）的完整整合包。该版本内置了 Xray、sing-box 等必要核心，解压即可直接使用，无需单独下载内核。
</AnswerBox>

---

## 🛠️ 系统运行环境要求

1. **操作系统**：Windows 10 / Windows 11 (64位)。
2. **Microsoft .NET 运行时**：若下载的是普通版，首次运行会提示安装 `.NET Desktop Runtime 8.0`（点击提示中的微软官方链接下载安装即可）。若下载的是 `SelfContained` 独立版则无需安装任何运行时。

---

## 📥 安装步骤

<StepGuide
  :steps="[
    {
      title: '步骤 1：下载 With-Core 完整压缩包',
      desc: '在官方 GitHub Release 页面下载最新的 <code>v2rayN-With-Core.zip</code>。'
    },
    {
      title: '步骤 2：解压至无中文路径的文件夹',
      desc: '将压缩包解压到一个固定的英文路径（例如 <code>D:\\Tools\\v2rayN</code>）。请勿放在系统受限目录或包含特殊字符的文件夹中。'
    },
    {
      title: '步骤 3：运行主程序',
      desc: '双击运行 <code>v2rayN.exe</code>。软件启动后会自动最小化到 Windows 任务栏右下角托盘区（深蓝色 V 字图标）。'
    }
  ]"
/>
