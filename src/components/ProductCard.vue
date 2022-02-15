<template>
  <div>
    <main class="page">
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
                    :src="miniSliderImgArray[0].url"
                    :alt="miniSliderImgArray[0].alt"
                  />
                </div>
                <div class="slider-image-mini">
                  <img
                    @click="changeImgSlider(image)"
                    :key="image.id"
                    v-for="image in miniSliderImg"
                    :src="getUrlMini(image.url)"
                    :alt="image.alt"
                  />
                </div>

                <img
                  class="slider-arrow slider-arrow-left"
                  src="../assets/Card/arrow left.svg"
                  alt="arrow left"
                />
                <img
                  class="slider-arrow slider-arrow-right"
                  src="../assets/Card/arrow right.svg"
                  alt="arrow right"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="page-similar similar">
        <div class="similar-container container">
          <div class="similar-header header-block">
            <h2 class="header-block-title">You may also like</h2>
            <a class="header-block-link" href="#">View all</a>
          </div>
          <div class="similar-body">
            <ul class="catalog-list">
              <li class="catalog-item">
                <a class="catalog-item-link" href="#">
                  <h3>Overalls</h3>
                  <img
                    src="../assets/Card/similar/overalls 1.jpg"
                    alt="Overalls"
                  />
                  <div class="catalog-item-price">$140</div>
                </a>
              </li>
              <li class="catalog-item">
                <a class="catalog-item-link" href="#">
                  <h3>Overalls</h3>
                  <img
                    src="../assets/Card/similar/overalls 2.jpg"
                    alt="Overalls"
                  />
                  <div class="catalog-item-price">$110</div>
                </a>
              </li>
              <li class="catalog-item">
                <a class="catalog-item-link" href="#">
                  <h3>Jacket</h3>
                  <img src="../assets/Card/similar/jacket 1.jpg" alt="Jacket" />
                  <div class="catalog-item-price">$70</div>
                </a>
              </li>
              <li class="catalog-item">
                <a class="catalog-item-link" href="../html/productCard.html">
                  <h3>Jacket</h3>
                  <img src="../assets/Card/similar/jacket 2.jpg" alt="Jacket" />
                  <div class="catalog-item-price">$60</div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
let miniSliderImgArray = [
  { id: 1, url: 'main_card.jpg', alt: 'main-card' },
  { id: 1, url: 'main_card.jpg', alt: 'card-mini' },
  { id: 2, url: 'card_2.jpg', alt: 'card-mini' },
  { id: 3, url: 'card_3.jpg', alt: 'card-mini' },
  { id: 4, url: 'card_4.jpg', alt: 'card-mini' },
];

export default {
  data() {
    return {
      mainSliderImg: miniSliderImgArray[0].url,

      miniSliderImg: miniSliderImgArray,
    };
  },
  computed: {
    changeImgSlider(img) {
      console.log(mainSliderImg);
      this.mainSliderImg = img;
    },
  },
  methods: {
    getUrlMini(img) {
      return new URL('../assets/Card/' + img, import.meta.url).href;
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
/* =========similar=================== */
.page-similar {
  padding: 130px 0;
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
