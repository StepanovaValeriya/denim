import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import store from './store';
import App from './App.vue';
import Index from './components/Index.vue';
import Catalog from './components/Catalog.vue';
import ProductCard from './components/ProductCard.vue';
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
