<template>
  <div class="recipe-details__times">
    <ul>
      <li>
        <div class="recipe-details__recipe-times">
          <div class="recipe-details__recipe-times__time">
            <div class="recipe-details__recipe-times__time__icon">
              <i
                class="recipe-add-form__times__icon fa-regular fa-clock icon"
              ></i>
            </div>
            <div class="recipe-details__recipe-times__time__text">
              <h3 class="recipe-details__recipe-times__time__text__header">
                Prepare Time
              </h3>
              <p class="recipe-details__recipe-times__time__text__sub">
                {{ recipeDetail.Prepare_Time }}
              </p>
            </div>
          </div>
        </div>
      </li>
      <li>
        <div class="recipe-details__recipe-times">
          <div class="recipe-details__recipe-times__time">
            <div class="recipe-details__recipe-times__time__icon">
              <i
                class="recipe-add-form__times__icon fa-solid fa-utensils icon"
              ></i>
            </div>
            <div class="recipe-details__recipe-times__time__text">
              <h3 class="recipe-details__recipe-times__time__text__header">
                Cook Time
              </h3>
              <p class="recipe-details__recipe-times__time__text__sub">
                {{ recipeDetail.Cook_Time }}
              </p>
            </div>
          </div>
        </div>
      </li>
      <li>
        <div class="recipe-details__recipe-times">
          <div class="recipe-details__recipe-times__time">
            <div class="recipe-details__recipe-times__time__icon">
              <i
                class="recipe-add-form__times__icon fa-solid fa-bowl-rice icon"
              ></i>
            </div>
            <div class="recipe-details__recipe-times__time__text">
              <h3 class="recipe-details__recipe-times__time__text__header">
                Total Time
              </h3>
              <p class="recipe-details__recipe-times__time__text__sub">
                {{ recipeDetail.Total_Time }}
              </p>
            </div>
          </div>
        </div>
      </li>
      <li>
        <div class="recipe-details__recipe-times">
          <div class="recipe-details__recipe-times__time">
            <div class="recipe-details__recipe-times__time__icon">
              <i class="recipe-add-form__times__icon fa-solid fa-star icon"></i>
            </div>
            <div class="recipe-details__recipe-times__time__text">
              <h3 class="recipe-details__recipe-times__time__text__header">
                Review Count
              </h3>
              <p class="recipe-details__recipe-times__time__text__sub">
                {{ recipeDetail.Review_Count }}
              </p>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "DetailsTime",
  props: {
    recipeDetail: {
      type: Object,
      default: () => {},
    },
  },
};
</script>
<style lang="scss">
.recipe-details {
  &__times {
    ul {
      display: flex;
      flex-wrap: wrap;
      li {
        list-style: none;
        margin-right: 1rem;
      }
    }
  }
  &__recipe-times {
    background-color: #d5f19f;
    &__time {
      padding: 10px 12px;
      display: flex;
      align-items: center;
      &__icon {
        .icon {
          font-size: 30px;
          color: #fcfcfc;
        }
      }
      &__text {
        margin-left: 12px;
        &__header {
          font-size: 15px;
          color: #fcfcfc;
        }
        &__sub {
          color: #5d6260;
          font-size: 10px;
          margin-left: 1rem;
        }
      }
    }
  }
}
</style>
