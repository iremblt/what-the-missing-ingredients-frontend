<template>
  <div class="recipe-details__commentAdd">
    <h3 class="recipe-details__commentAdd__header">Leave A Comment</h3>
    <form @submit.prevent="submitComment">
      <div>
        <div class="recipe-details__commentAdd__rating">
          <div class="recipe-details__commentAdd__rating__label">Rating</div>
          <div class="recipe-details__commentAdd__rating__rate">
            <star-rating
              class="rating-display"
              v-model:rating="rating"
              :round-start-rating="false"
              v-bind="starRatingOptions"
            ></star-rating>
          </div>
        </div>
      </div>
      <div class="recipe-details__commentAdd__comment">
        <div class="recipe-details__commentAdd__comment__label">Comment</div>
        <div class="recipe-details__commentAdd__comment__area">
          <textarea
            class="recipe-details__commentAdd__comment__area__text"
            rows="4"
            cols="50"
            v-model="comment"
          />
        </div>
      </div>
      <div class="recipe-details__commentAdd__submit">
        <button
          class="recipe-details__commentAdd__submit__button"
          type="submit"
          @click="submitComment"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
</template>
<script>
import StarRating from "vue-star-rating";
export default {
  name: "AddComment",
  components: { StarRating },
  data() {
    return {
      rating: 0,
      comment: "",
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
    submitComment() {},
  },
};
</script>
<style lang="scss">
.recipe-details {
  &__commentAdd {
    padding: 25px;
    background-color: #fcfcfc;
    margin-bottom: 30px;
    margin-left: 2rem;
    width: 80%;
    &__header {
      font-size: 18px;
      font-weight: bold;
      border-bottom: 1px solid #f94616;
      display: inline;
      margin-left: 2rem;
    }
    &__rating {
      display: inline-flex;
      margin-top: 20px;
      margin-bottom: 20px;
      &__label {
        font-family: "Lato", sans-serif;
        margin-left: 2rem;
        margin-right: 2rem;
        font-size: 13px;
        color: #767474;
        font-weight: bold;
      }
    }
    &__comment {
      margin-bottom: 20px;
      &__label {
        font-family: "Lato", sans-serif;
        margin-left: 2rem;
        font-size: 13px;
        color: #767474;
        font-weight: bold;
      }
      &__area {
        margin-left: 2rem;
        &__text {
          width: 100%;
          font-size: 14px;
          border: 1px solid #e4d9d1;
        }
      }
    }
    &__submit {
      height: 40px;
      &__button {
        font-style: italic;
        font-size: 15px;
        background: #f94616;
        color: #ffffff;
        border: none;
        padding: 8px 18px;
        float: right;
      }
    }
  }
}
</style>
