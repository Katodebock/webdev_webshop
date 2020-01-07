<template>
  <div class="delivery">
    <Breadcrumbs v-bind:items="items"/>
    <h1>ERROR OHNO</h1>
  </div>
</template>

<script>
import Breadcrumbs from '../components/Breadcrumbs.vue';
export default {
  name:"PageNotFound",
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
            text: '404',
            disabled: true,
            href: '/404',
          },

        ],
  }),
};
</script>

<style lang="css" scoped>
</style>
