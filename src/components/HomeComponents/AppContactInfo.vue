<script>
import AppForm from "../HomeComponents/AppForm.vue"
export default {
    components:{
        AppForm,
    }
}
</script>
<template>
    <div class="section">
        <div class="container">
    <div class="row">
        <div class="col text">
            <h1>Let’s Make Things Happen</h1>
            <br>
            <h3>Curabitur ac leo nunc. Vestibulum et mauris vel ante finibus maximus nec ut leo. Integer consectetur.</h3>
            <br>
            <hr>
            <br>
            <p id="quote"><em>“The team at Avada Marketing Consultant is fabulous. They helped us unlock our potential online and offline. We have experienced year on year growth due to their progressive approach.”</em></p>
            <br>
            <h5>George Anderson</h5>
            <p id="company">Digitalbox CEO</p>
        </div>
        <div class="col">
            <AppForm/>
        </div>
    </div>
</div>
    </div>

</template>
<style scoped lang="scss">
h1{
    font-size: 4rem;
}
h3{
    font-size: 2rem;
}
hr{
    width: 20%;
}
.text{
    color: white;
    padding-top: 4rem;
    padding-bottom: 4rem;
}
.section{
    background-color: black;
}
#quote{
    font-size: 1.5rem;
}
#company{
    font-size: smaller;
}
</style>