<template>
  <div class="Root">
    <GlobalHeader @navigate="onNavigate"/>
    <Logo class="Root_Logo"/>
  </div>
</template>

<script>
import GlobalHeader from "../containers/GlobalHeader.vue"
import Logo from "../basics/Logo.vue"
export default {
  name: "Root",
  components: {
    GlobalHeader,
    Logo,
  },
  methods: {
    onNavigate({ name }) {
      this.$router.push({ name })
    },
  },
}
</script>

<style lang="scss">
.Root {
  display: flex;
  flex-direction: column;
  height: 100vh;
  &_Logo {
    width: 40%;
    max-width: 400px;
    margin: 0 auto;
    flex-grow: 1;
    display: inline-flex;
    align-items: center;
  }
}
</style>
