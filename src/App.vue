<template>
  <div id="app">
    <vHeader />
    <div id="nav">
      <vNav />
    </div>
    <vSlider />
    <vPopular />
    <vPizza :srcJSONPizza="this.srcJSONPizza" />
    <router-view />
  </div>
</template>
<script>
import vHeader from "./components/v-Header.vue";
import vNav from "./components/v-Nav.vue";
import vSlider from "./components/v-Slider.vue";
import vPopular from "./components/v-Popular.vue";
import vPizza from "./components/v-Pizza_cards.vue";

export default {
  components: {
    vHeader,
    vNav,
    vSlider,
    vPopular,
    vPizza,
  },
  data() {
    return {
      srcJSONPizza: "./json-content/pizza-content.json",
    };
  },
};
</script>
<style lang="scss">
@import "./blocks/style.scss";
</style>
