<template>
  <div class="recipes-list">
    <div class="recipes-list__container">
      <div class="recipes-list__container__header">
        <h2 class="recipes-list__container__header__title">
          Most Reviewed Recipes
        </h2>
        <span class="recipes-list__container__header__icon">
          <img class="icon" src="@/assets/star_empty.png" />
        </span>
      </div>
      <div class="recipes-list__container__cards">
        <div class="card">
          <div
            v-for="(recipe, index) in getMostPopularRecipes"
            :key="index"
            class="card__title-image"
          >
            <div class="card__title-image__image">
              <router-link
                class="image-link"
                :to="{
                  name: 'recipeDetail',
                  params: { id: recipe.RecipeID },
                }"
              >
                <img
                  class="image"
                  :src="recipe.Recipe_Photo"
                  :alt="recipe.Recipe_Name"
                />
              </router-link>
            </div>
            <div class="card__title-image__text">
              <div class="container">
                <h3 class="container__title">
                  <router-link
                    class="menu__link"
                    :to="{
                      name: 'recipeDetail',
                      params: { id: recipe.RecipeID },
                    }"
                    >{{ recipe.Recipe_Name }}</router-link
                  >
                </h3>
                <div class="container__seperator"></div>
                <p class="container__text">
                  {{ recipe.Directions.split("**").slice(0, 1).toString() }}
                </p>
                <router-link
                  class="menu__link container__link"
                  :to="{
                    name: 'recipeDetail',
                    params: { id: recipe.RecipeID },
                  }"
                  >More ->
                </router-link>
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
  name: "RecipeListHome",
  props: {},
  data() {
    return {
      most_popular_six_recipes: this.popularRecipeList.slice(0, 6),
    };
  },
  watch: {},
  async created() {
    await this.getMostPopularRecipes;
  },
  computed: {
    getMostPopularRecipes() {
      return this.$store.getters._getPopularRecipeList
        ? this.$store.getters._getPopularRecipeList.slice(0, 6)
        : [];
    },
  },
  methods: {},
};
</script>

<style lang="scss">
.recipes-list {
  margin-top: 35px;
  &__container {
    max-width: 1170px !important;
    margin-right: auto;
    margin-left: auto;
    padding-left: 15px;
    padding-right: 15px;
    &__header {
      text-align: center;
      &__title {
        font-family: "Lato", sans-serif;
        font-weight: bolder;
        text-transform: uppercase;
        font-size: 25px;
      }
      &__icon {
        .icon {
          width: 73px;
        }
      }
    }
    &__cards {
      display: flex;
      flex-wrap: wrap;
      .card {
        width: 50%;
        height: auto;
        text-align: center;
        &__title-image {
          display: flex;
          &__image {
            width: 50%;
            .image {
              cursor: pointer;
            }
          }
          &__text {
            background: #f4f0ee;
            width: 50%;
            display: flex;
            padding: 10px;
            .container {
              background: #ffffff;
              padding: 10px;
              border: 1px solid #e4d9d1;
              &__title {
                font-size: 16px;
                margin-top: 10px;
                font-family: "Lato", sans-serif;
                text-transform: uppercase;
                font-weight: bold;
              }
              &__seperator {
                width: 50px;
                height: 3px;
                background: #f94616;
                margin: auto auto 10px;
              }
              &__text {
                font-family: "Karla", sans-serif;
                font-size: 14px;
                line-height: 24px;
              }
              &__link {
                font-family: "Lora", serif;
                font-style: italic;
                font-weight: bold;
                font-size: 14px;
              }
            }
          }
        }
      }
    }
  }
}
.carousel-control {
  position: relative;
  opacity: unset;
}
</style>
