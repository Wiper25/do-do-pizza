<template>
  <div class="v-Group-cards">
    <div v-if="content[0].type == 'pizza'" class="v-Group-cards__card-collect">
      <div class="v-Group-cards__img-description-collect">
        <img
          class="v-Group-cards__image"
          width="221"
          height="221"
          :src="require('../assets/pizza-team.jpeg')"
          alt=""
        />
        <div>
          <h2>Пицца из половинок</h2>
          <p>Соберите свою пиццу 35 см с двумя разными вкусами</p>
        </div>
      </div>
      <div class="v-Group-cards__price-btn-collect">
        <p>от 520 сом</p>
        <button class="v-Group-cards__btn-collect">Собрать</button>
      </div>
    </div>
    <div class="v-Group-cards__card" :key="i" v-for="(card, i) in content">
      <div class="v-Group-cards__img-description">
        <img
          class="v-Group-cards__image"
          width="221"
          height="221"
          :src="require(`../assets/${card.image}`)"
          alt=""
        />
        <div>
          <h2>{{ card.name }}</h2>
          <p>
            {{ card.desctiption }}
          </p>
        </div>
      </div>
      <div class="v-Group-cards__price-btn">
        <p>{{ card.price }}</p>
        <button class="v-Group-cards__btn">{{ card.button }}</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["content"],

  data() {
    return {};
  },
  methods: {},
  mounted() {},
};
</script>
