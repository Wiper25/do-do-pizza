<template>
  <div class="v-Group-cards">
    <!-- <div v-if="content[0].type == 'pizza'" class="v-Group-cards__card-collect">
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
    </div> -->

    <div
      class="v-Group-cards__card"
      :key="i"
      v-for="(card, i) in content"
      @click="addCardBasket(card)"
    >
      <div class="v-Group-cards__img-description">
        <img
          class="v-Group-cards__image"
          width="200"
          height="200"
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
        <button class="v-Group-cards__btn">
          {{ card.button }}
        </button>
      </div>
    </div>
    <div
      class="v-Group-cards__card-mobile"
      :key="i + 50"
      v-for="(card, i) in content"
      @click="addCardBasket(card)"
    >
      <div class="v-Group-cards__content">
        <img
          class="v-Group-cards__image"
          width="128"
          height="128"
          :src="require(`../assets/${card.image}`)"
          alt=""
        />
        <div class="v-Group-cards__description">
          <h2>{{ card.name }}</h2>
          <p>
            {{ card.desctiption }}
          </p>
          <div class="v-Group-cards__price-btn">
            <button class="v-Group-cards__btn">
              {{ card.price }}
            </button>
          </div>
        </div>
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
  methods: {
    addCardBasket(card) {
      this.$store.commit("OPEN_MODEL", true);
      this.$store.commit("OBJ_MODEL_BASKET", card);
    },
  },
};
</script>
