<template lang="html">
  <div class="">

    <Breadcrumbs v-bind:items="items"/>
    <div class="flexbox">
      <v-img class="img"  v-bind:src="shoe.imageLink"></v-img>
      <div class="">
        <h1>Edit: {{shoe.name}} </h1>
        <ShoeForm v-bind:shoe="shoe"/>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Breadcrumbs from '../components/Breadcrumbs.vue';
import ShoeForm from '../components/ShoeForm.vue';

export default {
  name:"EditShoe",
  components:{
    Breadcrumbs,
    ShoeForm
  },
  data(){
    return{
      productID: this.$route.params.id,
      shoe:[],
      alert: false,
      items: [
          {
            text: 'Home',
            disabled: false,
            href: '/',
          },
          {
            text: 'admin',
            disabled: false,
            href: '/en/admin',
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
