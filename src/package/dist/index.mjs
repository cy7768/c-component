import { defineComponent as s, resolveComponent as a, openBlock as u, createBlock as r, withCtx as m, renderSlot as f, mergeProps as $ } from "vue";
import { ElButton as C, ElInput as _ } from "element-plus";
const k = s({
  name: "CButton",
  components: { ElButton: C },
  props: {
    type: {
      type: String,
      default: "default"
    },
    size: {
      type: String,
      default: "default"
    },
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    return { handleClick: (o) => {
      t("click", o);
    } };
  }
}), d = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, l] of t)
    n[o] = l;
  return n;
};
function y(e, t, n, o, l, i) {
  const p = a("el-button");
  return u(), r(p, {
    type: e.type,
    size: e.size,
    disabled: e.disabled,
    onClick: e.handleClick
  }, {
    default: m(() => [
      f(e.$slots, "default")
    ]),
    _: 3
  }, 8, ["type", "size", "disabled", "onClick"]);
}
const b = /* @__PURE__ */ d(k, [["render", y]]), h = s({
  name: "CInput",
  components: { ElInput: _ },
  props: {
    modelValue: {
      type: [String, Number],
      default: ""
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    return { handleInput: (o) => {
      t("update:modelValue", o);
    } };
  }
});
function I(e, t, n, o, l, i) {
  const p = a("el-input");
  return u(), r(p, $({
    modelValue: e.modelValue,
    "onUpdate:modelValue": t[0] || (t[0] = (c) => e.modelValue = c)
  }, e.$attrs, { onInput: e.handleInput }), null, 16, ["modelValue", "onInput"]);
}
const V = /* @__PURE__ */ d(h, [["render", I]]);
const B = {
  CButton: b,
  CInput: V
}, S = {
  // install 方法会在 Vue.use() 时被调用
  install(e) {
    Object.entries(B).forEach(([t, n]) => {
      e.component(t, n);
    });
  }
};
export {
  b as CButton,
  V as CInput,
  S as default
};
