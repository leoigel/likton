<template>
    <div class="singers_container centered">
        <Search :singers="singers" :dataSingers="dataSingers" @newSingers="singers = $event"/>
      
        <div v-if="loaded"  class="singers-content">  
            <Singer  v-for="singer in singers" :key="singer.id"  :singer="singer"/>
        </div>
        <div><Loading /></div>
        <Observer  @intersect="intersected"/>
      

        
 </div>
</template>

<script> 

import Singer from './Singer';
import Search from '../search/Search';
import Observer from '../observer/Observer';
import Loading from '../loading/Loading';
export default {
    name:'singers',
    components: {Singer,Search,Observer,Loading},
    data() {
        return {
            loaded:null,
            singers:null,
            dataSingers:null,
            page:1,
        }
    },
    methods: {
         intersected() {
               this.page = this.page + 1;
               this.net_api({action:"results",method:'post',data: { page: this.page}}, (data) => {
               this.$store.dispatch('addSingers',data);
               
      })
             
        }
    },
    mounted() {
        this.net_api({action:"results",method:'post',data:{ page: this.page}}, (data) => {
        this.$store.dispatch('dispatchSingers',data);
        this.loaded=this.$store.state.loaded;
        this.singers=this.$store.state.singers;
        this.dataSingers=this.$store.state.singers;
      })
    }
}
</script>

<style>
.singers_container {
max-width:1200px;
width:980px;
margin: 0 auto;
}
.singers-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

}
@media (max-width: 1200px) and (min-width:768px){
  .singers_container {
      max-width:800px;
  }  
}
@media (max-width: 767px){
  .singers_container {
      width:100%;
  }  
}
@media (max-width: 480px){
  .singers_container {
      width:100%;
  }  
}
</style>
