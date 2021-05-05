<template>
  <div class="user">
    <h2
    id="title">{{name}}</h2>
    <!-- <p>id {{id}}</p>
    <p>username {{username}}</p>
    <p>email {{email}}</p>
    <p>adress {{adress}}</p> -->
    <button @click="infoUser()">More information</button>
  </div>
  
</template>

<script>


export default {
  name: 'User',
  components: {
   
  },
  props:['name','id', 'username', 'email', 'adress'],
  methods: {
    infoUser() {
      alert(this.id)
    }
  }
}
</script>
<style scoped>
.user{
  border: 1px solid #42b983;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 20%;
  margin: 40px;
  padding: 20px;
  min-height: 200px;
}

#page-title {
  color: #42b983;
  margin: 40px;
}
#title{
   color: #42b983;
}

button {
  width:60%;
  margin: 0 auto;
  padding: 10px;
  border: 1px solid #42b983;
  color: white;
  background:#42b983;
}

button:hover{
  color: #42b983;
  background: white;
}
</style>
