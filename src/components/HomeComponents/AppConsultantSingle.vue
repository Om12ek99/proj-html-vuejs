<script>
export default {
  data() {
    return {
      accountantImg: "brands/marketing-expert-cta.png",        // Percorso relativo dall'indice del progetto
      accountantName: "Sandy Reiff",
      accountantOccupation: "Marketing Consultant Expert",
    }
  },
  
}
</script>

<template>
  <div class="container">
    <div class="wrapper d-flex p-1">
      <div class="col-1 image">
    <img src="https://avada.website/marketing-consultant/wp-content/uploads/sites/142/2020/06/marketing-expert-cta.png" alt="">
  </div>
  <div class="col-2 info d-flex flex-column justify-content-center align-items-start ">
    <h4>{{ accountantName }}</h4>
    <h5>{{ accountantOccupation }}</h5>
  </div>
  <div class="col d-flex justify-content-start align-items-center motto">
    <h2>Drive Leads and Sales with Avada</h2>
  </div>
  <div class="col-2 d-flex justify-content-end align-items-center button">
    <a href="#" class="text-right">
                    <button type="button" class="btn ms_button  py-2">
                      <i class="fa-solid fa-phone"></i>351-4034568
                    </button>
                </a>
  </div>
    </div>
    

  </div>
  
</template>

<style scoped lang="scss">
.wrapper{
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  
 .image{
  padding-left: 3rem;
 }
 .info{
  padding-left: 2rem;

  h4{
    font-size: 19px;
  }
  h5{
    font-size: smaller;
  }
 }
 .motto{
  padding-left: 2rem;
  h2{
    font-size: 28px;
  }
  
 }
  img{
  border-radius: 50%;
  width: 60px;
}
}
h2{
  font-weight: 10px;
}
.button{
  padding-right: 3rem;
  .ms_button {
    background-color: #feefe7;
    font-size: 20px;
    width: 15rem;
    color: #f86011;

    i {
      margin-right: 1rem;
    }

    &:hover {
      background-color: #f86011; 
      color: white; 
    }
  }
}

</style>
