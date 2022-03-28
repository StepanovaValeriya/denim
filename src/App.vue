<template>
  <div class="wrapper">
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
export default {
  data() {
    return {};
  },
  methods: {},
  components: { Header, Footer },
};
</script>
