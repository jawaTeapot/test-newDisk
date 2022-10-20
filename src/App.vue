<script setup>
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <div class="container">
    <HelloWorld />
  </div>
</template>

<style lang="scss">
@import "./_mixin.scss";
* {
  box-sizing: border-box;
}
.container {
  max-width: 1166px;
  margin: 0 auto;
  padding: 0;
}
</style>
