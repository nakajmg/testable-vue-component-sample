<template>
  <div>
    <Item
      v-for="item in items"
      :key="item.id"
      v-bind="item"
      @clickItem="onClickItem"
    />
  </div>
</template>

<script>
import { mapState } from "vuex"
export default {
  name: "Container",
  computed: {
    ...mapState(["items"]),
  },
  methods: {
    onClickItem(item) {
      this.$router.push({
        name: "itemDetail",
        params: {
          name: item.name,
          id: item.id,
        },
      })
    },
  },
}
</script>
