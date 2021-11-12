<template>
  <div class="navigation">
    <nav class="navigation__block-btn">
      <ul class="navigation__btns">
        <img
          style="transition: transform 0.25s ease 0s"
          v-if="logo"
          width="36"
          height="36"
          src="../assets/logo-dodo-icon.png"
          alt=""
        />
        <a class="navigation__btn-item" href=""><li>Пицца</li></a>
        <a class="navigation__btn-item" href=""><li>Комбо</li></a>
        <a class="navigation__btn-item" href=""><li>Закуски</li></a>
        <a class="navigation__btn-item" href=""><li>Десерты</li></a>
        <a class="navigation__btn-item" href=""><li>Напитки</li></a>
        <a class="navigation__btn-item" href=""><li>Другие товары</li></a>
        <router-link to="/">Route</router-link>
        <router-link to="/about">Route</router-link>
        <router-link to="/">Route</router-link>
        <router-link to="/about">Route</router-link>
      </ul>
    </nav>
    <button class="navigation__basket-btn">Корзина</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      logo: false,
    };
  },
  methods: {
    handleScroll() {
      if (window.pageYOffset >= 100) {
        this.logo = true;
      } else if (window.pageYOffset < 100) {
        this.logo = false;
      }
    },
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
};
</script>
<style lang="scss" scoped></style>
