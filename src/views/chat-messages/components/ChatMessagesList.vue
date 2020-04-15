<template>
  <transition-group
    tag="div"
    name="chat-messages-list--transition"
    class="chat-messages-list"
  >
    <template v-for="item in list">
      <section
        :key="item.id"
        :class="{
          'chat-messages-list__item': true,
          'chat-messages-list__item--self': profile.id === item.author,
        }"
      >
        <chat-messages-message
          :self="profile.id === item.author"
          v-bind="item"
        />
      </section>
    </template>
  </transition-group>
</template>

<script>
import ChatMessagesMessage from './ChatMessagesMessage.vue';


export default {
  name: 'chat-messages-list',
  components: {
    ChatMessagesMessage,
  },
  props: {
    profile: Object,
    list: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss">

.chat-messages-list {
  display: flex;
  flex-direction: column;

  &--transition {
    &-enter-active,
    &-leave-active {
      transition: all 0.5s;
    }

    &-enter,
    &-leave-to {
      opacity: 0;
      transform: translateY(-50%);
    }
  }

  &__item {
    width: 380px;
    max-width: 100%;

    & + & {
      margin-top: 20px;
    }

    &--self {
      margin-left: auto;
    }
  }
}
</style>

// for transition
<style lang="scss">
  .messages {

  }
</style>
