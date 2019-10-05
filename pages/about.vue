<template>
  <div class="TheAbout">
    <h2 class="TheAbout_Heading">About Us</h2>
    <p class="TheText TheAbout_Text">
      "ittan"はテクノロジーによりファッションの新しい可能性を探索するクリエイティブ集団。2019年に岸裕真・芳賀健・中村直人を中心に結成され、
      同年10月から国内ブランドとの共同開発を開始。日本伝統の文化に根ざした新しい表現のために、デザイナーのための技術開発から映像作品やインスタレーション制作などを中心に活動中。
    </p>
    <img :src="AboutImage" alt="ittan" class="TheAbout_Image" />
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
  methods: {
    hoge() {}
  }
};
</script>

<style>
.TheAbout {
  width: 100%;
  padding: 80px 20px 0px 20px;
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
}
</style>