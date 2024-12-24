<template>

  <el-config-provider :namespace="namespace">
    <el-container class="common-layout">
      <Header />
      <el-container>
        <Aside />
        <Main />
      </el-container>
    </el-container>
  </el-config-provider>


</template>
<script setup lang="ts">
import {  ElContainer, ElAside, ElMain } from 'element-plus'
import Header from './Header.vue'
import Main from './Main.vue'
import Aside from './Aside.vue'

const namespace = 'ep'
</script>

<style scoped>

.common-layout {
 display: flex;
 flex-direction: column;
 padding: 0;
}

</style>
