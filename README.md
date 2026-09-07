# gridea-theme-shred

作者：[imyzt](https://github.com/imyzt)

面向 [Gridea Pro](https://gridea.dev/) 的独立主题插件。首页信息架构与碎纸片卡片视觉适量参考 [justin3go.com](https://justin3go.com/#projects) 的个人页，但保持可配置、可开源的博客主题形态。

## 特点

- 白底 editorial 首页：Hero → 碎纸片文章卡 → 标签 → 关于
- 左侧章节轨（宽屏）：`01 文章 / 02 标签 / 03 关于`
- 碎纸片倾斜卡片 + 锯齿边缘（参考作品区 scrap card，非照搬内容）
- 浅色默认，支持深浅切换
- **不修改** Gridea 内置或其他主题源码

## 安装

把本仓库放到 Gridea 的 themes 目录（或软链接）：

```bash
# 推荐：开发机软链接
ln -sfn ~/dev/openSource/gridea-theme-shred ~/Documents/Gridea/themes/shred-theme

# 或直接 clone
git clone https://github.com/imyzt/gridea-theme-shred.git shred-theme
```

在 Gridea Pro 主题列表选择 **shred**，预览 / 重新生成站点。

目录名建议为 `shred-theme`，与 `config.json` 里站点的 `themeName` 一致。

## 配置

主题面板可改：Hero 文案、Motto、文章区标题、强调色、默认深浅色、社交链接等。

## 开发

```text
gridea-theme-shred/
├── config.json          # 主题元数据与自定义配置项
├── templates/           # Jinja2 模板
├── assets/
│   ├── styles/          # CSS（shred.css 为视觉主层）
│   └── scripts/         # shred.js
└── README.md
```

改完主题文件后，在 Gridea 里重新预览即可。

## License

MIT
