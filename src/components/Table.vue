<template>
  <v-data-table
    v-model="selected"
    :headers="headers"
    :items="shoes"
    :single-select="singleSelect"
    item-key="name"
    show-select
    class="elevation-1"
  >
    <template v-slot:top>
      <v-switch v-model="singleSelect" label="Single select" class="pa-3"></v-switch>
    </template>
    <template v-slot:item.action="{ item }"  > <v-btn>edit</v-btn> </template>
  </v-data-table>
</template>

<script>
import axios from 'axios';
  export default {
    data () {
      return {
        singleSelect: false,
        selected: [],
        headers: [
          {
            text: 'id',
            align: 'left',
            sortable: false,
            value: 'id',
          },
          { text: 'name', value: 'name' },
          { text: 'price', value: 'price' },
          { text: 'newPrice', value: 'newPrice' },
          { text: 'brand', value: 'brand' },
          { text: 'size', value: 'size' },
          { name: 'Action', value: 'action' }
        ],
        shoes: [],
      }
    },
    async created(){
      try{
        const res = await axios.get(`http://localhost:3000/shoes`);
        this.shoes = res.data;
      } catch (e){
        console.error(e);
      }
    },
    methods:{
      alert: function(){
        alert("hallo");
      }
    }
  }
</script>

<style lang="css" scoped>
</style>
