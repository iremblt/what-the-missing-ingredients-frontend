<template>
  <div>
    <span class="rating-icons">
      <img class="rating-icons__icon" src="@/assets/star-full.png" />
      <img class="rating-icons__icon" src="@/assets/star-full.png" />
      <img class="rating-icons__icon" src="@/assets/star-full.png" />
      <img class="rating-icons__icon" src="@/assets/star-half.png" />
      <img class="rating-icons__icon" src="@/assets/star-empty.svg" />
    </span>
    <star-rating v-model:rating="rating"></star-rating>

    <span class="rating-result">({{ ratingAvg }} / 5)</span>
  </div>
</template>

<script>
import StarRating from "vue-star-rating";

export default {
  name: "RatingStars",
  props: {
    ratingAvg: {
      type: Number,
      default: 0,
    },
  },
  components: {
    StarRating,
  },
  data() {
    return {
      rating: 4,
    };
  },
  methods: {
    changeVal(value, itemId) {
      console.log(value, itemId);
    },
  },
};
</script>
<style lang="scss">
.rating-icons {
  &__icon {
    width: 10%;
    padding: 2px;
  }
}
.rating-result {
  font-size: 16px;
  margin-left: 10px;
}
</style>
