<script>
export default {
    data(){
        props: {
            {
            ConsultImage:String,              // immagine di display
            ConsultIntest:String,             // testo della intestazione
            ConsultLogo:String,               // logo della intestazione
            ConsultTitle:String,              // titolo della card
            ConsultText:String,               // testo della card
            ConsultButton:String,             // testo del button
            },
        }
        return {
            
        }
    }
}
</script>
<template>
    <div class="card">
        <div class="row">
            <div class="col">
                <img :src="ConsultImage" alt="display image">
            </div>
            <div class="col">
                <img :src="ConsultLogo" alt="">
                <h4>{{ ConsultIntest }}</h4>
                <h2>{{ ConsultTitle }}</h2>
                <p>{{ ConsultText }}</p>
                <button>{{ ConsultButton }}</button>
            </div>
        </div>
    </div>
</template>
<style scoped lang="scss">
</style>