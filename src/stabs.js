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
];

export const getProfileStub = () => ({
  id: AUTHOR,
  name: AUTHOR,
});

export const getChatsStabs = () => stabs
  .map((_) => ({ ..._, parts: void 0, last_part: last(_.parts) }));

