import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menuItems: [
      {
        label: "About",
        name: "about",
      },
      {
        label: "Todos",
        name: "todos",
      },
    ],
  },
  mutations: {},
  actions: {},
})
