<script>
import AppAboutHero from "../components/AppAboutHero.vue";
 
export default {
    componets: {
      AppAboutHero,
    },
}
</script>


<template>
   <AppAboutHero />
   <section class="d-flex justify-content-center py-5 mt-5">
        
        <div class="py-5 ms_hero text-center w-50">
            <div class="py-1 ms_hero-title ">
                We'are a Team of Marketihg Consultants,
                Passionate in Helping Your Business Grow    
            </div>
            <p class="fs-4"> 
                Maxime corporis harum pariatur molestiae beatae 
                ,sequi, laboriosam obcaecati voluptate delectus 
                rerum totam quis?
            </p>

        </div>  
    </section>
</template>

<style scoped lang="scss">
    .ms_hero-title {
        font-size: 5rem;
    }
</style>

