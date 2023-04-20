<template>
  <div class="recipe-details-page">
    <BannerPage
      title="Recipe Detail Page"
      background-image-type="recipe-detail"
    />
    <div v-if="isLoading"><LoadingPage /></div>
    <div class="recipe-details-page__detail">
      <div class="recipe-details-page__detail__container">
        <div class="row">
          <div class="col-md-8 col-lg-9">
            <div class="recipe-details">
              <div class="recipe-details__header">
                <h2 class="recipe-details__header__title">
                  recipeDetail.Recipe_Name
                </h2>
                <div class="recipe-details__header__author">
                  <i
                    class="recipe-details__header__author__icon fa fa-regular fa-user"
                  />
                  <router-link
                    class="menu__link icons__link recipe-details__header__author__link"
                    :to="{
                      name: 'userDetails',
                      params: { id: parseInt('firstRecipe.Author') },
                    }"
                    ><span class="by">by</span> firstRecipe.Author
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
              <div class="recipe-details__thumbnail">
                <img
                  class="recipe-details__thumbnail__image"
                  src="@/assets/recipes-banner.jpg"
                  alt="test"
                />
              </div>
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
                          <h3
                            class="recipe-details__recipe-times__time__text__header"
                          >
                            Prepare Time
                          </h3>
                          <p
                            class="recipe-details__recipe-times__time__text__sub"
                          >
                            5m
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
                          <h3
                            class="recipe-details__recipe-times__time__text__header"
                          >
                            Cook Time
                          </h3>
                          <p
                            class="recipe-details__recipe-times__time__text__sub"
                          >
                            5m
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
                          <h3
                            class="recipe-details__recipe-times__time__text__header"
                          >
                            Total Time
                          </h3>
                          <p
                            class="recipe-details__recipe-times__time__text__sub"
                          >
                            5m
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
                            class="recipe-add-form__times__icon fa-solid fa-star icon"
                          ></i>
                        </div>
                        <div class="recipe-details__recipe-times__time__text">
                          <h3
                            class="recipe-details__recipe-times__time__text__header"
                          >
                            Rates Count
                          </h3>
                          <p
                            class="recipe-details__recipe-times__time__text__sub"
                          >
                            1k
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="recipe-details__direction-area">
                <p class="recipe-details__direction-area__direction">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Excepturi voluptatum iusto numquam qui voluptates iste fugiat
                  fuga praesentium amet, officia illum temporibus saepe placeat
                  impedit velit ea unde magnam neque. Lorem, ipsum dolor sit
                  amet consectetur adipisicing elit. Excepturi voluptatum iusto
                  numquam qui voluptates iste fugiat fuga praesentium amet,
                  officia illum temporibus saepe placeat impedit velit ea unde
                  magnam neque.
                </p>
                <div class="recipe-details__direction-area__steps">
                  <div
                    class="recipe-details__direction-area__steps__photo"
                  ></div>
                  <div class="recipe-details__direction-area__steps__text">
                    <div
                      class="recipe-details__direction-area__steps__text__number"
                    ></div>
                    <p
                      class="recipe-details__direction-area__steps__text__content"
                    ></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-lg-3"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BannerPage from "@/components/common/Banner.vue";
import LoadingPage from "@/components/common/Loading.vue";
import StarRating from "vue-star-rating";
import { getRecipeDetail } from "@/utils/recipe";
import { getRecipeReviews } from "@/utils/review";
export default {
  name: "RecipeDetails",
  components: {
    BannerPage,
    LoadingPage,
    StarRating,
  },
  data() {
    return {
      isLoading: false,
      recipeDetail: {},
      recipeReviews: [],
      rating: 4.7,
    };
  },
  async created() {
    await this.getRecipe(this.$route.params.id);
    this.isLoading = false;
    await this.getRecipesReviews(this.$route.params.id);
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
    async getRecipe(id) {
      await getRecipeDetail(id)
        .then((response) => {
          this.recipeDetail = response.data || [];
          this.isLoading = false;
        })
        .catch((error) => console.error(error));
    },
    async getRecipesReviews(id) {
      await getRecipeReviews(id)
        .then((response) => {
          this.recipeReviews = response.data || [];
          this.isLoading = false;
        })
        .catch((error) => console.error(error));
    },
  },
};
</script>
<style lang="scss">
.recipe-details-page {
  &__detail {
    background: #f5f5f5;
    padding-top: 42px;
    padding-bottom: 85px;
    &__container {
      max-width: 1170px !important;
      margin-right: auto;
      margin-left: auto;
      padding-left: 15px;
      padding-right: 15px;
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
        &__thumbnail {
          &__image {
            width: 80%;
            padding-left: 2rem;
            height: auto;
          }
        }
        &__times {
          margin-bottom: 40px;
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
            padding: 10px 20px;
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
        &__direction-area {
          margin-bottom: 60px;
          overflow: hidden;
          background: #fcfcfc;
          padding: 25px;
          margin-left: 2rem;
          width: 80%;
          &__direction {
            font-size: 15px;
            line-height: 25px;
          }
          &__steps {
            &__photo {
            }
            &__text {
              &__number {
              }
              &__content {
              }
            }
          }
        }
      }
    }
  }
}
</style>
