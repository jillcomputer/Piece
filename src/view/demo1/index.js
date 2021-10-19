/*! Hello Components 组件的 v0.1.0 | js备注 */
const ass = function (exports, vue) {
    'use strict';


    var e=[],t=[];function n(n,r){if(n&&"undefined"!=typeof document){var a,s=!0===r.prepend?"prepend":"append",d=!0===r.singleTag,i="string"==typeof r.container?document.querySelector(r.container):document.getElementsByTagName("head")[0];if(d){var u=e.indexOf(i);-1===u&&(u=e.push(i)-1,t[u]={}),a=t[u]&&t[u][s]?t[u][s]:t[u][s]=c();}else a=c();65279===n.charCodeAt(0)&&(n=n.substring(1)),a.styleSheet?a.styleSheet.cssText+=n:a.appendChild(document.createTextNode(n));}function c(){var e=document.createElement("style");if(e.setAttribute("type","text/css"),r.attributes)for(var t=Object.keys(r.attributes),n=0;n<t.length;n++)e.setAttribute(t[n],r.attributes[t[n]]);var a="prepend"===s?"afterbegin":"beforeend";return i.insertAdjacentElement(a,e),e}}

    var css$1 = ".aaa {\r\n    background-color: khaki;\r\n}\r\n\r\n.bbb {\r\n    background-color: black;\r\n}\r\n";
    n(css$1,{});

    var css = ".ccc {\n  background-color: khaki;\n}\n.ccc .ddd {\n  background-color: honeydew;\n}";
    n(css,{});

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
    const _hoisted_3 = { class: "aaa" };
    const _hoisted_4 = /*#__PURE__*/vue.createVNode("span", { class: "bbb" }, "222", -1 /* HOISTED */);
    const _hoisted_5 = /*#__PURE__*/vue.createVNode("div", { class: "ccc" }, [
        /*#__PURE__*/vue.createTextVNode(" bbbbbb "),
        /*#__PURE__*/vue.createVNode("div", { class: "ddd" }, "ccccc")
    ], -1 /* HOISTED */);

    function render(_ctx, _cache, $props, $setup, $data, $options) {
        return (vue.openBlock(), vue.createBlock("div", null, [
            _hoisted_1,
            vue.createVNode("h1", null, vue.toDisplayString(_ctx.a), 1 /* TEXT */),
            vue.createVNode("h1", null, vue.toDisplayString(_ctx.b), 1 /* TEXT */),
            _hoisted_2,
            vue.createVNode("h1", _hoisted_3, [
                vue.createTextVNode(vue.toDisplayString(_ctx.name1) + " ", 1 /* TEXT */),
                _hoisted_4
            ]),
            _hoisted_5,
            vue.createCommentVNode("    <img src=\"/static/img1/img.png\" alt=\"\">")
        ]))
    }

    script.render = render;
    script.__file = "src/components/button/Button.vue";

    exports.default = script;

    Object.defineProperty(exports, '__esModule', { value: true });
};
export default ass
