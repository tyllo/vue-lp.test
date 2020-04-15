<template>
  <div class="view-chats-list">
    <div
      class="view-chats-list__title"
    >
      <span
        class="view-chats-list__title-text"
        v-text="'Сообщения'"
      />

      <transition name="transition-fade" appear>
        <span
          v-if="countUnreadMessages"
          :key="countUnreadMessages"
          class="view-chats-list__title-counter"
          v-text="countUnreadMessages"
        />
      </transition>
    </div>

    <spinner
      v-if="isLoadingChats"
      color="grey-4"
      class="view-chats-list__spinner"
    />

    <div class="view-chats-list__list app-custom-scroll">
      <transition name="transition-fade" appear>
        <aisde-menu-chat-list
          v-if="chatList"
          :list="chatList"
        />
      </transition>
    </div>
  </div>
</template>

<script>
import { ChatsStoreModule } from './store';

import Spinner from '@/components/common/Spinner.vue';
import AisdeMenuChatList from './components/ChatList.vue';


export default {
  name: 'view-chats-list',
  components: {
    Spinner,
    AisdeMenuChatList,
  },
  data: () => ({
    isLoadingChats: true,
  }),
  computed: {
    ...ChatsStoreModule.mapState({
      chatList: 'list',
      countUnreadMessages: 'countUnreadMessages',
    }),
  },
  created() {
    this.onGetAllChats();
    this.getCountUnreadMessages();
  },
  methods: {
    ...ChatsStoreModule.mapActions({
      getAllChats: 'getAll',
      getCountUnreadMessages: 'getCountUnreadMessages',
    }),

    async onGetAllChats() {
      this.isLoadingChats = true;

      try {
        await this.getAllChats();
      } catch (e) {
        // TODO: message with error
      }

      this.isLoadingChats = false;
    },
  },
};
</script>

<style lang="scss" src="@/assets/scss/transitions/fade.scss"></style>

<style lang="scss">

$title-height: 70px;

.view-chats-list {
  position: relative;
  height: 100vh;

  &__title {
    height: $title-height;
    padding: 24px 20px;
  }

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

  &__spinner {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &__list {
    max-height: calc(100% - #{$title-height});
    overflow-y: auto;
  }
}
</style>
