<template>
  <div class="component-test">
    <h1 class="page-title">组件测试页面</h1>
    
    <div class="test-grid">
      <div class="test-item">
        <h2>基础按钮测试</h2>
        <div class="component-container">
          <div class="button-group">
            <CButton>默认按钮</CButton>
            <CButton type="primary">主要按钮</CButton>
            <CButton type="success">成功按钮</CButton>
            <CButton type="warning">警告按钮</CButton>
            <CButton type="danger">危险按钮</CButton>
          </div>
        </div>
      </div>
      
      <div class="test-item">
        <h2>按钮尺寸测试</h2>
        <div class="component-container">
          <div class="button-group">
            <CButton size="small">小型按钮</CButton>
            <CButton>默认尺寸</CButton>
            <CButton size="large">大型按钮</CButton>
          </div>
        </div>
      </div>

      <div class="test-item">
        <h2>禁用状态测试</h2>
        <div class="component-container">
          <div class="button-group">
            <CButton disabled>禁用按钮</CButton>
            <CButton type="primary" disabled>禁用主要按钮</CButton>
            <ElButton type="primary">禁用按钮</ElButton>
          </div>
        </div>
      </div>

      <div class="test-item">
        <h2>基础输入框测试</h2>
        <div class="component-container">
          <div class="input-group">
            <CInput v-model="inputValue" placeholder="请输入内容" />
            <div class="value-display">当前值: {{ inputValue }}</div>
          </div>
        </div>
      </div>
      
      <div class="test-item">
        <h2>禁用状态测试</h2>
        <div class="component-container">
          <div class="input-group">
            <CInput disabled placeholder="禁用状态" />
            <ElInput disabled placeholder="Element Plus 禁用状态" />
          </div>
        </div>
      </div>
      
      <div class="test-item">
        <h2>可清空输入框</h2>
        <div class="component-container">
          <div class="input-group">
            <CInput v-model="clearableValue" clearable placeholder="可清空" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { CButton, CInput } from '../package/components'
import { ElButton, ElInput } from 'element-plus/es'

const inputValue = ref('')
const clearableValue = ref('')
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
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.test-item {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
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

.button-group > * {
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

.input-group > * {
  width: 100%;
  max-width: 300px;
}
</style> 