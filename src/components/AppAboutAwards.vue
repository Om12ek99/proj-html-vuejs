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
      },
      
    }
}
</script>

<template>
    <div class="ms_card text-center">
        <h2 class="fw-bolder" >Awards</h2>
        <ul class="d-flex justify-content-center">
            <li v-for="curAwards in awardsArray" class="text-center">
                <a href="#">
                    <img 
                    class="w-50" 
                    :src="getImgAwards(curAwards.img)" 
                    alt="">
                </a>
                <div class="fw-bolder">{{ curAwards.title }}</div>
                <div class="fw-bolder" >{{ curAwards.subTitle }}</div>
            </li>
        </ul>
    </div>
</template>

<style scoped lang="scss">
@use "../style/partial/variables" as *;
    ul {
        list-style-type: none;

    }
    .color {
        color:rgb(100 144 255);
        a:hover {
            color:$orange-color;
        }
    }

</style>