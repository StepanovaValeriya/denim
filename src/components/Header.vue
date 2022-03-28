<template>
  <div class="header">
    <div class="header-container container">
      <nav class="header-menu menu">
        <ul class="menu-list">
          <router-link
            v-for="link in menu"
            :key="link.title"
            active-class="menu-link"
            :to="link.url"
            custom
            v-slot="{ href, navigate, isExactActive }"
          >
            <li :class="[isExactActive && 'active']" class="menu-item">
              <a @click="navigate" :href="href" class="menu-link">{{
                link.title
              }}</a>
            </li>
          </router-link>
        </ul>
      </nav>
      <router-link class="header-logo" to="/"
        ><img src="../assets/Nîmes.png" alt="Logo"
      /></router-link>
      <div class="header-navigation navigation">
        <form @submit.prevent="submitHandler">
          <ul class="navigation-list">
            <li v-if="isVisibleSearch" class="navigation-item">
              <input
                v-model.trim="v$.search.$model"
                class="navigation-search"
                :class="{ invalid: v$.search.$dirty && !v$.search.required }"
                type="text"
                placeholder="Введите название"
              />
            </li>
            <li @click="searchString(search)" class="navigation-item">
              <button type="submit">
                <img src="../assets/index/header/search.png" alt="search" />
              </button>
            </li>
            <li class="navigation-item">
              <button type="submit">
                <img src="../assets/index/header/basket.png" alt="basket" />
              </button>
            </li>
          </ul>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import useVuelidate from '@vuelidate/core';
import { required } from '@vuelidate/validators';
import { mapActions, mapGetters } from 'vuex';
export default {
  name: 'MainHeader',
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      isVisibleSearch: true,
      search: '',
      menu: [
        { title: 'Women', url: '/catalog' },
        { title: 'Men', url: '/catalog' },
        { title: 'New', url: '/catalog' },
      ],
    };
  },
  computed: {
    ...mapGetters(['searchValue']),
  },
  methods: {
    submitHandler() {
      if (this.v$.$invalid) {
        this.v$.$touch();
        return;
      }
    },
    ...mapActions(['getSearchValue']),

    searchString(value) {
      // this.isVisibleSearch = !this.isVisibleSearch;
      this.getSearchValue(value);
      if (!this.v$.$invalid) {
        this.$router.push({ path: '/catalog' });
      }

      this.search = '';
    },
  },
  validations() {
    return {
      search: { required },
    };
  },
};
</script>
