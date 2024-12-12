<template>
  <el-button :type="type as any" :size="size as any" :disabled="disabled" @click="emit('click', $event)">
    <slot></slot>
  </el-button>
</template>

<script setup lang="ts">
import { ElButton } from 'element-plus'

type ButtonType = '' | 'default' | 'primary' | 'success' | 'warning' | 'info' | 'danger' | 'text'
type ButtonSize = '' | 'default' | 'small' | 'large'

defineOptions({
  name: 'CButton'
})

const props = withDefaults(defineProps<{
  type?: ButtonType
  size?: ButtonSize
  disabled?: boolean
}>(), {
  type: 'default',
  size: 'default',
  disabled: false
})

const emit = defineEmits<{
  click: [e: MouseEvent]
}>()
</script>

<style lang="scss" scoped></style>