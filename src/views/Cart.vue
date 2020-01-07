<template>
  <div class="cart">
    <Breadcrumbs v-bind:items="items"/>
    <h1>Your Shoppingcart</h1>
    <ProductsCart v-bind:cartShoes="cartShoes"/>
      <router-link :to="`/${$i18n.locale}/succes`"><v-btn color="indigo"> Pay now </v-btn></router-link>
  </div>
</template>


<script>
import axios from 'axios';
import Breadcrumbs from '../components/Breadcrumbs.vue';
import ProductsCart from '../components/ProductsCart.vue';
export default {
  name:"About",
  components:{
    Breadcrumbs,
    ProductsCart
  },
  data:() => ({
    items: [
        {
          text: 'Home',
          disabled: false,
          href: '/',
        },
        {
          text: 'cart',
          disabled: true,
          href: '/cart',
        }
      ],
    cartShoes:[],
  }),
  async created(){
    try{
      const res = await axios.get(`https://my-json-server.typicode.com/Katodebock/json/shoppingCart`);
        this.cartShoes = res.data;
    }catch(e){
      console.error(e);
    }
  }
};
</script>

<style lang="css" scoped>
</style>
