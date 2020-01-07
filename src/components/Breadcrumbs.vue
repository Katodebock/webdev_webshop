<template>
  <div>
    <v-breadcrumbs :items="items">
      <template v-slot:divider>
        <v-icon>mdi-forward</v-icon>
      </template>
    </v-breadcrumbs>

  </div>
</template>


<script>
  export default {
    name:'Breadcrumbs',
    props: ["items"],
  }
</script>

<style lang="css" scoped>

.v-breadcrumbs{
  padding:18px 10px;
}
</style>
