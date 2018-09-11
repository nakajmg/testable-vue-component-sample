<template>
  <div class="Logo">
    <img class="Logo_Img" alt="Vue logo" src="../assets/logo.png">
  </div>
</template>

<script>
export default {
  name: "Logo",
}
</script>

<style lang="scss">
.Logo {
  filter: brightness(1.2);
  &_Img {
    display: block;
    width: 100%;
    height: auto;
  }
}
</style>
