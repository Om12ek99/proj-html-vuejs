

<script>
import AppForm from "../HomeComponents/AppForm.vue"
export default {
    components: {
        AppForm,
    },

    data() {
        return {

        }
    }
}
</script>
<template>
    <div class="wrapper">
        <div class="container py-5">
        <div class="row">
            <div class="col">
                <h1>Unlock Your Online Growth Potential</h1>
                <h3>Online Marketing to secure customer retention, leads, and sales. We focus on the bigger picture.
                </h3>
                <a href="#" class="w-75 py-3 text-center">
        <button type="button" class="btn ms_button text-light py-2 px-4 fs-3">
          Read more case studies
        </button>
      </a>
            </div>
            <div class="col">
                <AppForm />    
            </div>
            <!-- //NB ricordarti di mettere l'icona della freccia! -->
        </div>
        
            <!-- //Qui ci va il form che Valerio fa -->
        
    </div>

    </div>
    

</template>
<style scoped lang="scss">
.wrapper{
    background-image: url("https://avada.website/marketing-consultant/wp-content/uploads/sites/142/2020/06/marketing-intro.jpg");
    object-fit:fill ;
}
.ms_button {
      background-color:#f86011;
    }
h1{
    font-size: 2rem;
}


</style>