<template>
  <div class="album">
    <h2
    id="title">Album {{album}}</h2>
    <router-link :to="'/pictures/album/'+album"><button class="btn-check">Check this album</button></router-link>
  </div>
</template>

<script>


export default {
  name: 'Album',
  components: {
   
  },
  props:[
      'album'
  ]
}
</script>
<style scoped>
#title {
  color: #42b983;
}
button{
  padding: 10px;
  background: #42b983;
  color: white;
  border: 1px solid #42b983;
  width:60%;
}

button:hover{
  background: white;
  color:#42b983;
}
</style>