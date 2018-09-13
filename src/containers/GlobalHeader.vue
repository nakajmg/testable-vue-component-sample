<template>
  <header class="GlobalHeader">
    <Logo class="GlobalHeader_Logo" />
    <span class="GlobalHeader_SiteTitle"
      @click="navigateRoot"
    >
      <SiteTitle :title="siteTitle"/>
    </span>
    <Menu class="GlobalHeader_Menu"
      :items="menuItems"
      @clickMenuItem="onClickMenuItem"
    />
  </header>
</template>

<script>
import { mapState } from "vuex"
import Logo from "../basics/Logo.vue"
import SiteTitle from "../basics/SiteTitle.vue"
import Menu from "../components/Menu.vue"
export default {
  name: "GlobalHeader",
  components: {
    Logo,
    SiteTitle,
    Menu,
  },
  computed: {
    ...mapState(["siteTitle", "menuItems"]),
  },
  methods: {
    onClickMenuItem({ name }) {
      this.$emit("navigate", { name })
    },
    navigateRoot() {
      this.$emit("navigate", { name: "root" })
    },
  },
}
</script>

<style lang="scss">
.GlobalHeader {
  padding: 0.5em 1em;
  background-color: #3eaf7c;
  display: flex;
  align-items: center;
  &_Logo {
    width: 35px;
  }
  &_SiteTitle {
    color: #fff;
    font-size: 1.5em;
    font-family: serif;
    margin-left: 0.5em;
    cursor: pointer;
  }
  &_Menu {
    color: #fff;
    font-size: 1em;
    margin-left: auto;
  }
}
</style>
