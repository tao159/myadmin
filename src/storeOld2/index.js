import Vue from 'vue'
import Vuex from 'Vuex'
Vue.use(Vuex)

import shop from './shop'

import createLogger from 'vuex/dist/logger'

const debug=process.env.NODE_ENV!="production"

export default new Vuex.Store({
    modules:{
        shop
    },
    strict:debug,
    plugins:debug?[createLogger()]:[]
})