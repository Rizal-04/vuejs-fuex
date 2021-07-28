import Vue from "vue";
import Vuex from "vuex";
import General from "../store/modules/general";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  modules: {
    General,
  },
});
