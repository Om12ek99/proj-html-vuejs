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

    
    <router-view></router-view>

    <!-- Footer -->
    <AppFooter />
    <!-- /Footer -->

</template>
<style scoped lang="scss"></style>