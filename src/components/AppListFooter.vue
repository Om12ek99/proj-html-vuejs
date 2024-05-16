<script>
export default {
    props: {
        
        liText: String,
    }
}

</script>

<template>    
    <li class="fs-5 py-3">{{ liText }}</li>
</template>

<style scoped lang="scss">
@use "../style/partial/variables" as *;
    li:hover {
        border-right: 3px solid$orange-color ;
        color:$orange-color;
        
    }
</style>