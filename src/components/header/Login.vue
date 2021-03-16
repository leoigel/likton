<template>
   <div class="conatainer_login">
    <button class="active"><span>הזמנת לינקטון חדש</span></button>
    <button class="notActive"><span>כניסה למערכת</span></button>
   </div>
</template>

<script>
export default {
name:'Login'
}
</script>

<style scoped>
.conatainer_login {
    display: flex;
}
.active {
    color:#ffffff;
    font-size:20px;
    background:#ff1661;
    padding:0px 3px;
    width:200px;
    height:44px;
    outline: none;
    border-radius:55px;
    text-decoration:none;
    line-height: 55px !important;
    cursor: pointer;
    white-space: nowrap;
    text-align: center;
    border: none;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    box-sizing: border-box;
    transition:all 0.2s ease 0s;
    vertical-align: middle;
    font-weight: 800;
    text-align:center;
    display:flex;
    align-items:center;
    justify-content:center;
    
}
.active:hover {
    opacity: 0.95;
    transform: scale(1.05); 
}
.notActive { 
  color:#ffffff;
  margin-left:5px;
  font-size:20px;
  background:#000000;
  padding:0px 3px;
    width:200px;
    height:44px;
    outline: none;
    border-radius:55px;
    text-decoration:none;
    line-height: 55px !important;
    cursor: pointer;
    white-space: nowrap;
    text-align: center;
    border: none;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    box-sizing: border-box;
    transition:all 0.2s ease 0s;
    vertical-align: middle;
    font-weight: 800;
    text-align:center;
    display:flex;
    align-items:center;
    justify-content:center;
}
.notActive:hover{
    opacity: 0.95;
    transform: scale(1.05);
    color: #23527c;
}
</style>


