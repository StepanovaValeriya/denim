<template>
  <div>
    <main class="page">
      <section class="page-promo promo">
        <div class="promo-container container">
          <div class="promo-body">
            <div class="promo-column first-column">
              <p class="first-column-text">The quality you deserve</p>
              <h2 class="first-column-title">DENIM</h2>
              <div class="first-column-button button">
                <a class="button-select" href="#">Check new collection</a>
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
      <section class="page-bestsellers bestsellers">
        <div class="bestsellers-container container">
          <div class="bestsellers-header header-block">
            <h2 class="header-block-title">Bestsellers</h2>
            <a class="header-block-link" href="#">View all</a>
          </div>
          <div class="bestsellers-body">
            <ul class="catalog-list">
              <li class="catalog-item">
                <router-link class="catalog-item-link" to="/productCard">
                  <h3>Jacket</h3>
                  <img
                    src="../assets/index/Bestsellers/bestseller 1.jpg"
                    alt="Jacket"
                  />
                  <div class="catalog-item-price">$120</div>
                </router-link>
              </li>
              <li class="catalog-item">
                <router-link class="catalog-item-link" to="/productCard">
                  <h3>Overalls</h3>
                  <img
                    src="../assets/index/Bestsellers/bestseller 2.jpg"
                    alt="Overalls"
                  />
                  <div class="catalog-item-price">$140</div>
                </router-link>
              </li>
              <li class="catalog-item">
                <router-link class="catalog-item-link" to="/productCard">
                  <h3>Jacket</h3>
                  <img
                    src="../assets/index/Bestsellers/bestseller 3.jpg"
                    alt="Jacket"
                  />
                  <div class="catalog-item-price">$90</div>
                </router-link>
              </li>
              <li class="catalog-item">
                <router-link class="catalog-item-link" to="/productCard">
                  <h3>Overalls</h3>
                  <img
                    src="../assets/index/Bestsellers/bestseller 4.jpg"
                    alt="Overalls"
                  />
                  <div class="catalog-item-price">$160</div>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section class="page-news news">
        <div class="news-container container">
          <div class="news-header header-block">
            <h2 class="header-block-title">News</h2>
            <a class="header-block-link" href="#">View all</a>
          </div>
          <div class="news-body">
            <div class="news-background">
              <div class="news-content">
                <h3 class="news-title">
                  G- Star Updates Its Sustainable Collection
                </h3>
                <div class="news-date">Feb 12, 2020</div>
                <p class="news-text">
                  G-Star Raw is pushing the sustainability movement forward with
                  a collection of stretch denim items for spring 2020 which is
                  particularly designed for reuse...
                </p>
                <div class="news-button button">
                  <a class="button-select" href="#">Read more...</a>
                </div>
              </div>
            </div>
            <div class="news-img">
              <a href="#"
                ><img src="../assets/index/news/news img.jpg" alt="News photo"
              /></a>
            </div>
          </div>
        </div>
      </section>
      <section class="page-categories categories">
        <div class="categories-container container">
          <div class="categories-header header-block">
            <h2 class="header-block-title">Shop by category</h2>
            <a class="header-block-link" href="#">View all</a>
          </div>
          <div class="categories-body">
            <ul class="catalog-list">
              <li class="catalog-item">
                <a class="catalog-item-link" href="#">
                  <h3>Jeans</h3>
                  <img src="../assets/index/category/jeans.jpg" alt="Jeans" />
                </a>
              </li>
              <li class="catalog-item">
                <a class="catalog-item-link" href="#">
                  <h3>Shirts</h3>
                  <img src="../assets/index/category/shirts.jpg" alt="Shirts" />
                </a>
              </li>
              <li class="catalog-item">
                <a class="catalog-item-link" href="#">
                  <h3>Jackets</h3>
                  <img
                    src="../assets/index/category/jackets.jpg"
                    alt="Jackets"
                  />
                </a>
              </li>
              <li class="catalog-item">
                <a class="catalog-item-link" href="#">
                  <h3>Overalls</h3>
                  <img
                    src="../assets/index/category/overalls.jpg"
                    alt="Overalls"
                  />
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
export default {};
</script>

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
/* ===============bestsellers================= */
.page-bestsellers {
  padding: 130px 0 0 0;
}
/* ==============NEWS====================== */
.page-news {
  padding: 108px 0 0 0;
}
.news-body {
  display: flex;
  flex-wrap: wrap;
}
.news-background {
  background: url(../assets/index/news/diagonal_news.png) no-repeat;
  background-size: cover;
}
.news-content {
  flex: 0 1 100%;
  align-items: center;
  padding: 52px 47px 28px 43px;
  background-color: var(--section-color);
  margin: 33px 0px 33px 0;
}
.news-title {
  font-weight: 800;
  font-size: 24px;
  line-height: 28px;
}
.news-title:not(:last-child) {
  margin: 0 0 27px 0;
}
.news-date {
  font-size: 18px;
  line-height: 21px;
}
.news-date:not(:last-child) {
  margin: 0 0 13px 0;
}
.news-text {
  font-size: 18px;
  line-height: 21px;
  color: #727a82;
}
.news-text:not(:last-child) {
  margin: 0 0 24px 0;
}
.news-img {
  margin: 0 auto;
}
.news-img img {
  flex: 0 1 100%;
}
/* =========categories====================== */
.page-categories {
  padding: 109px 0 130px 0;
}
@media (min-width: 1200px) {
  .news-body {
    flex-direction: row-reverse;
    flex-wrap: nowrap;
  }
  .page-bestsellers {
    padding: 70px 0 0 0;
  }
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
