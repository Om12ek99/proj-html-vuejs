<script>
export default {
    data () {
        return {
            listArray: [
                {                   
                    text    : "Costumer Service",
                    parText : "Dolor sit amet consectetur adipisicing elit. Ad sunt error debitis impedi doloribus ",
                    visible : false
                    
                },
                {                    
                    text    : "Online Consultation",
                    parText : "Dolor sit amet consectetur adipisicing elit. Ad sunt error debitis impedi doloribus ",
                    visible : false
                    
                },
                {                  
                    text    : "Sales Management",
                    parText : "Dolor sit amet consectetur adipisicing elit. Ad sunt error debitis impedi doloribus ",
                    visible : false
                   
                },

            ],
            
               
        }
    },
    methods: {
        showParagr(index) {
            console.log("ciao");
            this.listArray[index].visible = !this.listArray[index].visible
                  
        },
      
    }

}
</script>

<template>
    <div class="container py-5">
        <div class="row">
            <div class="col">
                <div>
                    <p class="ms_title">
                        We Equip Leaders with Strategy and
                        vision
                    </p>

                    <ul>
                        <li v-for="(curList, index ) in listArray" class="d-flex " :key="index">
                            <button @click="showParagr(index)"  class="border border-0 ms_btn">                               
                               <span class="ms_icons">{{ curList.visible ? "-" : "+" }}</span> 
                            </button>
                         
                            <div>
                                <h3 class="px-4 py-3 ">{{ curList.text }}</h3>
                                    <div class="ms_paragraf" v-if="curList.visible">
                                        <p class="ms_par-text">{{ curList.parText }}</p>
                                    </div>
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

<style scoped lang="scss" > 
@use "../style/partial/variables" as *;
  .ms_title {
    font-size: 3.5rem;
  }

  ul {
    list-style-type: none;
  }
  li {
     
    
      .ms_btn {
        background-color: white;
        .ms_icons{
          font-size: 1.5rem;
          
         
        }
  }
 
  }
  
  .ms_icons:hover {
    color:$orange-color;   
  }

  .ms_par-text {
    font-size: 1.5rem;
  }
  
</style>