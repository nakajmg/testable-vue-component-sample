import { mount } from "@vue/test-utils"
import Menu from "@/components/Menu.vue"
import MenuItem from "@/components/Menu/MenuItem.vue"
import menuItems from "../_mockData/menuItems.json"
describe("Menu.vue", () => {
  const propsData = {
    items: menuItems,
  }
  it("props", () => {
    const wrapper = mount(Menu, { propsData })
    expect(wrapper.props()).toEqual(propsData)
  })
  describe("methods", () => {
    it("clickMenuItem", () => {
      const wrapper = mount(Menu, { propsData })
      // onClickMenuItem()の実行
      wrapper.vm.onClickMenuItem(menuItems[0])
      // "clickMenuItem"イベントがemitされているか
      expect(wrapper.emitted("clickMenuItem")).toBeTruthy()
      // emit時の引数が期待している値と同じか
      expect(wrapper.emitted("clickMenuItem")[0][0]).toEqual({
        name: menuItems[0].name,
      })
    })
  })
  describe("template", () => {
    it("snapshot", () => {
      const wrapper = mount(Menu, { propsData })
      expect(wrapper.vm.$el).toMatchSnapshot()
    })
  })

  // mountによる結合テスト
  it("@clickMenuItem=onClickMenuItem", () => {
    const mock = jest.fn()
    const wrapper = mount(Menu, { propsData })
    // onClickMenuItemをmockに差し替える
    wrapper.setMethods({
      onClickMenuItem: mock,
    })
    // MenuItemコンポーネントを探す
    const menuItem = wrapper.find(MenuItem)
    // "clickMenuItem"イベントをemitする関数を実行
    menuItem.vm.clickMenuItem()
    // mock実行時に期待する引数が渡されているか
    expect(mock).toHaveBeenCalledWith({
      name: menuItems[0].name,
    })
  })
})
