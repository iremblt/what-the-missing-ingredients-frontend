<template>
  <div class="recipe-list-page">
    <div class="recipe-list-page__container">
      <div class="row">
        <div class="col-md-8 col-lg-9">
          <div class="recipe-list-page__container__lists">
            <h2 class="recipe-header">New Recipes</h2>
            <div class="recipe-listing">
              <div
                class="recipe-listing__card"
                v-for="(recipe, index) in recipeList"
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
                    >{{ recipe.Recipe_Name }}</router-link
                  >
                  <div class="seperator"></div>
                  <div class="recipe-details">
                    <div class="recipe-details__user">
                      <i class="icons fa fa-regular fa-user" />
                      <router-link
                        class="menu__link icons__link user-name"
                        :to="{
                          name: 'userDetails',
                          params: { id: recipe.Author },
                        }"
                        >{{ recipe.Author }}</router-link
                      >
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
                    }}...
                  </p>
                </div>
              </div>
              <div class="pagination">
                <vue-awesome-paginate
                  :total-items="totalPage"
                  :items-per-page="perPage"
                  :max-pages-shown="5"
                  v-model="currentPage"
                  :on-click="onClickHandler"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-lg-3">
          <SideBar :mostPopular="mostPopular" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import SideBar from "@/components/common/SideBar.vue";
export default {
  name: "RecipeList",
  components: { SideBar },
  props: {
    recipeList: {
      type: Array,
      default: () => [],
    },
    mostPopular: {
      type: Array,
      default: () => [],
    },
    activePage: {
      type: Number,
      default: 1,
    },
    totalPage: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      currentPage: this.activePage,
      perPage: 9,
    };
  },
  methods: {
    onClickHandler(page) {
      console.log(this.currentPage);
      this.$emit("pageChanged", page);
    },
  },
};
</script>
<style lang="scss">
.recipe-list-page {
  padding-top: 42px;
  background: #f5f5f5;
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
        font-weight: bold;
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
            border: 2px solid #f16e4bb0;
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
              background: #f94616;
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
  }
}
.pagination-container {
  display: flex;
  column-gap: 10px;
}
.paginate-buttons {
  height: 40px;
  width: 40px;
  border-radius: 20px;
  cursor: pointer;
  background-color: rgb(242, 242, 242);
  border: 1px solid rgb(217, 217, 217);
  color: black;
}
.paginate-buttons:hover {
  background-color: #d8d8d8;
}
.active-page {
  background-color: #f94616;
  border: 1px solid #f94616;
  color: white;
}
.active-page:hover {
  background-color: #f94616;
}
</style>
