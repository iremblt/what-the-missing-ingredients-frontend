<template>
  <div class="banner-page" :class="backgroundImageType">
    <div class="banner-page__title-area">
      <h3 class="banner-page__title-area__title">{{ title }}</h3>
    </div>
  </div>
</template>
<script>
export default {
  name: "BannerPage",
  props: {
    title: {
      type: String,
      default: "",
    },
    backgroundImageType: {
      type: String,
      default: "",
    },
  },
  computed: {},
};
</script>
<style lang="scss">
.banner-page {
  min-height: 200px;
  background-size: cover;
  background-position: bottom;
  &__title-area {
    background-color: #ffff;
    padding: 10px;
    display: inline-block;
    margin-top: 40px;
    margin-left: 40px;
    &__title {
      font-weight: bold;
      font-size: 20px;
      text-transform: uppercase;
      border: 1px solid #e4d9d1;
      padding: 20px 40px;
    }
  }
}
.recommendation-banner {
  background-image: url("@/assets/recommendation-banner.jpg");
}
.recipes-banner {
  background-size: cover;
  background-position-y: center;
  background-image: url("@/assets/recipes-banner.jpg");
}
.add-banner {
  background-position: top;
  background-image: url("@/assets/add-banner.jpg");
}
</style>
