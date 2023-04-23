<template>
  <div class="recipe-details__reviews__comments">
    <ul>
      <li class="recipe-details__reviews__comments__card">
        <div class="comment-card">
          <img class="comment-card__icon" src="@/assets/user.png" alt="user" />
          <div class="comment-card__content">
            <h3 class="comment-card__content__author">
              <router-link
                class="menu__link icons__link recipe-details__header__author__link"
                :to="{
                  name: 'userDetails',
                  params: {
                    id: parseInt('firstRecipe.Author'),
                  },
                }"
                >İrem Bulut
              </router-link>
            </h3>
            <p class="comment-card__content__comment">
              Absolutely great recipe. I cooked it for my kids and they loved
              it, even asked for more, can you believe it?
            </p>
            <ul class="comment-card__content__rating">
              <star-rating
                class="rating-display"
                v-model:rating="rating"
                :read-only="true"
                :round-start-rating="false"
                v-bind="starRatingOptions"
              ></star-rating>
            </ul>
          </div>
        </div>
      </li>
      <li class="recipe-details__reviews__comments__card">
        <div class="comment-card">
          <img class="comment-card__icon" src="@/assets/user.png" alt="user" />
          <div class="comment-card__content">
            <h3 class="comment-card__content__author">
              <router-link
                class="menu__link icons__link recipe-details__header__author__link"
                :to="{
                  name: 'userDetails',
                  params: {
                    id: parseInt('firstRecipe.Author'),
                  },
                }"
                >İrem Bulut
              </router-link>
            </h3>
            <p class="comment-card__content__comment">
              Absolutely great recipe. I cooked it for my kids and they loved
              it, even asked for more, can you believe it?
            </p>
            <ul class="comment-card__content__rating">
              <star-rating
                class="rating-display"
                v-model:rating="rating"
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
</template>
<script>
import StarRating from "vue-star-rating";
export default {
  name: "DetailsComments",
  components: { StarRating },
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
          &__icon {
            width: 16%;
          }
          &__content {
            border-radius: 50%;
            margin-left: 3rem;
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
    }
  }
}
</style>
