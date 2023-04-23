<template>
  <div>
    <BannerPage title="Add Recipe" background-image-type="add-banner" />
    <div class="recipes-add-page">
      <div class="recipes-add-page__container">
        <div>
          <div class="recipes-add-page__container__forms">
            <h2 class="recipe-add-header">Add Recipes</h2>
            <Form @submitRecipe="submitRecipe" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BannerPage from "@/components/common/Banner.vue";
import Form from "./Form.vue";
export default {
  name: "AddOrEditRecipe",
  components: { BannerPage, Form },
  methods: {
    submitRecipe(recipe) {
      console.log(recipe);
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
    }
  }
}
</style>
