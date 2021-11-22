<template>
  <div id="app">
    <vBurgerMenuMobile v-if="this.$store.getters.STATUS_MENU_BURGER" />
    <vModelWindow v-if="this.$store.getters.OPEN_MODEL_DESKTOP" />
    <vBasket v-if="this.$store.getters.OPEN_BASKET_DESKTOP" />
    <vHeader />
    <div id="nav-desktop">
      <vNav />
    </div>
    <vSlider />
    <!-- <vMobileSlider /> -->
    <vPopular />
    <div id="nav-mobile">
      <vNav />
    </div>
    <vGroupCard :content="pizzaContent" />
    <vGroupCard :content="comboContent" />
    <vGroupCard :content="snacksContent" />
    <vGroupCard :content="dessertsContent" />
    <vGroupCard :content="beveragesContent" />
    <vGroupCard :content="otherContent" />
    <vShippingAndPayment />
    <button @click="openBasketMenuMobile(true)" class="btnBasketMobile">
      <p :style="lengthProductBasketMobile ? `` : `display:none;`">
        {{ lengthProductBasketMobile }}
      </p>
      <img width="40" :src="require(`../src/assets/basket-icon.png`)" alt="" />
    </button>
    <v-Footer />
    <router-view />
  </div>
</template>
<script>
import vHeader from "./components/v-Header.vue";
import vBurgerMenuMobile from "./components/v-Burger-menu-mobile.vue";
import vModelWindow from "./components/v-Model-window.vue";
import vBasket from "./components/v-Basket.vue";
import vNav from "./components/v-Nav.vue";
import vSlider from "./components/v-Slider.vue";
import vPopular from "./components/v-Popular.vue";
import vGroupCard from "./components/v-Group-Card.vue";
import vShippingAndPayment from "./components/v-shipping-and-payment.vue";
import vFooter from "./components/v-Footer.vue";

import pizzaContent from "./json-content/pizza-content.json";
import comboContent from "./json-content/combo-content.json";
import snacksContent from "./json-content/snacks-content.json";
import dessertsContent from "./json-content/desserts-content.json";
import beveragesContent from "./json-content/beverages-content.json";
import otherContent from "./json-content/other-content.json";

export default {
  components: {
    vHeader,
    vModelWindow,
    vBurgerMenuMobile,
    vBasket,
    vNav,
    vSlider,
    vPopular,
    vGroupCard,
    vShippingAndPayment,
    vFooter,
  },

  data() {
    return {
      pizzaContent: pizzaContent,
      comboContent: comboContent,
      snacksContent: snacksContent,
      dessertsContent: dessertsContent,
      beveragesContent: beveragesContent,
      otherContent: otherContent,
    };
  },
  computed: {
    lengthProductBasketMobile() {
      if (this.$store.getters.ADD_BASKET.length == 0) {
        return "";
      } else {
        return this.$store.getters.ADD_BASKET.length;
      }
    },
  },
  methods: {
    openBasketMenuMobile(status) {
      this.$store.commit("OPEN_BASKET", status);
    },
  },
  mounted() {},
};
</script>
<style lang="scss">
@import "./blocks/style.scss";
#app {
  overflow: hidden;
  min-width: 380px;
}
#nav-mobile {
  display: none;
}
.btnBasketMobile {
  display: none;
  width: 60px;
  height: 60px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 20px;
  transition: all 0.25s ease 0s;
  position: fixed;
  bottom: 20px;
  right: 50px;
  padding: 0;
  & p {
    margin: 0;
    position: absolute;
    left: 48px;
    background: rgb(255, 105, 0);
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    border-radius: 20px;
  }
}
@media (max-width: 930px) {
  #nav-mobile {
    display: block;
  }
  #nav-desktop {
    display: none;
  }
  .btnBasketMobile {
    display: block;
  }
}
</style>
