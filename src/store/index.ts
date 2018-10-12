import Vue from "vue";
import * as Vuex from "vuex";
import VuexPersistence from "vuex-persist";

import state, { State } from "./state";
import mutations from "./mutations";
import actions from './actions';

Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
});

export default new Vuex.Store<State>({
  state,
  mutations,
  actions,
  plugins: [vuexLocal.plugin]
});
