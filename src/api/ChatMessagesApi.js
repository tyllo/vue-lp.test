import { Api } from './Api';


export class ChatMessagesApi extends Api {
  url = 'chat-messages(/:id)(/:action)';
}
