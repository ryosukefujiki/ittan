<template>
  <div>
    <TheHeader></TheHeader>
    <nuxt />
    <TheFooter></TheFooter>
  </div>
</template>

<script>
import TheFirstview from "~/components/TheFirstview.vue";
import TheHeader from "~/components/TheHeader.vue";
import TheFooter from "~/components/TheFooter.vue";
export default {
  mounted() {
    if (window.navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/i)) {
      // console.log("sp");
    }
    const userAgent = window.navigator.userAgent.toLowerCase();
    if (userAgent.indexOf("msie") != -1 || userAgent.indexOf("trident") != -1) {
      // console.log('Internet Explorerをお使いですね');
      // this.$router.replace({ path: "sorry" });
    } else if (userAgent.indexOf("edge") != -1) {
      // console.log('Edgeをお使いですね');
    } else if (userAgent.indexOf("chrome") != -1) {
      // console.log('Google Chromeをお使いですね');
    } else if (userAgent.indexOf("safari") != -1) {
      // console.log('Safariをお使いですね');
    } else if (userAgent.indexOf("firefox") != -1) {
      // console.log('FireFoxをお使いですね');
    } else if (userAgent.indexOf("opera") != -1) {
      // console.log('Operaをお使いですね');
    } else {
      // console.log('そんなブラウザは知らん');
    }
  },
  components: {
    TheHeader,
    TheFooter,
    TheFirstview,
  },
  data() {
    return {
    };
  },
}

</script>
<style>
@font-face {
  font-family: Bodoni;
  src: url("~assets/Font/bodoni.woff") format("woff"),
    url("~assets/Font/bodoni.ttf") format("truetype"),
    url("~assets/Font/bodoni.otf") format("otf");
}

/* @font-face {
  font-family: aone;
  src: url("~assets/Font/aone.woff") format("woff"),
    url("~assets/Font/aone.ttf") format("truetype"),
    url("~assets/Font/aone.otf") format("otf");
} */


html,body{
  width: 100%;
}


html {
  /* font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif; */
  font-family: 'bodoni',"游明朝", YuMincho, "ヒラギノ明朝 ProN W3", "Hiragino Mincho ProN", "HG明朝E", "ＭＳ Ｐ明朝", "ＭＳ 明朝", serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
