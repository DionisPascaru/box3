import Vue from "vue";
import VueRouter from "vue-router";
import routes from "@/router/routes";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    hash: false,
    routes,
})

export default router;
