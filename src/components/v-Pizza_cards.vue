<template>
  <div class="v-Pizza-cards">
    <div class="v-Pizza-cards__card-collect">
      <div class="v-Pizza-cards__img-description-collect">
        <img width="221" height="221" :src="imagesPizza" alt="" />
        <div>
          <h2>Пицца из половинок</h2>
          <p>Соберите свою пиццу 35 см с двумя разными вкусами</p>
        </div>
      </div>
      <div class="v-Pizza-cards__price-btn-collect">
        <p>от 520 сом</p>
        <button class="v-Pizza-cards__btn-collect">Собрать</button>
      </div>
    </div>
    <div
      class="v-Pizza-cards__card"
      :key="i"
      v-for="(pizza, i) in pizzaContent"
    >
      <div class="v-Pizza-cards__img-description">
        <img width="221" height="221" :src="imagesPizza" alt="" />
        <div>
          <h2>{{ pizza.name }}</h2>
          <p>
            {{ pizza.desctiption }}
          </p>
        </div>
      </div>
      <div class="v-Pizza-cards__price-btn">
        <p>{{ pizza.price }}</p>
        <button class="v-Pizza-cards__btn">Выбрать</button>
      </div>
    </div>
  </div>
</template>

<script>
import pizzaContent from "../json-content/pizza-content.json";
import pizza_team from "../assets/pizza-team.jpeg";

export default {
  props: ["srcJSONPizza"],
  data() {
    return {
      imagesPizza: [pizza_team],
      pizzaContent: pizzaContent,
    };
  },
  methods: {},
  mounted() {},
};
</script>
