<template>
  <el-config-provider :namespace="namespace">
    <el-switch v-model="isDark" inline-prompt size="large"
      style="--el-switch-on-color: #242424; --el-switch-off-color: #409EFF" :active-icon="Moon"
      :inactive-icon="Sunny" />
    <router-view></router-view>
  </el-config-provider>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Moon, Sunny } from '@element-plus/icons-vue'
import { useDark, useToggle } from '@vueuse/core'
import { ElSwitch } from 'element-plus/es'

const isDark = useDark()
const namespace = 'ep'
</script>

<style>
html.dark {
  --el-bg-color: #141414;
  --el-text-color-primary: #E5EAF3;
  --el-text-color-regular: #CFD3DC;
  --el-button-bg-color: #626aef;
  --el-button-text-color: #fff;
  --el-button-hover-bg-color: #727fff;
  --el-button-hover-text-color: #fff;
  --el-button-disabled-bg-color: #4c4c4c;
  --el-button-disabled-text-color: #a8abb2;
  color-scheme: dark;
}

.theme-switch {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;
  padding: 8px;
  border-radius: 8px;
  background-color: var(--el-bg-color);
  box-shadow: var(--el-box-shadow-lighter);
  transition: background-color 0.3s;
}
</style>