<template>
  <div class="MenuItem">
    <span class="MenuItem_Label"
      @click="clickMenuItem"
    >
      {{label}}
    </span>
  </div>
</template>

<script>
export default {
  name: "MenuItem",
  props: {
    label: String,
    name: String,
  },
  methods: {
    clickMenuItem() {
      this.$emit("clickMenuItem", { name: this.name })
    },
  },
}
</script>

<style lang="scss">
.MenuItem {
  &_Label {
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
