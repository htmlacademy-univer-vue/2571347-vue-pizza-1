export default [
  {
    path: "/",
    name: "HomeView",
    component: () => import("../views/HomeView.vue"),
    children: [],
    meta: { layout: "AppLayoutDefault" },
  },
];