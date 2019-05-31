/**
 * Created by LCQ on 2019-05-28,0028.
 */
const Tools = {
    // 版本
    VERSION: '1.0.0',
    /*
     * 验证函数
     * return Boolean
     * */
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
    },
    // 判断是否为空对象
    _isNullObj (obj) {
        try {
            for (let item in obj) {
                return false
            }
            return true
        } catch (err) {
            console.log(err)
            return false
        }
    },
    // 判断是否为空 ''/null/undefined
    _isNull (val) {
        try {
            if (val === '' || val === null || val === undefined) {
                return true
            }
            return false
        } catch (err) {
            console.log(err)
            return false
        }
    },
    // 验证输入值是否全由数字组成
    _checkAllNumber (value) {
        try {
            let res = /^[0-9]{1,20}$/
            if (res.exec(+value)) {
                return true
            }
            return false
        } catch (err) {
            console.log(err)
            return false
        }
    },

    /*
     * 日期时间函数
     * return String
     * */
    // 获取当前日期时间字符串
    _getDate (tag = 'datetime') {
        try {
            let flag = tag
            let currentDate = new Date()
            let res = ''
            switch (flag) {
                case 'time':
                    res = (currentDate.getHours().toString().length === 2 ? currentDate.getHours() : '0' + currentDate.getHours()) + ':' + (currentDate.getMinutes().toString().length === 2 ? currentDate.getMinutes() : '0' + currentDate.getMinutes()) + ':' + (currentDate.getSeconds().toString().length === 2 ? currentDate.getSeconds() : '0' + currentDate.getSeconds())
                    break
                case 'date':
                    res = currentDate.getFullYear() + '-' + ((currentDate.getMonth() + 1).toString().length === 2 ? (currentDate.getMonth() + 1) : '0' + (currentDate.getMonth() + 1)) + '-' + (currentDate.getDate().toString().length === 2 ? currentDate.getDate() : '0' + currentDate.getDate())
                    break
                default:
                    res = currentDate.getFullYear() + '-' + ((currentDate.getMonth() + 1).toString().length === 2 ? (currentDate.getMonth() + 1) : '0' + (currentDate.getMonth() + 1)) + '-' + (currentDate.getDate().toString().length === 2 ? currentDate.getDate() : '0' + currentDate.getDate()) + ' ' + (currentDate.getHours().toString().length === 2 ? currentDate.getHours() : '0' + currentDate.getHours()) + ':' + (currentDate.getMinutes().toString().length === 2 ? currentDate.getMinutes() : '0' + currentDate.getMinutes()) + ':' + (currentDate.getSeconds().toString().length === 2 ? currentDate.getSeconds() : '0' + currentDate.getSeconds())
            }
            return res || false
        } catch (err) {
            console.log(err)
            return false
        }
    },
    // 获取当前时间戳
    _getTimeStamp () {
        try {
            return +new Date() || false
        } catch (err) {
            console.log(err)
            return false
        }
    },
    // 将时间戳转化为日期时间格式
    _timeStampToDateTime (value, tag = 'dateTime') {
        try {
            if (!value) {
                return false
            }
            let tagVal = tag
            let timeStamp = new Date(parseInt(value))
            let year = timeStamp.getFullYear()
            let month = ((timeStamp.getMonth() + 1).toString().length === 2 ? (timeStamp.getMonth() + 1) : '0' + (timeStamp.getMonth() + 1))
            let day = (timeStamp.getDate().toString().length === 2 ? timeStamp.getDate() : '0' + timeStamp.getDate())
            let hours = (timeStamp.getHours().toString().length === 2 ? timeStamp.getHours() : '0' + timeStamp.getHours())
            let minutes = (timeStamp.getMinutes().toString().length === 2 ? timeStamp.getMinutes() : '0' + timeStamp.getMinutes())
            let seconds = (timeStamp.getSeconds().toString().length === 2 ? timeStamp.getSeconds() : '0' + timeStamp.getSeconds())
            let res
            switch (tagVal) {
                case 'date':
                    res = year + '-' + month + '-' + day
                    break
                case 'time':
                    res = hours + ':' + minutes + ':' + seconds
                    break
                default:
                    res = year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds
            }
            return res || false
        } catch (err) {
            console.log(err)
            return false
        }
    },
    // 将日期时间格式转化为时间戳
    _dateTimeToTimeStamp (value) {
        try {
            if (!value) {
                return false
            }
            let dateTime = new Date(value)
            let res = Date.parse(dateTime)
            return res || false
        } catch (err) {
            console.log(err)
            return false
        }
    },
    // 将2016-01-02T16:00:00.000Z时间格式转化为时间日期格式
    _UTCTimeToDateTime (val, flag = 'time') {
        try {
            if (!val) {
                return false
            }
            if (val.indexOf('T') !== -1 && val.indexOf('Z') !== -1) {
                val = val.replace(/T/, ' ')
                val = flag === 'date' ? val.substring(0, 10) : val.substring(0, 19)
            }
            return val || ''
        } catch (err) {
            console.log(err)
            return false
        }
    },
    // 将new Date时间转化为时间格式
    _dateToDate (value, tag = 'dateTime') {
        try {
            if (!value) {
                return false
            }
            let tagVal = tag
            let timeStamp = value
            let year = timeStamp.getFullYear()
            let month = ((timeStamp.getMonth() + 1).toString().length === 2 ? (timeStamp.getMonth() + 1) : '0' + (timeStamp.getMonth() + 1))
            let day = (timeStamp.getDate().toString().length === 2 ? timeStamp.getDate() : '0' + timeStamp.getDate())
            let hours = (timeStamp.getHours().toString().length === 2 ? timeStamp.getHours() : '0' + timeStamp.getHours())
            let minutes = (timeStamp.getMinutes().toString().length === 2 ? timeStamp.getMinutes() : '0' + timeStamp.getMinutes())
            let seconds = (timeStamp.getSeconds().toString().length === 2 ? timeStamp.getSeconds() : '0' + timeStamp.getSeconds())
            let res
            switch (tagVal) {
                case 'date':
                    res = year + '-' + month + '-' + day
                    break
                case 'time':
                    res = hours + ':' + minutes + ':' + seconds
                    break
                default:
                    res = year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds
            }
            return res || false
        } catch (err) {
            console.log(err)
            return false
        }
    },
    // 格式化生日
    _formatBirth (val, length = 8) {
        let resData = {
            value: val.target.value,
            rawValue: val.target.rawValue
        }
        try {
            let year = new Date().getFullYear()
            let rawValue = val.target.rawValue
            let eventYear = rawValue.length === length ? +rawValue.substring(4) : 0
            let eventDay = rawValue.length > 1 ? rawValue.substring(0, 2) : ''
            let eventMonth = rawValue.length > 3 ? rawValue.substring(2, 4) : ''
            if (eventYear > year) {
                resData = {
                    value: eventDay + '/' + eventMonth,
                    rawValue: eventDay + eventMonth
                }
            }
            return resData
        } catch (e) {
            console.log(e)
            return resData
        }
    },
    // 获取年龄
    _getBirthAge (eventYear) {
        let resData = {
            age: '-'
        }
        if (eventYear.length !== 4) {
            return resData
        }
        let birthYear = +eventYear
        let year = new Date().getFullYear()
        let age = year - birthYear + 1
        age > 0 ? resData.age = age : resData.age = '-'
        return resData
    },

    /*
     * 对象、数组函数
     * return any
     * */
    // 获取数据类型
    _getDataType (item) {
        try {
            let res
            switch (Object.prototype.toString.call(item)) {
                case '[object Array]':
                    res = 'Array'
                    break
                case '[object Object]':
                    res = 'Object'
                    break
                case '[object String]':
                    res = 'String'
                    break
                case '[object Number]':
                    res = 'Number'
                    break
                case '[object Boolean]':
                    res = 'Boolean'
                    break
                case '[object Undefined]':
                    res = 'Undefined'
                    break
                case '[object Null]':
                    res = 'Null'
                    break
                default:
                    res = false
            }
            return res || false
        } catch (err) {
            console.log(err)
            return false
        }
    },
    // 一维数组去重
    _uniqueArray (arr) {
        try {
            // Array.from兼容写法
            if (Array.from) {
                return Array.from(new Set(arr))
            } else {
                let arrVal = arr
                let res = []
                let obj = {}
                // Array.prototype.indexOf兼容写法
                if (Array.prototype.indexOf) {
                    for (let i = 0, len = arrVal.length; i < len; i++) {
                        if (res.indexOf(arrVal[i]) === -1) {
                            res.push(arrVal[i])
                        }
                    }
                } else {
                    for (let i = 0, len = arrVal.length; i < len; i++) {
                        if (!obj[arrVal[i]]) {
                            res.push(arrVal[i])
                            obj[arrVal[i]] = true
                        }
                    }
                }
                return res || false
            }
        } catch (err) {
            console.log(err)
            return false
        }
    },
    // 数组以对象中某个属性去重
    _uniqueArrayAttributes (arr, attrName) {
        try {
            if (_getDataType(arr) !== 'Array' || !attrName) {
                return false
            }
            let tagObj = {}
            let resData = []
            arr.forEach(item => {
                if (!tagObj[item[attrName]]) {
                    resData.push(item)
                    tagObj[item[attrName]] = true
                }
            })
            return resData
        } catch (error) {
            console.log(error)
            return false
        }
    },
    // 数组排序函数
    _sortArr (valueOne, valueTwo) {
        if (valueOne < valueTwo) {
            return -1
        } else if (valueOne > valueTwo) {
            return 1
        } else {
            return 0
        }
    },
    // 数组排序
    _sortArray (arrVal) {
        try {
            if (_getDataType(arrVal) !== 'Array') {
                return false
            }
            arrVal.sort(_sortArr)
            return this
        } catch (err) {
            console.log(err)
            return false
        }
    },
    // 自定义数组排序
    _customSortArray (arrVal, indexVal) {
        if (_getDataType(arrVal) !== 'Array') {
            return false
        }
        try {
            arrVal.sort(
                (obj1, obj2) => {
                    let val1 = obj1[indexVal]
                    let val2 = obj2[indexVal]
                    if (val1 < val2) {
                        return -1
                    } else if (val1 > val2) {
                        return 1
                    } else {
                        return 0
                    }
                }
            )
            return this
        } catch (err) {
            console.log(err)
            return false
        }
    },
    // 去除数组的null、undefined、''数据
    _clearEmptyArray (arr) {
        try {
            if (_getDataType(arr) !== 'Array') {
                return false
            }
            let resData = []
            arr.forEach((item) => {
                item !== null && item !== undefined && item !== '' && resData.push(item)
            })
            return resData
        } catch (error) {
            console.log(error)
            return false
        }
    },
    // 对象的深拷贝
    _deepCopy (obj) {
        try {
            let newObject
            if (typeof obj === 'object') {
                if (obj === null) {
                    newObject = null
                } else {
                    if (obj instanceof Array) {
                        newObject = []
                        for (let i = 0, len = obj.length; i < len; i++) {
                            newObject.push(_deepCopy(obj[ i ]))
                        }
                    } else {
                        newObject = {}
                        for (let j in obj) {
                            newObject[ j ] = _deepCopy(obj[ j ])
                        }
                    }
                }
            } else {
                newObject = obj
            }
            return newObject
        } catch (e) {
            console.log(e)
            return false
        }
    },

    /*
     * 缓存函数
     * return any
     * */
    // 存储localStorage
    _setLocalStorage (name, content) {
        try {
            if (!name) return false
            typeof content !== 'string' && (content = JSON.stringify(content))
            window.localStorage.setItem(name, content)
            return true
        } catch (e) {
            console.log(e)
            return false
        }
    },
    // 获取字符串的localStorage
    _getLocalStorage (name) {
        if (!name) return false
        return window.localStorage.getItem(name) || ''
    },
    // 获取对象的localStorage
    _getLocalStorageObject (name) {
        if (!name) return false
        const object = window.localStorage.getItem(name)
        try {
            return JSON.parse(object)
        } catch (e) {
            return false
        }
    },
    // 删除localStorage
    _removeLocalStorage (name) {
        if (!name) return false
        window.localStorage.removeItem(name)
        return true
    },
    // 删除多个localStorage
    _removeMultipleLocalStorage (args = []) {
        try {
            if (args.length <= 0) return false
            // 清空无效KEY
            args = this._clearEmptyArray(args) || []
            // 去重参数
            args = this._uniqueArray(args) || []
            args.forEach(arg => {
                window.localStorage.removeItem(arg)
            })
            return true
        } catch (e) {
            return false
        }
    },
    // 存储sessionStorage
    _setSessionStorage (name, content) {
        try {
            if (!name) return false
            typeof content !== 'string' && (content = JSON.stringify(content))
            window.sessionStorage.setItem(name, content)
            return true
        } catch (e) {
            return false
        }
    },
    // 获取字符串的sessionStorage
    _getSessionStorage (name) {
        if (!name) return false
        return window.sessionStorage.getItem(name) || ''
    },
    // 获取对象的sessionStorage
    _getSessionStorageObject (name) {
        if (!name) return false
        const object = window.sessionStorage.getItem(name)
        try {
            return JSON.parse(object)
        } catch (e) {
            return false
        }
    },
    // 删除单个sessionStorage
    _removeSessionStorage (name) {
        if (!name) return false
        window.sessionStorage.removeItem(name)
        return true
    },
    // 删除多个sessionStorage
    _removeMultipleSessionStorage (args = []) {
        try {
            if (args.length <= 0) return false
            // 清空无效KEY
            args = this._clearEmptyArray(args) || []
            // 去重参数
            args = this._uniqueArray(args) || []
            args.forEach(arg => {
                window.sessionStorage.removeItem(arg)
            })
            return true
        }  catch (e) {
            return false
        }
    },

    /*
     * 字符串函数
     * return String
     * */
    // 去除字符串首尾空格
    _trim (value = '') {
        try {
            // String.prototype.trim兼容性写法
            if (String.prototype.trim) {
                return value.trim()
            }
            return value.replace(/(^\s*)|(\s*$)/g, '')
        } catch (err) {
            console.log(err)
            return false
        }
    },
    /*
     * 截取指定字符指定位置的字符
     * str - 源字符串
     * spcStr - 指定字符串分割
     * location - 第几段
     * */
    _getSpecStr (str = '', spcStr = '', location = 0) {
        try {
            if (!str || typeof str !== 'string') {
                return false
            }
            return str.split(spcStr)[location] || ''
        } catch (err) {
            console.log(err)
            return false
        }
    },
    /*
     * 设置将某几位显示为指定字符
     * str - 目标字符串
     * target - 替换指定的字符
     * start - 指定开始替换位置
     * num - 替换多少位
     * */
    _setStars (str, target, start, num) {
        try {
            if (!str || typeof str !== 'string') {
                return false
            }
            let res = str.split('')
            for (let i = 0; i < num; i++) {
                res.splice(start + i, 1, target)
            }
            return res.join('') || ''
        } catch (err) {
            console.log(err)
            return false
        }
    },
    /*
     * 将字符串中某个字符替换为指定字符
     * str - 源字符串
     * frontVal - 需要替换的字符串 [String | Array]
     * backVal - 替换后的字符串 [String | Array]
     * */
    _formatStr (str, frontVal, backVal) {
        try {
            if (str === '' || frontVal.length <= 0 || backVal.length <= 0) {
                return false
            }
            typeof frontVal === 'string' && typeof backVal === 'string'
                ? str = str.replace(new RegExp(frontVal, 'g'), backVal)
                : frontVal.forEach((item, index) => { str = str.replace(new RegExp(item, 'g'), backVal[index]) })
            return str || ''
        } catch (err) {
            console.log(err)
            return false
        }
    },
    /*
     * 指定位置插入指定字符串
     * str - 源字符串
     * indexList - 指定位置数组
     * insertVal - 插入的字符串
     * */
    _insertStr (str = '', indexList = [], insertVal = '') {
        try {
            if (!str || typeof str !== 'string' || indexList.length <= 0 || !insertVal) {
                return str
            }
            let newStr = str.substring(0, indexList[0])
            for (let i = 0, len = indexList.length; i < len; i++) {
                i !== indexList.length - 1 ? newStr += insertVal + str.substring(indexList[i], indexList[i] + 2) : newStr += insertVal + str.substring(indexList[i])
            }
            return newStr
        } catch (e) {
            console.log(e)
            return str
        }
    },
    /*
     * 指定位置后显示省略号
     * str - 源字符串
     * index - 指定位置
     * endStr - 结尾添加的字符串
     * */
    _showEllipsis (str = '', index = 0, endStr = '') {
        try {
            if (!str || typeof str !== 'string' || typeof index !== 'number' || index >= str.length || index < 0 || typeof endStr !== 'string') {
                return ''
            }
            str = str.substr(0, index) + '...'
            endStr && (str += endStr)
            return str || ''
        } catch (e) {
            console.log(e)
            return ''
        }
    },

    /*
     * 用户函数
     * return any
     * */
    /*
     * 登录状态拦截
     * noLoginAuth - 是否不需要认证
     * idToken - 存储的idToken
     * next - 跳转下一步路由
     * params - 路由参数
     * */
    _auth (noLoginAuth, idToken = 'idToken', next, params = {path: '/'}) {
        try {
            // 配置需要登录信息验证并且登录信息不存在，则跳回首页
            !noLoginAuth && !_getSessionStorage('idToken') && next(params)
            return true
        } catch (e) {
            console.log(e)
            return false
        }
    },
    /*
     * 是否为管理员
     * roleListType - 角色列表
     * */
    _isManager (roleListType = ['Super_Admin', 'Hospital_Admin']) {
        try {
            let roleList = _getSessionStorageObject('userData').roleList || []
            !Array.isArray(roleList) && (roleList = [])
            for (let i = 0, len = roleList.length; i < len; i++) {
                // 判断是否为超级管理员和医院管理员
                if (roleListType.includes(roleList[i])) {
                    return true
                }
            }
            return false
        } catch (e) {
            console.log(e)
            return false
        }
    },

    /*
     * 其它函数
     * return any
     * */
    /*
     * 防抖
     * fn - 回调函数
     * loadingName - loading名称
     * delay - 延迟时间
     */
    _debounce (fn, loadingName = 'showLoading', delay = 1000) {
        let timer = null
        return function () {
            let _this = this
            // 响应loading状态
            !this[loadingName] && (this[loadingName] = true)
            let args = arguments
            timer !== null && clearTimeout(timer)
            timer = setTimeout(() => {
                timer = null
                fn.apply(_this, args)
            }, delay)
        }
    },
    // 节流
    _throttle (fn, interval = 100) {
        let timer
        let last
        return function () {
            let _this = this
            let args = arguments
            let now = +new Date()
            // 判断是否在interval时间内再次触发
            if (last && now - last < interval) {
                clearTimeout(timer)
                timer = setTimeout(function () {
                    last = now
                    fn.apply(_this, args)
                }, interval)
            } else {
                last = now
                fn.apply(_this, args)
            }
        }
    },
    /*
     * 接收文件流并进行导出
     * fileStream - 文件流
     * fileName - 文件名
     * fileType - 文件类型
     */
    _handleFileStream (fileStream, fileType, fileName = 'excel.xlsx') {
        try {
            if (!fileStream || !fileType) {
                return false
            }
            // 配置各大文件类型的文件流
            const FILE_TYPE_TYPE = {
                excel: {type: 'application/vnd.ms-excel'},
                word: {type: 'application/msword;charset=UTF-8'},
                pdf: {type: 'application/pdf;charset=UTF-8'}
            }
            const BLOB = new Blob([fileStream], FILE_TYPE_TYPE[fileType])
            const E_LINK = document.createElement('a')
            E_LINK.download = fileName
            E_LINK.style.display = 'none'
            E_LINK.href = URL.createObjectURL(BLOB)
            document.body.appendChild(E_LINK)
            E_LINK.click()
            // 释放URL 对象
            URL.revokeObjectURL(E_LINK.href)
            document.body.removeChild(E_LINK)
            return true
        } catch (e) {
            console.log(e)
            return false
        }
    },
    /*
     * 返回容器的顶部
     * scrollDiv - 容器
     * speedVal - 返回速度
     */
    _goTop (scrollDiv, speedVal = 10) {
        try {
            let timer = setInterval(() => {
                let top = scrollDiv.scrollTop
                top -= top * 0.05
                if (top > 0) {
                    scrollDiv.scrollTop = top
                } else {
                    scrollDiv.scrollTop = 0
                    clearInterval(timer)
                }
            }, speedVal)
        } catch (err) {
            console.log(err)
            return false
        }
    },
    /*
     * 禁止打印
     * key - 单个禁止
     * isAll [true,false] - 是否禁止全部
     */
    _disableConsole (key = 'log', isAll = false) {
        try {
            let consoleObject = window.console
            if (!consoleObject) {
                return false
            }
            if (isAll) {
                for (let key in consoleObject) {
                    consoleObject[key] = function () {}
                }
                return true
            }
            const consoleKeyList = Object.keys(consoleObject) || []
            if (!consoleKeyList.includes(key)) {
                return false
            }
            consoleObject[key] = function () {}
            return true
        } catch (e) {
            console.log(e)
            return false
        }
    },
    // 获取浏览器URL后参数
    _getQueryParam (val) {
        try {
            let reg = new RegExp('(^|&)' + val + '=([^&]*)(&|$)')
            let r = window.location.search.substr(1).match(reg)
            let res
            r !== null ? res = decodeURI(r[2]) : res = ''
            return res
        } catch (err) {
            console.log(err)
            return false
        }
    },
    // 判断是否为移动端设备
    _isMobile () {
        try {
            if (navigator && navigator.userAgent && (navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
                return true
            }
            return false
        } catch (e) {
            console.log(e)
            return false
        }
    },
    // 设置title
    _setTitle (title = 'MHP') {
        try {
            document.title = title
            return true
        } catch (e) {
            console.log(e)
            return false
        }
    },
}

const config = {
    errorMsg: 'This method prohibits changes'
}

const genericInstall = (Vue) => {
    Object.defineProperties(Vue.prototype, {
        _tools: {
            get () {
                return Tools
            },
            set () {
                console.error(config.errorMsg)
            }
        }
    })
}

const _Tools = {
    install (Vue, options) {
        if (options && options.name) {
            //Vue[options.name] = Tools
            Object.defineProperties(Vue.prototype, {
                [options.name]: {
                    get () {
                        return Tools
                    },
                    set (val) {
                        console.error(config.errorMsg)
                    }
                }
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
            window.Vue.use(_Tools)
        }
    }
}

exports = module.exports = _Tools