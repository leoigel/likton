<template>
    <div class="container_search">
        <input @keyup="handleFilterSearch" type="text" placeholder="חיפוש אמנים" id="searchId" :style="isNotEmpty?{'border-bottom':'2px solid green'}:{'border-bottom':'2px solid #9e9e9e'}" >
    </div>
</template>

<script>
export default {
    name:'Search',
    props:['singers','dataSingers'],
    data() {
        return {
            isNotEmpty:false,
        }
    },
   methods: {
       handleFilterSearch(e) {
          let newData = this.singers.filter((singer) => singer.name.includes(e.target.value))
          this.newSingers = newData;
        if(e.target.value === '' || newData.length === 0) {
            newData = this.dataSingers;
        }
        this.$emit('newSingers',newData)
       },
   } ,
mounted() {
       document.addEventListener('click',(e) => {
           e.target.id === 'searchId'?this.isNotEmpty = true: this.isNotEmpty = false
       })
   }

}
</script>

<style scoped>
.container_search {
    height: 100%;
    padding: 0;
    max-width: 980px;
    margin:0 10px;
}
.container_search input{
    background-color: transparent;
    border: none;
    border-radius: 0;
    outline: none;
    height: 3rem;
    width: 100%;
    font-size: 16px;
    margin: 0 0 8px 0;
    padding: 0;
    box-shadow: none;
    box-sizing: content-box;
    text-align:right;
}
@media(max-width:480px) {
  .container_search {
   margin:0 10px;
  }
}
</style>
