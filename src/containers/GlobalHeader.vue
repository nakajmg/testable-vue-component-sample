<template>
  <header class="Header">
    <Logo class="Header_Logo" />
    <span class="Header_SiteTitle"
      @click="navigateRoot"
    >
      <SiteTitle :title="siteTitle"/>
    </span>
    <Menu class="Header_Menu"
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
  name: "Header",
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
.Header {
  padding: 0.5em 1em;
  background-color: #3eaf7c;
  display: flex;
  align-items: center;
  &_Logo {
    width: 35px;
  }
  &_SiteTitle {
    color: #fff;
    font-size: 1.75em;
    margin-left: 0.5em;
    cursor: pointer;
  }
  &_Menu {
    color: #fff;
    font-size: 1.25em;
    margin-left: auto;
  }
}
</style>
