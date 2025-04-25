<template>
  <nav class="card">
    <Menubar :model="items">
      <template #item="props">
        <router-link v-if="props.item.to" :to="props.item.to" class="flex flex-column items-center">
          {{ props.item.label }}
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

</script>

<style scoped></style>
