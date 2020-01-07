<template lang="html">
  <div class="rating">
    <h1>Reviews</h1>
    <div id="firstStars" class="">
      <div v-if="shoe.stars1 == 1">
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star "></span>
        <span class="fa fa-star "></span>
        <span class="fa fa-star"></span>
        <span class="fa fa-star"></span>
      </div>
      <div v-else-if="shoe.stars1 == 2">
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star "></span>
        <span class="fa fa-star"></span>
        <span class="fa fa-star"></span>
      </div>
      <div v-else-if="shoe.stars1 == 3">
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star"></span>
        <span class="fa fa-star"></span>
      </div>
      <div v-else-if="shoe.stars1 == 4">
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star"></span>
      </div>
      <div v-else-if="shoe.stars1 == 5">
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
      </div>
    </div>
    <p>{{shoe.review1}}</p>
    <div id="secondStars" class="">
      <div v-if="shoe.stars2 == 1">
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star "></span>
        <span class="fa fa-star "></span>
        <span class="fa fa-star"></span>
        <span class="fa fa-star"></span>
      </div>
      <div v-else-if="shoe.stars2 == 2">
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star "></span>
        <span class="fa fa-star"></span>
        <span class="fa fa-star"></span>
      </div>
      <div v-else-if="shoe.stars2 == 3">
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star"></span>
        <span class="fa fa-star"></span>
      </div>
      <div v-else-if="shoe.stars2 == 4">
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star"></span>
      </div>
      <div v-else-if="shoe.stars2 == 5">
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
      </div>
    </div>
    <p>{{shoe.review2}}</p>

    <v-btn color="indigo" dark @click.stop="dialog = true" > Leave a Review </v-btn>

    <v-dialog v-model="dialog" width="500" >
    <v-card width="600" class="mx-auto mt-5">
      <v-card-title> <h3 class="">Leave a review for: {{shoe.name}}</h3></v-card-title>
      <v-card-text>
        <v-form>
          <div class="flexbox">
            <v-text-field  class="title" label="Title"/>
            <div class="stars">
              <span class="fa fa-star "></span>
              <span class="fa fa-star "></span>
              <span class="fa fa-star "></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
            </div>
          </div>

          <v-text-field label="Review"/>

        </v-form>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn id="login" color="succes" @click="dialog = false" >Send</v-btn>
      </v-card-actions>
    </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name:'Rating',
  props: ["shoe"],
  data () {
      return {
        dialog: false,
      }
    },
}
</script>

<style lang="css" scoped>
.checked {
  color: orange;
}

.title{
  width: 80%;
}

.stars{
  padding-left: 20px;
  padding-top: 25px;
  width: 20%;
}
</style>
