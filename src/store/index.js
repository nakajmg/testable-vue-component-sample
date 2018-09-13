import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    siteTitle: "Testable Vue Component",
    menuItems: [
      {
        label: "About",
        name: "about",
      },
    ],
  },
  mutations: {},
  actions: {},
})
