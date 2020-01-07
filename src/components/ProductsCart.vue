<template>
  <div>
    <h1>Products</h1>

    <!-- de shoes en brands krijg je binnen via props en dit geef je door naar ProductItem -->
    <div class="flexbox">
      <div class="product" v-for="cartShoe in cartShoes" v-bind:key="cartShoe.id">
        <CartItem v-bind:cartShoe="cartShoe"/>
      </div>
    </div>
  </div>
</template>

<script>
import CartItem from './CartItem.vue';


export default {

  name: 'Products',
  components:{
    CartItem
  },
  props: ["cartShoes",""]
}
</script>


<style scoped>

.product{
  width: 25%;
  padding: 10px;
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
