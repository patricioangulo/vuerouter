<template>
  <h1>Pokemon</h1>
  <div v-if="loading">Loading posts...</div>
  <div v-else-if="error">Error: {{ error.message }}</div>
  <div v-else>
    <h1>Posts</h1>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <p>{{ post.id }}</p>
        <p>name: {{ post.name }}</p>
        <p>price trend: € {{ post.cardmarket.prices.trendPrice }} </p>
        <img :src="post.images.small" :alt="post.name">
        <button>add to trolley</button>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const posts = ref<Post[]>([]);
const loading = ref(true);
const error = ref();



interface Post {
  id: string;
  name: string;
  images: Images;
  cardmarket: {
    prices: {
      trendPrice: string;
    }
  };
}

interface Images {
  small: string;
}


onMounted(async () => {
  // const url = 'https://api.pokemontcg.io/v2/cards?q=set.series:Scarlet%20&%20Violet';
  const url = 'https://api.pokemontcg.io/v2/cards?q=rarity:Rare%20AND%20set.series:Scarlet%20&%20Violet';
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const { data } = await response.json();
    posts.value = data;
  } catch (error: any) {
    error.value = error;
  } finally {
    loading.value = false;
  }
});
</script>

<style scoped>
ul {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  ;
  list-style: none;
}

li {
  margin: 0.25rem
}
</style>