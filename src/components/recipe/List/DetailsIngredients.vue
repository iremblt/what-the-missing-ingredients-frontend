<template>
  <div class="ingredient-list">
    <h3 class="ingredient-list__header">Ingredients</h3>
    <div class="ingredient-list__ingredient">
      <ul v-for="(ingredient, index) in ingredients" :key="index">
        <li>
          <i class="fa-solid fa-carrot ingredient-icon"></i>
          <span class="ingredient-name">{{ ingredient }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "DetailsIngredients",
  props: {
    recipeIngredients: {
      type: String,
      default: "",
    },
  },
  computed: {
    ingredients() {
      return this.recipeIngredients.split(",");
    },
  },
};
</script>
<style lang="scss">
.ingredient-list {
  margin-top: 60px;
  &__header {
    font-size: 18px;
    font-weight: bold;
    border-bottom: 1px solid #f94616;
    display: inline;
    margin-left: 2rem;
  }
  &__ingredient {
    margin-left: 1rem;
    margin-top: 15px;
    border: 1px solid #e4e4e3;
    padding: 0 5px;
    padding-right: 30px;
    width: fit-content;
    ul {
      li {
        list-style: none;
      }
    }
    .ingredient-icon {
      font-size: 14px;
      margin-right: 1rem;
      color: #f27d23;
    }
    .ingredient-name {
      font-size: 16px;
      line-height: 25px;
    }
  }
}
</style>
