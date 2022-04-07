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
            @click="modal($event)"
            :src="getURLSocial(icon.url)"
            :alt="icon.alt"
          />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mainFooter',
  data() {
    return {
      footerMenu: [
        { title: 'Shop', url: '/' },
        { title: 'Delivery', url: '/' },
        { title: 'Service', url: '/' },
        { title: 'Sitemaps', url: '/' },
        { title: 'Contacts', url: '/' },
      ],
      socialIcon: [
        { url: 'facebook.png', alt: 'Facebook.com' },
        { url: 'inst.png', alt: 'Instagram.com' },
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
    modal(event) {
      this.altSocial = event.target.alt;
      this.$emit('modal', this.altSocial);
    },
  },
};
</script>
