<script>
export default {
  data() {
    return {
      items: [
        {
          title: 'Item 1',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          open: false,
        },
        {
          title: 'Item 2',
          content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          open: false,
        },
        {
          title: 'Item 3',
          content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
          open: false,
        },
      ],
    };
  },
  methods: {
    toggleAccordion(index) {
      this.items[index].open = !this.items[index].open;
    },
  },
};
</script>


<template>
  <div>
    <div v-for="(item, index) in items" :key="index" class="accordion-item">
      <div class="accordion-title" v-on:click="toggleAccordion(index)">
        {{ item.title }}   
        <div v-if="item.open" class="accordion-content">
        {{ item.content }}
      </div>
      </div>
   
    </div>
  </div>
</template>



<style scoped>
.accordion-item {
  margin-bottom: 10px;
}

.accordion-title {
  cursor: pointer;
  padding: 10px;
  background-color: #f2f2f2;
  border-radius: 5px;
}

.accordion-content {
  padding: 10px;
  background-color: #fff;
  border-radius: 5px;
  display: none;
}
</style>