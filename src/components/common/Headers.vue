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
                  <li class="menu__element">
                    <router-link class="menu__link" to="/AboutUs"
                      >About Us</router-link
                    >
                  </li>
                  <li class="menu__element">
                    <router-link class="menu__link" to="/login"
                      >Login</router-link
                    >
                  </li>
                  <li class="menu__element">
                    <router-link class="menu__link" to="/register"
                      >Register
                    </router-link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "CommonHeaders",
  data() {
    return {};
  },
  computed: {},
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
}
.router-link-active {
  color: #f94616 !important;
  border-bottom: 2px inset #f94616;
}
</style>
