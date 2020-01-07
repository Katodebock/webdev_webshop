<template>
  <div class="orderConf">
    <Breadcrumbs v-bind:items="items"/>
    <h1>Order was a succes!</h1>
  </div>
</template>

<script>
import Breadcrumbs from '../components/Breadcrumbs.vue';
export default {
  name:"OrderConfirmation",
  components:{
    Breadcrumbs
  },
  data:() => ({
      items: [
          {
            text: 'Home',
            disabled: false,
            href: '/',
          },
          {
            text: 'Succes!',
            disabled: true,
            href: '/succes',
          },
        ],
  }),
};
</script>

<style lang="css" scoped>
</style>
