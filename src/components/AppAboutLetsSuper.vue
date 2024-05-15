<script>
</script>

<template>
    <div class="ms_bg-orange w-100 text-center text-light py-5 d-flex flex-column align-items-center">
        <div class="ms_title py-4">
            Let's Supercharge Your Online Growth
        </div>
        <a href="">
            <button class="ms_btn btn  py-3 px-5">Book A Free Consultation</button>
        </a>
        <div class="py-5">
            <span class="fs-2 px-4">inquiries@company.com</span> 
            <span class="fs-2 px-4">Call us (555) 802-1234</span>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use "../style/partial/variables" as *;
 
 .ms_bg-orange {
    background-color:$color-orange;

     .ms_title {
         font-size: 3.5rem;
     }

     .ms_btn {
        background-color: white;
        border: 2px solid;
     }

     .ms_btn:hover {
        background-color: $color-orange;
        color:white;
    
    } 
 }
</style>