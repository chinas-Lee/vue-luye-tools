/**
 * Created by LCQ on 2019-05-28,0028.
 */
class VueTools {
    constructor (config ={}) {
        this.config = config
    }
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
}
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
// const AllModule = {
//     // 验证手机号
//     _checkPhone (val) {
//         try {
//             const reg = /^[1][3,4,5,7,8][0-9]{9}$/
//             if (typeof val !== 'number' && typeof val !== 'string') {
//                 return false
//             }
//             if (!reg.test(val)) {
//                 return false
//             }
//             return true
//         } catch (err) {
//             console.log(err)
//             return false
//         }
//     },
//     // 验证邮箱
//     _checkEmail (val) {
//         try {
//             let reg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
//             if (typeof val !== 'string') {
//                 return false
//             }
//             if (!reg.test(val)) {
//                 return false
//             }
//             return true
//         } catch (err) {
//             console.log(err)
//             return 'error'
//         }
//     }
// }

let config = {
    errorMsg: 'This method prohibits modification'
}
let vueTools = new VueTools()

const genericInstall = (Vue) => {
    Vue._VueTools = vueTools
    // Object.defineProperties(Vue.prototype, {
    //     _vueTools: {
    //         get () {
    //             return AllModule
    //         },
    //         set () {
    //             console.warn(config.errorMsg)
    //         }
    //     }
    // })
}

const _vueTools = {
    install (Vue, options) {
        if (options && options.name) {
            Vue[options.name] = vueTools
            // Object.defineProperties(Vue.prototype, {
            //     [options.name]: {
            //         get () {
            //             return AllModule
            //         },
            //         set () {
            //             console.warn(config.errorMsg)
            //         }
            //     }
            // })
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