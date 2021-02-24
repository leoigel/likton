<template>
 <div class="container_img_footer">
          <div v-for="n in 3" :key="n" class="box">{{categories}}</div>
    </div>
</template>

<script>

export default {
props:['categories']
}
</script>

<style>
.container_img_footer {
 display:flex;
 justify-content:space-between ;
 width:100%;
 }
.box {
  width:70px;
  height: 70px;
  margin-left:10px;
  background:pink;
}
</style>
