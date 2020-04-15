<template>
  <nav class="chats-list">
    <template v-for="item in list">
      <router-link
        :key="item.id"
        :to="getRouteToMesages(item)"
        class="chats-list__item"
      >
        <chats-item
          v-bind="item"
        />
      </router-link>
    </template>
  </nav>
</template>

<script>
import * as ROUTES from '@/helpers/enums/routes';

import ChatsItem from './ChatsItem.vue';


export default {
  name: 'chats-list',
  components: {
    ChatsItem,
  },
  props: {
    list: {
      type: Array,
      required: true,
    },
  },
  methods: {
    getRouteToMesages(data) {
      return {
        name: ROUTES.CHAT_MESSAGES.LAYOUT,
        params: { chat_id: data.id },
      };
    },
  },
};
</script>

<style lang="scss">

.chats-list {
  &__item {
    display: block;
    padding: 21px 23px;
    text-decoration: none;
    border-top: 1px solid $color-grey-2;
    border-left: 2px solid $transparent;
    transition: all 0.4s;

    &:last-child {
      border-bottom: 1px solid $color-grey-2;
    }

    &:hover {
      background-color: $color-white;
    }

    &.router-link-active {
      cursor: default;
      background-color: $color-white;
      border-left-color: $color-blue-2;
    }
  }
}
</style>
