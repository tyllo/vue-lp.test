<template>
  <div class="aside-menu-list">
    <div class="aside-menu-list__title">
      <span>Сообщения</span>

      <span
        v-if="count"
        class="aside-menu-list__title"
        v-text="count"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'aside-menu-list',
  props: {
    count: Number,
  },
};
</script>
