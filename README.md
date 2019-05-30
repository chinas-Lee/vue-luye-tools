# vue-luye-tools
## 日常项目开发中常用的公共函数
## Version 1.0.1
### 安装
```
# Npm
 npm install vue-luye-tools --save

# Yarn
 yarn add vue-luye-tools
```
## 使用
```
 import Vue from 'vue'
 import vueTools from 'vue-luye-tools'
 Vue.use(vueTools)
```
## API
```
    /* 检测是否为正确的国内手机号码
     * @method _checkPhone
     * @param { Number | String } value 手机号码
     * @return { Boolean } 是否正确
    */
    this._tools._checkPhone(value)

    /* 检测是否为正确的邮箱
    * @method _checkEmail
    * @param { String } value 邮箱
    * @return { Boolean } 是否正确
    */
    this._tools._checkEmail(value)

    /* 检测是否为空对象
    * @method _isNullObj
    * @param { Object } obj 对象
    * @return { Boolean } 是否正确
    */
    this._tools._isNullObj(obj)

    /* 检测是否为空
    * @method _isNull
    * @param { Any } value 任意值
    * @return { Boolean } 是否正确
    */
    this._tools._isNull(value)

    /* 检测是否全由数字组成
    * @method _checkAllNumber
    * @param { Number | String } value 数字或字符串
    * @return { Boolean } 是否正确
    */
    this._tools._checkAllNumber(value)

    /* 获取当前日期时间
    * @method _getDate
    * @param { String } tag - { 'date' | 'datetime' }
    * @return { String } 日期或日期时间字符串
    */
    this._tools._getDate(tag)

    /* 获取当前时间戳
    * @method _getTimeStamp
    * @param 无
    * @return { Number } 当前时间戳
    */
    this._tools._getTimeStamp()

    /* 将时间戳转化为日期或日期时间格式
    * @method _timeStampToDateTime
    * @param { 1/Number，2/String } value - 时间戳，tag - { 'date' | 'datetime' }
    * @return { String } 日期或日期时间字符串
    */
    this._tools._timeStampToDateTime(value, tag = 'dateTime')

    /* 将日期时间格式转化为时间戳
    * @method _dateTimeToTimeStamp
    * @param { String } value - 日期时间
    * @return { Number } 时间戳
    */
    this._tools._dateTimeToTimeStamp(value)

    /* 将UTC时间格式转化为日期或日期时间格式
    * @method _UTCTimeToDateTime
    * @param { 1/String，2/String } value - UTC时间格式，flag - { 'date' | 'time' }
    * @return { String } 日期或日期时间
    */
    this._tools._UTCTimeToDateTime(value, flag = 'time')

    /* 将时间对象转化为日期或日期时间格式
    * @method _dateToDate
    * @param { 1/Object，2/String } value - 时间对象，tag - { 'date' | 'time' | 'dateTime'}
    * @return { String } 日期或日期时间
    */
    this._tools._dateToDate(value, tag = 'dateTime')

    /* 获取数据类型
    * @method _getDataType
    * @param { Any } item - 任意数据
    * @return { String } 数据类型
    */
    this._tools._getDataType(item)

    /* 将一维数组去重
    * @method _uniqueArray
    * @param { Array } arr - 一维数组
    * @return { Array } 去重后的一维数组
    */
    this._tools._uniqueArray(arr)

    /* 数组以对象中某个属性名去重
    * @method _uniqueArrayAttributes
    * @param { 1/Array，2/String } arr - 数组，attrName - 数组下对象的属性名
    * @return { Array } 去重后的数组
    */
    this._tools._uniqueArrayAttributes(arr, attrName)

    /* 数组排序回调函数(配合数组排序)
    * @method _sortArr
    * @param { 1/Number，2/Number } valueOne - 第一个值，valueTwo - 第二个值
    * @return { Number } -1 | 1 | 0
    */
    this._tools._sortArr(valueOne, valueTwo)

    /* 数组排序
    * @method _sortArray
    * @param { Function } arrVal - _sortArr函数
    * @return { Array } 排序后的数组
    */
    this._tools._sortArray(arrVal)

    /* 自定义数组排序（以数组下某个属性值进行排序）
    * @method _customSortArray
    * @param { 1/Array，2/String } arrVal - 数组，indexVal - 数组下对象的属性值
    * @return { Array } 排序后的数组
    */
    this._tools._customSortArray(arrVal, indexVal)

    /* 去除一维数组中的null、undefined、''数据
    * @method _clearEmptyArray
    * @param { Array } arr - 一维数组
    * @return { Array } 去除空数据后的数组
    */
    this._tools._clearEmptyArray(arr)

    /* 对象的深拷贝
    * @method _deepCopy
    * @param { Object | Array } obj - 引用数据类型
    * @return { Object | Array } 深拷贝后的数据
    */
    this._tools._deepCopy(obj)

    /* 去除字符串首尾空格
    * @method _trim
    * @param { String } value - 字符串
    * @return { String } 去除空格后的字符串
    */
    this._tools._trim(value)

    /* 截取指定字符指定位置的字符
    * @method _getSpecStr
    * @param { 1/String，2/String，3/Number } str - 源字符串，spcStr - 指定字符串，location - 指定位置
    * @return { String } 截取后的字符串
    */
    this._tools._getSpecStr(str, spcStr, location)

    /* 将字符串中多个字符显示为指定字符
    * @method _setStars
    * @param { 1/String，2/String，3/Number，4/Number } str - 源字符串，target - 指定字符, start - 开始替换位置, num - 替换多少位
    * @return { String } 替换后的字符串
    */
    this._tools._setStars(str, target, start, num)

    /* 将字符串中指定字符替换为某个字符（frontValArr和backValArr长度需一致）
    * @method _formatStr
    * @param { 1/String，2/Array，3/Array } str - 源字符串, frontValArr - 指定字符列表, backValArr - 某个字符列表
    * @return { String } 替换后的字符串
    */
    this._tools._formatStr(str, frontValArr, backValArr)

    /* 将字符串指定位置插入指定字符
    * @method _insertStr
    * @param { 1/String，2/Array，3/String } str - 源字符串, indexList - 指定位置列表, insertVal - 插入的指定字符
    * @return { String } 插入后的字符串
    */
    this._tools._insertStr(str = '', indexList = [], insertVal = '')
```





