import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import store from './store';
import App from './App.vue';
import Index from './views/Index.vue';
import Catalog from './views/Catalog.vue';
import ProductCard from './views/ProductCard.vue';
import './styles/normalize.css';
import './styles/main.css';
import './styles/media.css';

const routes = [
  { path: '/', component: Index },
  { path: '/catalog', component: Catalog },
  { path: '/productCard', component: ProductCard },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

createApp(App).use(router).use(store).mount('#app');
