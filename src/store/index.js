import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [],
    pictures: [],
    search: "",
  },
  mutations: {
    SET_USERS(state, users) {
      users.forEach((user) => {
        user.count = 0;
      });
      state.users = users;
    },
    SET_PICTURES(state, pictures) {
      pictures.forEach((picture) => {
        picture.count = 0;
      });
      state.pictures = pictures;
    },
    SetSearch(state, value) {
      state.search = value;
    },
    infoUserStore(state, value) {
      state.users.forEach((user) => {
        if (user.id == value) {
          user.count++;
        }
      });
    },
    infoPictureStore(state, value) {
      state.pictures.forEach((picture) => {
        if (picture.id == value) {
          picture.count++;
        }
      });
    }
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
    },
  },
  modules: {},
  getters: {
    FilteredUsers(state) {
      let users = state.users;
      let usersTemp = [];
      if (state.search.length > 1) {
        for (const user of users) {
          if (
            user.name
              .toLocaleLowerCase()
              .includes(state.search.toLocaleLowerCase())
          ) {
            usersTemp.push(user);
          }
        }
        users = usersTemp;
        return users;
      } else {
        for (const user of users) {
          if (
            user.name
              .toLocaleLowerCase()
              .includes(state.search.toLocaleLowerCase())
          ) {
            usersTemp.push(user);
          }
        }
        users = usersTemp;
        return users;
      }
    },
  },
  consultedUsers(state) {
    let users = state.users;
    console.log(users);
  },
});
