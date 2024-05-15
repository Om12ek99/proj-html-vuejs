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
        <h1>{{ title }}</h1>
        <h2>{{ subTitle }}</h2>
        <p> {{ paragraf }}</p>
    </div>
</template>

<style scoped lang="scss">

</style>