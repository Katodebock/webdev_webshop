<template>
  <div class="delivery">
    <Breadcrumbs v-bind:items="items"/>
    <h1>Terms of Payment</h1>
  </div>
</template>

<script>
import Breadcrumbs from '../components/Breadcrumbs.vue';


export default {
  name:"PaymentTerms",
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
            href: `/faq`,
          },
          {
            text: 'Terms of Payment',
            disabled: true,
            href: '/faq/payment',
          },
        ],
  }),
};
</script>

<style lang="css" scoped>
</style>
