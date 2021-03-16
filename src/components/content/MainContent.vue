<template>
     <div class="container_content">
         <div class="container_content_main"> -->
        <div  class="main_text">
             <MainText />
        </div> 
        <div class="circles">
            <div class="pic_circle" v-for="singer in singers" :key="singer.id" :style="{ backgroundImage: 'url(' + singer.pic_tumb + ')' }"></div>
       </div>
     </div>
     </div>
</template>

<script>

import MainText from '../texts/MainText';
export default {
name:'MainCotent',
    components:{MainText},
    data() {
        return {
             singers:null
        }
    },
       mounted() {
        this.net_api({action:"results",method:'get'}, (list) => {
        this.$store.dispatch('dispatchSingers',list);
        this.singers=this.$store.state.singers.slice(0,24)
     })
    }
}
</script>

<style scoped>
.container_content {
    position:relative;
    overflow: hidden;
    width:100%;
    height: 90vh;
    background: #000000;

}
.container_content_main {
    display:flex;
    width:100%;
    height:100%;
    flex-wrap:wrap;   
}
.main_text {
     flex-basis:50%;
     height:100%;
     display:flex;
     justify-content:flex-end;
     align-items:center;
}
.circles {
    position:absolute; 
    left: 70%;
    right:-200px;
    flex-basis:50%;
    animation: marquee 90s linear infinite;
    height: 90vh;
}
.pic_circle {
    width:150px;
    height:150px;
    border-radius:50%;
    margin: 10px;
    display: inline-block;
    background-size: contain;
    background-repeat: no-repeat;
    transition: all 0.3s
}
.pic_circle:nth-child(5),
.pic_circle:nth-child(2),
.pic_circle:nth-child(7),
.pic_circle:nth-child(9),
.pic_circle:nth-child(12),
.pic_circle:nth-child(14),
.pic_circle:nth-child(17),
.pic_circle:nth-child(18),
.pic_circle:nth-child(20),
.pic_circle:nth-child(19){
 width:150px;
 height:150px;
 margin-left: 30px;
 border-radius:20px;
 transform: rotate(-20deg);
}
.pic_circle:hover{
    transform: scale(0.9);
}
.pic_circle:nth-child(5):hover,
.pic_circle:nth-child(2):hover,
.pic_circle:nth-child(7):hover,
.pic_circle:nth-child(9):hover,
.pic_circle:nth-child(12):hover,
.pic_circle:nth-child(14):hover,
.pic_circle:nth-child(17):hover,
.pic_circle:nth-child(18):hover,
.pic_circle:nth-child(20):hover,
.pic_circle:nth-child(19):hover{
    transform: scale(0.9) rotate(-20deg);
}
@keyframes marquee {
 0% {
    transform: rotate(
20deg
) translate(0, 0);
    opacity: 0;
}
1% {
    transform: rotate(
20deg
) translate(0, 0);
    opacity: 1;
}
95% {
    transform: rotate(
20deg
) translate(0, -70%);
    opacity: 1;
}
98% {
    transform: rotate(
20deg
) translate(0, -72%);
    opacity: 0;
}
100% {
    transform: rotate(
20deg
) translate(0, 0);
    opacity: 0;
}
}
@media(max-width:1029px) {
.circles {
    display:none;
 }
.main_text {
     flex-basis:100%;
     justify-content:center;
}
}
</style>


