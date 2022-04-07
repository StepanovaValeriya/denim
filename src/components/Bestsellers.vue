<template>
  <section class="page-bestsellers bestsellers">
    <div class="bestsellers-container container">
      <div class="bestsellers-header header-block">
        <h2 class="header-block-title">Bestsellers</h2>
        <a class="header-block-link" href="#">View all</a>
      </div>
      <div class="bestsellers-body">
        <ul class="catalog-list">
          <router-link
            v-for="best in bestsellers"
            :key="best.id"
            :to="best.url"
            custom
            v-slot="{ href, navigate, isExactActive }"
          >
            <li :class="[isExactActive && 'active']" class="catalog-item">
              <a @click="navigate" class="catalog-item-link" :href="href">
                <h3>{{ best.title }}</h3>
                <img :src="getURLImage(best.src)" :alt="best.alt" />
                <div class="catalog-item-price">{{ best.price }}</div>
              </a>
            </li>
          </router-link>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      bestsellers: [
        {
          id: '1',
          title: 'Jacket',
          src: 'bestseller1.jpg',
          alt: 'Jacket',
          price: '$120',
          url: '/productCard',
        },
        {
          id: '2',
          title: 'Overalls',
          src: 'bestseller2.jpg',
          alt: 'Overalls',
          price: '$140',
          url: '/productCard',
        },
        {
          id: '3',
          title: 'Jacket',
          src: 'bestseller3.jpg',
          alt: 'Jacket',
          price: '$90',
          url: '/productCard',
        },
        {
          id: '4',
          title: 'Overalls',
          src: 'bestseller4.jpg',
          alt: 'Overalls',
          price: '$160',
          url: '/productCard',
        },
      ],
    };
  },
  methods: {
    getURLImage(best) {
      return new URL('../assets/index/Bestsellers/' + best, import.meta.url)
        .href;
    },
  },
};
</script>

<style scoped>
/* ===============bestsellers================= */
.page-bestsellers {
  padding: 130px 0 0 0;
}
@media (min-width: 1200px) {
  .page-bestsellers {
    padding: 70px 0 0 0;
  }
}
</style>
