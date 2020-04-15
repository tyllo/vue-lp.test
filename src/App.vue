<template>
  <div id="app" class="app">
    <aside class="app__aside">
      <router-view name="aside" />
    </aside>

    <main class="app__main">
      <router-view name="main" />
    </main>
  </div>
</template>

<script>
import { mapActions } from 'vuex';


export default {
  name: 'app',
  created() {
    this.getProfile();
  },
  methods: {
    ...mapActions(['getProfile']),
  },
};
</script>

<style lang="scss">

.app {
  display: flex;
  flex-wrap: wrap;
  min-height: 100%;

  &__aside {
    width: $aside-width;
    background-color: $color-grey-1;
  }

  &__main {
    z-index: 10;
    display: flex;
    flex-grow: 1;
    flex-wrap: wrap;
    max-width: calc(100% - #{$aside-width});
    background-color: $color-white;
    box-shadow: 0 0 20px rgba($color-black, 0.1);
  }
}
</style>
