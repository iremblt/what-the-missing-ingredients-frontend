<template>
  <div>
    <BannerPage
      title="All Recipe List"
      background-image-type="recipes-banner"
    />
    <SearchBox @searched="searched($event)" />
    <div v-if="isLoading"><LoadingPage /></div>
    <RecipeList
      v-else
      :recipe-list-search="recipeListWithSearch"
      :recipe-list="getRecipes"
      :most-popular="getMostPopularRecipes"
      :active-page="this.PageSize"
      :total-page="totalPage"
      @pageChanged="pageChanged($event)"
    />
  </div>
</template>
<script>
import BannerPage from "@/components/common/Banner.vue";
import SearchBox from "@/components/common/Search.vue";
import LoadingPage from "@/components/common/Loading.vue";
import RecipeList from "@/components/recipe/List/List.vue";
import {
  searchRecipeList,
  getRecipeListWithPagination,
  getMostPopularRecipeListWithPagination,
  getRecipeList,
  getRecipeListWithSearch,
} from "@/utils/recipe";
export default {
  name: "RecipeListIndex",
  components: { BannerPage, SearchBox, LoadingPage, RecipeList },
  data() {
    return {
      recipeListWithSearch: [],
      isSearched: false,
      isLoading: false,
      PageSize: 1,
      PageNumberPerPage: 9,
      totalPage: 0,
    };
  },
  async created() {
    this.isLoading = true;
    await this.getAllRecipeList();
    if (this.getRecipes.length === 0) {
      this.isLoading = true;
      await this.getPaginationRecipeList();
    }
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
    getRecipes() {
      return this.isSearched
        ? this.recipeListWithSearch
        : this.$store.getters._getPaginationRecipeList
        ? this.$store.getters._getPaginationRecipeList
        : [];
    },
  },
  methods: {
    async searched(recipe) {
      this.isLoading = true;
      this.isSearched = true;
      await this.recipeSearch(recipe);
      await this.getAllRecipeListWithSearch(recipe);
    },
    async recipeSearch(recipe) {
      await searchRecipeList({
        RecipeName: recipe,
        PageSize: 1,
        PageNumberPerPage: 9,
      })
        .then((response) => {
          this.PageSize = 1;
          this.recipeListWithSearch = response.data || [];
          this.isLoading = false;
        })
        .catch((error) => console.error(error));
    },
    async getPaginationRecipeList() {
      await getRecipeListWithPagination({
        PageSize: this.PageSize,
        PageNumberPerPage: this.PageNumberPerPage,
      })
        .then((response) => {
          this.$store.commit("setPaginationRecipeList", response?.data);
          this.isLoading = false;
        })
        .catch((error) => console.error(error));
    },
    async getAllRecipeList() {
      await getRecipeList()
        .then((response) => {
          this.totalPage = response.data?.length;
          this.isLoading = false;
        })
        .catch((error) => console.error(error));
    },
    async getAllRecipeListWithSearch(search) {
      await getRecipeListWithSearch({
        RecipeName: search,
      })
        .then((response) => {
          this.totalPage = response.data?.length;
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
    async pageChanged(page) {
      this.PageSize = page;
      this.isLoading = true;
      await this.getPaginationRecipeList();
    },
  },
};
</script>
<style lang="scss"></style>
