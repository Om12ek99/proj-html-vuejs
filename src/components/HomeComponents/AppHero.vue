

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
    <div class="container py-5">
        <div class="row">
            <div class="col">
                <h1>Unlock Your Online Growth Potential</h1>
                <h3>Online Marketing to secure customer retention, leads, and sales. We focus on the bigger picture.
                </h3>
                <Button>Our Services</Button>
            </div>
            <div class="col">
                <AppForm />    
            </div>
            <!-- //NB ricordarti di mettere l'icona della freccia! -->
        </div>
        
            <!-- //Qui ci va il form che Valerio fa -->
        
    </div>

</template>
<style scoped lang="scss"></style>