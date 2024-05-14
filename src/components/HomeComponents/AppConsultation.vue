<script>
import AppConsultationCards from './AppConsultationCards.vue';
export default {
    components: {
        AppConsultationCards,
    },
    data(){
        return {
            ConsultantArray:{            
            businessGrowthArray:{
                    intest: "Business Growth",
                    title: "Increase Brand Awareness",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor placerat luctus. Nullam sit amet ante sed orci convallis gravida et at massa.",
                    buttontext:"Get A Consulation"  ,
                    image: "src/assets/img/BusinessGrowth.png",
            },    //object con i contentunti della prima riga
                
                
                InvestorArray:{                 //object con i contentunti della seconda riga
                    intest:"Investors In People",
                    title:"In-House Sales Training",
                    text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor placerat luctus. Nullam sit amet ante sed orci convallis gravida et at massa.",
                    buttontext:"Get A Consulation",
                    image:"src/assets/img/InvestorsInPeople.png", 
                },                                  
                
                
                mediaAnalysisArray: {
                    intest:"Social Media Analysis",
                    title:"Harness Your Social Proof",
                    text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor placerat luctus. Nullam sit amet ante sed orci convallis gravida et at massa.",
                    buttontext:"Get A Consultation",
                    image:"src/assets/img/Media Analysis.png"
                }  //object con i contentunti della terza riga
                                           
             
                
            //fine degli object
            },  //fine dell'array 
        }
        //fine del return
    }   //fine del data
}       // fine del export default
</script>
<template>
    <div class="container">
      <!-- Itera sugli oggetti dell'array ConsultantArray -->
      <div class="row" v-for="(card, index) in ConsultantArray" :key="index">
        <!-- Mostra i contenuti dell'oggetto corrente -->
        <div class="col">
          <img :src="card.image" alt="Card Image">
        </div>
        <div class="col">
          <h5>{{ card.intest }}</h5>
          <h1>{{ card.title }}</h1>
          <p>{{ card.text }}</p>
          <button>{{ card.buttontext }}</button>
        </div>
      </div>
      <div class="spacer"></div>
    </div>
  </template>
  
<style scoped lang="scss">
    .spacer {
    margin-top: 50px; 
  }
    img{
        width: 500px;
        height: 500px;
    }
</style>