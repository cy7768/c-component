<template>
    <el-aside class="aside">
        <el-scrollbar>
            <el-menu router="true" default-active="2" class="el-aside" @open="handleOpen" @close="handleClose">
                <el-sub-menu index="1">
                    <template #title>
                        <el-icon>
                            <location />
                        </el-icon>
                        <span>组件</span>
                    </template>
                    <el-menu-item-group title="Group One">
                        <el-menu-item index="1-1" route="/component-search">查询组件</el-menu-item>
                        <el-menu-item index="1-2" route="/component-edit-table">可编辑表格</el-menu-item>
                    </el-menu-item-group>
                </el-sub-menu> 
                <el-sub-menu index="2">
                    <template #title>
                        <el-icon><icon-menu /></el-icon>
                        <span>CSS</span>
                    </template>
                    <el-menu-item-group title="Group One">
                        <el-menu-item index="2-1" route="/css-layout">Css布局</el-menu-item>
                    </el-menu-item-group>
                </el-sub-menu>
              
            </el-menu>
        </el-scrollbar>
    </el-aside>
</template>

<script lang="ts" setup>
import {
    Document,
    Menu as IconMenu,
    Location,
    Setting,
} from '@element-plus/icons-vue'
import { ElMenu, ElSubMenu, ElMenuItem, ElAside, ElScrollbar, ElIcon } from 'element-plus'
const handleOpen = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
</script>
<style scoped>
.el-aside {
    position: fixed;
    height: 100%;
    z-index: 10;
    /* position: fixed; */
}
</style>
