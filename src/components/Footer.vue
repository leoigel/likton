<template>
    <div class="footer">
        <div class="container_link_categorie">
            <li v-for="link_categorie in links_categories" :key="link_categorie.id" @click="changeCategories=categories = link_categorie.categorie" >{{link_categorie.categorie}}</li>
        </div>
        <div class="boxes">
          <carousel :class="owl" :autoplay="true"  :loop="true" :nav="false" :dots="false"  :items=1>
          <ImgFooter :categories="categories">
            <slot></slot>
          </ImgFooter>
          </carousel>
       </div>
        <div class="social_networks">
            <font-awesome-icon v-for="social in socials" :key="social.id"  :icon="{prefix:social.prefix,iconName:social.iconName}" class="social_link"/>
        </div>
        <div class="footer_links">
            <a v-for="link in footer_li" :key="link.name"  href="#">{{ link.name }}</a>
        </div>
        <div class="info">
            <div class="deep_info" v-for="info in information" :key="info.name">{{ info.name }}</div>
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
          owl:'owl-rtl',
          categories:'רדיו',
          links_categories: [
            {id:1,categorie:'radio'},
            {id:1,categorie:'tv'},
            {id:1,categorie:'music'},
            {id:1,categorie:'newspaper'},
            {id:1,categorie:'internet'}
          ],
          socials: [
              {id: 1, prefix: 'fab',iconName: 'facebook'},
              {id: 2, prefix: 'fab',iconName:  'twitter'},
              {id: 3, prefix: 'fab',iconName: 'youtube'},
              {id: 4, prefix: 'fab',iconName: 'instagram'},
              {id: 5, prefix: 'fab',iconName: 'instagram-square'},
              {id: 6, prefix: 'fab',iconName: 'envelope-square'}
            ],
            footer_li: [
              {name: 'צוות לינקטון', src:'#'},
              {name: 'הפצת סינגל', src:'#'},
              {name: 'צרו קשר', src:'#'},
              {name: 'בלוג', src:'#'},
              {name: 'אודות', src:'#'},
              {name: 'לוח הפעות', src:'#'},
              {name: 'לינקפדיה', src:'#'},
              {name: 'אמנים', src:'#'},
              {name: 'אנשי מדיה', src:'#'}
            ],
            information: [
              {value:'campany', name:'Copyrights © linktone L.T.D'},
              {value:'liner', name:'|'},
              {value:'contect', name:'03-5618778'},
              {value:'liner', name:'|'},
              {value:'adder', name:'61130 הארד 3, רמת החי"ל, תל אביב'}
            ]
        }
    }
       
}
</script>

<style>
.footer{
    width: 1920px;
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
  margin-left:10px;
  color:gray;
}
.social_networks{
    font-size: 22px;
    margin: 25px;
}
.social_networks  {
    padding-left: 25px;
    text-align:center;
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
#footer .footer_links a:hover{
    text-decoration: none;
    color: #039be5;
    text-decoration: none;
}
.boxes {
  margin: 0 auto;
  width:700px;
}
</style>
