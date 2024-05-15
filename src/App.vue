<script>
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue"
export default {
    components: {
        AppHeader,
        AppFooter,
    },
    data() {
        return {

        }
    },
}
</script>

<template>

    <!-- Header  -->
    <AppHeader />
    <!-- /Header  -->

    <!-- dove inseriamo tutti i componenti della pagina -->
    <router-view></router-view>
    <!-- dove inseriamo tutti i componenti della pagina -->
    
     <!-- Footer -->
    <AppFooter />
    <!-- /Footer -->

</template>
<style scoped lang="scss"></style>