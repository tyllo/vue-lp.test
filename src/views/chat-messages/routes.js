import { registerModule } from './store';
import * as ROUTES from '@/helpers/enums/routes';


const createRoutes = () => [
  {
    path: '/chart-messages/:chat_id(\\d+)',
    name: ROUTES.CHAT_MESSAGES.LAYOUT,
    redirect: { name: ROUTES.CHAT_MESSAGES.LIST },
    components: {
      aside: () => import(/* webpackChunkName: "chats" */ '@/views/chats/List.vue'),
      main: {
        name: 'chat-messages-layout',
        render: (h) => h('router-view'),
      },
    },
    children: [
      {
        path: 'list',
        name: ROUTES.CHAT_MESSAGES.LIST,
        props: ({ params: p }) => ({ chat_id: +p.chat_id }),
        component: () => import(/* webpackChunkName: "chat-messages" */ './List.vue'),
      },
    ],
  },
];

const createModule = (options) => {
  registerModule(options);
  return createRoutes();
};

export default createModule;
