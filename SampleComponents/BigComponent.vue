<template>
  <div>
    <div
      v-for="item in items"
      :key="item.id"
    >
      <span>{{item.label}}</span>
      <button @click="clickItem(item)">
        {{item.label}}
      </button>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex"
export default {
  name: "BigComponent",
  computed: {
    ...mapState(["items"]),
  },
  methods: {
    clickItem(item) {
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
