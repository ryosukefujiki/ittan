<template>
  <div class="TheAbout">
    <h2 class="TheAbout_Heading FadeIn">About Us</h2>
    <p class="TheText TheAbout_Text FadeIn">
      機械学習, 空間デザイン, グラフィック, WEBディレクションなど専門性の高いスキルを持つ若手作家たちが集まり, 2019年に結成されました.
      伝統芸能, ファッション, イベントライブなど幅広い領域とコラボレーションしながら, テクノロジーと表現の可能性を追求しています.
    </p>
    <img :src="AboutImage" alt="ittan" class="TheAbout_Image FadeIn" />
    <h2 class="TheAbout_Heading FadeIn">Contact</h2>
    <p class="TheText TheAbout_Text FadeIn">
      <a href="mailto:ittan.ask@gmail.com" style="color: #272727;" target="_blank">ittan.ask @ gmail.com</a><br>
      担当者：Ken Haga
    </p>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import axios from "axios";

export default {
  data() {
    return {
      AboutImage: "/About/ittan.png",
      name: "",
      email: "",
      content: "",
      isSubmit: false,
      submitFalse: false
    };
  },
  components: {},
  mounted() {
    this.fadeIn();
  },
  computed: {
    ...mapGetters({
      killed: "firstview/killed",
      completed: "firstview/completed",
      entered: "firstview/entered"
    })
  },
  methods: {
    fadeIn() {
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
    onSubmit() {
      const params = new URLSearchParams();

      params.append("form-name", "contact"); // Forms使うのに必要
      params.append("name", this.name);
      params.append("email", this.email);
      params.append("content", this.content);

       let self = this
       axios.post("/", params)
        .then(function(response) {
            if (response["status"] == 200) {
                self.isSubmit = true;
                console.log("送信完了");
                self.submitFalse = false
            } else {
                self.submitFalse = true
                console.log("送信失敗");
            }
        }).catch(function(error) {
            self.submitFalse = true
            console.log("送信失敗");
        })
    },
  },
  watch: {
    async entered(val) {
      requestAnimationFrame(() => {
        TweenMax.to(".FadeIn", 0.1, {
          opacity: 0,
          ease: Expo.easeOut
        });
      });
      await this.$delay(2000);
      this.fadeIn();
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
  filter: drop-shadow(0px 0px 10px rgba(118, 118, 118, 0.1));
  margin-bottom: 32px;
}
.TheContact_Text {
  width: 100%;
  font-size: 16px;
}
input {
  width: 100%;
  background: #f9f9f9;
  height: 32px;
  border: 0;
  padding: 10px;
  font-size: 14px;
  color: #aaa;
  /* border:solid 1px #ccc; */
  margin: 0 0 20px;
  
}
textarea {
  resize: vertical;
  width: 100%;
  background: #f9f9f9;
  height: 120px;
  padding: 10px;
  border: 0;
  font-size: 14px;
  color: #aaa;
  margin: 0 0 20px;
}
textarea:focus {
  outline: 0;
  /* border:solid 1px #EEA34A; */
}
input:focus {
  outline: 0;
  /* border:solid 1px #EEA34A; */
}
button {
  outline: 0;
  font-family: "Bodoni";
  background: #fff;
  padding-top: 4px;
  font-size: 14px;
  text-align: center;
  width: 80px;
  margin: 0 auto;
  font-family: "bodoni", "游明朝", YuMincho, "ヒラギノ明朝 ProN W3",
    "Hiragino Mincho ProN", "HG明朝E", "ＭＳ Ｐ明朝", "ＭＳ 明朝", serif;
  transition: 0.2s;
  color: #282828;
  cursor: pointer;
  margin-bottom: 20px;
  border: none;
  border: 1px solid #ffffff;
  border-bottom: 1px solid #989898;
}
button:hover {
  background: #282828;
  border: 1px solid #282828;
  color: #ffffff;
}
.ButtonText {
  text-align: center;
}
.ErroeText {
  color: #cf6262;
}

@media screen and (min-width: 480px) {
  /*　画面サイズが480pxからはここを読み込む　*/
}
@media screen and (min-width: 768px) and (max-width: 1024px) {
  /*　画面サイズが768pxから1024pxまではここを読み込む　*/
  /* .TheHome{
    width: 720px; 
    padding: 200px 20px 120px 20px;
  } */
}
@media screen and (min-width: 1024px) {
  /*　画面サイズが1024pxからはここを読み込む　*/
  .TheAbout {
    width: 720px;
    padding: 80px 20px 120px 20px;
  }
}
</style>