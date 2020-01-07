<template lang="html">
  <div class="">
    <Breadcrumbs v-bind:items="items"/>
    <div class="flexbox">
      <v-img class="img"  v-bind:src="shoe.imageLink"></v-img>
      <div class="">
        <!-- INFOSECTION -->
        <h1>{{shoe.brand}} - {{shoe.name}} </h1>
        <div> price: <span v-bind:class="{onSale:shoe.onSale}"> $ {{shoe.price}}</span> <span v-bind:class="{displaynone:!shoe.onSale}">$ {{shoe.newPrice}}</span></div>
        <p>available size: {{shoe.size}}</p>

          <!-- Als OutOfStock true is dan krijgt het "disabled" -->
          <v-btn v-if="shoe.OutOfStock" disabled color="orange" text >Add to card </v-btn>
          <v-btn @click="addToCard(shoe.id, shoe.name, shoe.newPrice, shoe.brand, shoe.size, shoe.imageLink)" v-else color="orange" dark @click.stop="dialog = true" > Add to card</v-btn>

        <!-- REVIEWSECTION -->
        <div class="reviewsection">
          <Rating v-bind:shoe="shoe" />
        </div>
      </div>
    </div>


    <v-dialog v-model="dialog" max-width="400">
        <v-card>
          <v-card-title class="headline">Added to shopping cart!</v-card-title>

          <v-card-text>
            The shoes: {{shoe.name}} have been succesfully added to your shoppingcart. Would you like to continue shopping or view your current shopping cart?
          </v-card-text>

          <v-card-actions>
            <v-btn color="green darken-1" text @click="dialog = false" >Stay on page</v-btn>
            <v-spacer></v-spacer>
            <router-link :to="`/${$i18n.locale}/cart`"><v-btn color="green darken-1" text @click="dialog = false">View Cart</v-btn></router-link>
          </v-card-actions>
        </v-card>
  </v-dialog>


  </div>
</template>

<script>
import axios from 'axios';
import Breadcrumbs from '../components/Breadcrumbs.vue';
import Rating from '../components/Rating.vue';

export default {
  name:"ProductDetail",
  components:{
    Breadcrumbs,
    Rating
  },
  data(){
    return{
      productID: this.$route.params.id,
      shoe:[],
      dialog: false,
      items: [
          {
            text: 'Home',
            disabled: false,
            href: '/',
          },
          {
            text: this.$route.params.id,
            disabled: false,
            href: '',
          },

        ]
    }
  },
  created(){
    axios.get('https://my-json-server.typicode.com/Katodebock/json/shoes/'+this.productID).then(res=>this.shoe=res.data);
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

<style lang="css" scoped>
.flexbox{
  padding-top: 20px;
}

.flexbox>div{
  width: 45%;
  padding: 20px 0px 0px 40px;
}
.flexbox>.img{
  width: 55%;
  padding: 20px;
}

.onSale{
  color:red;
  text-decoration: line-through;
}

.displaynone{
  display: none;
}

.img{
  transition: all .2s ease-in-out;
}

.img:hover{
  transform: scale(1.02);
}


</style>
