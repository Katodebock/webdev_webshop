<template>
  <div id="app">
    <Breadcrumbs v-bind:items="items"/>
    <!-- Je geeft hier shoes en brands uit de json mee naar Products -->
    <Products v-bind:shoes="shoes" v-bind:brands="brands"   />

  </div>
</template>

<script>
import axios from 'axios';
import Products from '../../components/Products.vue';
import Breadcrumbs from '../../components/Breadcrumbs.vue';

export default {
  name: 'Adidas',
  components: {
    Products,
    Breadcrumbs
  },
  //data() en async created zijn hoe je de informatie van de json binnenhaalt

  data: () => ({
    shoes:[],
    brands:[],
    items: [
        {
          text: 'Home',
          disabled: false,
          href: '/',
        },
        {
          text: 'Brand: Adidas',
          disabled: true,
          href: '/adidas',
        }
      ],
    }),
  async created(){
    try{
      const res = await axios.get(`https://my-json-server.typicode.com/Katodebock/json/shoes?brand=Adidas`);
      this.shoes = res.data;
    } catch (e){
      console.error(e);
    }
  }
}
</script>

<style>



</style>
