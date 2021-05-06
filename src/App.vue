<template>
  <div id="app">
    <div id="nav">
      <div id="logo">
        <img src="./assets/logo.png" alt="vue logo">
      </div>
      <router-link to="/">Home</router-link> |
      <router-link to="/users">Users</router-link> |
      <router-link to="/pictures">Pictures</router-link>
      <input id="searchInput" type="text" placeholder="users's name" v-model="searchInput">
    </div>
     <transition name="view">
    <router-view class="router-view"/>
    </transition>
    <footer>
      <p>Copyright 2021</p>
    </footer>
  </div>
</template>
<script>

export default {
  data () {
    return {
      searchInput:''
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
}
#nav {
  padding: 15px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: black;
}
#nav img {
  width: 70px;
}
#nav a {
  color: #42b983;
  font-size: 1.2em;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: pink;
}
#searchInput{
  color: #42b983;
  height: 30px;
}
footer{
  background: black;
  color: #42b983;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.view-enter-active, .view-leave-active{
transition: opacity 0.5s ease-in-out, transform 0.5s ease;
}
.view-enter-active {
  transition-delay: 0.5s;
}
.view-enter, .view-leave-to {
opacity: 0;
transform: translateY(-30px);
}
.view-enter-to, .view-leave {
   opacity: 1;
   transform: translateY(0px);
}
.router-view{
  min-height: 600px;
}
</style>
