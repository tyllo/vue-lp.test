import Vue from 'vue';
import App from '@/App.vue';

// Plugins
import { initPlugins } from '@/plugins';

// Vue
import { createRouter } from '@/router';
import { createStore } from '@/store';

// Styles
import '@/assets/scss/app.scss';


const store = createStore();
const router = createRouter({ store });

Vue.config.productionTip = process.env.NODE_ENV === 'production';

const app = {
  router,
  store,
  render: (h) => h(App),
};

/* eslint-disable-next-line */
initPlugins({ Vue, app, router, store });

new Vue(app).$mount('#app');
