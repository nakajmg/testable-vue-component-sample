<template>
  <div class="LinkOrButton">
    <a class="LinkOrButton_Link"
      v-if="href"
      :href="href"
    >
      {{label}}
    </a>
    <button class="LinkOrButton_Button"
      v-if="clickHandler"
      @click="clickHandler"
    >
      {{label}}
    </button>
  </div>
</template>

<script>
export default {
  name: "LinkOrButton",
  props: {
    label: String,
    href: String,
    clickHandler: Function,
  },
}
</script>
