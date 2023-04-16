<template>
  <div class="home">
    <RecipeDetails />
  </div>
</template>

<script>
import RecipeDetails from "@/components/recipe/List/Details.vue";
export default {
  name: "RecipeList",
  components: {
    RecipeDetails,
  },
  data() {
    return {};
  },
  created() {},
  methods: {},
};
</script>
