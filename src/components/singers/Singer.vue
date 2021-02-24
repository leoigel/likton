<template>
    <div class="container_singer">
        <div class="pic_singer" :style="{ backgroundImage: 'url(' + singer.img + ')' }"></div>
        <h3>{{singer.name}}</h3>
    </div>
</template>

<script>
export default {
props:['singer']
}
</script>
<style>
.container_singer {
    display: flex;
    flex-direction: column;
    text-align: center;
    flex-wrap:wrap;
}
.container_singer {
    font-weight: 600;
    font-size: 24px;
}
.pic_singer {
  width: 200px;
  height: 200px;
   box-shadow: 0 12px 34px -20px rgb(0 0 0 / 50%);
   margin: 12px;
   background-position:center;
   background-size: cover;
   border-radius: 32.5px;
  box-shadow: 0 12px 34px -20px rgba(0, 0, 0, 0.5);
  background-color: #d8d8d8;

}
</style>
