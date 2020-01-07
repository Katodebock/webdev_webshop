<template>
  <div>
    <div class="dropdown">
      <button  href="#" class="dropbtn" @click="toggleVisibility" @keydown.esc.exact="hideDropdown">
        <span  >{{ $i18n.locale.toUpperCase() }}</span>
        <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path   d="M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z"></path></svg>
      </button>
      <div class="dropdown-content">
        <a href="#" @click.prevent="setLocale('en')" >
          <img src="../../assets/icons/en.png" alt="english flag"  >
          <span class="lang" >English</span>
        </a>
        <a href="#" @click.prevent="setLocale('nl')"
        >
          <img src="../../assets/icons/nl.png" alt="Dutch flag"  >
          <span class="lang" >Nederlands</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isVisible: false,
      focusedIndex: 0,
    }
  },
  methods: {
    toggleVisibility() {
      this.isVisible = !this.isVisible
    },
    hideDropdown() {
      this.isVisible = false
      this.focusedIndex = 0
    },
    setLocale(locale) {
      this.$i18n.locale = locale
      this.$router.push({
        params: { lang: locale }
      })
      this.hideDropdown()
    }
  }
}
</script>

<style scoped>
  img{
    width: 20px;
    height: auto;
  }

  svg{padding-top: 5px;}

  .dropdown {
  position: relative;
  display: inline-block;
  color:white;
  margin-top: 20px;
  margin-left: 20px;
  margin-bottom: 100px;
}

.lang{
  margin-left: 10px;
  color:white;
}

button{
  margin-top: -20px;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #3F51B5;
  min-width: 160px;
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {background-color: #3F51B5;}

.dropdown:hover .dropdown-content {display: block;}
</style>
