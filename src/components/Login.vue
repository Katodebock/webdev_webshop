<template lang="html">
  <v-dialog v-model="dialog" width="500" >
    <template v-slot:activator="{ on }">
      <v-btn text v-on="on" > Login </v-btn>
    </template>
  <v-card width="500" class="mx-auto mt-5">
    <v-card-title> <h1 class="display-1">Login</h1></v-card-title>
    <v-card-text>
      <v-form>
        <v-text-field label="Username" prepend-icon="mdi-account-circle" />
        <v-text-field :type="showPassword ? 'text' : 'password'" label="Password"  prepend-icon="mdi-lock" :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'" @click:append="showPassword = !showPassword"/>
      </v-form>
    </v-card-text>
    <v-divider></v-divider>
    <v-card-actions>
      <v-btn id="login" color="succes" @click="dialog = false" >Login</v-btn>
      <v-spacer></v-spacer>
      <a rel="dns-prefetch" href="//www.facebook.com" target="_blank"><v-btn color="succes"><img class="socialicon" src="../assets/icons/facebook.svg" alt="Login with facebook" ></v-btn></a>
      <v-spacer></v-spacer>
      <a rel="dns-prefetch" href="//www.instagram.com" target="_blank"><v-btn color="succes"><img class="socialicon" src="../assets/icons/instagram.svg" alt="Login with instagram"></v-btn></a>
      <v-spacer></v-spacer>
      <router-link :to="`/${$i18n.locale}/register`"><v-btn @click="dialog = false" color="indigo" dark>Register</v-btn> </router-link>
    </v-card-actions>
  </v-card>
  </v-dialog>
</template>

<script>
export default {
  name:'Login',
  data () {
      return {
        dialog: false,
      }
    },
}
</script>

<style lang="scss" scoped>
.socialicon{
  width: 25px;
  height: 25px;
}

button{
  a {
    color: inherit;
}
}


</style>
