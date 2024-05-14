<script>
import AppAboutHero    from "../components/AppAboutHero.vue";
import AppAboutBgImg   from "../components/AppAboutBgImg.vue";
import AppAboutWeEquip from "../components/AppAboutWeEquip.vue"; 
export default {
    components: {
      AppAboutHero,
      AppAboutBgImg,
      AppAboutWeEquip,
    }
}
</script>


<template>
  <!-- About Section Hero -->
  <AppAboutHero />
  <!-- /About Section Hero -->

  <!-- About Section Img Bg -->
  <AppAboutBgImg />
  <!-- /About Section Img Bg -->

  <!-- About Section We Equip  -->
  <AppAboutWeEquip />
  <!-- /About Section We Equip  -->
</template>
  
