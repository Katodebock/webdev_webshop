<template>
  <div>
    <Breadcrumbs v-bind:items="items"/>
    <section class="admin">
      <h1>Admin</h1>
      <!-- Vuetify table, pretty but difficult to edit -->
      <!-- <Table/> -->
      <table>
        <thead>
          <th>id</th>
          <th>brand</th>
          <th>name</th>
          <th>price</th>
          <th>left in stock</th>
          <th>size</th>
          <th></th>
          <th></th>
        </thead>
        <tbody>
            <tr v-for="shoe in shoes" v-bind:key="shoe.id">
              <td><router-link :to="`/${$i18n.locale}/shoe/` + shoe.id">{{shoe.id}}</router-link></td>
              <td><router-link :to="`/${$i18n.locale}/shoe/` + shoe.id">{{shoe.brand}}</router-link></td>
              <td><router-link :to="`/${$i18n.locale}/shoe/` + shoe.id">{{shoe.name}}</router-link></td>
              <td><router-link :to="`/${$i18n.locale}/shoe/` + shoe.id">{{shoe.newPrice}}</router-link></td>
              <td><router-link :to="`/${$i18n.locale}/shoe/` + shoe.id">{{shoe.leftInStock}}</router-link></td>
              <td><router-link :to="`/${$i18n.locale}/shoe/` + shoe.id">{{shoe.size}}</router-link></td>
              <td><router-link :to="`/${$i18n.locale}/admin/shoe/` + shoe.id"> <v-btn color="orange" >EDIT</v-btn> </router-link></td>
              <td> <v-btn color="error" @click.stop="dialog = true" >Delete</v-btn> </td>
            </tr>
        </tbody>
      </table>
    </section>

    <!-- DIALOG -->
    <v-dialog
      v-model="dialog"
      max-width="290"
    >
      <v-card>
        <v-card-title class="headline">Are you sure you want to Delete this?</v-card-title>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
          >
            YES
          </v-btn>

          <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
          >
            NO
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

  </div>
</template>

<script>
import Breadcrumbs from '../components/Breadcrumbs.vue';
//import Table from '../components/Table.vue';
import axios from 'axios';

export default {
  name:"Admin",
  components:{
    Breadcrumbs,
    //Table
  },
  data: () => ({
    search: '',
    shoes:[],
    dialog: false,
    items: [
      {
        text: 'Home',
        disabled: false,
        href: '/',
      },
      {
        text: 'Admin',
        disabled: true,
        href: '/Admin',
      }      ],
    }),
  async created(){
    try{
      const res = await axios.get(`https://my-json-server.typicode.com/Katodebock/json/shoes`);
      this.shoes = res.data;
    } catch (e){
      console.error(e);
    }
  },
};
</script>

<style lang="scss" scoped>
.admin{
  width: 80%;
  margin: 0 auto;
}
  table {
  border-collapse: collapse;
  width: 100%;
  margin-bottom: 100px;
}

table td, table th {
  border: 1px solid #ddd;
  padding: 8px;
}

table tr:nth-child(even){background-color: #f2f2f2;}

table tr:hover {background-color: #ddd;}

table th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #3F51B5;
  color: white;
}

.v-application a{
  color:inherit;
  color: #3F51B5;
}

</style>
