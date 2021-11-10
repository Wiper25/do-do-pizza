<template>
  <div id="app">
    <vHeader />
    <div id="nav">
      <vNav />
    </div>
    <vPopular />
    <vPizza />
    <router-view />
  </div>
</template>
<script>
import vHeader from "./components/v-Header.vue";
import vNav from "./components/v-Nav.vue";
import vPopular from "./components/v-Popular.vue";
import vPizza from "./components/v-Pizza_cards.vue";

export default {
  components: {
    vHeader,
    vNav,
    vPopular,
    vPizza,
  },
  data() {
    return {};
  },
};
</script>
<style lang="scss">
@import "./blocks/style.scss";
</style>
