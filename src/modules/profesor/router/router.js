import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/insertar",
    component: () => import("../pages/InsertarPage.vue"),
  },
  {
    path: "/mostrar",
    component: () => import("../pages/MostrarPage.vue"),
  },

  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
