<template>
  <div class="loading">
    <img
      class="loading__img"
      src="@/assets/loading.gif"
      alt="loading..."
      width="200"
    />
    <p class="loading__text">Loading...</p>
  </div>
</template>

<script>
export default {
  name: "LoadingPage",
};
</script>
<style lang="scss">
.loading {
  text-align: center;
  &__img {
    margin-top: 10%;
  }
  &__text {
    font-family: "Lora", serif;
    font-size: 18px;
  }
}
</style>
