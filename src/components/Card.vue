<template>
  <section class="page-card card">
    <div class="card-container container">
      <div class="card-body body-column">
        <div class="body-column-first first">
          <h2 class="first-title">Overalls</h2>
          <div class="first-text">
            Overalls in washed organic cotton denim. Collar, button fly, and
            adjustable belt at waist. Chest pockets with flap. Long, gently
            flared sleeves and straight legs with front pockets and back
            pockets.
          </div>
          <div class="first-color color">
            <h4 class="color-title">Color</h4>
            <ul class="color-list">
              <li class="color-item color-1">
                <a class="color-link" href="#"></a>
              </li>
              <li class="color-item color-2">
                <a class="color-link" href="#"></a>
              </li>
              <li class="color-item color-3">
                <a class="color-link" href="#"></a>
              </li>
            </ul>
          </div>
          <div class="first-size size">
            <h4 class="size-title">Size</h4>
            <ul class="size-list">
              <li class="size-item">
                <a class="size-link" href="#">XS</a>
              </li>
              <li class="size-item">
                <a class="size-link" href="#">S</a>
              </li>
              <li class="size-item">
                <a class="size-link" href="#">M</a>
              </li>
              <li class="size-item">
                <a class="size-link" href="#">L</a>
              </li>
              <li class="size-item">
                <a class="size-link" href="#">XL</a>
              </li>
            </ul>
          </div>
          <div class="first-price">$160</div>
          <div class="first-button button">
            <a class="button-select" href="#">Add to cart</a>
          </div>
        </div>
        <div class="body-column-second second">
          <div class="second-slider slider">
            <div class="slider-image-main">
              <img
                :src="getUrlMini(mainSliderImg.url)"
                :alt="mainSliderImg.alt"
              />
            </div>
            <div>
              <div class="slider-image-mini">
                <img
                  :key="index"
                  v-for="(image, index) in miniSliderImg"
                  @click="changeImgSlider(image)"
                  :src="getUrlMini(image.url)"
                  :alt="image.alt"
                />
              </div>

              <img
                @click="changeImgSliderArrowLeft"
                class="slider-arrow slider-arrow-left"
                src="../assets/Card/arrow left.svg"
                alt="arrow left"
              />
              <img
                @click="changeImgSliderArrowRight"
                class="slider-arrow slider-arrow-right"
                src="../assets/Card/arrow right.svg"
                alt="arrow right"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
let miniSliderImgArray = [
  { id: 2, url: 'main_card.jpg', alt: 'card-mini' },
  { id: 3, url: 'card_2.jpg', alt: 'card-mini' },
  { id: 4, url: 'card_3.jpg', alt: 'card-mini' },
  { id: 5, url: 'card_4.jpg', alt: 'card-mini' },
];

export default {
  name: 'card',
  data() {
    return {
      mainSliderImg: miniSliderImgArray[0],
      miniSliderImg: miniSliderImgArray,
      currentImg: 0,
    };
  },
  computed: {},
  methods: {
    getUrlMini(img) {
      return new URL('../assets/Card/' + img, import.meta.url).href;
    },
    changeImgSlider(img) {
      return (this.mainSliderImg = img);
    },
    changeImgSliderArrowRight() {
      if (this.currentImg >= this.miniSliderImg.length - 1) {
        this.currentImg = this.miniSliderImg.length - 1;
      } else {
        this.currentImg++;
      }
    },
    changeImgSliderArrowLeft() {
      if (this.currentImg <= 0) {
        this.currentImg = 0;
      } else {
        this.currentImg--;
      }
    },
  },
};
</script>

<style scoped>
.page-card {
  padding: 80px 0 0 0;
}
.card-body {
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
  gap: 60px;
}
.first {
  background-color: var(--section-color);
  padding: 50px 70px;
}
.first > *:not(:last-child) {
  margin-bottom: 45px;
}
.first-title {
  font-weight: 700;
  font-size: 32px;
  line-height: 38px;
}
.first-text {
  font-size: 16px;
  line-height: 19px;
}
.color-title,
.size-title {
  font-weight: 600;
  font-size: 18px;
  line-height: 21px;
}
.color-title,
.size-title:not(:last-child) {
  margin-bottom: 25px;
}
.color-list {
  display: flex;
  gap: 30px;
}
.color-item {
  border-radius: 50%;
  width: 16px;
  height: 16px;
  cursor: pointer;
}
.color-link:active {
  border: 1px solid #b0c3c7;
  box-sizing: border-box;
}
.color-1 {
  background: #b0c3c7;
}
.color-2 {
  background: #3b6392;
}
.color-3 {
  background: #bfc3c8;
}
.size-list {
  display: flex;
  gap: 20px;
}
.size-link {
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color: #727a82;
}
.size-link:active {
  color: var(--main-color-black);
}
.first-price {
  font-weight: 700;
  font-size: 16px;
  line-height: 118%;
  color: var(--main-color-black);
}
.second {
  position: relative;
}
.slider {
  margin: 0 60px;
}
.slider-image-main:not(:last-child) {
  margin-bottom: 20px;
}

.slider-image-mini {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  gap: 20px;
}
.slider-image-mini img {
  cursor: pointer;
  min-width: 21%;
  flex: 0 1 20%;
}
.slider-arrow {
  position: absolute;
  cursor: pointer;
}
.slider-arrow-left {
  top: 30%;
  left: 0;
}
.slider-arrow-right {
  top: 30%;
  right: 0;
}
@media (max-width: 1200px) {
  .first {
    padding: 30px 30px;
  }
}
@media (max-width: 895px) {
  .card-body {
    flex-direction: column;
    flex-direction: column-reverse;
  }
  .slider {
    display: flex;
    flex-direction: column;
  }
  .slider-image-main {
    margin: 0 auto;
  }
  .slider-image-mini {
    justify-content: center;
  }
  .page-card {
    padding: 30px 0 0 0;
  }
}
@media (max-width: 555px) {
  .slider-image-mini {
    justify-content: space-around;
  }
}
</style>
