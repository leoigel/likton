<template>
    <div class="footer">
        <div class="container_link_categorie">
            <li v-for="(link_categorie,index) in links_categories" :key="link_categorie.id" @click="changeCategories(link_categorie,index,links_categories)" :class="[{active: index === isActive} ]" >{{link_categorie.categorie}}</li>
        </div>
        <div class="boxes centered">
          <carousel :class="owl" :autoplay="true"  :loop="true" :nav="false" :dots="false"  :items=1 >
          <ImgFooter :categories="categories">
            <slot></slot>
          </ImgFooter>
          </carousel>
       </div>
        <div class="social_networks">
            <font-awesome-icon v-for="social in socials" :key="social.id"  :icon="{prefix:social.prefix,iconName:social.iconName}" class="social_link"/>
        </div>
        <div class="footer_links centered">
            <a v-for="link in footer_li" :key="link.id"  href="#">{{ link.name }}</a>
        </div>
        <div class="info">
            <div class="deep_info" v-for="info in information" :key="info.id">{{ info.value }}</div>
        </div>
    </div>
</template>
<script>
import carousel from 'vue-owl-carousel';
import ImgFooter from './ImgFooter'
export default {
  name: 'Footer',
  components:{carousel,ImgFooter},
  data(){
      return {
          owl:'owl-carousel owl-theme owl-loaded',
          categories:'רדיו',
          isActive:0,
          links_categories: [
            {id:1,categorie:'radio'},
            {id:2,categorie:'tv'},
            {id:3,categorie:'music'},
            {id:4,categorie:'newspaper'},
            {id:5,categorie:'internet'}
          ],
          socials: [
              {id: 1, prefix: 'fab',iconName: 'facebook'},
              {id: 2, prefix: 'fab',iconName:  'twitter'},
              {id: 3, prefix: 'fab',iconName: 'youtube'},
              {id: 4, prefix: 'fab',iconName: 'instagram'},
              {id: 5, prefix: 'fab',iconName: 'instagram-square'},
            ],
            footer_li: [
              {id: 1,name: 'צוות לינקטון', src:'#'},
              {id: 2,name: 'הפצת סינגל', src:'#'},
              {id: 3,name: 'צרו קשר', src:'#'},
              {id: 4,name: 'בלוג', src:'#'},
              {id: 5,name: 'אודות', src:'#'},
              {id: 6,name: 'לוח הפעות', src:'#'},
              {id: 7,name: 'לינקפדיה', src:'#'},
              {id: 8,name: 'אמנים', src:'#'},
              {id: 9,name: 'אנשי מדיה', src:'#'}
            ],
            information: [
              {id: 1,value:'campany', name:'Copyrights © linktone L.T.D'},
              {id: 2,value:'liner', name:'|'},
              {id: 3,value:'contact', name:'03-5618778'},
              {id: 4,value:'liner', name:'|'},
              {id: 5,value:'adder', name:'61130 הארד 3, רמת החי"ל, תל אביב'}
            ]
        }
    },
    methods: {
      changeCategories(link_categorie,index) {
       this.categories = link_categorie.categorie;
       this.isActive = index;
       }
    }
       
}
</script>

<style>
.footer{
   overflow:hidden;
   height: 250px;
   width: 100%;
   background-color:  #f4f4f6;
   padding-top: 50px;
    text-align: center;
    display: inline-block;
    position:relative;
}
.container_link_categorie {
  display:flex;
  justify-content:center;
  position:absolute;
  top:10px;
  left:50%;
  transform: translate(-50%, -50%);
}
.container_link_categorie li {
  list-style-type: none; 
  font-size: 18px;
  margin-left:10px;
  color:gray;
}
.social_networks{
    font-size: 22px;
    margin: 25px;
}
.social_networks  {
    text-align:center;
    display:flex;
    justify-content: center;
    align-items:center;
}
.social_link {
     margin-left:20px;
}
.footer_links{
    margin-bottom: 25px;
}
.footer_links a{
    padding-left: 25px;
    text-decoration: none;
}
.deep_info{
    display: inline-block;
    padding-left: 25px;
}
.footer .footer_links a:hover{
    text-decoration: none;
    color: #039be5;
    text-decoration: none;
}
.boxes {
  margin: 0 auto;
  width:700px;
 
}
@media(max-width:480px) {
 .boxes {
   overflow:hidden;
    width:100%;
    max-width:480px;
 }
 .footer_links a{
   padding-left: 8px;
 }
}
.active {font-weight:600;color:black!important;}

</style>
