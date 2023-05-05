<template>
  <div class="search_box_page">
    <div class="search_box_page__area">
      <div class="search_box_page__area__bar">
        <div class="search_box">
          <form @submit.prevent="submitSearch">
            <div class="search_box__form">
              <span>Search</span>
              <label for="search_box__form__input">
                <input
                  type="search"
                  id="search_box__form__input"
                  class="search_box__form__input__bar"
                  :placeholder="searchType"
                  v-model="text"
                />
              </label>
              <button class="search_box__form__button">
                <i
                  v-if="searchType === 'chef'"
                  class="search_box__form__button__icon fa-solid fa-user"
                ></i>
                <i
                  v-else
                  class="search_box__form__button__icon fa-solid fa-pepper-hot"
                ></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "SearchBox",
  props: {
    searchType: {
      type: String,
      default: "recipe",
    },
  },
  data() {
    return {
      text: "",
    };
  },
  methods: {
    submitSearch() {
      this.$emit("searched", this.text);
    },
  },
};
</script>
<style lang="scss">
.search_box_page {
  border-bottom: 1px solid #b9d971;
  border-radius: 8px;
  &__area {
    max-width: 1150px !important;
    margin-right: auto;
    margin-left: auto;
    &__bar {
      .search_box {
        display: flex;
        align-items: center;
        padding-left: 6px;
        height: 74px;
        &__form {
          font-size: 17px;
          font-family: "Lora", serif;
          font-style: italic;
          position: relative;
          margin-top: 4px;
          font-weight: bold;
          &__input {
            font-weight: bold;
            &__bar {
              margin-left: 30px;
              height: 39px;
              border-radius: 20px;
              border: 2px solid #b9d971;
              padding-left: 30px;
            }
          }
          &__button {
            position: absolute;
            right: 10px;
            height: 39px;
            background: transparent;
            border: none;
            color: #e52d2d;
          }
        }
      }
    }
  }
}
</style>
