<template>
  <div class="delivery">
    <Breadcrumbs v-bind:items="items"/>
    <h1>Terms of Delivery</h1>
  </div>
</template>

<script>
import Breadcrumbs from '../components/Breadcrumbs.vue';
export default {
  name:"Delivery",
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
            text: 'FAQ',
            disabled: false,
            href: '/faq',
          },
          {
            text: 'Terms of Delivery',
            disabled: true,
            href: '/faq/delivery',
          },
        ],
  }),
};
</script>

<style lang="css" scoped>
</style>
