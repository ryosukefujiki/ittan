<template>
  <div class="TheHome">
    <nuxt-link class="TheHome_Work_Countainer" id="meta-window" :to="`/${content.id}`" v-for="content in contents" :key="content.id">
        <img :src="`${content.keyvisual.url}`" alt="" class="TheHome_Work_Image FadeIn">
      <h3 class="TheHome_Work_Heading FadeIn">{{ content.title }}</h3>
    </nuxt-link>
    <a class="TheHome_Work_Countainer FadeIn">
        <img :src="comingsoonImage" alt="" class="TheHome_Work_Image_ComingSoon FadeIn" @click="wiggle()">
    </a>
  </div>
</template>

<script>
import axios from 'axios'
import Logo from '~/components/Logo.vue'
import {mapGetters} from 'vuex'

export default {
  async asyncData() {
    const { data } = await axios.get(
      'https://ittan.microcms.io/api/v1/works',
      {
        headers: { 'X-API-KEY': 'ea702257-4ee9-42b1-a238-5928b97e5be9' }
      }
    )
    console.log(data)
    return data
  },
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
    async routing(url){
      // console.log(event.path[1].id)
      // console.log(url)
      // const element_id = "#" + event.path[1].id
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
    async wiggle(){
      requestAnimationFrame(() => {
        TweenMax.to(
          ".TheHome_Work_Image_ComingSoon",
          0.4,
          {
            rotationY: 16,
            ease: Expo.easeOut,
            // startAt: {
            //   y: "10px",
            //   opacity: 0
            // }
          });
      });
      await this.$delay(100)
      requestAnimationFrame(() => {
        TweenMax.to(
          ".TheHome_Work_Image_ComingSoon",
          0.4,
          {
            rotationY: -16,
            ease: Expo.easeOut,
            // startAt: {
            //   y: "10px",
            //   opacity: 0
            // }
          });
      });
      await this.$delay(100)
      requestAnimationFrame(() => {
        TweenMax.to(
          ".TheHome_Work_Image_ComingSoon",
          1,
          {
            rotationY: 0,
            ease: Expo.easeOut,
            // startAt: {
            //   y: "10px",
            //   opacity: 0
            // }
          });
      });
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
  display: block;
  cursor: pointer;
  text-decoration: none;
  margin-bottom: 32px;
}
.TheHome_Work_Heading{
  font-family: 'Bodoni';
  font-weight: normal;
  font-size: 16px;
  margin-top: 8px;
  color: #272727;
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
  /* transform: rotateY(20deg); */
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
