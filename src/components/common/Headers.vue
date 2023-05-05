<template>
  <header>
    <div class="header">
      <div class="container">
        <div class="row">
          <div class="col-md-5">
            <div class="left-header">
              <nav class="nav-left">
                <ul class="menu menu__left">
                  <li class="menu__element">
                    <router-link class="menu__link" to="/">Home</router-link>
                  </li>
                  <li class="menu__element">
                    <router-link class="menu__link" to="/recipe/list"
                      >Recipes
                    </router-link>
                  </li>
                  <li class="menu__element">
                    <router-link class="menu__link" to="/recipe/recomendation"
                      >Recommend Recipe</router-link
                    >
                  </li>
                  <li class="menu__element">
                    <router-link class="menu__link" to="/recipe/add"
                      >Add Recipe</router-link
                    >
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div class="col-md-2">
            <div class="logo">
              <router-link to="/" class="logo__link">
                <img class="logo__img" src="@/assets/Logo.png" />
              </router-link>
            </div>
          </div>
          <div class="col-md-5">
            <div class="left-header">
              <nav class="nav-left">
                <ul class="menu menu__left">
                  <li class="menu__element">
                    <router-link class="menu__link" to="/chefs"
                      >Chefs</router-link
                    >
                  </li>
                  <li v-if="!isAuthenticated" class="menu__element">
                    <button
                      class="menu__link button"
                      @click="openModal('Login')"
                    >
                      Login
                    </button>
                  </li>
                  <li v-if="!isAuthenticated" class="menu__element">
                    <button
                      class="menu__link button"
                      @click="openModal('Register')"
                    >
                      Register
                    </button>
                  </li>
                  <li v-else class="menu__element">
                    <router-link
                      class="menu__link"
                      :to="{
                        name: 'userEdit',
                        params: {
                          id: getCurrentProfileId ? getCurrentProfileId : 0,
                        },
                      }"
                      >Profile</router-link
                    >
                  </li>
                  <li v-if="isAuthenticated" class="menu__element">
                    <button class="menu__link button" @click="logout">
                      Log out
                    </button>
                  </li>
                  <li class="menu__element">
                    <router-link class="menu__link" to="/AboutUs"
                      >About Us</router-link
                    >
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  <LoginRegisterModal
    v-show="visible"
    :type="modalType"
    @close="close"
    @submittedModal="submit"
  >
  </LoginRegisterModal>
</template>

<script>
import LoginRegisterModal from "@/components/user/LoginRegisterModal.vue";
import { login, register } from "@/utils/user";
export default {
  name: "CommonHeaders",
  components: { LoginRegisterModal },
  data() {
    return {
      visible: false,
      modalType: "Login",
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
    openModal(type) {
      this.modalType = type;
      this.visible = true;
    },
    close() {
      this.visible = false;
    },
    submit(data) {
      if (data.Gender) {
        const user = data;
        register(user)
          .then((response) => {
            console.log(response?.data);
            this.modalType = "Login";
            this.visible = true;
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
    logout() {
      this.$store.commit("setLogOutUser");
    },
  },
};
</script>

<style lang="scss">
.header {
  padding-top: 20px;
  position: relative;
  z-index: 1;
}
.container {
  max-width: 1170px !important;
}
.logo {
  text-align: center;
  &__img {
    margin-top: -2rem;
    margin-left: -1rem;
    max-width: 125%;
  }
  &__link {
    border-bottom: 2px inset transparent !important;
    color: transparent !important;
  }
}
.nav-left {
  margin-top: 50px;
}
.menu {
  display: flex;
  justify-content: space-evenly;
  font-family: "Lora", serif;
  font-style: italic;
  font-weight: 400;
  font-size: 16px;
  text-transform: capitalize;
  padding-left: 0;
  line-height: 1.5;
  color: #333333;
  &__element {
    margin-left: 0;
    display: inline-block;
  }
  &__link {
    padding: 12px 0 !important;
    transition: none !important;
    text-decoration: none !important;
    color: #000000 !important;
    display: inline-block;
    &:hover {
      color: #f94616 !important;
    }
  }
  .button {
    border: none;
    background: none;
    &:active {
      color: #f94616 !important;
      border-bottom: 2px inset #f94616;
    }
  }
}
.router-link-active {
  color: #f94616 !important;
  border-bottom: 2px inset #f94616;
}
</style>
