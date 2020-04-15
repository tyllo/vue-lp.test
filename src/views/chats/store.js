import { createNamespacedHelpers } from 'vuex';
import { ChatsApi, ChatMessagesApi } from '@/api';
import { CrudAdapter, createCrudModule } from '@/store/create-crud-module';
import { getTimeout } from '@/helpers/getTimeout';
import * as stabs from '@/stabs';


class ChatsCrudAdapter extends CrudAdapter {
  getAll(...args) {
    let request = super.getAll(...args);

    if (process.env.VUE_APP_STABS === 'true') {
      request = request
        .catch(getTimeout.bind(null, void 0))
        .then(stabs.getChatsStabs);
    }

    return request;
  }

  // eslint-disable-next-line class-methods-use-this
  getCountUnreadMessages() {
    const api = new ChatMessagesApi();
    const params = { type: 'new', per_page: 1 };
    let request = api.getAll(params);

    if (process.env.VUE_APP_STABS === 'true') {
      request = request
        .catch(getTimeout.bind(null, 1000))
        .then(stabs.getChatUnreadMessagesStabs);
    }

    return request;
  }
}

const LOCAL_TYPES = {
  SET_COUNT_UNREAD_MESSAGES: 'SET_COUNT_UNREAD_MESSAGES',
};

const api = new ChatsApi();
const state = { countUnreadMessages: 0 };
const adapter = new ChatsCrudAdapter({ api });
const crudModule = createCrudModule({ adapter, state });

crudModule.actions = {
  ...crudModule.actions,

  async getCountUnreadMessages({ commit }) {
    const response = await adapter.getCountUnreadMessages();
    commit(LOCAL_TYPES.SET_COUNT_UNREAD_MESSAGES, response);
  },
};

crudModule.mutations = {
  ...crudModule.mutations,

  // eslint-disable-next-line no-shadow
  [LOCAL_TYPES.SET_COUNT_UNREAD_MESSAGES](state, payload) {
    state.countUnreadMessages = payload;
  },
};

export const moduleName = 'chats';
export const ChatsStoreModule = createNamespacedHelpers(moduleName);

export const registerModule = (options) => (
  options.store.registerModule(moduleName, crudModule)
);
