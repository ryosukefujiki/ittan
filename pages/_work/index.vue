<template>
  <div class="TheWork">
    <img :src="`${keyvisual.url}`" alt="" class="TheWork_HeadImage">
    <div class="TheWork_Countainer">
      <div class="TheWork_Heading_Countainer">
       <h1 class="TheWork_Heading FadeIn">{{ title }}</h1>
        <p class="TheWork_Time FadeIn">{{ dayFormat(date) }}</p>
      </div>
      <div class="TheWork_Body_Countainer FadeIn" v-for="content in contents" v-html="content.content"></div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import {mapGetters} from 'vuex'
import Logo from '~/components/Logo.vue'

export default {
    async asyncData({ params }) {
    const { data } = await axios.get(
      `https://ittan.microcms.io/api/v1/works/${params.work}`,
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
      image02: "/ALL/test_image02.jpg",
      year: 0,
    }
  },
  components: {
    Logo
  },
  mounted() {
      this.fadeIn()
  },
  computed: {
    ...mapGetters({
      killed: 'firstview/killed',
      completed: 'firstview/completed',
      entered: 'firstview/entered'
    })
  },
  methods: {
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
              y: "4px",
              opacity: 0
            }
          },
          0.1
        );
      });
    }
  },
  computed: {
    dayFormat: function () {
      return function(date) {
        const dateStr = new Date(date);
        return dateStr.getFullYear() + '.' + (dateStr.getMonth() + 1) + '.' + dateStr.getDate();
      }
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
.TheWork{
  min-height: calc(100vh - 32px);
}
.TheWork_HeadImage{
  width: 100%;
  
  object-fit: cover;
  background: url("/ALL/test_image.jpg");
}
.TheWork_Countainer{
  width: 100%;
  padding: 20px 20px 120px 20px;
  margin: 0 auto;
}
.TheWork_Heading_Countainer{
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
}
.TheWork_Heading{
  font-family: 'Bodoni';
  font-weight: normal;
  font-size: 20px;
}
.TheWork_Time{
  font-size: 12px;
  color: #646464;
  padding-top: 8px;
}
.TheWork_Body_Countainer p{
  font-size: 14px;
  line-height: 28px;
  margin-bottom: 12px;
}
.TheWork_Body_Countainer img{
  width: 100%;
  margin-bottom: 12px;
}
.TheWork_Body_Countainer iframe{
  width: 100%;
  height: calc((100vw - 40px)/16*9);
}
.TheWork_Body_ImgContainer{
  width: 100%;
  display:flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.TheWork_Body_ImgContainer img{
  width: 49%;
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
.TheWork_HeadImage{
  width: 100%;
  height: 400px;
  object-fit: cover;
  /* height: 20%; */
}
.TheWork_Countainer{
  width: 720px;
  padding: 40px 20px 120px 20px;
}
.TheWork_Heading{
  font-size: 32px;
}
.TheWork_Time{
  font-size: 20px;
  color: #646464;
  padding-top: 10px;
}
.TheWork_Body_Countainer p{
  margin-bottom: 20px;
}
.TheWork_Body_Countainer img{
  width: 100%;
  margin-bottom: 20px;
}
.TheWork_Body_Countainer iframe{
  width: 680px;
  height: calc(680px/16*9);
}
.TheWork_Body_ImgContainer img{
  width: 32%;
}


}


</style>
