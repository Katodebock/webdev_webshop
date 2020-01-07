<template>
  <!-- Als OutOfStock true is dan krijgt het de class noStock -->
  <div class="containerProd">

      <v-card class="mx-auto hideOverflow" max-width="400"  hover >
        <router-link :to="`/${$i18n.locale}/shoe/` + shoe.id">
          <v-img
            class="white--text align- img"
            height="200px"
            v-bind:src="shoe.imageLink"
          ></v-img>
          <h3>{{shoe.name}}</h3>
          <v-card-subtitle class="pb-0">Left in stock: {{shoe.leftInStock}}</v-card-subtitle>
          <v-card-text class="text--primary">
            <div class="flexbox">
              <div>brand: {{shoe.brand}}</div>
              <div> price: <span v-bind:class="{onSale:shoe.onSale}"> $ {{shoe.price}}</span> <span v-bind:class="{displaynone:!shoe.onSale}">$ {{shoe.newPrice}}</span></div>
              <div>color: {{shoe.color}}</div>

              <div>size: {{shoe.size}}</div>
            </div>
          </v-card-text>
        </router-link>
        <v-card-actions>
          <!-- Als OutOfStock true is dan krijgt het "disabled" -->
          <v-btn v-if="shoe.OutOfStock" disabled color="orange" text >Add to card </v-btn>
          <v-btn @click="$emit('addCard', shoe.id, shoe.name, shoe.newPrice, shoe.brand, shoe.size, shoe.imageLink)" v-else color="orange" text @click.stop="dialog = true">Add to card</v-btn>
        </v-card-actions>
      </v-card>

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

export default {
  name: 'ProductItem',
  methods: {
  },
  props: ["shoe"],
  data(){
    return{
      dialog: false,
    }
  }
}
</script>

<style scoped>

.red{
  color:red;
}

.v-application a {
    text-decoration: none;
    color: inherit;
    color: #3F51B5;
}

.flexbox>div{
  width: 50%;
}

.cardtitle{
  background-color: rgb(0,0,0,0.5);
}
h3{
  padding: 15px 15px 0px 15px;
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
  animation: move 10s linear;
}

@keyframes move{
  0%{
    transform: translateX(0);
    transform: scale(1);
  }
  25%{
    transform: translateX(10px);
    transform: scale(1.1);
  }
  50%{
    transform: translateX(0);
    transform: scale(1.2);
  }
  75%{
    transform: translateX(-10px);
    transform: scale(1.2);
  }
  100%{
    transform: translateX(0);
    transform: scale(1.2);
  }
}

.hideOverflow{
  overflow:hidden;
}


</style>
