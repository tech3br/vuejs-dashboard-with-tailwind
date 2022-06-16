import { createRouter, createWebHistory } from "vue-router";
import RoutesPaths from "./constants";

const routes = [
  {
    path: RoutesPaths.privateRoutes.HelloWorld.path,
    name: RoutesPaths.privateRoutes.HelloWorld.name,
    component: () => import(`../Views/HelloWorld.vue`),
    meta: { auth: false },
  },
  {
    path: RoutesPaths.privateRoutes.Home.path,
    name: RoutesPaths.privateRoutes.Home.name,
    component: () => import(`../Views/Home.vue`),
    meta: { auth: false },
  },
  {
    path: "/:pathMatch(.*)*",
    component: () => import(`../Views/NotFound.vue`),
  },
];

const router = createRouter({ history: createWebHistory(), routes });

router.beforeEach((to, from, next) => {
  if (to.meta.auth) {
    const logged = window.localStorage.getItem("logged") === "true";
    if (!logged) {
      next("/forbidden");
      return;
    }
  }
  next();
});

export default router;
