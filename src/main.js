import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import i18n from './i18n'

Vue.config.productionTip = false

//route guard
router.beforeEach((to, from, next)=>{
  //use the language from the routing param or default language
  let language = to.params.lang;
  if(!language){
    language='en'
  }

  //set the current language for VueI18n
  i18n.locale=language
  next()
})

new Vue({
  router,
  vuetify,
  i18n,
  el: '#app',
  render: h => h(App),
  components: {
    App
  }
}).$mount('#app')
