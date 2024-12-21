import { defineComponent as _, openBlock as l, createBlock as m, unref as D, withCtx as h, renderSlot as q, mergeProps as v, ref as g, watch as G, createVNode as J, createElementBlock as c, Fragment as f, renderList as H, resolveDynamicComponent as x, createTextVNode as B, toDisplayString as C, h as T } from "vue";
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
            (l(!0), c(f, null, H(u.columns, (e) => (l(), m(D(K), v({
              key: e.prop,
              ref_for: !0
            }, e), {
              default: h((a) => [
                e.editable ? (l(), c("div", {
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
                  }), null, 16, ["modelValue", "onUpdate:modelValue", "onChange", "onBlur"])) : (l(), c(f, { key: 1 }, [
                    e.formatter ? (l(), c(f, { key: 0 }, [
                      B(C(e.formatter(a.row[e.prop], a.row)), 1)
                    ], 64)) : (l(), c(f, { key: 1 }, [
                      B(C(a.row[e.prop]), 1)
                    ], 64))
                  ], 64))
                ], 40, ru)) : e.render ? (l(), m(x(e.render({
                  row: a.row,
                  $index: a.$index,
                  column: e,
                  editing: a.row.editing
                })), { key: 1 })) : (l(), c(f, { key: 2 }, [
                  e.formatter ? (l(), c(f, { key: 0 }, [
                    B(C(e.formatter(a.row[e.prop], a.row)), 1)
                  ], 64)) : (l(), c(f, { key: 1 }, [
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
}, lu = /* @__PURE__ */ ou(nu, [["__scopeId", "data-v-c24213c4"]]);
const iu = {
  CButton: eu,
  CInput: tu,
  CTable: lu
}, pu = {
  // install 方法会在 Vue.use() 时被调用
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
