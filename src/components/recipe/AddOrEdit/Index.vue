<template>
  <div>
    <BannerPage title="Add Recipe" background-image-type="add-banner" />
    <div class="recipes-add-page">
      <div class="recipes-add-page__container">
        <div class="row">
          <div class="col-md-8 col-lg-9">
            <div class="recipes-add-page__container__forms">
              <h2 class="recipe-add-header">Add Recipes</h2>
              <div class="recipe-add-form">
                <form @submit.prevent="submitSearch">
                  <label class="recipe-add-form__label" for="recipe-name"
                    >Recipe Name</label
                  >
                  <input
                    class="recipe-add-form__input"
                    type="text"
                    v-bind="recipe.name"
                  />
                </form>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-lg-3"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BannerPage from "@/components/common/Banner.vue";
export default {
  name: "AddOrEditRecipe",
  components: { BannerPage },
  data() {
    return {
      recipe: {
        name: "",
      },
    };
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
          border: 1px solid #e4d9d1;
          margin-bottom: 30px;
        }
      }
    }
  }
}
</style>
