<template>
  <div></div>
</template>

<script>
import { getRecipeListWithPagination } from "@/utils/recipe";
export default {
  name: "RecipeList",
  components: {},
  data() {
    return {
      PageSize: 1,
      PageNumberPerPage: 20,
      recipeList: [],
    };
  },
  created() {
    this.getRecipeList();
  },
  methods: {
    getRecipeList() {
      getRecipeListWithPagination({
        PageSize: this.PageSize,
        PageNumberPerPage: this.PageNumberPerPage,
      })
        .then((response) => {
          console.log(response.data);
          this.recipeList = response.data || [];
        })
        .catch((error) => console.error(error));
    },
  },
};
</script>
