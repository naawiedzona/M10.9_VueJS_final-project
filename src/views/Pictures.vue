<template>
  <div class="pictures">
    <button id="btn-prev" @click="$router.go(-1)">Back</button>
    <h1 id="page-title">Gallery</h1>
    
    <div class="albums-container">
      <Album class="album"
      v-for="(album, index) in albums" :key="index"
      :album="album"></Album>
    </div>
   
  </div>
</template>
<script>

import Album from '../components/Album'

export default {
  name: 'Pictures',
  components: {
  Album
  },
   computed: {
      albums(){
      let noRepeated = [];
      this.pictures.filter((picture)=>{
        noRepeated.includes(picture.albumId) ? false : noRepeated.push(picture.albumId)
      })
     return noRepeated
    },
    pictures () {
      return this.$store.state.pictures;
    }
  },
  mounted() {
    this.$store.dispatch("getPictures");
  }
}
</script>
<style scoped>
#page-title {
  color: #42b983;
  margin: 40px;
  
}

.albums-container{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
}
.album{
  width: 23%;
  margin: 40px;
  padding: 10px;
  border: 1px solid #42b983;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: stretch;
  height: 200px;
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