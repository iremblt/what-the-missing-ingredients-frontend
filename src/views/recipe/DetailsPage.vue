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
  watch: {
    "$route.params.id": function (value) {
      if (value) {
        location.reload();
      }
    },
  },
  created() {},
  methods: {},
};
</script>
