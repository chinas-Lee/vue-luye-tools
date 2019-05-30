# vue-luye-tools
## 日常项目开发中常用的公共函数
### 安装
```
# NPM
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
    @method _isNull
    * @param { Any } value 任意值
    * return { Boolean } 是否正确
    */
    this._tools._isNull(value)

    /* 检测是否全由数字组成
    @method _checkAllNumber
    * @param { Number | String } value 数字或字符串
    * return { Boolean } 是否正确
    */
    this._tools._checkAllNumber(value)
```





