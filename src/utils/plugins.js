export const use = (plugin) => {
    // @ts-ignore
    if (typeof window !== 'undefined' && window.Vue) {
        // @ts-ignore
        window.Vue.use(plugin)
    }
}

export const registerComponent = (Vue, component) => {
    Vue.component(component.name, component)
}

export const registerComponentProgrammatic = (Vue, property, component) => {
    if (!Vue.prototype.$buefy) Vue.prototype.$buefy = {}
    Vue.prototype.$buefy[property] = component
}
