import { createState, createActions, createMutations } from './create-crud-module';

import * as TYPES from './mutation-types';


export { TYPES };
export { CrudAdapter } from './CrudAdapter';
export { createState };

export function createCrudModule(options) {
  if (process.env.NODE_ENV !== 'production') {
    /* eslint no-use-before-define: 0 */
    validateOptions(options);
  }

  return {
    namespaced: true,
    state: createState(options),
    actions: createActions(options),
    mutations: createMutations(options),
  };
}

export function validateOptions(options) {
  if (!options) {
    /* eslint no-console: 0 */
    console.warn('[App warn]: createCrudModule should have options params');
  } else if (!('api' in options) && !('adapter' in options)) {
    console.warn('[App warn]: createCrudModule should have options.api or options.adapter param');
  }
}
