<template>
  <div class="component-test">
    <h1 class="page-title">CSearch-测试页面</h1>

    <div class="test-grid">

      <div class="test-item">
        <h2>弹窗组件</h2>
        <div class="component-container">
          <c-dialog v-model="dialogVisible" title="弹窗标题"></c-dialog>



          <c-button @click="openDialog">打开弹窗</c-button>

        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { CButton, CDialog } from '@/package/components'
import { open, opendir } from 'fs';

const dialogVisible = ref();
const openDialog= ()=>{
  console.log(dialogVisible.value);

  dialogVisible.value = true;
}

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

.component-container {
  min-height: 100px;
  border-radius: 4px;
  padding: 16px;
}

.button-group {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.button-group>* {
  margin-bottom: 8px;
}

.input-group {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.value-display {
  margin-top: 8px;
  color: #666;
  font-size: 14px;
}

.input-group>* {
  width: 100%;
  max-width: 300px;
}

.test-container {
  padding: 20px;
}

.form-actions {
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
  align-items: center;
}

.grid-container {

  /* column-count: 3; */
  columns: 300px 3
    /* display: grid;
  grid-template-columns: 10% 59% 30%;
  flex-wrap: wrap;
  gap: 1%; */

    /* el-row {
    width: 100%;
    border: 1px solid #d12e2e;
  } */
}
</style>