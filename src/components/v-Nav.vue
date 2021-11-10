<template>
  <div class="navigation">
    <nav class="navigation__block-btn">
      <ul class="navigation__btns">
        <svg v-if="false" width="36" height="36">
          <use xlink:href="../assets/logo-nav.svg#logo_svg__Layer_1" />
        </svg>
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
<style lang="scss" scoped></style>
