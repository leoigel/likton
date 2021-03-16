<template>
   <div class="container_text">
    <h2> לינקיפדיה</h2>
    <h1>האנציקלופדיה הרשמית<br> של תעשיית <br>המוזיקה בישראל</h1>
   </div>
</template>

<script>

export default {
  name:'Maintext'
}
</script>

<style scoped>


.container_text {
    text-align: right;
    color:#ffffff;
    font-size: 40px;
}
h1 {
  font-size: 24px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  background-clip: text;
   font-family: Arial, Helvetica, sans-serif;
   font-size: 38px;
   background: linear-gradient(109deg, #ff1661 11%, #00b7ff 122%);;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

}
@media(max-width:480px) {
  h1,.container_text{
    font-size: 30px;
  }
}
</style>

