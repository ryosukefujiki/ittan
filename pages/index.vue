<template>
  <div class="TheHome">
    <div class="TheHome_Work_Countainer" @click="routing('meta-window')">
      <img :src="image01" alt="" class="TheHome_Work_Image">
      <h3 class="TheHome_Work_Heading">Meta-Window</h3>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
   data() {
    return {
      image01: "/ALL/test_image.jpg",
    }
  },
  components: {
    Logo
  },
  methods: {
    routing(url){
      this.$router.push(url)
      // if(this.$route.path != '/'){
      //   this.$store.commit('homeClick')
      // }
      // if (this.headerActive == true){
      //   this.toggleMenu()
      // }
    },
  },
}
</script>

<style>
.TheHome{
  width: 100%; 
  padding: 80px 20px 0px 20px;
}
.TheHome_Work_Countainer{
  cursor: pointer;
}
.TheHome_Work_Heading{
  font-family: 'Bodoni';
  font-weight: normal;
  font-size: 16px;
  margin-top: 8px;
}
p{
  /* font-family: 'aone'; */
}
.TheHome_Work_Image{
  width: 100%;  
}
</style>
