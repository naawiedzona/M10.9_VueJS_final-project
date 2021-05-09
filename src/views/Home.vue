<template>
  <div class="home">
    <button id="btn-prev" @click="$router.go(-1)">Back</button>
    <h1
    id="title">Home</h1>
    
    <div id="container">
      <consulted-users></consulted-users>
    <consulted-albums></consulted-albums>
    
    </div>
  </div>
</template>

<script>
import ConsultedUsers from '../components/ConsultedUsers'
import ConsultedAlbums from '../components/ConsultedAlbums'



export default {
  name: 'Home',
  components: {
   'consulted-users':ConsultedUsers,
   'consulted-albums':ConsultedAlbums
  }
}
</script>
<style scoped>
#title {
  color: #42b983;
  margin: 40px;
}
#container{
  display: flex;
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
</style>
