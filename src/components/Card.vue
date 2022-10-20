<template>
  <div
    class="card"
    :style="{ backgroundImage: 'url(' + card.preview_img_path + ')' }"
  >
    <div class="card__bottom">
      <div>
        <div class="card__headline">{{ card.series }}</div>
        <div class="card__text">{{ card.title }}</div>
      </div>
      <div>
        <div class="card__text">{{ card.cost }} {{ card.cost_currency }}</div>
        <!--        <button class="card__btn">-->
        <!--          Подробнее-->
        <!--          <img-->
        <!--            class="card__btn-img"-->
        <!--            src="../assets/arrow-right.svg"-->
        <!--            alt="img"-->
        <!--          />-->
        <!--        </button>-->
      </div>
    </div>
    <div class="card__bottom-block">
      <button class="card__btn">
        Подробнее
        <img class="card__btn-img" src="../assets/arrow-right.svg" alt="img" />
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  card: Object,
});
</script>

<style lang="scss" scoped>
.card {
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    .card__bottom {
      height: 100%;
      padding-top: 165px;
      padding-bottom: 70px;
      background: linear-gradient(
        0deg,
        #4c5a79 0%,
        rgba(76, 90, 121, 0.75) 100%
      );
    }
    .card__btn {
      bottom: 25px;
      opacity: 1;
    }
  }
  &__btn {
    margin-top: 12px;
    padding: 0;
    border: none;
    outline: none;
    display: flex;
    align-items: center;
    background-color: transparent;
    font-family: "Houschka Pro", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
    color: #ffffff;
    cursor: pointer;
    position: absolute;
    bottom: -10px;
    opacity: 0;
    transition: all 0.4s ease-in-out;
    &-img {
      margin-left: 10px;
      width: 18px;
      height: 8px;
    }
  }
  &__bottom {
    height: 225px;
    padding: 56px 30px 25px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: linear-gradient(0deg, #4c5a79 0%, rgba(76, 90, 121, 0) 100%);
    transition: all 0.6s;
    &-block {
      padding: 0 30px;
      position: relative;
      bottom: 0;
    }
  }
  &__headline {
    display: inline-block;
    margin-bottom: 12px;
    padding: 2px 10px;
    background: #0066b3;
    border-radius: 2px;
    font-family: "Houschka Pro", sans-serif;
    font-weight: 500;
    font-size: 15px;
    line-height: 19px;
    color: #ffffff;
  }
  &__text {
    font-family: "Houschka Pro", sans-serif;
    font-weight: 800;
    font-size: 18px;
    line-height: 25px;
    text-transform: uppercase;
    color: #ffffff;
  }
}
</style>
