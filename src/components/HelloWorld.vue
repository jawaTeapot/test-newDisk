<template>
  <div class="header">
    <img class="header__img" src="../assets/logo.svg" alt="img" />
    <div class="header__heading">Каталог курсов</div>
    <div class="header__block">
      <div class="header__block-search">Поиск</div>
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
      <div class="main__top-result">458 результатов</div>
      <div class="main__block">
        <div class="main__block-text">Сортировать по:</div>
        <div class="main__sorting main__sorting--active">
          <div class="main__sorting-text">Цене</div>
          <img
            class="main__sorting-img"
            src="../assets/arrow-down.svg"
            alt="img"
          />
        </div>
        <div class="main__sorting">
          <div class="main__sorting-text">Алфавиту</div>
          <img
            class="main__sorting-img"
            src="../assets/arrow-down.svg"
            alt="img"
          />
        </div>
      </div>
    </div>
    <div class="main__showcase">
      <Card v-for="item in cards" :card="item"></Card>
    </div>
    <div class="pagination">
      <button class="pagination__btn">
        <img
          class="pagination__btn-img"
          src="../assets/nav-left.svg"
          alt="img"
        />
      </button>
      <button class="pagination__btn">1</button>
      <button class="pagination__btn">2</button>
      <button class="pagination__btn">3</button>
      <button class="pagination__btn">4</button>
      <button class="pagination__btn">5</button>
      <button class="pagination__btn">...</button>
      <button class="pagination__btn">15</button>
      <button class="pagination__btn">
        <img
          class="pagination__btn-img"
          src="../assets/nav-right.svg"
          alt="img"
        />
      </button>
    </div>
    <template>
      <vue-awesome-paginate
        :total-items="50"
        :items-per-page="5"
        :max-pages-shown="5"
        :current-page="1"
        :on-click="onClickHandler"
      />
    </template>
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
const onClickHandler = (page) => {
  console.log(page);
};
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
    position: relative;
    cursor: pointer;
    &:hover {
      background-color: #e2e8f3;
    }
    &:active {
      background: #f0f4fc;
      box-shadow: inset 0 2px 2px rgba(0, 0, 0, 0.12);
    }
    &:focus-within {
      .header__block-search {
        display: block;
      }
      .header__block-input {
        margin-top: 5px;
        &::placeholder {
          color: transparent;
        }
      }
    }
    &-search {
      display: none;
      padding: 3px 4px;
      font-family: "Houschka Pro", sans-serif;
      font-weight: 500;
      font-size: 13px;
      line-height: 16px;
      color: #4c5a79;
      background-color: #e2e8f3;
      border-radius: 0 0 2px 2px;
      position: absolute;
      top: 0;
      left: 20px;
    }
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
    height: 23px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    &-result {
      font-family: "Houschka Pro", sans-serif;
      font-weight: 500;
      font-size: 15px;
      line-height: 19px;
      color: #4c5a79;
    }
  }
  &__block {
    display: flex;
    align-items: center;
    &-text {
      margin-right: 15px;
      font-family: "Houschka Pro", sans-serif;
      font-weight: 500;
      font-size: 15px;
      line-height: 19px;
      color: #9db0bf;
    }
  }
  &__sorting {
    margin-right: 15px;
    display: flex;
    align-items: center;
    cursor: pointer;
    &--active {
      .main__sorting-text {
        color: #4c5a79;
        border-bottom: none;
      }
      .main__sorting-img {
        opacity: 1;
      }
    }
    &:last-child {
      margin-right: 0;
    }
    &:active {
      .main__sorting-text {
        border-bottom: none;
      }
      .main__sorting-img {
        opacity: 1;
      }
    }
    &-text {
      font-family: "Houschka Pro", sans-serif;
      font-weight: 500;
      font-size: 15px;
      line-height: 19px;
      display: flex;
      align-items: center;
      color: #0066b3;
      border-bottom: 1px dashed #0066b3;
      &:hover {
        color: #eb3737;
        border-bottom: 1px dashed #eb3737;
      }
    }
    &-img {
      margin-left: 3px;
      width: 5px;
      height: 19px;
      opacity: 0;
    }
  }
  &__showcase {
    margin-top: 15px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 30px;
  }
}
.pagination {
  margin: 45px 0 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  &__btn {
    margin-right: 10px;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f0f4fc;
    border-radius: 3px;
    border: none;
    outline: none;
    cursor: pointer;
    &:last-child {
      margin-right: 0;
    }
    &-img {
      width: 24px;
      height: 24px;
    }
  }
}
</style>
