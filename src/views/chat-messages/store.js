import { createNamespacedHelpers } from 'vuex';
import { ChatMessagesApi } from '@/api';
import { CrudAdapter, createCrudModule, TYPES } from '@/store/create-crud-module';
import { getTimeout } from '@/helpers/getTimeout';
import * as stabs from '@/stabs';


class ChatsCrudAdapter extends CrudAdapter {
  getAll(rawParams, context) {
    let request = super.getAll(rawParams, context);

    if (process.env.VUE_APP_STABS === 'true') {
      request = request
        .catch(getTimeout.bind(null, 3000))
        .then(() => stabs.getChatMessagesStabs(rawParams.chat_id));
    }

    return request;
  }

  addMessage(params) {
    let request = this.api.create(params);

    if (process.env.VUE_APP_STABS === 'true') {
      request = request
        .catch(getTimeout.bind(null, void 0))
        .then(() => stabs.createChatMessagesStabs(params));
    }

    return request;
  }
}

const api = new ChatMessagesApi();
const adapter = new ChatsCrudAdapter({ api });
const crudModule = createCrudModule({ adapter });

crudModule.actions = {
  ...crudModule.actions,

  // eslint-disable-next-line no-shadow
  async addMessage({ commit, state }, params) {
    const response = await adapter.addMessage(params);
    commit(TYPES.SET_LIST, response);
    return state.list;
  },
};

export const moduleName = 'chat-messages';
export const ChatMessagesStoreModule = createNamespacedHelpers(moduleName);

export const registerModule = (options) => (
  options.store.registerModule(moduleName, crudModule)
);
