<template>
  <div class="aside-menu">
    <div class="aside-menu__title">
      <span
        class="aside-menu__title-text"
        v-text="'Сообщения'"
      />

      <span
        v-if="count"
        class="aside-menu__title-counter"
        v-text="count"
      />
    </div>
  </div>
</template>

<script>


export default {
  name: 'aside-menu',
  props: {
  },
  computed: {
    count() {
      return 151;
    },
  },
};
</script>

<style lang="scss">

.aside-menu {
  padding: 24px 20px;
  // border-bottom: 1px solid $color-grey-2;

  &__title-text {
    font-size: 14px;
    line-height: 20px;
    color: $color-grey-5;
  }

  &__title-counter {
    margin-left: 10px;
    font-weight: bold;
    color: $color-grey-3;
  }
}
</style>
