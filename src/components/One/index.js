import One from './One.vue'

import { use, registerComponent } from '../../utils/plugins'

const Plugin = {
    install(Vue) {
        registerComponent(Vue, One)
    }
}

use(Plugin)

export default Plugin

export {
     // as B
}
