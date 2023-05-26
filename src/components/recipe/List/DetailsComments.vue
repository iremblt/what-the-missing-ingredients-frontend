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
              <p
                v-if="
                  review.Comments !== '0' && editReviewId !== review.ReviewID
                "
                class="comment-card__content__comment"
              >
                {{ review.Comments }}
              </p>
              <input
                v-if="isEdit && editReviewId === review.ReviewID"
                :placeholder="review.Comments"
                type="text"
                v-model="comment"
                class="recipe-add-form__input"
              />
              <div
                v-if="
                  isAuthenticated && getCurrentProfileId === review.profileID
                "
                class="comment-card__content__edit"
              >
                <button
                  class="comment-card__content__edit__buttons"
                  @click="
                    editComment(review.ReviewID, review.Comments, review.Rate)
                  "
                >
                  <i
                    class="fa-solid fa-pen-to-square comment-card__content__edit__buttons__icons"
                  ></i>
                </button>
                <button
                  class="comment-card__content__edit__buttons"
                  @click="deleteComment(review.ReviewID)"
                >
                  <i
                    class="fa-solid fa-trash comment-card__content__edit__buttons__icons"
                  ></i>
                </button>
              </div>
              <ul
                v-if="editReviewId !== review.ReviewID"
                class="comment-card__content__rating"
              >
                <star-rating
                  class="rating-display"
                  v-model:rating="review.Rate"
                  :read-only="true"
                  :round-start-rating="false"
                  v-bind="starRatingOptions"
                ></star-rating>
              </ul>
              <ul
                v-if="isEdit && editReviewId === review.ReviewID"
                class="comment-card__content__rating"
              >
                <star-rating
                  class="rating-display"
                  v-model:rating="reviewRating"
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
import { deleteReview, editReview } from "@/utils/review";
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
      isEdit: false,
      comment: null,
      reviewRating: 0,
      editReviewId: null,
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
    isAuthenticated() {
      return this.$store.getters._isAuthenticated;
    },
    getCurrentProfileId() {
      return this.$store.getters._getCurrentUser?.profileID;
    },
  },
  methods: {
    deleteComment(id) {
      deleteReview(id)
        .then(() => {
          this.$store.commit("setNewCommentAdded", "delete");
        })
        .catch((error) => console.error(error));
    },
    editComment(id, comment, rating) {
      if (this.editReviewId === id) {
        const data = {
          RecipeID: this.$route.params.id,
          profileID: this.getCurrentProfileId,
          Comments: this.comment,
          Rate: this.reviewRating,
        };
        editReview(id, data)
          .then((response) => {
            console.log(response?.data);
            this.$store.commit("setNewCommentAdded", "edit");
            this.isEdit = false;
            this.editReviewId = null;
          })
          .catch((error) => console.error(error));
      } else {
        this.isEdit = true;
        this.editReviewId = id;
        this.comment = comment;
        this.reviewRating = rating;
      }
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
            &__edit {
              position: absolute;
              right: 0;
              &__buttons {
                border: unset;
                background: transparent;
                &__icons {
                  height: 18px;
                  color: #556080;
                }
              }
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
