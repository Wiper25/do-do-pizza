<template>
  <div id="app">
    <vHeader />
    <div id="nav">
      <vNav />
    </div>
    <vSlider />
    <vPopular />
    <vGroupCard :content="pizzaContent" />
    <vGroupCard :content="comboContent" />
    <vGroupCard :content="snacksContent" />
    <vGroupCard :content="dessertsContent" />
    <vGroupCard :content="beveragesContent" />
    <vGroupCard :content="otherContent" />
    <vShippingAndPayment />
    <v-Footer />

    <router-view />
  </div>
</template>
<script>
import vHeader from "./components/v-Header.vue";
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
  computed: {},
};
</script>
<style lang="scss">
@import "./blocks/style.scss";
</style>
