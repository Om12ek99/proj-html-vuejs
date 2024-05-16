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
        
            <img :src="icons" alt="" class="img-fluid w-25">
        
        <h1>{{ title }}</h1>
        <h2>{{ subTitle }}</h2>
        <p class="fw-semibold"> {{ paragraf }}</p>
    </div>
</template>

<style scoped lang="scss">
   
</style>