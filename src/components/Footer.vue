<template>
  <div class="footer">
    <div class="footer-container container">
      <router-link class="footer-logo" to="/"
        ><img src="../assets/footer/Nîmes_footer.png" alt="logo"
      /></router-link>
      <nav class="footer-nav">
        <ul class="footer-list">
          <router-link
            v-for="menu in footerMenu"
            :key="menu.title"
            active-class="menu-link"
            :to="menu.url"
            custom
            v-slot="{ href, navigate, isExactActive }"
          >
            <li :class="[isExactActive && 'active']" class="footer-item">
              <a @click="navigate" :href="href" class="footer-link">{{
                menu.title
              }}</a>
            </li>
          </router-link>
        </ul>
      </nav>
      <div class="footer-social social">
        <router-link
          :key="icon"
          v-for="icon in socialIcon"
          class="social-item"
          to="/"
          ><img
            @click="leaveSite"
            :src="getURLSocial(icon.url)"
            :alt="icon.alt"
          />
        </router-link>
        <div class="footer-leave">
          <div v-if="isLeaveSite" class="footer-leave-window">
            <p>
              Вы уверены, что хотите покинуть сайт и перейти на
              {{ getSocialAlt(icon) }}?
            </p>
            <div class="footer-leave-window-agree button">
              <a class="button-select" href="#">Подтвердить</a>
            </div>
            <button
              @click="isLeaveSite = false"
              class="footer-leave-window-close"
              type="submit"
            >
              <img src="../assets/footer/close.png" alt="close" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mainFooter',
  data() {
    return {
      isLeaveSite: false,
      footerMenu: [
        { title: 'Shop', url: '/' },
        { title: 'Delivery', url: '/' },
        { title: 'Service', url: '/' },
        { title: 'Sitemaps', url: '/' },
        { title: 'Contacts', url: '/' },
      ],
      socialIcon: [
        { url: 'facebook.png', alt: 'Facebook.com' },
        { url: 'inst.png', alt: 'Instagramm.com' },
        { url: 'pinterest.png', alt: 'Pinterest.com' },
        { url: 'twitter.png', alt: 'Twitter.com' },
      ],
      altSocial: '',
    };
  },
  methods: {
    getURLSocial(icon) {
      return new URL('../assets/footer/' + icon, import.meta.url).href;
    },
    leaveSite() {
      this.isLeaveSite = !this.isLeaveSite;
    },
    getSocialAlt(icon) {
      console.log(this.socialIcon[0]);
    },
  },
};
</script>
