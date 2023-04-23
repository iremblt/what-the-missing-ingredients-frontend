<template>
  <div class="recipes-side-bar">
    <div class="recipes-side-bar__popular">
      <h2 class="recipes-side-bar__popular__title">Top Recipes</h2>
      <ul>
        <li
          v-for="(popular, index) in mostPopular"
          :key="index"
          class="recipes-side-bar__popular__list"
        >
          <div class="side-bar-image">
            <router-link
              class="image-link"
              :to="{
                name: 'recipeDetail',
                params: { id: popular.RecipeID },
              }"
            >
              <img
                class="side-bar-image__image"
                :src="popular.Recipe_Photo"
                :alt="popular.Recipe_Name"
              />
            </router-link>
          </div>
          <div class="side-bar-text">
            <router-link
              class="menu__link side-bar-text__title"
              :to="{
                name: 'recipeDetail',
                params: { id: popular.RecipeID },
              }"
              >{{ popular.Recipe_Name }}</router-link
            >
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "CommonSideBar",
  props: {
    mostPopular: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
<style lang="scss">
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
</style>
