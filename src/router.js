import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import GetStarted from "./views/Introduction.vue";
import How from "./views/How.vue";
import Fee from "./views/Fee.vue";
import Benefit from "./views/Benefit.vue";
import With from "./views/With.vue";
import Sell from "./views/Sell.vue";

Vue.use(Router);

export const router = new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/introduction",
      name: "Introductions",
      component: GetStarted
    },
    {
      path: "/how",
      name: "HowItWorks",
      component: How
    },
    {
      path: "/fee",
      name: "Fees",
      component: Fee
    },
    {
      path: "/benefit",
      name: "Benefits",
      component: Benefit
    },
    {
      path: "/with",
      name: "Withdraw",
      component: With
    },
    {
      path: "/sell",
      name: "Seller",
      component: Sell
    }
  ]
});

export default router;
