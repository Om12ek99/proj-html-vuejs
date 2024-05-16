<script>
import AppListFooter from "./AppListFooter.vue"

export default {
  components: {
    AppListFooter
  },
  data() {
    return {
      listIcons: [
        {
          icons: "fab fa-facebook-f",
        },
        {
          icons: "fa-brands fa-x-twitter",
        },
        {
          icons: "fab fa-instagram",
        },
        {
          icons: "fa-brands fa-youtube",
        },
        {
          icons: "fab fa-linkedin-in",
        },
        {
          icons: "fa-brands fa-tiktok",
        },
      ],
      serviceList: [
        {
          contLi: "Marketing Plan",
        },
        {
          contLi: "Sales Development",
        },
        {
          contLi: "Digital Marketing",
        },
        {
          contLi: "Pricing",
        },
        {
          contLi: "Why Us",
        },
        {
          contLi: "Case Studies",
        },
      ],

      resourcesList: [
        {
          contLi: "Learning Center"
        },
        {
          contLi: "Video Tutorials"
        },
        {
          contLi: "Customers"
        },
        {
          contLi: "Blog"
        },
      ],

      companyList: [
        {
          contLi: "Who We Are"
        },
        {
          contLi: "Contact Us"
        },
        {
          contLi: "Careers"
        },
      ],
    }

  }
}

</script>
<template>
  <!-- FOOTER -->
  <footer class="py-5 ">
    <div class="container">
      <div class="row  gap-5">
        <div class="col px-5">
          <!-- TITOLO -->
          <!-- LISTA CHE RIUNISCE LE ICONE  -->
          <h2>Grow Your Online Business Strategically, and Improve Customer Retention</h2>
          <ul class="d-flex gap-3 list-unstyled py-3">
            <li class="fs-3" v-for="curIcon in listIcons">
              <a href="#"><i :class="curIcon.icons"></i></a>
            </li>
          </ul>
        </div>
        <!-- GRUPPO LINK A LISTE  -->
        
        <!-- LISTA SERVIZI -->
        <div class="col">
          <h4 class="fw-medium fs-2">Services</h4>
          <ul class="list-unstyled">
            <li v-for="curSer in serviceList">
              <a href="">
                <AppListFooter :liText="curSer.contLi" />
              </a>
            </li>
          </ul>
        </div>
       <!-- LISTA SERVIZI -->
      
       <!-- LISTA RISORSE -->
        <div class="col">
          <h4 class="fw-medium fs-2">Resources</h4>
          <ul class="list-unstyled">
            <li v-for="curRes in resourcesList">
              <a href="">
                <AppListFooter :liText="curRes.contLi" />
              </a>
            </li>
          </ul>
        </div>
        <!-- LISTA RISORSE -->
        
        <!-- LISTA COMPANY -->
        <div class="col">
          <h4 class="fw-medium fs-2">Company</h4>
          <ul class="list-unstyled">
            <li v-for="curCom in companyList">
              <a href="#">
                <AppListFooter :liText="curCom.contLi" />
              </a>
            </li>

          </ul>
        </div>
         <!-- /LISTA COMPANY -->
      </div>
    </div>
    <!-- FOOTER CREDITS NUMERO MAIL CREATED  -->
    <div class="footer-copyright">
      <div class="container">
        <div class="row">
          <div class="col-md-4 mt-5 text-center">
            <p>© 2012 -2020 • Avada Consultant • Powered by Team 11 boolean.</p>
          </div>

          <div class="col-md-4 mt-5 text-center">
            <p>Call Us (555) 802-1234</p>
          </div>

          <div class="col-md-4 mt-5 text-center">
            <p>info@yourcompany.com</p>
          </div>

        </div>
      </div>
    </div>

  </footer>
</template>
<style scoped lang="scss">
ul {
  list-style-type: none;
}

a:hover {}
</style>