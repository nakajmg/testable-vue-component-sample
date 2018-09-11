import { shallowMount } from "@vue/test-utils"
import SiteTitle from "@/basics/SiteTitle.vue"
describe("SiteTitle.vue", () => {
  const propsData = {
    title: "test title",
  }
  it("props", () => {
    const wrapper = shallowMount(SiteTitle, { propsData })
    expect(wrapper.vm.$props).toEqual(propsData)
  })
  describe("template", () => {
    it("snapshot", () => {
      const wrapper = shallowMount(SiteTitle, { propsData })
      expect(wrapper.vm.$el).toMatchSnapshot()
    })
  })
})
