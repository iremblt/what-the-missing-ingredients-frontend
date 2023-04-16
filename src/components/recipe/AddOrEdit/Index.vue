<template>
  <div>
    <BannerPage title="Add Recipe" background-image-type="add-banner" />
    <div class="recipes-add-page">
      <div class="recipes-add-page__container">
        <div>
          <div class="recipes-add-page__container__forms">
            <h2 class="recipe-add-header">Add Recipes</h2>
            <div class="recipe-add-form">
              <form @submit.prevent="addYourRecipe">
                <label class="recipe-add-form__label" for="recipe-name"
                  >Recipe Name</label
                >
                <input
                  class="recipe-add-form__input"
                  type="text"
                  v-model="recipe.RecipeName"
                />
                <label class="recipe-add-form__label" for="recipe-directions"
                  >Recipe Directions</label
                >
                <textarea
                  class="recipe-add-form__textarea"
                  rows="8"
                  cols="50"
                  v-model="recipe.Directions"
                />
                <label class="recipe-add-form__label" for="recipe-photo"
                  >Recipe Photo</label
                >
                <div class="recipe-add-form__image">
                  <label class="recipe-add-form__image__label" for="link"
                    >Link</label
                  >
                  <input
                    class="recipe-add-form__image__radio"
                    type="radio"
                    name="imageType"
                    value="link"
                    v-model="recipePhotoTypes"
                  />
                  <label class="recipe-add-form__image__label" for="file"
                    >File</label
                  >
                  <input
                    class="recipe-add-form__image__radio"
                    type="radio"
                    name="imageType"
                    value="file"
                    v-model="recipePhotoTypes"
                  />
                </div>
                <div>
                  <input
                    v-if="recipePhotoTypes === 'link'"
                    class="recipe-add-form__input"
                    type="text"
                    v-model="recipe.RecipePhoto"
                  />
                  <FileUpload
                    v-if="recipePhotoTypes === 'file'"
                    mode="basic"
                    name="demo[]"
                    url="./upload/recipe/Image"
                    accept="image/*"
                    :auto="true"
                    chooseLabel="Upload"
                    :maxFileSize="1000000"
                  />
                </div>
                <label class="recipe-add-form__label" for="recipe-times"
                  >Add Times</label
                >
                <div class="row">
                  <div class="col-lg-4">
                    <div class="recipe-add-form__times">
                      <i
                        class="recipe-add-form__times__icon fa-regular fa-clock"
                      ></i>
                      <input
                        placeholder="Prepare Time : 0m"
                        class="recipe-add-form__times__input"
                        type="text"
                        v-model="recipe.PrepareTime"
                      />
                    </div>
                  </div>
                  <div class="col-lg-4">
                    <div class="recipe-add-form__times">
                      <i
                        class="recipe-add-form__times__icon fa-solid fa-utensils"
                      ></i>
                      <input
                        placeholder="Cook Time : 0m"
                        class="recipe-add-form__times__input"
                        type="text"
                        v-model="recipe.CookTime"
                      />
                    </div>
                  </div>
                  <div class="col-lg-4">
                    <div class="recipe-add-form__times">
                      <i
                        class="recipe-add-form__times__icon fa-solid fa-bowl-rice"
                      ></i>
                      <input
                        placeholder="Total Time : 0h 0m"
                        class="recipe-add-form__times__input"
                        type="text"
                        v-model="recipe.TotalTime"
                      />
                    </div>
                  </div>
                </div>
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
                        >Add More Ingredients
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
                    </div>
                  </div>
                </div>
                <div class="recipe-add-form__add">
                  <button
                    class="recipe-add-form__add__button"
                    type="submit"
                    @click="submitRecipe"
                  >
                    Add Your Recipe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BannerPage from "@/components/common/Banner.vue";
import FileUpload from "primevue/fileupload";
export default {
  name: "AddOrEditRecipe",
  components: { BannerPage, FileUpload },
  data() {
    return {
      recipe: {
        RecipeName: "",
        Directions: "",
        RecipePhoto: "",
        Author: "",
        ReviewCount: 0,
        PrepareTime: "",
        CookTime: "",
        TotalTime: "",
        Ingredients: "",
      },
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
      recipePhotoTypes: "",
      addIngredients: [],
    };
  },
  methods: {
    addMoreIngredients() {
      return this.addIngredients.push({ ingredient: "" });
    },
    removeMoreIngredient(index) {
      return this.addIngredients.splice(index, 1);
    },
    addYourRecipe() {
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
      this.recipe.Ingredients = Ingredients;
    },
    submitRecipe() {
      console.log(this.recipe);
      this.$router.push("/");
    },
  },
};
</script>
<style lang="scss">
.recipes-add-page {
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
    &__forms {
      overflow: hidden;
      .recipe-add-header {
        font-family: "Lora", serif;
        font-weight: bold;
        margin-bottom: 30px;
        font-size: 23px;
      }
      .recipe-add-form {
        padding: 30px 25px 60px;
        &__label {
          font-family: "Lato", sans-serif;
          font-weight: bold;
          font-size: 16px;
          color: #514b49;
          margin-bottom: 10px;
        }
        &__input {
          width: 100%;
          height: 40px;
          font-size: 14px;
          border: 1px solid #e4d9d1;
          margin-bottom: 30px;
        }
        &__textarea {
          width: 100%;
          font-size: 14px;
          border: 1px solid #e4d9d1;
          margin-bottom: 30px;
        }
        &__image {
          display: flex;
          align-items: center;
          justify-content: center;
          &__label {
            font-family: "Lato", sans-serif;
            font-size: 14px;
            color: #514b49;
            margin-bottom: 10px;
          }
          &__radio {
            width: 20%;
            height: 20px;
            margin-bottom: 16px;
          }
        }
        .p-button {
          background: #d1e9a4;
          border-color: white;
          font-size: 16px;
          margin-bottom: 2rem;
          &:hover {
            background: #d1e9a4;
            border-color: white;
          }
        }
        &__times {
          padding: 15px;
          background-color: #eeeeee;
          display: flex;
          align-items: center;
          margin-bottom: 2rem;
          &__icon {
            font-size: 20px;
            width: 45px;
          }
          &__input {
            width: 100%;
            height: 40px;
            font-size: 12px;
            border: 1px solid #e4d9d1;
          }
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
        &__add {
          &__button {
            font-style: italic;
            font-size: 15px;
            background: #f94616;
            color: #ffffff;
            border: none;
            padding: 8px 18px;
            margin-top: 60px;
          }
        }
      }
    }
  }
}
</style>
