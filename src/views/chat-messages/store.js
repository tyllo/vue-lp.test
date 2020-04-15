import { createNamespacedHelpers } from 'vuex';
import { ChatMessagesApi } from '@/api';
import { CrudAdapter, createCrudModule } from '@/store/create-crud-module';
import { getTimeout } from '@/helpers/getTimeout';
import { getChatsPartStabs } from '@/stabs';


class ChatsCrudAdapter extends CrudAdapter {
  getAll(rawParams, context) {
    let request = super.getAll(rawParams, context);

    if (process.env.VUE_APP_STABS === 'true') {
      request = request
        .catch(getTimeout.bind(null, 3000))
        .then(() => getChatsPartStabs(rawParams.chat_id));
    }

    return request;
  }
}

const api = new ChatMessagesApi();
const adapter = new ChatsCrudAdapter({ api });
const crudModule = createCrudModule({ adapter });

export const moduleName = 'chat-messages';
export const ChatMessagesStoreModule = createNamespacedHelpers(moduleName);

export const registerModule = (options) => (
  options.store.registerModule(moduleName, crudModule)
);
