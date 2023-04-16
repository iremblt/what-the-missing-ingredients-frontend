<template>
  <div class="recommedation-result-list">
    <div class="recommedation-result-list__container">
      <div class="col-md-10 col-lg-12">
        <div class="recommedation-result-list__container__lists">
          <h2 class="recipe-header">
            Top 20 Recommendad Recipes For Your Ingredients
          </h2>
          <div class="recipe-listing">
            <div
              class="recipe-listing__card"
              v-for="(recipe, index) in resultList"
              :key="index"
            >
              <div class="recipe-listing__card__image">
                <router-link
                  class="image-link"
                  :to="{
                    name: 'recipeDetail',
                    params: { id: recipe.RecipeID },
                  }"
                >
                  <img
                    class="recipe-image"
                    :src="recipe.Recipe_Photo"
                    :alt="recipe.Recipe_Name"
                  />
                </router-link>
              </div>
              <div class="recipe-listing__card__about">
                <router-link
                  class="menu__link recipe-title"
                  :to="{
                    name: 'recipeDetail',
                    params: { id: recipe.RecipeID },
                  }"
                  >{{ recipe.Recipe_Name }}
                </router-link>
                <div class="seperator"></div>
                <div class="recipe-details">
                  <div class="recipe-details__user">
                    <i class="icons fa fa-regular fa-user" />
                    <router-link
                      class="menu__link icons__link user-name"
                      :to="{
                        name: 'userDetails',
                        params: { id: recipe.RecipeID },
                      }"
                      >{{ recipe.Author }}
                    </router-link>
                  </div>
                  <div class="recipe-details__time">
                    <i class="icons fa-regular fa-clock"></i>
                    {{ recipe.Total_Time }}
                  </div>
                </div>
                <p class="recipe-text">
                  {{
                    recipe.Directions
                      ? recipe.Directions.split("**")[0].slice(0, 100)
                      : ""
                  }}
                  ...
                </p>
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
  name: "ResultList",
  props: {
    resultList: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
<style lang="scss">
.recommedation-result-list {
  padding-top: 42px;
  background: #eff9dc;
  padding-bottom: 85px;
  &__container {
    max-width: 1170px !important;
    margin-right: auto;
    margin-left: auto;
    padding-left: 15px;
    padding-right: 15px;
    overflow: hidden;
    &__lists {
      overflow: hidden;
      .recipe-header {
        font-family: "Lora", serif;
        font-weight: 900;
        margin-bottom: 30px;
        font-size: 23px;
      }
      .recipe-listing {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        &__card {
          background: white;
          text-align: center;
          width: 30%;
          margin-right: 2rem;
          margin-bottom: 2rem;
          &__image {
            .recipe-image {
              width: 100%;
              height: 220px;
            }
          }
          &__about {
            border: 2px solid rgb(204 225 164);
            margin: 10px;
            padding: 15px 20px;
            .recipe-title {
              font-size: 16px;
              font-weight: bold;
              font-family: "Lato", sans-serif;
              text-transform: uppercase;
            }
            .seperator {
              width: 50px;
              height: 3px;
              background: #cce1a4;
              margin: auto auto 10px;
            }
            .recipe-details {
              display: flex;
              align-items: center;
              margin-left: 1rem;
              &__user {
                font-size: 12px;
                color: black;
                .user-name {
                  margin-left: 1rem;
                }
              }
              &__time {
                font-size: 12px;
                color: black;
                margin-left: 1rem;
              }
            }
            .recipe-text {
              font-size: 15px;
              line-height: 22px;
            }
          }
        }
      }
    }
    .recipes-side-bar {
      &__popular {
        &__title {
          font-family: "Lora", serif;
          font-style: italic;
          font-weight: bold;
          font-size: 16px;
          margin-left: 1rem;
          margin-bottom: 25px;
        }
        &__list {
          display: flex;
          border-bottom: 1px solid #b9d971;
          padding-bottom: 15px;
          margin-bottom: 15px;
          .side-bar-image {
            margin-right: 20px;
            &__image {
              width: 74px;
            }
          }
          .side-bar-text {
            &__title {
              font-size: 11px;
              font-family: "Lato", sans-serif;
            }
          }
        }
      }
    }
  }
}
</style>
