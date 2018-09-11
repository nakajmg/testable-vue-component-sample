<template>
  <div class="Menu">
    <MenuItem class="Menu_Item"
      v-for="item in items"
      :key="item.label"
      v-bind="item"
      @clickMenuItem="onClickMenuItem"
    />
  </div>
</template>

<script>
import MenuItem from "../basics/MenuItem.vue"
export default {
  name: "Menu",
  components: {
    MenuItem,
  },
  props: {
    items: Array,
  },
  methods: {
    onClickMenuItem({ name }) {
      this.$emit("clickMenuItem", { name })
    },
  },
}
</script>

<style lang="scss">
.Menu {
  display: flex;
  align-items: center;
  &_Item + &_Item {
    margin-left: 1em;
  }
}
</style>
