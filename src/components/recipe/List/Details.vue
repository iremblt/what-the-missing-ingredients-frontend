<template>
  <div class="recipe-details-page">
    <BannerPage
      title="Recipe Detail Page"
      background-image-type="recipe-detail"
    />
    <div v-if="isLoading"><LoadingPage /></div>
    <div class="recipe-details-page__detail">
      <div class="recipe-details-page__detail__container">
        <div class="row">
          <div class="col-md-8 col-lg-9">
            <div class="recipe-details">
              <div class="recipe-details__header">
                <h2 class="recipe-details__header__title">
                  {{ recipeDetail.Recipe_Name }}
                </h2>
                <div class="recipe-details__header__author"></div>
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
import LoadingPage from "@/components/common/Loading.vue";
import { getRecipeDetail } from "@/utils/recipe";
import { getRecipeReviews } from "@/utils/review";
export default {
  name: "RecipeDetails",
  components: {
    BannerPage,
    LoadingPage,
  },
  data() {
    return {
      isLoading: false,
      recipeDetail: {},
      recipeReviews: [],
    };
  },
  async created() {
    await this.getRecipe(this.$route.params.id);
    this.isLoading = false;
    await this.getRecipesReviews(this.$route.params.id);
  },
  methods: {
    async getRecipe(id) {
      await getRecipeDetail(id)
        .then((response) => {
          this.recipeDetail = response.data || [];
          this.isLoading = false;
        })
        .catch((error) => console.error(error));
    },
    async getRecipesReviews(id) {
      await getRecipeReviews(id)
        .then((response) => {
          this.recipeReviews = response.data || [];
          this.isLoading = false;
        })
        .catch((error) => console.error(error));
    },
  },
};
</script>
<style lang="scss">
.recipe-details-page {
  &__detail {
    background: #f5f5f5;
    padding-top: 85px;
    padding-bottom: 85px;
    &__container {
      max-width: 1170px !important;
      margin-right: auto;
      margin-left: auto;
      padding-left: 15px;
      padding-right: 15px;
      .recipe-details {
        &__header {
          margin-bottom: 20px;
          &__title {
            font-size: 23px;
            font-family: "Lora", serif;
            font-weight: bold;
          }
          &__author {
            display: flex;
          }
        }
      }
    }
  }
}
</style>
