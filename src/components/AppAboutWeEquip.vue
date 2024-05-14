<script>
export default {
    data () {
        return {
            listArray: [
                {                   
                    text  : "Costumer Service",
                    
                },
                {                    
                    text  : "Online Consultation",
                    
                },
                {                  
                    text  : "Sales Management",
                   
                },

            ],
        }
    }

}
</script>

<template>
    <div class="container py-5">
        <div class="row">
            <div class="col">
                <div>
                    <p>
                        We Equip Leaders with Strategy and
                        vision
                    </p>

                    <ul>
                        <li v-for="curList in listArray">
                            <button class="border border-0 bg-light">
                                <i class="fa-solid fa-plus"></i>
                            </button>
                            {{ curList.text }}   
                            <div class="ms_paragraf d-none">
                                 Atque doloribus quasi corporis impedit incidunt 
                                 tenetur obcaecati nostrum ipsum blanditiis quo sapiente eos, 
                                 quam aliquid nam, eveniet voluptatem quisquam
                            </div>
                        </li>
                       
                    </ul>
                </div>
            </div>
            <div class="col d-flex justify-content-end">
                <div class="">
                    <img class="img-fluid" src="../assets/img/who-we-are-1200x1350.jpg" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped leng="scss" > 
@use "../style/partial/variables" as *;
  p {
    font-size: 3.5rem;
  }

  ul {
    list-style-type: none;
  }

  i:hover {
    color:#f86011 ; 
  }
  
</style>