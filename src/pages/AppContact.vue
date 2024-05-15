<script>
import AppForm from "../components/AppForm.vue";
import AppList from "../components/AppList.vue";
import AppCard from "../components/AppCard.vue";
export default {
    components: {
      AppForm,
      AppList,
      AppCard,
     
    }
}
</script>


<template>
  <h1>Ottieni una consulenza personale</h1>
<AppCard />
<AppForm />
<AppList />



</template>



<style scoped lang="scss">
</style>