<template>
  <div class="user-details">
    <BannerPage
      title="User Detail Page"
      background-image-type="user-detail-banner"
    />
    <LoadingPage v-if="isLoading" />
    <div v-else class="user-details__page">
      <div class="user-details__page__container">
        <div class="row">
          <div class="col-lg-8 col-md-6">
            <UserAbout :user-detail="userDetail" />
            <div class="user-details__page__container__buttons">
              <button
                class="user-details__page__container__buttons__options"
                @click="changeButtonType('recipe')"
              >
                Recipes
              </button>
              <button
                class="user-details__page__container__buttons__options"
                @click="changeButtonType('review')"
              >
                Reviews
              </button>
            </div>
            <UserRecipes
              v-if="buttonsType === 'recipe'"
              :user-recipes="userRecipes"
              :user-detail="userDetail"
              :recipeTotalPage="recipeTotalPage"
              :recipeActivePage="recipePageSize"
              @refreshRecipe="refreshRecipe"
              @pageChanged="recipePageChanged($event)"
            />
            <UserReviews
              v-else
              :user-reviews="userReviews"
              :reviewTotalPage="reviewTotalPage"
              :reviewActivePage="reviewPageSize"
              @refreshReview="refreshReview"
              @pageChanged="reviewPageChanged($event)"
            />
          </div>
          <div class="col-lg-4 col-md-2">
            <SideBar :most-popular="getMostPopularRecipes" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BannerPage from "@/components/common/Banner.vue";
import SideBar from "@/components/common/SideBar.vue";
import LoadingPage from "@/components/common/Loading.vue";
import UserAbout from "./About.vue";
import UserRecipes from "./UserRecipes.vue";
import UserReviews from "./UserReviews.vue";

import { getMostPopularRecipeListWithPagination } from "@/utils/recipe";
import { getUserDetail, getUserRecipeDetail } from "@/utils/user";
import { getUserReviews } from "@/utils/review";
export default {
  name: "UserDetail",
  components: {
    BannerPage,
    SideBar,
    LoadingPage,
    UserAbout,
    UserRecipes,
    UserReviews,
  },
  data() {
    return {
      isLoading: false,
      userDetail: {},
      userRecipes: [],
      userReviews: [],
      PageNumberPerPage: 8,
      recipeTotalPage: 0,
      recipePageSize: 1,
      reviewTotalPage: 0,
      reviewPageSize: 1,
      buttonsType: "recipe",
    };
  },
  async created() {
    if (this.getMostPopularRecipes.length === 0) {
      this.isLoading = true;
      await this.getPopularRecipeList();
    }
    this.isLoading = true;
    await this.getUserDetails(this.$route.params.id);
    this.isLoading = true;
    await this.getUserRecipes(this.$route.params.id);
    this.isLoading = true;
    await this.getUserReview(this.$route.params.id);
  },
  computed: {
    getMostPopularRecipes() {
      return this.$store.getters._getPopularRecipeList
        ? this.$store.getters._getPopularRecipeList
        : [];
    },
  },
  methods: {
    async getPopularRecipeList() {
      return await getMostPopularRecipeListWithPagination({
        PageSize: 1,
        PageNumberPerPage: 5,
      })
        .then((response) => {
          this.$store.commit("setPopularRecipeList", response?.data);
          this.isLoading = false;
        })
        .catch((error) => console.error(error));
    },
    async getUserDetails(id) {
      return await getUserDetail(id)
        .then((response) => {
          this.userDetail = response.data || {};
          this.isLoading = false;
        })
        .catch((error) => console.error(error));
    },
    async getUserRecipes(id) {
      return await getUserRecipeDetail(id, {
        PageSize: this.recipePageSize,
        PageNumberPerPage: this.PageNumberPerPage,
      })
        .then((response) => {
          this.userRecipes = response.data || {};
          this.recipeTotalPage = response.data.total;
          this.isLoading = false;
        })
        .catch((error) => console.error(error));
    },
    async getUserReview(id) {
      return await getUserReviews(id, {
        PageSize: this.reviewPageSize,
        PageNumberPerPage: this.PageNumberPerPage,
      })
        .then((response) => {
          this.userReviews = response.data || [];
          this.reviewTotalPage = response.data?.total;
          this.isLoading = false;
        })
        .catch((error) => console.error(error));
    },
    async recipePageChanged(page) {
      this.recipePageSize = page;
      this.isLoading = true;
      await this.getUserRecipes(this.$route.params.id);
    },
    async reviewPageChanged(page) {
      this.reviewPageSize = page;
      this.isLoading = true;
      await this.getUserReview(this.$route.params.id);
    },
    changeButtonType(type) {
      this.buttonsType = type;
    },
    async refreshRecipe(type) {
      if (type) {
        await this.getUserRecipes(this.$route.params.id);
      }
    },
    async refreshReview(type) {
      if (type) {
        await this.getUserReview(this.$route.params.id);
      }
    },
  },
};
</script>
<style lang="scss">
.user-details {
  &__page {
    background: #f5f5f5;
    padding-top: 42px;
    padding-bottom: 85px;
    &__container {
      max-width: 1170px !important;
      margin-right: auto;
      margin-left: auto;
      padding-left: 15px;
      padding-right: 15px;
      &__buttons {
        display: flex;
        font-size: 18px;
        color: #ffff;
        justify-content: flex-end;
        &__options {
          border: 1px solid white;
          background-color: #b9d971;
          border-radius: 10%;
        }
      }
    }
  }
}
</style>
