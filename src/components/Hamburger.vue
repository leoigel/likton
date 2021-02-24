<template>
    <div class="header_icon" :class="{active:active}"  @click=handleToggle>
    <span class="line-1"></span>
    <span class="line-2"></span>
    <span class="line-3"></span>
  </div>
</template>

<script>
export default {
  name:'Hamburger',
  props:['toggle'],
  data() {
        return {
            active:false,
        }
     },
   methods: {
       handleToggle() { 
           this.$emit('handleToggle',this.toggle)
           this.active = !this.active
       },
   }
}
</script>

<style scoped>

.header_icon {
  display: grid;
  place-items: center;
  height: 55px;
  width: 50px;
  cursor: pointer;
}
.header_icon > span {
    width: 50px;
    height: 3px;
    background: green;
    display: block;
    transition: all 0.3s ease-in-out;
  }
.line-1 {
  width: 42px;
  justify-self: end;
}

.line-2 {
  width: 35px;
  justify-self: end;
}
.header_icon:hover span:nth-child(1) {
    width: 35px;
  }

.header_icon:hover span:nth-child(2) {    
    width: 40px;
  }

  
.header_icon.active span:nth-child(1) {
    transform-origin: center center;
    transform: rotate(-45deg) translate(-12px, 12px);
    width: 55px;
  }

.header_icon.active span:nth-child(2) {
    transform: translateX(10px);
    opacity: 0;
  }

.header_icon.active span:nth-child(3) {
    transform-origin: center center;
    transform: rotate(45deg) translate(-15px, -14px);
    width: 55px;
  }


</style>

