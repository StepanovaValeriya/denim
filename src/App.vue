<template>
  <div class="wrapper">
    <Header></Header>
    <router-view></router-view>
    <Footer @modal="showModal"></Footer>
    <Modal
      :altSocial="alt"
      v-model="isShowModal"
      @close="isShowModal = false"
    ></Modal>
  </div>
</template>

<script>
import Header from './app/Header.vue';
import Footer from './app/Footer.vue';
import Modal from './app/Modal.vue';
export default {
  data() {
    return {
      isShowModal: false,
      alt: '',
    };
  },
  methods: {
    showModal(data) {
      this.isShowModal = true;
      this.alt = data;
    },
  },
  components: { Header, Footer, Modal },
};
</script>
