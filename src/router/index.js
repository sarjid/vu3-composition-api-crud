import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import createNew from "../views/AddNew.vue";
import editStudent from "../views/EditStudent.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },

  {
    path: "/create",
    name: "createNew",
    component: createNew,
  },

  {
    path: "/students/:id/edit",
    name: "edit.student",
    component: editStudent,
    props:true
  },

  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
