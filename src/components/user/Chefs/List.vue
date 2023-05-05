<template>
  <div>
    <BannerPage title="Our Chefs" background-image-type="chefs-banner" />
    <Search searchType="chef" @searhed="searhed($event)" />
    <div class="chefs">
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
            <ChefCard />
          </div>
          <div class="col-md-4 col-lg-3">
            <SideBar :mostPopular="mostPopular" />
          </div>
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
export default {
  name: "ChefList",
  components: { BannerPage, Search, SideBar, ChefCard },
  methods: {
    searched(data) {
      console.log(data);
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
  }
}
</style>
