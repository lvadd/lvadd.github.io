/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "";
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ entry_lib; }
});

;// CONCATENATED MODULE: ./node_modules/.pnpm/@vue+cli-service@5.0.8_@swc+core@1.5.5_@vue+compiler-sfc@3.4.27_ejs@3.1.10_esbuild@0.18.20_ha_ozuyomebonag3msa4q42p7zdmy/node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
/* eslint-disable no-var */
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

;// CONCATENATED MODULE: ./node_modules/.pnpm/thread-loader@3.0.4_webpack@5.91.0_@swc+core@1.5.5_esbuild@0.18.20_/node_modules/thread-loader/dist/cjs.js!./node_modules/.pnpm/babel-loader@8.3.0_@babel+core@7.24.5_webpack@5.91.0_@swc+core@1.5.5_esbuild@0.18.20_/node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/.pnpm/vue-loader@15.11.1_@vue+compiler-sfc@3.4.27_css-loader@6.11.0_webpack@5.91.0_@swc+core@1.5.5__nrt3uhx46zwd4ekrw24duggfl4/node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/.pnpm/vue-loader@15.11.1_@vue+compiler-sfc@3.4.27_css-loader@6.11.0_webpack@5.91.0_@swc+core@1.5.5__nrt3uhx46zwd4ekrw24duggfl4/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/stories/Button.vue?vue&type=template&id=25d29dae
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('button', {
    class: _vm.classes,
    style: _vm.style,
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.onClick
    }
  }, [_vm._v(_vm._s(_vm.label))]);
};
var staticRenderFns = [];

;// CONCATENATED MODULE: ./node_modules/.pnpm/thread-loader@3.0.4_webpack@5.91.0_@swc+core@1.5.5_esbuild@0.18.20_/node_modules/thread-loader/dist/cjs.js!./node_modules/.pnpm/babel-loader@8.3.0_@babel+core@7.24.5_webpack@5.91.0_@swc+core@1.5.5_esbuild@0.18.20_/node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/.pnpm/vue-loader@15.11.1_@vue+compiler-sfc@3.4.27_css-loader@6.11.0_webpack@5.91.0_@swc+core@1.5.5__nrt3uhx46zwd4ekrw24duggfl4/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/stories/Button.vue?vue&type=script&lang=js

/* harmony default export */ var Buttonvue_type_script_lang_js = ({
  name: 'lv-button',
  props: {
    label: {
      type: String,
      required: true
    },
    primary: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'medium',
      validator: function (value) {
        return ['small', 'medium', 'large'].indexOf(value) !== -1;
      }
    },
    backgroundColor: {
      type: String
    }
  },
  computed: {
    classes() {
      return {
        'storybook-button': true,
        'storybook-button--primary': this.primary,
        'storybook-button--secondary': !this.primary,
        [`storybook-button--${this.size}`]: true
      };
    },
    style() {
      return {
        backgroundColor: this.backgroundColor
      };
    }
  },
  methods: {
    onClick() {
      this.$emit('onClick');
    }
  }
});
;// CONCATENATED MODULE: ./src/stories/Button.vue?vue&type=script&lang=js
 /* harmony default export */ var stories_Buttonvue_type_script_lang_js = (Buttonvue_type_script_lang_js); 
;// CONCATENATED MODULE: ./node_modules/.pnpm/vue-loader@15.11.1_@vue+compiler-sfc@3.4.27_css-loader@6.11.0_webpack@5.91.0_@swc+core@1.5.5__nrt3uhx46zwd4ekrw24duggfl4/node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

;// CONCATENATED MODULE: ./src/stories/Button.vue





