<template>
  <div>
    <main class="page">
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
      <section class="page-product product">
        <div class="product-container container">
          <div class="product-filter filter">
            <select class="filter-list" name="filter-list">
              <option value="1">Filter By</option>
              <option value="2">Price</option>
              <option value="3">Size</option>
              <option value="4">Color</option>
            </select>
          </div>
          <div class="product-body">
            <ul class="catalog-list">
              <li class="catalog-item catalog-item-catalog">
                <a class="catalog-item-link" href="#">
                  <h3>Jacket</h3>
                  <img
                    src="../assets/Catalog/jacket catalog 1.jpg"
                    alt="Jacket"
                  />
                  <div class="catalog-item-price">$40</div>
                </a>
              </li>
              <li class="catalog-item catalog-item-catalog">
                <a class="catalog-item-link" href="#">
                  <h3>Jacket</h3>
                  <img
                    src="../assets/Catalog/jacket catalog 2.jpg"
                    alt="Jacket"
                  />
                  <div class="catalog-item-price">$70</div>
                </a>
              </li>
              <li class="catalog-item catalog-item-catalog">
                <a class="catalog-item-link" href="#">
                  <h3>Jacket</h3>
                  <img
                    src="../assets/Catalog/jacket catalog 3.jpg"
                    alt="Jacket"
                  />
                  <div class="catalog-item-price">$50</div>
                </a>
              </li>
              <li class="catalog-item catalog-item-catalog">
                <a class="catalog-item-link" href="#">
                  <h3>Jacket</h3>
                  <img
                    src="../assets/Catalog/jacket catalog 4.jpg"
                    alt="Jacket"
                  />
                  <div class="catalog-item-price">$60</div>
                </a>
              </li>
              <li class="catalog-item catalog-item-catalog">
                <a class="catalog-item-link" href="#">
                  <h3>Jacket</h3>
                  <img
                    src="../assets/Catalog/jacket catalog 5.jpg"
                    alt="Jacket"
                  />
                  <div class="catalog-item-price">$40</div>
                </a>
              </li>
              <li class="catalog-item catalog-item-catalog">
                <a class="catalog-item-link" href="#">
                  <h3>Jacket</h3>
                  <img
                    src="../assets/Catalog/jacket catalog 6.jpg"
                    alt="Jacket"
                  />
                  <div class="catalog-item-price">$110</div>
                </a>
              </li>
              <li class="catalog-item catalog-item-catalog">
                <a class="catalog-item-link" href="#">
                  <h3>Jacket</h3>
                  <img
                    src="../assets/Catalog/jacket catalog 7.jpg"
                    alt="Jacket"
                  />
                  <div class="catalog-item-price">$35</div>
                </a>
              </li>
              <li class="catalog-item catalog-item-catalog">
                <a class="catalog-item-link" href="#">
                  <h3>Jacket</h3>
                  <img
                    src="../assets/Catalog/jacket catalog 8.jpg"
                    alt="Jacket"
                  />
                  <div class="catalog-item-price">$85</div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <div class="page-show show">
        <div class="show-container container">
          <div class="show-text">Showing 9 of 45 items</div>
          <div class="show-button button">
            <a class="button-select" href="#">Load more</a>
          </div>
        </div>
      </div>
    </main>
  </div>
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
/* ==================product================= */
.product-container {
  padding: 40px 0 0 0;
}

.product-filter {
  margin: 0 10px 40px 0;
}
.filter {
  text-align: right;
}
.filter-list {
  border: 2px solid #151c22;
  padding: 18px 117px 18px 18px;
  font-size: 18px;
  font-weight: 500;
  line-height: 21px;
  color: var(--main-color-black);
}
.product-body {
  margin: 0 10px 0 10px;
}
/* ============show=============== */
.page-show {
  padding: 83px 0 130px 0;
}
.show-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.show-text {
  font-size: 18px;
  line-height: 21px;
}
.show-text:not(:last-child) {
  margin-bottom: 50px;
}
.show-button {
  padding: 27px 58px;
}
@media (max-width: 850px) {
  .promo-column:not(:last-child) {
    margin-right: 0;
  }
}
@media (max-width: 797px) {
  .filter {
    text-align: center;
  }
}
@media (max-width: 366px) {
  .first-column-link {
    font-size: 14px;
  }
}
</style>
