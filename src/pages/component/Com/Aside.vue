<template>
    <el-aside class="aside">
        <el-scrollbar>
            <el-menu :router="true" default-active="2" class="el-aside" @open="handleOpen" @close="handleClose">
                <el-sub-menu :index="index" v-for="(route, index) in router" :key="route.path">
                    <template #title>
                        <el-icon>
                            <location />
                        </el-icon>
                        <span>{{ route.meta?.title }}</span>
                    </template>
                    <el-menu-item-group v-for="(item, cindex) in route.children" :key="item.path" title="Group One">
                        <el-menu-item :index="index-cindex" :route="item.path">{{ item.meta?.title }}</el-menu-item>
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
import { getRouter } from '@/utility/routerUtility'
const router = getRouter()
console.log(router, 'router')
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
