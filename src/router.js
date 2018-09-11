import Vue from "vue"
import Router from "vue-router"
import Root from "./pages/Root.vue"
import About from "./pages/About.vue"
import Todos from "./pages/Todos.vue"

Vue.use(Router)

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "root",
      component: Root,
    },
    {
      path: "/about",
      name: "about",
      component: About,
    },
    {
      path: "/todos",
      name: "todos",
      component: Todos,
    },
  ],
})
