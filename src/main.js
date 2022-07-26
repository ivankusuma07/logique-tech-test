import Vue from "vue"
import App from "./App.vue"

Vue.config.productionTip = false

//bootstrap
import { BootstrapVue, IconsPlugin } from "bootstrap-vue"

// Import Bootstrap and BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import router from "./router"

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

//axios
import axios from "axios"

Vue.prototype.$axios = axios

new Vue({
  router,
  render: (h) => h(App)
}).$mount("#app")
