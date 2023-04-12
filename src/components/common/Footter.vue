<template>
  <div class="container">
    <div class="footter-section">
      <div class="footter-section__container">
        <div class="footter-section__container__area">
          <div class="footter-logo">
            <div class="footter-logo__logo">
              <router-link to="/" class="logo__link">
                <img class="logo__img img" src="@/assets/Logo.png" />
              </router-link>
            </div>
            <p class="footter-logo__text">
              Aren't you tired of looking for another recipe when you look at
              every recipe and realize that it doesn't match your ingredients at
              home? We are putting an end to this situation. With our suggestion
              system, you can find the recipe that matches your ingredients at
              home.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "CommonFootter",
};
</script>
<style lang="scss">
.container {
  max-width: 1170px !important;
  margin-right: auto;
  margin-left: auto;
  padding-left: 15px;
  padding-right: 15px;
  .footter-section {
    display: flex;
    justify-content: center;
    background-size: cover;
    background-position: center;
    background-image: url("@/assets/footter.jpg");
    &__container {
      width: 56%;
      &__area {
        background: #d4c0b794;
        .footter-logo {
          &__logo {
            text-align: center;
            height: 145px;
            .img {
              width: 28%;
            }
          }
          &__text {
            color: black;
            font-weight: 500;
            font-size: 12px;
            line-height: 20px;
            padding: 0 9rem;
          }
        }
      }
    }
  }
}
</style>
