/**
 * Created by LCQ on 2019-05-28,0028.
 */
import _VueTools from './package/check.js'

console.log(_VueTools)

const genericInstall = (Vue) => {
    Vue._VueTools = _VueTools
    Object.defineProperties(Vue.prototype, {
        _VueTools: { get() { return _VueTools } }
    })
}

const VueLuyeTools = {
    install (Vue, options) {
        if (options && options.name) {
            Vue[options.name] = _VueTools
            Object.defineProperties(Vue.prototype, {
                [options.name]: { get() { return _VueTools } }
            })
        }
        genericInstall(Vue)
        Vue.mixin({
            mounted() {
                // Just tell you that it is mounted
                // console.log('VueLodash');
            }
        })
        if (typeof window !== 'undefined' && window.Vue) {
            window.Vue.use(VueLuyeTools)
        }
    }
}

export default VueLuyeTools
