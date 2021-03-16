import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        singers:[],
        loaded: false
    },
    getters: {
        getState(state) {
            return state.singers 
        },
    },
    mutations: {
        getSingers(state,payload) {
           const {items} = payload.data;
           state.singers = items;
           state.loaded = true;
        },
        addSingers(state,payload) {
            if(state.singers) {
                setTimeout(() => {
                state.singers.push(...payload.data.items)
                state.loaded = true;
               },1000)
            }
        }
    },
    actions: {
         dispatchSingers({commit},payload) {
            commit('getSingers',payload);
        },
        addSingers({commit},payload) {
            commit('addSingers',payload)
        }
    }
})