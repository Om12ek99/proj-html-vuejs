<script>
export default {
    
    props: {
        icons    : String,
        title    : String,
        subTitle : String,
        paragraf : String
    }
  
}
</script>

<template>
    <div class="md_card text-center">        
        <img :src="icons" alt="" class="img-fluid">        
        <div class="md_title">{{ title }}</div>
        <h2>{{ subTitle }}</h2>
        <p class="fw-semibold"> {{ paragraf }}</p>
    </div>
</template>

<style scoped lang="scss">
   .md_title{
    font-size: 4rem;
   }

   img {
    width: 40px;
   }
</style>