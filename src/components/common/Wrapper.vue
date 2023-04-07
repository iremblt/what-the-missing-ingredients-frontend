<template>
  <div class="wrapper-slider">
    <div class="wrapper-slider__container">
      <div class="wrapper-slider__slider">
        <div class="wrapper-slider__slider__box">
          <div class="wrapper-slider__slider__box__left">
            <div id="slider" class="carousel slide" data-ride="carousel">
              <div class="carousel-inner" ref="slider">
                <div class="item active recomendation" ref="recomendation">
                  <img
                    src="@/assets/slider-recomendation.jpg"
                    alt="Recomendation"
                    style="width: 100%; height: 425px; cursor: pointer"
                  />
                </div>

                <div class="item recipeID" ref="recipeID">
                  <img
                    src="https://images.media-allrecipes.com/userphotos/560x315/34726.jpg"
                    alt="Chicago"
                    style="width: 100%; height: 425px; cursor: pointer"
                  />
                </div>

                <div class="item" ref="item">
                  <img
                    src="https://images.media-allrecipes.com/userphotos/560x315/4465807.jpg"
                    alt="New York"
                    style="width: 100%; height: 425px; cursor: pointer"
                  />
                </div>
              </div>
            </div>
            <span class="wrapper-slider__slider__arrows">
              <a
                class="left carousel-control"
                href="#slider"
                data-slide="prev"
                @click="clicked"
              >
                <span class="wrapper-slider__slider__arrows__area">
                  <i
                    class="wrapper-slider__slider__arrows__area__fa fa-solid fa-arrow-left"
                  ></i>
                </span>
              </a>
              <a class="right carousel-control" href="#slider" data-slide="next"
                ><span class="wrapper-slider__slider__arrows__area">
                  <i
                    class="wrapper-slider__slider__arrows__area__fa fa-solid fa-arrow-right"
                  ></i> </span
              ></a>
            </span>
            <span class="wrapper-slider__slider__feature">Recomend</span>
          </div>
          <div class="wrapper-slider__slider__box__right">
            <div class="wrapper-slider__slider__box__right__container">
              <div class="wrapper-slider__slider__box__text">
                <div class="wrapper-slider__slider__box__text__container">
                  <h2 class="wrapper-slider__slider__box__text__title">
                    <router-link
                      v-if="activeClass.includes('recomendation')"
                      class="menu__link"
                      to="/recipe/recomendation"
                      >Recommend Recipe</router-link
                    >
                  </h2>
                  <ul class="wrapper-slider__slider__box__text__user-info">
                    <li class="user">
                      <router-link
                        v-if="activeClass.includes('recomendation')"
                        class="menu__link"
                        to="/recipe/recomendation"
                        >Recommend Recipe</router-link
                      >
                    </li>
                    <li class="user">
                      <router-link
                        v-if="activeClass.includes('recomendation')"
                        class="menu__link"
                        to="/recipe/recomendation"
                        >Recommend Recipe</router-link
                      >
                    </li>
                    <li class="total-time"></li>
                  </ul>
                  <div v-if="activeClass.includes('recomendation')">
                    When you start making the recipe you find on the internet,
                    you realize that many of the ingredients in your
                    refrigerator are missing and stop trying to search for a
                    recipe that matches the ingredients you have! The new
                    recommendation button on our website will suggest the most
                    suitable recipes for your ingredients. Thus, it will
                    facilitate the recipe search and suggest the most suitable.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeWrapper",
  data() {
    return {
      activeClass: "recomendation",
    };
  },
  watch: {},
  mounted() {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "class"
        ) {
          if (mutation.target.className.includes("active")) {
            this.activeClass = mutation.target.className;
          }
        }
      });
    });
    observer.observe(this.$refs.recomendation, {
      attributes: true,
      attributeOldValue: true,
      attributeFilter: ["class"],
    });
    observer.observe(this.$refs.recipeID, {
      attributes: true,
      attributeOldValue: true,
      attributeFilter: ["class"],
    });
    observer.observe(this.$refs.item, {
      attributes: true,
      attributeOldValue: true,
      attributeFilter: ["class"],
    });
  },
  methods: {},
  computed: {},
};
</script>

<style lang="scss">
.wrapper-slider {
  &__container {
    max-width: 1170px !important;
    margin-right: auto;
    margin-left: auto;
    padding-left: 15px;
    padding-right: 15px;
  }
  &__slider {
    position: relative;
    &__box {
      display: flex;
      &__left {
        position: relative;
        width: 66%;
        height: 425px;
      }
      &__right {
        height: 425px;
        overflow: hidden;
        position: relative;
        width: 34%;
        background: #e1f5b6d4;
        &__container {
          position: relative;
          display: block;
          margin-bottom: 0;
        }
      }
      &__text {
        display: flex;
        height: 425px;
        &__container {
          padding: 45px 30px 62px 30px;
        }
        &__title {
          margin-top: 0;
          font-family: "Lora", serif;
          font-style: italic;
          font-weight: 400;
          font-size: 30px;
          line-height: 36px;
          color: #000000;
          margin-bottom: 30px;
        }
        &__user-info {
          position: relative;
          margin-bottom: 44px;
          list-style: none;
          padding-left: 0;
        }
      }
    }
    &__arrows {
      display: table;
      position: absolute;
      top: 50%;
      left: -18px;
      &__area {
        display: table-cell;
        width: 39px;
        line-height: 65px;
        cursor: pointer;
        background: #231f20;
        &__fa {
          color: #ffffff;
        }
      }
    }
    &__feature {
      line-height: 40px;
      text-transform: uppercase;
      font-family: "Lato", sans-serif;
      font-weight: bold;
      color: #ffffff;
      position: absolute;
      top: 50px;
      background: #f94616;
      padding: 0 30px;
    }
  }
}
.carousel-control {
  position: relative;
  opacity: unset;
}
</style>
