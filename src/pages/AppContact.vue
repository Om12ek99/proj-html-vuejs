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
  <h1>Ottieni una consulenza personale</h1>

  <div class="container">
    <div class="row">
      <div class="col ">
        <AppCard />
      </div>
      <div class="col ">
        <AppForm />
      </div>
    </div>
  </div>
<div class="container">
  <div class="row">
    <div class="col">
        <AppList />
    </div>
  </div>
</div>

</template>

<style scoped lang="scss"></style>
