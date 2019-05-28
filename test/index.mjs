/**
 * Created by LCQ on 2019-05-28,0028.
 */
import Vue from 'vue'
import _Tools from '../src/index.js'

Vue.use(_Tools, { name: '_Tools' })

const testWithoutOption = new Vue({
    methods: {
        run() {
            Vue._Tools._isNull(20)
            this._Tools._isNull(20)
        }
    }
})
testWithoutOption.run()

const testWithOption = new Vue({
    methods: {
        run() {
            Vue._Tools._isNull(20)
            this._Tools._isNull(20)
        }
    }
})
testWithOption.run()