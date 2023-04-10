<template>
  <div>
    <BannerPage
      title="Recommendation Page"
      background-image-type="recommendation-banner"
    />
  </div>
</template>
<script>
import BannerPage from "@/components/common/Banner.vue";
export default {
  name: "RecommendationIndex",
  components: { BannerPage },
};
</script>
