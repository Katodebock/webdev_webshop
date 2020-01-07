<template lang="html">
  <div class="">
    <Breadcrumbs v-bind:items="items"/>

    <v-card class="center" hover width="600">
      <v-card-title>
        <h1 class="display-1">Already a member?</h1>
        <Login class="loginBtn"/>
      </v-card-title>
      <v-card-title><h1 class="display-1">Want to become a member?</h1></v-card-title>
      <v-card-text>
        <v-form>
          <div class="flexbox">
            <v-text-field label="First Name" prepend-icon="mdi-account-circle" />
            <v-text-field label="Last Name" class="margin" />
          </div>

          <v-text-field label="E-mail" prepend-icon="mdi-email" />
          <div class="flexbox">
            <v-text-field :type="showPassword ? 'text' : 'password'" label="Password"  prepend-icon="mdi-lock"  @click:append="showPassword = !showPassword"/>
            <v-text-field class="margin" :type="showPassword ? 'text' : 'password'" label="Repeat Password"   :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'" @click:append="showPassword = !showPassword"/>
          </div>
          <v-checkbox
              label="Yes, keep me informed by e-mail of the latest trends and special offers." color="indigo" value="yes" hide-details></v-checkbox>
        </v-form>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <a rel="dns-prefetch" href="//www.facebook.com" target="_blank"><v-btn color="succes"><img class="socialicon" src="../assets/icons/facebook.svg" alt="Login with facebook" >Login with facebook</v-btn></a>
        <v-spacer></v-spacer><router-link :to="`/${$i18n.locale}`" ><v-btn color="indigo" dark>Register</v-btn></router-link>
      </v-card-actions>
      <v-card-actions>

        <a rel="dns-prefetch" href="//www.instagram.com" target="_blank"><v-btn color="succes"><img class="socialicon" src="../assets/icons/instagram.svg" alt="Login with instagram">Login with Instagram</v-btn></a>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import Breadcrumbs from '../components/Breadcrumbs.vue';
import Login from '../components/Login.vue';

export default {
  name:"Register",
  components:{
    Breadcrumbs,
    Login
  },
  data:() => ({
      showPassword: false,
      items: [
          {
            text: 'Home',
            disabled: false,
            href: '/',
          },
          {
            text: 'Register',
            disabled: true,
            href: '/register',
          }/*,
          {
            text: 'Link 2',
            disabled: true,
            href: 'breadcrumbs_link_2',
          },*/
        ],
  }),
};
</script>

<style lang="css" scoped>
.margin{
  margin-left: 10px;
}
.socialicon{
  width: 25px;
  height: 25px;
}

</style>
