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
        <div class="recipe-card">
          <div
            v-for="(recipe, index) in getMostPopularRecipes"
            :key="index"
            class="recipe-card__title-image"
          >
            <div class="recipe-card__title-image__container">
              <div class="recipe-card__title-image__container__image">
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
              <div class="recipe-card__title-image__container__text">
                <div class="container-area">
                  <h3 class="container-area__title">
                    <router-link
                      class="menu__link"
                      :to="{
                        name: 'recipeDetail',
                        params: { id: recipe.RecipeID },
                      }"
                      >{{ recipe.Recipe_Name }}</router-link
                    >
                  </h3>
                  <div class="container-area__seperator"></div>
                  <p class="container-area__text">
                    {{ recipe.Directions.split("**").slice(0, 1).toString() }}
                  </p>
                  <router-link
                    class="menu__link container-area__link"
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
  </div>
</template>

<script>
export default {
  name: "RecipeListHome",
  props: {},
  data() {
    return {};
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
        font-family: "Lora", serif;
        font-style: italic;
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
      .recipe-card {
        display: flex;
        flex-wrap: wrap;

        &__title-image {
          width: 50%;
          padding: 5px;
          text-align: center;
          &__container {
            height: 82%;
            overflow: hidden;
            display: flex;
            &__image {
              width: 50%;
              .image {
                cursor: pointer;
              }
            }
            &__text {
              background: #f4f0ee;
              display: flex;
              padding: 10px;
              .container-area {
                &:hover {
                  background: #e6f7c2;
                }
                background: #ffffff;
                border: 1px solid #e4d9d1;
                &__title {
                  font-size: 16px;
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
                  line-height: 21px;
                }
                &__link {
                  font-family: "Lora", serif;
                  font-style: italic;
                  font-weight: bold;
                  font-size: 13px;
                  margin-bottom: 7rem;
                }
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
