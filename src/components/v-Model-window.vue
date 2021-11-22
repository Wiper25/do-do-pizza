<template>
  <div class="vModelWindow">
    <div class="vModelWindow__menu-model">
      <div class="vModelWindow__cross-mobile" @click="closeModelWindow(false)">
        &#10761;
      </div>
      <div
        class="vModelWindow__contant"
        :key="i"
        v-for="(item, i) in CARD_BASKET"
      >
        <div class="vModelWindow__image">
          <img
            class="vModelWindow__img-product"
            :src="require(`../assets/${item.image}`)"
            alt=""
          />
        </div>
        <div class="vModelWindow__description-product">
          <h2 class="vModelWindow__title">{{ item.name }}</h2>
          <p>{{ item.desctiption }}</p>
          <div class="vModelWindow__params-product">
            <div class="vModelWindow__params-size">
              <label
                :class="{ active: size == 'small' }"
                for="small"
                class="vModelWindow__params-size-small"
                ><input
                  type="radio"
                  name="size"
                  v-model="size"
                  value="small"
                  id="small"
                />Маленькая</label
              >
              <label
                :class="{ active: size == 'average' }"
                class="vModelWindow__params-size-average"
                for="average"
                ><input
                  type="radio"
                  value="average"
                  v-model="size"
                  name="size"
                  id="average"
                />Средняя</label
              >
              <label
                :class="{ active: size == 'big' }"
                for="big"
                class="vModelWindow__params-size-big"
                ><input
                  type="radio"
                  value="big"
                  v-model="size"
                  name="size"
                  id="big"
                />Большая</label
              >
            </div>
            <div class="vModelWindow__params-board">
              <label
                for="traditional"
                :class="{ active: board == 'traditional' }"
                class="vModelWindow__params-board-traditional"
                ><input
                  type="radio"
                  name="board"
                  v-model="board"
                  value="traditional"
                  id="traditional"
                />Традиционная</label
              >
              <label
                for="thin"
                :class="{ active: board == 'thin' }"
                class="vModelWindow__params-board-thin"
                ><input
                  type="radio"
                  name="board"
                  v-model="board"
                  value="thin"
                  id="thin"
                />Тонкая</label
              >
            </div>
          </div>
          <div class="vModelWindow__additives">
            <button class="vModelWindow__additives-card">
              <img
                class="vModelWindow__additives-img"
                src="../assets/halapenio.png"
                alt=""
              />
              <span class="vModelWindow__additives-name">Острый халапеньо</span>
              <h4 class="vModelWindow__additives-price">29 сом</h4>
            </button>
            <button class="vModelWindow__additives-card">
              <img
                class="vModelWindow__additives-img"
                src="../assets/halapenio.png"
                alt=""
              />
              <span class="vModelWindow__additives-name">Острый халапеньо</span>
              <h4 class="vModelWindow__additives-price">29 сом</h4>
            </button>
            <button class="vModelWindow__additives-card">
              <img
                class="vModelWindow__additives-img"
                src="../assets/halapenio.png"
                alt=""
              />
              <span class="vModelWindow__additives-name">Острый халапеньо</span>
              <h4 class="vModelWindow__additives-price">29 сом</h4>
            </button>
            <button class="vModelWindow__additives-card">
              <img
                class="vModelWindow__additives-img"
                src="../assets/halapenio.png"
                alt=""
              />
              <span class="vModelWindow__additives-name">Острый халапеньо</span>
              <h4 class="vModelWindow__additives-price">29 сом</h4>
            </button>
          </div>
          <button
            class="vModelWindow__btnAddBasket"
            @click="setCardBasket(item, false)"
          >
            Добавить в корзину {{ item.price.replace(/\D/g, "") }} сом
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
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      size: "small",
      board: "traditional",
    };
  },
  computed: mapGetters(["CARD_BASKET"]),
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
};
</script>
