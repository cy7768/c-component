type ButtonType = '' | 'default' | 'primary' | 'success' | 'warning' | 'info' | 'danger' | 'text';
type ButtonSize = '' | 'default' | 'small' | 'large';
declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<{
    type?: ButtonType | undefined;
    size?: ButtonSize | undefined;
    disabled?: boolean | undefined;
}, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    click: (e: MouseEvent) => any;
}, string, import('vue').PublicProps, Readonly<{
    type?: ButtonType | undefined;
    size?: ButtonSize | undefined;
    disabled?: boolean | undefined;
}> & Readonly<{
    onClick?: ((e: MouseEvent) => any) | undefined;
}>, {
    type: ButtonType;
    size: ButtonSize;
    disabled: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
