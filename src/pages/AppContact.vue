<script>
import AppForm from "../components/AppForm.vue";
import AppList from "../components/AppList.vue";
import AppCard from "../components/AppCard.vue";

export default {
  components: {
    AppForm,
    AppList,
    AppCard,
  },
};
</script>

<template>
<div class="py-5">
  <div class="container py-5 d-flex justify-content-center">

       <div class="md_title py-5 fw-medium">
    Get a personal consultation
  
       </div> 
</div>

</div>


 

  <div class="container" style="width: 50%;">
    <div class="row">
      <div class="col" >
        <AppCard />
      </div>
      <div class="col" >
        <AppForm />
      </div>
    </div>
  </div>

  <section class="bgcolor">
    <div class="container">
      <div class="row">
        <div class="col">
          <AppList />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.bgcolor{
  background-color: lightgrey;
}
.md_title{
  font-size: 5rem;
}
</style>
