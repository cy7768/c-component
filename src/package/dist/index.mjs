import { defineComponent as a, openBlock as u, createBlock as p, unref as d, withCtx as i, renderSlot as m, mergeProps as r } from "vue";
import { ElButton as f, ElInput as c } from "element-plus";
const C = /* @__PURE__ */ a({
  name: "CButton",
  __name: "button",
  props: {
    type: { default: "default" },
    size: { default: "default" },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(l, { emit: t }) {
    const n = t;
    return (e, o) => (u(), p(d(f), {
      type: e.type,
      size: e.size,
      disabled: e.disabled,
      onClick: o[0] || (o[0] = (s) => n("click", s))
    }, {
      default: i(() => [
        m(e.$slots, "default")
      ]),
      _: 3
    }, 8, ["type", "size", "disabled"]));
  }
}), B = /* @__PURE__ */ a({
  name: "CInput",
  __name: "input",
  props: {
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(l, { emit: t }) {
    const n = t;
    return (e, o) => (u(), p(d(c), r({
      "model-value": e.modelValue,
      "onUpdate:modelValue": o[0] || (o[0] = (s) => n("update:modelValue", s))
    }, e.$attrs), null, 16, ["model-value"]));
  }
});
const _ = {
  CButton: C,
  CInput: B
}, y = {
  // install 方法会在 Vue.use() 时被调用
  install(l) {
    Object.entries(_).forEach(([t, n]) => {
      l.component(t, n);
    });
  }
};
export {
  C as CButton,
  B as CInput,
  y as default
};
