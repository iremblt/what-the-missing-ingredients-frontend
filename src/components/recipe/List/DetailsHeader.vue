<template>
  <div class="recipe-details__header">
    <h2 class="recipe-details__header__title">
      {{ recipeDetail.Recipe_Name }}
    </h2>
    <div class="recipe-details__header__author">
      <i class="recipe-details__header__author__icon fa fa-regular fa-user" />
      <router-link
        class="menu__link icons__link recipe-details__header__author__link"
        :to="{
          name: 'userDetails',
          params: { id: parseInt(recipeDetail.Author) },
        }"
        ><span class="by">by</span> {{ recipeDetail.AuthorName }}
      </router-link>
      <div class="recipe-details__header__author__star">
        <div class="wrapper-slider__slider__box__text__rating">
          <star-rating
            class="rating-box"
            v-model:rating="rating"
            :read-only="true"
            :round-start-rating="false"
            v-bind="starRatingOptions"
          ></star-rating>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import StarRating from "vue-star-rating";
export default {
  name: "DetailsHeader",
  components: {
    StarRating,
  },
  props: {
    recipeDetail: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      rating: this.recipeDetail.RatingAvg,
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
};
</script>
<style lang="scss">
.recipe-details {
  &__header {
    padding-left: 2rem;
    margin-bottom: 20px;
    &__title {
      font-size: 23px;
      font-family: "Lora", serif;
      font-weight: bold;
    }
    &__author {
      display: flex;
      align-items: center;
      &__star {
        margin-bottom: 1rem;
      }
      &__icon {
        font-size: 14px;
        color: black;
        margin-right: 1rem;
      }
      &__link {
        font-size: 14px;
        .by {
          color: grey;
        }
      }
    }
  }
}
</style>
