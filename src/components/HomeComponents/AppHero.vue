//ricordati di importare AppForm.vue

<script>
import AppForm from "../HomeComponents/AppForm.vue"
export default {
    components:{
        AppForm,
    },
    
    data(){
        return {

        }
    }
}
</script>
<template>
   
    <div class="col">
        <h1>Unlock Your Online Growth Potential</h1>
        <h3>Online Marketingto secure customer retention, leads, and sales. We focus on the bigger picture.</h3>
        <Button>Our Services</Button>               //NB ricordarti di mettere l'icona della freccia!
    </div>
    <div class="col">
        <AppForm/>                                  //Qui ci va il form che Valerio fa
    </div>
</template>
<style scoped lang="scss">
</style>