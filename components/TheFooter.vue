<template>
  <footer class="TheFooter">
    <p class="TheFooter_Text">© ittan</p>
  </footer>
</template>
<script>

export default {
  data() {
    return {
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
.TheFooter{
  width: 100%;
  z-index: 2;
  background: #f9f9f9;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.TheFooter_Text{
  font-family: 'Bodoni';
  text-align: center;
  color: #b2b2b2;
  font-size: 12px;
}

</style>
