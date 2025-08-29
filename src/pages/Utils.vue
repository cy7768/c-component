<template>
  <div class="component-test">
    <h1 class="page-title">CssLayout-测试页面</h1>

    <div class="test-grid">
      <div class="test-item">
        <h2>position(定位) <el-switch v-model="isRead" :active-action-icon="View" :inactive-action-icon="Hide"></el-switch>
        </h2>
        <div class="position-container">
          <el-space fill wrap :fill-ratio="isRead ? 100 : 10" :direction="isRead ? 'vertical' : 'horizontal'"
                    style="width: 100%;">
            <el-card shadow="none" v-for="model in positionData" :key="model">
              <template #header>
                <h4>{{ model.title }}</h4>
              </template>
              <div class="position-content-container">
                <h5>{{ model.des }}</h5>
              </div>

            </el-card>
          </el-space>

        </div>
      </div>
    </div>
    <div class="test-grid">
      <div class="test-item">
        <h2>砌体布局-columns</h2>
        <div class="grid-container">
          <div v-for="fit in fits" :key="fit" class="block">
            <el-image :src="url" :fit="fit" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { Hide, View } from '@element-plus/icons-vue'
import { ElImage, ElCard, ElSpace, ElSwitch } from 'element-plus/es'

const fits = [
  'fill',
  'contain',
  'cover',
  'none',
  'scale-down',
] as const
const url =
    'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'

interface TableRow {
  id: number
  title: string
  des: string
}

const isRead = ref(false)
const positionData = ref<TableRow[]>([
  {
    id: 1,
    title: 'absolute',
    des: '属性用于将元素相对于最近的已定位祖先元素进行定位（如果没有已定位的祖先元素，则相对于初始包含块，即文档的根元素）'
  },
  {
    id: 2,
    title: 'fixed',
    des: '元素相对于视口进行定位，这意味着无论用户滚动页面，元素的位置都不会改变。'
  },
  {
    id: 3,
    title: 'relative',
    des: '元素相对于其正常位置进行定位，通常用于相对定位子元素。'
  },
  {
    id: 4,
    title: 'sticky',
    des: '元素根据用户的滚动位置进行定位，类似于固定定位，但只在用户滚动到一定位置时生效。'
  }
])

</script>

<style scoped>
.component-test {
  padding: 20px;
}

.page-title {
  font-size: 24px;
  margin-bottom: 20px;
}

.test-grid {
  display: grid;
}

.test-item {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  margin: 16px 0;
}

.test-item h2 {
  font-size: 18px;
  margin-bottom: 16px;
}

.button-group>* {
  margin-bottom: 8px;
}

.input-group>* {
  width: 100%;
  max-width: 300px;
}

.grid-container {
  columns: 300px 3;
}

.position-container {
  width: 100%;
}
</style>