<template>
  <div class="recipe-details__direction-area">
    <h3 class="recipe-details__direction-area__header">Directions</h3>
    <div v-if="recipeDetail.Directions">
      <div v-for="(step, index) in directions" :key="index">
        <div v-if="step !== ''" class="recipe-details__direction-area__steps">
          <div class="recipe-details__direction-area__steps__photo">
            <div v-if="index + 1 <= 5">
              <img
                class="recipe-details__direction-area__steps__photo__image"
                :src="require(`@/assets/steps/step${index + 1}.jpg`)"
                :alt="index + 1"
              />
            </div>
            <div v-else>
              <img
                class="recipe-details__direction-area__steps__photo__image"
                :src="require(`@/assets/steps/step5.jpg`)"
                :alt="index + 1"
              />
            </div>
          </div>
          <div class="recipe-details__direction-area__steps__text">
            <div class="recipe-details__direction-area__steps__text__number">
              {{ index + 1 }} Step
            </div>
            <p class="recipe-details__direction-area__steps__text__content">
              {{ step }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <detailsIngredients />
  </div>
</template>
<script>
import DetailsIngredients from "./DetailsIngredients.vue";
export default {
  components: { DetailsIngredients },
  name: "DetailsDirections",
  props: {
    recipeDetail: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    directions() {
      return this.recipeDetail.Directions
        ? this.recipeDetail.Directions.split("**")
        : [];
    },
  },
};
</script>
<style lang="scss">
.recipe-details {
  &__direction-area {
    margin-bottom: 60px;
    overflow: hidden;
    background: #fcfcfc;
    padding: 25px;
    margin-left: 2rem;
    width: 80%;
    &__header {
      font-size: 18px;
      font-weight: bold;
      border-bottom: 1px solid #f94616;
      display: inline;
      margin-left: 2rem;
    }
    &__steps {
      margin-bottom: 40px;
      margin-top: 40px;
      display: flex;
      align-items: center;
      &__photo {
        width: 100%;
        &__image {
          width: 100%;
          border-radius: 50%;
        }
      }
      &__text {
        margin-left: 30px;
        width: 500px;
        &__number {
          background-color: #f94616;
          color: #fcfcfc;
          display: inline-block;
          padding: 8px 13px 5px;
          border-radius: 4px;
          font-weight: bold;
          font-size: 12px;
          margin-bottom: 15px;
        }
        &__content {
          font-size: 16px;
        }
      }
    }
  }
}
</style>
