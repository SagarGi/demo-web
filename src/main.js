import Vue from "vue";
import VueRouter from "vue-router";
import AllUsers from "./components/AllUsers";
import RegisteUser from "./components/RegisterUser";
import App from "./App.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: AllUsers },
  { path: "/adduser", component: RegisteUser },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
