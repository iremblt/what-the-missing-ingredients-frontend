<template>
  <div class="recipes-list">
    <div class="recipes-list__container">
      <div class="recipes-list__header">
        <h2 class="recipes-list__title">Latest News</h2>
      </div>
    </div>
  </div>
</template>

<script>
import { recommendationRecipe } from "@/utils/recipe";
export default {
  name: "RecipeListHome",
  props: {
    top2Recipes: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      activeClass: "recomendation",
      firstRecipeSimilar: [],
      secondRecipeSimilar: [],
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
      if (this.top2Recipes.length > 0) {
        this.getFirstRecipeSimilar(this.top2Recipes[0].Ingredients);
      }
      return this.top2Recipes.length > 0 ? this.top2Recipes[0] : {};
    },
    secondRecipe() {
      if (this.top2Recipes.length > 0) {
        this.getSecondRecipeSimilar(this.top2Recipes[1].Ingredients);
      }
      return this.top2Recipes.length > 0 ? this.top2Recipes[1] : {};
    },
  },
  methods: {
    async similarRecipes(ingredients) {
      await recommendationRecipe(ingredients)
        .then((response) => {
          console.log(response.data);
          return response.data.length > 0 ? response.data.slice(1, 3) : [];
        })
        .catch((error) => console.error(error));
    },
    async getFirstRecipeSimilar(ingredients) {
      this.firstRecipeSimilar = await this.similarRecipes(ingredients);
    },
    async getSecondRecipeSimilar(ingredients) {
      this.secondRecipeSimilar = await this.similarRecipes(ingredients);
    },
  },
};
</script>

<style lang="scss">
.recipes-list {
  &__container {
    max-width: 1170px !important;
    margin-right: auto;
    margin-left: auto;
    padding-left: 15px;
    padding-right: 15px;
  }
  &__header {
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
          line-height: 24px;
          .sub-text {
            font-style: italic;
            font-weight: bold;
            color: #78593a;
          }
        }
        &__rating {
          padding-left: 0;
          padding-top: 20px;
          font-family: "Lora", serif;
          font-style: italic;
          font-weight: 400;
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
