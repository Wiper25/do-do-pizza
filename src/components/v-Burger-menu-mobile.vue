<template>
  <div class="vBurgerMenu">
    <div class="vBurgerMenu__header">
      <div class="vBurgerMenu__logo">
        <svg width="186" height="26">
          <use xlink:href="../assets/logo-white.svg#inline-svg-63-1" />
        </svg>
      </div>
      <button @click="burgerMenu(false)" class="vBurgerMenu__cross">
        &#215;
      </button>
    </div>
    <div class="vBurgerMenu__city-grade">
      <div class="vBurgerMenu__city">
        <img width="24" height="35" src="../assets/location.svg" alt="" />
        <span>Бишкек</span>
      </div>
      <div class="vBurgerMenu__grade">
        <div>42 мин <span class="vBurgerMenu__grade-scores">4.72</span></div>
        <!-- <img
          width="15"
          height="15"
          src="../assets/exclamatory.png"
          fill="white"
          alt=""
        /> -->
      </div>
    </div>
    <div class="vBurgerMenu__nav">
      <a class="vBurgerMenu__btn-link" href="">Войти</a>
      <a class="vBurgerMenu__btn-link" href="">Акции</a>
      <a class="vBurgerMenu__btn-link" href="">Контакты</a>
      <a class="vBurgerMenu__btn-link" href="">О нас</a>
    </div>
    <div class="vBurgerMenu__contact">
      <a class="vBurgerMenu__tel one" href="">0 (551) 550-550</a>
      <a class="vBurgerMenu__tel two" href="">0 (709) 550-550</a>
      <a class="vBurgerMenu__tel three" href="">0 (312) 550-550</a>
      <p>Звонок по телефону</p>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    burgerMenu(status) {
      this.$store.commit("BURGER_STATUS_BTN", status);
    },
  },
};
</script>
