import * as ROUTES from '@/helpers/enums/routes';


const createRoutes = () => [
  {
    path: '/',
    name: ROUTES.EMPTY,
    components: {
      aside: () => import(/* webpackChunkName: "chats" */ '@/views/chats/List.vue'),
      main: () => import(/* webpackChunkName: "empty" */ './Empty.vue'),
    },
    children: [],
  },
];

export default createRoutes;
