<template>
  <div class="v-Popular">
    <div class="v-Popular__slider">
      <div class="v-Popular__cards" :key="i" v-for="(card, i) in cards">
        <div class="v-Popular__card">
          <img width="80" height="80" :src="images" alt="" />
          <div class="v-Popular__card-text">
            <div class="v-Popular__card-title">{{ card.name }}</div>
            <div class="v-Popular__card-price">{{ card.price }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import popularContent from "../json-content/popular-content.json";
import img from "../assets/730db614-8678-4465-859c-bd8c9d8ef427.jpg";
export default {
  data() {
    return {
      cards: popularContent,
      images: img,
    };
  },
  methods: {},
};
</script>
