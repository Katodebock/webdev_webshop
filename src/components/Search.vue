<template lang="html">
  <div class="flexbox searchbox">
    <v-text-field class="searchinput" label="Search products"/>
    <img class="search" src="../assets/icons/search.png" alt="search icon">
  </div>
</template>

<script>
export default {
  name:"Search"
}
</script>

<style lang="css" scoped>

.searchinput{
  padding-top: 15px;
}

.search{
  width: 24px;
  height: 24px;
  margin: 5px 0 0 -24px;
}

.searchbox{
  margin-top: 15px;
  width: 300px;
}
</style>
