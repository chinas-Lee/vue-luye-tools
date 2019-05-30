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
    * @param { String } value 手机号码
    * @return { Boolean } 是否正确
    */
    this._tools._checkEmail(value)
```





