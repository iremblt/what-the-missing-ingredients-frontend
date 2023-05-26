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
              <DetailsHeader :recipeDetail="recipeDetail" />
              <div class="recipe-details__thumbnail">
                <img
                  class="recipe-details__thumbnail__image"
                  :src="recipeDetail.Recipe_Photo"
                  :alt="recipeDetail.Recipe_Name"
                />
              </div>
              <DetailsTimes :recipeDetail="recipeDetail" />
              <DetailsDirections :recipeDetail="recipeDetail" />
              <DetailsReviews
                :recipeDetail="recipeDetail"
                :recipeReviews="recipeReviews"
                :reviewTotalPage="reviewTotalPage"
                :reviewActivePage="PageSize"
                @pageChanged="pageChanged($event)"
              />
              <AddComment @submittedComment="submittedComment($event)" />
            </div>
          </div>
          <div class="col-md-4 col-lg-3">
            <SideBar :most-popular="getMostPopularRecipes" />
          </div>
        </div>
      </div>
    </div>
    <Modal
      v-show="visible"
      :type="modalType"
      @close="close"
      @changeModal="changeModal"
    >
    </Modal>
    <LoginRegisterModal
      v-show="visibleLogin"
      :type="loginModalType"
      @close="closeLogin"
      @submittedModal="submitLogin"
    >
    </LoginRegisterModal>
  </div>
</template>
<script>
import BannerPage from "@/components/common/Banner.vue";
import LoadingPage from "@/components/common/Loading.vue";
import SideBar from "@/components/common/SideBar.vue";
import Modal from "@/components/common/Modal.vue";
import LoginRegisterModal from "@/components/user/LoginRegisterModal.vue";
import { login, register } from "@/utils/user";
import {
  getRecipeDetail,
  getMostPopularRecipeListWithPagination,
  reviewCountEditRecipe,
} from "@/utils/recipe";
import {
  getRecipeReviews,
  getRecipeReviewsWithPagination,
  addReview,
} from "@/utils/review";
import DetailsHeader from "./DetailsHeader.vue";
import DetailsTimes from "./DetailsTimes.vue";
import DetailsDirections from "./DetailsDirections.vue";
import DetailsReviews from "./DetailsReviews.vue";
import AddComment from "./AddComment.vue";

export default {
  name: "RecipeDetails",
  components: {
    BannerPage,
    LoadingPage,
    SideBar,
    DetailsHeader,
    DetailsTimes,
    DetailsDirections,
    DetailsReviews,
    AddComment,
    Modal,
    LoginRegisterModal,
  },
  data() {
    return {
      isLoading: false,
      recipeDetail: {},
      recipeReviews: [],
      PageSize: 1,
      PageNumberPerPage: 10,
      reviewTotalPage: 0,
      modalType: "successfull",
      visible: false,
      visibleLogin: false,
      loginModalType: "Login",
    };
  },
  async created() {
    await this.getRecipe(this.$route.params.id);
    this.isLoading = false;
    await this.getAllRecipesReviews(this.$route.params.id);
    await this.getRecipesReviews(this.$route.params.id);
    if (this.getMostPopularRecipes.length === 0) {
      this.isLoading = true;
      await this.getPopularRecipeList();
    }
  },
  computed: {
    getMostPopularRecipes() {
      return this.$store.getters._getPopularRecipeList
        ? this.$store.getters._getPopularRecipeList
        : [];
    },
    isNewCommentAdded() {
      return this.$store.getters._getIsNewCommentAdded;
    },
    isAuthenticated() {
      return this.$store.getters._isAuthenticated;
    },
    getCurrentProfileId() {
      return this.$store.getters._getCurrentUser?.profileID;
    },
  },
  watch: {
    isNewCommentAdded: function (value) {
      if (value === true || value === "delete") {
        this.isLoading = true;
        this.addReviewCount();
        this.getRecipesReviews(this.$route.params.id);
        this.$store.commit("setNewCommentAdded", false);
      }
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
    async getAllRecipesReviews(id) {
      await getRecipeReviews(id)
        .then((response) => {
          this.reviewTotalPage = response.data?.length;
          this.isLoading = false;
        })
        .catch((error) => console.error(error));
    },
    async getRecipesReviews(id) {
      await getRecipeReviewsWithPagination(id, {
        PageSize: this.PageSize,
        PageNumberPerPage: this.PageNumberPerPage,
      })
        .then((response) => {
          this.recipeReviews = response.data || [];
          this.isLoading = false;
        })
        .catch((error) => console.error(error));
    },
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
    async pageChanged(page) {
      console.log(page);
      this.PageSize = page;
      this.isLoading = true;
      await this.getRecipesReviews(this.$route.params.id);
    },
    submittedComment(review) {
      if (this.isAuthenticated) {
        addReview(review)
          .then((response) => {
            console.log(response?.data);
            this.modalType = "successfull";
            this.$store.commit("setNewCommentAdded", true);
          })
          .catch((error) => console.error(error));
      } else {
        this.modalType = "fail";
      }
      this.visible = true;
    },
    close() {
      this.visible = false;
      if (this.modalType === "successfull") {
        this.$router.push({
          name: "recipeDetail",
          params: { id: this.$route.params.id },
        });
      }
    },
    closeLogin() {
      this.visibleLogin = false;
    },
    changeModal() {
      this.visibleLogin = true;
    },
    submitLogin(data) {
      if (data.Gender) {
        const user = data;
        register(user)
          .then((response) => {
            console.log(response?.data);
            this.loginModalType = "Login";
            this.visibleLogin = true;
          })
          .catch((error) => console.error(error));
      } else {
        const user = {
          email: data.email,
          password: data.password,
        };
        login(user)
          .then((response) => {
            this.$store.commit("setUser", response?.data);
          })
          .catch((error) => console.error(error));
      }
    },
    addReviewCount() {
      if (this.isNewCommentAdded === true) {
        const count = this.recipeDetail.Review_Count
          ? parseInt(this.recipeDetail.Review_Count) + 1
          : 1;
        reviewCountEditRecipe(this.$route.params.id, { count: count })
          .then((response) => {
            console.log(response?.data);
          })
          .catch((error) => console.error(error));
      } else if (this.isNewCommentAdded === "delete") {
        const count = this.recipeDetail.Review_Count
          ? parseInt(this.recipeDetail.Review_Count) - 1
          : 1;
        reviewCountEditRecipe(this.$route.params.id, { count: count })
          .then((response) => {
            console.log(response?.data);
          })
          .catch((error) => console.error(error));
      }
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
        &__thumbnail {
          &__image {
            width: 80%;
            padding-left: 2rem;
            height: auto;
          }
        }
      }
    }
  }
}
</style>
