import { createRouter, createWebHistory } from "vue-router";
import RoutesPaths from "./constants";

const lazyLoading = (view: string) => {
  return import(`../Views/${view}.vue`);
};

const routes = [
  {
    path: RoutesPaths.privateRoutes.HelloWorld.path,
    name: RoutesPaths.privateRoutes.HelloWorld.name,
    component: lazyLoading("HelloWorld"),
    meta: { auth: false },
  },
  {
    path: RoutesPaths.privateRoutes.Home.path,
    name: RoutesPaths.privateRoutes.Home.name,
    component: lazyLoading("Home"),
    meta: { auth: false },
  },
  {
    path: "/:pathMatch(.*)*",
    component: lazyLoading("NotFound"),
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
