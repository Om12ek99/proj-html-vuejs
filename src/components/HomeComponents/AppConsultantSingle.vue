<script>
export default {
  data() {
    return {
        accountantImg: "brands/marketing-expert-cta.png",        // Percorso relativo dall'indice del progetto
        accountantName: "Sandy Reiff",
        accountantOccupation: "Marketing Consultant Expert",
    }
  },
  methods: {
    getImage(image) {
      return new URL(`../assets/img/${image}`, import.meta.url).href                          // Utilizzo di require 
    }
  }
}
</script>

<template>
  <div class="col">
    <img :src="getImage(accountantImg)" alt="">
  </div>
  <div class="col">
    <h4>{{ accountantName }}</h4>
    <h5>{{ accountantOccupation }}</h5>
    <h1>ciao</h1>
  </div>
  <div class="col">
    <h2>Drive Leads and Sales with Avada</h2>
  </div>
  <div class="col">
    <button>555555s555555</button>
  </div>
</template>

<style scoped lang="scss">
</style>
