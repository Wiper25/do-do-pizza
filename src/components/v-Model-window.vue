<template>
  <div class="vModelWindow">
    <div class="vModelWindow__menu-model">
      <div class="vModelWindow__contant" :key="i" v-for="(item, i) in card">
        <div class="vModelWindow__image">
          <img
            class="vModelWindow__img-product"
            :src="require(`../assets/${item.image}`)"
            alt=""
          />
        </div>
        <div class="vModelWindow__description-product">
          <h2>{{ item.name }}</h2>
          <p>{{ item.desctiption }}</p>
          <button @click="setCardBasket(item, false)">
            Добавить в корзину
          </button>
        </div>
      </div>
    </div>
    <button
      class="vModelWindow__cross"
      @click="closeModelWindow(false)"
      href="#"
    >
      &#215;
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      card: this.$store.getters.CARD_BASKET,
      count: 0,
      basket: [],
    };
  },
  methods: {
    closeModelWindow(status) {
      this.$store.commit("OPEN_MODEL", status);
      this.$store.commit("CLEAR_MODEL_BASKET", []);
    },
    setCardBasket(item, status) {
      this.$store.commit("OPEN_MODEL", status);
      this.$store.commit("ADD_PRODUCT_BASKET", item);
      this.$store.commit("CLEAR_MODEL_BASKET", []);
    },
  },
  mounted() {},
};
</script>
