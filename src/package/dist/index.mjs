import { defineComponent as J, openBlock as o, createBlock as E, unref as s, withCtx as m, renderSlot as Q, mergeProps as T, ref as h, watch as X, createVNode as _, createElementBlock as g, Fragment as w, renderList as G, resolveDynamicComponent as W, createTextVNode as k, toDisplayString as A, h as ae, createElementVNode as q, computed as K, createCommentVNode as M } from "vue";
import { ElButton as x, ElInput as V, ElConfigProvider as ce, ElTable as me, ElTableColumn as fe, ElSpace as Z, ElSelect as H, ElDatePicker as ee, ElInputNumber as ue, ElForm as le, ElFormItem as re, ElIcon as oe, ElOption as ne, ElMessage as S, ElSwitch as se, ElRadioGroup as ie, ElCheckboxGroup as pe } from "element-plus";
const ve = /* @__PURE__ */ J({
  name: "CButton",
  __name: "button",
  props: {
    type: { default: "default" },
    size: { default: "default" },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(C, { emit: b }) {
    const F = b;
    return (n, d) => (o(), E(s(x), {
      type: n.type,
      size: n.size,
      disabled: n.disabled,
      onClick: d[0] || (d[0] = (f) => F("click", f))
    }, {
      default: m(() => [
        Q(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["type", "size", "disabled"]));
  }
}), Ee = /* @__PURE__ */ J({
  name: "CInput",
  __name: "input",
  props: {
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(C, { emit: b }) {
    const F = b;
    return (n, d) => (o(), E(s(V), T({
      "model-value": n.modelValue,
      "onUpdate:modelValue": d[0] || (d[0] = (f) => F("update:modelValue", f))
    }, n.$attrs), null, 16, ["model-value"]));
  }
});
var ge = {
  name: "zh-cn",
  el: {
    breadcrumb: {
      label: "面包屑"
    },
    colorpicker: {
      confirm: "确定",
      clear: "清空",
      defaultLabel: "颜色选择器",
      description: "当前颜色 {color}，按 Enter 键选择新颜色",
      alphaLabel: "选择透明度的值"
    },
    datepicker: {
      now: "此刻",
      today: "今天",
      cancel: "取消",
      clear: "清空",
      confirm: "确定",
      dateTablePrompt: "使用方向键与 Enter 键可选择日期",
      monthTablePrompt: "使用方向键与 Enter 键可选择月份",
      yearTablePrompt: "使用方向键与 Enter 键可选择年份",
      selectedDate: "已选日期",
      selectDate: "选择日期",
      selectTime: "选择时间",
      startDate: "开始日期",
      startTime: "开始时间",
      endDate: "结束日期",
      endTime: "结束时间",
      prevYear: "前一年",
      nextYear: "后一年",
      prevMonth: "上个月",
      nextMonth: "下个月",
      year: "年",
      month1: "1 月",
      month2: "2 月",
      month3: "3 月",
      month4: "4 月",
      month5: "5 月",
      month6: "6 月",
      month7: "7 月",
      month8: "8 月",
      month9: "9 月",
      month10: "10 月",
      month11: "11 月",
      month12: "12 月",
      weeks: {
        sun: "日",
        mon: "一",
        tue: "二",
        wed: "三",
        thu: "四",
        fri: "五",
        sat: "六"
      },
      weeksFull: {
        sun: "星期日",
        mon: "星期一",
        tue: "星期二",
        wed: "星期三",
        thu: "星期四",
        fri: "星期五",
        sat: "星期六"
      },
      months: {
        jan: "一月",
        feb: "二月",
        mar: "三月",
        apr: "四月",
        may: "五月",
        jun: "六月",
        jul: "七月",
        aug: "八月",
        sep: "九月",
        oct: "十月",
        nov: "十一月",
        dec: "十二月"
      }
    },
    inputNumber: {
      decrease: "减少数值",
      increase: "增加数值"
    },
    select: {
      loading: "加载中",
      noMatch: "无匹配数据",
      noData: "无数据",
      placeholder: "请选择"
    },
    dropdown: {
      toggleDropdown: "切换下拉选项"
    },
    mention: {
      loading: "加载中"
    },
    cascader: {
      noMatch: "无匹配数据",
      loading: "加载中",
      placeholder: "请选择",
      noData: "暂无数据"
    },
    pagination: {
      goto: "前往",
      pagesize: "条/页",
      total: "共 {total} 条",
      pageClassifier: "页",
      page: "页",
      prev: "上一页",
      next: "下一页",
      currentPage: "第 {pager} 页",
      prevPages: "向前 {pager} 页",
      nextPages: "向后 {pager} 页",
      deprecationWarning: "你使用了一些已被废弃的用法，请参考 el-pagination 的官方文档"
    },
    dialog: {
      close: "关闭此对话框"
    },
    drawer: {
      close: "关闭此对话框"
    },
    messagebox: {
      title: "提示",
      confirm: "确定",
      cancel: "取消",
      error: "输入的数据不合法!",
      close: "关闭此对话框"
    },
    upload: {
      deleteTip: "按 delete 键可删除",
      delete: "删除",
      preview: "查看图片",
      continue: "继续上传"
    },
    slider: {
      defaultLabel: "滑块介于 {min} 至 {max}",
      defaultRangeStartLabel: "选择起始值",
      defaultRangeEndLabel: "选择结束值"
    },
    table: {
      emptyText: "暂无数据",
      confirmFilter: "筛选",
      resetFilter: "重置",
      clearFilter: "全部",
      sumText: "合计"
    },
    tour: {
      next: "下一步",
      previous: "上一步",
      finish: "结束导览"
    },
    tree: {
      emptyText: "暂无数据"
    },
    transfer: {
      noMatch: "无匹配数据",
      noData: "无数据",
      titles: ["列表 1", "列表 2"],
      filterPlaceholder: "请输入搜索内容",
      noCheckedFormat: "共 {total} 项",
      hasCheckedFormat: "已选 {checked}/{total} 项"
    },
    image: {
      error: "加载失败"
    },
    pageHeader: {
      title: "返回"
    },
    popconfirm: {
      confirmButtonText: "确定",
      cancelButtonText: "取消"
    },
    carousel: {
      leftArrow: "上一张幻灯片",
      rightArrow: "下一张幻灯片",
      indicator: "幻灯片切换至索引 {index}"
    }
  }
};
const he = ["onClick", "onDblclick"], Fe = /* @__PURE__ */ J({
  __name: "table",
  props: {
    data: {},
    columns: { default: () => [] },
    editMode: { default: void 0 },
    trigger: { default: void 0 }
  },
  emits: ["update:data", "save", "field-change"],
  setup(C, { expose: b, emit: F }) {
    const n = C, d = F, f = h([]), c = h([]), v = {
      input: V,
      select: H,
      date: ee,
      number: ue,
      textarea: V
    }, U = (e) => v[e || "input"], y = (e) => {
      const t = {
        size: "small",
        placeholder: e.placeholder
      };
      switch (e.type) {
        case "select":
          return {
            ...t,
            options: e.options
          };
        case "date":
          return {
            ...t,
            type: "date",
            valueFormat: "YYYY-MM-DD",
            format: "YYYY-MM-DD"
          };
        case "number":
          return {
            ...t,
            min: e.min,
            max: e.max,
            step: e.step
          };
        case "textarea":
          return {
            ...t,
            type: "textarea",
            rows: e.rows || 2
          };
        default:
          return t;
      }
    };
    X(() => n.data, (e) => {
      f.value = e.map((t) => ({
        ...t,
        editing: t.editing || !1
      })), c.value.length || (c.value = JSON.parse(JSON.stringify(e)));
    }, { immediate: !0 });
    const D = h([]), O = (e, t) => D.value.some(
      (a) => a.rowIndex === e && a.prop === t
    ), P = (e, t) => {
      O(e, t) || (n.editMode === "cell" ? D.value = [{ rowIndex: e, prop: t }] : n.editMode === "row" && (f.value[e].editing = !f.value[e].editing, D.value.push({ rowIndex: e, prop: t })));
    }, z = (e, t) => {
      D.value = D.value.filter(
        (a) => !(a.rowIndex === e && a.prop === t)
      );
    }, L = (e, t) => {
      if (!e.editable)
        return !1;
      const a = e.editMode || n.editMode;
      if (a === "row")
        return f.value[t].editing;
      if (a === "cell")
        return O(t, e.prop);
    }, j = (e, t) => {
      n.editMode !== "cell" && n.editMode === "row" && (f.value.forEach((r, i) => {
        r.editing && i !== e && N(i);
      }), t.editing = !0, n.columns.filter((r) => r.editable).forEach((r) => {
        P(e, r.prop);
      }));
    }, N = (e) => {
      const t = f.value[e];
      t.editing = !1, D.value = D.value.filter((a) => a.rowIndex !== e), d("save", e, t), d("update:data", f.value.map(({ editing: a, ...r }) => r));
    }, $ = (e, t) => {
      O(e, t) && (n.editMode === "cell" && z(e, t), D.value.some((r) => r.rowIndex === e) || setTimeout(() => {
        f.value[e].editing && N(e);
      }, 200));
    }, B = h(/* @__PURE__ */ new Map()), p = (e, t, a) => {
      a && B.value.set(`${e}-${t}`, a);
    }, Y = (e, t, a, r) => {
      (a.trigger || n.trigger) === r && (P(e, t), setTimeout(() => {
        const R = B.value.get(`${e}-${t}`);
        R && (R.focus ? R.focus() : R.$el && R.$el.querySelector("input") && R.$el.querySelector("input").focus());
      }));
    }, I = (e, t, a) => {
      const r = n.columns.find((i) => i.prop === t);
      r != null && r.onChange && r.onChange(a, f.value[e]), d("field-change", e, t, a);
    }, l = (e, t, a) => e.show === !1 ? null : ae(x, {
      type: e.type || "default",
      link: !0,
      onClick: () => e.handler(t, a)
    }, () => e.text);
    return b({
      handleEdit: j,
      renderButtonGroup: (e, t, a) => {
        const r = e.buttons.filter((i) => i.show !== !1).map((i) => l(i, t, a)).filter(Boolean);
        return e.space !== !1 ? ae(Z, {}, () => r) : r;
      }
    }), (e, t) => (o(), E(s(ce), { locale: s(ge) }, {
      default: m(() => [
        _(s(me), T({ data: f.value }, e.$attrs), {
          default: m(() => [
            (o(!0), g(w, null, G(e.columns, (a) => (o(), E(s(fe), T({
              key: a.prop,
              ref_for: !0
            }, a), {
              default: m((r) => [
                a.editable ? (o(), g("div", {
                  key: 0,
                  onClick: (i) => Y(r.$index, a.prop, a, "click"),
                  onDblclick: (i) => Y(r.$index, a.prop, a, "dblclick")
                }, [
                  L(a, r.$index) ? (o(), E(W(U(a.type)), T({
                    key: 0,
                    modelValue: r.row[a.prop],
                    "onUpdate:modelValue": (i) => r.row[a.prop] = i,
                    ref_for: !0
                  }, y(a), {
                    ref_for: !0,
                    ref: (i) => p(r.$index, a.prop, i),
                    onChange: (i) => I(r.$index, a.prop, i),
                    onBlur: (i) => $(r.$index, a.prop)
                  }), null, 16, ["modelValue", "onUpdate:modelValue", "onChange", "onBlur"])) : (o(), g(w, { key: 1 }, [
                    a.formatter ? (o(), g(w, { key: 0 }, [
                      k(A(a.formatter(r.row[a.prop], r.row)), 1)
                    ], 64)) : (o(), g(w, { key: 1 }, [
                      k(A(r.row[a.prop]), 1)
                    ], 64))
                  ], 64))
                ], 40, he)) : a.render ? (o(), E(W(a.render({
                  row: r.row,
                  $index: r.$index,
                  column: a,
                  editing: r.row.editing
                })), { key: 1 })) : (o(), g(w, { key: 2 }, [
                  a.formatter ? (o(), g(w, { key: 0 }, [
                    k(A(a.formatter(r.row[a.prop], r.row)), 1)
                  ], 64)) : (o(), g(w, { key: 1 }, [
                    k(A(r.row[a.prop]), 1)
                  ], 64))
                ], 64))
              ]),
              _: 2
            }, 1040))), 128))
          ]),
          _: 1
        }, 16, ["data"])
      ]),
      _: 1
    }, 8, ["locale"]));
  }
});
const te = (C, b) => {
  const F = C.__vccOpts || C;
  for (const [n, d] of b)
    F[n] = d;
  return F;
}, be = /* @__PURE__ */ te(Fe, [["__scopeId", "data-v-c24213c4"]]);
/*! Element Plus Icons Vue v2.3.1 */
var Ce = /* @__PURE__ */ J({
  name: "CircleCloseFilled",
  __name: "circle-close-filled",
  setup(C) {
    return (b, F) => (o(), g("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      q("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"
      })
    ]));
  }
}), de = Ce;
const ye = { class: "form-content" }, _e = { class: "form-item-content" }, De = {
  key: 0,
  class: "form-buttons"
}, Be = /* @__PURE__ */ J({
  __name: "form",
  props: {
    fields: { default: () => [] },
    modelValue: { default: () => ({}) },
    showButtons: { type: Boolean, default: !0 },
    showSubmit: { type: Boolean, default: !0 },
    showReset: { type: Boolean, default: !0 },
    submitText: { default: "提交" },
    resetText: { default: "重置" },
    loading: { type: Boolean, default: !1 },
    showAddField: { type: Boolean, default: !1 },
    availableFields: { default: () => [] },
    maxDisplayFields: { default: 3 }
  },
  emits: ["update:modelValue", "submit", "reset", "change"],
  setup(C, { expose: b, emit: F }) {
    const n = C, d = F, f = h(Object.assign([], n.fields)), c = h(), v = h({}), U = h({}), y = K({
      get: () => v.value,
      set: (l) => {
        const u = JSON.stringify(v.value), e = JSON.stringify(l);
        u !== e && (v.value = JSON.parse(e), d("update:modelValue", l));
      }
    });
    X(() => n.modelValue, (l) => {
      v.value = JSON.parse(JSON.stringify(l));
    }, { immediate: !0 });
    const D = {
      input: V,
      select: H,
      date: ee,
      number: ue,
      switch: se,
      radio: ie,
      checkbox: pe,
      textarea: V,
      password: V
    }, O = (l) => D[l], P = (l) => {
      const u = {
        placeholder: l.placeholder,
        disabled: l.disabled,
        clearable: l.clearable
      };
      switch (l.type) {
        case "select":
          return {
            ...u,
            options: l.options,
            multiple: l.multiple
          };
        case "date":
          return {
            ...u,
            type: "date",
            valueFormat: "YYYY-MM-DD"
          };
        case "number":
          return {
            ...u,
            min: l.min,
            max: l.max,
            step: l.step
          };
        case "textarea":
          return {
            ...u,
            type: "textarea",
            rows: l.rows || 2
          };
        case "password":
          return {
            ...u,
            type: "password",
            showPassword: !0
          };
        default:
          return u;
      }
    }, z = (l, u) => {
      const e = n.fields.find((t) => t.prop === l);
      e != null && e.onChange && e.onChange(u), d("change", l, u);
    }, L = async () => {
      if (c.value)
        try {
          await c.value.validate(), d("submit", v.value);
        } catch (l) {
          console.error("表单验证失败:", l);
        }
    }, j = () => {
      c.value && c.value.resetFields(), d("reset");
    }, N = (l) => !l.prop || !l.label || !l.type ? (S.error("字段配置不完整"), !1) : p.value.some((u) => u.prop === l.prop) ? (S.warning(`字段 "${l.label}" 已存在`), !1) : (p.value = [...p.value, l], l.prop in v.value || (v.value[l.prop] = null), S.success(`添加字段 "${l.label}" 成功`), !0), $ = (l) => {
      const u = p.value.findIndex((e) => e.prop === l);
      return u > -1 ? (p.value.splice(u, 1), delete v.value[l], !0) : !1;
    }, B = h(""), p = h(Object.assign([], f.value.slice(0, n.maxDisplayFields))), Y = K(
      () => f.value.filter(
        (l) => !p.value.some((u) => u.prop === l.prop)
      )
    ), I = () => {
      if (!B.value)
        return;
      const l = n.fields.find((u) => u.prop === B.value);
      l && (N(l), B.value = "");
    };
    return b({
      formRef: c,
      validate: () => {
        var l;
        return (l = c.value) == null ? void 0 : l.validate();
      },
      resetFields: () => {
        var l;
        return (l = c.value) == null ? void 0 : l.resetFields();
      },
      clearValidate: (l) => {
        var u;
        return (u = c.value) == null ? void 0 : u.clearValidate(l);
      },
      addField: N,
      removeField: $
    }), (l, u) => (o(), g("div", null, [
      _(s(le), T({
        ref_key: "formRef",
        ref: c,
        model: y.value,
        rules: U.value
      }, l.$attrs, {
        inline: "",
        class: "horizontal-form"
      }), {
        default: m(() => [
          q("div", ye, [
            (o(!0), g(w, null, G(p.value, (e) => (o(), E(s(re), {
              key: e.prop,
              label: e.label,
              prop: e.prop,
              rules: e.rules,
              class: "form-item"
            }, {
              default: m(() => [
                q("div", _e, [
                  (o(), E(W(O(e.type)), T({
                    modelValue: y.value[e.prop],
                    "onUpdate:modelValue": (t) => y.value[e.prop] = t,
                    ref_for: !0
                  }, P(e), {
                    onChange: (t) => z(e.prop, t)
                  }), null, 16, ["modelValue", "onUpdate:modelValue", "onChange"])),
                  e.removable !== !1 ? (o(), E(s(x), {
                    key: 0,
                    type: "danger",
                    link: "",
                    onClick: (t) => $(e.prop)
                  }, {
                    default: m(() => [
                      _(s(oe), null, {
                        default: m(() => [
                          _(s(de))
                        ]),
                        _: 1
                      })
                    ]),
                    _: 2
                  }, 1032, ["onClick"])) : M("", !0)
                ])
              ]),
              _: 2
            }, 1032, ["label", "prop", "rules"]))), 128)),
            _(s(Z), null, {
              default: m(() => [
                _(s(H), {
                  modelValue: B.value,
                  "onUpdate:modelValue": u[0] || (u[0] = (e) => B.value = e),
                  placeholder: "选择已有字段",
                  style: { width: "200px" }
                }, {
                  default: m(() => [
                    (o(!0), g(w, null, G(Y.value, (e) => (o(), E(s(ne), {
                      key: e.prop,
                      label: e.label,
                      value: e.prop
                    }, null, 8, ["label", "value"]))), 128))
                  ]),
                  _: 1
                }, 8, ["modelValue"]),
                _(s(x), {
                  onClick: I,
                  type: "success",
                  disabled: !B.value
                }, {
                  default: m(() => u[1] || (u[1] = [
                    k(" 添加条件 ")
                  ])),
                  _: 1
                }, 8, ["disabled"]),
                l.showSubmit ? (o(), E(s(x), {
                  key: 0,
                  type: "primary",
                  onClick: L,
                  loading: l.loading
                }, {
                  default: m(() => [
                    k(A(l.submitText), 1)
                  ]),
                  _: 1
                }, 8, ["loading"])) : M("", !0),
                l.showReset ? (o(), E(s(x), {
                  key: 1,
                  onClick: j
                }, {
                  default: m(() => [
                    k(A(l.resetText), 1)
                  ]),
                  _: 1
                })) : M("", !0),
                Q(l.$slots, "buttons", {}, void 0, !0)
              ]),
              _: 3
            })
          ]),
          l.showButtons ? (o(), g("div", De)) : M("", !0)
        ]),
        _: 3
      }, 16, ["model", "rules"])
    ]));
  }
});
const we = /* @__PURE__ */ te(Be, [["__scopeId", "data-v-4e702f17"]]), ke = { class: "form-content" }, xe = { class: "form-item-content" }, Ve = {
  key: 0,
  class: "form-buttons"
}, $e = /* @__PURE__ */ J({
  __name: "search",
  props: {
    fields: { default: () => [] },
    modelValue: { default: () => ({}) },
    showButtons: { type: Boolean, default: !0 },
    showSubmit: { type: Boolean, default: !0 },
    showReset: { type: Boolean, default: !0 },
    submitText: { default: "提交" },
    resetText: { default: "重置" },
    loading: { type: Boolean, default: !1 },
    showAddField: { type: Boolean, default: !1 },
    availableFields: { default: () => [] },
    maxDisplayFields: { default: 3 }
  },
  emits: ["update:modelValue", "submit", "reset", "change"],
  setup(C, { expose: b, emit: F }) {
    const n = C, d = F, f = h(Object.assign([], n.fields)), c = h(), v = h({}), U = h({}), y = K({
      get: () => v.value,
      set: (u) => {
        const e = JSON.stringify(v.value), t = JSON.stringify(u);
        e !== t && (v.value = JSON.parse(t), d("update:modelValue", u));
      }
    });
    X(() => n.modelValue, (u) => {
      v.value = JSON.parse(JSON.stringify(u));
    }, { immediate: !0 });
    const D = {
      input: V,
      select: H,
      date: ee,
      number: ue,
      switch: se,
      radio: ie,
      checkbox: pe,
      textarea: V,
      password: V
    }, O = (u) => D[u], P = (u) => {
      const e = {
        placeholder: u.placeholder,
        disabled: u.disabled,
        clearable: u.clearable
      };
      switch (u.type) {
        case "select":
          return {
            ...e,
            options: u.options,
            multiple: u.multiple
          };
        case "date":
          return {
            ...e,
            type: "date",
            valueFormat: "YYYY-MM-DD"
          };
        case "number":
          return {
            ...e,
            min: u.min,
            max: u.max,
            step: u.step
          };
        case "textarea":
          return {
            ...e,
            type: "textarea",
            rows: u.rows || 2
          };
        case "password":
          return {
            ...e,
            type: "password",
            showPassword: !0
          };
        default:
          return e;
      }
    }, z = (u, e) => {
      const t = n.fields.find((a) => a.prop === B.value);
      t != null && t.onChange && t.onChange(e), d("change", B.value, e);
    }, L = async () => {
      if (c.value)
        try {
          await c.value.validate(), d("submit", v.value);
        } catch (u) {
          console.error("表单验证失败:", u);
        }
    }, j = () => {
      c.value && c.value.resetFields(), d("reset");
    }, N = (u) => !u.prop || !u.label || !u.type ? (S.error("字段配置不完整"), !1) : p.value.some((e) => e.prop === u.prop) ? (S.warning(`字段 "${u.label}" 已存在`), !1) : (p.value = [...p.value, u], u.prop in v.value || (v.value[u.prop] = null), S.success(`添加字段 "${u.label}" 成功`), !0), $ = (u) => {
      const e = p.value.findIndex((t) => t.prop === u);
      return e > -1 ? (p.value.splice(e, 1), delete v.value[u], !0) : !1;
    }, B = h(""), p = h(Object.assign([], f.value.slice(0, n.maxDisplayFields)));
    K(
      () => f.value.filter(
        (u) => !p.value.some((e) => e.prop === u.prop)
      )
    );
    const Y = (u) => {
      const e = p.value.filter((t) => t.prop !== u.prop).map((t) => t.prop);
      return n.fields.filter(
        (t) => t.prop === u.prop || // 当前字段始终可选
        !e.includes(t.prop)
        // 未被使用的字段
      );
    }, I = (u, e) => {
      const t = n.fields.find((i) => i.prop === u);
      if (!t)
        return;
      const a = p.value.findIndex((i) => i.prop === e.prop);
      if (a === -1)
        return;
      if (p.value.some(
        (i) => i.prop === u && i.prop !== e.prop
      )) {
        S.warning("该字段已存在"), p.value[a] = { ...e };
        return;
      }
      y.value[e.prop], delete y.value[e.prop], p.value[a] = {
        ...t,
        removable: e.removable
      }, y.value[t.prop] = null, d("change", t.prop, y.value[t.prop]);
    };
    b({
      formRef: c,
      validate: () => {
        var u;
        return (u = c.value) == null ? void 0 : u.validate();
      },
      resetFields: () => {
        var u;
        return (u = c.value) == null ? void 0 : u.resetFields();
      },
      clearValidate: (u) => {
        var e;
        return (e = c.value) == null ? void 0 : e.clearValidate(u);
      },
      addField: N,
      removeField: $
    });
    const l = () => {
      const u = f.value.find(
        (e) => !p.value.some((t) => t.prop === e.prop)
      );
      if (!u) {
        S.warning("没有更多可用的搜索条件");
        return;
      }
      p.value.push({
        ...u,
        removable: !0
      }), u.prop in v.value || (v.value[u.prop] = null);
    };
    return (u, e) => (o(), g("div", null, [
      _(s(le), T({
        ref_key: "formRef",
        ref: c,
        model: y.value,
        rules: U.value
      }, u.$attrs, {
        inline: "",
        class: "horizontal-form"
      }), {
        default: m(() => [
          q("div", ke, [
            (o(!0), g(w, null, G(p.value, (t) => (o(), E(s(re), {
              key: t.prop,
              prop: t.prop,
              rules: t.rules,
              class: "form-item"
            }, {
              default: m(() => [
                q("div", xe, [
                  _(s(H), {
                    modelValue: t.prop,
                    "onUpdate:modelValue": (a) => t.prop = a,
                    clearable: "",
                    class: "form-item-select",
                    onClear: (a) => $(t.prop),
                    onChange: (a) => I(a, t)
                  }, {
                    default: m(() => [
                      (o(!0), g(w, null, G(Y(t), (a) => (o(), E(s(ne), {
                        key: a.prop,
                        value: a.prop,
                        label: a.label,
                        disabled: a.disabled
                      }, null, 8, ["value", "label", "disabled"]))), 128))
                    ]),
                    _: 2
                  }, 1032, ["modelValue", "onUpdate:modelValue", "onClear", "onChange"]),
                  (o(), E(W(O(t.type)), T({
                    modelValue: y.value[t.prop],
                    "onUpdate:modelValue": (a) => y.value[t.prop] = a,
                    ref_for: !0
                  }, P(t), {
                    onChange: (a) => z(t.prop, a)
                  }), null, 16, ["modelValue", "onUpdate:modelValue", "onChange"])),
                  t.removable !== !1 ? (o(), E(s(x), {
                    key: 0,
                    type: "danger",
                    link: "",
                    onClick: (a) => $(t.prop)
                  }, {
                    default: m(() => [
                      _(s(oe), null, {
                        default: m(() => [
                          _(s(de))
                        ]),
                        _: 1
                      })
                    ]),
                    _: 2
                  }, 1032, ["onClick"])) : M("", !0)
                ])
              ]),
              _: 2
            }, 1032, ["prop", "rules"]))), 128)),
            _(s(Z), null, {
              default: m(() => [
                _(s(x), {
                  onClick: l,
                  type: "success"
                }, {
                  default: m(() => e[0] || (e[0] = [
                    k(" 添加条件 ")
                  ])),
                  _: 1
                }),
                u.showSubmit ? (o(), E(s(x), {
                  key: 0,
                  type: "primary",
                  onClick: L,
                  loading: u.loading
                }, {
                  default: m(() => [
                    k(A(u.submitText), 1)
                  ]),
                  _: 1
                }, 8, ["loading"])) : M("", !0),
                u.showReset ? (o(), E(s(x), {
                  key: 1,
                  onClick: j
                }, {
                  default: m(() => [
                    k(A(u.resetText), 1)
                  ]),
                  _: 1
                })) : M("", !0),
                Q(u.$slots, "buttons", {}, void 0, !0)
              ]),
              _: 3
            })
          ]),
          u.showButtons ? (o(), g("div", Ve)) : M("", !0)
        ]),
        _: 3
      }, 16, ["model", "rules"])
    ]));
  }
});
const Se = /* @__PURE__ */ te($e, [["__scopeId", "data-v-def6c8c1"]]);
const Ae = {
  CButton: ve,
  CInput: Ee,
  CTable: be,
  CForm: we,
  CSearch: Se
}, Oe = {
  install(C) {
    Object.entries(Ae).forEach(([b, F]) => {
      C.component(b, F);
    });
  }
};
export {
  ve as CButton,
  we as CForm,
  Ee as CInput,
  Se as CSearch,
  be as CTable,
  Oe as default
};
