/**
 * Created by LCQ on 2019-05-28,0028.
 */
const AllModule = {
    // 验证手机号
    _checkPhone (val) {
        try {
            const reg = /^[1][3,4,5,7,8][0-9]{9}$/
            if (typeof val !== 'number' && typeof val !== 'string') {
                return false
            }
            if (!reg.test(val)) {
                return false
            }
            return true
        } catch (err) {
            console.log(err)
            return false
        }
    },
    // 验证邮箱
    _checkEmail (val) {
        try {
            let reg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
            if (typeof val !== 'string') {
                return false
            }
            if (!reg.test(val)) {
                return false
            }
            return true
        } catch (err) {
            console.log(err)
            return 'error'
        }
    }
}

const genericInstall = (Vue) => {
    Vue._VueTools = AllModule
    Object.defineProperties(Vue.prototype, {
        _vueTools: { get() { return AllModule } }
    })
}

const _vueTools = {
    install (Vue, options) {
        if (options && options.name) {
            Vue[options.name] = AllModule
            Object.defineProperties(Vue.prototype, {
                [options.name]: { get() { return AllModule } }
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
            window.Vue.use(_vueTools)
        }
    }
}

exports = module.exports = _vueTools