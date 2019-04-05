import VueRouter from 'vue-router';

import HomePage from './views/HomePage.vue';
import WorkPage from './views/WorkPage.vue';
import AboutPage from './views/AboutPage.vue';

import AmistadWork from './views/portfolio/AmistadWork.vue';
import CruWork from './views/portfolio/CruWork.vue';
import RootCellarWork from './views/portfolio/RootCellarWork.vue';
import Portfolio from './views/portfolio/Portfolio.vue';
import KatieArnold from './views/portfolio/KatieArnold.vue';
import SaveResearch from './views/portfolio/SaveResearch.vue';
import UtilityBillingPortal from './views/portfolio/UtilityBillingPortal.vue'
import UXR from './views/portfolio/UXR.vue'



const routes = [
  { path: '/', component: HomePage, meta: { title: 'Emily Roller' } },
  { path: '/work', component: WorkPage },
  { path: '/about', component: AboutPage },
  { path: '/amistad', component: AmistadWork },
  { path: '/cru-uconn', component: CruWork },
  { path: '/root-cellar', component: RootCellarWork },
  { path: '/porfolio', component: Portfolio },
  { path: '/katie-arnold', component: KatieArnold },
  { path: '/save-research', component: SaveResearch },
  { path: '/ubp', component: UtilityBillingPortal },
  { path: '/uxr', component: UXR }

];


export default routes;
