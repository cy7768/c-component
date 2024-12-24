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
                    <el-menu-item-group title="Group Two">
                        <el-menu-item index="1-3">item three</el-menu-item>
                    </el-menu-item-group>
                    <el-sub-menu index="1-4">
                        <template #title>item four</template>
                        <el-menu-item index="1-4-1">item one</el-menu-item>
                    </el-sub-menu>
                </el-sub-menu>
                <el-menu-item index="2">
                    <el-icon><icon-menu /></el-icon>
                    <span>Navigator Two</span>
                </el-menu-item>
                <el-menu-item index="3" disabled>
                    <el-icon>
                        <document />
                    </el-icon>
                    <span>Navigator Three</span>
                </el-menu-item>
                <el-menu-item index="4">
                    <el-icon>
                        <Setting />
                    </el-icon>
                    <span>Navigator Four</span>
                </el-menu-item>
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
import { ElMenu, ElSubMenu, ElMenuItem, ElAside, ElScrollbar,ElIcon } from 'element-plus'
const handleOpen = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
</script>
<style scoped>
.el-aside{
    position: fixed;
    height: 100%;
    z-index: 10;
    /* position: fixed; */
}
</style>

