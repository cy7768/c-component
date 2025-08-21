<template>
    <el-dialog :title="title" v-model="dialogVisible" v-bind="$attrs">

    </el-dialog>

</template>
<script lang="ts" setup>
import { computed } from 'vue'
import { ElDialog } from 'element-plus'
const props = defineProps({
    title: {
        type: String,
        default: '对话框标题'
    },
    modelValue: {
        type: Boolean,
        default: false
    }
})
const emits = defineEmits(['update:modelValue'])

const dialogVisible = computed({
    get() { return props.modelValue },
    set(val) { emits('update:modelValue', val) }

});

</script>