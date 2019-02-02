import Vue from 'vue';
import Vuex from 'vuex';

import actions from './actions';
import getters from './getters';
import mutations from './mutations';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
    state: {
        achievements: null,
        character: null,
        status: null
    },
    actions,
    getters,
    mutations,
    strict: debug
});
