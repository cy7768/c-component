<template>
  <div class="component-test">
    <el-space direction="vertical">
      <el-card shadow="none" v-for="route in router" :key="route.children" :label="route.meta?.title || route.name"
        :name="route.path">
        <template #header>
          <el-text>{{ route.meta?.title || route.name }}</el-text>
        </template>
        <el-card shadow="none" v-for="child in route.children" :key="child.name">
          <component :is="getComponent(child.name as string)" />
        </el-card>
      </el-card>
    </el-space>
  </div>
</template>

<script setup lang="ts">
import { ElCard, ElSpace } from 'element-plus/es'
import { ref, defineAsyncComponent } from 'vue'
import { getRouter } from '@/utility/routerUtility'
const router = getRouter()

const getComponent = (name: string) => {
  return defineAsyncComponent(() => import(`../pages/${name}.vue`))
}
</script>

<style scoped>
.component-test {
  padding: 20px;
}

.page-title {
  margin-bottom: 20px;
}
</style>