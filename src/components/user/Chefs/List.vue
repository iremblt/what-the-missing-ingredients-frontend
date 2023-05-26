<template>
  <div>
    <BannerPage title="Our Chefs" background-image-type="chefs-banner" />
    <Search searchType="chef" @searched="searched($event)" />
    <div v-if="isLoading"><LoadingPage /></div>
    <div v-else class="chefs">
      <div class="chefs__chef-list">
        <div class="row">
          <div class="col-md-8 col-lg-9">
            <h2 class="chefs__chef-list__header">Chef Lists</h2>
            <p class="chefs__chef-list__sub">
              To become a chef, you do not need to go to a course and become a
              chef by profession. If you love to cook and share it with us, you
              are now a chef!
            </p>
            <br />
            <ChefCard :chef-list="chefList" />
          </div>
          <div class="col-md-4 col-lg-3">
            <SideBar :mostPopular="getMostPopularRecipes" />
          </div>
        </div>
        <div class="pagination chefs__chef-list__pagination">
          <vue-awesome-paginate
            :total-items="totalPage"
            :items-per-page="PageNumberPerPage"
            :max-pages-shown="5"
            v-model="PageSize"
            :on-click="pageChanged"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BannerPage from "@/components/common/Banner.vue";
import SideBar from "@/components/common/SideBar.vue";
import Search from "@/components/common/Search.vue";
import ChefCard from "./ChefCard.vue";
import LoadingPage from "@/components/common/Loading.vue";
import { getMostPopularRecipeListWithPagination } from "@/utils/recipe";
import {
  searchByChefName,
  getChefListWithPagination,
  getAllChefList,
} from "@/utils/user";
export default {
  name: "ChefList",
  components: { BannerPage, Search, SideBar, ChefCard, LoadingPage },
  data() {
    return {
      isLoading: false,
      chefList: [],
      PageSize: 1,
      PageNumberPerPage: 12,
      totalPage: 0,
      isSearched: false,
    };
  },
  async created() {
    this.isLoading = true;
    await this.getAllChefs();
    if (this.chefList.length === 0) {
      this.isLoading = true;
      await this.getPaginationChefList();
    }
    if (this.getMostPopularRecipes.length === 0) {
      this.isLoading = true;
      await this.getPopularRecipeList();
    }
  },
  computed: {
    getMostPopularRecipes() {
      return this.$store.getters._getPopularRecipeList
        ? this.$store.getters._getPopularRecipeList
        : [];
    },
  },
  methods: {
    async searched(user) {
      this.isLoading = true;
      this.isSearched = true;
      user !== ""
        ? await this.userSearch(user)
        : await this.getPaginationChefList();
    },
    async userSearch(user) {
      await searchByChefName({
        name: user,
      })
        .then((response) => {
          this.PageSize = 1;
          this.chefList = response?.data || [];
          this.isLoading = false;
        })
        .catch((error) => console.error(error));
    },
    async getAllChefs() {
      await getAllChefList()
        .then((response) => {
          this.totalPage = response.data?.length;
          this.isLoading = false;
        })
        .catch((error) => console.error(error));
    },
    async getPopularRecipeList() {
      return await getMostPopularRecipeListWithPagination({
        PageSize: 1,
        PageNumberPerPage: 5,
      })
        .then((response) => {
          this.$store.commit("setPopularRecipeList", response?.data);
          this.isLoading = false;
        })
        .catch((error) => console.error(error));
    },
    async getPaginationChefList() {
      return await getChefListWithPagination({
        PageSize: this.PageSize,
        PageNumberPerPage: this.PageNumberPerPage,
      })
        .then((response) => {
          this.chefList = response?.data;
          this.isLoading = false;
        })
        .catch((error) => console.error(error));
    },
    async pageChanged(page) {
      this.PageSize = page;
      this.isLoading = true;
      await this.getPaginationChefList();
    },
  },
};
</script>
<style lang="scss">
.chefs {
  padding-top: 42px;
  background: #f5f5f5;
  padding-bottom: 85px;
  &__chef-list {
    max-width: 1170px !important;
    margin-right: auto;
    margin-left: auto;
    padding-left: 15px;
    padding-right: 15px;
    overflow: hidden;
    &__header {
      font-family: "Lora", serif;
      font-weight: bold;
      margin-bottom: 1rem;
      font-size: 23px;
    }
    &__sub {
      font-family: "Lora", serif;
      margin-bottom: 1rem;
      line-height: 23px;
      font-size: 13px;
      font-style: italic;
      color: #4e504e;
    }
    &__pagination {
      justify-content: center;
      margin-top: 6rem;
    }
  }
}
</style>
