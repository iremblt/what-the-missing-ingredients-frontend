<template>
  <div class="user-edit">
    <BannerPage
      title="User Edit Page"
      background-image-type="user-detail-banner"
    />
    <LoadingPage v-if="isLoading" />
    <div v-else class="user-edit__page">
      <div class="user-edit__page__container">
        <div class="row">
          <div class="col-lg-8 col-md-6">
            <h2 class="user-edit__page__container__header">
              Edit Your Account
            </h2>
            <UserEditForm
              :user-detail="userDetail"
              :passwordIsNotSame="passwordIsNotSame"
              @editUser="editUserInformation"
              @editPassword="editUserPassword"
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
import UserEditForm from "./EditForm.vue";
import { changePassword, editUser, getUserDetail } from "@/utils/user";
import { getMostPopularRecipeListWithPagination } from "@/utils/recipe";
export default {
  name: "UserEdit",
  components: {
    BannerPage,
    SideBar,
    LoadingPage,
    UserEditForm,
  },
  data() {
    return {
      isLoading: false,
      userDetail: {},
      passwordIsNotSame: false,
    };
  },
  async created() {
    this.isLoading = true;
    await this.getUserDetails(this.$route.params.id);
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
    editUserInformation(user) {
      user.MaritalStatus = "";
      editUser(this.$route.params.id, user)
        .then((response) => {
          console.log(response?.data);
        })
        .catch((error) => console.error(error));
    },
    editUserPassword(passwords) {
      console.log(passwords);
      changePassword(this.$route.params.id, {
        newPassword: passwords.newPassword,
        currentWritedPassword: passwords.currentWritedPassword,
        currentPassword: passwords.currentPassword,
      })
        .then((response) => {
          console.log(response?.data);
          this.passwordIsNotSame = false;
        })
        .catch((error) => {
          console.log(error);
          this.passwordIsNotSame = true;
        });
    },
  },
};
</script>
<style lang="scss">
.user-edit {
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
      &__header {
        font-family: "Lora", serif;
        font-weight: bold;
        margin-bottom: 30px;
        font-size: 22px;
      }
    }
  }
}
</style>
