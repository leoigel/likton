<template>
    <div class="singers_container centered">
        <Search :singers="singers" :dataSingers="dataSingers" @newSingers="singers = $event"/>
        <div class="singers-content">  
        <Singer v-for="singer in singers" :key="singer.id" :singer="singer"/>
    </div>
 </div>
</template>

<script>

import singers from '@/assets/data.js';
import Singer from './Singer';
import Search from '../search/Search';
export default {
    components: {Singer,Search},
    data() {
        return {
            singers,
            dataSingers:singers
        }
    },
  
    
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
