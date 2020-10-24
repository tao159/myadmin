import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

import state from "./state.js";
import * as getters from "./getters.js";
// import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";
import createLogger from 'vuex/dist/logger'
const debug = process.env.NODE_ENV !== "production";
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  modules: {},
  plugins: debug ? [createLogger()] : [],
});
