# C-Component

基于 Vue 3 + TypeScript 的组件库，集成了 Element Plus，提供更丰富的组件功能和更好的 TypeScript 支持。

## 安装

NPM

npm install c-component

PNPM (推荐)

pnpm add c-component


## 版本兼容性

| 依赖项       | 版本要求 |
| ------------ | -------- |
| Vue          | ^3.5.13   |
| TypeScript   | ^5.2.2   |
| Element Plus | ^2.9.0   |
| @vueuse/core | ^12.0.0  |

## 快速开始

### 完整引入

```typescript
import { createApp } from 'vue'
import CComponent from 'c-component'
import 'element-plus/dist/index.css'
import 'c-component/dist/style.css'
import App from './App.vue'
const app = createApp(App)
app.use(CComponent)
app.mount('#app')
```

### 按需引入

```vue
<template>
<c-button type="primary">按钮</c-button>
</template>
<script setup lang="ts">
import { CButton } from 'c-component'
</script>
```

## 组件文档

### Button 按钮组件

基于 Element Plus 的 Button 组件扩展，提供更多功能。

#### 代码示例

```vue
<template>
  <c-button type="primary" size="large">
    主要按钮
  </c-button>
</template>
```

#### API

| 属性 | 说明     | 类型                                                      | 默认值    |
| ---- | -------- | --------------------------------------------------------- | --------- |
| type | 按钮类型 | 'primary' \| 'success' \| 'warning' \| 'danger' \| 'info' | -         |
| size | 按钮大小 | 'large' \| 'default' \| 'small'                           | 'default' |

### Input 输入框组件

扩展自 Element Plus 的 Input 组件。

#### 代码示例

```vue
<template>
  <c-input v-model="value" placeholder="请输入" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
const value = ref('')
</script>
```

#### API

| 属性        | 说明     | 类型   | 默认值 |
| ----------- | -------- | ------ | ------ |
| modelValue  | 绑定值   | string | -      |
| placeholder | 占位文本 | string | -      |

## 开发计划

- [ ] 组件单元测试
- [ ] 组件文档网站
- [ ] 主题定制功能
- [ ] 更多组件支持

## 本地开发

```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev

# 构建组件库
pnpm build

# 预览构建结果
pnpm preview
```

## 贡献指南

1. Fork 本仓库
2. 创建你的特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交你的更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开一个 Pull Request

## 许可证

[MIT](LICENSE)

## 更新日志

查看 [CHANGELOG.md](CHANGELOG.md) 了解详细更新历史。

## 常见问题

### Q: 如何自定义主题？
A: 目前主题定制功能正在开发中，将在后续版本中支持。

### Q: 支持 Vue 2 吗？
A: 本组件库仅支持 Vue 3，不支持 Vue 2。

## 作者

CYQ

## 致谢

- [Vue](https://vuejs.org/)
- [Element Plus](https://element-plus.org/)
- [VueUse](https://vueuse.org/)
```

这个 README.md 的特点：

1. 基于实际项目的依赖版本
2. 包含了实际的开发命令
3. 组件示例基于当前项目的实际组件
4. 版本兼容性基于 package.json 中的依赖
5. 保持了简洁清晰的结构
6. 包含了所有必要的章节

建议后续补充：
1. 添加在线演示网站链接
2. 补充更多组件的文档
3. 添加实际的更新日志
4. 添加项目 Logo

```

</rewritten_file>

```

</rewritten_file>