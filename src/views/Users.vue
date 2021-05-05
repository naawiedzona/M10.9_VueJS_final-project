<template>
  <div class="users">
    <button id="btn-prev" @click="$router.go(-1)">Back</button>
    <h1 id="page-title">Users</h1>
    
    <div class="users-container">
    <user
    class="user"
    v-for="(user,index) in users"
    :key="index"
    :id="user.id"
    :name="user.name"
    :username="user.username"
    :email="user.email"
    :adress="user.adress"></user>
    </div>
    <!--modal aqui-->
  </div>
</template>
<script>
import User from '../components/User'
export default {
  name: 'Users',
  components: {
   'user':User
  },
  computed:{
  users() {
    return this.$store.state.users
    }
  },
  mounted() {
    this.$store.dispatch("getUsers");
  }
}
</script>
<style scoped>
#page-title {
  color: #42b983;
  margin: 40px;
}
.users-container{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
}
#btn-prev{
  background: pink;
  border: 1px solid pink;
  color: white;
  margin-top: 40px;
  padding: 10px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
#btn-prev:hover{
  opacity: 0.7;
}
</style>