/* normalize component */
;
var component = normalizeComponent(
  stories_Buttonvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Button = (component.exports);
;// CONCATENATED MODULE: ./node_modules/.pnpm/thread-loader@3.0.4_webpack@5.91.0_@swc+core@1.5.5_esbuild@0.18.20_/node_modules/thread-loader/dist/cjs.js!./node_modules/.pnpm/babel-loader@8.3.0_@babel+core@7.24.5_webpack@5.91.0_@swc+core@1.5.5_esbuild@0.18.20_/node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/.pnpm/vue-loader@15.11.1_@vue+compiler-sfc@3.4.27_css-loader@6.11.0_webpack@5.91.0_@swc+core@1.5.5__nrt3uhx46zwd4ekrw24duggfl4/node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/.pnpm/vue-loader@15.11.1_@vue+compiler-sfc@3.4.27_css-loader@6.11.0_webpack@5.91.0_@swc+core@1.5.5__nrt3uhx46zwd4ekrw24duggfl4/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/stories/Header.vue?vue&type=template&id=7cbf1fc0
var Headervue_type_template_id_7cbf1fc0_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('header', [_c('div', {
    staticClass: "storybook-header"
  }, [_c('div', [_c('svg', {
    attrs: {
      "width": "32",
      "height": "32",
      "viewBox": "0 0 32 32",
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, [_c('g', {
    attrs: {
      "fill": "none",
      "fill-rule": "evenodd"
    }
  }, [_c('path', {
    attrs: {
      "d": "M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z",
      "fill": "#FFF"
    }
  }), _c('path', {
    attrs: {
      "d": "M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z",
      "fill": "#555AB9"
    }
  }), _c('path', {
    attrs: {
      "d": "M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z",
      "fill": "#91BAF8"
    }
  })])]), _c('h1', [_vm._v("Acme")])]), _c('div', [_vm.user ? _c('span', {
    staticClass: "welcome"
  }, [_vm._v("Welcome, "), _c('b', [_vm._v(_vm._s(_vm.user.name))]), _vm._v("!")]) : _vm._e(), _vm.user ? _c('lv-button', {
    attrs: {
      "size": "small",
      "label": "Log out"
    },
    on: {
      "onClick": _vm.onLogout
    }
  }) : _vm._e(), !_vm.user ? _c('lv-button', {
    attrs: {
      "size": "small",
      "label": "Log in"
    },
    on: {
      "onClick": _vm.onLogin
    }
  }) : _vm._e(), !_vm.user ? _c('lv-button', {
    attrs: {
      "primary": "",
      "size": "small",
      "label": "Sign up"
    },
    on: {
      "onClick": _vm.onCreateAccount
    }
  }) : _vm._e()], 1)])]);
};
var Headervue_type_template_id_7cbf1fc0_staticRenderFns = [];

;// CONCATENATED MODULE: ./node_modules/.pnpm/thread-loader@3.0.4_webpack@5.91.0_@swc+core@1.5.5_esbuild@0.18.20_/node_modules/thread-loader/dist/cjs.js!./node_modules/.pnpm/babel-loader@8.3.0_@babel+core@7.24.5_webpack@5.91.0_@swc+core@1.5.5_esbuild@0.18.20_/node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/.pnpm/vue-loader@15.11.1_@vue+compiler-sfc@3.4.27_css-loader@6.11.0_webpack@5.91.0_@swc+core@1.5.5__nrt3uhx46zwd4ekrw24duggfl4/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/stories/Header.vue?vue&type=script&lang=js


/* harmony default export */ var Headervue_type_script_lang_js = ({
  name: 'lv-header',
  components: {
    LvButton: Button
  },
  props: {
    user: {
      type: Object
    }
  },
  methods: {
    onLogin() {
      this.$emit('onLogin');
    },
    onLogout() {
      this.$emit('onLogout');
    },
    onCreateAccount() {
      this.$emit('onCreateAccount');
    }
  }
});
;// CONCATENATED MODULE: ./src/stories/Header.vue?vue&type=script&lang=js
 /* harmony default export */ var stories_Headervue_type_script_lang_js = (Headervue_type_script_lang_js); 
;// CONCATENATED MODULE: ./src/stories/Header.vue





/* normalize component */
;
var Header_component = normalizeComponent(
  stories_Headervue_type_script_lang_js,
  Headervue_type_template_id_7cbf1fc0_render,
  Headervue_type_template_id_7cbf1fc0_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Header = (Header_component.exports);
;// CONCATENATED MODULE: ./node_modules/.pnpm/thread-loader@3.0.4_webpack@5.91.0_@swc+core@1.5.5_esbuild@0.18.20_/node_modules/thread-loader/dist/cjs.js!./node_modules/.pnpm/babel-loader@8.3.0_@babel+core@7.24.5_webpack@5.91.0_@swc+core@1.5.5_esbuild@0.18.20_/node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/.pnpm/vue-loader@15.11.1_@vue+compiler-sfc@3.4.27_css-loader@6.11.0_webpack@5.91.0_@swc+core@1.5.5__nrt3uhx46zwd4ekrw24duggfl4/node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/.pnpm/vue-loader@15.11.1_@vue+compiler-sfc@3.4.27_css-loader@6.11.0_webpack@5.91.0_@swc+core@1.5.5__nrt3uhx46zwd4ekrw24duggfl4/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/stories/Page.vue?vue&type=template&id=29f83298
var Pagevue_type_template_id_29f83298_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('article', [_c('lv-header', {
    attrs: {
      "user": _vm.user
    },
    on: {
      "onLogin": _vm.onLogin,
      "onLogout": _vm.onLogout,
      "onCreateAccount": _vm.onCreateAccount
    }
  }), _c('section', {
    staticClass: "storybook-page"
  }, [_c('h2', [_vm._v("Pages in Storybook")]), _vm._m(0), _c('p', [_vm._v(" Render pages with mock data. This makes it easy to build and review page states without needing to navigate to them in your app. Here are some handy patterns for managing page data in Storybook: ")]), _vm._m(1), _vm._m(2), _c('div', {
    staticClass: "tip-wrapper"
  }, [_c('span', {
    staticClass: "tip"
  }, [_vm._v("Tip")]), _vm._v(" Adjust the width of the canvas with the "), _c('svg', {
    attrs: {
      "width": "10",
      "height": "10",
      "viewBox": "0 0 12 12",
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, [_c('g', {
    attrs: {
      "fill": "none",
      "fill-rule": "evenodd"
    }
  }, [_c('path', {
    attrs: {
      "d": "M1.5 5.2h4.8c.3 0 .5.2.5.4v5.1c-.1.2-.3.3-.4.3H1.4a.5.5 0 01-.5-.4V5.7c0-.3.2-.5.5-.5zm0-2.1h6.9c.3 0 .5.2.5.4v7a.5.5 0 01-1 0V4H1.5a.5.5 0 010-1zm0-2.1h9c.3 0 .5.2.5.4v9.1a.5.5 0 01-1 0V2H1.5a.5.5 0 010-1zm4.3 5.2H2V10h3.8V6.2z",
      "id": "a",
      "fill": "#999"
    }
  })])]), _vm._v(" Viewports addon in the toolbar ")])])], 1);
};
var Pagevue_type_template_id_29f83298_staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('p', [_vm._v(" We recommend building UIs with a "), _c('a', {
    attrs: {
      "href": "https://componentdriven.org",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_c('strong', [_vm._v("component-driven")])]), _vm._v(" process starting with atomic components and ending with pages. ")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('ul', [_c('li', [_vm._v(" Use a higher-level connected component. Storybook helps you compose such data from the \"args\" of child component stories ")]), _c('li', [_vm._v(" Assemble data in the page component from your services. You can mock these services out using Storybook. ")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('p', [_vm._v(" Get a guided tutorial on component-driven development at "), _c('a', {
    attrs: {
      "href": "https://storybook.js.org/tutorials/",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_vm._v("Storybook tutorials")]), _vm._v(" . Read more in the "), _c('a', {
    attrs: {
      "href": "https://storybook.js.org/docs",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_vm._v("docs")]), _vm._v(" . ")]);
}];

;// CONCATENATED MODULE: ./src/stories/Page.vue?vue&type=template&id=29f83298

;// CONCATENATED MODULE: ./node_modules/.pnpm/thread-loader@3.0.4_webpack@5.91.0_@swc+core@1.5.5_esbuild@0.18.20_/node_modules/thread-loader/dist/cjs.js!./node_modules/.pnpm/babel-loader@8.3.0_@babel+core@7.24.5_webpack@5.91.0_@swc+core@1.5.5_esbuild@0.18.20_/node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/.pnpm/vue-loader@15.11.1_@vue+compiler-sfc@3.4.27_css-loader@6.11.0_webpack@5.91.0_@swc+core@1.5.5__nrt3uhx46zwd4ekrw24duggfl4/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/stories/Page.vue?vue&type=script&lang=js


/* harmony default export */ var Pagevue_type_script_lang_js = ({
  name: 'Lv-page',
  components: {
    LvHeader: Header
  },
  data() {
    return {
      user: null
    };
  },
  methods: {
    onLogin() {
      this.user = {
        name: 'Jane Doe'
      };
    },
    onLogout() {
      this.user = null;
    },
    onCreateAccount() {
      this.user = {
        name: 'Jane Doe'
      };
    }
  }
});
;// CONCATENATED MODULE: ./src/stories/Page.vue?vue&type=script&lang=js
 /* harmony default export */ var stories_Pagevue_type_script_lang_js = (Pagevue_type_script_lang_js); 
;// CONCATENATED MODULE: ./src/stories/Page.vue





/* normalize component */
;
var Page_component = normalizeComponent(
  stories_Pagevue_type_script_lang_js,
  Pagevue_type_template_id_29f83298_render,
  Pagevue_type_template_id_29f83298_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Page = (Page_component.exports);
;// CONCATENATED MODULE: ./src/package.js
// 引入封装好的组件



const components = [Button, Header, Page]; // 将来如果有其它组件,都可以写到这个数组里

// 批量组件注册
// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install = function (Vue) {
  // 判断是否安装
  if (install.installed) return;
  // 遍历注册全局组件
  components.map(component => Vue.component(component.name, component));
};

// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}
/* harmony default export */ var src_package = ({
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  install,
  // 以下是具体的组件列表
  ...components
});
;// CONCATENATED MODULE: ./node_modules/.pnpm/@vue+cli-service@5.0.8_@swc+core@1.5.5_@vue+compiler-sfc@3.4.27_ejs@3.1.10_esbuild@0.18.20_ha_ozuyomebonag3msa4q42p7zdmy/node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = (src_package);


module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=lvview-ui.common.js.map