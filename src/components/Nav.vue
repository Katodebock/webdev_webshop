<template lang="html">
  <div>
    <div id="login">
      <Login  />
    </div>

    <!--{{$t('About')}} is how you get the translation from nl.json or en.json -->
    <v-btn text color="white lighten-2" dark><router-link :to="`/${$i18n.locale}`" >{{$t('Home')}}</router-link> </v-btn>
    <v-btn text color="white lighten-2" dark>  <router-link :to="`/${$i18n.locale}/about`"> {{$t('About')}}</router-link></v-btn>
    <v-btn text color="white lighten-2" dark>  <router-link :to="`/${$i18n.locale}/cart`"> {{$t('Cart')}}</router-link></v-btn>
    <v-btn text color="white lighten-2" dark>  <router-link :to="`/${$i18n.locale}/faq`">{{$t('FAQ')}}</router-link></v-btn>
    <v-btn text color="white lighten-2" dark>  <router-link :to="`/${$i18n.locale}/faq/delivery`">{{$t('TOD')}}</router-link></v-btn>
    <v-btn text color="white lighten-2" dark>  <router-link :to="`/${$i18n.locale}/faq/payments`">{{$t('TOP')}}</router-link></v-btn>
    <v-btn text color="white lighten-2" dark>  <router-link :to="`/${$i18n.locale}/admin`">Admin</router-link></v-btn>
  </div>

</template>

<script>
import Login from './Login.vue';
export default {
  name:"Nav",
  components:{
    Login
  }
}
</script>

<style lang="scss" scoped>
$orange: #FFAA2D;
a.router-link-exact-active {
	color: $orange;
}
button{
  display: block;
  width: 100%;

  a {
  color: inherit; }
}

#login{
  margin-left: 88px;
}


</style>
