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
    :adress="user.adress"
    :infoUser="infoUser(infoUser)"></user>
    </div>


    <!--modal aqui-->
<div id="moreInfo">
        <div id="modal">
          <div id="modal-header">
            <h3>Consulted picture</h3> 
            <button id="btn-close" @click="closeModal()">X</button>
        </div>
        <!--     modal body     -->
        <p>picture title :</p>
        <p>picture id : </p>
        <!-- <img :src="picture.thumbnailUrl"> -->
        <p></p>
      </div>
    </div>

<!--modal fin-->
  </div>
</template>
<script>
import User from '../components/User'
export default {
  name: 'Users',
  components: {
   'user':User
  },
  data() {
    return {
      infosUser:''
    }
  },
  computed:{
  users() {
    return this.$store.state.users
    },
  /*  
    // v-model search input
     searchInput:{
       get() {
         return store.state.filters.search;
       },
       set(value) {
         store.commit("SetSearch", value);
       }
     }
   } 
   */
  },
  mounted() {
    this.$store.dispatch("getUsers");
  },
  methods: {
    infoUser (infosUser) {
      this.id = infosUser
    }
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
  color: #42b983;
  border: 1px solid #42b983;
}


#moreInfo{
  display: none;
  background: rgba(0, 0, 0, 0.767);
  position: fixed;
  right: 0;
  left: 0;
  bottom: 0;
  top: 0;
}
#modal{
  border: 1px solid  #42b983;
  background: rgba(255, 255, 255, 0.856);
  color:  #42b983;
  width:500px;
  height: 300px;
  margin: 0 auto;
  margin-top: 150px;
}
#modal-header{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
 #btn-close{
  color: black;
  border: 1px solid black;
  background: white;
  padding: 8px;
  margin:15px;
} 
#btn-close:hover{
  opacity: 0.7;
}
</style>