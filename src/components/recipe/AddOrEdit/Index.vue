<template>
  <div>
    <BannerPage title="Add / Edit Recipe" background-image-type="add-banner" />
    <div class="recipes-add-page">
      <div class="recipes-add-page__container">
        <div>
          <div class="recipes-add-page__container__forms">
            <h2 class="recipe-add-header">Add Recipes</h2>
            <Form @submitRecipe="submitRecipe" />
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
import Form from "./Form.vue";
import Modal from "@/components/common/Modal.vue";
import LoginRegisterModal from "@/components/user/LoginRegisterModal.vue";
import { login, register } from "@/utils/user";
import { addRecipe } from "@/utils/recipe";
export default {
  name: "AddOrEditRecipe",
  components: { BannerPage, Form, Modal, LoginRegisterModal },
  data() {
    return {
      modalType: "successfull",
      visible: false,
      visibleLogin: false,
      loginModalType: "Login",
      recipeID: "",
    };
  },
  computed: {
    isAuthenticated() {
      return this.$store.getters._isAuthenticated;
    },
    getCurrentProfileId() {
      return this.$store.getters._getCurrentUser?.profileID;
    },
  },
  methods: {
    submitRecipe(data) {
      console.log(data);
      if (this.isAuthenticated) {
        const recipe = {
          RecipeName: data?.RecipeName,
          ReviewCount: "0",
          RecipePhoto: data?.RecipePhoto,
          Author: this.getCurrentProfileId.toString(),
          PrepareTime: data?.PrepareTime,
          CookTime: data?.CookTime,
          TotalTime: data?.TotalTime,
          Ingredients: data?.Ingredients,
          Directions: data?.Directions,
        };
        addRecipe(recipe)
          .then((response) => {
            console.log(response?.data);
            this.modalType = "successfull";
            this.recipeID = response?.data.RecipeID;
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
          name: "recipeEdit",
          params: { id: this.recipeID },
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
  },
};
</script>
<style lang="scss">
.recipes-add-page {
  padding-top: 42px;
  background: #f5f5f5;
  padding-bottom: 85px;
  &__container {
    max-width: 1170px !important;
    margin-right: auto;
    margin-left: auto;
    padding-left: 15px;
    padding-right: 15px;
    overflow: hidden;
    &__forms {
      overflow: hidden;
      .recipe-add-header {
        font-family: "Lora", serif;
        font-weight: bold;
        margin-bottom: 30px;
        font-size: 23px;
      }
    }
  }
}
</style>
