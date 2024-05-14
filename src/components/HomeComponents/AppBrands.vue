<script>
export default {
    data(){
        return {
            brandImages: [                                                  //object contenente le icone
                {
                    src:"src/assets/img/brands/abstract.webp",              //link delle icone
                    title:"abstract"                                        //nome delle icone
                },
                {
                    src:"src/assets/img/brands/cglobal.webp",
                    title:"cglobal"
                },
                {
                    src:"src/assets/img/brands/digitalbox.webp",
                    title:"digitalbox"
                },
                {
                    src:"src/assets/img/brands/hemisferio.webp",
                    title:"hemisferio"
                },
                {
                    src:"src/assets/img/brands/next.webp",
                    title:"next"
                },
                {
                    src:"src/assets/img/brands/spaces.webp",
                    title:"spaces"
                }
            ]
        }
    }
}
</script>
<template>
    <div class="container">
        <div class="row">
            <h1>Some Brands We Work With</h1>
            <h3>Quisque aliquet, libero consequat elementum convallis.</h3>
        </div>
        <!-- riga delle icone -->
        <div class="row">
            <!-- chiamata dinamica delle icone -->
            <div class="col" v-for="brand in brandImages">
                <img :src="brand.src" alt="">
            </div>

        </div>
    </div>
</template>
<style scoped lang="scss">
.container{                                             //eventualmente da modificare con bootrstrap
    .row:first-child{
       text-align: center;
       margin-top:2rem;
       margin-bottom: 2rem;
    }
}
img{
    width: 150px;
}
</style>