<template>
  <div class="Faq">
    <Breadcrumbs v-bind:items="items"/>
    <h1>FAQ</h1>
  </div>
</template>

<script>
import Breadcrumbs from '../components/Breadcrumbs.vue';
export default {
  name:"FAQ",
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
            disabled: true,
            href: '/faq',
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
</style>
