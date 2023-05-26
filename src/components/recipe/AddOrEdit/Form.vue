<template>
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
      <div v-if="!validation.RecipeName">
        <p class="validation">Recipe Name is required</p>
      </div>
      <FormSteps :recipeSteps="steps" />
      <label class="recipe-add-form__label" for="recipe-photo"
        >Recipe Photo</label
      >
      <div class="recipe-add-form__image">
        <label class="recipe-add-form__image__label" for="link">Link</label>
        <input
          class="recipe-add-form__image__radio"
          type="radio"
          name="imageType"
          value="link"
          v-model="recipePhotoTypes"
        />
        <label class="recipe-add-form__image__label" for="file">File</label>
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
      <div v-if="!validation.RecipePhoto">
        <p class="validation">Recipe Photo is required</p>
      </div>
      <FormTimes
        :recipeDetail="recipeData"
        @prepareTimeChanged="prepareTimeChanged"
        @cookTimeChanged="cookTimeChanged"
        @totalTimeChanged="totalTimeChanged"
      />
      <FormIngredients
        :recipeAddIngredients="addIngredients"
        :recipeIngredients="Ingredients"
      />
      <div class="recipe-add-form__add">
        <button
          class="recipe-add-form__add__button"
          type="submit"
          @click="submitRecipe"
        >
          {{ buttonText }}
        </button>
      </div>
    </form>
  </div>
</template>
<script>
import FormIngredients from "./FormIngredients.vue";
import FormSteps from "./FormSteps.vue";
import FormTimes from "./FormTimes.vue";
import FileUpload from "primevue/fileupload";
export default {
  components: { FormSteps, FormTimes, FormIngredients, FileUpload },
  name: "AddEditRecipeForm",
  props: {
    recipeData: {
      type: Object,
      default: () => {},
    },
  },
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
      steps: [{ directions: "" }],
      recipePhotoTypes: "",
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
      validation: {
        RecipeName: false,
        RecipePhoto: false,
        Ingredients: true,
        Directions: true,
        TotalTime: false,
      },
      buttonText: "Add Your Recipe",
    };
  },
  watch: {
    "recipe.Directions"(value) {
      if (value && value !== "") {
        this.validation.Directions = true;
      } else {
        this.validation.Directions = false;
      }
    },
    "recipe.RecipeName"(value) {
      if (value && value !== "") {
        this.validation.RecipeName = true;
      } else {
        this.validation.RecipeName = false;
      }
    },
    "recipe.RecipePhoto"(value) {
      if (value && value !== "") {
        this.validation.RecipePhoto = true;
      } else {
        this.validation.RecipePhoto = false;
      }
    },
    "recipe.TotalTime"(value) {
      if (value && value !== "") {
        this.validation.TotalTime = true;
      } else {
        this.validation.TotalTime = false;
      }
    },
    recipeData(value) {
      if (value) {
        const stepsSplit = this.recipeData.Directions.split("**");
        let steps = [];
        stepsSplit.map((step) => steps.push({ directions: step }));
        this.recipe = {
          RecipeName: this.recipeData.Recipe_Name,
          Directions: this.recipeData.Directions,
          RecipePhoto: this.recipeData.Recipe_Photo,
          Author: this.recipeData.Author,
          ReviewCount: this.recipeData.Review_Count,
          PrepareTime: this.recipeData.Prepare_Time,
          CookTime: this.recipeData.Cook_Time,
          TotalTime: this.recipeData.Total_Time,
          Ingredients: this.recipeData.Ingredients,
        };
        this.recipePhotoTypes = "link";
        this.steps =
          steps[steps.length - 1] === ""
            ? steps.slice(0, steps.length - 1)
            : steps;
        if (this.recipeData.Ingredients) {
          const recipeDetailIngredients =
            this.recipeData.Ingredients.split(",");
          let isInclude = false;
          recipeDetailIngredients.map((ingredient) => {
            Object.keys(this.Ingredients).every((key) => {
              if (key === ingredient) {
                this.Ingredients[key] = true;
                isInclude = true;
                return false;
              } else {
                isInclude = false;
                return true;
              }
            });
            if (!isInclude) {
              this.addIngredients.push({ ingredient: ingredient });
            }
          });
        }
        this.buttonText = "Edit Your Recipe";
      }
    },
  },
  methods: {
    addStepsInOneLine() {
      let direction = "";
      this.steps.map(
        (item) =>
          (direction = direction
            ? direction + "**" + item.directions
            : item.directions)
      );
      this.recipe.Directions = direction;
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
    prepareTimeChanged(time) {
      this.recipe.PrepareTime = time;
    },
    cookTimeChanged(time) {
      this.recipe.CookTime = time;
    },
    totalTimeChanged(time) {
      this.recipe.TotalTime = time;
    },
    submitRecipe() {
      this.addStepsInOneLine();
      const isValid = Object.values(this.validation).includes(false);
      if (!isValid) {
        this.$emit("submitRecipe", this.recipe);
      }
    },
  },
};
</script>
<style lang="scss">
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
    outline: 0;
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
.validation {
  color: red;
  font-size: 13px;
}
</style>
