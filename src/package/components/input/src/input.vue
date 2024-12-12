<template>
  <el-input :model-value="modelValue" @update:modelValue="emit('update:modelValue', $event)" v-bind="$attrs" />
</template>

<script setup lang="ts">
import { ElInput } from 'element-plus'

defineOptions({
  name: 'CInput'
})

const props = defineProps<{
  modelValue?: string | number
}>()

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()
</script>

<style lang="scss" scoped></style>