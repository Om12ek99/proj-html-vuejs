<script>
export default {
    props: {
        image    : String,
        text    : String,
    },
    data(){
        return {
            
        }
    }
}
</script>
<template>
     <div class="md_card">
        <img :src="image" alt="Card Image">
        <h2 class="text mt-3 mb-5">{{ text }}</h2>
    </div>
</template>
<style scoped lang="scss">

img{
    width: 95%;
    border-radius: 10px;
}


</style>