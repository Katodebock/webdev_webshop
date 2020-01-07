<template>
  <v-app id="sandbox">
    <!-- Load Navbar & navigation drawer-->
    <div id="header">
      <v-navigation-drawer v-model="primaryDrawer.model" app overflow dark class="indigo">
        <div id="nav">
          <LanguageChooser/>
          <Nav />
        </div>
      </v-navigation-drawer>
      <v-app-bar :clipped-left="primaryDrawer.clipped" app dark class="indigo">
        <v-app-bar-nav-icon v-if="primaryDrawer.type !== 'permanent'"
          @click.stop="primaryDrawer.model = !primaryDrawer.model" />
        <v-toolbar-title>Limited Sneaker Co. </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-title><Search/></v-toolbar-title>
      </v-app-bar>
    </div>
    <!-- Load Content-->
    <v-content>
      <v-container fluid>

        <SaleBar/>
        <div class="margin">
          <router-view></router-view>
        </div>
      </v-container>
    </v-content>
    <!-- Load Footer-->
    <Footer />
  </v-app>
</template>

<script>
import Footer from './components/layout/Footer.vue';
import Search from './components/Search.vue';
import Nav from './components/Nav.vue';
import LanguageChooser from './components/layout/LanguageChooser.vue';
import SaleBar from './components/SaleBar.vue';
  export default {
    name: 'App',
    components : {
      Footer,
      Search,
      LanguageChooser,
      Nav,
      SaleBar
    },
    data: () => ({
      //drawers & primarydrawer are the needed data to get the navbar & drawer to work
      drawers: ['Default (no property)', 'Permanent', 'Temporary'],
      primaryDrawer: {
        model: null,
        type: 'default (no property)',
        clipped: false,
        floating: false,
        mini: false,
      },
      footer: {
        inset: false,
      },

    }),
  }
</script>

<style lang="scss">
$Roboto: 'Roboto', sans-serif;

* {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
}
body {
	font-family: $Roboto;
	line-height: 1.4;
}
.flexbox {
	display: flex;
	flex-wrap: wrap;
	width: 100%;
}

.container{
  padding: 0;
}

.margin{
  margin: 0px 20px 20px 20px;
}

.center{
  margin: 0 auto;
}

a{
  text-decoration: none;
}
</style>
