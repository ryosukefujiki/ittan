<template>
  <div class="TheHome">
    <div class="TheHome_Work_Countainer" @click="routing('meta-window')">
      <transition>
        <img :src="image01" alt="" class="TheHome_Work_Image FadeIn">
      </transition>
      <h3 class="TheHome_Work_Heading FadeIn">Meta Window</h3>
    </div>
    <div class="TheHome_Work_Countainer FadeIn">
      <transition>
        <img :src="comingsoonImage" alt="" class="TheHome_Work_Image FadeIn">
      </transition>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
   data() {
    return {
      image01: "/ALL/test_image.jpg",
      comingsoonImage: "/All/comingsoon.png",
    }
  },
  components: {
    Logo
  },
  mounted() {
      requestAnimationFrame(() => {
        TweenMax.staggerTo(
          ".FadeIn",
          4,
          {
            y: 0,
            opacity: 1,
            ease: Elastic.easeOut.config(1, 0.3),
            startAt: {
              y: "10px",
              opacity: 0
            }
          },
          0.1
        );
      });
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
  padding: 80px 20px 120px 20px;
  margin: 0 auto;
}
.TheHome_Work_Countainer{
  cursor: pointer;
  margin-bottom: 32px;
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
.TheHome{
  width: 720px; 
  padding: 140px 20px 120px 20px;
}
.TheHome_Work_Heading{
  font-family: 'Bodoni';
  font-weight: normal;
  font-size: 24px;
  margin-top: 8px;
}
.TheHome_Work_Countainer{
  margin-bottom: 64px;
}

}



</style>
