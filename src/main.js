import Vue from 'vue';
import App from './App.vue';
import store from './store/store';
import router from './router';
import './assets/main.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebook, faTwitter, faYoutube,faInstagram,faInstagramSquare} from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import VueResource from 'vue-resource';
Vue.use(VueResource);

library.add(fas, faFacebook,faTwitter, faYoutube,faInstagram,faInstagramSquare);

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.component('Footer', Footer);
Vue.component('Header',Header)

Vue.mixin({
  data() {
    return {
      api_url:'https://beta.linktone.co.il/api_vue/artists/'
    }
  },
  methods: {
    isNull(str) {
      return (str == '' || str == null || str == undefined);
    },
     net_api(settings, func, failFunc) {
     const is_test = false;
     const headers = {
      'Content-Type': 'application/json; charset=utf-8',
    };
   
    if(!this.isNull(localStorage.getItem('user_token'))) { 
      headers.Authorization = localStorage.getItem('user_token');
    }
    if (!is_test){
      if (settings.method == 'get'){
        this.$http.get(this.api_url + settings.action,  settings.data,{emulateJSON:true, headers: headers})
        .then(response => {
           if (response.body == 'error') {
             localStorage.setItem('user_token', '');
             document.location.reload();
           }
          //  console.log(response.body)
            func(response.body);
  
        }, response => { 
          if (!this.isNull(failFunc)) failFunc(response);
          else func(false);
        });

      }else{
        this.$http.post(this.api_url + settings.action, settings.data, {emulateJSON:true, headers: headers})
        .then(response => {
         if (response.body == 'error')
         {
           localStorage.setItem('user_token', '')
           document.location.reload();
         }
            func(response.body);
            // console.log(response.body);
        }, response => { 
          if (!this.isNull(failFunc)) failFunc(response);
          else func(false);
            // console.error(response.body);
        })
       }

      }
    }
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
