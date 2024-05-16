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
    <AppConsultation class="consult"/>
    <AppBrands/>
    <AppListCard/>
    <AppClientBoost/>
    <AppValue/>
    <AppAboutAwards/>
    <AppQuote class="quote"/>
    <AppMarketing class="marketing"/>
    <AppListMarketing class="marketingcard"/>
    <AppContactInfo class="contactinfo"/>
</template>
<style scoped lang="scss">
.quote{
    margin-top: 10rem;
    margin-bottom: 10rem;
}
.marketingcard{
    padding-top: 5rem;
}
.marketing{
    background-color: #F6F6F8;
    padding-top: 10rem;
}
.hero{
    margin-top: 5rem;
    margin-bottom: 3rem;
}
.consult{
    margin-top: 10rem;
}
</style>