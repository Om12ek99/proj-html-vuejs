<script>
import AppAboutHero      from "../components/AppAboutHero.vue";
import AppAboutBgImg     from "../components/AppAboutBgImg.vue";
import AppAboutWeEquip   from "../components/AppAboutWeEquip.vue"; 
import AppAboutSuccesful from "../components/AppAboutSuccesful.vue";
export default {
    components: {
      AppAboutHero,
      AppAboutBgImg,
      AppAboutWeEquip,
      AppAboutSuccesful
    },
    data () {
      return {
        succesArray: [
          {
            icons:"",
            title:"245%",
            subTitle:"Successful rate",
            paragraf:"Curabitur ac leo nunc. Vestibulum et maruris vel ante finibus",
          },
          {
            icons:"",
            title:"#1",
            subTitle:"Marketing Firm",
            paragraf:"Curabitur ac leo nunc. Vestibulum et maruris vel ante finibus",
          },
          {
            icons:"",
            title:"520+",
            subTitle:"Business",
            paragraf:"Curabitur ac leo nunc. Vestibulum et maruris vel ante finibus",
          }, 
         ],
         
      }
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

  <!-- About Section Succesful -->
  <div class="container">
    <div class="row">
      <div class="col" v-for="curCard in succesArray">
        <AppAboutSuccesful  
          :title="curCard.title"
          :subTitle="curCard.subTitle"
          :paragraf="curCard.paragraf"
        />
      </div>
    </div>

  </div>
  <!-- /About Section Succesful -->
</template>
  
