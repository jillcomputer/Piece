import * as components from './components';
import { merge } from './utils/helpers';
import config, { setOptions, setVueInstance } from './utils/config';
import { use, registerComponentProgrammatic } from './utils/plugins';
import ConfigComponent from './utils/ConfigComponent';
var Buefy = {
    install: function (Vue, options) {
        if (options === void 0) { options = {}; }
        setVueInstance(Vue);
        // Options
        setOptions(merge(config, options, true));
        // Components
        for (var componentKey in components) {
            // @ts-ignore
            Vue.use(components[componentKey]);
        }
        // Config component
        registerComponentProgrammatic(Vue, 'config', ConfigComponent);
    }
};
use(Buefy);
export default Buefy;
// export all components as vue plugin
export * from './components';
// export programmatic component
// export { ToastProgrammatic } from './components/toast'
export { default as ConfigProgrammatic } from './utils/ConfigComponent';
// export helpers
export * from './utils/helpers';
//# sourceMappingURL=index.js.map