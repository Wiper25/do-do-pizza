<template>
  <div class="v-Combo-cards">
    <div
      class="v-Combo-cards__card"
      :key="i"
      v-for="(combo, i) in ComboContent"
    >
      <div class="v-Combo-cards__img-description">
        <img width="221" height="221" :src="imagesCombo" alt="" />
        <div>
          <h2>{{ combo.name }}</h2>
          <p>
            {{ combo.desctiption }}
          </p>
        </div>
      </div>
      <div class="v-Combo-cards__price-btn">
        <p>{{ combo.price }}</p>
        <button class="v-Combo-cards__btn">Выбрать</button>
      </div>
    </div>
  </div>
</template>

<script>
import ComboContent from "../json-content/combo-content.json";
import Combo_1 from "../assets/combo-1.webp";

export default {
  data() {
    return {
      imagesCombo: [Combo_1],
      ComboContent: ComboContent,
    };
  },
  methods: {},
};
</script>
