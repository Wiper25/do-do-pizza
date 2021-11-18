<template>
  <div class="vBasket">
    <button class="vBasket__cross" href="#" @click="closeBasketMenu(false)">
      &#215;
    </button>
    <div class="vBasket__menu">
      <div class="vBasket__product-block">
        <div :key="i" v-for="(item, i) in оrder" class="vBasket__contant">
          <div class="vBasket__image">
            <img
              class="vModelWindow__img-product"
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
