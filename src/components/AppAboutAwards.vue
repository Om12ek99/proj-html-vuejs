<script>
export default {
   data() {
    return {

        awardsArray: [
               {
                img      :"award-a.webp",
                title    :"Winner Seo Master MAGT",
                subTitle :"Smart Start Award 2017"
               },
               {
                img      :"award-b.webp",
                title    :"Top Social Media Agencies",
                subTitle :"nex Partner 2018"
               },
               {
                img      :"award-c.webp",
                title    :"10 Fastest Growing Abstract",
                subTitle :"Solution providers 2019"
               },
               {
                img      :"award-d.webp",
                title    :"National Excellence Agencie",
                subTitle :"Award Winner 2020"
               },
             ]
    }
   },
   methods: {
      getImgAwards(iconName) {
        return new URL(`../assets/img/${iconName}`, import.meta.url).href;
      }
    }
}
</script>

<template>
    <div class="ms_card">
        <h2>Awards</h2>
        <ul class="d-flex">
            <li v-for="curAwards in awardsArray">
                <img :src="getImgAwards(curAwards.img)" alt="">
                <div>{{ curAwards.title }}</div>
                <div>{{ curAwards.subTitle }}</div>
            </li>
        </ul>
    </div>
</template>

<style scoped lang="scss">
    ul {
        list-style-type: none;
    }
</style>