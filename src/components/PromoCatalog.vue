<template>
  <section class="page-promo promo">
    <div class="promo-container container">
      <div class="promo-body">
        <div class="promo-column first-column first-column-catalog">
          <nav class="first-column-nav">
            <ul class="first-column-list">
              <li class="first-column-item">
                <a class="first-column-link" href="#">All categories /</a>
              </li>
              <li class="first-column-item">
                <a class="first-column-link" href="#">Women /</a>
              </li>
              <li class="first-column-item">
                <a class="first-column-link" href="#">Jackets</a>
              </li>
            </ul>
          </nav>
          <h2 class="first-column-title">
            Denim Collection <br />
            Fall 2019
          </h2>
        </div>
        <div class="promo-column second-column second-column-catalog">
          <img
            class="second-column-image second-column-image-catalog"
            src="../assets/Catalog/promo/promo.jpg"
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
            src="../assets/index/promo/diagonal r to l.png"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.promo {
  position: relative;
  background-color: var(--section-color);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.541);
}
.promo-body {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
}
.promo-column:not(:last-child) {
  margin-right: 95px;
}
.first-column {
  padding: 20px 15px;
}
.first-column-nav {
  padding: 20px 0 0 0;
}
.first-column-nav:not(:last-child) {
  margin: 0 0 39px 0;
}
.first-column-list {
  display: flex;
  gap: 10px;
}
.first-column-link {
  color: #727a82;
  font-size: 18px;
  line-height: 116%;
}
.first-column-title {
  font-weight: 700;
  font-size: 32px;
  line-height: 125%;
}
.second-column {
  z-index: 1;
  position: relative;
}

.second-column-image {
  max-width: 100%;
}
.second-column-diagonal {
  position: absolute;
}
.diagonal-1 {
  width: 232px;
  height: 176px;
  top: 0px;
  left: 720px;
}
.diagonal-2 {
  width: 178px;
  height: 135px;
  left: 570px;
  bottom: 0;
}
@media (max-width: 850px) {
  .promo-column:not(:last-child) {
    margin-right: 0;
  }
}
@media (max-width: 366px) {
  .first-column-link {
    font-size: 14px;
  }
}
</style>
