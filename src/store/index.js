/* eslint sort-imports: 'error' */

import Vue from 'vue';
import Vuex from 'vuex';

import profile from './modules/profile';


Vue.use(Vuex);

export const createStore = () => new Vuex.Store({
  modules: {
    profile,
  },
});
