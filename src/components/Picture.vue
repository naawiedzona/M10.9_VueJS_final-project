<template>
  <div>
    <h1 id="title">Pictures in Album</h1>
    <h1>Album {{ $route.params.id }}</h1>
    <div class="pictures-in-album">
    <div class="picture" v-for="(picture, index) in pictures" :key="index"> 
    <img :src="picture.url" @click="infoPicture()">
    </div>
    <!--     en el modal ->       {{albumId}}   {{url}}  {{thumbnailUrl}}       -->
    </div>
     <div id="moreInfo">
        <div id="modal">
          <div id="modal-header">
            <h3>Consulted picture</h3> 
            <button id="btn-close" @click="closeModal()">X</button>
        </div>
        <!--     modal body     -->
        <p>asdefd</p>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: 'Picture',
  components: {
   
  },
  props: [
    'albumId' , 'id' , 'title' , 'url' , 'thumbnailUrl'
  ],
  methods: {
    infoPicture () {
      this.$emit('moreInfo', this.id);
      document.querySelector("#moreInfo").style.display="block"
    },
    closeModal() {
      document.querySelector("#moreInfo").style.display="none"
    }
  },
  computed:{
      pictures () {
      return this.$store.state.pictures;
    },
  mounted() {
    return this.$store.dispatch("getPictures");
  } 
  }
}
</script>
<style scoped>
.pictures-in-album{
  display: flex;
  justify-content: center;
  align-items: stretch;
  flex-wrap: wrap;
}
.picture{
  width: 20%;
  margin: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
}
.picture:hover{
  opacity: 0.7;
}
#title {
  color: #42b983;
  margin: 30px;
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
  margin-top: 50px;
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