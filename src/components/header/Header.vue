<template>
   <div class="container_header">
        <div class="container_menu"  @scroll="handleScroll" :style="!isGreater?isGreaterThan:smallerThan">
            <div class="left_side">
                <div class="btn_login">
                     <Login/>
                </div>
             <div class="logo_pic"></div>
            </div>      
        <div class="rigth_side">
            <nav>
            <ul class="header_links">
                <li v-for="header_link in header_links" :key="header_link.id">{{header_link.link}}</li>
            </ul> 
        </nav>
            <Hamburger :toggle="toggle" @handleToggle="toggle = !$event" /> 
        </div>
        </div>
         <div>
         <div  v-if="toggle" class="header_aside">
         <ul v-if="widthResponsiveMenu">
            <li><a v-for="header_link in header_links" :key="header_link.id">{{header_link.link}}</a></li>
         </ul>
          <ul v-else>
            <li><a v-for="header_link in header_links_login" :key="header_link.id">{{header_link.link}}</a></li>
         </ul>
         </div>
         </div>
 </div>
</template>
<script>

import Hamburger from './Hamburger';
import Login from './Login';
export default {
    name:'Header',
    components: {Login,Hamburger},
     data() {
      return {
          toggle:false,
          isGreater:false,
          widthResponsiveMenu:false,
          header_links:[
              {id:1,link:'ראש'},
              {id:2,link:'לינקיפדיה'},
              {id:3,link:'אודות'},
              {id:4,link:'בלוג'},
              {id:5,link:'צוות לינקטון'},
              ],
        header_links_login: [
              {id:1,link:'ראש'},
              {id:2,link:'לינקיפדיה'},
              {id:3,link:'אודות'},
              {id:4,link:'בלוג'},
              {id:5,link:'צוות לינקטון'},
              {id:6,link:'הזמנת לינקטון חדש'},
              {id:7,link:'כניסה למערכת'},
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
            if(window.innerWidth > 800) {
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
.header_links li:hover {
    background: linear-gradient(to right, #30CFD0 0%, #330867 100%);
    background-clip: text;
    -webkit-text-fill-color: transparent;
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
/* .btn_login,.header_links {
    display: block;
} */
@media(max-width:1029px) {
    .logo_pic {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
    }
    .btn_login,.header_links {
      display: none;

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
