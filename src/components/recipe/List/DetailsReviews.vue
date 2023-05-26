<template>
  <div class="recipe-details__reviews">
    <div class="recipe-details__reviews__header">
      <h3 class="recipe-details__direction-area__header">Recipe Reviews</h3>
      <div class="recipe-details__reviews__rating">
        <div class="rating-area">
          <span class="review-sub">Avarage Rating: </span>
          <star-rating
            class="rating-display"
            :rating="recipeDetail.RatingAvg"
            :read-only="true"
            :round-start-rating="false"
            v-bind="starRatingOptions"
          ></star-rating>
        </div>
        <div>
          <span class="review-sub"
            >Total Review Count : {{ recipeDetail.Review_Count }}</span
          >
        </div>
      </div>
      <DetailsComments :recipeReviews="recipeReviews" />
    </div>
    <div
      v-if="reviewTotalPage > 0"
      class="pagination recipe-details__reviews__pagination"
    >
      <vue-awesome-paginate
        :total-items="reviewTotalPage"
        :items-per-page="10"
        :max-pages-shown="5"
        v-model="currentPage"
        :on-click="onClickHandler"
      />
    </div>
  </div>
</template>
<script>
import StarRating from "vue-star-rating";
import DetailsComments from "./DetailsComments.vue";
export default {
  name: "DetailsReviews",
  components: { StarRating, DetailsComments },
  props: {
    recipeDetail: {
      type: Object,
      default: () => {},
    },
    recipeReviews: {
      type: Array,
      default: () => [],
    },
    reviewTotalPage: {
      type: Number,
      default: 0,
    },
    reviewActivePage: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      currentPage: this.reviewActivePage,
    };
  },
  computed: {
    starRatingOptions() {
      return {
        starSize: 18,
        inactiveColor: "#ebc692",
        activeColor: "#f94616",
      };
    },
  },
  methods: {
    onClickHandler(page) {
      console.log(this.currentPage);
      this.$emit("pageChanged", page);
    },
  },
};
</script>
<style lang="scss">
.recipe-details {
  &__reviews {
    padding: 25px;
    background-color: #fcfcfc;
    margin-bottom: 30px;
    margin-left: 2rem;
    width: 80%;
    &__rating {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 1rem;
      .rating-area {
        display: flex;
        margin-left: 2rem;
        align-items: flex-end;
        .rating-display {
          font-size: 13px;
        }
        .review-sub {
          font-size: 12px;
          font-family: "Lato", sans-serif;
          margin-right: 2rem;
        }
      }
      .review-sub {
        margin-right: 2rem;
        font-size: 13px;
        color: #767474;
      }
    }
    &__pagination {
      justify-content: center;
    }
  }
}
</style>
