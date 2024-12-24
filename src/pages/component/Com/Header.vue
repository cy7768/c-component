<template>
    <el-header class="header">
        <el-menu router="true" :default-active="activeIndex" mode="horizontal" :ellipsis="false" @select="handleSelect">
            <el-menu-item route="/" index="0">
                <img style="width: 100px" :src="logo"
                    alt="Element logo" />
            </el-menu-item>
            <el-menu-item index="1">

                <el-switch v-model="isDark" inline-prompt size="small"
                    style="--el-switch-on-color: #242424; --el-switch-off-color: #409EFF" :active-icon="Moon"
                    :inactive-icon="Sunny" />


            </el-menu-item>
            <el-sub-menu index="2">
                <template #title>Workspace</template>
                <el-menu-item index="2-1" route="/css-test">item one</el-menu-item>
                <el-menu-item index="2-2">item two</el-menu-item>
                <el-menu-item index="2-3">item three</el-menu-item>
                <el-sub-menu index="2-4">
                    <template #title>item four</template>
                    <el-menu-item index="2-4-1">item one</el-menu-item>
                    <el-menu-item index="2-4-2">item two</el-menu-item>
                    <el-menu-item index="2-4-3">item three</el-menu-item>
                </el-sub-menu>
            </el-sub-menu>
        </el-menu>
    </el-header>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { ElMenu, ElSubMenu, ElMenuItem, ElHeader, ElSwitch } from 'element-plus'
import logo from '../../../public/images/logo.png'

import { Moon, Sunny } from '@element-plus/icons-vue'
import { useDark, useToggle } from '@vueuse/core'
const isDark = useDark()

const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
</script>
<style scoped>
.el-menu--horizontal>.el-menu-item:nth-child(1) {
    margin-right: auto;
}

.header {
    top: 0;
    left: 0;
    position: relative;
    z-index: 12;
}

@media screen and (min-width: 0px) {
    .header {
        position: sticky;
        width: 100%;
    }
}

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
