<script>
export default {
    data() {
        return {
           
            menu: [
                {
                    title: "Home",
                    routeName: "home",
                    
                    
                },
                {
                    title: "About",
                    routeName: "about",
                    
                },
                {
                    title: "Free Quote",
                    routeName: "Free Quote",    
                },

            ],
        }

    },
}
</script>
<template>
    <!-- NavBarr -->
    <nav class="navbar bg-body position-fixed w-100 top-0 star-0 z-2">
        <div class="container">
            
            <!-- logo -->
            <a class="navbar-brand" href="#">
                <img src="../assets/img/logo-img-avada.png" alt="">
            </a>
            <!-- /logo -->

            <ul class="ms_navigation d-flex  fs-3  justify-content-between w-50" >
                <li v-for="curLink in menu" class="py-3  d-flex">
                    <!-- :to è il nome della rotta -->
                    <!-- 
                        la classe nav-link crea automaticamente
                        la calsse router-link-active quando selezioniamo
                        il componete interessato.
                        possiamo stilizzare a nostro piacimento questa classe
                        tramite lo stile css
                    -->
                    <router-link 
                    class="nav-link"
                    :to="{name: curLink.routeName}">
                    {{ curLink.title }}
                </router-link>
               
                <a class="md_angle" href="">
                    <div class="md_hover-angle position-relative">
                        <i class="fa-solid fa-angle-down px-3 " v-if="curLink.title ==='Home'"></i>                   
                        <div class=" md_home-alt position-absolute  z-3 text-center rounded shadow" v-if="curLink.title ==='Home'">
                            <h5 class="fs-4 py-3 ">Home Alternative</h5>
                        </div>

                    </div>
                </a>
                
                
            </li>
            </ul>
        </div>
    </nav>
    <!-- /NavBarr -->
</template>
<style scoped lang="scss">
@use "../style/partial/variables" as *;
    img {
        max-width: 300px;    
    }
    ul {
        list-style-type: none;
        
        li:hover {
            border-bottom: 3px solid$orange-color ;
           
            a {            
                color:$orange-color;

                .fa-solid{
                    color:$orange-color;
                }

            }
           
        }
        
    }

    .router-link-active {
        color:$orange-color;         
        
    }

    .md_home-alt {
        width: 300px;
        background-color: white;
        display: none;
        top: 50px;
        left: -50px;
        
    }

    .md_hover-angle:hover {
        
        .md_home-alt {
            display: block;
           
        }
    }
   
    .md_home-alt:hover {
        color:$orange-color;
    }

</style>