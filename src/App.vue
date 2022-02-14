<template>
  <div class="wrapper">
    <header class="header">
      <div class="header-container container">
        <nav class="header-menu menu">
          <ul class="menu-list">
            <li class="menu-item">
              <router-link class="menu-link" to="/catalog">Women</router-link>
            </li>
            <li class="menu-item">
              <router-link class="menu-link" to="/catalog">Men</router-link>
            </li>
            <li class="menu-item">
              <router-link class="menu-link" to="/catalog">New</router-link>
            </li>
          </ul>
        </nav>
        <router-link class="header-logo" to="/"
          ><img src="./assets/Nîmes.png" alt="Logo"
        /></router-link>
        <div class="header-navigation navigation">
          <ul class="navigation-list">
            <li v-if="isVisibleSearch" class="navigation-item">
              <input
                class="navigation-search"
                type="text"
                placeholder="Найти товар"
              />
            </li>
            <li @click="searchString" class="navigation-item">
              <a class="navigation-link" href="#"
                ><img src="./assets/index/header/search.png" alt="search"
              /></a>
            </li>
            <li class="navigation-item">
              <a class="navigation-link" href="#"
                ><img src="./assets/index/header/basket.png" alt="basket"
              /></a>
            </li>
          </ul>
        </div>
      </div>
    </header>
    <router-view></router-view>
    <footer class="footer">
      <div class="footer-container container">
        <router-link class="footer-logo" to="/"
          ><img src="./assets/footer/Nîmes footer.png" alt="logo"
        /></router-link>
        <nav class="footer-nav">
          <ul class="footer-list">
            <li class="footer-item">
              <a class="footer-link" href="#">Shop</a>
            </li>
            <li class="footer-item">
              <a class="footer-link" href="#">Delivery</a>
            </li>
            <li class="footer-item">
              <a class="footer-link" href="#">Service</a>
            </li>
            <li class="footer-item">
              <a class="footer-link" href="#">Sitemaps</a>
            </li>
            <li class="footer-item">
              <a class="footer-link" href="#">Contacts</a>
            </li>
          </ul>
        </nav>
        <div class="footer-social social">
          <router-link class="social-item" to="/"
            ><img
              @click="leaveSite"
              src="./assets/footer/facebook.png"
              alt="facebook"
          /></router-link>
          <router-link class="social-item" to="/"
            ><img
              @click="leaveSite"
              src="./assets/footer/inst.png"
              alt="instagramm"
          /></router-link>
          <router-link class="social-item" to="/"
            ><img
              @click="leaveSite"
              src="./assets/footer/p.png"
              alt="pinterest"
          /></router-link>
          <router-link class="social-item" to="/"
            ><img
              @click="leaveSite"
              src="./assets/footer/twitter.png"
              alt="twitter"
          /></router-link>
        </div>
        <div
          :key="social"
          v-for="(social, index) in socialArray"
          class="footer-leave"
        >
          <div v-if="isLeaveSite" class="footer-leave-window">
            <p>
              Вы уверены, что хотите покинуть сайт и перейти на
              {{ social }}?
            </p>
            <div class="footer-leave-window-agree button">
              <a class="button-select" href="#">Подтвердить</a>
            </div>
            <button
              @click="isLeaveSite = false"
              class="footer-leave-window-close"
              type="submit"
            >
              <img src="./assets/footer/close.png" alt="close" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isVisibleSearch: false,
      socialArray: [
        'Facebook.com, Instagramm.com',
        'Pinterest.com',
        'Twitter.com',
      ],
      isLeaveSite: false,
    };
  },
  methods: {
    searchString() {
      this.isVisibleSearch = !this.isVisibleSearch;
    },
    leaveSite() {
      this.isLeaveSite = !this.isLeaveSite;
    },
  },
};
</script>
