<template>
  <div class="recommendation-ingredients">
    <label class="recommendation-ingredients__label">Choese Ingredient</label>
    <div class="recommendation-ingredients__ingredients">
      <div class="row">
        <div class="col-md-4 col-lg-2">
          <ul>
            <li>
              <label class="recommendation-ingredients__ingredients__label">
                <input
                  class="recommendation-ingredients__ingredients__label__input"
                  type="checkbox"
                  v-model="Ingredients.sugar"
                  @change="addYourIngredients"
                />
                Sugar
                <img
                  class="recommendation-ingredients__ingredients__label__icon"
                  src="@/assets/ingredients/sugar.png"
                />
              </label>
            </li>
            <li>
              <label class="recommendation-ingredients__ingredients__label">
                <input
                  class="recommendation-ingredients__ingredients__label__input"
                  type="checkbox"
                  v-model="Ingredients.milk"
                  @change="addYourIngredients" />Milk<img
                  class="recommendation-ingredients__ingredients__label__icon"
                  src="@/assets/ingredients/milk.png"
              /></label>
            </li>
            <li>
              <label class="recommendation-ingredients__ingredients__label">
                <input
                  class="recommendation-ingredients__ingredients__label__input"
                  type="checkbox"
                  v-model="Ingredients.egg"
                  @change="addYourIngredients" />Egg<img
                  class="recommendation-ingredients__ingredients__label__icon"
                  src="@/assets/ingredients/egg.png"
              /></label>
            </li>
            <li>
              <label class="recommendation-ingredients__ingredients__label">
                <input
                  class="recommendation-ingredients__ingredients__label__input"
                  type="checkbox"
                  v-model="Ingredients.butter"
                  @change="addYourIngredients"
                />Butter<img
                  class="recommendation-ingredients__ingredients__label__icon"
                  src="@/assets/ingredients/butter.png"
                />
              </label>
            </li>
            <li>
              <label class="recommendation-ingredients__ingredients__label">
                <input
                  class="recommendation-ingredients__ingredients__label__input"
                  type="checkbox"
                  v-model="Ingredients.cheese"
                  @change="addYourIngredients" />Cheese<img
                  class="recommendation-ingredients__ingredients__label__icon"
                  src="@/assets/ingredients/cheese.png"
              /></label>
            </li>
          </ul>
        </div>
        <div class="col-md-4 col-lg-2">
          <ul>
            <li>
              <label class="recommendation-ingredients__ingredients__label">
                <input
                  class="recommendation-ingredients__ingredients__label__input"
                  type="checkbox"
                  v-model="Ingredients.tomato"
                  @change="addYourIngredients"
                />
                Tomato
                <img
                  class="recommendation-ingredients__ingredients__label__icon"
                  src="@/assets/ingredients/tomato.png"
                />
              </label>
            </li>
            <li>
              <label class="recommendation-ingredients__ingredients__label">
                <input
                  class="recommendation-ingredients__ingredients__label__input"
                  type="checkbox"
                  v-model="Ingredients.onion"
                  @change="addYourIngredients" />Onion<img
                  class="recommendation-ingredients__ingredients__label__icon"
                  src="@/assets/ingredients/onion.png"
              /></label>
            </li>
            <li>
              <label class="recommendation-ingredients__ingredients__label">
                <input
                  class="recommendation-ingredients__ingredients__label__input"
                  type="checkbox"
                  v-model="Ingredients.lettuce"
                  @change="addYourIngredients" />Lettuce<img
                  class="recommendation-ingredients__ingredients__label__icon"
                  src="@/assets/ingredients/lettuce.png"
              /></label>
            </li>
            <li>
              <label class="recommendation-ingredients__ingredients__label">
                <input
                  class="recommendation-ingredients__ingredients__label__input"
                  type="checkbox"
                  v-model="Ingredients.pea"
                  @change="addYourIngredients"
                />Pea<img
                  class="recommendation-ingredients__ingredients__label__icon"
                  src="@/assets/ingredients/pea.png"
                />
              </label>
            </li>
            <li>
              <label class="recommendation-ingredients__ingredients__label">
                <input
                  class="recommendation-ingredients__ingredients__label__input"
                  type="checkbox"
                  @change="addYourIngredients"
                  v-model="Ingredients.lemon" />Lemon<img
                  class="recommendation-ingredients__ingredients__label__icon"
                  src="@/assets/ingredients/lemon.png"
              /></label>
            </li>
          </ul>
        </div>
        <div class="col-md-8 col-lg-4">
          <label
            class="recommendation-ingredients__ingredients__more-label"
            for="recipe-ingredients"
            >You can enter your ingredients manually
          </label>
          <button
            class="recommendation-ingredients__ingredients__more-plus"
            @click="addMoreIngredients"
          >
            <i class="fa-solid fa-circle-plus"></i>
          </button>
          <div
            v-for="(add, index) in addIngredients"
            :key="index"
            class="recommendation-ingredients__ingredients__more"
          >
            <input
              class="recommendation-ingredients__ingredients__more__input"
              type="text"
              v-model="add.ingredient"
              @input="addYourIngredients"
            />
            <button
              @click="removeMoreIngredient(index)"
              class="recommendation-ingredients__ingredients__more__icon"
            >
              <i class="fa-solid fa-trash"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "RecommendationIngredients",
  data() {
    return {
      Ingredients: {
        sugar: false,
        milk: false,
        egg: false,
        butter: false,
        cheese: false,
        tomato: false,
        onion: false,
        lettuce: false,
        pea: false,
        lemon: false,
      },
      addIngredients: [],
      totalIngredients: "",
    };
  },
  methods: {
    addMoreIngredients() {
      return this.addIngredients.push({ ingredient: "" });
    },
    removeMoreIngredient(index) {
      this.addIngredients.splice(index, 1);
      return this.addYourIngredients();
    },
    addYourIngredients() {
      let Ingredients = "";
      for (const [key, value] of Object.entries(this.Ingredients)) {
        if (value === true) {
          Ingredients = Ingredients ? Ingredients + "," + key : key;
        }
      }
      if (this.addIngredients.length > 0) {
        this.addIngredients.map(
          (item) =>
            (Ingredients = Ingredients
              ? Ingredients + "," + item.ingredient
              : item.ingredient)
        );
      }
      this.$emit("ingredientAdded", Ingredients);
      return Ingredients;
    },
  },
};
</script>
<style lang="scss">
.recommendation-ingredients {
  padding-top: 40px;
  padding-bottom: 40px;
  max-width: 1170px !important;
  margin-right: auto;
  margin-left: auto;
  padding-left: 15px;
  padding-right: 15px;
  &__label {
    font-family: "Lato", sans-serif;
    font-weight: bold;
    font-size: 16px;
    color: #514b49;
    margin-bottom: 10px;
  }
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
        width: 64%;
        margin: 4px 0;
      }
    }
    &__more-label {
      font-family: "Lato", sans-serif;
      font-size: 16px;
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
