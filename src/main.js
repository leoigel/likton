import Vue from 'vue'
import App from './App.vue'
import router from './router';
import './assets/main.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebook, faTwitter, faYoutube,faInstagram,faInstagramSquare} from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fas, faFacebook,faTwitter, faYoutube,faInstagram,faInstagramSquare);

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.component('Footer', Footer);
Vue.component('Header',Header)

Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
