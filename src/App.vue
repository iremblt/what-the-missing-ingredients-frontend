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
};
</script>

<style></style>
