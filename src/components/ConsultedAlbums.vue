<template>
  <div class="consulted-pictures">
    <h1 id="title">Consulted Pictures</h1>
  <div v-for="picture of pictures" :key="picture.id">
    <p class="list" v-if="picture.count>0">{{picture.title}} <span>{{picture.count}}</span></p>
  </div>
  </div>
</template>
<script>


export default {
  name: 'ConsultedPictures',
  components: {
   
  },
    computed:{
  pictures() {
    return this.$store.state.pictures
    }
  }
}
</script>
<style scoped>
.consulted-pictures{
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