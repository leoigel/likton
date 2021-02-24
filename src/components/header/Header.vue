<template>
   <div class="container">
        <div class="container_menu"  @scroll="handleScroll" :style="!isGreater?isGreaterThan:smallerThan">
            <div class="left_side">
                <div :style="widthResponsiveMenu?{display:'none'}:{display:'block'}">
                     <Login/>
                </div>
             <div class="logo_pic"></div>
            </div>      
        <div class="rigth_side">
            <nav>
            <ul class="header_links"  :style="widthResponsiveMenu?{display:'none'}:{display:'flex'}">
                <li v-for="header_link in header_links" :key="header_link.id">{{header_link.link}}</li>
            </ul> 
        </nav>
            <Hamburger :toggle="toggle" @handleToggle="toggle = !$event" /> 
        </div>
        </div>
         <div>
            <div  v-if="toggle" class="header_aside">
         <ul v-if="!widthResponsiveMenu">
            <li><a v-for="header_link in header_links" :key="header_link.id">{{header_link.link}}</a></li>
         </ul>
          <ul v-else>
            <li><a v-for="header_link in header_links" :key="header_link.id">{{header_link.link}}</a></li>
         </ul>
        </div>
         </div>

        <div class="container_main_menu">
        <div  class="main_text">
             <MainText />
        </div>
       <div class="circles">
            <div class="pic_circle" v-for="singer in singers" :key="singer.id" :style="{ backgroundImage: 'url(' + singer.img + ')' }"></div>
       </div>
        </div>
 </div>
</template>
<script>
import singers from '@/assets/data.js';
import Hamburger from './Hamburger';
import Login from './Login';
import MainText from '../texts/MainText';
export default {
    components: {Login,Hamburger,MainText},
     data() {
      return {
          toggle:false,
          isGreater:false,
          widthResponsiveMenu:false,
          singers,
          header_links:[
              {id:1,link:'ראש'},
              {id:2,link:'לינקיפדיה'},
              {id:3,link:'אודות'},
              {id:4,link:'בלוג'},
              {id:5,link:'צוות לינקטון'},
              ]
      }
   },
   methods: {
       handleScroll() {
          if(window.scrollY > 800) {
              this.isGreater = true;
          }else  {
              this.isGreater = false;
          }
       },
       handleResponsiveMenu() {
           if(window.innerWidth < 1029) {
              this.widthResponsiveMenu = true;
          }else  {
              this.widthResponsiveMenu = false;
          }
       }
   },
   computed: {
       smallerThan() {
           return{background: 'linear-gradient(black, 80%, rgba(0,0,0,0.02))'}
       },
        isGreaterThan() {
            return {background: '#000000'}
        },
   },
   mounted() {
    window.addEventListener('scroll', this.handleScroll)
    window.addEventListener('resize',this.handleResponsiveMenu)
    
 },
}
</script>

<style scoped>
ul {
    list-style-type: none;
}
li {
    color:white;
}

.logo_pic {
   width:70px;
   height:70px;
   background-image:url('../../assets/images/linktone_logo.png');
   background-size: contain;
}

 .container {
     position:relative;
     overflow: hidden;
     width:100%;
     height: 90vh;
     background: #000000;
 }
.container_menu {
    display:flex;
    justify-content: space-between;
    flex-wrap:wrap;
    width:100%;
    height:90px;
    position:fixed;
    top:0;
    background:#000000;
    z-index:1;
    background: linear-gradient(black, 80%, rgba(0,0,0,0.02)); 

}
.left_side,.rigth_side {
    flex-grow:1;
    flex-basis:49%;
    
}
.left_side {
     display:flex;
    justify-content: space-between;
     align-items:center;
}
.rigth_side {
      display:flex;
      justify-content:flex-end; 
      align-items:center;     
}
.header_links {
    display:flex;
    justify-content:center;
  
}
.header_links li {
    width:80px;
    margin-left:10px;
}
.header_aside {
    position:fixed;
    right: 0px;
    top: 90px;
    background: #000;
    color: #fff;
    font-size: 30px;
    padding: 40px;
    width: 190px;
    z-index: 2;
}
ul li a {
 display:block;
 text-align:right;
}

ul li a:hover {
background: linear-gradient(to right, #30CFD0 0%, #330867 100%);
background-clip: text;
-webkit-text-fill-color: transparent;

}
.container_main_menu {
    display:flex;
    width:100%;
    height:100%;
    flex-wrap:wrap;
    justify-content: space-between;
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
    /* flex-grow: 1; */
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
@media(max-width:1029px) {
    .logo_pic {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
    }
}
@media(max-width:480px) {
    .logo_pic {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
    }
    .header_aside {
        width:100%;
    }
}
</style>
