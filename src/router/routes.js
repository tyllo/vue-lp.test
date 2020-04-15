import chats from '@/views/chats/routes';
import chatMessages from '@/views/chat-messages/routes';
import empty from '@/views/empty/routes';
/**
 *
 * @param {{ store: import('vuex').Store, router: import('vue-router').default } options
 * @param {Array<import('vue-router').RouteConfig>} list
 * @returns Array<import('vue-router').RouteConfig>
 */
const createGetRoutes = (options, list) => {
  const result = list.reduce((acc, routes) => {
    /* eslint no-param-reassign: 0 */
    routes = typeof routes === 'function' ? routes(options) : routes;
    return acc.concat(routes);
  }, []);

  return result;
};

/**
 *
 * @param {{ store: import('vuex').Store, router: import('vue-router').default } options
 * @returns Array<import('vue-router').RouteConfig>
 */
export const createRoutes = (options) => createGetRoutes(options, [
  empty,
  chats,
  chatMessages,
]).filter(Boolean).flat();
