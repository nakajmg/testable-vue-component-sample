import { createLocalVue, shallowMount } from "@vue/test-utils"
import Vuex from "vuex"
import menuItems from "../_mockData/menuItems.json"
import Root from "@/pages/Root.vue"
import GlobalHeader from "@/containers/GlobalHeader.vue"
const localVue = createLocalVue()
localVue.use(Vuex)
describe("Root.vue", () => {
  let store
  let $router
  beforeAll(() => {
    store = new Vuex.Store({
      state: {
        siteTitle: "test site title",
        menuItems,
      },
    })
    // $routerのモックを作成
    $router = {
      push: jest.fn(), // $router.pushをモック関数にしておく
    }
  })
  describe("methos", () => {
    it("onNavigate", () => {
      // Vueインスタンス作成時に$routerプロパティを注入する
      const wrapper = shallowMount(Root, { store, localVue, mocks: { $router } })
      wrapper.vm.onNavigate({ name: "root" })
      // mock化した$router.pushが呼ばれているか
      expect($router.push).toHaveBeenCalledWith({
        name: "root",
      })
    })
  })
  describe("template", () => {
    it("@navigate=onNavigate", () => {
      const mock = jest.fn()
      const wrapper = shallowMount(Root, { store, localVue, mocks: { $router } })
      wrapper.setMethods({
        onNavigate: mock,
      })
      const globalHeader = wrapper.find(GlobalHeader)
      // "navigate"イベントをemitする
      globalHeader.vm.$emit("navigate")
      expect(mock).toHaveBeenCalled()
    })
    it("snapshot", () => {
      const wrapper = shallowMount(Root, { store, localVue, mocks: { $router } })
      expect(wrapper.vm.$el).toMatchSnapshot()
    })
  })
})
