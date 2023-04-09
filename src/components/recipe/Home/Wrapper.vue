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
                <div class="item item1 recipeID" ref="item1">
                  <img
                    :src="firstRecipe.Recipe_Photo"
                    :alt="firstRecipe.Recipe_Name"
                    style="width: 100%; height: 425px; cursor: pointer"
                  />
                </div>
                <div class="item item2" ref="item2">
                  <img
                    :src="secondRecipe.Recipe_Photo"
                    :alt="secondRecipe.Recipe_Name"
                    style="width: 100%; height: 425px; cursor: pointer"
                  />
                </div>
              </div>
            </div>
            <span class="wrapper-slider__slider__arrows">
              <a class="left carousel-control" href="#slider" data-slide="prev">
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
                      >Recommended Recipe Our New Feature</router-link
                    >
                    <router-link
                      v-if="activeClass.includes('1')"
                      class="menu__link"
                      :to="{
                        name: 'recipeDetail',
                        params: { id: firstRecipe.RecipeID },
                      }"
                      >{{ firstRecipe.Recipe_Name }}</router-link
                    >
                    <router-link
                      v-else-if="activeClass.includes('2')"
                      class="menu__link"
                      :to="{
                        name: 'recipeDetail',
                        params: { id: firstRecipe.RecipeID },
                      }"
                      >{{ secondRecipe.Recipe_Name }}</router-link
                    >
                  </h2>
                  <ul
                    v-if="activeClass.includes('1')"
                    class="wrapper-slider__slider__box__text__user-info"
                  >
                    <i class="icons fa fa-regular fa-user" />
                    <router-link
                      class="menu__link icons__link"
                      :to="{
                        name: 'userDetails',
                        params: { id: parseInt(firstRecipe.Author) },
                      }"
                      >{{ firstRecipe.Author }}</router-link
                    >
                    <i class="icons fa fa-solid fa-utensils" />
                    <div class="icons__text">
                      {{ firstRecipe.Prepare_Time }}
                    </div>
                    <i class="icons fa fa-solid fa-clock" />
                    <div class="icons__text">
                      {{ firstRecipe.Total_Time }}
                    </div>
                  </ul>
                  <ul
                    v-if="activeClass.includes('2')"
                    class="wrapper-slider__slider__box__text__user-info"
                  >
                    <i class="icons fa fa-regular fa-user" />
                    <router-link
                      class="menu__link icons__link"
                      :to="{
                        name: 'userDetails',
                        params: { id: parseInt(secondRecipe.Author) },
                      }"
                      >{{ secondRecipe.Author }}</router-link
                    >
                    <i class="icons fa fa-solid fa-utensils" />
                    <div class="icons__text">
                      {{ secondRecipe.Prepare_Time }}
                    </div>
                    <i class="icons fa fa-solid fa-clock" />
                    <div class="icons__text">
                      {{ secondRecipe.Total_Time }}
                    </div>
                  </ul>
                  <div
                    class="wrapper-slider__slider__box__text__content"
                    v-if="activeClass.includes('recomendation')"
                  >
                    <p>
                      When you start making the recipe you find on the internet,
                      you realize that many of the ingredients in your
                      refrigerator are missing and stop trying to search for a
                      recipe that matches the ingredients you have! The new
                      recommendation button on our website will suggest the most
                      suitable recipes for your ingredients. Thus, it will
                      facilitate the recipe search and suggest the most
                      suitable.
                    </p>
                    <p class="sub-text">
                      If you want to try this feature go to recommend page
                    </p>
                  </div>
                  <div v-else-if="activeClass.includes('1')">
                    <div class="wrapper-slider__slider__box__text__content">
                      <p>
                        {{
                          firstRecipe.Directions.split("**")
                            .slice(0, 3)
                            .toString()
                        }}
                      </p>
                    </div>
                    <div class="wrapper-slider__slider__box__text__rating">
                      <star-rating
                        class="rating-box"
                        v-model:rating="firstRecipe.RatingAvg"
                        :read-only="true"
                        :round-start-rating="false"
                        v-bind="starRatingOptions"
                      ></star-rating>
                    </div>
                  </div>
                  <div v-else-if="activeClass.includes('2')">
                    <div class="wrapper-slider__slider__box__text__content">
                      <p>
                        {{
                          secondRecipe.Directions.split("**")
                            .slice(0, 3)
                            .toString()
                        }}
                      </p>
                    </div>
                    <div class="wrapper-slider__slider__box__text__rating">
                      <star-rating
                        class="rating-box"
                        v-model:rating="secondRecipe.RatingAvg"
                        :read-only="true"
                        :round-start-rating="false"
                        v-bind="starRatingOptions"
                      ></star-rating>
                    </div>
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
import StarRating from "vue-star-rating";
export default {
  name: "HomeWrapper",
  components: { StarRating },
  props: {
    top2Recipes: {
      type: Array,
      default: () => [],
    },
  },
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
    observer.observe(this.$refs.item1, {
      attributes: true,
      attributeOldValue: true,
      attributeFilter: ["class"],
    });
    observer.observe(this.$refs.item2, {
      attributes: true,
      attributeOldValue: true,
      attributeFilter: ["class"],
    });
  },
  computed: {
    firstRecipe() {
      return this.top2Recipes.length > 0 ? this.top2Recipes[0] : {};
    },
    secondRecipe() {
      return this.top2Recipes.length > 0 ? this.top2Recipes[1] : {};
    },
    starRatingOptions() {
      return {
        starSize: 30,
        inactiveColor: "#ebc692",
        activeColor: "#f94616",
      };
    },
  },
  methods: {},
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
          padding: 5px 15px 5px 15px;
        }
        &__title {
          font-family: "Lora", serif;
          font-style: italic;
          font-size: 30px;
          color: #000000;
          margin-bottom: 2px;
        }
        &__user-info {
          font-size: 14px;
          margin-bottom: 15px;
          list-style: none;
          padding-left: 0;
          .icons {
            margin-left: 10px;
            margin-right: 10px;
            color: #231f20;
            &__text {
              display: inline-block;
            }
            &__link {
              border-bottom: 2px inset #f94616;
            }
          }
        }
        &__content {
          font-family: "Lato", sans-serif;
          font-size: 14px;
          line-height: 22px;
          .sub-text {
            font-style: italic;
            font-weight: bold;
            color: #78593a;
          }
        }
        &__rating {
          font-size: 14px;
          text-align: center;
          .rating-box {
            margin-left: 20%;
          }
          .rating-icons {
            &__icon {
              width: 10%;
              padding: 2px;
            }
          }
          .rating-result {
            font-size: 16px;
            margin-left: 10px;
          }
        }
        &__recomendation-box {
          background: #c4eb73;
          text-align: center;
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          .title {
            text-transform: uppercase;
            background: #ffffff;
            display: inline-block;
            font-family: "Lato", sans-serif;
            font-weight: bold;
            font-size: 12px;
            padding: 6px 13px;
            position: relative;
            top: -16px;
          }
          .list {
            list-style: none;
            padding-left: 0;
            &__item {
              display: inline-block;
              width: 25%;
              &__image {
                border: 3px solid white;
                height: 80px;
                width: 80px;
                object-fit: cover;
                border-radius: 50%;
              }
            }
          }
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
      font-size: 13px;
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
