<template>
  <div>
    <main class="page">
      <Promo></Promo>
      <section class="page-product product">
        <div class="product-container container">
          <Product :products="products"></Product>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import Promo from '../components/PromoCatalog.vue';
import Product from '../components/Product.vue';
export default {
  name: 'catalog',
  data() {
    return {
      products: [
        {
          id: 1,
          title: 'Jacket',
          src: 'jacket catalog 1.jpg',
          alt: 'Jacket',
          price: 40,
          url: '/productCard',
        },
        {
          id: 2,
          title: 'Jacket',
          src: 'jacket catalog 2.jpg',
          alt: 'Jacket',
          price: 70,
          url: '/productCard',
        },
        {
          id: 3,
          title: 'Jacket',
          src: 'jacket catalog 3.jpg',
          alt: 'Jacket',
          price: 50,
          url: '/productCard',
        },
        {
          id: 4,
          title: 'Jacket',
          src: 'jacket catalog 4.jpg',
          alt: 'Jacket',
          price: 60,
          url: '/productCard',
        },
        {
          id: 5,
          title: 'Jacket',
          src: 'jacket catalog 5.jpg',
          alt: 'Jacket',
          price: 40,
          url: '/productCard',
        },
        {
          id: 6,
          title: 'Jacket',
          src: 'jacket catalog 6.jpg',
          alt: 'Jacket',
          price: 110,
          url: '/productCard',
        },
        {
          id: 7,
          title: 'Jacket',
          src: 'jacket catalog 7.jpg',
          alt: 'Jacket',
          price: 35,
          url: '/productCard',
        },
        {
          id: 8,
          title: 'Jacket',
          src: 'jacket catalog 8.jpg',
          alt: 'Jacket',
          price: 85,
          url: '/productCard',
        },
      ],
    };
  },
  components: { Promo, Product },
};
</script>

<style scoped>
.product-container {
  padding: 40px 0 0 0;
}
</style>
