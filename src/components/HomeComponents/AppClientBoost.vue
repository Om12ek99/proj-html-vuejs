<script>
import AppClientBoostBuild from './AppClientBoostBuild.vue';
export default{
   components: { AppClientBoostBuild },
}
</script>

<template>
    <div class="container py-5">
        <div class="row">

            <div class="col d-flex justify-content-start align-items-center flex-column py-3">

                <p class="md_title w-75">
                    We Boost Our Clients’ Bottom Line by Optimizing Their Growth Potential. </p>

                <p class="md_sub-title w-75">
                    quisque aliquet, libero consequat
                    elementum convallis, erat imperdiet
                </p>

                <a href="#" class="w-75 py-3">
                    <button type="button" class="btn ms_button text-light py-2 px-4 fs-3">
                        Why Work with Us
                    </button>
                </a>
            </div>
            <div class="col">
                <img class="rounded" src="https://avada.website/marketing-consultant/wp-content/uploads/sites/142/2020/07/we-boost-our-clients-1200x1098.jpg" alt="">
            </div>
        </div>
        <AppClientBoostBuild/>
    </div>

</template>

<style scoped lang="scss">
img {
    width: 600px;
}

.md_title {
    font-size: 3rem;
}

.md_sub-title {
    font-size: 1.5rem;
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