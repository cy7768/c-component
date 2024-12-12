<template>
  <el-input
    v-model="modelValue"
    v-bind="$attrs"
    @input="handleInput"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ElInput } from 'element-plus'

export default defineComponent({
  name: 'CInput',
  components: { ElInput },
  props: {
    modelValue: {
      type: [String, Number],
      default: ''
    }
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const handleInput = (value: string) => {
      emit('update:modelValue', value)
    }
    return { handleInput }
  }
})
</script>

<style lang="scss" scoped>

</style> 