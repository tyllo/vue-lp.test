import moment from 'moment';
import last from 'lodash/last';


const AUTHOR = 'vasiliy';

const stabs = [
  {
    id: 1,
    subject: 'Простой запрос',
    created: '2019-08-01 23:59',
    parts: [
      {
        id: 1,
        author: AUTHOR,
        text: 'Привет, как дела?',
        created: '2019-08-01 23:59',
      },
      {
        id: 2,
        author: 'petya',
        created: '2019-08-02 01:20',
        text: 'Привет, все хорошо, спасибо!',
      },
      {
        id: 3,
        author: 'petya',
        created: '2019-08-02 05:20',
        text: 'А у тебя?',
      },
    ],
  },
  {
    id: 2,
    subject: 'Вопрос по домену',
    created: '2016-03-02 14:19',
    parts: [
      {
        id: 1,
        author: 'petr',
        created: '2019-08-06 12:20',
        text: 'Здравствуйте, тут есть кто-нибудь?',
      },
      {
        id: 2,
        author: AUTHOR,
        created: '2019-08-06 12:34',
        text: 'Да, я вас слушаю!',
      },
      {
        id: 3,
        author: 'petr',
        created: '2019-08-06 12:38',
        text: 'Помогите мне настроить домен!',
      },
    ],
  },
  {
    id: 3,
    subject: 'Привет!',
    created: '2016-03-12 14:19',
    parts: [
      {
        id: 1,
        author: AUTHOR,
        created: '2019-09-02 15:20',
        text: 'Morbi hac eligendi totam? Elementum mi facilis aliquet id turpis ultrices mollitia porttitor praesentium animi ullamco eleifend scelerisque, sapien quam explicabo conubia egestas vehicula!',
      },
    ],
  },
];

const length = Math.ceil(Math.random() * 20);

Array.from({ length }).forEach((_, i) => {
  const data = { ...stabs[2], id: stabs[2].id + i + 1 };
  stabs.push(data);
});

export const getProfileStub = () => ({
  id: AUTHOR,
  name: AUTHOR,
});

export const getChatsStabs = () => stabs
  .map((_) => ({ ..._, parts: void 0, last_part: last(_.parts) }));

export const createChatMessagesStabs = (data) => {
  const chat = stabs.find((_) => _.id === data.chat_id);

  const params = {
    ...data,
    id: last(chat.parts).id + 1,
    author: AUTHOR,
    created: moment().format('YYYY-MM-DD HH:mm'),
  };

  chat.parts.push(params);
  return chat.parts;
};

export const getChatMessagesStabs = (id) => {
  const result = stabs.find((_) => _.id === id);
  return result ? result.parts : null;
};

export const getChatUnreadMessagesStabs = () => 151;
