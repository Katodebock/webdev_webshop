<template lang="html">
  <div class="bar">
    <div class="move">
      <h2>SALE</h2>
      <h2>SALE</h2>
      <h2>SALE</h2>
      <h2>SALE</h2>
      <h2>SALE</h2>
      <h2>SALE</h2>
      <h2>SALE</h2>
      <h2>SALE</h2>
      <h2>SALE</h2>
      <h2>SALE</h2>
      <h2>SALE</h2>
      <h2>SALE</h2>
      <h2>SALE</h2>
      <h2>SALE</h2>
      <h2>SALE</h2>
      <h2>SALE</h2>
      <h2>SALE</h2>
      <h2>SALE</h2>
      <h2>SALE</h2>
      <h2>SALE</h2>
      <h2>SALE</h2>
      <h2>SALE</h2>
      <h2>SALE</h2>
      <h2>SALE</h2>
      <h2>SALE</h2>
      <h2>SALE</h2>
      <h2>SALE</h2>
      <h2>SALE</h2>
      <h2>SALE</h2>
      <h2>SALE</h2>
      <h2>SALE</h2>
      <h2>SALE</h2>
      <h2>SALE</h2>
      <h2>SALE</h2>
      <h2>SALE</h2>
      <h2>SALE</h2>
      <h2>SALE</h2>
      <h2>SALE</h2>
      <h2>SALE</h2>
      <h2>SALE</h2>
      <h2>SALE</h2>
      <h2>SALE</h2>
      <h2>SALE</h2>
      <h2>SALE</h2>
      <h2>SALE</h2>
      <h2>SALE</h2>
    </div>

  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.bar{
  background-color: #F44336;
  width: 100%;
  height: 50px;
  overflow-x: hidden;
  white-space: nowrap;
  h2{
    display: inline;
    padding: 0px 30px 0px 0px;
    color:white;
    line-height: 50px;
  }

  .move{
    animation: marquee 30s linear infinite;
  }

  @keyframes marquee{
    0% {
    transform: translateX(0%);
    }

    100% {
        transform: translateX(-40%);
    }
  }
}


</style>
