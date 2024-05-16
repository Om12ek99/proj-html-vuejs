<script>
export default {
    props: {
        image: String,
        text: String,
        data: String,
        paragraf: String
    },
    data() {
        return {

        }
    }
}
</script>
<template>
    <div class="md_card">
        <img :src="image" alt="Card Image">
        <h2 class="text mt-3 mb-5">{{ text }}</h2>
        <h2 class="data">{{ data }}</h2>
        <h5>{{ paragraf }}</h5>
    </div>
</template>
<style scoped lang="scss">
img {
    width: 95%;
    border-radius: 10px;
}

.data {
    font-weight: bold;
    font-size: 3.5rem;
}
</style>