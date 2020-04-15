<template>
  <div class="aside-menu-chat-item">
    <header class="aside-menu-chat-item__header">
      <span
        class="aside-menu-chat-item__subject aside-menu-chat-item__subject--one-line"
        v-text="subject"
      />

      <span
        class="aside-menu-chat-item__date"
        v-text="date"
      />
    </header>

    <main class="aside-menu-chat-item__main">
      <span
        class="aside-menu-chat-item__text aside-menu-chat-item__text--two-lines"
        v-text="last_part.text"
      />
    </main>
  </div>
</template>

<script>
import moment from 'moment';


const DATE_FORNAT = 'D MMMM YYYY';

export default {
  name: 'aside-menu-chat-list-item',
  props: {
    created: {
      type: String,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    last_part: {
      type: Object,
      required: true,
    },

  },
  computed: {
    date() {
      return moment(this.created).format(DATE_FORNAT);
    },
  },
};
</script>

<style lang="scss">

.aside-menu-chat-item {
  &__header {
    display: flex;
    align-items: center;
  }

  &__subject {
    $line-height: 20px;

    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
    font-size: 14px;
    font-weight: bold;
    line-height: $line-height;
    color: $color-grey-9;

    &--one-line {
      display: -webkit-box;
      max-height: $line-height * 1;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
    }
  }

  &__date {
    flex: 0 0 auto;
    width: auto;
    margin-left: 8px;
    font-size: 10px;
    line-height: 14px;
    color: $color-grey-4;
  }

  &__text {
    $line-height: 18px;

    font-size: 13px;
    line-height: $line-height;
    color: $color-grey-10;

    &--two-lines {
      display: -webkit-box;
      max-height: $line-height * 2;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
    }
  }
}
</style>
