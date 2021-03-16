import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router)

import Home from './views/Home';
import DescriptionSinger from './components/description/DescriptionSinger';
const router =  new Router({
    mode: 'history',
    routes: [
    {
        path:'/',
        component:Home
    },
    {
        path:'/:id',
        props:true,
        component:DescriptionSinger
    }
    
]
})



export default router