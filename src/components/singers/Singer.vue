<template>
    <div class="container_singer">
        <router-link tag="div" :to="singer.id" class="pic_singer" :style="{ backgroundImage: 'url(' + singer.pic_tumb + ')' }"></router-link>
        <h4>{{singer.name}}</h4>
    </div>
</template>

<script>
export default {
name:'Singer',
props:['singer'],
    
}
</script>
<style>
.container_singer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    flex-wrap:wrap;
    font-weight: 600;
    font-size: 20px;

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
  cursor:pointer;
}
@media(max-width:480px) {
    .container_singer {
         font-size: 15px;
    }
    .pic_singer {
        width:150px;
        height: 150px;
         

    }
}
</style>
