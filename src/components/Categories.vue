<template>
  <section class="page-categories categories">
    <div class="categories-container container">
      <div class="categories-header header-block">
        <h2 class="header-block-title">Shop by category</h2>
        <a class="header-block-link" href="#">View all</a>
      </div>
      <div class="categories-body">
        <ul class="catalog-list">
          <router-link
            v-for="item in items"
            :key="item.id"
            :to="item.url"
            custom
            v-slot="{ href, navigate, isExactActive }"
          >
            <li :class="[isExactActive && 'active']" class="catalog-item">
              <a @click="navigate" class="catalog-item-link" :href="href">
                <h3>{{ item.title }}</h3>
                <img :src="getURLImage(item.src)" :alt="item.alt" />
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
      items: [
        {
          id: '1',
          title: 'Jeans',
          src: 'jeans.jpg',
          alt: 'Jeans',
          url: '/catalog',
        },
        {
          id: '2',
          title: 'Shirts',
          src: 'shirts.jpg',
          alt: 'Shirts',
          url: '/catalog',
        },
        {
          id: '3',
          title: 'Jackets',
          src: 'jackets.jpg',
          alt: 'Jackets',
          url: '/catalog',
        },
        {
          id: '4',
          title: 'Overalls',
          src: 'overalls.jpg',
          alt: 'Overalls',
          url: '/catalog',
        },
      ],
    };
  },
  methods: {
    getURLImage(item) {
      return new URL('../assets/index/category/' + item, import.meta.url).href;
    },
  },
};
</script>

<style scoped>
/* =========categories====================== */
.page-categories {
  padding: 109px 0 130px 0;
}
</style>
