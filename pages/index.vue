<template>
  <div class="TheHome">
    <a class="TheHome_Work_Countainer" id="meta-window" @click="routing('meta-window',$event)">
      <!-- <transition> -->
        <img :src="image01" alt="" class="TheHome_Work_Image FadeIn">
      <!-- </transition> -->
      <h3 class="TheHome_Work_Heading FadeIn">Meta Window</h3>
    </a>
    <a class="TheHome_Work_Countainer FadeIn">
      <!-- <transition> -->
        <img :src="comingsoonImage" alt="" class="TheHome_Work_Image_ComingSoon FadeIn">
      <!-- </transition> -->
    </a>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import {mapGetters} from 'vuex'

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
   computed: {
    ...mapGetters({
      killed: 'firstview/killed',
      entered: 'firstview/entered',
    })
  },
  mounted() {
    this.fadeIn()
  },
  methods: {
    async routing(url,event){
      console.log(event.path[1].id)
      console.log(url)
      const element_id = "#" + event.path[1].id
      // requestAnimationFrame(() => {
      //   TweenMax.to(
      //     element_id,
      //     1,
      //     {
      //       top: 0,
      //       left: 0,
      //       ease: Expo.easeOut,
      //     },);
      // // });
      // await this.$delay(2000);
      this.$router.push(url)
    },
      
      // if(this.$route.path != '/'){
      //   this.$store.commit('homeClick')
      // }
      // if (this.headerActive == true){
      //   this.toggleMenu()
      // }
    fadeIn(){
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
    }
  },
  watch: {
    async entered(val) {
      requestAnimationFrame(() => {
        TweenMax.to(
          ".FadeIn",
          0.1,
          {
            opacity: 0,
            ease: Expo.easeOut,
          });
      });
      await this.$delay(2000)
      this.fadeIn()
    }
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
  filter: drop-shadow(0px 0px 4px 0px rgba(118, 118, 118, 0.4));
  transition: 0.2s;
}
.TheHome_Work_Image:hover{
  filter: drop-shadow(0px 0px 10px 0px rgba(0, 0, 0, 0.4));
  /* width: 102%;   */
}
.TheHome_Work_Image_ComingSoon{
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
