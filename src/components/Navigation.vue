
<template>
  <nav class="card">
    <Menubar :model="items">
      <template #item="props">
        <router-link v-if="props.item.to" :to="props.item.to" class="flex flex-column items-center">
          {{props.item.label}}
        </router-link>
      </template>
    </Menubar>
  </nav>
</template>
<script setup>
import { ref } from "vue";
import Menubar from 'primevue/menubar';

const items = ref([
  {
    label: 'Home',
    to: '/',
  },
  {
    label: 'Pokemon',
    to: '/pokemon',
  },
  {
    label: 'Support',
    to: '/support',
  },

]);
const position = ref('Top');
const positions = ref([
  {
    label: 'Bottom',
    value: 'bottom'
  },
  {
    label: 'Top',
    value: 'top'
  },
  {
    label: 'Left',
    value: 'left'
  },
  {
    label: 'Right',
    value: 'right'
  }
]);

</script>

<style scoped>
.dock-demo>.dock-window {
  width: 100%;
  height: 450px;
  position: relative;
  background-image: url("https://primefaces.org/cdn/primevue/images/dock/window.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 1;
}

.dock-demo>.p-dock {
  z-index: 1000;
}

/* Ensure labels are visible */
.p-dock-item-label {
  color: white;
  /* Or any color that suits your design */
}
</style>
