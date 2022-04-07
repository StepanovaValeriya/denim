<template>
  <div>
    <main class="page">
      <Promo></Promo>
      <section class="page-product product">
        <div class="product-container container">
          <div class="product-filter filter">
            <select class="filter-list" name="filter-list">
              <option value="1">Filter By</option>
              <option value="2">Price</option>
              <option value="3">Size</option>
              <option value="4">Color</option>
            </select>
          </div>
          <Product></Product>
        </div>
      </section>
      <div class="page-show show">
        <div class="show-container container">
          <div class="show-text">Showing 9 of 45 items</div>
          <div class="show-button button">
            <a class="button-select" href="#">Load more</a>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Promo from '../components/PromoCatalog.vue';
import Product from '../components/Product.vue';
export default {
  name: 'catalog',
  components: { Promo, Product },
};
</script>

<style scoped>
.product-container {
  padding: 40px 0 0 0;
}
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
