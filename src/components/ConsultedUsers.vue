<template>
  <div class="consulted-users">
    <h1 id="title">Consulted Users</h1>
  <div v-for="user of users" :key="user.id">
    <p class="list" v-if="user.count>0">{{user.name}} <span>{{user.count}}</span></p>
  </div>
  </div>
</template>
<script>


export default {
  name: 'ConsultedUsers',
  components: {
   
  },
    computed:{
  users() {
    return this.$store.state.users
    }
  }
}
</script>
<style scoped>
.consulted-users{
    border: 1px solid #42b983;
    margin: 20px;
    padding: 10px;
    max-width: 40%;
}
#title {
  color: #42b983;
}
.list{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.list span {
  margin-left: 20px;
  color: #42b983;
}
</style>