import { shallowMount } from "@vue/test-utils"
import MenuItem from "@/basics/MenuItem.vue"
import menuItems from "../../_mockData/menuItems.json"
describe("MenuItem.vue", () => {
  const propsData = menuItems[0]
  it("props", () => {
    const wrapper = shallowMount(MenuItem, { propsData })
    expect(wrapper.vm.$props).toEqual(propsData)
  })
  describe("methods", () => {
    it("clickMenuItem", () => {
      const wrapper = shallowMount(MenuItem, { propsData })
      wrapper.vm.clickMenuItem()
      expect(wrapper.emitted("clickMenuItem")).toBeTruthy()
      expect(wrapper.emitted("clickMenuItem")[0][0]).toEqual({
        name: propsData.name,
      })
    })
  })
  describe("template", () => {
    it("@click=clickMenuItem", () => {
      const mock = jest.fn()
      const wrapper = shallowMount(MenuItem, { propsData })
      wrapper.setMethods({
        clickMenuItem: mock,
      })
      wrapper.find(".MenuItem_Label").trigger("click")
      expect(mock).toHaveBeenCalled()
    })
    it("snapshot", () => {
      const wrapper = shallowMount(MenuItem, { propsData })
      expect(wrapper.vm.$el).toMatchSnapshot()
    })
  })
})
