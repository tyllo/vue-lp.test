<template>
  <div class="view-chat-messages-list">
    <spinner
      v-if="isLoadingChatMessages"
      color="blue"
      class="view-chat-messages-list__spinner"
    />

    <div ref="list" class="view-chat-messages-list__list-container app-custom-scroll">
      <transition name="transition-fade" appear>
        <chat-messages-list
          v-if="!isLoadingChatMessages"
          :profile="profile"
          :list="messageList"
          class="view-chat-messages-list__list"
        />
      </transition>
    </div>

    <div class="view-chat-messages-list__form">
      <chat-messages-input-form
        ref="form"
        :loading="isLoadingChatMessageForm"
        @submit="onSubmit"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { ChatMessagesStoreModule } from './store';

import Spinner from '@/components/common/Spinner.vue';
import ChatMessagesList from './components/ChatMessagesList.vue';
import ChatMessagesInputForm from './components/ChatMessagesInputForm.vue';


export default {
  name: 'view-chat-mesages-list',
  components: {
    Spinner,
    ChatMessagesList,
    ChatMessagesInputForm,
  },
  props: {
    chat_id: {
      type: Number,
      required: true,
    },
  },
  data: () => ({
    isLoadingChatMessages: true,
    isLoadingChatMessageForm: false,
  }),
  computed: {
    ...mapGetters(['profile']),
    ...ChatMessagesStoreModule.mapState({
      messageList: 'list',
    }),
  },
  watch: {
    messageList: {
      // immediate: true,
      handler: 'scrollToBottom',
    },
  },
  created() {
    this.onGetAllMessages();
  },
  updated() {
    this.scrollToBottom();
  },
  beforeRouteUpdate(to, from, next) {
    next();
    this.$refs.form.onReset();
    this.$nextTick(this.onGetAllMessages);
  },
  methods: {
    ...ChatMessagesStoreModule.mapActions({
      getAllMessages: 'getAll',
      addMessage: 'addMessage',
    }),

    async onGetAllMessages() {
      this.isLoadingChatMessages = true;

      try {
        const params = { chat_id: this.chat_id };
        await this.getAllMessages(params);
      } catch (e) {
        // TODO: message with error
      }

      this.isLoadingChatMessages = false;
    },

    async onSubmit(form) {
      this.isLoadingChatMessageForm = true;

      try {
        const params = { ...form, chat_id: this.chat_id };
        await this.addMessage(params);
        this.$refs.form.onReset();
      } catch (e) {
        // TODO: message with error
      }

      this.isLoadingChatMessageForm = false;
    },

    scrollToBottom() {
      const { list } = this.$refs;
      list.scrollTop = list.scrollHeight;
    },
  },
};
</script>

<style lang="scss" src="@/assets/scss/transitions/fade.scss"></style>

<style lang="scss">

.view-chat-messages-list {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;

  &__list-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: calc(100% - #{$chat-message-form-height});
    padding: 16px 16px 43px 39px;
    overflow-y: auto;
  }

  &__list {
    margin-top: auto;
  }

  &__spinner {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &__form {
    border-top: 1px solid $color-grey-2;
  }
}
</style>
