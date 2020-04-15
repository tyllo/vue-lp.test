<template>
  <div
    class="chat-messages-message"
    :class="{ 'chat-messages-message--self': self }"
  >
    <main
      class="chat-messages-message__text"
      :class="{ 'chat-messages-message__text--self': self }"
      v-text="text"
    />

    <footer class="chat-messages-message__footer">
      <span class="chat-messages-message__author">
        {{ author }}
      </span>

      <span class="chat-messages-message__date">
        {{ date }}
      </span>
    </footer>
  </div>
</template>

<script>
import moment from 'moment';


const DATE_FORMAT = 'D.MM.YYYY HH:mm';

export default {
  name: 'chat-messages-message',
  props: {
    self: Boolean,
    created: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
  },
  computed: {
    date() {
      return moment(this.created).format(DATE_FORMAT);
    },
  },
};
</script>

<style lang="scss">

.chat-messages-message {
  &__text {
    padding: 16px;
    padding-left: 22px;
    word-break: break-word;
    background: $chat-message-bg-color;
    border-radius: 8px 8px 8px 0;

    &--self {
      background: $chat-message-self-bg-color;
      border-radius: 8px 8px 8px 0;
    }
  }

  &__footer {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: 9px;
  }

  &__author {
    font-size: 13px;
    font-weight: bold;
    line-height: 18px;
    color: $color-black;
  }

  &__date {
    margin-left: 8px;
    font-size: 10px;
    line-height: 14px;
    color: $color-grey-4;
  }
}
</style>
