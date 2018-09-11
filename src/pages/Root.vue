<template>
  <div class="Root">
    <GlobalHeader @navigate="onNavigate"/>
  </div>
</template>

<script>
import GlobalHeader from "../containers/GlobalHeader.vue"
export default {
  name: "Root",
  components: {
    GlobalHeader,
  },
  methods: {
    onNavigate({ name }) {
      this.$router.push({ name })
    },
  },
}
</script>
