import * as TYPES from './mutation-types';


export const createState = (options) => ({
  ...(options.state ? options.state : {}),
  list: null,
});

export const createActions = (options) => {
  const { adapter } = options;

  return {
    async getAll(context, params) {
      const { state, commit } = context;
      const result = await adapter.getAll(params, context);
      commit(TYPES.SET_LIST, result);
      return state.list;
    },
  };
};

export const createMutations = () => ({
  [TYPES.SET_LIST](state, payload) {
    state.list = payload;
  },
});
