<!--    Album  with the images-->
<template>
  <div>
    <button id="btn-prev" @click="$router.go(-1)">Back</button>
    <h1 id="title">Album {{ $route.params.id }}</h1>
    <div class="pictures-in-album">
    <div class="picture" v-for="(picture, index) in pictures" :key="index"> 
    <img :src="picture.url" @click="infoPicture()">
    </div>
    </div>
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
  </div>
</template>
<script>
export default {
  name: 'Picture',
  methods: {
    infoPicture () {
      //this.$emit('moreInfo', this.id);
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
</style>