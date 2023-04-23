<template>
  <div>
    <label class="recipe-add-form__label" for="recipe-times">Add Times</label>
    <div class="row">
      <div class="col-lg-4">
        <div class="recipe-add-form__times">
          <i class="recipe-add-form__times__icon fa-regular fa-clock"></i>
          <input
            placeholder="Prepare Time : 0m"
            class="recipe-add-form__times__input"
            type="text"
            :value="PrepareTime"
            @input="prepareTimeChanged($event.target.value)"
          />
        </div>
      </div>
      <div class="col-lg-4">
        <div class="recipe-add-form__times">
          <i class="recipe-add-form__times__icon fa-solid fa-utensils"></i>
          <input
            placeholder="Cook Time : 0m"
            class="recipe-add-form__times__input"
            type="text"
            :value="CookTime"
            @input="cookTimeChanged($event.target.value)"
          />
        </div>
      </div>
      <div class="col-lg-4">
        <div class="recipe-add-form__times">
          <i class="recipe-add-form__times__icon fa-solid fa-bowl-rice"></i>
          <input
            placeholder="Total Time : 0h 0m"
            class="recipe-add-form__times__input"
            type="text"
            :value="TotalTime"
            @input="totalTimeChanged($event.target.value)"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "TimesRecipeForm",
  data() {
    return {
      PrepareTime: "",
      CookTime: "",
      TotalTime: "",
    };
  },
  methods: {
    prepareTimeChanged(time) {
      this.PrepareTime = time;
      this.$emit("prepareTimeChanged", this.PrepareTime);
    },
    cookTimeChanged(time) {
      this.CookTime = time;
      this.$emit("cookTimeChanged", this.CookTime);
    },
    totalTimeChanged(time) {
      this.TotalTime = time;
      this.$emit("totalTimeChanged", this.TotalTime);
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
}
</style>
