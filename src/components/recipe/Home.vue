<template>
  <div>
    <Wrappers></Wrappers>
  </div>
</template>

<script>
import Wrappers from "../common/Wrapper.vue";
import { getRecipeListWithPagination } from "@/utils/recipe";
export default {
  name: "HomePage",
  components: {
    Wrappers,
  },
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
