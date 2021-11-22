<template>
  <div class="vBasket">
    <button class="vBasket__cross" href="#" @click="closeBasketMenu(false)">
      &#215;
    </button>
    <div class="vBasket__menu">
      <div class="vBasket__title-block">
        <h2 class="vBasket__title">3 товара на 1 457 сом</h2>
      </div>
      <div class="vBasket__product-block" :key="i" v-for="(item, i) in оrder">
        <div class="vBasket__product-top">
          <div class="vBasket__image-block">
            <img
              class="vBasket__img-product"
              :src="require(`../assets/${item.image}`)"
              alt=""
            />
          </div>
          <div class="vBasket__name-description-product">
            <div class="vBasket__name">{{ item.name }}</div>
            <div class="vBasket__description">
              Средняя 30 см, традиционное тесто
            </div>
          </div>
        </div>
        <div class="vBasket__product-bottom">
          <div class="vBasket__price-product">399 сом</div>
          <div class="vBasket__counter-product">
            <span><strong>-</strong></span
            >1<span><strong>+</strong></span>
          </div>
        </div>
      </div>
      <!-- 
      <div class="vBasket__product-block">
        <div :key="i" v-for="(item, i) in оrder" class="vBasket__contant">
          <div class="vBasket__image">
            <img
              class="vBasket__img-product"
              :src="require(`../assets/${item.image}`)"
              alt=""
            />
          </div>
          <div class="vBasket__description-product">
            <h4>{{ item.name }}</h4>
            <p>{{ item.desctiption }}</p>
          </div>
        </div>
      </div>
      <button class="vBasket__send-order">К оформлению заказа</button> -->
      <button class="vBasket__send-order">К оформлению заказа</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      оrder: this.$store.getters.ADD_BASKET,
    };
  },
  methods: {
    closeBasketMenu(status) {
      this.$store.commit("OPEN_BASKET", status);
    },
  },
};
</script>
