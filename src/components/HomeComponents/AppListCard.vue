<script>
import AppCardStaff from "../HomeComponents/AppCardStaff.vue"
export default {
  components: {
    AppCardStaff,
  },
  data() {
    return {
      ListCardArray: [
        {
          image: "https://avada.website/marketing-consultant/wp-content/uploads/sites/142/2020/06/case-studies-1.jpg",
          text: "How Spaces attracted five million visitors by improving the content",
          data: "200%",
          paragraf: "Higher revenue from digital",
        },
        {
          image: "https://avada.website/marketing-consultant/wp-content/uploads/sites/142/2020/06/case-studies-4.jpg",
          text: "Creativity helped Hemisferio to increase their brand reach vertically",
          data: "10x",
          paragraf: "Sales increase with same ad spend",
        },
        {
          image: "https://avada.website/marketing-consultant/wp-content/uploads/sites/142/2020/06/case-studies-6.jpg",
          text: "How DigitalBox used AI-powered data insight to boost sales",
          data: "3-year",
          paragraf: "Partnership with Avada Consultant",
        },
      ],
    }
  }
}
</script>
<template>
  <div class="container">
    <div class="row text-center mt-5 mb-5">
      <h1 class="text">Trusted by Leading Organisations</h1>
    </div>
    <div class="row mb-4">
      <div class="col-md-4" v-for="(item, index) in ListCardArray" :key="index">
        <AppCardStaff :image="item.image" :text="item.text" :data="item.data" :paragraf="item.paragraf" />
      </div>
    </div>
    <div class="row d-flex justify-content-center">
      <a href="#" class="w-75 py-3 text-center">
        <button type="button" class="btn ms_button text-light ">
          Read more case studies
        </button>
      </a>
    </div>
  </div>
</template>

<style scoped lang="scss">
.text {
  font-weight: bold;
  font-size: 3.5rem;
}

.ms_button {
  background-color: #f86011;
  margin-top: 4.5rem;
  padding: 0.8rem 2.3rem;
  border-radius: 12px;
  font-size: 18px
}

.ms_button:hover {
  background-color: #e04e10;
}
</style>