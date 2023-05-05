<template>
  <div>
    <label class="recipe-add-form__label" for="recipe-ingredients"
      >Recipe Ingredients</label
    >
    <div class="recipe-add-form__ingredients">
      <div class="row">
        <div class="col-md-6 col-lg-3">
          <ul>
            <li>
              <label
                class="recipe-add-form__ingredients__label"
                for="recipe-ingredients"
              >
                <input
                  class="recipe-add-form__ingredients__label__input"
                  type="checkbox"
                  v-model="Ingredients.sugar"
                />
                Sugar
                <img
                  class="recipe-add-form__ingredients__label__icon"
                  src="@/assets/ingredients/sugar.png"
                />
              </label>
            </li>
            <li>
              <label
                class="recipe-add-form__ingredients__label"
                for="recipe-ingredients"
              >
                <input
                  class="recipe-add-form__ingredients__label__input"
                  type="checkbox"
                  v-model="Ingredients.milk" />Milk<img
                  class="recipe-add-form__ingredients__label__icon"
                  src="@/assets/ingredients/milk.png"
              /></label>
            </li>
            <li>
              <label
                class="recipe-add-form__ingredients__label"
                for="recipe-ingredients"
              >
                <input
                  class="recipe-add-form__ingredients__label__input"
                  type="checkbox"
                  v-model="Ingredients.egg" />Egg<img
                  class="recipe-add-form__ingredients__label__icon"
                  src="@/assets/ingredients/egg.png"
              /></label>
            </li>
            <li>
              <label
                class="recipe-add-form__ingredients__label"
                for="recipe-ingredients"
              >
                <input
                  class="recipe-add-form__ingredients__label__input"
                  type="checkbox"
                  v-model="Ingredients.butter"
                />Butter<img
                  class="recipe-add-form__ingredients__label__icon"
                  src="@/assets/ingredients/butter.png"
                />
              </label>
            </li>
            <li>
              <label
                class="recipe-add-form__ingredients__label"
                for="recipe-ingredients"
              >
                <input
                  class="recipe-add-form__ingredients__label__input"
                  type="checkbox"
                  v-model="Ingredients.cheese" />Cheese<img
                  class="recipe-add-form__ingredients__label__icon"
                  src="@/assets/ingredients/cheese.png"
              /></label>
            </li>
          </ul>
        </div>
        <div class="col-md-6 col-lg-3">
          <ul>
            <li>
              <label
                class="recipe-add-form__ingredients__label"
                for="recipe-ingredients"
              >
                <input
                  class="recipe-add-form__ingredients__label__input"
                  type="checkbox"
                  v-model="Ingredients.tomato"
                />
                Tomato
                <img
                  class="recipe-add-form__ingredients__label__icon"
                  src="@/assets/ingredients/tomato.png"
                />
              </label>
            </li>
            <li>
              <label
                class="recipe-add-form__ingredients__label"
                for="recipe-ingredients"
              >
                <input
                  class="recipe-add-form__ingredients__label__input"
                  type="checkbox"
                  v-model="Ingredients.onion" />Onion<img
                  class="recipe-add-form__ingredients__label__icon"
                  src="@/assets/ingredients/onion.png"
              /></label>
            </li>
            <li>
              <label
                class="recipe-add-form__ingredients__label"
                for="recipe-ingredients"
              >
                <input
                  class="recipe-add-form__ingredients__label__input"
                  type="checkbox"
                  v-model="Ingredients.lettuce" />Lettuce<img
                  class="recipe-add-form__ingredients__label__icon"
                  src="@/assets/ingredients/lettuce.png"
              /></label>
            </li>
            <li>
              <label
                class="recipe-add-form__ingredients__label"
                for="recipe-ingredients"
              >
                <input
                  class="recipe-add-form__ingredients__label__input"
                  type="checkbox"
                  v-model="Ingredients.pea"
                />Pea<img
                  class="recipe-add-form__ingredients__label__icon"
                  src="@/assets/ingredients/pea.png"
                />
              </label>
            </li>
            <li>
              <label
                class="recipe-add-form__ingredients__label"
                for="recipe-ingredients"
              >
                <input
                  class="recipe-add-form__ingredients__label__input"
                  type="checkbox"
                  v-model="Ingredients.lemon" />Lemon<img
                  class="recipe-add-form__ingredients__label__icon"
                  src="@/assets/ingredients/lemon.png"
              /></label>
            </li>
          </ul>
        </div>
        <div class="col-md-6 col-lg-3">
          <label
            class="recipe-add-form__ingredients__more-label"
            for="recipe-ingredients"
            >Add More Ingredients (*)
          </label>
          <button
            class="recipe-add-form__ingredients__more-plus"
            @click="addMoreIngredients"
          >
            <i class="fa-solid fa-circle-plus"></i>
          </button>
          <div
            v-for="(add, index) in addIngredients"
            :key="index"
            class="recipe-add-form__ingredients__more"
          >
            <input
              class="recipe-add-form__ingredients__more__input"
              type="text"
              v-model="add.ingredient"
            />
            <button
              @click="removeMoreIngredient(index)"
              class="recipe-add-form__ingredients__more__icon"
            >
              <i class="fa-solid fa-trash"></i>
            </button>
          </div>
          <div v-if="!validation.Ingredients">
            <p class="validation">Ingredients is required</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "IngredientsRecipeForm",
  props: {
    recipeAddIngredients: {
      type: Array,
      default: () => [],
    },
    recipeIngredients: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      Ingredients: this.recipeIngredients,
      addIngredients: this.recipeAddIngredients,
      validation: {
        Ingredients: true,
      },
    };
  },
  watch: {
    addIngredients(value) {
      console.log(value);
      if (value && value !== "") {
        this.validation.Ingredients = true;
      } else {
        this.validation.Ingredients = false;
      }
    },
  },
  methods: {
    addMoreIngredients() {
      this.addIngredients.push({ ingredient: "" });
      this.validation.Ingredients = true;
    },
    removeMoreIngredient(index) {
      this.addIngredients.splice(index, 1);
      if (this.addIngredients.length < 1) {
        this.validation.Ingredients = false;
      }
    },
  },
};
</script>
<style lang="scss">
.recipe-add-form {
  &__ingredients {
    ul {
      list-style: none;
    }
    li {
      margin-bottom: 10px;
    }
    &__label {
      font-family: "Lato", sans-serif;
      font-weight: normal;
      font-size: 14px;
      width: 50%;
      display: flex;
      align-items: center;
      &__input {
        margin-right: 1rem;
      }
      &__icon {
        margin-left: 1rem;
        width: 40%;
      }
    }
    &__more-label {
      font-family: "Lato", sans-serif;
      font-weight: normal;
      font-size: 15px;
      margin-right: 5px;
    }
    &__more-plus {
      width: 40px;
      background: transparent;
      border: none;
      color: #d1e9a4;
      font-size: 20px;
    }
    &__more {
      display: flex;
      align-items: center;
      margin-bottom: 2rem;
      &__input {
        width: 100%;
        height: 30px;
        font-size: 12px;
        border: 1px solid #e4d9d1;
      }
      &__icon {
        width: 40px;
        color: #f94616;
        height: 30px;
        line-height: 27px;
        text-align: center;
        border: 1px solid #e4d9d1;
        font-size: 13px;
      }
    }
  }
}
</style>
