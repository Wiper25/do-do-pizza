<template>
  <div :style="shadow">
    <div class="navigation container">
      <nav class="navigation__block-btn">
        <ul class="navigation__btns" :style="transform">
          <img
            v-if="logo"
            width="36"
            height="36"
            src="../assets/logo-dodo-icon.png"
            alt=""
          />
          <a class="navigation__btn-item" href="#pizzas"><li>Пицца</li></a>
          <a class="navigation__btn-item" href=""><li>Комбо</li></a>
          <a class="navigation__btn-item" href=""><li>Закуски</li></a>
          <a class="navigation__btn-item" href=""><li>Десерты</li></a>
          <a class="navigation__btn-item" href=""><li>Напитки</li></a>
          <a class="navigation__btn-item" href=""><li>Другие товары</li></a>
          <router-link class="navigation__router" to="/">Акция</router-link>
          <router-link class="navigation__router" to="/about"
            >Контакты</router-link
          >
          <router-link class="navigation__router" to="/">О нас</router-link>
          <router-link class="navigation__router" to="/about"
            >Прямой эфир</router-link
          >
        </ul>
      </nav>
      <button class="navigation__basket-btn">Корзина {{ this.count }}</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      logo: false,
      shadow: "box-shadow:none;",
      count: localStorage.length,
      transform:
        "transform: translateX(0px);transition: transform 0.25s ease 0s;",
    };
  },
  methods: {
    handleScroll() {
      if (window.pageYOffset >= 100) {
        this.logo = true;
        this.shadow = "box-shadow: 0px 3px 4px 0px rgba(0, 0, 0, 0.2);";
        this.transform = "transform: translateX(30px);";
      } else if (window.pageYOffset < 100) {
        this.logo = false;
        this.shadow = "box-shadow: none;";
        this.transform = "transform: translateX(0px);transform 0.25s ease 0s;";
      }
    },
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
};
</script>
<style lang="scss" scoped></style>
