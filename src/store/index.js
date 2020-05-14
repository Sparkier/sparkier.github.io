import Vue from 'vue';
import Vuex from 'vuex';

import {getResearchProjects, getFunProjects} from '../helpers/projectsProvider';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    researchProjects: getResearchProjects(),
    funProjects: getFunProjects(),
    headHeight: 0,
  },
  mutations: {
    setHeadHeight(state, height) {
      state.headHeight = height;
    },
  },
  actions: {
  },
  modules: {
  },
});
