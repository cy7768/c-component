declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    type: {
        type: StringConstructor;
        default: string;
    };
    size: {
        type: StringConstructor;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
}>, {
    handleClick: (e: MouseEvent) => void;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, "click"[], "click", import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    type: {
        type: StringConstructor;
        default: string;
    };
    size: {
        type: StringConstructor;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{
    onClick?: ((...args: any[]) => any) | undefined;
}>, {
    size: string;
    disabled: boolean;
    type: string;
}, {}, {
    ElButton: import('element-plus/es/utils').SFCWithInstall<{
        new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('vue').ExtractPropTypes<{
            readonly size: {
                readonly type: import('vue').PropType<import('element-plus/es/utils').EpPropMergeType<StringConstructor, "" | "small" | "default" | "large", never>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly disabled: BooleanConstructor;
            readonly type: import('element-plus/es/utils').EpPropFinalized<StringConstructor, "" | "text" | "default" | "success" | "warning" | "info" | "primary" | "danger", unknown, "", boolean>;
            readonly icon: {
                readonly type: import('vue').PropType<import('element-plus/es/utils').EpPropMergeType<(new (...args: any[]) => (string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions, {}, any>) & {}) | (() => string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions, {}, any>) | ((new (...args: any[]) => (string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions, {}, any>) & {}) | (() => string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions, {}, any>))[], unknown, unknown>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly nativeType: import('element-plus/es/utils').EpPropFinalized<StringConstructor, "button" | "reset" | "submit", unknown, "button", boolean>;
            readonly loading: BooleanConstructor;
            readonly loadingIcon: import('element-plus/es/utils').EpPropFinalized<(new (...args: any[]) => (string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions, {}, any>) & {}) | (() => string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions, {}, any>) | ((new (...args: any[]) => (string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions, {}, any>) & {}) | (() => string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions, {}, any>))[], unknown, unknown, () => any, boolean>;
            readonly plain: BooleanConstructor;
            readonly text: BooleanConstructor;
            readonly link: BooleanConstructor;
            readonly bg: BooleanConstructor;
            readonly autofocus: BooleanConstructor;
            readonly round: BooleanConstructor;
            readonly circle: BooleanConstructor;
            readonly color: StringConstructor;
            readonly dark: BooleanConstructor;
            readonly autoInsertSpace: import('element-plus/es/utils').EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
            readonly tag: import('element-plus/es/utils').EpPropFinalized<(new (...args: any[]) => (string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions, {}, any>) & {}) | (() => string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions, {}, any>) | ((new (...args: any[]) => (string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions, {}, any>) & {}) | (() => string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions, {}, any>))[], unknown, unknown, "button", boolean>;
        }>> & {
            onClick?: ((evt: MouseEvent) => any) | undefined;
        }, {
            ref: import('vue').Ref<HTMLButtonElement | undefined, HTMLButtonElement | undefined>;
            size: import('vue').ComputedRef<"" | "small" | "default" | "large">;
            type: import('vue').ComputedRef<"" | "text" | "default" | "success" | "warning" | "info" | "primary" | "danger">;
            disabled: import('vue').ComputedRef<boolean>;
            shouldAddSpace: import('vue').ComputedRef<boolean>;
        }, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
            click: (evt: MouseEvent) => void;
        }, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, {
            readonly link: boolean;
            readonly circle: boolean;
            readonly text: boolean;
            readonly disabled: boolean;
            readonly round: boolean;
            readonly dark: boolean;
            readonly type: import('element-plus/es/utils').EpPropMergeType<StringConstructor, "" | "text" | "default" | "success" | "warning" | "info" | "primary" | "danger", unknown>;
            readonly bg: boolean;
            readonly loading: boolean;
            readonly autofocus: boolean;
            readonly tag: import('element-plus/es/utils').EpPropMergeType<(new (...args: any[]) => (string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions, {}, any>) & {}) | (() => string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions, {}, any>) | ((new (...args: any[]) => (string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions, {}, any>) & {}) | (() => string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions, {}, any>))[], unknown, unknown>;
            readonly plain: boolean;
            readonly autoInsertSpace: import('element-plus/es/utils').EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly nativeType: import('element-plus/es/utils').EpPropMergeType<StringConstructor, "button" | "reset" | "submit", unknown>;
            readonly loadingIcon: import('element-plus/es/utils').EpPropMergeType<(new (...args: any[]) => (string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions, {}, any>) & {}) | (() => string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions, {}, any>) | ((new (...args: any[]) => (string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions, {}, any>) & {}) | (() => string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions, {}, any>))[], unknown, unknown>;
        }, true, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import('vue').ExtractPropTypes<{
            readonly size: {
                readonly type: import('vue').PropType<import('element-plus/es/utils').EpPropMergeType<StringConstructor, "" | "small" | "default" | "large", never>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly disabled: BooleanConstructor;
            readonly type: import('element-plus/es/utils').EpPropFinalized<StringConstructor, "" | "text" | "default" | "success" | "warning" | "info" | "primary" | "danger", unknown, "", boolean>;
            readonly icon: {
                readonly type: import('vue').PropType<import('element-plus/es/utils').EpPropMergeType<(new (...args: any[]) => (string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions, {}, any>) & {}) | (() => string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions, {}, any>) | ((new (...args: any[]) => (string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions, {}, any>) & {}) | (() => string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions, {}, any>))[], unknown, unknown>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly nativeType: import('element-plus/es/utils').EpPropFinalized<StringConstructor, "button" | "reset" | "submit", unknown, "button", boolean>;
            readonly loading: BooleanConstructor;
            readonly loadingIcon: import('element-plus/es/utils').EpPropFinalized<(new (...args: any[]) => (string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions, {}, any>) & {}) | (() => string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions, {}, any>) | ((new (...args: any[]) => (string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions, {}, any>) & {}) | (() => string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions, {}, any>))[], unknown, unknown, () => any, boolean>;
            readonly plain: BooleanConstructor;
            readonly text: BooleanConstructor;
            readonly link: BooleanConstructor;
            readonly bg: BooleanConstructor;
            readonly autofocus: BooleanConstructor;
            readonly round: BooleanConstructor;
            readonly circle: BooleanConstructor;
            readonly color: StringConstructor;
            readonly dark: BooleanConstructor;
            readonly autoInsertSpace: import('element-plus/es/utils').EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
            readonly tag: import('element-plus/es/utils').EpPropFinalized<(new (...args: any[]) => (string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions, {}, any>) & {}) | (() => string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions, {}, any>) | ((new (...args: any[]) => (string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions, {}, any>) & {}) | (() => string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions, {}, any>))[], unknown, unknown, "button", boolean>;
        }>> & {
            onClick?: ((evt: MouseEvent) => any) | undefined;
        }, {
            ref: import('vue').Ref<HTMLButtonElement | undefined, HTMLButtonElement | undefined>;
            size: import('vue').ComputedRef<"" | "small" | "default" | "large">;
            type: import('vue').ComputedRef<"" | "text" | "default" | "success" | "warning" | "info" | "primary" | "danger">;
            disabled: import('vue').ComputedRef<boolean>;
            shouldAddSpace: import('vue').ComputedRef<boolean>;
        }, {}, {}, {}, {
            readonly link: boolean;
            readonly circle: boolean;
            readonly text: boolean;
            readonly disabled: boolean;
            readonly round: boolean;
            readonly dark: boolean;
            readonly type: import('element-plus/es/utils').EpPropMergeType<StringConstructor, "" | "text" | "default" | "success" | "warning" | "info" | "primary" | "danger", unknown>;
            readonly bg: boolean;
            readonly loading: boolean;
            readonly autofocus: boolean;
            readonly tag: import('element-plus/es/utils').EpPropMergeType<(new (...args: any[]) => (string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions, {}, any>) & {}) | (() => string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions, {}, any>) | ((new (...args: any[]) => (string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions, {}, any>) & {}) | (() => string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions, {}, any>))[], unknown, unknown>;
            readonly plain: boolean;
            readonly autoInsertSpace: import('element-plus/es/utils').EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly nativeType: import('element-plus/es/utils').EpPropMergeType<StringConstructor, "button" | "reset" | "submit", unknown>;
            readonly loadingIcon: import('element-plus/es/utils').EpPropMergeType<(new (...args: any[]) => (string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions, {}, any>) & {}) | (() => string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions, {}, any>) | ((new (...args: any[]) => (string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions, {}, any>) & {}) | (() => string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions, {}, any>))[], unknown, unknown>;
        }>;
        __isFragment?: undefined;
        __isTeleport?: undefined;
        __isSuspense?: undefined;
    } & import('vue').ComponentOptionsBase<Readonly<import('vue').ExtractPropTypes<{
        readonly size: {
            readonly type: import('vue').PropType<import('element-plus/es/utils').EpPropMergeType<StringConstructor, "" | "small" | "default" | "large", never>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly disabled: BooleanConstructor;
        readonly type: import('element-plus/es/utils').EpPropFinalized<StringConstructor, "" | "text" | "default" | "success" | "warning" | "info" | "primary" | "danger", unknown, "", boolean>;
        readonly icon: {
            readonly type: import('vue').PropType<import('element-plus/es/utils').EpPropMergeType<(new (...args: any[]) => (string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions, {}, any>) & {}) | (() => string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions, {}, any>) | ((new (...args: any[]) => (string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions, {}, any>) & {}) | (() => string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions, {}, any>))[], unknown, unknown>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly nativeType: import('element-plus/es/utils').EpPropFinalized<StringConstructor, "button" | "reset" | "submit", unknown, "button", boolean>;
        readonly loading: BooleanConstructor;
        readonly loadingIcon: import('element-plus/es/utils').EpPropFinalized<(new (...args: any[]) => (string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions, {}, any>) & {}) | (() => string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions, {}, any>) | ((new (...args: any[]) => (string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions, {}, any>) & {}) | (() => string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions, {}, any>))[], unknown, unknown, () => any, boolean>;
        readonly plain: BooleanConstructor;
        readonly text: BooleanConstructor;
        readonly link: BooleanConstructor;
        readonly bg: BooleanConstructor;
        readonly autofocus: BooleanConstructor;
        readonly round: BooleanConstructor;
        readonly circle: BooleanConstructor;
        readonly color: StringConstructor;
        readonly dark: BooleanConstructor;
        readonly autoInsertSpace: import('element-plus/es/utils').EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
        readonly tag: import('element-plus/es/utils').EpPropFinalized<(new (...args: any[]) => (string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions, {}, any>) & {}) | (() => string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions, {}, any>) | ((new (...args: any[]) => (string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions, {}, any>) & {}) | (() => string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions, {}, any>))[], unknown, unknown, "button", boolean>;
    }>> & {
        onClick?: ((evt: MouseEvent) => any) | undefined;
    }, {
        ref: import('vue').Ref<HTMLButtonElement | undefined, HTMLButtonElement | undefined>;
        size: import('vue').ComputedRef<"" | "small" | "default" | "large">;
        type: import('vue').ComputedRef<"" | "text" | "default" | "success" | "warning" | "info" | "primary" | "danger">;
        disabled: import('vue').ComputedRef<boolean>;
        shouldAddSpace: import('vue').ComputedRef<boolean>;
    }, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        click: (evt: MouseEvent) => void;
    }, string, {
        readonly link: boolean;
        readonly circle: boolean;
        readonly text: boolean;
        readonly disabled: boolean;
        readonly round: boolean;
        readonly dark: boolean;
        readonly type: import('element-plus/es/utils').EpPropMergeType<StringConstructor, "" | "text" | "default" | "success" | "warning" | "info" | "primary" | "danger", unknown>;
        readonly bg: boolean;
        readonly loading: boolean;
        readonly autofocus: boolean;
        readonly tag: import('element-plus/es/utils').EpPropMergeType<(new (...args: any[]) => (string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions, {}, any>) & {}) | (() => string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions, {}, any>) | ((new (...args: any[]) => (string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions, {}, any>) & {}) | (() => string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions, {}, any>))[], unknown, unknown>;
        readonly plain: boolean;
        readonly autoInsertSpace: import('element-plus/es/utils').EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly nativeType: import('element-plus/es/utils').EpPropMergeType<StringConstructor, "button" | "reset" | "submit", unknown>;
        readonly loadingIcon: import('element-plus/es/utils').EpPropMergeType<(new (...args: any[]) => (string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions, {}, any>) & {}) | (() => string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions, {}, any>) | ((new (...args: any[]) => (string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions, {}, any>) & {}) | (() => string | import('vue').Component<any, any, any, import('vue').ComputedOptions, import('vue').MethodOptions, {}, any>))[], unknown, unknown>;
    }, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
        $slots: {
            loading?(_: {}): any;
            icon?(_: {}): any;
            default?(_: {}): any;
        };
    })> & {
        ButtonGroup: {
            new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('vue').ExtractPropTypes<{
                readonly size: {
                    readonly type: import('vue').PropType<import('element-plus/es/utils').EpPropMergeType<StringConstructor, "" | "small" | "default" | "large", never>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly type: import('element-plus/es/utils').EpPropFinalized<StringConstructor, "" | "text" | "default" | "success" | "warning" | "info" | "primary" | "danger", unknown, "", boolean>;
            }>>, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, Record<string, any>, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, {
                readonly type: import('element-plus/es/utils').EpPropMergeType<StringConstructor, "" | "text" | "default" | "success" | "warning" | "info" | "primary" | "danger", unknown>;
            }, true, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
                P: {};
                B: {};
                D: {};
                C: {};
                M: {};
                Defaults: {};
            }, Readonly<import('vue').ExtractPropTypes<{
                readonly size: {
                    readonly type: import('vue').PropType<import('element-plus/es/utils').EpPropMergeType<StringConstructor, "" | "small" | "default" | "large", never>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly type: import('element-plus/es/utils').EpPropFinalized<StringConstructor, "" | "text" | "default" | "success" | "warning" | "info" | "primary" | "danger", unknown, "", boolean>;
            }>>, {}, {}, {}, {}, {
                readonly type: import('element-plus/es/utils').EpPropMergeType<StringConstructor, "" | "text" | "default" | "success" | "warning" | "info" | "primary" | "danger", unknown>;
            }>;
            __isFragment?: undefined;
            __isTeleport?: undefined;
            __isSuspense?: undefined;
        } & import('vue').ComponentOptionsBase<Readonly<import('vue').ExtractPropTypes<{
            readonly size: {
                readonly type: import('vue').PropType<import('element-plus/es/utils').EpPropMergeType<StringConstructor, "" | "small" | "default" | "large", never>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly type: import('element-plus/es/utils').EpPropFinalized<StringConstructor, "" | "text" | "default" | "success" | "warning" | "info" | "primary" | "danger", unknown, "", boolean>;
        }>>, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, Record<string, any>, string, {
            readonly type: import('element-plus/es/utils').EpPropMergeType<StringConstructor, "" | "text" | "default" | "success" | "warning" | "info" | "primary" | "danger", unknown>;
        }, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
            $slots: {
                default?(_: {}): any;
            };
        });
    };
}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
