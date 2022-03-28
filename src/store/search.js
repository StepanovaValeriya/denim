export default {
  state: {
    search: '',
  },
  mutations: {
    setSearchValue(state, value) {
      state.search = value;
    },
  },
  actions: {
    getSearchValue({ commit }, value) {
      commit('setSearchValue', value);
    },
  },
  getters: {
    searchValue(state) {
      return state.search;
    },
  },
};
