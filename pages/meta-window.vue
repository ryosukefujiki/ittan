<template>
  <div class="TheWork">
    <img :src="image01" alt="" class="TheWork_HeadImage">
    <!-- <div class="TheWork_HeadImage"></div> -->
    <div class="TheWork_Countainer">
      <div class="TheWork_Heading_Countainer">
       <!-- <h1 class="TheWork_Heading FadeIn">Meta Window</h1> -->
       <h1 class="TheWork_Heading FadeIn">meta-window</h1>
        <p class="TheWork_Time FadeIn">2019.10.07</p>
      </div>
      <p class="TheText TheWork_Text FadeIn">
        深層学習によって構築された高次元空間における”HATRA”が、展示空間のHATRAに干渉する人々の動きにより探索される風景を切り取るための窓である。
      </p>
      <p class="TheText TheWork_Text FadeIn">
        本作品では、生成モデルの一手法Generative Adversarial Networks (GAN)を用いている。
      その手法内では、多様体仮説に基づきHATRAのルック写真を元に、
N次元空間において高次の”HATRA”の概念を表すドメインを構築する。
</p>
       <p class="TheText TheWork_Text FadeIn">
鑑賞者の振る舞いは生成の種となり、ドメインにおける新たなHATRAの表現が探索されていく。
人による干渉が行われると、ニューロンは活性化され具象化によって呼応しようとする。
それに対し、不干渉はニューロンの動きを抑え、具象を忘却させていく。
 </p>

      <img :src="image01" alt="" class="TheWork_Image FadeIn">
      <img :src="image02" alt="" class="TheWork_Image FadeIn">
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import Logo from '~/components/Logo.vue'

export default {
  data() {
    return {
      image01: "/ALL/test_image.jpg",
      image02: "/ALL/test_image02.jpg",
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
  height: 100%;
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
.TheWork_Text{
  margin-bottom: 12px;
}
.TheWork_Image{
  width: 100%;
  margin-bottom: 12px;
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
.TheWork_Text{
  margin-bottom: 20px;
}
.TheWork_Image{
  width: 100%;
  margin-bottom: 20px;
}
}


</style>
