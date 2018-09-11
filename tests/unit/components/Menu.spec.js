import { mount } from "@vue/test-utils"
import Menu from "@/components/Menu.vue"
import MenuItem from "@/basics/MenuItem.vue"
import menuItems from "../../_mockData/menuItems.json"
describe("Menu.vue", () => {
  const propsData = {
    items: menuItems,
  }
  it("props", () => {
    const wrapper = mount(Menu, { propsData })
    expect(wrapper.vm.$props).toEqual(propsData)
  })
  describe("methods", () => {
    it("clickMenuItem", () => {
      const wrapper = mount(Menu, { propsData })
      wrapper.vm.onClickMenuItem(menuItems[0])
      expect(wrapper.emitted("clickMenuItem")).toBeTruthy()
      expect(wrapper.emitted("clickMenuItem")[0][0]).toEqual({
        name: menuItems[0].name,
      })
    })
  })
  it("@clickMenuItem=onClickMenuItem", () => {
    const mock = jest.fn()
    const wrapper = mount(Menu, { propsData })
    wrapper.setMethods({
      onClickMenuItem: mock,
    })
    const menuItem = wrapper.find(MenuItem)
    menuItem.find(".MenuItem_Label").trigger("click")
    expect(mock).toHaveBeenCalledWith({
      name: menuItems[0].name,
    })
  })
  describe("template", () => {
    it("snapshot", () => {
      const wrapper = mount(Menu, { propsData })
      expect(wrapper.vm.$el).toMatchSnapshot()
    })
  })
})
