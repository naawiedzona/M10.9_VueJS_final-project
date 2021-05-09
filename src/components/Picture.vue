<!--                          Album  with the images               -->
<template>
  <div>
    <button id="btn-prev" @click="$router.go(-1)">Back</button>
    <h1 id="title">Album {{ $route.params.id }}</h1>
    <div class="pictures-in-album">
    <div class="picture" v-for="(picture, index) in picturesbyAlbum" :key="index"> 
    <img class="picture-box" :src="picture.url" @click="infoPicture()">
<transition name="modal">
     <div id="moreInfo">
        <div id="modal">
          <div id="modal-header">
            <h3>Consulted picture</h3> 
            <button id="btn-close" @click="closeModal()">X</button>
        </div>
        <!--     modal body     -->
        <div class="modal-body">
        <h3><span>Picture title: </span>{{ picture.title | upperCase }}</h3>
        <h3><span>Picture id: </span>{{picture.id}}</h3>
        </div>
        <img :src="picture.thumbnailUrl">
        <p></p>
      </div>
    </div>
</transition>

    </div>
    </div>
    
  </div>
</template>
<script>
export default {
  name: 'Picture',
  methods: {
    infoPicture () {
      // thid.id
      this.$store.commit('infoPictureStore', this.id);
      document.querySelector("#moreInfo").style.display="block";
    },
    closeModal() {
      document.querySelector("#moreInfo").style.display="none";
    }
  },
    computed:{
      pictures () {
      return this.$store.state.pictures;
    },
      mounted() {
      return this.$store.dispatch("getPictures");
    },
      picturesbyAlbum () {
        return this.pictures.filter((picture) => picture.albumId==this.$route.params.id);
      }
  },
  
  filters:{
    upperCase: function(value) {
      return value.charAt(0).toUpperCase() + value.slice(1);
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

.picture-box:hover{
  opacity: 0.7;
}
#title {
  color: #42b983;
  margin: 30px;
}
#moreInfo{
  display: none;
  z-index: 2;
  background: rgba(0, 0, 0, 0.849);
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
  width:60%;
  margin: 0 auto;
  margin-top: 150px;
}
#modal-header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  background:black;
}
.modal-body {
  padding: 10px;
}
h3{
  display: flex;
}
h3 span {
  color: black;
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
}

.modal-enter-active, .modal-leave-active{
transition: opacity 0.2s ease-in-out;
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