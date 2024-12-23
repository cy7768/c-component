import { defineComponent as z, openBlock as o, createBlock as F, unref as i, withCtx as v, renderSlot as ee, mergeProps as T, ref as h, watch as ue, createVNode as k, createElementBlock as E, Fragment as w, renderList as H, resolveDynamicComponent as Q, createTextVNode as x, toDisplayString as M, h as J, createElementVNode as W, computed as X, createCommentVNode as N } from "vue";
import { ElButton as V, ElInput as $, ElConfigProvider as ce, ElTable as me, ElTableColumn as ve, ElSpace as te, ElSelect as K, ElDatePicker as ae, ElInputNumber as le, ElForm as oe, ElFormItem as ne, ElIcon as fe, ElOption as se, ElCheckboxGroup as Z, ElCheckbox as ie, ElMessage as A, ElSwitch as pe, ElRadioGroup as de } from "element-plus";
const Ee = /* @__PURE__ */ z({
  name: "CButton",
  __name: "button",
  props: {
    type: { default: "default" },
    size: { default: "default" },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(_, { emit: C }) {
    const g = C;
    return (n, c) => (o(), F(i(V), {
      type: n.type,
      size: n.size,
      disabled: n.disabled,
      onClick: c[0] || (c[0] = (p) => g("click", p))
    }, {
      default: v(() => [
        ee(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["type", "size", "disabled"]));
  }
}), he = /* @__PURE__ */ z({
  name: "CInput",
  __name: "input",
  props: {
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(_, { emit: C }) {
    const g = C;
    return (n, c) => (o(), F(i($), T({
      "model-value": n.modelValue,
      "onUpdate:modelValue": c[0] || (c[0] = (p) => g("update:modelValue", p))
    }, n.$attrs), null, 16, ["model-value"]));
  }
});
var Fe = {
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
const ge = ["onClick", "onDblclick"], be = /* @__PURE__ */ z({
  __name: "table",
  props: {
    data: {},
    columns: { default: () => [] },
    editMode: { default: void 0 },
    trigger: { default: void 0 }
  },
  emits: ["update:data", "save", "field-change"],
  setup(_, { expose: C, emit: g }) {
    const n = _, c = g, p = h([]), d = h([]), m = {
      input: $,
      select: K,
      date: ae,
      number: le,
      textarea: $
    }, L = (u) => m[u || "input"], b = (u) => {
      const a = {
        size: "small",
        placeholder: u.placeholder
      };
      switch (u.type) {
        case "select":
          return {
            ...a,
            options: u.options
          };
        case "date":
          return {
            ...a,
            type: "date",
            valueFormat: "YYYY-MM-DD",
            format: "YYYY-MM-DD"
          };
        case "number":
          return {
            ...a,
            min: u.min,
            max: u.max,
            step: u.step
          };
        case "textarea":
          return {
            ...a,
            type: "textarea",
            rows: u.rows || 2
          };
        default:
          return a;
      }
    };
    ue(() => n.data, (u) => {
      p.value = u.map((a) => ({
        ...a,
        editing: a.editing || !1
      })), d.value.length || (d.value = JSON.parse(JSON.stringify(u)));
    }, { immediate: !0 });
    const D = h([]), O = (u, a) => D.value.some(
      (e) => e.rowIndex === u && e.prop === a
    ), P = (u, a) => {
      O(u, a) || (n.editMode === "cell" ? D.value = [{ rowIndex: u, prop: a }] : n.editMode === "row" && (p.value[u].editing = !p.value[u].editing, D.value.push({ rowIndex: u, prop: a })));
    }, j = (u, a) => {
      D.value = D.value.filter(
        (e) => !(e.rowIndex === u && e.prop === a)
      );
    }, I = (u, a) => {
      if (!u.editable)
        return !1;
      const e = u.editMode || n.editMode;
      if (e === "row")
        return p.value[a].editing;
      if (e === "cell")
        return O(a, u.prop);
    }, G = (u, a) => {
      n.editMode !== "cell" && n.editMode === "row" && (p.value.forEach((t, r) => {
        t.editing && r !== u && Y(r);
      }), a.editing = !0, n.columns.filter((t) => t.editable).forEach((t) => {
        P(u, t.prop);
      }));
    }, Y = (u) => {
      const a = p.value[u];
      a.editing = !1, D.value = D.value.filter((e) => e.rowIndex !== u), c("save", u, a), c("update:data", p.value.map(({ editing: e, ...t }) => t));
    }, R = (u, a) => {
      O(u, a) && (n.editMode === "cell" && j(u, a), D.value.some((t) => t.rowIndex === u) || setTimeout(() => {
        p.value[u].editing && Y(u);
      }, 200));
    }, S = h(/* @__PURE__ */ new Map()), B = (u, a, e) => {
      e && S.value.set(`${u}-${a}`, e);
    }, y = (u, a, e, t) => {
      (e.trigger || n.trigger) === t && (P(u, a), setTimeout(() => {
        const s = S.value.get(`${u}-${a}`);
        s && (s.focus ? s.focus() : s.$el && s.$el.querySelector("input") && s.$el.querySelector("input").focus());
      }));
    }, f = (u, a, e) => {
      const t = n.columns.find((r) => r.prop === a);
      t != null && t.onChange && t.onChange(e, p.value[u]), c("field-change", u, a, e);
    }, q = (u, a, e) => u.show === !1 ? null : J(V, {
      type: u.type || "default",
      link: !0,
      onClick: () => u.handler(a, e)
    }, () => u.text);
    return C({
      handleEdit: G,
      renderButtonGroup: (u, a, e) => {
        const t = u.buttons.filter((r) => r.show !== !1).map((r) => q(r, a, e)).filter(Boolean);
        return u.space !== !1 ? J(te, {}, () => t) : t;
      }
    }), (u, a) => (o(), F(i(ce), { locale: i(Fe) }, {
      default: v(() => [
        k(i(me), T({ data: p.value }, u.$attrs), {
          default: v(() => [
            (o(!0), E(w, null, H(u.columns, (e) => (o(), F(i(ve), T({
              key: e.prop,
              ref_for: !0
            }, e), {
              default: v((t) => [
                e.editable ? (o(), E("div", {
                  key: 0,
                  onClick: (r) => y(t.$index, e.prop, e, "click"),
                  onDblclick: (r) => y(t.$index, e.prop, e, "dblclick")
                }, [
                  I(e, t.$index) ? (o(), F(Q(L(e.type)), T({
                    key: 0,
                    modelValue: t.row[e.prop],
                    "onUpdate:modelValue": (r) => t.row[e.prop] = r,
                    ref_for: !0
                  }, b(e), {
                    ref_for: !0,
                    ref: (r) => B(t.$index, e.prop, r),
                    onChange: (r) => f(t.$index, e.prop, r),
                    onBlur: (r) => R(t.$index, e.prop)
                  }), null, 16, ["modelValue", "onUpdate:modelValue", "onChange", "onBlur"])) : (o(), E(w, { key: 1 }, [
                    e.formatter ? (o(), E(w, { key: 0 }, [
                      x(M(e.formatter(t.row[e.prop], t.row)), 1)
                    ], 64)) : (o(), E(w, { key: 1 }, [
                      x(M(t.row[e.prop]), 1)
                    ], 64))
                  ], 64))
                ], 40, ge)) : e.render ? (o(), F(Q(e.render({
                  row: t.row,
                  $index: t.$index,
                  column: e,
                  editing: t.row.editing
                })), { key: 1 })) : (o(), E(w, { key: 2 }, [
                  e.formatter ? (o(), E(w, { key: 0 }, [
                    x(M(e.formatter(t.row[e.prop], t.row)), 1)
                  ], 64)) : (o(), E(w, { key: 1 }, [
                    x(M(t.row[e.prop]), 1)
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
const re = (_, C) => {
  const g = _.__vccOpts || _;
  for (const [n, c] of C)
    g[n] = c;
  return g;
}, Ce = /* @__PURE__ */ re(be, [["__scopeId", "data-v-c24213c4"]]);
/*! Element Plus Icons Vue v2.3.1 */
var ye = /* @__PURE__ */ z({
  name: "CircleCloseFilled",
  __name: "circle-close-filled",
  setup(_) {
    return (C, g) => (o(), E("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      W("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"
      })
    ]));
  }
}), _e = ye;
const De = { class: "form-content" }, Be = { class: "form-item-content" }, we = {
  key: 0,
  class: "form-buttons"
}, ke = /* @__PURE__ */ z({
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
  setup(_, { expose: C, emit: g }) {
    const n = _, c = g, p = h(Object.assign([], n.fields)), d = h(), m = h({}), L = h({}), b = X({
      get: () => m.value,
      set: (l) => {
        const u = JSON.stringify(m.value), a = JSON.stringify(l);
        u !== a && (m.value = JSON.parse(a), c("update:modelValue", l));
      }
    });
    ue(() => n.modelValue, (l) => {
      m.value = JSON.parse(JSON.stringify(l));
    }, { immediate: !0 });
    const D = {
      input: $,
      select: K,
      date: ae,
      number: le,
      switch: pe,
      radio: de,
      checkbox: Z,
      textarea: $,
      password: $
    }, O = (l) => D[l], P = (l) => {
      switch (l.type) {
        case "checkbox":
          return {
            name: "CheckboxGroup",
            render() {
              return J(Z, {
                modelValue: b.value[l.prop],
                "onUpdate:modelValue": (u) => {
                  b.value[l.prop] = u;
                }
              }, () => {
                var u;
                return (u = l.options) == null ? void 0 : u.map(
                  (a) => J(ie, {
                    key: a.value,
                    label: a.value
                  }, () => a.label)
                );
              });
            }
          };
        default:
          return O(l.type);
      }
    }, j = (l) => {
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
        case "checkbox":
          return {
            ...u,
            options: l.options
          };
        default:
          return u;
      }
    }, I = (l, u) => {
      const a = n.fields.find((e) => e.prop === l);
      a != null && a.onChange && a.onChange(u), c("change", l, u);
    }, G = async () => {
      if (d.value)
        try {
          await d.value.validate(), c("submit", m.value);
        } catch (l) {
          console.error("表单验证失败:", l);
        }
    }, Y = () => {
      d.value && d.value.resetFields(), c("reset");
    }, R = (l) => !l.prop || !l.label || !l.type ? (A.error("字段配置不完整"), !1) : y.value.some((u) => u.prop === l.prop) ? (A.warning(`字段 "${l.label}" 已存在`), !1) : (y.value = [...y.value, l], l.prop in m.value || (m.value[l.prop] = null), A.success(`添加字段 "${l.label}" 成功`), !0), S = (l) => {
      const u = y.value.findIndex((a) => a.prop === l);
      return u > -1 ? (y.value.splice(u, 1), delete m.value[l], !0) : !1;
    }, B = h(""), y = h(Object.assign([], p.value.slice(0, n.maxDisplayFields))), f = X(
      () => p.value.filter(
        (l) => !y.value.some((u) => u.prop === l.prop)
      )
    ), q = () => {
      if (!B.value)
        return;
      const l = n.fields.find((u) => u.prop === B.value);
      l && (R(l), B.value = "");
    };
    return C({
      formRef: d,
      validate: () => {
        var l;
        return (l = d.value) == null ? void 0 : l.validate();
      },
      resetFields: () => {
        var l;
        return (l = d.value) == null ? void 0 : l.resetFields();
      },
      clearValidate: (l) => {
        var u;
        return (u = d.value) == null ? void 0 : u.clearValidate(l);
      },
      addField: R,
      removeField: S
    }), (l, u) => (o(), E("div", null, [
      k(i(oe), T({
        ref_key: "formRef",
        ref: d,
        model: b.value,
        rules: L.value
      }, l.$attrs, {
        inline: "",
        class: "horizontal-form"
      }), {
        default: v(() => [
          W("div", De, [
            (o(!0), E(w, null, H(y.value, (a) => (o(), F(i(ne), {
              key: a.prop,
              label: a.label,
              prop: a.prop,
              rules: a.rules,
              class: "form-item"
            }, {
              default: v(() => [
                W("div", Be, [
                  (o(), F(Q(P(a)), T({
                    modelValue: b.value[a.prop],
                    "onUpdate:modelValue": (e) => b.value[a.prop] = e,
                    ref_for: !0
                  }, j(a), {
                    onChange: (e) => I(a.prop, e)
                  }), null, 16, ["modelValue", "onUpdate:modelValue", "onChange"])),
                  a.removable !== !1 ? (o(), F(i(V), {
                    key: 0,
                    type: "danger",
                    link: "",
                    onClick: (e) => S(a.prop)
                  }, {
                    default: v(() => [
                      k(i(fe), null, {
                        default: v(() => [
                          k(i(_e))
                        ]),
                        _: 1
                      })
                    ]),
                    _: 2
                  }, 1032, ["onClick"])) : N("", !0)
                ])
              ]),
              _: 2
            }, 1032, ["label", "prop", "rules"]))), 128)),
            k(i(te), null, {
              default: v(() => [
                k(i(K), {
                  modelValue: B.value,
                  "onUpdate:modelValue": u[0] || (u[0] = (a) => B.value = a),
                  placeholder: "选择已有字段",
                  style: { width: "200px" }
                }, {
                  default: v(() => [
                    (o(!0), E(w, null, H(f.value, (a) => (o(), F(i(se), {
                      key: a.prop,
                      label: a.label,
                      value: a.prop
                    }, null, 8, ["label", "value"]))), 128))
                  ]),
                  _: 1
                }, 8, ["modelValue"]),
                k(i(V), {
                  onClick: q,
                  type: "success",
                  disabled: !B.value
                }, {
                  default: v(() => u[1] || (u[1] = [
                    x(" 添加条件 ")
                  ])),
                  _: 1
                }, 8, ["disabled"]),
                l.showSubmit ? (o(), F(i(V), {
                  key: 0,
                  type: "primary",
                  onClick: G,
                  loading: l.loading
                }, {
                  default: v(() => [
                    x(M(l.submitText), 1)
                  ]),
                  _: 1
                }, 8, ["loading"])) : N("", !0),
                l.showReset ? (o(), F(i(V), {
                  key: 1,
                  onClick: Y
                }, {
                  default: v(() => [
                    x(M(l.resetText), 1)
                  ]),
                  _: 1
                })) : N("", !0),
                ee(l.$slots, "buttons", {}, void 0, !0)
              ]),
              _: 3
            })
          ]),
          l.showButtons ? (o(), E("div", we)) : N("", !0)
        ]),
        _: 3
      }, 16, ["model", "rules"])
    ]));
  }
});
const xe = /* @__PURE__ */ re(ke, [["__scopeId", "data-v-0903b37c"]]), Ve = { class: "form-content" }, $e = { class: "form-item-content" }, Se = {
  key: 0,
  class: "form-buttons"
}, Ae = /* @__PURE__ */ z({
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
  setup(_, { expose: C, emit: g }) {
    const n = _, c = g, p = h(Object.assign([], n.fields)), d = h(), m = h({}), L = h({}), b = X({
      get: () => m.value,
      set: (e) => {
        const t = JSON.stringify(m.value), r = JSON.stringify(e);
        t !== r && (m.value = JSON.parse(r), c("update:modelValue", e));
      }
    });
    ue(() => n.modelValue, (e) => {
      m.value = JSON.parse(JSON.stringify(e));
    }, { immediate: !0 });
    const D = {
      input: $,
      select: K,
      date: ae,
      number: le,
      switch: pe,
      radio: de,
      checkbox: Z,
      textarea: $,
      password: $
    }, O = (e) => D[e], P = (e) => {
      switch (e.type) {
        case "checkbox":
          return {
            name: "CheckboxGroup",
            render() {
              return J(Z, {
                modelValue: b.value[e.prop],
                "onUpdate:modelValue": (t) => {
                  b.value[e.prop] = t;
                }
              }, () => {
                var t;
                return (t = e.options) == null ? void 0 : t.map(
                  (r) => J(ie, {
                    key: r.value,
                    label: r.value
                  }, () => r.label)
                );
              });
            }
          };
        default:
          return O(e.type);
      }
    }, j = (e) => {
      const t = {
        placeholder: e.placeholder,
        disabled: e.disabled,
        clearable: e.clearable
      };
      switch (e.type) {
        case "select":
          return {
            ...t,
            options: e.options,
            multiple: e.multiple
          };
        case "date":
          return {
            ...t,
            type: "date",
            valueFormat: "YYYY-MM-DD"
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
        case "password":
          return {
            ...t,
            type: "password",
            showPassword: !0
          };
        case "checkbox":
          return t;
        default:
          return t;
      }
    }, I = (e, t) => {
      const r = n.fields.find((s) => s.prop === B.value);
      r != null && r.onChange && r.onChange(t), c("change", B.value, t);
    }, G = async () => {
      if (d.value)
        try {
          await d.value.validate(), c("submit", m.value);
        } catch (e) {
          console.error("表单验证失败:", e);
        }
    }, Y = () => {
      d.value && d.value.resetFields(), c("reset");
    }, R = (e) => !e.prop || !e.label || !e.type ? (A.error("字段配置不完整"), !1) : f.value.some((t) => t.prop === e.prop) ? (A.warning(`字段 "${e.label}" 已存在`), !1) : (f.value = [...f.value, e], e.prop in m.value || (m.value[e.prop] = null), A.success(`添加字段 "${e.label}" 成功`), !0), S = (e) => {
      const t = f.value.findIndex((r) => r.prop === e);
      return t > -1 ? (f.value.splice(t, 1), delete m.value[e], !0) : !1;
    }, B = h(""), y = h({});
    n.fields.forEach((e) => {
      y.value[e.label] = e.prop;
    });
    const f = h(Object.assign([], p.value.slice(0, n.maxDisplayFields)));
    X(
      () => p.value.filter(
        (e) => !f.value.some((t) => t.prop === e.prop)
      )
    );
    const q = (e) => {
      const t = f.value.filter((r) => r.prop !== e.prop).map((r) => r.prop);
      return n.fields.filter(
        (r) => r.prop === e.prop || // 当前字段始终可选
        !t.includes(r.prop)
        // 未被使用的字段
      );
    }, l = (e, t) => {
      const r = p.value.find((U) => U.prop === e);
      if (!r)
        return;
      const s = f.value.findIndex((U) => U.prop === t.prop);
      if (s === -1)
        return;
      if (f.value.some(
        (U) => U.prop === e && U.prop !== t.prop
      )) {
        A.warning("该字段已存在"), f.value[s] = { ...t };
        return;
      }
      b.value[t.prop], delete b.value[t.prop], f.value[s] = {
        ...r,
        removable: t.removable
      };
    };
    C({
      formRef: d,
      validate: () => {
        var e;
        return (e = d.value) == null ? void 0 : e.validate();
      },
      resetFields: () => {
        var e;
        return (e = d.value) == null ? void 0 : e.resetFields();
      },
      clearValidate: (e) => {
        var t;
        return (t = d.value) == null ? void 0 : t.clearValidate(e);
      },
      addField: R,
      removeField: S
    });
    const u = () => {
      const e = p.value.find(
        (t) => !f.value.some((r) => r.prop === t.prop)
      );
      if (!e) {
        A.warning("没有更多可用的搜索条件");
        return;
      }
      f.value.push({
        ...e,
        removable: !0
      }), e.prop in m.value || (m.value[e.prop] = null);
    }, a = (e) => y.value[e];
    return (e, t) => (o(), E("div", null, [
      k(i(oe), T({
        ref_key: "formRef",
        ref: d,
        model: b.value,
        rules: L.value
      }, e.$attrs, {
        inline: "",
        class: "horizontal-form"
      }), {
        default: v(() => [
          W("div", Ve, [
            (o(!0), E(w, null, H(f.value, (r) => (o(), F(i(ne), {
              key: r.prop,
              prop: r.prop,
              rules: r.rules,
              class: "form-item"
            }, {
              default: v(() => [
                W("div", $e, [
                  k(i(K), {
                    "model-value": y.value[r.label],
                    "onUpdate:modelValue": (s) => a(r.label),
                    clearable: "",
                    class: "form-item-select",
                    onClear: (s) => S(r.prop),
                    onChange: (s) => l(s, r)
                  }, {
                    default: v(() => [
                      (o(!0), E(w, null, H(q(r), (s) => (o(), F(i(se), {
                        key: s.prop,
                        value: s.prop,
                        label: s.label,
                        disabled: s.disabled
                      }, null, 8, ["value", "label", "disabled"]))), 128))
                    ]),
                    _: 2
                  }, 1032, ["model-value", "onUpdate:modelValue", "onClear", "onChange"]),
                  (o(), F(Q(P(r)), T({
                    modelValue: b.value[r.prop],
                    "onUpdate:modelValue": (s) => b.value[r.prop] = s,
                    ref_for: !0
                  }, j(r), {
                    onChange: (s) => I(r.prop, s)
                  }), null, 16, ["modelValue", "onUpdate:modelValue", "onChange"]))
                ])
              ]),
              _: 2
            }, 1032, ["prop", "rules"]))), 128)),
            k(i(te), null, {
              default: v(() => [
                k(i(V), {
                  onClick: u,
                  type: "success"
                }, {
                  default: v(() => t[0] || (t[0] = [
                    x(" 添加条件 ")
                  ])),
                  _: 1
                }),
                e.showSubmit ? (o(), F(i(V), {
                  key: 0,
                  type: "primary",
                  onClick: G,
                  loading: e.loading
                }, {
                  default: v(() => [
                    x(M(e.submitText), 1)
                  ]),
                  _: 1
                }, 8, ["loading"])) : N("", !0),
                e.showReset ? (o(), F(i(V), {
                  key: 1,
                  onClick: Y
                }, {
                  default: v(() => [
                    x(M(e.resetText), 1)
                  ]),
                  _: 1
                })) : N("", !0),
                ee(e.$slots, "buttons", {}, void 0, !0)
              ]),
              _: 3
            })
          ]),
          e.showButtons ? (o(), E("div", Se)) : N("", !0)
        ]),
        _: 3
      }, 16, ["model", "rules"])
    ]));
  }
});
const Me = /* @__PURE__ */ re(Ae, [["__scopeId", "data-v-6dae4f61"]]);
const Te = {
  CButton: Ee,
  CInput: he,
  CTable: Ce,
  CForm: xe,
  CSearch: Me
}, Ye = {
  install(_) {
    Object.entries(Te).forEach(([C, g]) => {
      _.component(C, g);
    });
  }
};
export {
  Ee as CButton,
  xe as CForm,
  he as CInput,
  Me as CSearch,
  Ce as CTable,
  Ye as default
};
