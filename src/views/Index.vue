<template>
  <div>
    <main class="page">
      <Promo></Promo>
      <Bestsellers></Bestsellers>
      <News></News>
      <Categories></Categories>
    </main>
  </div>
</template>

<script>
import Promo from '../components/PromoIndex.vue';
import Bestsellers from '../components/Bestsellers.vue';
import News from '../components/News.vue';
import Categories from '../components/Categories.vue';

export default {
  name: 'index',
  components: { Promo, Bestsellers, News, Categories },
};
</script>
