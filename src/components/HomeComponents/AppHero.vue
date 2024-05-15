

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
                <div class="text">
                    <h1>Unlock Your Online Growth Potential</h1>
                <h3>Online Marketing to secure customer retention, leads, and sales. We focus on the bigger picture.
                </h3>
                <br>
                </div>
                <a href="#" class="w-75 py-3 text-center">
        <button type="button" class="btn ms_button  py-2 px-4 fs-5">
          Our Services
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
    height: 725px;
}
.ms_button {
      background-color:white;
      color: black;
      font-size: 10px;
      border: 1px solid black;

    }
    .text{
        color: white;
        h1{
    margin-top: 7rem;
    font-size: 4.5rem;
}

    }



</style>