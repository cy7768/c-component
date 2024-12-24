<template>
    <el-main>
        <el-scrollbar>
            <router-view class="main"></router-view>
        </el-scrollbar>
    </el-main>
</template>
<script setup lang="ts">
import { ElMain, ElScrollbar } from 'element-plus'
</script>
<style scoped>
.main {
    position: relative;
    max-width:calc(100vw - 400px);
    left: 300px;
}
</style>

