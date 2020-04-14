<template>
  <div id="app" class="app">
    <aside class="app__aside">
      <aisde-menu />
    </aside>

    <main class="app__main">
      <router-view />
    </main>
  </div>
</template>

<script>
import AisdeMenu from '@/components/common/AisdeMenu/AisdeMenu.vue';


export default {
  name: 'app',
  components: {
    AisdeMenu,
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
    display: flex;
    flex-grow: 1;
    flex-wrap: wrap;
    background-color: $color-white;
    box-shadow: 0 0 20px rgba($color-black, 0.1);
  }
}
</style>
