declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    modelValue: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
}>, {
    handleInput: (value: string) => void;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    modelValue: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
}>> & Readonly<{
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}>, {
    modelValue: string | number;
}, {}, {
    ElInput: import('element-plus/es/utils').SFCWithInstall<{
        new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('vue').ExtractPropTypes<{
            readonly ariaLabel: StringConstructor;
            readonly id: import('element-plus/es/utils').EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
            readonly size: {
                readonly type: import('vue').PropType<import('element-plus/es/utils').EpPropMergeType<StringConstructor, "" | "small" | "default" | "large", never>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly disabled: BooleanConstructor;
            readonly modelValue: import('element-plus/es/utils').EpPropFinalized<(new (...args: any[]) => string | number) | (() => string | number | null | undefined) | ((new (...args: any[]) => string | number) | (() => string | number | null | undefined))[], unknown, unknown, "", boolean>;
            readonly maxlength: {
                readonly type: import('vue').PropType<import('element-plus/es/utils').EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly minlength: {
                readonly type: import('vue').PropType<import('element-plus/es/utils').EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly type: import('element-plus/es/utils').EpPropFinalized<StringConstructor, unknown, unknown, "text", boolean>;
            readonly resize: {
                readonly type: import('vue').PropType<import('element-plus/es/utils').EpPropMergeType<StringConstructor, "none" | "both" | "horizontal" | "vertical", unknown>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly autosize: import('element-plus/es/utils').EpPropFinalized<(new (...args: any[]) => boolean | {
                minRows?: number | undefined;
                maxRows?: number | undefined;
            }) | (() => import('element-plus').InputAutoSize) | ((new (...args: any[]) => boolean | {
                minRows?: number | undefined;
                maxRows?: number | undefined;
            }) | (() => import('element-plus').InputAutoSize))[], unknown, unknown, false, boolean>;
            readonly autocomplete: import('element-plus/es/utils').EpPropFinalized<StringConstructor, unknown, unknown, "off", boolean>;
            readonly formatter: {
                readonly type: import('vue').PropType<Function>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly parser: {
                readonly type: import('vue').PropType<Function>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly placeholder: {
                readonly type: import('vue').PropType<string>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly form: {
                readonly type: import('vue').PropType<string>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly readonly: BooleanConstructor;
            readonly clearable: BooleanConstructor;
            readonly showPassword: BooleanConstructor;
            readonly showWordLimit: BooleanConstructor;
            readonly suffixIcon: {
                readonly type: import('vue').PropType<import('element-plus/es/utils').EpPropMergeType<(new (...args: any[]) => (string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions, {}, any>) & {}) | (() => string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions, {}, any>) | ((new (...args: any[]) => (string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions, {}, any>) & {}) | (() => string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions, {}, any>))[], unknown, unknown>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly prefixIcon: {
                readonly type: import('vue').PropType<import('element-plus/es/utils').EpPropMergeType<(new (...args: any[]) => (string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions, {}, any>) & {}) | (() => string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions, {}, any>) | ((new (...args: any[]) => (string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions, {}, any>) & {}) | (() => string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions, {}, any>))[], unknown, unknown>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly containerRole: import('element-plus/es/utils').EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
            readonly tabindex: import('element-plus/es/utils').EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, 0, boolean>;
            readonly validateEvent: import('element-plus/es/utils').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
            readonly inputStyle: import('element-plus/es/utils').EpPropFinalized<(new (...args: any[]) => string | import('vue').CSSProperties | import('vue').StyleValue[]) | (() => import('vue').StyleValue) | ((new (...args: any[]) => string | import('vue').CSSProperties | import('vue').StyleValue[]) | (() => import('vue').StyleValue))[], unknown, unknown, () => import('element-plus/es/utils').Mutable<{}>, boolean>;
            readonly autofocus: BooleanConstructor;
            readonly rows: import('element-plus/es/utils').EpPropFinalized<NumberConstructor, unknown, unknown, 2, boolean>;
        }>> & {
            "onUpdate:modelValue"?: ((value: string) => any) | undefined;
            onChange?: ((value: string) => any) | undefined;
            onCompositionend?: ((evt: CompositionEvent) => any) | undefined;
            onCompositionstart?: ((evt: CompositionEvent) => any) | undefined;
            onCompositionupdate?: ((evt: CompositionEvent) => any) | undefined;
            onFocus?: ((evt: FocusEvent) => any) | undefined;
            onBlur?: ((evt: FocusEvent) => any) | undefined;
            onInput?: ((value: string) => any) | undefined;
            onKeydown?: ((evt: Event | KeyboardEvent) => any) | undefined;
            onMouseenter?: ((evt: MouseEvent) => any) | undefined;
            onMouseleave?: ((evt: MouseEvent) => any) | undefined;
            onClear?: (() => any) | undefined;
        }, {
            input: import('vue').ShallowRef<HTMLInputElement | undefined, HTMLInputElement | undefined>;
            textarea: import('vue').ShallowRef<HTMLTextAreaElement | undefined, HTMLTextAreaElement | undefined>;
            ref: import('vue').ComputedRef<HTMLInputElement | HTMLTextAreaElement | undefined>;
            textareaStyle: import('vue').ComputedRef<import('vue').StyleValue>;
            autosize: import('vue').Ref<import('element-plus').InputAutoSize, import('element-plus').InputAutoSize>;
            isComposing: import('vue').Ref<boolean, boolean>;
            focus: () => void | undefined;
            blur: () => void | undefined;
            select: () => void;
            clear: () => void;
            resizeTextarea: () => void;
        }, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
            input: (value: string) => void;
            clear: () => void;
            "update:modelValue": (value: string) => void;
            change: (value: string) => void;
            blur: (evt: FocusEvent) => void;
            compositionend: (evt: CompositionEvent) => void;
            compositionstart: (evt: CompositionEvent) => void;
            compositionupdate: (evt: CompositionEvent) => void;
            focus: (evt: FocusEvent) => void;
            keydown: (evt: Event | KeyboardEvent) => void;
            mouseenter: (evt: MouseEvent) => void;
            mouseleave: (evt: MouseEvent) => void;
        }, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, {
            readonly disabled: boolean;
            readonly id: string;
            readonly type: string;
            readonly modelValue: import('element-plus/es/utils').EpPropMergeType<(new (...args: any[]) => string | number) | (() => string | number | null | undefined) | ((new (...args: any[]) => string | number) | (() => string | number | null | undefined))[], unknown, unknown>;
            readonly tabindex: import('element-plus/es/utils').EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
            readonly readonly: boolean;
            readonly autosize: import('element-plus').InputAutoSize;
            readonly autocomplete: string;
            readonly containerRole: string;
            readonly validateEvent: import('element-plus/es/utils').EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly inputStyle: import('vue').StyleValue;
            readonly rows: number;
            readonly clearable: boolean;
            readonly showPassword: boolean;
            readonly showWordLimit: boolean;
            readonly autofocus: boolean;
        }, true, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import('vue').ExtractPropTypes<{
            readonly ariaLabel: StringConstructor;
            readonly id: import('element-plus/es/utils').EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
            readonly size: {
                readonly type: import('vue').PropType<import('element-plus/es/utils').EpPropMergeType<StringConstructor, "" | "small" | "default" | "large", never>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly disabled: BooleanConstructor;
            readonly modelValue: import('element-plus/es/utils').EpPropFinalized<(new (...args: any[]) => string | number) | (() => string | number | null | undefined) | ((new (...args: any[]) => string | number) | (() => string | number | null | undefined))[], unknown, unknown, "", boolean>;
            readonly maxlength: {
                readonly type: import('vue').PropType<import('element-plus/es/utils').EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly minlength: {
                readonly type: import('vue').PropType<import('element-plus/es/utils').EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly type: import('element-plus/es/utils').EpPropFinalized<StringConstructor, unknown, unknown, "text", boolean>;
            readonly resize: {
                readonly type: import('vue').PropType<import('element-plus/es/utils').EpPropMergeType<StringConstructor, "none" | "both" | "horizontal" | "vertical", unknown>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly autosize: import('element-plus/es/utils').EpPropFinalized<(new (...args: any[]) => boolean | {
                minRows?: number | undefined;
                maxRows?: number | undefined;
            }) | (() => import('element-plus').InputAutoSize) | ((new (...args: any[]) => boolean | {
                minRows?: number | undefined;
                maxRows?: number | undefined;
            }) | (() => import('element-plus').InputAutoSize))[], unknown, unknown, false, boolean>;
            readonly autocomplete: import('element-plus/es/utils').EpPropFinalized<StringConstructor, unknown, unknown, "off", boolean>;
            readonly formatter: {
                readonly type: import('vue').PropType<Function>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly parser: {
                readonly type: import('vue').PropType<Function>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly placeholder: {
                readonly type: import('vue').PropType<string>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly form: {
                readonly type: import('vue').PropType<string>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly readonly: BooleanConstructor;
            readonly clearable: BooleanConstructor;
            readonly showPassword: BooleanConstructor;
            readonly showWordLimit: BooleanConstructor;
            readonly suffixIcon: {
                readonly type: import('vue').PropType<import('element-plus/es/utils').EpPropMergeType<(new (...args: any[]) => (string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions, {}, any>) & {}) | (() => string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions, {}, any>) | ((new (...args: any[]) => (string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions, {}, any>) & {}) | (() => string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions, {}, any>))[], unknown, unknown>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly prefixIcon: {
                readonly type: import('vue').PropType<import('element-plus/es/utils').EpPropMergeType<(new (...args: any[]) => (string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions, {}, any>) & {}) | (() => string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions, {}, any>) | ((new (...args: any[]) => (string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions, {}, any>) & {}) | (() => string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions, {}, any>))[], unknown, unknown>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly containerRole: import('element-plus/es/utils').EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
            readonly tabindex: import('element-plus/es/utils').EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, 0, boolean>;
            readonly validateEvent: import('element-plus/es/utils').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
            readonly inputStyle: import('element-plus/es/utils').EpPropFinalized<(new (...args: any[]) => string | import('vue').CSSProperties | import('vue').StyleValue[]) | (() => import('vue').StyleValue) | ((new (...args: any[]) => string | import('vue').CSSProperties | import('vue').StyleValue[]) | (() => import('vue').StyleValue))[], unknown, unknown, () => import('element-plus/es/utils').Mutable<{}>, boolean>;
            readonly autofocus: BooleanConstructor;
            readonly rows: import('element-plus/es/utils').EpPropFinalized<NumberConstructor, unknown, unknown, 2, boolean>;
        }>> & {
            "onUpdate:modelValue"?: ((value: string) => any) | undefined;
            onChange?: ((value: string) => any) | undefined;
            onCompositionend?: ((evt: CompositionEvent) => any) | undefined;
            onCompositionstart?: ((evt: CompositionEvent) => any) | undefined;
            onCompositionupdate?: ((evt: CompositionEvent) => any) | undefined;
            onFocus?: ((evt: FocusEvent) => any) | undefined;
            onBlur?: ((evt: FocusEvent) => any) | undefined;
            onInput?: ((value: string) => any) | undefined;
            onKeydown?: ((evt: Event | KeyboardEvent) => any) | undefined;
            onMouseenter?: ((evt: MouseEvent) => any) | undefined;
            onMouseleave?: ((evt: MouseEvent) => any) | undefined;
            onClear?: (() => any) | undefined;
        }, {
            input: import('vue').ShallowRef<HTMLInputElement | undefined, HTMLInputElement | undefined>;
            textarea: import('vue').ShallowRef<HTMLTextAreaElement | undefined, HTMLTextAreaElement | undefined>;
            ref: import('vue').ComputedRef<HTMLInputElement | HTMLTextAreaElement | undefined>;
            textareaStyle: import('vue').ComputedRef<import('vue').StyleValue>;
            autosize: import('vue').Ref<import('element-plus').InputAutoSize, import('element-plus').InputAutoSize>;
            isComposing: import('vue').Ref<boolean, boolean>;
            focus: () => void | undefined;
            blur: () => void | undefined;
            select: () => void;
            clear: () => void;
            resizeTextarea: () => void;
        }, {}, {}, {}, {
            readonly disabled: boolean;
            readonly id: string;
            readonly type: string;
            readonly modelValue: import('element-plus/es/utils').EpPropMergeType<(new (...args: any[]) => string | number) | (() => string | number | null | undefined) | ((new (...args: any[]) => string | number) | (() => string | number | null | undefined))[], unknown, unknown>;
            readonly tabindex: import('element-plus/es/utils').EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
            readonly readonly: boolean;
            readonly autosize: import('element-plus').InputAutoSize;
            readonly autocomplete: string;
            readonly containerRole: string;
            readonly validateEvent: import('element-plus/es/utils').EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly inputStyle: import('vue').StyleValue;
            readonly rows: number;
            readonly clearable: boolean;
            readonly showPassword: boolean;
            readonly showWordLimit: boolean;
            readonly autofocus: boolean;
        }>;
        __isFragment?: undefined;
        __isTeleport?: undefined;
        __isSuspense?: undefined;
    } & import('vue').ComponentOptionsBase<Readonly<import('vue').ExtractPropTypes<{
        readonly ariaLabel: StringConstructor;
        readonly id: import('element-plus/es/utils').EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
        readonly size: {
            readonly type: import('vue').PropType<import('element-plus/es/utils').EpPropMergeType<StringConstructor, "" | "small" | "default" | "large", never>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly disabled: BooleanConstructor;
        readonly modelValue: import('element-plus/es/utils').EpPropFinalized<(new (...args: any[]) => string | number) | (() => string | number | null | undefined) | ((new (...args: any[]) => string | number) | (() => string | number | null | undefined))[], unknown, unknown, "", boolean>;
        readonly maxlength: {
            readonly type: import('vue').PropType<import('element-plus/es/utils').EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly minlength: {
            readonly type: import('vue').PropType<import('element-plus/es/utils').EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly type: import('element-plus/es/utils').EpPropFinalized<StringConstructor, unknown, unknown, "text", boolean>;
        readonly resize: {
            readonly type: import('vue').PropType<import('element-plus/es/utils').EpPropMergeType<StringConstructor, "none" | "both" | "horizontal" | "vertical", unknown>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly autosize: import('element-plus/es/utils').EpPropFinalized<(new (...args: any[]) => boolean | {
            minRows?: number | undefined;
            maxRows?: number | undefined;
        }) | (() => import('element-plus').InputAutoSize) | ((new (...args: any[]) => boolean | {
            minRows?: number | undefined;
            maxRows?: number | undefined;
        }) | (() => import('element-plus').InputAutoSize))[], unknown, unknown, false, boolean>;
        readonly autocomplete: import('element-plus/es/utils').EpPropFinalized<StringConstructor, unknown, unknown, "off", boolean>;
        readonly formatter: {
            readonly type: import('vue').PropType<Function>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly parser: {
            readonly type: import('vue').PropType<Function>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly placeholder: {
            readonly type: import('vue').PropType<string>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly form: {
            readonly type: import('vue').PropType<string>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly readonly: BooleanConstructor;
        readonly clearable: BooleanConstructor;
        readonly showPassword: BooleanConstructor;
        readonly showWordLimit: BooleanConstructor;
        readonly suffixIcon: {
            readonly type: import('vue').PropType<import('element-plus/es/utils').EpPropMergeType<(new (...args: any[]) => (string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions, {}, any>) & {}) | (() => string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions, {}, any>) | ((new (...args: any[]) => (string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions, {}, any>) & {}) | (() => string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions, {}, any>))[], unknown, unknown>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly prefixIcon: {
            readonly type: import('vue').PropType<import('element-plus/es/utils').EpPropMergeType<(new (...args: any[]) => (string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions, {}, any>) & {}) | (() => string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions, {}, any>) | ((new (...args: any[]) => (string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions, {}, any>) & {}) | (() => string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions, {}, any>))[], unknown, unknown>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly containerRole: import('element-plus/es/utils').EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
        readonly tabindex: import('element-plus/es/utils').EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, 0, boolean>;
        readonly validateEvent: import('element-plus/es/utils').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
        readonly inputStyle: import('element-plus/es/utils').EpPropFinalized<(new (...args: any[]) => string | import('vue').CSSProperties | import('vue').StyleValue[]) | (() => import('vue').StyleValue) | ((new (...args: any[]) => string | import('vue').CSSProperties | import('vue').StyleValue[]) | (() => import('vue').StyleValue))[], unknown, unknown, () => import('element-plus/es/utils').Mutable<{}>, boolean>;
        readonly autofocus: BooleanConstructor;
        readonly rows: import('element-plus/es/utils').EpPropFinalized<NumberConstructor, unknown, unknown, 2, boolean>;
    }>> & {
        "onUpdate:modelValue"?: ((value: string) => any) | undefined;
        onChange?: ((value: string) => any) | undefined;
        onCompositionend?: ((evt: CompositionEvent) => any) | undefined;
        onCompositionstart?: ((evt: CompositionEvent) => any) | undefined;
        onCompositionupdate?: ((evt: CompositionEvent) => any) | undefined;
        onFocus?: ((evt: FocusEvent) => any) | undefined;
        onBlur?: ((evt: FocusEvent) => any) | undefined;
        onInput?: ((value: string) => any) | undefined;
        onKeydown?: ((evt: Event | KeyboardEvent) => any) | undefined;
        onMouseenter?: ((evt: MouseEvent) => any) | undefined;
        onMouseleave?: ((evt: MouseEvent) => any) | undefined;
        onClear?: (() => any) | undefined;
    }, {
        input: import('vue').ShallowRef<HTMLInputElement | undefined, HTMLInputElement | undefined>;
        textarea: import('vue').ShallowRef<HTMLTextAreaElement | undefined, HTMLTextAreaElement | undefined>;
        ref: import('vue').ComputedRef<HTMLInputElement | HTMLTextAreaElement | undefined>;
        textareaStyle: import('vue').ComputedRef<import('vue').StyleValue>;
        autosize: import('vue').Ref<import('element-plus').InputAutoSize, import('element-plus').InputAutoSize>;
        isComposing: import('vue').Ref<boolean, boolean>;
        focus: () => void | undefined;
        blur: () => void | undefined;
        select: () => void;
        clear: () => void;
        resizeTextarea: () => void;
    }, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        input: (value: string) => void;
        clear: () => void;
        "update:modelValue": (value: string) => void;
        change: (value: string) => void;
        blur: (evt: FocusEvent) => void;
        compositionend: (evt: CompositionEvent) => void;
        compositionstart: (evt: CompositionEvent) => void;
        compositionupdate: (evt: CompositionEvent) => void;
        focus: (evt: FocusEvent) => void;
        keydown: (evt: Event | KeyboardEvent) => void;
        mouseenter: (evt: MouseEvent) => void;
        mouseleave: (evt: MouseEvent) => void;
    }, string, {
        readonly disabled: boolean;
        readonly id: string;
        readonly type: string;
        readonly modelValue: import('element-plus/es/utils').EpPropMergeType<(new (...args: any[]) => string | number) | (() => string | number | null | undefined) | ((new (...args: any[]) => string | number) | (() => string | number | null | undefined))[], unknown, unknown>;
        readonly tabindex: import('element-plus/es/utils').EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
        readonly readonly: boolean;
        readonly autosize: import('element-plus').InputAutoSize;
        readonly autocomplete: string;
        readonly containerRole: string;
        readonly validateEvent: import('element-plus/es/utils').EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly inputStyle: import('vue').StyleValue;
        readonly rows: number;
        readonly clearable: boolean;
        readonly showPassword: boolean;
        readonly showWordLimit: boolean;
        readonly autofocus: boolean;
    }, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
        $slots: {
            prepend?(_: {}): any;
            prefix?(_: {}): any;
            suffix?(_: {}): any;
            append?(_: {}): any;
        };
    })>;
}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
