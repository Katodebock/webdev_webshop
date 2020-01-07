<template>
  <div id="app">
    <Breadcrumbs v-bind:items="items"/>
    <!-- Je geeft hier shoes en brands uit de json mee naar Products -->
    <Products v-bind:shoes="shoes" v-bind:brands="brands" v-on:addCard="addToCard"  />

  </div>
</template>

<script>
import axios from 'axios';
import Products from '../components/Products.vue';
import Breadcrumbs from '../components/Breadcrumbs.vue';

export default {
  name: 'Home',
  components: {
    Products,
    Breadcrumbs,
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
        }
      ],
    }),
  async created(){
    try{
      const res = await axios.get(`https://my-json-server.typicode.com/Katodebock/json/shoes`);
      const res2 = await axios.get(`https://my-json-server.typicode.com/Katodebock/json/brands`);
      this.shoes = res.data;
      this.brands = res2.data;
    } catch (e){
      console.error(e);
    }
  },
  methods:{
    addToCard(id, name, newPrice, brand, size, imageLink){
      axios.post('https://my-json-server.typicode.com/Katodebock/json/shoppingCart',{
        id: id,
        name: name,
        newPrice: newPrice,
        brand: brand,
        size: size,
        imageLink: imageLink
      }).then(resp => {
        console.log(resp.data);
      })
    }
  }
}
</script>

<style>



</style>
