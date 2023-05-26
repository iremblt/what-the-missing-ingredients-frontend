<template>
  <div>
    <div class="add-recipe-section">
      <div class="add-recipe-section__container">
        <div class="add-recipe-section__container__area">
          <div class="add-recipe-text-area">
            <div class="add-recipe-text">
              <h2 class="add-recipe-text__title">
                If you say I have a very good recipe and I want everyone to know
                this recipe, share this recipe with us!
              </h2>
            </div>
            <div class="add-recipe-button">
              <button
                class="add-recipe-button__text"
                @click="$router.push('/recipe/add')"
              >
                Add Recipe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ChefIntroduction",
};
</script>

<style lang="scss">
.add-recipe-section {
  &__container {
    max-width: 1156px;
    margin-right: auto;
    margin-left: auto;
    &__area {
      background: #c0dc8a;
      padding: 16px 25px 16px 30px;
      .add-recipe-text-area {
        display: flex;
        justify-content: space-around;
        .add-recipe-text {
          &__title {
            font-family: "Lora", serif;
            font-style: italic;
            font-weight: bold;
            font-size: 17px;
            margin: 10px;
          }
        }
        .add-recipe-button {
          &__text {
            background-color: #ebc692;
            border: 1px solid #ebc692;
            border-radius: 13%;
            font-family: "Lora", serif;
            font-style: italic;
            height: 40px;
            font-size: 16px;
            &:hover {
              background-color: #ffff;
              color: #f94616;
              border: 1px solid #f94616;
            }
          }
        }
      }
    }
  }
}
</style>
