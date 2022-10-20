<template>
  <div class="header">
    <img class="header__img" src="../assets/logo.svg" alt="img" />
    <div class="header__heading">Каталог курсов</div>
    <div class="header__block">
      <div class="header__block-search">Поиск</div>
      <input
        v-model="search"
        class="header__block-input"
        type="text"
        placeholder="Поиск по каталогу"
      />
      <img class="header__block-img" src="../assets/search.svg" alt="img" />
    </div>
  </div>
  <div class="main">
    <div class="main__top">
      <div class="main__top-result">{{ filteredData.length }} результатов</div>
      <div class="main__block">
        <div class="main__block-text">Сортировать по:</div>
        <div
          class="main__sorting"
          :class="{ 'main__sorting--active': sortingName === 'cost' }"
          @click="changeSort('cost')"
        >
          <div class="main__sorting-text">Цене</div>
          <img
            v-show="sortingName === 'cost'"
            class="main__sorting-img"
            src="../assets/arrow-down.svg"
            alt="img"
          />
        </div>
        <div
          class="main__sorting"
          @click="changeSort('title')"
          :class="{ 'main__sorting--active': sortingName === 'title' }"
        >
          <div class="main__sorting-text">Алфавиту</div>
          <img
            v-show="sortingName === 'title'"
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
      <vue-awesome-paginate
        :total-items="filteredData.length"
        :items-per-page="itemPerPage"
        :current-page="currentPage"
        :on-click="onClickHandler"
      />
    </div>
  </div>
</template>

<script setup>
import data from "../../public/data.json";
import { ref, computed } from "vue";
import Card from "./Card.vue";

const search = ref("");
const sortingName = ref("");
const currentPage = ref(1);
const itemPerPage = ref(9);

const filteredData = computed(() => {
  let fd = Array.from(data);
  if (search.value) {
    fd = fd.filter((item) => {
      return item.title.toLowerCase().includes(search.value.toLowerCase());
    });
  }
  if (sortingName.value) {
    fd = fd.sort((a, b) => {
      if (a[sortingName.value] < b[sortingName.value]) {
        return -1;
      }
      if (a[sortingName.value] > b[sortingName.value]) {
        return 1;
      }
      return 0;
    });
  }
  return fd;
});

const cards = computed(() => {
  let offset = 0;
  offset = (currentPage.value - 1) * (itemPerPage.value - 1);
  return filteredData.value.slice(offset, itemPerPage.value);
});

const onClickHandler = (page) => {
  currentPage.value = page;
};

const changeSort = (sort) => {
  if (sortingName.value === sort) {
    sortingName.value = "";
  } else {
    sortingName.value = sort;
  }
};
</script>

<style lang="scss" scoped>
@import "../mixin";
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
    user-select: none;
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
    }
  }
  &__showcase {
    margin-top: 15px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 30px;
    @include tablet {
      grid-template-columns: 1fr 1fr;
    }
    @include phone {
      grid-template-columns: 1fr;
    }
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
