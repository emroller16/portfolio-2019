import Vue from 'vue';

import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';
import VueRouter from 'vue-router';
import routes from './routes';
import PortfolioNavigation from './shared/portfolioNavigation.vue';
import AppNav from './shared/appNav.vue';


import App from './App.vue';

Vue.use(VueMaterial);
Vue.use(VueRouter);

Vue.component('PortfolioNavigation', PortfolioNavigation);
Vue.component('AppNav', AppNav);
Vue.component('router-link', Vue.options.components.RouterLink);
Vue.component('router-view', Vue.options.components.RouterView);

const router = new VueRouter({
  routes,
});


Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router,
}).$mount('#app');
