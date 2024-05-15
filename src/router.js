import { createRouter, createWebHistory } from "vue-router";

import AppHome from "./pages/AppHome.vue";
import AppAbout from "./pages/AppAbout.vue";
import AppContact from "./pages/AppContact.vue";

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path     : "/home", // quello che vediamo nella barra di ricerca del browser
            name     : "home",  // rotta alla quale diamo il nome "etichetta di riferimento con la quale definiamo la rotta al interno del nostro codice"
            component: AppHome, // nella cartella pages inseriamo il componente
        },
        {
            path     : "/chi-siamo",
            name     : "about",
            component: AppAbout,
        },
        {
            path     : "/contatti",
            name     : "Free Quote",
            component: AppContact,
        },
    ],
});
