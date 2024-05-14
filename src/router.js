import { createRouter, createWebHistory } from "vue-router";

import AppHome from "./pages/AppHome.vue";
import AppAbout from "./pages/AppAbout.vue";
import AppContact from "./pages/AppContact.vue";

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path     : "/",
            name     : "home",
            component: AppHome,
        },
        {
            path: "/chi-siamo",
            name: "about",
            component: AppAbout,
        },
        {
            path: "/contatti",
            name: "Free Quote",
            componebt: AppContact,
        },
    ],
});
