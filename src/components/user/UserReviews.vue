<template>
  <div>
    <div v-if="userReviews.total > 0" class="user_reviews">
      <h2 class="user_reviews__total">{{ userReviews.total }} REVİEWS</h2>
      <div class="wrapper">
        <div
          v-for="(review, index) in userReviews.reviews"
          :key="index"
          class="user_reviews__card"
        >
          <figure>
            <router-link
              class="image-link"
              :to="{
                name: 'recipeDetail',
                params: { id: review.RecipeID },
              }"
            >
              <img
                class="user_reviews__card__image"
                :src="userReviews.recipes_detail[index].Recipe_Photo"
                :alt="userReviews.recipes_detail[index].Recipe_Name"
              />
            </router-link>
          </figure>
          <div class="user_reviews__card__content">
            <h3 class="user_reviews__card__content__title">
              <router-link
                class="menu__link"
                :to="{
                  name: 'recipeDetail',
                  params: { id: review.RecipeID },
                }"
                >{{
                  userReviews.recipes_detail[index].Recipe_Name
                }}</router-link
              >
            </h3>
            <ul class="user_reviews__card__content__ratings">
              <li class="user_reviews__card__content__ratings__details">
                <star-rating
                  v-if="!isEditComment && editReviewId !== review.ReviewID"
                  class="rating-box"
                  :rating="review.Rate"
                  :read-only="true"
                  :round-start-rating="false"
                  v-bind="starRatingOptions"
                ></star-rating>
                <star-rating
                  v-else
                  class="rating-box"
                  v-model:rating="reviewRating"
                  :round-start-rating="false"
                  v-bind="starRatingOptions"
                ></star-rating>
              </li>
            </ul>
            <ul class="user_recipes__card__content__edits">
              <li>
                <div
                  v-if="
                    isAuthenticated && getCurrentProfileId === review.profileID
                  "
                  class="user_recipes__card__content__edits"
                >
                  <div
                    class="user_recipes__card__content__edits__buttons"
                    @click="
                      editComment(
                        review.ReviewID,
                        review.Comments,
                        review.Rate,
                        review.RecipeID
                      )
                    "
                  >
                    <i
                      class="user_recipes__card__content__edits__buttons__icons fa-solid fa-pen-to-square"
                    ></i
                    >Edit
                  </div>
                  <div
                    class="user_recipes__card__content__edits__buttons"
                    @click="deleteReviewConfirm(review.ReviewID)"
                  >
                    <i
                      class="user_recipes__card__content__edits__buttons__icons fa-solid fa-trash"
                    ></i
                    >Delete
                  </div>
                </div>
              </li>
            </ul>
            <p
              v-if="!isEditComment && editReviewId !== review.ReviewID"
              class="user_reviews__card__content__directions"
            >
              {{ review.Comments }}
            </p>
            <textarea
              v-else
              class="recipe-details__commentAdd__comment__area__text"
              :placeholder="review.Comments"
              rows="4"
              cols="50"
              v-model="comment"
            />
          </div>
        </div>
      </div>
    </div>
    <div v-else class="user_reviews">
      <h2 class="user_reviews__total">This user has not any review yet :(</h2>
    </div>
    <div class="pagination user_reviews__pagination">
      <vue-awesome-paginate
        :total-items="reviewTotalPage"
        :items-per-page="8"
        :max-pages-shown="5"
        v-model="currentPage"
        :on-click="onClickHandler"
      />
    </div>
  </div>
</template>
<script>
import { deleteReview, editReview } from "@/utils/review";
import StarRating from "vue-star-rating";
export default {
  name: "UserReviews",
  components: { StarRating },
  props: {
    userReviews: {
      type: Object,
      default: () => {},
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
      isEditComment: false,
      editReviewId: null,
      reviewRating: 0,
      comment: null,
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
    onClickHandler(page) {
      this.$emit("pageChanged", page);
    },
    deleteReviewConfirm(id) {
      this.$swal({
        title: "Are you sure?",
        text: "Are you sure want to delete your comment!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#6f8244",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.value) {
          deleteReview(id)
            .then(() => {
              this.$swal(
                "Deleted!",
                "Your comment has been deleted.",
                "success"
              );
              this.$emit("refreshReview", true);
            })
            .catch(() =>
              this.$swal(
                "Something wrong!",
                "Something going wrong please try again!",
                "error"
              )
            );
        }
      });
    },
    editComment(id, comment, rating, recipeId) {
      if (this.editReviewId === id) {
        const data = {
          RecipeID: recipeId,
          profileID: this.getCurrentProfileId,
          Comments: this.comment,
          Rate: this.reviewRating,
        };
        editReview(id, data)
          .then((response) => {
            console.log(response?.data);
            this.isEdit = false;
            this.editReviewId = null;
            this.comment = "";
            this.reviewRating = 0;
            this.$emit("refreshReview", true);
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
.user_reviews {
  &__total {
    margin-bottom: 0;
    font-size: 22px;
    font-weight: bold;
    border-bottom: 1px solid #d7d7d7;
  }
  .wrapper {
    display: grid;
    grid-template-columns: 373px 373px;
    column-gap: 1rem;
    margin-top: 2rem;
  }
  &__card {
    margin-bottom: 3rem;
    background: #ffff;
    &__image {
      width: 373px;
      height: 373px;
    }
    &__content {
      text-align: center;
      padding: 5px 30px 16px;
      &__title {
        font-size: 18px;
      }
      &__ratings {
        &__details {
          display: inline-block;
          margin-right: 10px;
          margin-bottom: 5px;
        }
      }
      &__directions {
        font-size: 14px;
      }
      &__more {
        font-size: 14px;
        list-style: none;
        &__details {
          display: inline-block;
          margin-right: 10px;
          margin-bottom: 5px;
          &__icons {
            margin-right: 1px;
            color: #f94616;
            font-size: 14px;
          }
        }
      }
    }
  }
  &__pagination {
    justify-content: center;
  }
}
</style>
