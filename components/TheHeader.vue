<template>
  <header class="TheHeader">
    <h1 class="TheHeader_Logo">
      <img :src="LogoImage" alt="" class="TheHeader_Logo_Image">
    </h1>
  </header>
</template>
<script>

export default {
  data() {
    return {
      LogoImage: "/All/logo.png",
    }
  },
  components: {
  },
  methods: {
    hoge(){

    }
  },
}
</script>
<style>
.TheHeader{
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  padding: 24px 20px 0px 20px;
}
.TheHeader_Logo_Image{
  width: 48px;
}


</style>
