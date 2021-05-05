import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [],
    pictures: [],
  },
  mutations: {
    SET_USERS(state, users) {
      state.users = users;
    },
    SET_PICTURES(state, pictures) {
      state.pictures = pictures;
    },
  },
  actions: {
    getUsers({ commit }) {
      axios
        .get("http://jsonplaceholder.typicode.com/users")
        .then((response) => {
          commit("SET_USERS", response.data);
        });
    },
    getPictures({ commit }) {
      axios
        .get("http://jsonplaceholder.typicode.com/photos")
        .then((response) => {
          commit("SET_PICTURES", response.data);
        });
    }
  },
  modules: {},
});
