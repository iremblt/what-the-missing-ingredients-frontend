<template>
  <div>
    <BannerPage
      title="All Recipe List"
      background-image-type="recipes-banner"
    />
    <SearchBox />
  </div>
</template>
<script>
import BannerPage from "@/components/common/Banner.vue";
import SearchBox from "@/components/common/Search.vue";
export default {
  name: "RecipeList",
  components: { BannerPage, SearchBox },
};
</script>
<style lang="scss"></style>
