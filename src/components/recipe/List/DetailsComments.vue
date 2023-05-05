<template>
  <div class="recipe-details__reviews__comments">
    <div v-if="recipeReviews.length > 0">
      <ul v-for="(review, index) in recipeReviews" :key="index">
        <li class="recipe-details__reviews__comments__card">
          <div class="comment-card">
            <img
              class="comment-card__icon"
              src="@/assets/user.png"
              alt="user"
            />
            <div class="comment-card__content">
              <h3 class="comment-card__content__author">
                <router-link
                  class="menu__link icons__link recipe-details__header__author__link"
                  :to="{
                    name: 'userDetails',
                    params: {
                      id: parseInt(review.profileID),
                    },
                  }"
                  >{{ review.Author }}
                </router-link>
              </h3>
              <p class="comment-card__content__comment">
                {{ review.Comments }}
              </p>
              <ul class="comment-card__content__rating">
                <star-rating
                  class="rating-display"
                  v-model:rating="review.Rate"
                  :read-only="true"
                  :round-start-rating="false"
                  v-bind="starRatingOptions"
                ></star-rating>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div v-else>
      <p class="recipe-details__reviews__comments__no-comments">
        No comments yet !
      </p>
    </div>
  </div>
</template>
<script>
import StarRating from "vue-star-rating";
export default {
  name: "DetailsComments",
  components: { StarRating },
  props: {
    recipeReviews: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      rating: 4.7,
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
  &__reviews {
    &__comments {
      margin-top: 40px;
      &__card {
        list-style: none;
        margin-bottom: 10px;
        background-color: #f5f5f5;
        padding: 30px;
        .comment-card {
          display: flex;
          align-items: center;
          &__icon {
            width: 16%;
          }
          &__content {
            border-radius: 50%;
            margin-left: 3rem;
            width: 100%;
            position: relative;
            &__author {
              font-weight: 600;
              color: #111111;
              margin-bottom: 5px;
            }
            &__comment {
              font-family: "Lato", sans-serif;
              font-size: 14px;
              color: #767474;
              line-height: 23px;
              margin-bottom: 0;
            }
            &__rating {
              margin-bottom: 10px;
              position: absolute;
              top: 0;
              right: 0;
              z-index: 1;
            }
          }
        }
      }
      &__no-comments {
        font-size: 14px;
        margin-left: 2rem;
      }
    }
  }
}
</style>
