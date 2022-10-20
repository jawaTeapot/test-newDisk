<template>
  <div class="header">
    <img class="header__img" src="../assets/logo.svg" alt="img" />
    <div class="header__heading">Каталог курсов</div>
    <div class="header__block">
      <input
        class="header__block-input"
        type="text"
        placeholder="Поиск по каталогу"
      />
      <img class="header__block-img" src="../assets/search.svg" alt="img" />
    </div>
  </div>
  <div class="main">
    <div class="main__top">
      <div class="main__top-left">458 результатов</div>
      <div class="main__top-right">
        <div>Сортировать по:</div>
        <div>Цене <img src="../assets/arrow-down.svg" alt="img" /></div>
        <div>Алфавиту</div>
      </div>
    </div>
    <div class="main__showcase">
      <Card v-for="item in cards" :card="item"></Card>
    </div>
  </div>
</template>

<script setup>
import data from "../../public/data.json";
console.log(data);
import { ref, computed } from "vue";
import Card from "./Card.vue";

defineProps({});

const cards = computed(() => {
  return data;
});

const count = ref(0);
</script>

<style lang="scss" scoped>
.header {
  &__img {
    margin: 30px 0;
    width: 98px;
    height: 36px;
  }
  &__heading {
    font-family: "Futura PT", sans-serif;
    margin-bottom: 30px;
    font-weight: 600;
    font-size: 42px;
    line-height: 50px;
    color: #4c5a79;
  }
  &__block {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 58px;
    padding: 0 20px;
    background-color: #f0f4fc;
    border-radius: 4px;
    &-input {
      width: calc(100% - 40px);
      outline: none;
      border: none;
      background-color: transparent;
      font-family: "Houschka Pro", sans-serif;
      font-weight: 500;
      font-size: 18px;
      line-height: 28px;
      color: #4c5a79;
      &::placeholder {
        font-family: "Houschka Pro", sans-serif;
        font-weight: 500;
        font-size: 18px;
        line-height: 28px;
        color: #4c5a79;
      }
    }
    &-img {
      width: 24px;
      height: 24px;
    }
  }
}
.main {
  margin-top: 30px;
  &__top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    &-left {
      font-family: "Houschka Pro", sans-serif;
      font-weight: 500;
      font-size: 15px;
      line-height: 19px;
      color: #4c5a79;
    }
    &-right {
      display: flex;
      align-items: center;
    }
  }
  &__showcase {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 30px;
  }
}
</style>
