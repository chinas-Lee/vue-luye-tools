/**
 * Created by LCQ on 2019-05-28,0028.
 */
import Vue from 'vue'
import VueLuyeTools from '../src/index.mjs'

Vue.use(VueLuyeTools, { name: 'VueLuyeTools' })
const testWithoutOption = new Vue({
    methods: {
        run() {
            console.log(Vue.VueLuyeTools._isNull(20))
            console.log(this.VueLuyeTools._isNull(20))
        }
    }
})
testWithoutOption.run()

const testWithOption = new Vue({
    methods: {
        run() {
            Vue.VueLuyeTools._isNull(20)
            this.VueLuyeTools._isNull(20)
        }
    }
})
