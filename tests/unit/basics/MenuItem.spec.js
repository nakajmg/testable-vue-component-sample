import { shallowMount } from "@vue/test-utils"
import MenuItem from "@/basics/MenuItem.vue"

describe("MenuItem.vue", () => {
  const propsData = {
    label: "label",
    name: "name",
  }
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
        name: "name",
      })
    })
  })
  describe("template", () => {
    it("@click=clickMenuItem", () => {
      const stub = jest.fn()
      const wrapper = shallowMount(MenuItem, { propsData })
      wrapper.setMethods({
        clickMenuItem: stub,
      })
      wrapper.find(".MenuItem_Label").trigger("click")
      expect(stub).toHaveBeenCalled()
    })
    it("snapshot", () => {
      const wrapper = shallowMount(MenuItem, { propsData })
      expect(wrapper.vm.$el).toMatchSnapshot()
    })
  })
})
