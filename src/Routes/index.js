import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../Views/HomeView/HomeView.vue";
import CharactersView from "../Views/CharactersView/CharactersView.vue";
import LocationsView from "../Views/LocationsView/LocationsView.vue";
import EpisodesView from "../Views/EpisodesView/EpisodesView.vue";

function auth(to, from, next) {
  if (localStorage.getItem("active") === "true") {
    next();
  } else {
    alert("Login required");
    next("/home");
  }
}

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    component: HomeView,
    name: "home",
  },
  {
    path: "/characters",
    component: CharactersView,
    name: "characters",
    beforeEnter: [auth],
  },
  {
    path: "/episodes",
    component: EpisodesView,
    name: "episodes",
    beforeEnter: [auth],
  },
  {
    path: "/locations",
    component: LocationsView,
    name: "locations",
    beforeEnter: [auth],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
