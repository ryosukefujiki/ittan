<template>
  <div class="TheWork">
    <img :src="image01" alt="" class="TheWork_HeadImage">
    <div class="TheWork_Countainer">
      <div class="TheWork_Heading_Countainer">
       <h1 class="TheWork_Heading FadeIn">Meta Window</h1>
        <p class="TheWork_Time FadeIn">2019.10.07</p>
      </div>
      <p class="TheText TheWork_Text FadeIn">
        深層学習によって高次元の空間に生み出されたHATRAという存在に、三次元空間のHATRAを求める人間が干渉していく様を探索する様とつながるための窓である。本作品に用いられたGANは深層学習の生成モデルの一種である。多様体仮説に基づき二次元データであるHATRAのこれまでのルックを元に、N次元空間においてドメインを構築する。鑑賞者の振る舞いは生成の種となり、ドメインにおける新たなHATRAの表現が探索されていく。人による干渉が行われると、ニューロンは活性化され具象化によって呼応しようとする。それに対し、不干渉はニューロンの動きを抑え、具象を忘却させていく。
      </p>
      <img :src="image01" alt="" class="TheWork_Image FadeIn">
      <img :src="image02" alt="" class="TheWork_Image FadeIn">
    </div>
  </div>
</template>

<script>
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
  },
}
</script>

<style>
.TheWork{
  height: 100%;
}
.TheWork_HeadImage{
  width: 100%;
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
  /* width: 100%; */
  height: 720px;
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
