<template lang="html">
  <v-footer  color="indigo" dark padless >
  <v-card class="flex" flat tile >
    <v-card-title dark class="indigo justify-center">
      <a rel="dns-prefetch" href="//www.facebook.com" target="_blank"><img class="socialicon" src="../../assets/icons/facebook.svg" alt="facebook logo" ></a>
      <a rel="dns-prefetch" href="//www.instagram.com" target="_blank"><img class="socialicon" src="../../assets/icons/instagram.svg" alt="instagram logo"></a>
      <a rel="dns-prefetch" href="//www.google.com" target="_blank"><img class="socialicon" src="../../assets/icons/google-plus.svg" alt="google plus logo"></a>
      <div class="footertext">
        {{ new Date().getFullYear() }} — <strong> Limited Sneaker Co.</strong>
      </div>
    </v-card-title>

  </v-card>
</v-footer>
</template>

<script>
export default {
  name:"Footer",

}
</script>

<style lang="scss" scoped>
footer{
  background: #333;
  color:#fff;
  text-align: center;
  padding: 10px;
}

footer a{
  color: #fff;
  padding-right: 5px;
}

.socialicon{
  width: 30px;
  filter: invert(89%) sepia(100%) saturate(0%) hue-rotate(145deg) brightness(105%) contrast(101%);
}

.v-card__title{
  padding: 5px;
  a{
    padding:0px 20px 0px 0px;
  }
  .footertext{
    padding: 0px 0px 10px 10px;
  }
}
</style>
