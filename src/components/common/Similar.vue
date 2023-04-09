<template>
  <div>
    <div class="wrapper-slider__slider__box__text__recomendation-box">
      <span class="title">Similiar Recipes</span>
      <ul class="list">
        <li class="list__item">
          <router-link to="/recipe/detail/2">
            <img
              class="list__item__image"
              src="https://images.media-allrecipes.com/userphotos/560x315/4465807.jpg"
            />
          </router-link>
        </li>
        <li class="list__item">
          <router-link to="/recipe/detail/2">
            <img
              class="list__item__image"
              src="https://images.media-allrecipes.com/userphotos/560x315/4465807.jpg"
            />
          </router-link>
        </li>
        <li class="list__item">
          <router-link to="/recipe/detail/2">
            <img
              class="list__item__image"
              src="https://images.media-allrecipes.com/userphotos/560x315/4465807.jpg"
            />
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "SimilarModel",
};
</script>
<style scoped></style>
