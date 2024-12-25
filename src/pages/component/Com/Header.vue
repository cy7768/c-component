<template>
    <el-header class="header">

        <el-menu :router="true" :default-active="activeIndex" mode="horizontal" :ellipsis="false" @select="handleSelect">
            <el-menu-item route="/" index="0">
                <img style="width: 100px" :src="isDark ? ph_logo : logo" alt="Element logo" />
            </el-menu-item>
            <div class="switch-wrapper">
                <el-switch v-model="isDark" inline-prompt
                    style="--el-switch-on-color: #242424; --el-switch-off-color: #409EFF" :active-icon="Moon"
                    :inactive-icon="Sunny" />
            </div>
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
import logo from '/images/logo.png'
import ph_logo from '/images/ph_logo.png'

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

.switch-container {
    display: flex;
    align-items: center;
    height: 100%;
}

.switch-wrapper {
    display: flex;
    align-items: center;
    padding: 0 20px;
    height: 100%;
}
</style>
