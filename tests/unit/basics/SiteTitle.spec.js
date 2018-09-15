import { shallowMount } from "@vue/test-utils"
import SiteTitle from "@/basics/SiteTitle.vue"
describe("SiteTitle.vue", () => {
  // propsで渡す値の準備
  const propsData = {
    title: "test title",
  }
  it("props", () => {
    // コンポーネントラッパーの作成
    const wrapper = shallowMount(SiteTitle, { propsData })
    // VueインスタンスのpropsがpropsDataと同じか
    expect(wrapper.props()).toEqual(propsData)
  })
  describe("template", () => {
    it("snapshot", () => {
      const wrapper = shallowMount(SiteTitle, { propsData })
      // レンダリング結果が前回のスナップショットと同じか
      expect(wrapper.vm.$el).toMatchSnapshot()
    })
  })
})
