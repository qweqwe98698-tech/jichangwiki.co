const fs = require('fs')
const path = require('path')

const srcDir = 'C:\\Users\\Pro User\\Desktop\\博客第二阶段\\extracted'
const dstDir = path.join(__dirname, '..', 'docs', 'public', 'images', 'speedtest')

if (!fs.existsSync(dstDir)) {
  fs.mkdirSync(dstDir, { recursive: true })
}

const map = {
  '光速云-节点测速实测.png': 'guangsuyun.png',
  '星岛梦-节点测速实测.png': 'xingdaomeng.png',
  '灵猫网络-节点测速实测.png': 'civetnet.png',
  '飞猫云-节点测速实测.png': 'flycat.png',
  '唯兔云-节点测速实测.png': 'v2yun.png',
  '宇宙云-节点测速实测.png': 'yuzhoucloud.png',
  'U1S1-节点测速实测.png': 'u1s1.png',
  '极连云-节点测速实测.png': 'jilianyun.png',
  '光年梯-节点测速实测.png': 'guangnianti.png',
  '一翻云-节点测速实测.png': 'yifanyun.png',
  '二猫云-节点测速实测.png': 'ermaoyun.png',
  'SOGO云-节点测速实测.png': 'sogoyun.png',
  '可信云-节点测速实测.png': 'kexinyun.png',
  '速界-节点测速实测.png': 'sujie.png',
  '快狸-节点测速实测.png': 'kuaili.png',
  '全球云-节点测速实测.png': 'quanqiuyun.png',
}

for (const [srcName, dstName] of Object.entries(map)) {
  const srcFile = path.join(srcDir, srcName)
  const dstFile = path.join(dstDir, dstName)
  if (fs.existsSync(srcFile)) {
    fs.copyFileSync(srcFile, dstFile)
    console.log(`Copied: ${srcName} -> ${dstName}`)
  } else {
    console.warn(`Source not found: ${srcFile}`)
  }
}

console.log('All 16 speedtest benchmark images copied successfully!')
