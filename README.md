# SUP-UI

基于 Vue 3 + TypeScript 的组件库，集成了 Element Plus，提供更好的 TypeScript 支持。

## 安装

```bash
# NPM
npm install @cy7768/sup-ui

# PNPM (推荐)
pnpm add @cy7768/sup-ui
```

## 版本兼容性

| 依赖项       | 版本要求 |
| ------------ | -------- |
| Vue          | ^3.5.13  |
| Element Plus | ^2.5.0   |
| TypeScript   | ^4.9.0   |

## 快速开始

### 完整引入

```typescript
import { createApp } from 'vue'
import SupUI from '@cy7768/sup-ui'
import 'element-plus/dist/index.css'
import App from './App.vue'

const app = createApp(App)
app.use(SupUI)
app.mount('#app')
```

### 按需引入

```vue
<template>
  <c-button type="primary">按钮</c-button>
  <c-input v-model="value" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { CButton, CInput } from '@cy7768/sup-ui'

const value = ref('')
</script>
```

## 组件文档

### Button 按钮

基于 Element Plus 的 Button 组件封装。

```vue
<template>
  <c-button 
    type="primary"
    size="default"
    :disabled="false"
    @click="handleClick"
  >
    按钮
  </c-button>
</template>
```

#### Props

| 属性     | 说明     | 类型    | 可选值                                                                | 默认值    |
| -------- | -------- | ------- | --------------------------------------------------------------------- | --------- |
| type     | 类型     | string  | default / primary / success / warning / info / danger / text          | default   |
| size     | 尺寸     | string  | default / small / large                                               | default   |
| disabled | 是否禁用 | boolean | true / false                                                          | false     |

### Input 输入框

基于 Element Plus 的 Input 组件封装。

```vue
<template>
  <c-input v-model="value" />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref('')
</script>
```

#### Props

| 属性       | 说明   | 类型           | 默认值 |
| ---------- | ------ | -------------- | ------ |
| modelValue | 绑定值 | string/number  | -      |

## 本地开发

```bash
# 安装依赖
pnpm install

# 构建组件库
pnpm build
```

## 许可证

[MIT](LICENSE)
```

</rewritten_file>