<script>
export default {
  data() {
    return {
      ConsultantArray: {
        businessGrowthArray: {
          intest: "Business Growth",
          title: "Increase Brand Awareness",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor placerat luctus. Nullam sit amet ante sed orci convallis gravida et at massa.",
          buttontext: "Get A Consulation",
          image: "src/assets/img/BusinessGrowth.png",
        },    //object con i contentunti della prima riga


        InvestorArray: {
          intest: "Investors In People",
          title: "In-House Sales Training",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor placerat luctus. Nullam sit amet ante sed orci convallis gravida et at massa.",
          buttontext: "Get A Consulation",
          image: "src/assets/img/InvestorsInPeople.png",
        },


        mediaAnalysisArray: {
          intest: "Social Media Analysis",
          title: "Harness Your Social Proof",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor placerat luctus. Nullam sit amet ante sed orci convallis gravida et at massa.",
          buttontext: "Get A Consultation",
          image: "src/assets/img/Media Analysis.png"
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
    <div class="row " v-for="(card, index) in ConsultantArray" :key="index"> 
      <div class="section d-flex" :class="{ 'flex-row-reverse': index === 'InvestorArray' }">
        <div class="col">
          <img :src="card.image" alt="Card Image">
        </div>
        <div class="col">
          <div class="text">
            <h5>{{ card.intest }}</h5>
            <h1>{{ card.title }}</h1>
            <br>
            <p>{{ card.text }}</p>
            <br>
            <button type="button" class="btn ms_button text-light">
              {{ card.buttontext }}
            </button>
          </div>
        </div>
      </div>    
    </div>
    <div class="spacer"></div>
  </div>
</template>


  
<style scoped lang="scss">
.spacer {
  margin-top: 50px;
}

img {
  width: 600px;
  height: 500px;

}

.ms_button {

  background-color: #f86011;
  padding: 0.8rem 2.3rem;
  border-radius: 12px;
  font-size: 18px
}

.ms_button:hover {
  background-color: #e04e10;
}

.row {
  padding-bottom: 18.5rem;

  .col:last-child {

    .text {
      padding-top: 3rem;
      padding-left: 5rem;
      width: 70%;

      h1 {
        font-size: 3.2rem;
      }

      p {
        font-size: 1.3rem;
      }
    }

  }

}
</style>