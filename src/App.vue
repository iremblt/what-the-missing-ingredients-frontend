<template>
  <headers />
  <router-view />
</template>

<script>
import Headers from "./components/common/Headers.vue";

export default {
  name: "App",
  components: {
    Headers,
  },
};
</script>

<style></style>
