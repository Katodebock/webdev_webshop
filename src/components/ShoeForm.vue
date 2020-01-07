<template lang="html">
  <div class="">
    <v-alert :value="alert" outlined
      type="success"
      text>
          Shoe succesfully edited.
    </v-alert>

    <v-form>
        <v-container>
          <v-row>
            <v-col cols="12" sm="6">
              <v-text-field  v-model="shoe.name" label="name" ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field v-model="shoe.brand" label="brand" ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col >
              <v-checkbox v-model="shoe.onSale" label="Product on sale"></v-checkbox>
            </v-col>
            <v-col >
              <v-text-field v-model="shoe.price" label="price" ></v-text-field>
            </v-col>
            <v-col v-if="shoe.onSale" >
              <v-text-field v-model="shoe.newPrice" label="Sale price" ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" sm="6">
              <v-text-field  v-model="shoe.color" label="color" ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field v-model="shoe.size" label="size" ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-text-field v-model="shoe.imageLink" label="imageLink" ></v-text-field>
            </v-col>
          </v-row>
          <v-btn  color="orange" dark @click="alert = !alert" > Submit Edit </v-btn>
        </v-container>

      </v-form>
  </div>
</template>

<script>
export default {
  name:"ShoeForm",
  components:{

  },
  props:["shoe"],
  data(){
    return{
        alert: false,
    }
  },
}
</script>

<style lang="css" scoped>
</style>
