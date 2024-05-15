<script>
import AppHero from "../components/HomeComponents/AppHero.vue";
import AppConsultation from "../components/HomeComponents/AppConsultation.vue";
import AppBrands from "../components/HomeComponents/AppBrands.vue";
import AppListCard from "../components/HomeComponents/AppListCard.vue";
import AppClientBoost from "../components/HomeComponents/AppClientBoost.vue";
import AppValue from "../components/HomeComponents/AppValue.vue";
import AppAboutAwards    from "../components/AppAboutAwards.vue";
import AppQuote from "../components/HomeComponents/AppQuote.vue";
import AppMarketing from "../components/HomeComponents/AppMarketing.vue";
import AppListMarketing from "../components/HomeComponents/AppListMarketing.vue";
import AppContactInfo from "../components/HomeComponents/AppContactInfo.vue";





export default {
    components:{
        AppHero,
        AppConsultation,
        AppBrands,
        AppListCard,
        AppClientBoost,
        AppValue,
        AppAboutAwards,
        AppQuote,
        AppMarketing,
        AppListMarketing,
        AppContactInfo,
    },
    data(){
        return {
            
        }
    }
}
</script>

<template>
    <AppHero class="hero"/>
    <AppConsultation/>
    <AppBrands/>
    <AppListCard/>
    <AppClientBoost/>
    <AppValue/>
    <AppAboutAwards/>
    <AppQuote class="quote"/>
    <AppMarketing/>
    <AppListMarketing class="marketingcard"/>
    <AppContactInfo class="contactinfo"/>
</template>
<style scoped lang="scss">
.quote{
    margin-top: 10rem;
}
.marketingcard{
    margin-top: 4rem;
}
.hero{
    margin-top: 4rem;
    margin-bottom: 3rem;
}
</style>