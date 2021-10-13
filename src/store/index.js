import Vue from 'vue';
import Vuex from 'vuex';

import {getResearchProjects, getFunProjects} from '../helpers/projectsProvider';
import {getTalks} from '../helpers/talkProvider';
import {getLectures} from '../helpers/teachingProvider';
import {getThoughts} from '../helpers/thoughtProvider';
import {getWork} from '../helpers/workProvider';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    researchProjects: getResearchProjects(),
    funProjects: getFunProjects(),
    thoughts: getThoughts(),
    lectures: getLectures(),
    work: getWork(),
    talks: getTalks(),
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
