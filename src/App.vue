<template>
  <div id="app">
    <GlobalHeader @navigate="onNavigate"/>
    <router-view/>
  </div>
</template>

<script>
import GlobalHeader from "./containers/GlobalHeader.vue"
export default {
  name: "App",
  components: {
    GlobalHeader,
  },
  methods: {
    onNavigate({ name }) {
      this.navigate({ name })
    },
    navigate({ name }) {
      this.$router.push({ name })
    },
  },
}
</script>

<style>
html,
body {
  padding: 0;
  margin: 0;
}
</style>
