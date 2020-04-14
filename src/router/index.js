import Vue from 'vue';
import VueRouter from 'vue-router';
import { createRoutes } from './routes';


Vue.use(VueRouter);

export const createRouter = (options) => {
  const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    scrollBehavior: (to, from, savedPosition) => {
      if (to.path === from.path) return false;
      if (savedPosition) return savedPosition;
      return { y: 0 };
    },
    routes: createRoutes(options),
  });

  return router;
};
