<template>
  <div class="about">
    <Breadcrumbs v-bind:items="items"/>
    <div class="aboutcontainer">
      <h1>About our Company</h1>
      <div class="flexbox">
        <img src="https://res.cloudinary.com/webdevwebshop/image/upload/v1578399224/webshop%20product%20imgs/sneakers_zgytgm.jpg" alt="girl wearing pink sneakers">
        <section>
          <h2>WHO ARE WE?</h2>
          <p>Welcome to Limited Sneaker Co UK. From the beginning we've been all about High Street to High End sneakers - bringing them together, all in one place.
          We have Europe’s most impressive collection of limited edition sneakers, mixing popular British High Street brands with high end designers and fresh, independent labels.</p>
          <h2>FASHION ONLINE. NO COMPROMISE.</h2>
          <p>We want to make shopping online safe and simple for you.</p>
        </section>
      </div>
    </div>
  </div>
</template>


<script>
import Breadcrumbs from '../components/Breadcrumbs.vue';
export default {
  name:"About",
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
          text: 'About',
          disabled: true,
          href: '/about',
        }
      ],
  }),
};
</script>

<style lang="css" scoped>
.aboutcontainer{
  max-width: 960px;
  margin: 0px auto;
}

section{
  width: 70%;
  padding-left: 50px;
  
}
img{
  width: 30%;
  -webkit-box-shadow: 10px 10px 5px -8px rgba(0,0,0,0.75);
-moz-box-shadow: 10px 10px 5px -8px rgba(0,0,0,0.75);
box-shadow: 10px 10px 5px -8px rgba(0,0,0,0.75);
}
h1 {
  margin-bottom: 20px;
}
</style>
