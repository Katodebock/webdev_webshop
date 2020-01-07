<template>
  <div>
    <h1>Products</h1>
    <v-btn color=" indigo" dark ><router-link rel="prefetch" :to="`/${$i18n.locale}/`"> ALL PRODUCTS </router-link></v-btn>
    <v-btn color=" indigo" dark ><router-link rel="prefetch" :to="`/${$i18n.locale}/stock`"> only items in stock </router-link></v-btn>
    <v-btn color=" indigo" dark ><router-link rel="prefetch" :to="`/${$i18n.locale}/priceasc`"> PRICE LOW-HIGH </router-link></v-btn>
    <v-btn color=" indigo" dark ><router-link rel="prefetch" :to="`/${$i18n.locale}/pricedesc`"> PRICE HIGH-LOW </router-link></v-btn>
    <v-btn color=" indigo" dark ><router-link rel="prefetch" :to="`/${$i18n.locale}/nike`" > Nike </router-link></v-btn>
    <v-btn color=" indigo" dark ><router-link rel="prefetch" :to="`/${$i18n.locale}/airjordan`" > Air Jordan </router-link></v-btn>
    <v-btn color=" indigo" dark ><router-link rel="prefetch" :to="`/${$i18n.locale}/adidas`" > Adidas </router-link></v-btn>
    <!-- de shoes en brands krijg je binnen via props en dit geef je door naar ProductItem -->
    <div class="flexbox">
      <div class="product" v-for="shoe in shoes" v-bind:key="shoe.id">
        <ProductItem v-bind:shoe="shoe" v-on:addCard="$emit('addCard', shoe.id, shoe.name, shoe.newPrice, shoe.brand, shoe.size, shoe.imageLink)" />
      </div>
    </div>
  </div>
</template>

<script>
import ProductItem from './ProductItem.vue';


export default {
  name: 'Products',
  components:{
    ProductItem
  },
  props: ["shoes","brands"]
}
</script>


<style scoped lang="scss" >

h1{margin-left: 10px;}

.product{
  width: 25%;
  padding: 10px;
}

button{
  margin: 10px;
  a {
  color: inherit; }
}

@media  (max-width: 800px) {
  .product{
    width: 33%;
  }
}

@media  (max-width: 650px) {
  .product{
    width: 50%;
  }
}


</style>
