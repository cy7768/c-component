/// <reference types="../../node_modules/.vue-global-types/vue_3.5_false.d.ts" />
import { ref } from 'vue';
import { CButton, CInput } from '../components';
import { ElButton, ElInput } from 'element-plus/es';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const inputValue = ref('');
const clearableValue = ref(''); /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_fnComponent = (await import('vue')).defineComponent({});
;
let __VLS_functionalComponentProps;
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_localComponents = {
        ...{},
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_components;
    const __VLS_localDirectives = {
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_directives;
    let __VLS_styleScopedClasses;
    __VLS_styleScopedClasses['test-item'];
    __VLS_styleScopedClasses['button-group'];
    __VLS_styleScopedClasses['input-group'];
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("component-test") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({ ...{ class: ("page-title") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("test-grid") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("test-item") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("component-container") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("button-group") }, });
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.CButton;
    /** @type { [typeof __VLS_components.CButton, typeof __VLS_components.CButton, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
    const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
    __VLS_nonNullable(__VLS_5.slots).default;
    var __VLS_5;
    const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.CButton;
    /** @type { [typeof __VLS_components.CButton, typeof __VLS_components.CButton, ] } */
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ type: ("primary"), }));
    const __VLS_8 = __VLS_7({ type: ("primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    __VLS_nonNullable(__VLS_11.slots).default;
    var __VLS_11;
    const __VLS_12 = __VLS_resolvedLocalAndGlobalComponents.CButton;
    /** @type { [typeof __VLS_components.CButton, typeof __VLS_components.CButton, ] } */
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ type: ("success"), }));
    const __VLS_14 = __VLS_13({ type: ("success"), }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    __VLS_nonNullable(__VLS_17.slots).default;
    var __VLS_17;
    const __VLS_18 = __VLS_resolvedLocalAndGlobalComponents.CButton;
    /** @type { [typeof __VLS_components.CButton, typeof __VLS_components.CButton, ] } */
    // @ts-ignore
    const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({ type: ("warning"), }));
    const __VLS_20 = __VLS_19({ type: ("warning"), }, ...__VLS_functionalComponentArgsRest(__VLS_19));
    __VLS_nonNullable(__VLS_23.slots).default;
    var __VLS_23;
    const __VLS_24 = __VLS_resolvedLocalAndGlobalComponents.CButton;
    /** @type { [typeof __VLS_components.CButton, typeof __VLS_components.CButton, ] } */
    // @ts-ignore
    const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({ type: ("danger"), }));
    const __VLS_26 = __VLS_25({ type: ("danger"), }, ...__VLS_functionalComponentArgsRest(__VLS_25));
    __VLS_nonNullable(__VLS_29.slots).default;
    var __VLS_29;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("test-item") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("component-container") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("button-group") }, });
    const __VLS_30 = __VLS_resolvedLocalAndGlobalComponents.CButton;
    /** @type { [typeof __VLS_components.CButton, typeof __VLS_components.CButton, ] } */
    // @ts-ignore
    const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({ size: ("small"), }));
    const __VLS_32 = __VLS_31({ size: ("small"), }, ...__VLS_functionalComponentArgsRest(__VLS_31));
    __VLS_nonNullable(__VLS_35.slots).default;
    var __VLS_35;
    const __VLS_36 = __VLS_resolvedLocalAndGlobalComponents.CButton;
    /** @type { [typeof __VLS_components.CButton, typeof __VLS_components.CButton, ] } */
    // @ts-ignore
    const __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36({}));
    const __VLS_38 = __VLS_37({}, ...__VLS_functionalComponentArgsRest(__VLS_37));
    __VLS_nonNullable(__VLS_41.slots).default;
    var __VLS_41;
    const __VLS_42 = __VLS_resolvedLocalAndGlobalComponents.CButton;
    /** @type { [typeof __VLS_components.CButton, typeof __VLS_components.CButton, ] } */
    // @ts-ignore
    const __VLS_43 = __VLS_asFunctionalComponent(__VLS_42, new __VLS_42({ size: ("large"), }));
    const __VLS_44 = __VLS_43({ size: ("large"), }, ...__VLS_functionalComponentArgsRest(__VLS_43));
    __VLS_nonNullable(__VLS_47.slots).default;
    var __VLS_47;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("test-item") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("component-container") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("button-group") }, });
    const __VLS_48 = __VLS_resolvedLocalAndGlobalComponents.CButton;
    /** @type { [typeof __VLS_components.CButton, typeof __VLS_components.CButton, ] } */
    // @ts-ignore
    const __VLS_49 = __VLS_asFunctionalComponent(__VLS_48, new __VLS_48({ disabled: (true), }));
    const __VLS_50 = __VLS_49({ disabled: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_49));
    __VLS_nonNullable(__VLS_53.slots).default;
    var __VLS_53;
    const __VLS_54 = __VLS_resolvedLocalAndGlobalComponents.CButton;
    /** @type { [typeof __VLS_components.CButton, typeof __VLS_components.CButton, ] } */
    // @ts-ignore
    const __VLS_55 = __VLS_asFunctionalComponent(__VLS_54, new __VLS_54({ type: ("primary"), disabled: (true), }));
    const __VLS_56 = __VLS_55({ type: ("primary"), disabled: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_55));
    __VLS_nonNullable(__VLS_59.slots).default;
    var __VLS_59;
    const __VLS_60 = __VLS_resolvedLocalAndGlobalComponents.ElButton;
    /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.ElButton, ] } */
    // @ts-ignore
    const __VLS_61 = __VLS_asFunctionalComponent(__VLS_60, new __VLS_60({ type: ("primary"), }));
    const __VLS_62 = __VLS_61({ type: ("primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_61));
    __VLS_nonNullable(__VLS_65.slots).default;
    var __VLS_65;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("test-item") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("component-container") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("input-group") }, });
    const __VLS_66 = __VLS_resolvedLocalAndGlobalComponents.CInput;
    /** @type { [typeof __VLS_components.CInput, ] } */
    // @ts-ignore
    const __VLS_67 = __VLS_asFunctionalComponent(__VLS_66, new __VLS_66({ modelValue: ((__VLS_ctx.inputValue)), placeholder: ("请输入内容"), }));
    const __VLS_68 = __VLS_67({ modelValue: ((__VLS_ctx.inputValue)), placeholder: ("请输入内容"), }, ...__VLS_functionalComponentArgsRest(__VLS_67));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("value-display") }, });
    (__VLS_ctx.inputValue);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("test-item") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("component-container") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("input-group") }, });
    const __VLS_72 = __VLS_resolvedLocalAndGlobalComponents.CInput;
    /** @type { [typeof __VLS_components.CInput, ] } */
    // @ts-ignore
    const __VLS_73 = __VLS_asFunctionalComponent(__VLS_72, new __VLS_72({ disabled: (true), placeholder: ("禁用状态"), }));
    const __VLS_74 = __VLS_73({ disabled: (true), placeholder: ("禁用状态"), }, ...__VLS_functionalComponentArgsRest(__VLS_73));
    const __VLS_78 = __VLS_resolvedLocalAndGlobalComponents.ElInput;
    /** @type { [typeof __VLS_components.ElInput, ] } */
    // @ts-ignore
    const __VLS_79 = __VLS_asFunctionalComponent(__VLS_78, new __VLS_78({ disabled: (true), placeholder: ("Element Plus 禁用状态"), }));
    const __VLS_80 = __VLS_79({ disabled: (true), placeholder: ("Element Plus 禁用状态"), }, ...__VLS_functionalComponentArgsRest(__VLS_79));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("test-item") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("component-container") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("input-group") }, });
    const __VLS_84 = __VLS_resolvedLocalAndGlobalComponents.CInput;
    /** @type { [typeof __VLS_components.CInput, ] } */
    // @ts-ignore
    const __VLS_85 = __VLS_asFunctionalComponent(__VLS_84, new __VLS_84({ modelValue: ((__VLS_ctx.clearableValue)), clearable: (true), placeholder: ("可清空"), }));
    const __VLS_86 = __VLS_85({ modelValue: ((__VLS_ctx.clearableValue)), clearable: (true), placeholder: ("可清空"), }, ...__VLS_functionalComponentArgsRest(__VLS_85));
    __VLS_styleScopedClasses['component-test'];
    __VLS_styleScopedClasses['page-title'];
    __VLS_styleScopedClasses['test-grid'];
    __VLS_styleScopedClasses['test-item'];
    __VLS_styleScopedClasses['component-container'];
    __VLS_styleScopedClasses['button-group'];
    __VLS_styleScopedClasses['test-item'];
    __VLS_styleScopedClasses['component-container'];
    __VLS_styleScopedClasses['button-group'];
    __VLS_styleScopedClasses['test-item'];
    __VLS_styleScopedClasses['component-container'];
    __VLS_styleScopedClasses['button-group'];
    __VLS_styleScopedClasses['test-item'];
    __VLS_styleScopedClasses['component-container'];
    __VLS_styleScopedClasses['input-group'];
    __VLS_styleScopedClasses['value-display'];
    __VLS_styleScopedClasses['test-item'];
    __VLS_styleScopedClasses['component-container'];
    __VLS_styleScopedClasses['input-group'];
    __VLS_styleScopedClasses['test-item'];
    __VLS_styleScopedClasses['component-container'];
    __VLS_styleScopedClasses['input-group'];
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {};
    var $refs;
    var $el;
    return {
        attrs: {},
        slots: __VLS_slots,
        refs: $refs,
        rootEl: $el,
    };
}
;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            CButton: CButton,
            CInput: CInput,
            ElButton: ElButton,
            ElInput: ElInput,
            inputValue: inputValue,
            clearableValue: clearableValue,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */
//# sourceMappingURL=ComponentTest.vue.js.map