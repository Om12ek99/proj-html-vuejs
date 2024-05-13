import { createRouter, createWebHistory } from "vue-router";

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "home"
        },
        {
            path: "/",
            name: "about"
        },
        {
            path: "/",
            name: "contact"
        }
    ]
});
