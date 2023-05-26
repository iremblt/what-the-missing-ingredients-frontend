<template>
  <div class="chef-card">
    <ul v-for="(chef, index) in chefList" :key="index">
      <li
        v-if="!(detailOpen && detailID === chef.profileID)"
        @mouseover="detailOption(true, chef.profileID)"
        @mouseleave="detailOption(false)"
      >
        <div class="chef-card__card">
          <div class="chef-card__card__image">
            <router-link
              :to="{
                name: 'userDetails',
                params: {
                  id: parseInt(chef.profileID),
                },
              }"
            >
              <img
                v-if="chef.Gender === 'Male'"
                class="chef-card__card__image__icon"
                src="@/assets/chef-man-icon.png"
                alt="default chef"
              />
              <img
                v-else
                class="chef-card__card__image__icon"
                src="@/assets/chef-woman-icon.png"
                alt="default chef"
              />
            </router-link>
          </div>
        </div>
      </li>
      <li v-if="detailOpen && detailID === chef.profileID">
        <div class="chef-card__card__details">
          <router-link
            class="chef-card__card__details__link"
            :to="{
              name: 'userDetails',
              params: {
                id: parseInt(chef.profileID),
              },
            }"
          >
            <h3 class="chef-card__card__details__header">{{ chef.name }}</h3>
            <div class="chef-card__card__details__counts">
              <div class="chef-card__card__details__counts__recipes">
                Recipes :
                <i class="fa-solid fa-utensils chef-icon"> </i>
                {{ chef.totalRecipes }}
              </div>
              <div class="chef-card__card__details__counts__recipes">
                Reviews :
                <i class="fa-solid fa-eye chef-icon"></i>
                {{ chef.totalReviews }}
              </div>
              <div class="chef-card__card__details__counts__recipes">
                Age :
                <i class="chef-icon fa-solid fa-baby-carriage"></i>
                {{ chef.Age }}
              </div>
              <div class="chef-card__card__details__counts__recipes">
                Occupation :
                <i class="chef-icon fa-solid fa-person-walking-luggage"></i>
                {{ chef.Occupation }}
              </div>
            </div>
          </router-link>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "ChefCard",
  props: {
    chefList: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      detailOpen: false,
      detailID: null,
    };
  },
  computed: {},
  methods: {
    detailOption(status, detailID) {
      this.detailID = status ? detailID : null;
      this.detailOpen = status;
    },
  },
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
    &__image {
      &__icon {
        width: 100%;
      }
    }
    &__details {
      background-color: #b9d971;
      padding: 15px;
      width: 100%;
      height: 180px;
      border-radius: 5%;
      &__header {
        text-align: center;
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
          font-size: 13px;
          color: #545252;
          padding: 2px;
          .chef-icon {
            margin-right: 1px;
            margin-left: 1px;
          }
        }
      }
      &__link {
        text-decoration: none;
        &:hover {
          text-decoration: none;
        }
      }
    }
  }
}
</style>
