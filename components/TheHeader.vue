<template>
  <header class="TheHeader">
    <div class="TheHeader_Countainer">
    <h1 class="TheHeader_Logo" @click="routing('/')">
      <LogoSvg class="TheHeader_Logo_Image"></LogoSvg>
    </h1>
    <a class="TheHeader_Link" @click="routing('/')" v-if="this.$route.path == '/about'">Works</a>
    <a class="TheHeader_Link" @click="routing('/about')" v-else>About Us</a>
    <!-- <a class="TheHeader_Link" @click="routing('/about')" v-if="this.$route.path == '/'">About Us</a> -->
    </div>
  </header>
</template>
<script>

import LogoSvg from '@/assets/All/logo.svg'

export default {
  data() {
    return {
      // LogoImage: "/All/logo.png",
      // LogoImage: "/All/sns_twitter.svg",
    }
  },
  components: {
    LogoSvg,
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
}
.TheHeader{
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
}
.TheHeader_Countainer{
  padding: 24px 24px 0px 24px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  display: flex;
}

.TheHeader_Link{
  display: block;
  text-decoration: none;
  color: #282828;
  /* color: #ffffff; */
  padding-top: 14px;
  cursor: pointer;
  transition: 0.2s;
}
.TheHeader_Link:hover{
  color: #949494;
}
.TheHeader_Logo{
  cursor: pointer;
}
.TheHeader_Logo_Image{
  fill: #000;
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
  
}
.TheHeader_Countainer{
  width: 720px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 32px 20px 0px 20px;
}
}


</style>
