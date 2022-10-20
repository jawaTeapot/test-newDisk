<script setup>
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <div class="container">
    <HelloWorld />
  </div>
</template>

<style lang="scss">
@import "./mixin";
* {
  box-sizing: border-box;
}
.container {
  max-width: 1166px;
  margin: 0 auto;
  padding: 0;
  @include tablet {
    max-width: 678px;
  }
  @include phone {
    max-width: 336px;
  }
}
.pagination-container {
  display: flex;
  column-gap: 10px;
}
.paginate-buttons {
  height: 50px;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  cursor: pointer;
  background-color: #f0f4fc;
  border: none;
  outline: none;
  font-family: "Houschka Pro", sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 28px;
  color: #0066b3;
}
.paginate-buttons {
  &:hover {
    background-color: #e2e8f3;
  }
  &:active {
    box-shadow: inset 0 3px 4px rgba(0, 0, 0, 0.2);
  }
}
.active-page {
  background-color: #4c5a79;
  color: white;
  &:hover {
    background-color: #4c5a79;
  }
}
.v-select {
  display: none;
  padding: 0;
  font-family: "Houschka Pro", sans-serif;
  font-weight: 500;
  font-size: 13px;
  line-height: 18px;
  color: #4c5a79;
  @include phone {
    display: block;
  }
  .vs__selected {
    margin: 4px 0 0;
    padding: 0;
  }
  .vs__dropdown-toggle {
    align-items: center;
    border: none;
  }
  .vs__dropdown-menu {
    left: -110px;
  }
}
</style>
