<template>
  <div>
    <div class="product-filter filter">
      <select
        class="filter-list"
        name="filter-list"
        @change="sortPrice($event)"
      >
        <option value="0">Filter By</option>
        <option value="1">По возрастанию цены</option>
        <option value="2">По убыванию цены</option>
      </select>
    </div>

    <div class="product-body">
      <ul class="catalog-list">
        <router-link
          v-for="(product, index) in products"
          :key="index"
          :to="product.url"
          custom
          v-slot="{ href, navigate, isExactActive }"
        >
          <li
            :class="[isExactActive && 'active']"
            class="catalog-item catalog-item-catalog"
          >
            <a @click="navigate" :href="href" class="catalog-item-link">
              <h3>{{ product.title }}</h3>
              <img :src="getURLImage(product.src)" :alt="product.alt" />
              <div class="catalog-item-price">${{ product.price }}</div>
            </a>
          </li>
        </router-link>
      </ul>
    </div>
    <div class="page-show show">
      <div class="show-container container">
        <div class="show-text">
          Showing {{ products.length }} of {{ products.length }} items
        </div>
        <div class="show-button button">
          <a class="button-select"> Load more </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    products: {
      type: Array,
    },
  },
  name: 'product',
  data() {
    return {};
  },

  computed: {},
  methods: {
    sortPrice(event) {
      if (event.target.value === '1') {
        this.products.sort(function (a, b) {
          if (a.price > b.price) {
            return 1;
          }
          if (a.price < b.price) {
            return -1;
          }
        });
      }
      if (event.target.value === '2') {
        this.products.sort(function (a, b) {
          if (a.price > b.price) {
            return -1;
          }
          if (a.price < b.price) {
            return 1;
          }
        });
      }
    },
    getURLImage(product) {
      return new URL('../assets/Catalog/' + product, import.meta.url).href;
    },
  },
};
</script>

<style scoped>
.product-filter {
  margin: 0 10px 40px 0;
}
.filter {
  text-align: right;
}
.filter-list {
  border: 2px solid #151c22;
  padding: 18px 117px 18px 18px;
  font-size: 18px;
  font-weight: 500;
  line-height: 21px;
  color: var(--main-color-black);
}
/* ==================product================= */

.product-body {
  margin: 0 10px 0 10px;
}
/* ============show=============== */
.page-show {
  padding: 83px 0 130px 0;
}
.show-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.show-text {
  font-size: 18px;
  line-height: 21px;
}
.show-text:not(:last-child) {
  margin-bottom: 50px;
}
.show-button {
  padding: 27px 58px;
}

@media (max-width: 797px) {
  .filter {
    text-align: center;
  }
}
</style>
