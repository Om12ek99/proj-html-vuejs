<script>
export default {
    data(){
        return{
            featuresArray:[
                {
                    icon:"fa-solid fa-file-invoice",
                    title:"Accountabilty",
                    subtitle:"Curabitur ac leo nunc vestibulum"
                },
                {
                    icon:"fa-solid fa-helmet-safety",
                    title:"Transparency",
                    subtitle:"Curabitur ac leo nunc vestibulum"
                },
                {
                    icon:"fa-solid fa-sack-dollar",
                    title:"Investment",
                    subtitle:"Curabitur ac leo nunc vestibulum"
                }
            ]
        }
    }
};
</script>
<template>
        <div class="row py-5 px-5">
            <div class="col-5 d-flex flex-column justify-content-center align-items-center">
                <div class="row">
                    <h3><strong>We Build Relationships</strong></h3>
                    <p>Curabitur ac leo nunc. Vestibulum et mauris vel ante finibus maximus nec ut leo. Integer consectetur.</p>
                </div>
                <br>
                <div class="row">
                    <h3><strong>Proprietary Processes</strong></h3>
                    <p>Curabitur ac leo nunc. Vestibulum et mauris vel ante finibus maximus nec ut leo. Integer consectetur.</p>
                </div>
            </div>
            <div class="col">
                <div class="row" v-for="(options, index) in featuresArray" :key="index">
                    <div class="col d-flex justify-content-end align-items-center">
                        <div class="icon d-flex justify-content-center align-items-center">
                            <i :class="options.icon"></i>
                        </div>                        
                    </div> 
                    <div class="col-7 d-flex flex-column justify-content-start align-items-start py-2">
                        <div class="text">
                                <h4>{{ options.title }}</h4>
                        <p>{{ options.subtitle }}</p>
                        </div>
                    
                    </div>
                </div>
            </div>
        </div>
</template>
<style scoped lang="scss">
.icon{
    width: 70px;
    height: 70px;
    border: 1px solid #f86011;
    border-radius: 25%;
    transition: all 0.3s ease; 

}

.icon:hover {
    color: white; 
}

i {
    font-size: 2rem;
    color: #f86011; 
}

.icon:hover i {
    color: white; 
}

.text {
    margin-top: 18px;
}

p {
    font-size: larger;
}

h4 {
    font-size: 25px;
    color: black;
}

.icon:hover + .text h4 {
    color: #f86011; 
}
</style>
