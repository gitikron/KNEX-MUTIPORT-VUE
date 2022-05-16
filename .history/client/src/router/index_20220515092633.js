import { createRouter, createWebHashHistory } from "vue-router";
import Index from "../views/pages/index.vue";

const routes = [{
        path: "/",
        name: "Index",
        component: Index,
    },
    {
        path: "/about",
        name: "about",
        component: () =>
            import ("../views/AboutView.vue"),
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;