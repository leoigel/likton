import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router)

import Home from './views/Home';
// import Internet from './components/LinksTabs/Internet'
// import Music from './components/LinksTabs/Music'
// import Newspaper from './components/LinksTabs/Newspaper'
// import Radio from './components/LinksTabs/Radio'
// import Tv from './components/LinksTabs/Tv'
const router =  new Router({
    mode: 'history',
    routes: [{
        path:'/',
        component:Home
    },
    // {
    //     path:'/internet',
    //     component:Internet
    // },
    // {
    //     path:'/music',
    //     component:Music 
    // },
    // {
    //     path:'/newspaper',
    //     component:Newspaper 
    // },
    // {
    //     path:'/radio',
    //     component:Radio 
    // },
    // {
    //     path:'/tv',
    //     component:Tv 
    // },
    
]
})



export default router