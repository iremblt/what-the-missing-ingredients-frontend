<template>
  <div class="recipe-list-page">
    <div class="recipe-list-page__container">
      <div class="row">
        <div class="col-md-8 col-lg-9">
          <div class="recipe-list-page__container__lists">
            <h2 class="recipe-header">New Recipes</h2>
            <div class="recipe-listing">
              <div class="recipe-listing__card">
                <div class="recipe-listing__card__image">
                  <router-link
                    class="image-link"
                    :to="{
                      name: 'recipeDetail',
                      params: { id: 2 },
                    }"
                  >
                    <img
                      class="recipe-image"
                      src="@/assets/recipes-banner.jpg"
                      alt="recipe.Recipe_Name"
                    />
                  </router-link>
                </div>
                <div class="recipe-listing__card__about">
                  <router-link
                    class="menu__link recipe-title"
                    :to="{
                      name: 'recipeDetail',
                      params: { id: 2 },
                    }"
                    >recipe.Recipe_Name</router-link
                  >
                  <div class="seperator"></div>
                  <div class="recipe-user-details">
                    <i class="icons fa fa-regular fa-user" />
                    <router-link
                      class="menu__link icons__link user-name"
                      :to="{
                        name: 'userDetails',
                        params: { id: 2 },
                      }"
                      >Author</router-link
                    >
                  </div>
                  <p class="recipe-text">
                    Nam ornare arcu turpis, nec congu Curabitur quis euismod.
                    Nam ornare arcu turpis, nec congu Curabitur quis euismod.
                    Nam ornare gsfg
                  </p>
                </div>
              </div>
              <div class="recipe-listing__card">
                <div class="recipe-listing__card__image">
                  <router-link
                    class="image-link"
                    :to="{
                      name: 'recipeDetail',
                      params: { id: 2 },
                    }"
                  >
                    <img
                      class="recipe-image"
                      src="@/assets/recipes-banner.jpg"
                      alt="recipe.Recipe_Name"
                    />
                  </router-link>
                </div>
                <div class="recipe-listing__card__about">
                  <router-link
                    class="menu__link recipe-title"
                    :to="{
                      name: 'recipeDetail',
                      params: { id: 2 },
                    }"
                    >recipe.Recipe_Name</router-link
                  >
                  <div class="seperator"></div>
                  <div class="recipe-user-details">
                    <i class="icons fa fa-regular fa-user" />
                    <router-link
                      class="menu__link icons__link user-name"
                      :to="{
                        name: 'userDetails',
                        params: { id: 2 },
                      }"
                      >Author</router-link
                    >
                  </div>
                  <p class="recipe-text">
                    Nam ornare arcu turpis, nec congu Curabitur quis euismod.
                    Nam ornare arcu turpis, nec congu Curabitur quis euismod.
                    Nam ornare gsfg
                  </p>
                </div>
              </div>
              <div class="recipe-listing__card">
                <div class="recipe-listing__card__image">
                  <router-link
                    class="image-link"
                    :to="{
                      name: 'recipeDetail',
                      params: { id: 2 },
                    }"
                  >
                    <img
                      class="recipe-image"
                      src="@/assets/recipes-banner.jpg"
                      alt="recipe.Recipe_Name"
                    />
                  </router-link>
                </div>
                <div class="recipe-listing__card__about">
                  <router-link
                    class="menu__link recipe-title"
                    :to="{
                      name: 'recipeDetail',
                      params: { id: 2 },
                    }"
                    >recipe.Recipe_Name</router-link
                  >
                  <div class="seperator"></div>
                  <div class="recipe-user-details">
                    <i class="icons fa fa-regular fa-user" />
                    <router-link
                      class="menu__link icons__link user-name"
                      :to="{
                        name: 'userDetails',
                        params: { id: 2 },
                      }"
                      >Author</router-link
                    >
                  </div>
                  <p class="recipe-text">
                    Nam ornare arcu turpis, nec congu Curabitur quis euismod.
                    Nam ornare arcu turpis, nec congu Curabitur quis euismod.
                    Nam ornare gsfg
                  </p>
                </div>
              </div>
              <div class="recipe-listing__card">
                <div class="recipe-listing__card__image">
                  <router-link
                    class="image-link"
                    :to="{
                      name: 'recipeDetail',
                      params: { id: 2 },
                    }"
                  >
                    <img
                      class="recipe-image"
                      src="@/assets/recipes-banner.jpg"
                      alt="recipe.Recipe_Name"
                    />
                  </router-link>
                </div>
                <div class="recipe-listing__card__about">
                  <router-link
                    class="menu__link recipe-title"
                    :to="{
                      name: 'recipeDetail',
                      params: { id: 2 },
                    }"
                    >recipe.Recipe_Name</router-link
                  >
                  <div class="seperator"></div>
                  <div class="recipe-user-details">
                    <i class="icons fa fa-regular fa-user" />
                    <router-link
                      class="menu__link icons__link user-name"
                      :to="{
                        name: 'userDetails',
                        params: { id: 2 },
                      }"
                      >Author</router-link
                    >
                  </div>
                  <p class="recipe-text">
                    Nam ornare arcu turpis, nec congu Curabitur quis euismod.
                    Nam ornare arcu turpis, nec congu Curabitur quis euismod.
                    Nam ornare gsfg
                  </p>
                </div>
              </div>
              <div class="recipe-listing__card">
                <div class="recipe-listing__card__image">
                  <router-link
                    class="image-link"
                    :to="{
                      name: 'recipeDetail',
                      params: { id: 2 },
                    }"
                  >
                    <img
                      class="recipe-image"
                      src="@/assets/recipes-banner.jpg"
                      alt="recipe.Recipe_Name"
                    />
                  </router-link>
                </div>
                <div class="recipe-listing__card__about">
                  <router-link
                    class="menu__link recipe-title"
                    :to="{
                      name: 'recipeDetail',
                      params: { id: 2 },
                    }"
                    >recipe.Recipe_Name</router-link
                  >
                  <div class="seperator"></div>
                  <div class="recipe-user-details">
                    <i class="icons fa fa-regular fa-user" />
                    <router-link
                      class="menu__link icons__link user-name"
                      :to="{
                        name: 'userDetails',
                        params: { id: 2 },
                      }"
                      >Author</router-link
                    >
                  </div>
                  <p class="recipe-text">
                    Nam ornare arcu turpis, nec congu Curabitur quis euismod.
                    Nam ornare arcu turpis, nec congu Curabitur quis euismod.
                    Nam ornare gsfg
                  </p>
                </div>
              </div>
              <div class="recipe-listing__card">
                <div class="recipe-listing__card__image">
                  <router-link
                    class="image-link"
                    :to="{
                      name: 'recipeDetail',
                      params: { id: 2 },
                    }"
                  >
                    <img
                      class="recipe-image"
                      src="@/assets/recipes-banner.jpg"
                      alt="recipe.Recipe_Name"
                    />
                  </router-link>
                </div>
                <div class="recipe-listing__card__about">
                  <router-link
                    class="menu__link recipe-title"
                    :to="{
                      name: 'recipeDetail',
                      params: { id: 2 },
                    }"
                    >recipe.Recipe_Name</router-link
                  >
                  <div class="seperator"></div>
                  <div class="recipe-user-details">
                    <i class="icons fa fa-regular fa-user" />
                    <router-link
                      class="menu__link icons__link user-name"
                      :to="{
                        name: 'userDetails',
                        params: { id: 2 },
                      }"
                      >Author</router-link
                    >
                  </div>
                  <p class="recipe-text">
                    Nam ornare arcu turpis, nec congu Curabitur quis euismod.
                    Nam ornare arcu turpis, nec congu Curabitur quis euismod.
                    Nam ornare gsfg
                  </p>
                </div>
              </div>
              <div class="pagination">
                <vue-awesome-paginate
                  :total-items="50"
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
          <div class="recipes-side-bar">
            <div class="recipes-side-bar__popular">
              <h2 class="recipes-side-bar__popular__title">Top 5 Recipes</h2>
              <ul>
                <li class="recipes-side-bar__popular__list">
                  <div class="side-bar-image">
                    <router-link
                      class="image-link"
                      :to="{
                        name: 'recipeDetail',
                        params: { id: 2 },
                      }"
                    >
                      <img
                        class="side-bar-image__image"
                        src="@/assets/recipes-banner.jpg"
                        alt="recipe.Recipe_Name"
                      />
                    </router-link>
                  </div>
                  <div class="side-bar-text">
                    <router-link
                      class="menu__link side-bar-text__title"
                      :to="{
                        name: 'recipeDetail',
                        params: { id: 2 },
                      }"
                      >recipe.Recipe_Name</router-link
                    >
                  </div>
                </li>
                <li class="recipes-side-bar__popular__list">
                  <div class="side-bar-image">
                    <router-link
                      class="image-link"
                      :to="{
                        name: 'recipeDetail',
                        params: { id: 2 },
                      }"
                    >
                      <img
                        class="side-bar-image__image"
                        src="@/assets/recipes-banner.jpg"
                        alt="recipe.Recipe_Name"
                      />
                    </router-link>
                  </div>
                  <div class="side-bar-text">
                    <router-link
                      class="menu__link side-bar-text__title"
                      :to="{
                        name: 'recipeDetail',
                        params: { id: 2 },
                      }"
                      >recipe.Recipe_Name</router-link
                    >
                  </div>
                </li>
                <li class="recipes-side-bar__popular__list">
                  <div class="side-bar-image">
                    <router-link
                      class="image-link"
                      :to="{
                        name: 'recipeDetail',
                        params: { id: 2 },
                      }"
                    >
                      <img
                        class="side-bar-image__image"
                        src="@/assets/recipes-banner.jpg"
                        alt="recipe.Recipe_Name"
                      />
                    </router-link>
                  </div>
                  <div class="side-bar-text">
                    <router-link
                      class="menu__link side-bar-text__title"
                      :to="{
                        name: 'recipeDetail',
                        params: { id: 2 },
                      }"
                      >recipe.Recipe_Name</router-link
                    >
                  </div>
                </li>
                <li class="recipes-side-bar__popular__list">
                  <div class="side-bar-image">
                    <router-link
                      class="image-link"
                      :to="{
                        name: 'recipeDetail',
                        params: { id: 2 },
                      }"
                    >
                      <img
                        class="side-bar-image__image"
                        src="@/assets/recipes-banner.jpg"
                        alt="recipe.Recipe_Name"
                      />
                    </router-link>
                  </div>
                  <div class="side-bar-text">
                    <router-link
                      class="menu__link side-bar-text__title"
                      :to="{
                        name: 'recipeDetail',
                        params: { id: 2 },
                      }"
                      >recipe.Recipe_Name</router-link
                    >
                  </div>
                </li>
                <li class="recipes-side-bar__popular__list">
                  <div class="side-bar-image">
                    <router-link
                      class="image-link"
                      :to="{
                        name: 'recipeDetail',
                        params: { id: 2 },
                      }"
                    >
                      <img
                        class="side-bar-image__image"
                        src="@/assets/recipes-banner.jpg"
                        alt="recipe.Recipe_Name"
                      />
                    </router-link>
                  </div>
                  <div class="side-bar-text">
                    <router-link
                      class="menu__link side-bar-text__title"
                      :to="{
                        name: 'recipeDetail',
                        params: { id: 2 },
                      }"
                      >recipe.Recipe_Name</router-link
                    >
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "RecipeList",
  props: {
    recipeList: {
      type: Array,
      default: () => [],
    },
    mostPopular: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      currentPage: 1,
      perPage: 9,
    };
  },
  methods: {
    onClickHandler(page) {
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
            .recipe-user-details {
              font-size: 12px;
              color: black;
              .user-name {
                margin-left: 1rem;
              }
            }
            .recipe-text {
              font-size: 15px;
              line-height: 26px;
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
