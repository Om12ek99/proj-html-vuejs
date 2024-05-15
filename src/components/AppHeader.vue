<script>
export default {
    data() {
        return {
            menu: [
                {
                    title: "Home",
                    routeName: "home"
                },
                {
                    title: "About",
                    routeName: "about"
                },
                {
                    title: "Free Quote",
                    routeName: "Free Quote"
                },

            ]
        }

    },
}
</script>
<template>
    <!-- NavBarr -->
    <nav class="navbar bg-body-tertiary position-fixed w-100 top-0 star-0 z-2">
        <div class="container">
            
            <!-- logo -->
            <a class="navbar-brand" href="#">
                <img src="../assets/img/logo-img-avada.png" alt="">
            </a>
            <!-- /logo -->

            <ul class="ms_navigation d-flex gap-5 fs-3" >
                <li v-for="curLink in menu" >
                    <router-link 
                     :to="{name: curLink.routeName}">
                     {{ curLink.title }}
                    </router-link>
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

        a:hover {
            
            color:#f86011;
        }
       
        
    }


   

</style>