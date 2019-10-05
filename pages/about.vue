<template>
  <div class="TheAbout">
    <h2 class="TheAbout_Heading FadeIn" @click="hoge">About Us</h2>
    <p class="TheText TheAbout_Text FadeIn">
      "ittan"はテクノロジーによりファッションの新しい可能性を探索するクリエイティブ集団。<br>
      2019年に岸裕真・芳賀健・中村直人を中心に結成され、同年10月から国内ブランドとの共同開発を開始。
      日本伝統の文化に根ざした新しい表現のために、デザイナーのための技術開発から映像作品やインスタレーション制作などを中心に活動中。
    </p>
    <img :src="AboutImage" alt="ittan" class="TheAbout_Image FadeIn" />
     <h2 class="TheAbout_Heading FadeIn">Contact</h2>
     <p class="TheText TheAbout_Text FadeIn">
      E-mail : ittan.office@gmail.com
    </p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      AboutImage: "/About/ittan.png"
    };
  },
  components: {},
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
    hoge() {
    //   await this.$delay(120);
      
    }
  }
};
</script>

<style>
.TheAbout {
  width: 100%;
  padding: 80px 20px 120px 20px;
  margin: 0 auto;
}
.TheAbout_Heading {
  font-family: "Bodoni";
  font-weight: normal;
  font-size: 32px;
  margin-top: 20px;
  margin-bottom: 20px;
}
.TheAbout_Text {
    margin-bottom: 20px;
}
.TheAbout_Image {
  width: 100%;
  filter: drop-shadow(0px 0px 10px rgba(118,118,118,0.1));
  margin-bottom: 32px;
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
.TheAbout {
  width: 720px;
  padding: 80px 20px 120px 20px;
}

}
</style>