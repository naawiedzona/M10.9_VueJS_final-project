import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [],
    pictures: [],
    search:''
  },
  mutations: {
    SET_USERS(state, users) {
      state.users = users;
    },
    SET_PICTURES(state, pictures) {
      state.pictures = pictures;
    },
    SetSearch(state, value) {
      state.filters.search = value;
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
  getters:{
    FilteredUsers(state) {
      let users = state.users;
      let usersTemp = [];
      if (state.search.length > 1) {
        for ( const user of users ) {
            if(user.name.toLocaleLowerCase().includes(state.search.toLocaleLowerCase())){
             usersTemp.push(user);
            }
         
        }
        users = usersTemp;
        return users;
      }else{
        for ( const user of users ) {
            if(user.name.toLocaleLowerCase().includes(state.search.toLocaleLowerCase())){
              usersTemp.push(user);
            }
          
        }
        users = usersTemp;
        return users;
      }
    }
  }
});
