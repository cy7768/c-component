import { defineComponent as _, openBlock as l, createBlock as m, unref as D, withCtx as h, renderSlot as q, mergeProps as v, ref as g, watch as G, createVNode as J, createElementBlock as f, Fragment as c, renderList as H, resolveDynamicComponent as x, createTextVNode as B, toDisplayString as C, h as T } from "vue";
import { ElButton as P, ElInput as y, ElConfigProvider as W, ElTable as I, ElTableColumn as K, ElSpace as Q, ElSelect as X, ElDatePicker as Z, ElInputNumber as uu } from "element-plus";
const eu = /* @__PURE__ */ _({
  name: "CButton",
  __name: "button",
  props: {
    type: { default: "default" },
    size: { default: "default" },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(E, { emit: d }) {
    const s = d;
    return (r, i) => (l(), m(D(P), {
      type: r.type,
      size: r.size,
      disabled: r.disabled,
      onClick: i[0] || (i[0] = (o) => s("click", o))
    }, {
      default: h(() => [
        q(r.$slots, "default")
      ]),
      _: 3
    }, 8, ["type", "size", "disabled"]));
  }
}), tu = /* @__PURE__ */ _({
  name: "CInput",
  __name: "input",
  props: {
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(E, { emit: d }) {
    const s = d;
    return (r, i) => (l(), m(D(y), v({
      "model-value": r.modelValue,
      "onUpdate:modelValue": i[0] || (i[0] = (o) => s("update:modelValue", o))
    }, r.$attrs), null, 16, ["model-value"]));
  }
});
var au = {
  name: "zh-cn",
  el: {
    breadcrumb: {
      label: "\u9762\u5305\u5C51"
    },
    colorpicker: {
      confirm: "\u786E\u5B9A",
      clear: "\u6E05\u7A7A",
      defaultLabel: "\u989C\u8272\u9009\u62E9\u5668",
      description: "\u5F53\u524D\u989C\u8272 {color}\uFF0C\u6309 Enter \u952E\u9009\u62E9\u65B0\u989C\u8272",
      alphaLabel: "\u9009\u62E9\u900F\u660E\u5EA6\u7684\u503C"
    },
    datepicker: {
      now: "\u6B64\u523B",
      today: "\u4ECA\u5929",
      cancel: "\u53D6\u6D88",
      clear: "\u6E05\u7A7A",
      confirm: "\u786E\u5B9A",
      dateTablePrompt: "\u4F7F\u7528\u65B9\u5411\u952E\u4E0E Enter \u952E\u53EF\u9009\u62E9\u65E5\u671F",
      monthTablePrompt: "\u4F7F\u7528\u65B9\u5411\u952E\u4E0E Enter \u952E\u53EF\u9009\u62E9\u6708\u4EFD",
      yearTablePrompt: "\u4F7F\u7528\u65B9\u5411\u952E\u4E0E Enter \u952E\u53EF\u9009\u62E9\u5E74\u4EFD",
      selectedDate: "\u5DF2\u9009\u65E5\u671F",
      selectDate: "\u9009\u62E9\u65E5\u671F",
      selectTime: "\u9009\u62E9\u65F6\u95F4",
      startDate: "\u5F00\u59CB\u65E5\u671F",
      startTime: "\u5F00\u59CB\u65F6\u95F4",
      endDate: "\u7ED3\u675F\u65E5\u671F",
      endTime: "\u7ED3\u675F\u65F6\u95F4",
      prevYear: "\u524D\u4E00\u5E74",
      nextYear: "\u540E\u4E00\u5E74",
      prevMonth: "\u4E0A\u4E2A\u6708",
      nextMonth: "\u4E0B\u4E2A\u6708",
      year: "\u5E74",
      month1: "1 \u6708",
      month2: "2 \u6708",
      month3: "3 \u6708",
      month4: "4 \u6708",
      month5: "5 \u6708",
      month6: "6 \u6708",
      month7: "7 \u6708",
      month8: "8 \u6708",
      month9: "9 \u6708",
      month10: "10 \u6708",
      month11: "11 \u6708",
      month12: "12 \u6708",
      weeks: {
        sun: "\u65E5",
        mon: "\u4E00",
        tue: "\u4E8C",
        wed: "\u4E09",
        thu: "\u56DB",
        fri: "\u4E94",
        sat: "\u516D"
      },
      weeksFull: {
        sun: "\u661F\u671F\u65E5",
        mon: "\u661F\u671F\u4E00",
        tue: "\u661F\u671F\u4E8C",
        wed: "\u661F\u671F\u4E09",
        thu: "\u661F\u671F\u56DB",
        fri: "\u661F\u671F\u4E94",
        sat: "\u661F\u671F\u516D"
      },
      months: {
        jan: "\u4E00\u6708",
        feb: "\u4E8C\u6708",
        mar: "\u4E09\u6708",
        apr: "\u56DB\u6708",
        may: "\u4E94\u6708",
        jun: "\u516D\u6708",
        jul: "\u4E03\u6708",
        aug: "\u516B\u6708",
        sep: "\u4E5D\u6708",
        oct: "\u5341\u6708",
        nov: "\u5341\u4E00\u6708",
        dec: "\u5341\u4E8C\u6708"
      }
    },
    inputNumber: {
      decrease: "\u51CF\u5C11\u6570\u503C",
      increase: "\u589E\u52A0\u6570\u503C"
    },
    select: {
      loading: "\u52A0\u8F7D\u4E2D",
      noMatch: "\u65E0\u5339\u914D\u6570\u636E",
      noData: "\u65E0\u6570\u636E",
      placeholder: "\u8BF7\u9009\u62E9"
    },
    dropdown: {
      toggleDropdown: "\u5207\u6362\u4E0B\u62C9\u9009\u9879"
    },
    mention: {
      loading: "\u52A0\u8F7D\u4E2D"
    },
    cascader: {
      noMatch: "\u65E0\u5339\u914D\u6570\u636E",
      loading: "\u52A0\u8F7D\u4E2D",
      placeholder: "\u8BF7\u9009\u62E9",
      noData: "\u6682\u65E0\u6570\u636E"
    },
    pagination: {
      goto: "\u524D\u5F80",
      pagesize: "\u6761/\u9875",
      total: "\u5171 {total} \u6761",
      pageClassifier: "\u9875",
      page: "\u9875",
      prev: "\u4E0A\u4E00\u9875",
      next: "\u4E0B\u4E00\u9875",
      currentPage: "\u7B2C {pager} \u9875",
      prevPages: "\u5411\u524D {pager} \u9875",
      nextPages: "\u5411\u540E {pager} \u9875",
      deprecationWarning: "\u4F60\u4F7F\u7528\u4E86\u4E00\u4E9B\u5DF2\u88AB\u5E9F\u5F03\u7684\u7528\u6CD5\uFF0C\u8BF7\u53C2\u8003 el-pagination \u7684\u5B98\u65B9\u6587\u6863"
    },
    dialog: {
      close: "\u5173\u95ED\u6B64\u5BF9\u8BDD\u6846"
    },
    drawer: {
      close: "\u5173\u95ED\u6B64\u5BF9\u8BDD\u6846"
    },
    messagebox: {
      title: "\u63D0\u793A",
      confirm: "\u786E\u5B9A",
      cancel: "\u53D6\u6D88",
      error: "\u8F93\u5165\u7684\u6570\u636E\u4E0D\u5408\u6CD5!",
      close: "\u5173\u95ED\u6B64\u5BF9\u8BDD\u6846"
    },
    upload: {
      deleteTip: "\u6309 delete \u952E\u53EF\u5220\u9664",
      delete: "\u5220\u9664",
      preview: "\u67E5\u770B\u56FE\u7247",
      continue: "\u7EE7\u7EED\u4E0A\u4F20"
    },
    slider: {
      defaultLabel: "\u6ED1\u5757\u4ECB\u4E8E {min} \u81F3 {max}",
      defaultRangeStartLabel: "\u9009\u62E9\u8D77\u59CB\u503C",
      defaultRangeEndLabel: "\u9009\u62E9\u7ED3\u675F\u503C"
    },
    table: {
      emptyText: "\u6682\u65E0\u6570\u636E",
      confirmFilter: "\u7B5B\u9009",
      resetFilter: "\u91CD\u7F6E",
      clearFilter: "\u5168\u90E8",
      sumText: "\u5408\u8BA1"
    },
    tour: {
      next: "\u4E0B\u4E00\u6B65",
      previous: "\u4E0A\u4E00\u6B65",
      finish: "\u7ED3\u675F\u5BFC\u89C8"
    },
    tree: {
      emptyText: "\u6682\u65E0\u6570\u636E"
    },
    transfer: {
      noMatch: "\u65E0\u5339\u914D\u6570\u636E",
      noData: "\u65E0\u6570\u636E",
      titles: ["\u5217\u8868 1", "\u5217\u8868 2"],
      filterPlaceholder: "\u8BF7\u8F93\u5165\u641C\u7D22\u5185\u5BB9",
      noCheckedFormat: "\u5171 {total} \u9879",
      hasCheckedFormat: "\u5DF2\u9009 {checked}/{total} \u9879"
    },
    image: {
      error: "\u52A0\u8F7D\u5931\u8D25"
    },
    pageHeader: {
      title: "\u8FD4\u56DE"
    },
    popconfirm: {
      confirmButtonText: "\u786E\u5B9A",
      cancelButtonText: "\u53D6\u6D88"
    },
    carousel: {
      leftArrow: "\u4E0A\u4E00\u5F20\u5E7B\u706F\u7247",
      rightArrow: "\u4E0B\u4E00\u5F20\u5E7B\u706F\u7247",
      indicator: "\u5E7B\u706F\u7247\u5207\u6362\u81F3\u7D22\u5F15 {index}"
    }
  }
};
const ru = ["onClick", "onDblclick"], nu = /* @__PURE__ */ _({
  __name: "table",
  props: {
    data: {},
    columns: { default: () => [] },
    editMode: { default: void 0 },
    trigger: { default: void 0 }
  },
  emits: ["update:data", "save", "field-change"],
  setup(E, { expose: d, emit: s }) {
    const r = E, i = s, o = g([]), k = g([]), S = {
      input: y,
      select: X,
      date: Z,
      number: uu,
      textarea: y
    }, V = (u) => S[u || "input"], Y = (u) => {
      const t = {
        size: "small",
        placeholder: u.placeholder
      };
      switch (u.type) {
        case "select":
          return {
            ...t,
            options: u.options
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
            min: u.min,
            max: u.max,
            step: u.step
          };
        case "textarea":
          return {
            ...t,
            type: "textarea",
            rows: u.rows || 2
          };
        default:
          return t;
      }
    };
    G(() => r.data, (u) => {
      o.value = u.map((t) => ({
        ...t,
        editing: t.editing || !1
      })), k.value.length || (k.value = JSON.parse(JSON.stringify(u)));
    }, { immediate: !0 });
    const p = g([]), b = (u, t) => p.value.some(
      (e) => e.rowIndex === u && e.prop === t
    ), w = (u, t) => {
      b(u, t) || (r.editMode === "cell" ? p.value = [{ rowIndex: u, prop: t }] : r.editMode === "row" && (o.value[u].editing = !o.value[u].editing, p.value.push({ rowIndex: u, prop: t })));
    }, z = (u, t) => {
      p.value = p.value.filter(
        (e) => !(e.rowIndex === u && e.prop === t)
      );
    }, L = (u, t) => {
      if (!u.editable)
        return !1;
      const e = u.editMode || r.editMode;
      if (e === "row")
        return o.value[t].editing;
      if (e === "cell")
        return b(t, u.prop);
    }, N = (u, t) => {
      r.editMode !== "cell" && r.editMode === "row" && (o.value.forEach((a, n) => {
        a.editing && n !== u && A(n);
      }), t.editing = !0, r.columns.filter((a) => a.editable).forEach((a) => {
        w(u, a.prop);
      }));
    }, A = (u) => {
      const t = o.value[u];
      t.editing = !1, p.value = p.value.filter((e) => e.rowIndex !== u), i("save", u, t), i("update:data", o.value.map(({ editing: e, ...a }) => a));
    }, j = (u, t) => {
      b(u, t) && (r.editMode === "cell" && z(u, t), p.value.some((a) => a.rowIndex === u) || setTimeout(() => {
        o.value[u].editing && A(u);
      }, 200));
    }, $ = g(/* @__PURE__ */ new Map()), O = (u, t, e) => {
      e && $.value.set(`${u}-${t}`, e);
    }, M = (u, t, e, a) => {
      (e.trigger || r.trigger) === a && (w(u, t), setTimeout(() => {
        const F = $.value.get(`${u}-${t}`);
        F && (F.focus ? F.focus() : F.$el && F.$el.querySelector("input") && F.$el.querySelector("input").focus());
      }));
    }, R = (u, t, e) => {
      const a = r.columns.find((n) => n.prop === t);
      a != null && a.onChange && a.onChange(e, o.value[u]), i("field-change", u, t, e);
    }, U = (u, t, e) => u.show === !1 ? null : T(P, {
      type: u.type || "default",
      link: !0,
      onClick: () => u.handler(t, e)
    }, () => u.text);
    return d({
      handleEdit: N,
      renderButtonGroup: (u, t, e) => {
        const a = u.buttons.filter((n) => n.show !== !1).map((n) => U(n, t, e)).filter(Boolean);
        return u.space !== !1 ? T(Q, {}, () => a) : a;
      }
    }), (u, t) => (l(), m(D(W), { locale: D(au) }, {
      default: h(() => [
        J(D(I), v({ data: o.value }, u.$attrs), {
          default: h(() => [
            (l(!0), f(c, null, H(u.columns, (e) => (l(), m(D(K), v({
              key: e.prop,
              ref_for: !0
            }, e), {
              default: h((a) => [
                e.editable ? (l(), f("div", {
                  key: 0,
                  onClick: (n) => M(a.$index, e.prop, e, "click"),
                  onDblclick: (n) => M(a.$index, e.prop, e, "dblclick")
                }, [
                  L(e, a.$index) ? (l(), m(x(V(e.type)), v({
                    key: 0,
                    modelValue: a.row[e.prop],
                    "onUpdate:modelValue": (n) => a.row[e.prop] = n,
                    ref_for: !0
                  }, Y(e), {
                    ref_for: !0,
                    ref: (n) => O(a.$index, e.prop, n),
                    onChange: (n) => R(a.$index, e.prop, n),
                    onBlur: (n) => j(a.$index, e.prop)
                  }), null, 16, ["modelValue", "onUpdate:modelValue", "onChange", "onBlur"])) : (l(), f(c, { key: 1 }, [
                    e.formatter ? (l(), f(c, { key: 0 }, [
                      B(C(e.formatter(a.row[e.prop], a.row)), 1)
                    ], 64)) : (l(), f(c, { key: 1 }, [
                      B(C(a.row[e.prop]), 1)
                    ], 64))
                  ], 64))
                ], 40, ru)) : e.render ? (l(), m(x(e.render({
                  row: a.row,
                  $index: a.$index,
                  column: e,
                  editing: a.row.editing
                })), { key: 1 })) : (l(), f(c, { key: 2 }, [
                  e.formatter ? (l(), f(c, { key: 0 }, [
                    B(C(e.formatter(a.row[e.prop], a.row)), 1)
                  ], 64)) : (l(), f(c, { key: 1 }, [
                    B(C(a.row[e.prop]), 1)
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
const ou = (E, d) => {
  const s = E.__vccOpts || E;
  for (const [r, i] of d)
    s[r] = i;
  return s;
}, lu = /* @__PURE__ */ ou(nu, [["__scopeId", "data-v-8ebfafb1"]]);
const iu = {
  CButton: eu,
  CInput: tu,
  CTable: lu
}, pu = {
  install(E) {
    Object.entries(iu).forEach(([d, s]) => {
      E.component(d, s);
    });
  }
};
export {
  eu as CButton,
  tu as CInput,
  lu as CTable,
  pu as default
};
