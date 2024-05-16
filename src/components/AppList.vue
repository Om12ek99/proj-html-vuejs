<script>
export default {
  data() {
    return {
      listArray: [
        {
          text: "Vivamus id ante vel purus commodo cursus? Nunc sit amet cursus massa?",
          parText:
            "Suspendisse consectetur, est sed lobortis dictum, turpis orci finibus felis, mattis tempus ex dui ac diam. Etiam dictum turpis tempor, bibendum lacus eget, ullamcorper eros. Proin vitae viverra metus. In sed risus vehicula, tincidunt sem vel, dignissim orci. Cras porttitor erat sit amet nisl fermentum, at pharetra lorem blandit. ",
          visible: false,
        },
        {
          text: "Quisque aliquet, libero consequat elementum convallis, erat risus imperdiet?",
          parText:
            "Suspendisse consectetur, est sed lobortis dictum, turpis orci finibus felis, mattis tempus ex dui ac diam. Etiam dictum turpis tempor, bibendum lacus eget, ullamcorper eros. Proin vitae viverra metus. In sed risus vehicula, tincidunt sem vel, dignissim orci. Cras porttitor erat sit amet nisl fermentum, at pharetra lorem blandit.",
          visible: false,
        },
        {
          text: "Mauris porta interdum risus, at scelerisque ante faucibus porttitor erat sit?",
          parText:
            "Suspendisse consectetur, est sed lobortis dictum, turpis orci finibus felis, mattis tempus ex dui ac diam. Etiam dictum turpis tempor, bibendum lacus eget, ullamcorper eros. Proin vitae viverra metus. In sed risus vehicula, tincidunt sem vel, dignissim orci. Cras porttitor erat sit amet nisl fermentum, at pharetra lorem blandit. ",
          visible: false,
        },
        {
          text: "Suspendisse sed ligula sed est ornare gravida varius natoque magnis?",
          parText:
            "Suspendisse consectetur, est sed lobortis dictum, turpis orci finibus felis, mattis tempus ex dui ac diam. Etiam dictum turpis tempor, bibendum lacus eget, ullamcorper eros. Proin vitae viverra metus. In sed risus vehicula, tincidunt sem vel, dignissim orci. Cras porttitor erat sit amet nisl fermentum, at pharetra lorem blandit. ",
          visible: false,
        },
        {
          text: "Curabitur ornare felis sit amet neque volutpat, porta lobortis elit rutrum?",
          parText:
            "Suspendisse consectetur, est sed lobortis dictum, turpis orci finibus felis, mattis tempus ex dui ac diam. Etiam dictum turpis tempor, bibendum lacus eget, ullamcorper eros. Proin vitae viverra metus. In sed risus vehicula, tincidunt sem vel, dignissim orci. Cras porttitor erat sit amet nisl fermentum, at pharetra lorem blandit. ",
          visible: false,
        },
        {
          text: "Praesent posuere nisi risus auctor posuere? Etiam auctor laoreet magna?",
          parText:
            "Suspendisse consectetur, est sed lobortis dictum, turpis orci finibus felis, mattis tempus ex dui ac diam. Etiam dictum turpis tempor, bibendum lacus eget, ullamcorper eros. Proin vitae viverra metus. In sed risus vehicula, tincidunt sem vel, dignissim orci. Cras porttitor erat sit amet nisl fermentum, at pharetra lorem blandit. ",
          visible: false,
        },
      ],
    };
  },
  methods: {
    showParagr(index) {
      console.log("ciao");
      this.listArray[index].visible = !this.listArray[index].visible;
    },
  },
};
</script>

<template>
  <div class="container py-5">
    <div class="row">
      <div class="col">
        <div>
          <p class="ms_title text-center">
            What problem are you trying to solve?
          </p>

          <ul>
            <li v-for="(curList, index) in listArray" :key="index">
              <div class="d-flex w-100 justify-content-between py-2">
               <h5 class="px-5">{{ curList.text }}</h5>
                <button
                  @click="showParagr(index)"
                  class="border border-0 ms_btn"
                >
                  <i class="fa-solid fa-plus" v-if="!curList.visible"></i>
                  <i class="fa-solid fa-minus" v-else></i>
                </button>

      
              </div>

              <div>
                <div class="ms_paragraf px-5" v-if="curList.visible">
                  <p class="ms_par-text px-4">{{ curList.parText }}</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "../style/partial/variables" as *;
.ms_title {
  font-size: 2.5rem;
}

ul {
  list-style-type: none;
}
li {
  .ms_btn {
    background-color: lightgrey;
    i {
      font-size: 1.5rem;
    }
  }
}

i:hover {
  color: $orange-color;
}

.ms_par-text {
  font-size: 1rem;
}
</style>
