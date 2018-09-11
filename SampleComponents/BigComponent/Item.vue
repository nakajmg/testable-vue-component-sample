<template>
  <div>
    <span>{{label}}</span>
    <button @click="clickItem">
      {{label}}
    </button>
  </div>
</template>

<script>
export default {
  name: "Item",
  proops: {
    id: Number,
    name: String,
    label: String,
  },
  methods: {
    clickItem() {
      this.$emit({
        id: this.id,
        name: this.name,
      })
    },
  },
}
</script>
