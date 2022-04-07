<template>
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
              G-Star Raw is pushing the sustainability movement forward with a
              collection of stretch denim items for spring 2020 which is
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
</template>

<style scoped>
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
@media (min-width: 1200px) {
  .news-body {
    flex-direction: row-reverse;
    flex-wrap: nowrap;
  }
}
</style>
