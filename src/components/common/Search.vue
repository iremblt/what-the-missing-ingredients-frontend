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
                  placeholder="recipe"
                />
              </label>
              <button class="search_box__form__button">
                <i
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
};
</script>
<style lang="scss">
.search_box_page {
  &__area {
    max-width: 1156px !important;
    margin-right: auto;
    margin-left: auto;
    &__bar {
      background: #6ebe3b;
      overflow: hidden;
      .search_box {
        display: flex;
        align-items: center;
        padding-left: 20px;
        height: 66px;
        background: #5eaa2e;
        &__form {
          color: #ffffff;
          font-size: 16px;
          font-family: "Lora", serif;
          font-style: italic;
          position: relative;
          margin-top: 4px;
          &__input {
            font-weight: bold;
            &__bar {
              margin-left: 10px;
              border: none;
              height: 34px;
              color: #798287;
              padding-left: 10px;
              padding-right: 34px;
            }
          }
          &__button {
            position: absolute;
            right: 0;
            height: 34px;
            background: transparent;
            border: none;
            color: #000000;
            &__icon {
            }
          }
        }
      }
    }
  }
}
</style>
