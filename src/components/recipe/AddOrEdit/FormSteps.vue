<template>
  <div>
    <label class="recipe-add-form__label" for="recipe-directions"
      >Recipe Directions</label
    >
    <button class="recipe-add-form__more-plus" @click="addSteps">
      <i class="fa-solid fa-circle-plus"></i>
    </button>
    <div v-for="(step, index) in steps" :key="index">
      <h4 class="recipe-add-form__steps">Step {{ index + 1 }}</h4>
      <div class="recipe-add-form__directions">
        <textarea
          class="recipe-add-form__textarea"
          rows="4"
          cols="50"
          v-model="step.directions"
        />
        <button
          v-if="steps.length > 1"
          @click="removeStep(index)"
          class="recipe-add-form__directions__icon direction-delete"
        >
          <i class="fa-solid fa-trash"></i>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "DirectionsStepsRecipeForm",
  props: {
    recipeSteps: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      steps: this.recipeSteps,
    };
  },
  methods: {
    addSteps() {
      return this.steps.push({ directions: "" });
    },
    removeStep(index) {
      return this.steps.splice(index, 1);
    },
  },
};
</script>
<style lang="scss">
.recipe-add-form {
  &__label {
    font-family: "Lato", sans-serif;
    font-weight: bold;
    font-size: 16px;
    color: #514b49;
    margin-bottom: 10px;
  }
  &__textarea {
    width: 100%;
    font-size: 14px;
    border: 1px solid #e4d9d1;
    margin-bottom: 30px;
  }
  &__steps {
    margin-top: 1rem;
    margin-left: 1rem;
    color: #f94616;
    font-weight: bold;
  }
  &__directions {
    display: flex;
    .direction-delete {
      height: 90px;
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
  &__more-plus {
    width: 40px;
    background: transparent;
    border: none;
    color: #d1e9a4;
    font-size: 20px;
  }
}
</style>
