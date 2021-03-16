<template>
  <div class="container"> 
    <MainContent />
    <Singers />
  </div>
</template>

<script>
import Singers from '@/components/singers/Singers';
import MainContent from '@/components/content/MainContent';
export default {
name:'Home',
components: {Singers,MainContent},
}
</script>

<style scoped>


</style>
