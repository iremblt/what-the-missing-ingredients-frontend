<template>
  <headers />
  <router-view />
  <scroll />
  <footter />
</template>

<script>
import Footter from "./components/common/Footter.vue";
import Headers from "./components/common/Headers.vue";
import Scroll from "./components/common/Scroll.vue";

export default {
  name: "App",
  components: {
    Headers,
    Footter,
    Scroll,
  },
  mounted() {
    this.$router.beforeEach((to, from, next) => {
      const requiresAuth = to.matched.some((route) => route.meta.requiresAuth);
      if (requiresAuth && !this.isAuthenticated) {
        if (to === "userEdit") {
          if (this.getCurrentProfileId !== this.$route.params.id) {
            next("/");
          }
        } else {
          next("/");
        }
      } else {
        next();
      }
    });
  },
  computed: {
    isAuthenticated() {
      return this.$store.getters._isAuthenticated;
    },
    getCurrentProfileId() {
      return this.$store.getters._getCurrentUser?.profileID;
    },
  },
};
</script>

<style></style>
