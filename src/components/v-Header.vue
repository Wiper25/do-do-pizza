<template>
  <Header class="header">
    <div class="header__info">
      <div class="header__logo">
        <svg width="255" height="45.61">
          <use xlink:href="../assets/logo.svg#inline-svg-63-1" />
        </svg>
      </div>
      <div class="header__grade">
        <h3 class="header__title">Доставка пиццы Бишкек</h3>
        <ul class="header__time-and-estimate">
          <li class="header__time">43 мин</li>
          <li class="header__estima">4.72</li>
        </ul>
      </div>
      <div class="header__phone-number">
        <a href="">0 (551)550-550</a>
        <p class="header__tel-call-text">Звонок по телефону</p>
      </div>
    </div>
    <div class="header__dodo-coin-and-login">
      <div class="header__dodo-coin">
        <span class="header__dodo-coin-icon">
          <svg width="24" height="24">
            <use xlink:href="../assets/dodo-coin.svg#coin" />
          </svg>
        </span>
        <span>Додокоины</span>
      </div>
      <button>Войти</button>
    </div>
    <div class="header__btn-burger-menu">Burger-menu</div>
  </Header>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    handleScroll(event) {
      if (window.pageYOffset >= 100) {
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
