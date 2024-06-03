import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/agendamento",
    name: "agendamento",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "agendamento" */ "../views/ScheduleView.vue"),
  },
  {
    path: "/lista-de-agendamentos",
    name: "lista-de-agendamentos",
    component: () =>
      import(
        /* webpackChunkName: "agendamento" */ "../views/ScheduleListView.vue"
      ),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
