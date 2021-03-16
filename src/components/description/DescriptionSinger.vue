<template>
    <div class="container_description">
        <div v-html="singer.bio"></div>
    </div>
</template>

<script>
export default {
    props:['id'],
    data() {
        return {
            singers:null,
            singer:null,
        }
    },

    created() {
        this.singers = this.$store.getters.getState;
        this.singer = this.singers.find((singer) => {
            return singer.id ===  this.id;
        })
       if(!this.singer) {
           return this.$router.push('/')
       }
       console.log(this.singer)
    }
}
</script>

<style>
.container_description {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    direction: rtl;
}
.container_description div {
    font-size: 15px;
}
</style>
