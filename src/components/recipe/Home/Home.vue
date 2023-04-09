<template>
  <div>
    <div v-if="isLoading"><LoadingPage></LoadingPage></div>
    <div v-else>
      <Wrappers :top-2-recipes="top2Recipes"></Wrappers>
      <!-- <RecipeListHome></RecipeListHome> -->
    </div>
  </div>
</template>

<script>
import Wrappers from "./Wrapper.vue";
// import RecipeListHome from "./List.vue";
import LoadingPage from "@/components/common/Loading.vue";
import {
  getRecipeListWithPagination,
  // getMostPopularRecipeListWithPagination,
  getRecipeAvgRate,
} from "@/utils/recipe";

export default {
  name: "HomePage",
  components: {
    Wrappers,
    LoadingPage,
    // RecipeListHome,
  },
  data() {
    return {
      PageSize: 1,
      PageNumberPerPage: 20,
      recipeList: [],
      // popularRecipeList: [],
      top2Recipes: [],
      isLoading: false,
    };
  },
  async created() {
    await this.getRecipeList();
  },
  methods: {
    async getRecipeList() {
      await getRecipeListWithPagination({
        PageSize: this.PageSize,
        PageNumberPerPage: this.PageNumberPerPage,
      })
        .then((response) => {
          this.recipeList = response.data || [];
          this.$store.commit("setPaginationRecipeList", response?.data);
          const ids = [];
          this.recipeList.slice(0, 2).map((recipe) => {
            ids.push(recipe.RecipeID);
          });
          this.getRecipesAvgRate(ids);
          this.isLoading = false;
        })
        .catch((error) => console.error(error));
    },
    // async getPopularRecipeList() {
    //   await getMostPopularRecipeListWithPagination({
    //     PageSize: this.PageSize,
    //     PageNumberPerPage: this.PageNumberPerPage,
    //   })
    //     .then((response) => {
    //       this.popularRecipeList = response.data || [];
    //       this.$store.commit("setPopularRecipeList", response?.data);
    //       this.isLoading = false;
    //     })
    //     .catch((error) => console.error(error));
    // },
    async getRecipesAvgRate(ids) {
      return await getRecipeAvgRate(ids)
        .then((response) => {
          this.top2Recipes = response.data || [];
        })
        .catch((error) => console.error(error));
    },
  },
};
</script>
