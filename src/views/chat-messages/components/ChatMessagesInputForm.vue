<template>
  <form
    class="chat-messages-input-form"
    @submit.prevent="onSubmit"
  >
    <div
      :class="{ 'chat-messages-input-form__textarea-container--disabled': loading }"
      class="chat-messages-input-form__textarea-container"
    >
      <textarea
        v-model="form.text"
        :rows="1"
        :disabled="loading"
        placeholder="Введите текст..."
        class="chat-messages-input-form__textarea"
      />
    </div>

    <button
      type="submit"
      :disabled="!form.text.trim() || loading"
      class="chat-messages-input-form__button"
    >
      <spinner
        v-if="loading"
        color="white"
      />

      <div
        v-else
        class="chat-messages-input-form__button-icon"
      />
    </button>
  </form>
</template>

<script>
import Spinner from '@/components/common/Spinner.vue';


const createDefaultData = () => ({
  created: void 0,
  text: '',
  author: void 0,
  id: void 0,
});

export default {
  name: 'chat-messages-input-form',
  components: {
    Spinner,
  },
  props: {
    loading: Boolean,
  },
  data: () => ({
    form: createDefaultData(),
  }),
  methods: {
    onReset() {
      this.form = createDefaultData();
    },
    onSubmit() {
      this.$emit('submit', this.form);
    },
  },
};
</script>

<style lang="scss" src="@/assets/scss/transitions/fade.scss"></style>

<style lang="scss">

.chat-messages-input-form {
  display: flex;

  &__textarea-container {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    width: 100%;

    &--disabled {
      cursor: default;
      background-color: $color-grey-1;
    }
  }

  &__textarea {
    width: 100%;
    padding: 20px;
    padding-left: 33px;
    margin: 0;
    font-size: 14px;
    line-height: 20px;
    color: $color-grey-10;
    resize: none;
    background-color: $transparent;
    border: none;
    outline: none;

    &[disabled] {
      background-color: $color-grey-1;
    }
  }

  &__button {
    position: relative;
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
    width: $chat-message-form-height;
    height: $chat-message-form-height;
    padding: 0;
    cursor: pointer;
    background-color: $color-blue-2;
    border: none;
    transition: all 0.4s;

    &:hover {
      $color: mix($color-blue-2, $color-black, 90%);

      background-color: $color;
    }

    &[disabled] {
      cursor: default;
      background-color: $color-grey-3;
    }
  }

  &__button-icon {
    position: absolute;
    width: $chat-message-form-height;
    height: $chat-message-form-height;
    background-image: url('~@/assets/icons/send.svg');
    background-repeat: no-repeat;
    background-position: 32px center;
  }
}
</style>
