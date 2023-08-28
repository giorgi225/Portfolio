import { createRouter, createWebHistory } from "vue-router";
import { RouteName, RoutePath } from "@/imports";

const routes = [
  {
    path: RoutePath.HOME,
    name: RouteName.HOME,
    component: () => import("@/views/Home.vue"),
  },
  {
    path: RoutePath.ABOUT,
    name: RouteName.ABOUT,
    component: () => import("@/views/About.vue"),
  },
  {
    path: RoutePath.PROJECTS,
    name: RouteName.PROJECTS,
    component: () => import("@/views/Projects.vue"),
  },
  {
    path: RoutePath.SERVICES,
    name: RouteName.SERVICES,
    component: () => import("@/views/Services.vue"),
  },
  {
    path: RoutePath.RESUME,
    name: RouteName.RESUME,
    component: () => import("@/views/Resume.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
