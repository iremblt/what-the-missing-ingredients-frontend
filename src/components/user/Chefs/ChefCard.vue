<template>
  <div class="chef-card">
    <ul>
      <li>
        <div class="chef-card__card">
          <div class="chef-card__card__image">
            <router-link
              :to="{
                name: 'userDetails',
                params: {
                  id: parseInt('firstRecipe.Author'),
                },
              }"
            >
              <img
                class="chef-card__card__image__icon"
                src="@/assets/chef-man-icon.png"
                alt="default chef"
              />
            </router-link>
          </div>
          <div class="chef-card__card__details">
            <h3 class="chef-card__card__details__header">İrem Bulut</h3>
            <div class="chef-card__card__details__counts">
              <div class="chef-card__card__details__counts__recipes">
                Recipes :
                <i class="fa-solid fa-utensils chef-icon"> </i>
                20
              </div>
              <div class="chef-card__card__details__counts__recipes">
                Reviews :
                <i class="fa-solid fa-eye chef-icon"></i>
                200
              </div>
            </div>
          </div>
        </div>
      </li>
      <li>
        <div class="chef-card__card">
          <div class="chef-card__card__image">
            <router-link
              :to="{
                name: 'userDetails',
                params: {
                  id: parseInt('firstRecipe.Author'),
                },
              }"
            >
              <img
                class="chef-card__card__image__icon"
                src="@/assets/chef-man-icon.png"
                alt="default chef"
              />
            </router-link>
          </div>
          <div class="chef-card__card__details">
            <h3 class="chef-card__card__details__header">Test Bulut</h3>
            <div class="chef-card__card__details__counts">
              <div class="chef-card__card__details__counts__recipes">
                Recipes :
                <i class="fa-solid fa-utensils chef-icon"> </i>
                20
              </div>
              <div class="chef-card__card__details__counts__recipes">
                Reviews :
                <i class="fa-solid fa-eye chef-icon"></i>
                200
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "ChefCard",
  data() {
    return {};
  },
  computed: {},
  methods: {},
};
</script>
<style lang="scss">
.chef-card {
  li {
    list-style: none;
    margin-bottom: 30px;
    float: left;
    margin-left: 2rem;
    width: 22%;
  }
  &__card {
    display: flex;
    &__image {
      &__icon {
        width: 100%;
      }
    }
    &__details {
      background-color: #b9d971;
      padding: 12px;
      width: 570px;
      border-radius: 5%;
      &__header {
        font-size: 15px;
        color: white;
        font-family: "Lora", serif;
        font-weight: bold;
      }
      &__about {
        font-size: 12px;
        color: black;
        line-height: 18px;
        font-family: "Lora", serif;
      }
      &__counts {
        &__recipes {
          font-size: 10px;
          color: #545252;
          .chef-icon {
            margin-right: 1px;
            margin-left: 1px;
          }
        }
      }
    }
  }
}
</style>
