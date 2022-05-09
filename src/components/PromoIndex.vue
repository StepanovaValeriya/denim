<template>
  <section class="page-promo promo">
    <div class="promo-container container">
      <div class="promo-body">
        <div class="promo-column first-column">
          <p class="first-column-text">The quality you deserve</p>
          <h2 class="first-column-title">DENIM</h2>
          <div class="first-column-button button">
            <router-link class="button-select" to="/catalog"
              >Check new collection</router-link
            >
          </div>
        </div>
        <div class="promo-column second-column ibg">
          <img
            class="second-column-image"
            src="../assets/index/promo/promo photo.jpg"
            alt="Promo"
          />
        </div>
        <div class="diagonal">
          <img
            class="second-column-diagonal diagonal-1"
            src="../assets/index/promo/diagonal r to l.png"
          />
          <img
            class="second-column-diagonal diagonal-2"
            src="../assets/index/promo/diagonal l to r.png"
          />
        </div>
      </div>
      <a class="promo-arrow" href="#"
        ><img src="../assets/index/promo/arrow.png" alt="arrow"
      /></a>
    </div>
  </section>
</template>

<style scoped>
/* ============PROMO============= */
.promo {
  padding: 50px 0px;
  z-index: 1;
  position: relative;
  background-color: var(--section-color);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.541);
}
.promo-body {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
.first-column {
  flex: 0 1 auto;
  padding: 0px 191px 0px 94px;
  margin: 0 0 15px 0;
}
.first-column-text {
  font-size: 18px;
  line-height: 116%;
  color: #727a82;
}
.first-column-title {
  font-size: 128px;
  line-height: 120%;
  font-family: Anton;
}
.first-column-title:not(:last-child) {
  margin: 0 0 30px 0;
}

.second-column {
  padding: 0px 0px 45% 0px;
  display: block;
  flex: 0 0 36%;
  z-index: 50;
}

.second-column-diagonal {
  width: 232px;
  height: 176px;
  position: absolute;
}
.diagonal-1 {
  top: -50px;
  left: 530px;
}
.diagonal-2 {
  top: 400px;
  left: 870px;
}
.promo-arrow {
  position: absolute;
  width: 10px;
  height: 27px;
  left: 0;
  top: 490px;
}
@media (max-width: 992px) {
  .first-column {
    padding: 20px 50px 0px 94px;
  }
}
@media (max-width: 795px) {
  .first-column {
    flex: 0 1 100%;
    text-align: center;
    padding: 0px 0px 0px 0px;
  }
  .second-column {
    flex: 0 1 100%;
  }
}
</style>
