<template>
  <nav>
    <div v-show="menuOpened">
      <router-link to="/">Root</router-link>
      <router-link to="/foo">Foo</router-link>
      <router-link to="/bar">Bar</router-link>
    </div>
    <button @click="toggleMenu">
      Open Menu
    </button>
  </nav>
</template>

<script>
export default {
  name: "Menu",
  data() {
    return {
      menuOpened: false,
    }
  },
  methods: {
    toggleMenu() {
      this.menuOpened = !this.menuOpened
    },
  },
}
</script>

