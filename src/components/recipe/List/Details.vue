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
              <DetailsHeader :recipeDetail="recipeDetail" />
              <div class="recipe-details__thumbnail">
                <img
                  class="recipe-details__thumbnail__image"
                  :src="recipeDetail.Recipe_Photo"
                  :alt="recipeDetail.Recipe_Name"
                />
              </div>
              <DetailsTimes :recipeDetail="recipeDetail" />
              <DetailsDirections :recipeDetail="recipeDetail" />
              <DetailsReviews />
              <AddComment />
            </div>
          </div>
          <div class="col-md-4 col-lg-3">
            <SideBar :most-popular="getMostPopularRecipes" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BannerPage from "@/components/common/Banner.vue";
import LoadingPage from "@/components/common/Loading.vue";
import SideBar from "@/components/common/SideBar.vue";
import {
  getRecipeDetail,
  getMostPopularRecipeListWithPagination,
} from "@/utils/recipe";
import { getRecipeReviews } from "@/utils/review";
import DetailsHeader from "./DetailsHeader.vue";
import DetailsTimes from "./DetailsTimes.vue";
import DetailsDirections from "./DetailsDirections.vue";
import DetailsReviews from "./DetailsReviews.vue";
import AddComment from "./AddComment.vue";

export default {
  name: "RecipeDetails",
  components: {
    BannerPage,
    LoadingPage,
    SideBar,
    DetailsHeader,
    DetailsTimes,
    DetailsDirections,
    DetailsReviews,
    AddComment,
  },
  data() {
    return {
      isLoading: false,
      recipeDetail: {},
      recipeReviews: [],
      rating: 4.7,
    };
  },
  async created() {
    await this.getRecipe(this.$route.params.id);
    this.isLoading = false;
    await this.getRecipesReviews(this.$route.params.id);
    if (this.getMostPopularRecipes.length === 0) {
      this.isLoading = true;
      await this.getPopularRecipeList();
    }
  },
  computed: {
    getMostPopularRecipes() {
      return this.$store.getters._getPopularRecipeList
        ? this.$store.getters._getPopularRecipeList
        : [];
    },
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
    async getPopularRecipeList() {
      return await getMostPopularRecipeListWithPagination({
        PageSize: 1,
        PageNumberPerPage: 5,
      })
        .then((response) => {
          this.$store.commit("setPopularRecipeList", response?.data);
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
    padding-top: 42px;
    padding-bottom: 85px;
    &__container {
      max-width: 1170px !important;
      margin-right: auto;
      margin-left: auto;
      padding-left: 15px;
      padding-right: 15px;
      .recipe-details {
        &__thumbnail {
          &__image {
            width: 80%;
            padding-left: 2rem;
            height: auto;
          }
        }
      }
    }
  }
}
</style>
