import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Support from "../pages/Support.vue";
import Pokemon from "../pages/Pokemon.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/support', component: Support },
    { path: '/pokemon', component: Pokemon },
  ]
});

export default router;