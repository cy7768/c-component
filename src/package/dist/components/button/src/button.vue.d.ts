type ButtonType = '' | 'default' | 'primary' | 'success' | 'warning' | 'info' | 'danger' | 'text';
type ButtonSize = '' | 'default' | 'small' | 'large';
declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    type?: ButtonType | undefined;
    size?: ButtonSize | undefined;
    disabled?: boolean | undefined;
}>, {
    type: string;
    size: string;
    disabled: boolean;
}>>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    click: (e: MouseEvent) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    type?: ButtonType | undefined;
    size?: ButtonSize | undefined;
    disabled?: boolean | undefined;
}>, {
    type: string;
    size: string;
    disabled: boolean;
}>>> & Readonly<{
    onClick?: ((e: MouseEvent) => any) | undefined;
}>, {
    type: ButtonType;
    size: ButtonSize;
    disabled: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
