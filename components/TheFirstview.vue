<template>
  <div class="TheFirstview" v-if='!showFlag'>
    <div class="TheFirstviewTransition" v-if='!killed'>
      <img :src="LogoImage" alt="" class="TheLoading_Logo_Image">
      <!-- <BarLoader class="BarLoader" color="#282828" height=1></BarLoader> -->
      <SquareLoader size=24 class="Loader"></SquareLoader>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import { BarLoader } from '@saeris/vue-spinners'
import { CircleLoader } from '@saeris/vue-spinners'
import { SquareLoader } from '@saeris/vue-spinners'

// import TheLogo from '~/components/TheLogo.vue'

export default {
  data(){
    return {
      LogoImage: "/All/logo.png",
      number: 0,
      intervalId: undefined,
      // logoImg: "/home/logo.png",
      logoImg: "/home/logo_gray.png",
      // nameImg: "/home/name.png",
      nameImg: "/home/name_gray.png",
      loadingText: "LOADING NOW ...",
      showFlag: false,
    }
  },
  components: {
    BarLoader,
    CircleLoader,
    SquareLoader
  },
  computed: {
    ...mapGetters({
      killed: 'firstview/killed',
      completed: 'firstview/completed',
      entered: 'firstview/entered'
    })
  },
  mounted() {
    const userAgent = window.navigator.userAgent.toLowerCase();
    if (userAgent.indexOf("msie") != -1 || userAgent.indexOf("trident") != -1) {
      console.log("お使いのブラウザには対応しておりません")
      this.showFlag = true
    }
    let self = this;
    this.intervalId = setInterval(function() {
      self.number += 1
      if(self.number == 2){
         self.$store.commit("firstview/complete");
         self.loadingText = "COMPLETED"
        //  self.$store.commit("homeFadeIn");
        //  self.$store.commit("about/aboutMoved");
      }
    }, 1000)
  },
  beforeDestroy() {
    clearInterval(this.intervalId);
  },
   watch: {
    async completed(val) {
      requestAnimationFrame(() => {
        TweenMax.to(
          ".Loader",
          0.4,
          {
            display: "none",
            opacity: 0,
            ease: Expo.easeOut,
          },
          0.1
        );
      });
      await this.$delay(400);
      requestAnimationFrame(() => {
        TweenMax.to(
          ".TheLoading_Logo_Image",
          1,
          {
            display: "block",
            opacity: 1,
            filter: "blur(0px)",
            ease: Expo.easeOut,
          },
          0.1
        );
      });
      // requestAnimationFrame(() => {
      //   TweenMax.to(".TheLoading_Logo_Image", 0.2, {
      //     filter: "blur(0px)",
      //     ease: Expo.easeIn
      //   })
      // })
      this.$store.commit("firstview/enter");
    },
     async entered(val) {
       await this.$delay(1500);
      //  requestAnimationFrame(() => {
      //   TweenMax.staggerTo(".TheFirstviewTransition", 0.55, {
      //     x: '100%',
      //     ease: Expo.easeIn
      //   },0.04)
      // })
      requestAnimationFrame(() => {
        TweenMax.to(".TheFirstview", 0.4, {
          opacity: 0,
          // filter: "blur(5px)",
          ease: Expo.easeIn
        })
      })
      // await this.$delay(3000);
      //  requestAnimationFrame(() => {
      //   TweenMax.staggerTo(".TheFirstview", 0.1, {
      //     x: '100%',
      //     ease: Expo.easeIn
      //   })
      // })
      // // await this.$delay(3000);
      // // this.$store.commit("homeFadeIn");
      // // this.$store.commit("about/aboutMoved");
      await this.$delay(3000);
      this.$store.commit("firstview/kill");
     }
   },
}
</script>

<style>
.TheLoading_Logo_Image{
  width: 48px;
  margin-bottom: 12px;
  display: none;
  opacity: 0;
  filter: blur(4px);
}


.TheFirstview{
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 40;
  overflow: hidden;
  /* // padding-top: 320px; */
  pointer-events: none;
}

.TheFirstviewTransition{
  background: #ffffff;
  /* background: #FCBBC8; */
  position: relative;
  top: 0%;
  left: 0;
  width: 100%;
  /* height: 20%; */
  height: 100%;
  display: flex;
  justify-content :center;
  align-items: center;
  flex-direction: column;
  pointer-events: auto;
}
.TheFirstview_Text{
  margin: 0 auto;
  text-align: center;
  font-size: 12px;
  font-weight: bold;
  font-family: "Brandon-Regular", sans-serif;
  font-weight: 700;
  margin-bottom: 8px;
  color: #d1d1d1;
}
.TheFirstview_Logo{
  /* // width: 56px;
  // height: 56px; */
  width: 24px;
  height: 30px;
  padding-bottom: 12px;
  margin-right: 8px;
  display: inline-block;
  animation: rotate 3000ms ease-out 2;
}
.TheFirstview_Name{
  padding-bottom: 16px;
  height: 20px;
  display: none;
  opacity: 0;
  margin-left: 12px;
}
/* 
// @keyframes rotate {
//   0%  {transform: rotateZ(0deg);}
//   25% {transform: rotateZ(90deg);}
//   50% {transform: rotateZ(180deg);}
//   75%  {transform: rotateZ(270deg);}
//   100%  {transform: rotateZ(360deg);}
// } */

.TheFirstview_PercentText{
  font-size: 24px;
}


.BarLoader{
  margin: 0 auto;
  width: 52px;
}
</style>



