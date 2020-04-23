import Vue from 'vue';
import Vuex from 'vuex';
import state from './state/index.js';
import mutations from "./mutations/index.js";
import actions from './actions/index.js';

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules: {
  }
})
