<template>
  <div class="users">
    <button id="btn-prev" @click="$router.go(-1)">Back</button>
    <h1 id="page-title">Users</h1>
    <div class="users-container">
      
    <user
    class="user"
    v-for="(user,index) in FilteredUsers"
    :key="index"
    :id="user.id"
    :name="user.name"
    :username="user.username"
    :email="user.email"
    :adress="user.adress"
    :infoUser="infoUser"></user>

    
    <transition name="modal">
    <div v-if="FilteredUsers.length==0">
      <div id="no-users">
         <div id="modal">
          <div id="modal-header">
            <h3>We didn't find the user</h3> 
            <button id="btn-close" @click="closeModal()">X</button>
        </div>
        <div id="modal-body">
          <p>No user found</p>
        </div>
      </div>
      </div>
    </div>
    </transition>

    </div>
  </div>
</template>
<script>
import User from '../components/User';


import { mapGetters } from 'vuex';

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
     ...mapGetters(['FilteredUsers'])
  },
  mounted() {
    this.$store.dispatch("getUsers");
  },
  methods: {
    infoUser (infosUser) {
      this.id = infosUser;
    },
     closeModal() {
      document.querySelector("#no-users").style.display="none"
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


#no-users{
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
  width: 30%;
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


.modal-enter-active, .modal-leave-active{
transition: opacity 0.2s ease-in-out
}
.modal-enter-active {
  transition-delay: 0.2s;
}
.modal-enter, .modal-leave-to {
opacity: 0;
}
.modal-enter-to, .modal-leave {
   opacity: 1;
}
</style>