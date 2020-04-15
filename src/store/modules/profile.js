import { ProfileApi } from '@/api';
import { getTimeout } from '@/helpers/getTimeout';
import { getProfileStub } from '@/stabs';


const api = new ProfileApi();

const TYPES = {
  SET_PROFILE: 'SET_PROFILE',
};

const createState = () => ({
  profile: null,
});

const getters = {
  profile: (state) => state.profile,
};

const actions = {
  async getProfile({ state, commit }) {
    let request = api.get();

    if (process.env.VUE_APP_STABS === 'true') {
      request = request
        .catch(getTimeout.bind(null, 1000))
        .then(() => getProfileStub());
    }

    const result = await request;
    commit(TYPES.SET_PROFILE, result);
    return state.profile;
  },
};

const mutations = {
  [TYPES.SET_PROFILE](state, payload) {
    state.profile = payload;
  },
};

export default {
  state: createState,
  getters,
  actions,
  mutations,
};
