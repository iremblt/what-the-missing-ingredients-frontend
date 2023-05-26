<template>
  <div>
    <div v-if="userRecipes.total > 0" class="user_recipes">
      <h2 class="user_recipes__total">{{ userRecipes.total }} RECIPES</h2>
      <div class="wrapper">
        <div
          v-for="(recipe, index) in userRecipes.total_recipes"
          :key="index"
          class="user_recipes__card"
        >
          <figure>
            <router-link
              class="image-link"
              :to="{
                name: 'recipeDetail',
                params: { id: recipe.RecipeID },
              }"
            >
              <img
                class="user_recipes__card__image"
                :src="recipe.Recipe_Photo"
                :alt="recipe.Recipe_Name"
              />
            </router-link>
          </figure>
          <div class="user_recipes__card__content">
            <h3 class="user_recipes__card__content__title">
              <router-link
                class="menu__link"
                :to="{
                  name: 'recipeDetail',
                  params: { id: recipe.RecipeID },
                }"
                >{{ recipe.Recipe_Name }}</router-link
              >
            </h3>
            <ul class="user_recipes__card__content__ratings">
              <li class="user_recipes__card__content__ratings__details">
                <star-rating
                  class="rating-box"
                  :rating="recipe.RatingAvg"
                  :read-only="true"
                  :round-start-rating="false"
                  v-bind="starRatingOptions"
                ></star-rating>
              </li>
            </ul>
            <ul class="user_recipes__card__content__edits">
              <li>
                <div
                  v-if="
                    isAuthenticated &&
                    getCurrentProfileId === userDetail.user.profileID
                  "
                  class="user_recipes__card__content__edits"
                >
                  <div
                    class="user_recipes__card__content__edits__buttons"
                    @click="$router.push(`/recipe/edit/${recipe.RecipeID}`)"
                  >
                    <i
                      class="user_recipes__card__content__edits__buttons__icons fa-solid fa-pen-to-square"
                    ></i
                    >Edit
                  </div>
                  <div
                    class="user_recipes__card__content__edits__buttons"
                    @click="deletRecipeConfirm(recipe.RecipeID)"
                  >
                    <i
                      class="user_recipes__card__content__edits__buttons__icons fa-solid fa-trash"
                    ></i
                    >Delete
                  </div>
                </div>
              </li>
            </ul>
            <p class="user_recipes__card__content__directions">
              {{ recipe.Directions.split("**").slice(0, 2).toString() }}
            </p>
            <ul class="user_recipes__card__content__more">
              <li class="user_recipes__card__content__more__details">
                <i
                  class="user_recipes__card__content__more__details__icons fa fa-solid fa-clock"
                />
                {{ recipe.Total_Time }}
              </li>
              <li class="user_recipes__card__content__more__details">
                <i
                  class="user_recipes__card__content__more__details__icons fa fa-regular fa-user"
                />
                {{ userDetail.user.name }}
              </li>
              <li class="user_recipes__card__content__more__details">
                <i
                  class="user_recipes__card__content__more__details__icons fa-solid fa-star icon"
                />
                {{ recipe.Review_Count }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="user_recipes">
      <h2 class="user_recipes__total">This user has not any recipe yet :(</h2>
    </div>
    <div class="pagination user_recipes__pagination">
      <vue-awesome-paginate
        :total-items="recipeTotalPage"
        :items-per-page="8"
        :max-pages-shown="5"
        v-model="currentPage"
        :on-click="onClickHandler"
      />
    </div>
  </div>
</template>
<script>
import { deleteRecipe } from "@/utils/recipe";
import StarRating from "vue-star-rating";
export default {
  name: "UserRecipes",
  components: { StarRating },
  props: {
    userRecipes: {
      type: Object,
      default: () => {},
    },
    userDetail: {
      type: Object,
      default: () => {},
    },
    recipeTotalPage: {
      type: Number,
      default: 0,
    },
    recipeActivePage: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      currentPage: this.recipeActivePage,
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
    deletRecipeConfirm(id) {
      this.$swal({
        title: "Are you sure?",
        text: "Are you sure want to delete this recipe!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#6f8244",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.value) {
          deleteRecipe(id)
            .then(() => {
              this.$swal(
                "Deleted!",
                "Your recipe has been deleted.",
                "success"
              );
              this.$emit("refreshRecipe", true);
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
  },
};
</script>
<style lang="scss">
.user_recipes {
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
      &__edits {
        list-style: none;
        display: flex;
        margin-right: 1rem;
        justify-content: center;
        &__buttons {
          font-size: 14px;
          margin-left: 1rem;
          cursor: pointer;
          font-weight: 600;
          &__icons {
            color: #f94616;
            margin-right: 4px;
          }
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
