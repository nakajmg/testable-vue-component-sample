import { shallowMount } from "@vue/test-utils"
import MenuItem from "@/components/Menu/MenuItem.vue"
import menuItems from "../../_mockData/menuItems.json"
describe("MenuItem.vue", () => {
  const propsData = menuItems[0]
  it("props", () => {
    const wrapper = shallowMount(MenuItem, { propsData })
    expect(wrapper.props()).toEqual(propsData)
  })
  describe("methods", () => {
    it("clickMenuItem", () => {
      const wrapper = shallowMount(MenuItem, { propsData })
      // clickMenuItem()の実行
      wrapper.vm.clickMenuItem()
      // "clickMenuItem"イベントがemitされているか
      expect(wrapper.emitted("clickMenuItem")).toBeTruthy()
      // emit時の引数が期待している値と同じか
      expect(wrapper.emitted("clickMenuItem")[0][0]).toEqual({
        name: propsData.name,
      })
    })
  })
  describe("template", () => {
    it("@click=clickMenuItem", () => {
      // モック関数の作成
      const mock = jest.fn()
      const wrapper = shallowMount(MenuItem, { propsData })
      // clickMenuItem()をmockに置き換える
      wrapper.setMethods({
        clickMenuItem: mock,
      })
      // DOMを探してクリックする
      wrapper.find(".MenuItem_Label").trigger("click")
      // mockが呼ばれているか
      expect(mock).toHaveBeenCalled()
    })
    it("snapshot", () => {
      const wrapper = shallowMount(MenuItem, { propsData })
      expect(wrapper.vm.$el).toMatchSnapshot()
    })
  })
})
