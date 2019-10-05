<template>
  <header class="TheHeader">
    <h1 class="TheHeader_Logo" @click="routing('/')">
      <img :src="LogoImage" alt="" class="TheHeader_Logo_Image">
    </h1>
    <a class="TheHeader_Link" @click="routing('/')" v-if="this.$route.path == '/about'">Works</a>
    <a class="TheHeader_Link" @click="routing('/about')" v-else>About Us</a>
    <!-- <a class="TheHeader_Link" @click="routing('/about')" v-if="this.$route.path == '/'">About Us</a> -->
  </header>
</template>
<script>

export default {
  data() {
    return {
      LogoImage: "/All/logo.png",
    }
  },
  components: {
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
.TheHeader{
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  padding: 24px 24px 0px 24px;
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.TheHeader_Link{
  display: block;
  text-decoration: none;
  color: #282828;
  padding-top: 14px;
  cursor: pointer;
}
.TheHeader_Logo{
  cursor: pointer;
}
.TheHeader_Logo_Image{
  width: 48px;
}

@media screen and (min-width:480px) { 
    /*　画面サイズが480pxからはここを読み込む　*/
}
@media screen and (min-width:768px) and ( max-width:1024px) {
    /*　画面サイズが768pxから1024pxまではここを読み込む　*/
  /* .TheHome{
    width: 720px; 
    padding: 200px 20px 120px 20px;
  } */
}
@media screen and (min-width:1024px) {
    /*　画面サイズが1024pxからはここを読み込む　*/
.TheHeader{
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  padding: 24px 120px 0px 120px;
  display: flex;
  justify-content: space-between;
  width: 100%;
}
}


</style>
