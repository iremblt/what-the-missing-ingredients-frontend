<template>
  <div class="recomendation-search">
    <p class="recomendation-search__title">
      We will recommend best recipes for your ingredients
    </p>
    <div class="recomendation-search__area">
      <input
        class="recomendation-search__area__input"
        type="text"
        :value="ingredients"
        placeholder="You can choose your or manually add your ingredients"
      />
      <button @click="search" class="recomendation-search__area__button">
        <i
          class="recomendation-search__area__button__icon fa-solid fa-magnifying-glass"
        ></i>
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: "RecommendationSearch",
  props: {
    ingredients: {
      type: String,
      default: "",
    },
  },
  data() {
    return {};
  },
  methods: {
    search() {
      this.$emit("search", this.ingredients);
    },
  },
};
</script>
<style lang="scss">
.recomendation-search {
  padding-top: 64px;
  max-width: 1170px !important;
  margin-right: auto;
  margin-left: auto;
  padding-left: 15px;
  padding-right: 15px;
  font-family: "Raleway", sans-serif;
  &__title {
    font-size: 22px;
    font-weight: 900;
    margin-bottom: 2rem;
    text-align: center;
    color: #f94616;
  }
  &__area {
    display: flex;
    &__input {
      width: 100%;
      padding: 12px 24px;
      font-size: 14px;
      color: #575756;
      border-radius: 100px;
      border: 1px solid #575756;
      transition: all 250ms ease-in-out;
      pointer-events: none;
      &::placeholder {
        color: color(#575756 a(0.8));
        text-transform: uppercase;
        letter-spacing: 1.5px;
      }
    }
    &__button {
      font-size: 16px;
      border: none;
      background: transparent;
    }
  }
}
</style>
