/*! Hello Components 组件的 v0.1.0 | js备注 */
define(['exports', 'vue'], function (exports, vue) { 'use strict';

    var script = vue.defineComponent({
        name: 'BButton',
        setup: function () {
            var a = 1;
            // let a = 1;
            // let b:string='wo shi 1'
            var b = 'wo shi 1';
            return {
                name1: '333',
                a: a,
                b: b
            };
        }
    });

    const _hoisted_1 = /*#__PURE__*/vue.createTextVNode(" 122332 ");
    const _hoisted_2 = /*#__PURE__*/vue.createTextVNode(" sssss ");

    function render(_ctx, _cache, $props, $setup, $data, $options) {
        return (vue.openBlock(), vue.createBlock("div", null, [
            _hoisted_1,
            vue.createVNode("h1", null, vue.toDisplayString(_ctx.a), 1 /* TEXT */),
            vue.createVNode("h1", null, vue.toDisplayString(_ctx.b), 1 /* TEXT */),
            _hoisted_2,
            vue.createVNode("h1", null, vue.toDisplayString(_ctx.name1), 1 /* TEXT */),
            vue.createCommentVNode("    <img src=\"/static/img1/img.png\" alt=\"\">")
        ]))
    }

    script.render = render;
    script.__file = "src/components/button/Button.vue";

    exports.default = script;

    Object.defineProperty(exports, '__esModule', { value: true });

});
