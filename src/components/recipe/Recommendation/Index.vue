<template>
  <div>
    <BannerPage
      title="Recommendation Page"
      background-image-type="recommendation-banner"
    />
    <div class="recommendation-page">
      <RecommendationSearch :ingredients="ingredients" @search="search" />
      <RecommendationIngredients @ingredientAdded="ingredientAdded" />
    </div>
    <div v-if="isLoading"><LoadingPage /></div>
    <div
      v-if="!isLoading && resultList.length > 0"
      class="recommendation-list-page"
    >
      <ResultList :resultList="resultList" />
    </div>
  </div>
</template>
<script>
import BannerPage from "@/components/common/Banner.vue";
import LoadingPage from "@/components/common/Loading.vue";
import RecommendationSearch from "@/components/recipe/Recommendation/Search.vue";
import RecommendationIngredients from "@/components/recipe/Recommendation/Ingredient.vue";
import ResultList from "@/components/recipe/Recommendation/ResultList.vue";
import { recommendationRecipe } from "@/utils/recipe";

export default {
  name: "RecommendationIndex",
  components: {
    BannerPage,
    RecommendationSearch,
    RecommendationIngredients,
    LoadingPage,
    ResultList,
  },
  data() {
    return {
      ingredients: "",
      isLoading: false,
      resultList: [],
    };
  },
  methods: {
    ingredientAdded(ingredients) {
      this.ingredients = ingredients;
      console.log(this.ingredients);
    },
    search(ingredients) {
      this.isLoading = true;
      this.recommend(ingredients);
    },
    async recommend(ingredients) {
      await recommendationRecipe(ingredients)
        .then((response) => {
          this.resultList = response.data || [];
          this.isLoading = false;
          console.log(this.resultList);
        })
        .catch((error) => console.error(error));
    },
  },
};
</script>
<style lang="scss"></style>
