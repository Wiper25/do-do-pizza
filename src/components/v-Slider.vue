<template>
  <div class="slider">
    <div class="slider__line">
      <div class="slider__box">
        <div :style="sliderTransform" class="slider__container">
          <img class="slider__item" src="../assets/slider-1.jpeg" alt="" />
          <img class="slider__item" src="../assets/slider-2.jpeg" alt="" />
          <img class="slider__item" src="../assets/slider-3.jpeg" alt="" />
          <img class="slider__item" src="../assets/slider-4.jpeg" alt="" />
          <img class="slider__item" src="../assets/slider-1.jpeg" alt="" />
          <img class="slider__item" src="../assets/slider-2.jpeg" alt="" />
          <img class="slider__item" src="../assets/slider-3.jpeg" alt="" />
          <img class="slider__item" src="../assets/slider-4.jpeg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sliderTransform: `transform:translateX(-4200px);`,
      transform: "4200",
    };
  },
  mounted() {
    // console.log(this.sliderTransform);
    // console.log(this.transform);
  },
};
</script>
