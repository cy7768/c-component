<template>
  <el-button 
    :type="type"
    :size="size"
    :disabled="disabled"
    @click="handleClick"
  >
    <slot></slot>
  </el-button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ElButton } from 'element-plus'

export default defineComponent({
  name: 'CButton',
  components: { ElButton },
  props: {
    type: {
      type: String,
      default: 'default'
    },
    size: {
      type: String,
      default: 'default'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  emits: ['click'],
  setup(props, { emit }) {
    const handleClick = (e: MouseEvent) => {
      emit('click', e)
    }
    return { handleClick }
  }
})
</script>

<style lang="scss" scoped>

</style> 